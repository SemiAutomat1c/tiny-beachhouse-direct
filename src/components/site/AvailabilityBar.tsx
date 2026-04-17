import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Calendar, Users, ArrowRight } from "lucide-react";
import { format } from "date-fns";

export const AvailabilityBar = () => {
  const navigate = useNavigate();
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
      className="glass-card rounded-2xl p-3 md:p-4 grid grid-cols-1 md:grid-cols-[1fr_1fr_auto_auto] gap-2 md:gap-3 items-end"
    >
      <label className="block">
        <span className="block text-[11px] uppercase tracking-[0.18em] text-navy/70 mb-1.5 font-medium px-1">
          <Calendar className="inline w-3 h-3 mr-1" /> Check-in
        </span>
        <input
          type="date"
          min={today}
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="w-full bg-transparent border-0 px-3 py-2.5 rounded-lg text-navy font-medium focus:outline-none focus:ring-2 focus:ring-navy/20"
        />
      </label>
      <label className="block">
        <span className="block text-[11px] uppercase tracking-[0.18em] text-navy/70 mb-1.5 font-medium px-1">
          <Calendar className="inline w-3 h-3 mr-1" /> Check-out
        </span>
        <input
          type="date"
          min={checkIn || today}
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="w-full bg-transparent border-0 px-3 py-2.5 rounded-lg text-navy font-medium focus:outline-none focus:ring-2 focus:ring-navy/20"
        />
      </label>
      <label className="block md:w-32">
        <span className="block text-[11px] uppercase tracking-[0.18em] text-navy/70 mb-1.5 font-medium px-1">
          <Users className="inline w-3 h-3 mr-1" /> Guests
        </span>
        <select
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="w-full bg-transparent border-0 px-3 py-2.5 rounded-lg text-navy font-medium focus:outline-none focus:ring-2 focus:ring-navy/20 appearance-none"
        >
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        className="bg-navy text-sand h-12 px-6 rounded-xl font-medium inline-flex items-center justify-center gap-2 hover:bg-navy-soft transition"
      >
        Check Availability <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
};
