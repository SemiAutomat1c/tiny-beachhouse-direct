import { Link } from "react-router-dom";
import { getBookingUrl } from "@/lib/booking";
import { useI18n } from "@/i18n/I18nContext";

export const Footer = () => {
  const { t } = useI18n();
  const quickLinks = [
    { label: t("footer.linkHome"), to: "/" },
    { label: t("footer.linkAccommodation"), to: "/accommodatie" },
    { label: t("footer.linkArea"), to: "/" },
    { label: t("footer.linkBook"), href: getBookingUrl(), external: true },
    { label: t("footer.linkContact"), href: `mailto:${t("footer.email")}` },
    { label: t("footer.linkPrivacy"), to: "/" },
  ];

  return (
    <footer className="bg-sand-deep">
      <div className="container-wide py-14 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
          <div className="flex min-h-[17rem] flex-col justify-between px-6 py-7 md:px-7">
            <div>
              <p className="eyebrow mb-6 text-navy/50">{t("footer.quickTitle")}</p>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-[15px] text-navy/85 sm:grid-cols-3">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    {"to" in item ? (
                      <Link to={item.to} className="transition-colors hover:text-navy">
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="transition-colors hover:text-navy"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-10 font-display text-[26px] font-light tracking-normal text-navy">Tiny Beachhouse.</p>
          </div>

          <div className="flex min-h-[17rem] flex-col justify-between px-2 md:px-0">
            <div className="grid grid-cols-1 gap-6 text-navy/85 sm:grid-cols-3">
              <div>
                <p className="eyebrow mb-2 text-navy/40">{t("footer.infoEmail")}</p>
                <a href={`mailto:${t("footer.email")}`} className="text-sm leading-relaxed hover:text-navy">
                  {t("footer.email")}
                </a>
              </div>
              <div>
                <p className="eyebrow mb-2 text-navy/40">{t("footer.infoPhone")}</p>
                <a href="tel:+31612345678" className="text-sm leading-relaxed hover:text-navy">
                  {t("footer.phone")}
                </a>
              </div>
              <div>
                <p className="eyebrow mb-2 text-navy/40">{t("footer.infoAddress")}</p>
                <p className="text-sm leading-relaxed">
                  {t("footer.addressLine1")}
                  <br />
                  {t("footer.addressLine2")}
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-5 text-sm text-navy/80 md:justify-end">
              <a
                href="https://www.instagram.com/tinybeachhouse/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-navy"
              >
                {t("footer.socialInstagram")}
              </a>
              <a
                href={getBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-navy"
              >
                {t("footer.socialBooking")}
              </a>
            </div>
          </div>
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
