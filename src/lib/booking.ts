/** Booking.com hotel page — keep aid/label for attribution. Dates/guests merged when provided. */
const BOOKING_HOTEL_URL = "https://www.booking.com/hotel/nl/tiny-beachhouse.en-gb.html";

const DEFAULT_SEARCH: Record<string, string> = {
  aid: "311984",
  label:
    "tiny-beachhouse-124O*i4O*WJmYo0WR5WSawS675453740824:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-2204406608571:lp1010754:li:dec:dm:ppccp:UmFuZG9tSVYkc2RlIyh9YcGt_tphEo8pAE6BwGOTZ3E",
};

export function getBookingUrl(opts?: { checkIn?: string; checkOut?: string; guests?: number }): string {
  const base = import.meta.env.VITE_BOOKING_URL?.trim() || BOOKING_HOTEL_URL;
  const u = new URL(base);
  if (!import.meta.env.VITE_BOOKING_URL?.trim()) {
    for (const [k, v] of Object.entries(DEFAULT_SEARCH)) {
      if (!u.searchParams.has(k)) u.searchParams.set(k, v);
    }
  }
  if (opts?.checkIn) u.searchParams.set("checkin", opts.checkIn);
  if (opts?.checkOut) u.searchParams.set("checkout", opts.checkOut);
  if (opts?.guests != null && opts.guests > 0) {
    u.searchParams.set("group_adults", String(opts.guests));
    u.searchParams.set("no_rooms", "1");
    u.searchParams.set("req_adults", String(opts.guests));
  }
  return u.toString();
}

export function openBookingUrl(opts?: { checkIn?: string; checkOut?: string; guests?: number }): void {
  window.open(getBookingUrl(opts), "_blank", "noopener,noreferrer");
}
