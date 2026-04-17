import { Link } from "react-router-dom";
import { useState } from "react";
import { Bed, Bath, Coffee, Car, PawPrint, Wifi, Star, MapPin, ArrowRight } from "lucide-react";
import { images, galleryImages } from "@/lib/images";
import { AvailabilityBar } from "@/components/site/AvailabilityBar";
import { BookDirectBanner } from "@/components/site/BookDirectBanner";
import { Lightbox } from "@/components/site/Lightbox";
import { useI18n } from "@/i18n/I18nContext";
import type { TranslationKey } from "@/i18n/translations";

const Index = () => {
  const { t } = useI18n();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const trustItems: { icon: string; key: TranslationKey }[] = [
    { icon: "🏖️", key: "home.trust1" },
    { icon: "⭐", key: "home.trust2" },
    { icon: "🔑", key: "home.trust3" },
    { icon: "🌿", key: "home.trust4" },
  ];

  const featurePills: { icon: typeof Bed; key: TranslationKey }[] = [
    { icon: Bed, key: "pill.bedroom" },
    { icon: Bath, key: "pill.bathroom" },
    { icon: Coffee, key: "pill.kitchen" },
    { icon: Car, key: "pill.parking" },
    { icon: PawPrint, key: "pill.pets" },
    { icon: Wifi, key: "pill.wifi" },
  ];

  const reviews: { textKey: TranslationKey; name: string }[] = [
    { textKey: "home.review1", name: "Sophie" },
    { textKey: "home.review2", name: "James" },
    { textKey: "home.review3", name: "Marta" },
    { textKey: "home.review4", name: "Lukas" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={images.heroInterior}
          alt="Tiny Beachhouse interior at golden hour with sea view"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-navy/20" />

        <div className="relative container-wide pb-20 md:pb-28 pt-32 w-full">
          <p className="eyebrow text-sand/80 mb-5 animate-fade-in">{t("home.heroEyebrow")}</p>
          <h1 className="display-italic text-display md:text-[5.5rem] text-sand max-w-4xl animate-fade-up">
            {t("home.heroTitle1")}
            <br />
            <span className="text-dune">{t("home.heroTitle2")}</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-sand/85 max-w-xl font-light animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {t("home.heroSub")}
          </p>

          <div className="mt-9 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Link
              to="/boeken"
              className="bg-dune text-navy px-7 py-3.5 rounded-full font-medium hover:bg-dune-soft transition shadow-soft"
            >
              {t("home.ctaCheck")}
            </Link>
            <Link
              to="/accommodatie"
              className="border border-sand/70 text-sand px-7 py-3.5 rounded-full font-medium hover:bg-sand/10 transition inline-flex items-center gap-2"
            >
              {t("home.ctaDiscover")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-12 max-w-3xl animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <AvailabilityBar />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-card border-y border-border">
        <div className="container-wide py-7 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustItems.map((item) => (
            <div key={item.key} className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-navy/80">
              <span className="text-xl" aria-hidden>{item.icon}</span>
              <span>{t(item.key)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="section-py">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src={images.interiorLiving}
              alt="Living room corner with linen sofa and coastal art"
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-soft"
              loading="lazy"
              width={1080}
              height={1350}
            />
            <img
              src={images.detailDecor}
              alt="Driftwood and linen detail"
              className="hidden md:block absolute -bottom-10 -right-8 w-48 aspect-square object-cover rounded-xl shadow-lift border-4 border-sand"
              loading="lazy"
            />
          </div>

          <div>
            <p className="eyebrow mb-4">{t("home.introEyebrow")}</p>
            <h2 className="display-italic text-h1 text-navy">
              {t("home.introTitle1")} <br />{t("home.introTitle2")}
            </h2>
            <div className="mt-6 space-y-5 text-base md:text-lg text-navy/75 leading-relaxed">
              <p>{t("home.introP1")}</p>
              <p>{t("home.introP2")}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {featurePills.map(({ icon: Icon, key }) => (
                <span
                  key={key}
                  className="inline-flex items-center gap-1.5 bg-dune/30 text-navy px-3.5 py-1.5 rounded-full text-sm"
                >
                  <Icon className="w-3.5 h-3.5" /> {t(key)}
                </span>
              ))}
            </div>

            <Link
              to="/accommodatie"
              className="mt-8 inline-flex items-center gap-1.5 text-navy font-medium border-b-2 border-dune pb-1 hover:gap-3 transition-all"
            >
              {t("home.exploreSpace")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-sand-deep section-py">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-3">
            <div>
              <p className="eyebrow mb-3">{t("home.galEyebrow")}</p>
              <h2 className="display-italic text-h1 text-navy">{t("home.galTitle")}</h2>
            </div>
            <Link to="/accommodatie" className="text-navy/70 hover:text-navy text-sm inline-flex items-center gap-1.5">
              {t("home.galSeeAll")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.slice(0, 6).map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(i)}
                className={`relative overflow-hidden rounded-xl shadow-soft group ${
                  i === 0 || i === 3 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION TEASER */}
      <section className="section-py">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="eyebrow mb-4 inline-flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" /> Scheveningen, Den Haag
            </p>
            <h2 className="display-italic text-h1 text-navy">
              {t("home.locTitle")}
            </h2>
            <p className="mt-6 text-base md:text-lg text-navy/75 leading-relaxed">
              {t("home.locText")}
            </p>
            <Link
              to="/omgeving"
              className="mt-8 inline-flex items-center gap-1.5 text-navy font-medium border-b-2 border-dune pb-1 hover:gap-3 transition-all"
            >
              {t("home.exploreArea")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-soft aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps?q=Jacob+Pronkstraat,+2584+BS+Scheveningen&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Tiny Beachhouse, Scheveningen"
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-sand-deep section-py">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">{t("home.revEyebrow")}</p>
            <h2 className="display-italic text-h1 text-navy">{t("home.revTitle")}</h2>
            <p className="mt-4 text-navy/70">
              {t("home.revSub")}
            </p>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-6 -mx-6 px-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:mx-0 md:px-0 no-scrollbar">
            {reviews.map((r) => (
              <article
                key={r.name}
                className="bg-card rounded-2xl p-7 shadow-soft min-w-[300px] md:min-w-0 flex flex-col"
              >
                <div className="flex gap-0.5 text-dune mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-navy/85 leading-relaxed text-[0.95rem] flex-1">"{t(r.textKey)}"</p>
                <p className="mt-5 text-sm font-medium text-navy">— {r.name}</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.booking.com/hotel/nl/tiny-beachhouse.html"
              target="_blank"
              rel="noreferrer noopener"
              className="text-navy/70 hover:text-navy text-sm inline-flex items-center gap-1.5"
            >
              {t("home.revMore")} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <BookDirectBanner />

      <Lightbox
        images={galleryImages}
        openIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </>
  );
};

export default Index;
