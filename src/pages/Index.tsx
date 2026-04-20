import { Link } from "react-router-dom";
import { useState } from "react";
import { Bed, Bath, Coffee, Car, PawPrint, Wifi, Star, MapPin, ArrowRight, Quote, Search } from "lucide-react";
import { images, galleryImages } from "@/lib/images";
import { AvailabilityBar } from "@/components/site/AvailabilityBar";
import { BookDirectBanner } from "@/components/site/BookDirectBanner";
import { Lightbox } from "@/components/site/Lightbox";
import { cn } from "../lib/utils";
import { useI18n } from "@/i18n/I18nContext";
import type { TranslationKey } from "@/i18n/translations";

const Index = () => {
  const { t } = useI18n();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const trustItems: { icon: string; key: TranslationKey }[] = [
    { icon: "🌊", key: "home.trust1" },
    { icon: "🏆", key: "home.trust2" },
    { icon: "✨", key: "home.trust3" },
    { icon: "🍃", key: "home.trust4" },
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
          <h1 className="display-italic text-display md:text-[6rem] text-sand max-w-5xl animate-fade-up leading-[0.9]">
            {t("home.heroTitle1")}
            <br />
            <span className="text-dune inline-block mt-2">{t("home.heroTitle2")}</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-sand/90 max-w-xl font-light animate-fade-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            {t("home.heroSub")}
          </p>

          <div className="mt-10 flex flex-wrap gap-5 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Link
              to="/boeken"
              className="bg-dune text-navy px-8 py-4 rounded-full font-semibold hover:bg-dune-soft transition-all shadow-soft hover:shadow-lift active:scale-95"
            >
              {t("home.ctaCheck")}
            </Link>
            <Link
              to="/accommodatie"
              className="border border-sand/40 text-sand px-8 py-4 rounded-full font-medium hover:bg-sand/10 transition-all backdrop-blur-sm inline-flex items-center gap-2 group"
            >
              {t("home.ctaDiscover")} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 max-w-3xl animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <AvailabilityBar />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-card border-y border-border overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--sand-deep))_0%,transparent_50%)] opacity-40 pointer-events-none" />
        <div className="relative container-wide py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item) => (
            <div key={item.key} className="flex flex-col items-center justify-center text-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-sand-deep flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-dune/20">
                <span aria-hidden>{item.icon}</span>
              </div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-navy/60 group-hover:text-navy transition-colors">{t(item.key)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="section-py">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-dune/5 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              src={images.interiorLiving}
              alt="Living room corner with linen sofa and coastal art"
              className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-soft transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
              width={1080}
              height={1350}
            />
            <div className="hidden md:block absolute -bottom-10 -right-8 w-56 aspect-square transition-all duration-700 hover:scale-110 hover:-rotate-3 z-10">
              <img
                src={images.detailDecor}
                alt="Driftwood and linen detail"
                className="w-full h-full object-cover rounded-xl shadow-lift border-8 border-sand"
                loading="lazy"
              />
            </div>
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

            <div className="mt-8 flex flex-wrap gap-3">
              {featurePills.map(({ icon: Icon, key }) => (
                <span
                  key={key}
                  className="inline-flex items-center gap-2 bg-dune/20 text-navy/80 px-4 py-2 rounded-full text-sm font-medium border border-dune/10 hover:bg-dune/30 hover:text-navy transition-colors cursor-default"
                >
                  <Icon className="w-4 h-4 text-dune animate-pulse-slow" /> {t(key)}
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.slice(0, 6).map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(i)}
                className={cn(
                  "relative overflow-hidden rounded-2xl shadow-soft group transition-all duration-500 hover:shadow-lift",
                  i === 0 || i === 3 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"
                )}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-sand/20 border border-sand/30 flex items-center justify-center text-sand translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Search className="w-5 h-5" />
                  </div>
                </div>
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
          <div className="relative rounded-2xl overflow-hidden shadow-soft aspect-[4/3] group">
            <iframe
              src="https://www.google.com/maps?q=Jacob+Pronkstraat,+2584+BS+Scheveningen&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Tiny Beachhouse, Scheveningen"
              className="grayscale-[0.2] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
            />
            <div className="absolute top-6 left-6 glass-card px-5 py-3 rounded-xl shadow-lift border border-white/20 pointer-events-none md:max-w-[200px]">
              <p className="text-[10px] uppercase tracking-widest text-navy/60 font-bold mb-1">Location</p>
              <p className="text-sm font-medium text-navy leading-snug">Just 3 minutes walk to the beach</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-sand-deep section-py relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-dune/5 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full -ml-48 -mb-48 blur-3xl pointer-events-none" />
        
        <div className="relative container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow mb-4">{t("home.revEyebrow")}</p>
            <h2 className="display-italic text-h1 text-navy mb-4">{t("home.revTitle")}</h2>
            <p className="text-navy/70 text-lg font-light leading-relaxed">
              {t("home.revSub")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r, idx) => (
              <article
                key={r.name}
                className={cn(
                  "bg-card rounded-2xl p-8 shadow-soft flex flex-col items-start relative group transition-all duration-500 hover:-translate-y-2",
                  idx % 2 === 1 ? "md:mt-8 md:-mb-8" : ""
                )}
              >
                <div className="absolute top-6 right-8 text-dune/20 group-hover:text-dune/40 transition-colors">
                  <Quote className="w-10 h-10 fill-current" />
                </div>
                
                <div className="flex gap-1 text-dune mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                
                <p className="text-navy/85 leading-relaxed text-[0.95rem] italic flex-1 relative z-10">
                  {t(r.textKey)}
                </p>
                
                <div className="mt-8 pt-6 border-t border-sand-deep w-full flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-wider text-navy uppercase">{r.name}</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60">Verified Guest</span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-20">
            <a
              href="https://www.booking.com/hotel/nl/tiny-beachhouse.html"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-navy/80 hover:text-navy font-medium border-b border-navy/20 hover:border-navy transition-all pb-1 group"
            >
              <span>{t("home.revMore")}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
