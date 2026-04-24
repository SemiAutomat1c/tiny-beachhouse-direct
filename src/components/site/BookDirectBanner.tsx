import { ArrowRight } from "@phosphor-icons/react";
import { getBookingUrl } from "@/lib/booking";
import { useI18n } from "@/i18n/I18nContext";

export const BookDirectBanner = () => {
  const { t } = useI18n();
  return (
    <section className="bg-navy text-sand">
      <div className="container-narrow py-20 md:py-28 text-center">
        <h2 className="font-display font-light tracking-normal text-sand text-4xl leading-[1.08] md:text-5xl lg:text-6xl">
          {t("banner.title")}
        </h2>
        <p className="mt-6 max-w-xl mx-auto font-body text-base font-normal leading-[26px] text-sand/80">
          {t("banner.sub")}
        </p>
        <a
          href={getBookingUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center gap-2 bg-dune text-navy px-7 py-3.5 rounded-full font-medium hover:bg-dune-soft transition shadow-soft"
        >
          {t("banner.cta")} <ArrowRight className="w-4 h-4" weight="bold" />
        </a>
      </div>
    </section>
  );
};
