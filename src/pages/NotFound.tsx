import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { useI18n } from "@/i18n/I18nContext";

const NotFound = () => {
  const location = useLocation();
  const { t, lang } = useI18n();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    document.title = t("nf.metaTitle");
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    descTag.setAttribute("content", t("nf.metaDesc"));
  }, [lang, t]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-gradient-sand px-6 py-24 text-center">
      <p className="eyebrow mb-4 text-navy/50 tracking-[0.3em]">404</p>
      <h1 className="display-italic mb-4 max-w-lg text-navy text-4xl md:text-5xl">
        {t("nf.title")}
      </h1>
      <p className="mb-10 max-w-md text-navy/65 leading-relaxed">
        {t("nf.body")}
      </p>
      <Link
        to="/"
        className="group inline-flex items-center gap-4 border-b border-navy/20 pb-2 text-sm font-bold uppercase tracking-widest text-navy transition-all hover:gap-6"
      >
        {t("nf.home")}{" "}
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" weight="bold" />
      </Link>
    </div>
  );
};

export default NotFound;
