import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Calendar, Users, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { useI18n } from "@/i18n/I18nContext";

export const AvailabilityBar = () => {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (checkIn) params.set("in", checkIn);
    if (checkOut) params.set("out", checkOut);
    params.set("guests", String(guests));
    navigate(`/boeken?${params.toString()}`);
  };

  const today = format(new Date(), "yyyy-MM-dd");

  return (
    <form
      onSubmit={submit}
      className="glass-card rounded-2xl p-4 md:p-6 grid grid-cols-1 md:grid-cols-[1.2fr_1.2fr_0.8fr_auto] gap-4 md:gap-5 items-end shadow-lift"
    >
      <div className="space-y-1.5">
        <label className="block text-[10px] uppercase tracking-[0.2em] text-navy/50 font-bold px-1 ml-0.5">
          {t("avail.checkIn")}
        </label>
        <div className="relative group">
          <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-dune group-focus-within:text-navy transition-colors pointer-events-none" />
          <input
            type="date"
            min={today}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-sand-deep/40 border border-navy/5 hover:border-navy/10 px-10 py-3 rounded-xl text-navy font-medium focus:outline-none focus:ring-2 focus:ring-navy/5 transition-all"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="block text-[10px] uppercase tracking-[0.2em] text-navy/50 font-bold px-1 ml-0.5">
          {t("avail.checkOut")}
        </label>
        <div className="relative group">
          <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-dune group-focus-within:text-navy transition-colors pointer-events-none" />
          <input
            type="date"
            min={checkIn || today}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-sand-deep/40 border border-navy/5 hover:border-navy/10 px-10 py-3 rounded-xl text-navy font-medium focus:outline-none focus:ring-2 focus:ring-navy/5 transition-all"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="block text-[10px] uppercase tracking-[0.2em] text-navy/50 font-bold px-1 ml-0.5">
          {t("avail.guests")}
        </label>
        <div className="relative group">
          <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-dune group-focus-within:text-navy transition-colors pointer-events-none" />
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full bg-sand-deep/40 border border-navy/5 hover:border-navy/10 px-10 py-3 rounded-xl text-navy font-medium focus:outline-none focus:ring-2 focus:ring-navy/5 transition-all appearance-none cursor-pointer"
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? t("avail.guest_one") : t("avail.guest_other")}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="bg-navy text-sand h-[52px] px-8 rounded-xl font-bold inline-flex items-center justify-center gap-2 hover:bg-navy-soft transition-all hover:shadow-soft active:scale-95 group"
      >
        <span>{t("avail.check")}</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
};
