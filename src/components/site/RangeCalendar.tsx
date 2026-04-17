import { useState } from "react";
import { addMonths, addDays, format, isBefore, isSameDay, isSameMonth, startOfMonth, startOfWeek, endOfWeek, endOfMonth, isWithinInterval } from "date-fns";
import { nl as nlLocale, enUS } from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/I18nContext";

const CalendarSummary = ({ checkIn, checkOut }: { checkIn: Date; checkOut: Date | null }) => {
  const { t, lang } = useI18n();
  const locale = lang === "nl" ? nlLocale : enUS;
  return (
    <div className="mt-5 pt-4 border-t border-border flex flex-wrap gap-2 text-sm text-muted-foreground">
      <span>
        <span className="font-medium text-navy">{t("cal.checkin")}</span> {format(checkIn, "EEE, MMM d", { locale })}
      </span>
      {checkOut && (
        <span>
          <span className="font-medium text-navy">·  {t("cal.checkout")}</span> {format(checkOut, "EEE, MMM d", { locale })}
        </span>
      )}
    </div>
  );
};

interface RangeCalendarProps {
  checkIn: Date | null;
  checkOut: Date | null;
  onChange: (range: { checkIn: Date | null; checkOut: Date | null }) => void;
  monthsToShow?: number;
}

export const RangeCalendar = ({
  checkIn,
  checkOut,
  onChange,
  monthsToShow = 1,
}: RangeCalendarProps) => {
  const [cursor, setCursor] = useState<Date>(startOfMonth(checkIn ?? new Date()));
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handlePick = (day: Date) => {
    if (!checkIn || (checkIn && checkOut)) {
      onChange({ checkIn: day, checkOut: null });
      return;
    }
    if (isBefore(day, checkIn) || isSameDay(day, checkIn)) {
      onChange({ checkIn: day, checkOut: null });
      return;
    }
    onChange({ checkIn, checkOut: day });
  };

  const renderMonth = (monthDate: Date) => {
    const start = startOfWeek(startOfMonth(monthDate), { weekStartsOn: 1 });
    const end = endOfWeek(endOfMonth(monthDate), { weekStartsOn: 1 });
    const days: Date[] = [];
    let d = start;
    while (d <= end) {
      days.push(d);
      d = addDays(d, 1);
    }

    return (
      <div key={monthDate.toISOString()} className="flex-1 min-w-0">
        <div className="text-center font-display text-lg text-navy mb-3">
          {format(monthDate, "MMMM yyyy")}
        </div>
        <div className="grid grid-cols-7 text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5">
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
            <div key={d} className="text-center py-1">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-1">
          {days.map((day) => {
            const inCurrent = isSameMonth(day, monthDate);
            const past = isBefore(day, today);
            const isCheckIn = checkIn && isSameDay(day, checkIn);
            const isCheckOut = checkOut && isSameDay(day, checkOut);
            const inRange = checkIn && checkOut && isWithinInterval(day, { start: checkIn, end: checkOut });

            return (
              <button
                key={day.toISOString()}
                disabled={past || !inCurrent}
                onClick={() => handlePick(day)}
                className={cn(
                  "h-10 text-sm rounded-md transition relative",
                  !inCurrent && "opacity-0 pointer-events-none",
                  past && inCurrent && "text-muted-foreground/50 line-through cursor-not-allowed",
                  !past && inCurrent && "hover:bg-dune/30 text-navy",
                  inRange && !isCheckIn && !isCheckOut && "bg-dune/40",
                  (isCheckIn || isCheckOut) && "bg-navy text-sand hover:bg-navy"
                )}
                aria-label={format(day, "PPP")}
              >
                {format(day, "d")}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const months = Array.from({ length: monthsToShow }, (_, i) => addMonths(cursor, i));

  return (
    <div className="bg-card rounded-xl p-5 shadow-soft border border-border">
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          aria-label="Previous month"
          onClick={() => setCursor(addMonths(cursor, -1))}
          className="p-2 rounded-md hover:bg-sand-deep transition"
        >
          <ChevronLeft className="w-4 h-4 text-navy" />
        </button>
        <button
          type="button"
          aria-label="Next month"
          onClick={() => setCursor(addMonths(cursor, 1))}
          className="p-2 rounded-md hover:bg-sand-deep transition"
        >
          <ChevronRight className="w-4 h-4 text-navy" />
        </button>
      </div>
      <div className={cn("flex gap-8", monthsToShow > 1 && "flex-col md:flex-row")}>
        {months.map(renderMonth)}
      </div>
      {checkIn && (
        <CalendarSummary checkIn={checkIn} checkOut={checkOut} />
      )}
    </div>
  );
};
