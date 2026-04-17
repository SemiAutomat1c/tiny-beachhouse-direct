import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { differenceInCalendarDays, format, parseISO, isValid } from "date-fns";
import { nl as nlLocale, enUS } from "date-fns/locale";
import {
  Check, ChevronDown, Wallet, MessageCircle, PawPrint, Mail, ArrowRight, ArrowLeft,
} from "lucide-react";
import { RangeCalendar } from "@/components/site/RangeCalendar";
import { cn } from "@/lib/utils";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/i18n/I18nContext";
import type { TranslationKey } from "@/i18n/translations";

const NIGHTLY_RATE = 150; // EUR placeholder
const CLEANING_FEE = 45;

type Step = 1 | 2 | 3 | 4;

interface Details {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  adults: number;
  children: number;
  notes: string;
  arrival: string;
  pets: boolean;
  agree: boolean;
}

const Boeken = () => {
  const { t, lang } = useI18n();
  const dateLocale = lang === "nl" ? nlLocale : enUS;
  const [params] = useSearchParams();
  const [step, setStep] = useState<Step>(1);

  const initIn = params.get("in");
  const initOut = params.get("out");
  const initGuests = Number(params.get("guests")) || 2;

  const [checkIn, setCheckIn] = useState<Date | null>(
    initIn && isValid(parseISO(initIn)) ? parseISO(initIn) : null
  );
  const [checkOut, setCheckOut] = useState<Date | null>(
    initOut && isValid(parseISO(initOut)) ? parseISO(initOut) : null
  );

  const [details, setDetails] = useState<Details>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "Netherlands",
    adults: initGuests,
    children: 0,
    notes: "",
    arrival: "16:00",
    pets: false,
    agree: false,
  });

  const nights = useMemo(
    () => (checkIn && checkOut ? Math.max(1, differenceInCalendarDays(checkOut, checkIn)) : 0),
    [checkIn, checkOut]
  );

  const subtotal = nights * NIGHTLY_RATE;
  const total = nights > 0 ? subtotal + CLEANING_FEE : 0;

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const canStep2 = checkIn && checkOut && nights >= 1;
  const canStep3 =
    details.firstName.trim() &&
    details.lastName.trim() &&
    /^\S+@\S+\.\S+$/.test(details.email) &&
    details.phone.trim() &&
    details.agree;

  const handleSubmit = async () => {
    if (!canStep3 || !checkIn || !checkOut) return;
    setSubmitting(true);
    setSubmitError(null);
    const payload = {
      _subject: `Booking Request: ${details.firstName} ${details.lastName} — ${format(checkIn, "yyyy-MM-dd")} to ${format(checkOut, "yyyy-MM-dd")}`,
      checkIn: format(checkIn, "yyyy-MM-dd"),
      checkOut: format(checkOut, "yyyy-MM-dd"),
      nights,
      total: `€${total}`,
      ...details,
    };
    try {
      // TODO (owner): Replace with actual Formspree endpoint:
      // const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json", Accept: "application/json" },
      //   body: JSON.stringify(payload),
      // });
      // if (!res.ok) throw new Error("Failed");
      console.log("[Booking submission]", payload);
      await new Promise((r) => setTimeout(r, 800));
      setStep(4);
    } catch {
      setSubmitError("Something went wrong. Please email us directly at hello@tinybeachhouse.nl");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-sand pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-narrow text-center">
          <p className="eyebrow text-dune mb-3">Direct Boeken</p>
          <h1 className="display-italic text-display text-sand">
            Book direct. <br />
            <span className="text-dune">Best rate. Personal service.</span>
          </h1>
          <p className="mt-6 text-sand/75 max-w-xl mx-auto">
            Skip the platform — book directly with us and enjoy the best available rate.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 md:py-20">
        <div className="container-narrow">
          {step !== 4 && (
            <Stepper current={step} />
          )}

          <div className="mt-10 bg-card rounded-2xl shadow-lift p-6 md:p-10">
            {step === 1 && (
              <div>
                <h2 className="font-display text-2xl text-navy mb-2">Select your dates & guests</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Single-unit property. If your dates show as unavailable, please email us directly.
                </p>

                <RangeCalendar
                  checkIn={checkIn}
                  checkOut={checkOut}
                  onChange={({ checkIn, checkOut }) => {
                    setCheckIn(checkIn);
                    setCheckOut(checkOut);
                  }}
                  monthsToShow={1}
                />

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <Field label="Adults">
                    <NumberStepper
                      value={details.adults}
                      onChange={(v) => setDetails((d) => ({ ...d, adults: v }))}
                      min={1}
                      max={4}
                    />
                  </Field>
                  <Field label="Children">
                    <NumberStepper
                      value={details.children}
                      onChange={(v) => setDetails((d) => ({ ...d, children: v }))}
                      min={0}
                      max={2}
                    />
                  </Field>
                </div>

                <p className="mt-5 text-xs text-muted-foreground">
                  Minimum 1 night. Weekend stays from 2 nights.
                </p>

                {nights > 0 && (
                  <div className="mt-6 bg-sand-deep rounded-xl p-5 text-sm space-y-2">
                    <Row label={`€${NIGHTLY_RATE} × ${nights} ${nights === 1 ? "night" : "nights"}`} value={`€${subtotal}`} />
                    <Row label="Cleaning fee" value={`€${CLEANING_FEE}`} />
                    <div className="border-t border-dune/40 pt-2 mt-2">
                      <Row label={<span className="font-medium text-navy">Total (excl. tourist tax)</span>} value={<span className="font-medium text-navy">€{total}</span>} />
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-end">
                  <button
                    disabled={!canStep2}
                    onClick={() => setStep(2)}
                    className={cn(
                      "inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium transition",
                      canStep2
                        ? "bg-navy text-sand hover:bg-navy-soft"
                        : "bg-muted text-muted-foreground cursor-not-allowed"
                    )}
                  >
                    Continue to details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="font-display text-2xl text-navy mb-6">Your details</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="First name" required>
                    <Input value={details.firstName} onChange={(v) => setDetails((d) => ({ ...d, firstName: v }))} />
                  </Field>
                  <Field label="Last name" required>
                    <Input value={details.lastName} onChange={(v) => setDetails((d) => ({ ...d, lastName: v }))} />
                  </Field>
                  <Field label="Email" required>
                    <Input type="email" value={details.email} onChange={(v) => setDetails((d) => ({ ...d, email: v }))} />
                  </Field>
                  <Field label="Phone" required>
                    <Input type="tel" value={details.phone} onChange={(v) => setDetails((d) => ({ ...d, phone: v }))} />
                  </Field>
                  <Field label="Country">
                    <Select value={details.country} onChange={(v) => setDetails((d) => ({ ...d, country: v }))}
                      options={["Netherlands", "Belgium", "Germany", "France", "United Kingdom", "United States", "Other"]}
                    />
                  </Field>
                  <Field label="Estimated arrival">
                    <Select
                      value={details.arrival}
                      onChange={(v) => setDetails((d) => ({ ...d, arrival: v }))}
                      options={["15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "Later — I'll contact you"]}
                    />
                  </Field>
                  <Field label="Special requests" className="sm:col-span-2">
                    <textarea
                      rows={4}
                      value={details.notes}
                      onChange={(e) => setDetails((d) => ({ ...d, notes: e.target.value }))}
                      maxLength={1000}
                      className="w-full bg-sand-deep border-0 rounded-lg px-4 py-3 text-navy focus:ring-2 focus:ring-navy/20 focus:outline-none"
                      placeholder="Champagne on arrival, late check-in, special occasion..."
                    />
                  </Field>
                </div>

                <div className="mt-6 space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={details.pets}
                      onChange={(e) => setDetails((d) => ({ ...d, pets: e.target.checked }))}
                      className="w-4 h-4 accent-navy"
                    />
                    <span className="text-sm text-navy/85 inline-flex items-center gap-2">
                      <PawPrint className="w-4 h-4" /> I'm bringing a pet (free of charge)
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={details.agree}
                      onChange={(e) => setDetails((d) => ({ ...d, agree: e.target.checked }))}
                      className="w-4 h-4 mt-0.5 accent-navy"
                    />
                    <span className="text-sm text-navy/85">
                      I agree to the cancellation policy and house rules. <span className="text-destructive">*</span>
                    </span>
                  </label>
                </div>

                <div className="mt-8 flex justify-between gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-2 text-navy/70 hover:text-navy text-sm"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <button
                    disabled={!canStep3}
                    onClick={() => setStep(3)}
                    className={cn(
                      "inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium transition",
                      canStep3
                        ? "bg-navy text-sand hover:bg-navy-soft"
                        : "bg-muted text-muted-foreground cursor-not-allowed"
                    )}
                  >
                    Review booking <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && checkIn && checkOut && (
              <div>
                <h2 className="font-display text-2xl text-navy mb-6">Review & confirm</h2>
                <div className="bg-sand-deep rounded-xl p-6 space-y-4 text-sm">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <SummaryItem label="Check-in" value={format(checkIn, "EEE, MMM d, yyyy")} />
                    <SummaryItem label="Check-out" value={format(checkOut, "EEE, MMM d, yyyy")} />
                    <SummaryItem label="Guests" value={`${details.adults} adult${details.adults !== 1 ? "s" : ""}${details.children ? `, ${details.children} children` : ""}${details.pets ? ", + pet" : ""}`} />
                    <SummaryItem label="Arrival" value={details.arrival} />
                    <SummaryItem label="Guest" value={`${details.firstName} ${details.lastName}`} />
                    <SummaryItem label="Contact" value={details.email} />
                  </div>
                  <div className="border-t border-dune/40 pt-4 space-y-2">
                    <Row label={`€${NIGHTLY_RATE} × ${nights} nights`} value={`€${subtotal}`} />
                    <Row label="Cleaning fee" value={`€${CLEANING_FEE}`} />
                    <Row label={<span className="font-medium text-navy">Total</span>} value={<span className="font-medium text-navy">€{total}</span>} />
                  </div>
                </div>

                <div className="mt-6 bg-dune/20 rounded-xl p-5 text-sm text-navy/85 leading-relaxed">
                  <Wallet className="w-4 h-4 inline mr-2" />
                  After confirming, you'll receive a payment request via email. We accept bank transfer and credit card.
                  Full prepayment is required for stays under 7 days.
                </div>

                {submitError && (
                  <p className="mt-4 text-sm text-destructive">{submitError}</p>
                )}

                <div className="mt-8 flex justify-between gap-3">
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 text-navy/70 hover:text-navy text-sm"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <button
                    disabled={submitting}
                    onClick={handleSubmit}
                    className="bg-navy text-sand px-8 py-3.5 rounded-full font-medium hover:bg-navy-soft transition disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Confirm reservation"}
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-seafoam/40 flex items-center justify-center mb-5">
                  <Check className="w-8 h-8 text-navy" />
                </div>
                <h2 className="display-italic text-h1 text-navy">Reservation request received</h2>
                <p className="mt-4 text-navy/75 max-w-md mx-auto">
                  Thank you, <strong>{details.firstName}</strong>. We'll confirm your booking within 24 hours by email.
                </p>
                <p className="mt-6 text-sm text-muted-foreground">
                  Questions? Email us at{" "}
                  <a href="mailto:hello@tinybeachhouse.nl" className="text-navy underline">
                    hello@tinybeachhouse.nl
                  </a>
                </p>
              </div>
            )}
          </div>

          {/* Why book direct */}
          {step !== 4 && (
            <>
              <div className="grid md:grid-cols-3 gap-4 mt-16">
                <Perk icon={<Wallet className="w-5 h-5 text-navy" />} title="Best Rate" text="No platform commission added to your price." />
                <Perk icon={<MessageCircle className="w-5 h-5 text-navy" />} title="Direct Contact" text="Communicate directly with your hosts." />
                <Perk icon={<PawPrint className="w-5 h-5 text-navy" />} title="Flexible Requests" text="Pets, early check-in, champagne — just ask." />
              </div>

              <div className="mt-14">
                <Accordion type="single" collapsible className="bg-card rounded-2xl shadow-soft px-6">
                  <AccordionItem value="cancel" className="border-none">
                    <AccordionTrigger className="text-navy font-medium hover:no-underline">
                      Cancellation policy
                    </AccordionTrigger>
                    <AccordionContent className="text-navy/75 text-sm space-y-2 leading-relaxed">
                      <p>• Free cancellation up to 14 days before check-in.</p>
                      <p>• After that: first night non-refundable.</p>
                      <p>• No-show: full stay charged.</p>
                      <p className="text-muted-foreground italic">Policy subject to change — always check your booking confirmation.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="mt-12 text-center bg-sand-deep rounded-2xl p-8">
                <Mail className="w-5 h-5 text-navy mx-auto mb-3" />
                <p className="text-navy/85">
                  Prefer to book by email or have questions?
                </p>
                <a
                  href="mailto:hello@tinybeachhouse.nl"
                  className="mt-2 inline-block font-display italic text-xl text-navy underline underline-offset-4 decoration-dune"
                >
                  hello@tinybeachhouse.nl
                </a>
                <p className="mt-2 text-xs text-muted-foreground">We respond within a few hours.</p>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

/* ───────────── helpers ───────────── */

const Stepper = ({ current }: { current: Step }) => {
  const steps = ["Dates", "Details", "Confirm"];
  return (
    <div className="flex items-center justify-center gap-3 md:gap-6">
      {steps.map((label, i) => {
        const idx = (i + 1) as Step;
        const active = current === idx;
        const done = current > idx;
        return (
          <div key={label} className="flex items-center gap-3">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition",
                done && "bg-seafoam/60 text-navy",
                active && "bg-navy text-sand",
                !active && !done && "bg-sand-deep text-muted-foreground"
              )}
            >
              {done ? <Check className="w-4 h-4" /> : idx}
            </div>
            <span className={cn("text-sm hidden sm:inline", active ? "text-navy font-medium" : "text-muted-foreground")}>
              {label}
            </span>
            {i < steps.length - 1 && <div className="w-6 md:w-12 h-px bg-dune/50" />}
          </div>
        );
      })}
    </div>
  );
};

const Field = ({ label, children, required, className }: { label: string; children: React.ReactNode; required?: boolean; className?: string }) => (
  <label className={cn("block", className)}>
    <span className="block text-xs uppercase tracking-wider text-navy/70 mb-1.5 font-medium">
      {label} {required && <span className="text-destructive">*</span>}
    </span>
    {children}
  </label>
);

const Input = ({ value, onChange, type = "text" }: { value: string; onChange: (v: string) => void; type?: string }) => (
  <input
    type={type}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    maxLength={255}
    className="w-full bg-sand-deep border-0 rounded-lg px-4 py-3 text-navy focus:ring-2 focus:ring-navy/20 focus:outline-none"
  />
);

const Select = ({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: string[] }) => (
  <div className="relative">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-sand-deep border-0 rounded-lg px-4 py-3 text-navy focus:ring-2 focus:ring-navy/20 focus:outline-none appearance-none pr-9"
    >
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
    <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-navy/60" />
  </div>
);

const NumberStepper = ({ value, onChange, min, max }: { value: number; onChange: (v: number) => void; min: number; max: number }) => (
  <div className="flex items-center bg-sand-deep rounded-lg overflow-hidden">
    <button
      type="button"
      onClick={() => onChange(Math.max(min, value - 1))}
      className="px-4 py-3 text-navy hover:bg-dune/30 transition"
    >
      −
    </button>
    <span className="flex-1 text-center text-navy font-medium">{value}</span>
    <button
      type="button"
      onClick={() => onChange(Math.min(max, value + 1))}
      className="px-4 py-3 text-navy hover:bg-dune/30 transition"
    >
      +
    </button>
  </div>
);

const Row = ({ label, value }: { label: React.ReactNode; value: React.ReactNode }) => (
  <div className="flex items-center justify-between text-navy/80">
    <span>{label}</span>
    <span>{value}</span>
  </div>
);

const SummaryItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
    <p className="mt-0.5 text-navy font-medium">{value}</p>
  </div>
);

const Perk = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) => (
  <div className="bg-card rounded-2xl p-7 shadow-soft">
    <div className="w-11 h-11 rounded-full bg-dune/30 flex items-center justify-center mb-4">{icon}</div>
    <h3 className="font-display text-xl text-navy">{title}</h3>
    <p className="mt-2 text-sm text-navy/75 leading-relaxed">{text}</p>
  </div>
);

export default Boeken;
