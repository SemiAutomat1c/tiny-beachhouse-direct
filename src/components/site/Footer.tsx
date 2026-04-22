import { Link } from "react-router-dom";
import { EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { getBookingUrl } from "@/lib/booking";
import { useI18n } from "@/i18n/I18nContext";

export const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="bg-sand-deep">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-10 text-sand-deep"
        aria-hidden
      >
        <path
          d="M0,30 C240,60 480,0 720,20 C960,40 1200,10 1440,30 L1440,60 L0,60 Z"
          fill="currentColor"
        />
      </svg>

      <div className="container-wide py-16 grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-display italic text-2xl font-bold text-navy">
            Tiny Beachhouse
          </p>
          <p className="mt-3 text-muted-foreground max-w-xs leading-relaxed">
            {t("footer.tagline1")}
            <br />
            {t("footer.tagline2")}
          </p>
        </div>

        <div className="md:text-center">
          <p className="eyebrow mb-4">{t("footer.explore")}</p>
          <ul className="space-y-2">
            <li><Link to="/" className="text-navy/80 hover:text-navy transition-colors">{t("nav.home")}</Link></li>
            <li><Link to="/accommodatie" className="text-navy/80 hover:text-navy transition-colors">{t("nav.accommodation")}</Link></li>
            <li>
              <a
                href={getBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy/80 hover:text-navy transition-colors"
              >
                {t("footer.bookOnBooking")}
              </a>
            </li>
          </ul>
        </div>

        <div className="md:text-right">
          <p className="eyebrow mb-4">{t("footer.contact")}</p>
          <ul className="space-y-2 text-navy/80">
            <li className="flex md:justify-end items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" weight="thin" />
              Jacob Pronkstraat, 2584 BS Scheveningen
            </li>
            <li className="flex md:justify-end items-center gap-2">
              <EnvelopeSimple className="w-4 h-4 shrink-0" weight="thin" />
              <a href="mailto:hello@tinybeachhouse.nl" className="hover:text-navy">
                hello@tinybeachhouse.nl
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-dune/30">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-muted-foreground">
          <p>© {new Date().getFullYear()} {t("footer.copyright")}</p>
          <p>{t("footer.legal")}</p>
        </div>
      </div>
    </footer>
  );
};
