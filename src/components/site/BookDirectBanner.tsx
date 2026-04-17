import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export const BookDirectBanner = () => {
  const { t } = useI18n();
  return (
    <section className="bg-navy text-sand">
      <div className="container-narrow py-20 md:py-28 text-center">
        <h2 className="display-italic text-h1 md:text-display text-sand">
          {t("banner.title1")}
          <br />
          <span className="text-dune">{t("banner.title2")}</span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-sand/75 max-w-xl mx-auto">
          {t("banner.sub")}
        </p>
        <Link
          to="/boeken"
          className="mt-9 inline-flex items-center gap-2 bg-dune text-navy px-7 py-3.5 rounded-full font-medium hover:bg-dune-soft transition shadow-soft"
        >
          {t("banner.cta")} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
