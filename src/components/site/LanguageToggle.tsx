import { useI18n } from "@/i18n/I18nContext";
import { cn } from "@/lib/utils";

interface Props {
  solid: boolean;
  className?: string;
}

export const LanguageToggle = ({ solid, className }: Props) => {
  const { lang, setLang } = useI18n();

  const base =
    "px-2.5 py-1 text-xs font-medium tracking-wide rounded-full transition-colors";
  const activeSolid = "bg-navy text-sand";
  const inactiveSolid = "text-navy/60 hover:text-navy";
  const activeTransparent = "bg-sand text-navy";
  const inactiveTransparent = "text-sand/70 hover:text-sand";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full p-0.5",
        solid ? "bg-sand-deep/60" : "bg-white/10 backdrop-blur-sm",
        className
      )}
      role="group"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => setLang("nl")}
        aria-pressed={lang === "nl"}
        className={cn(base, lang === "nl" ? (solid ? activeSolid : activeTransparent) : (solid ? inactiveSolid : inactiveTransparent))}
      >
        NL
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(base, lang === "en" ? (solid ? activeSolid : activeTransparent) : (solid ? inactiveSolid : inactiveTransparent))}
      >
        EN
      </button>
    </div>
  );
};
