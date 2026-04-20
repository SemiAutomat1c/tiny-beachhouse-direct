import { Link } from "react-router-dom";
import { useState } from "react";
import { Bed, Bath, Coffee, Car, PawPrint, Wifi, Star, MapPin, ArrowRight, Quote, Search, ChevronDown } from "lucide-react";
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

  const reviews: { textKey: TranslationKey; name: string; location: string }[] = [
    { textKey: "home.review1", name: "Erwin", location: "netherlands" },
    { textKey: "home.review2", name: "Daniel", location: "Germany" },
    { textKey: "home.review3", name: "Anderson", location: "Spain" },
    { textKey: "home.review4", name: "Pascale", location: "Switzerland" },
  ];

  const ratingCategories = [
    { label: "LOCATION", score: "9.7" },
    { label: "STAFF", score: "9.3" },
    { label: "FACILITIES", score: "9.1" },
    { label: "COMFORT", score: "9.1" },
    { label: "CLEANLINESS", score: "9.0" },
    { label: "FREE WIFI", score: "10" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={images.heroHome}
          alt="Spacious bedroom at Tiny Beachhouse with atmospheric lighting"
          className="absolute inset-0 w-full h-full object-cover animate-image-zoom"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-navy/20" />

        <div className="relative container-wide pb-20 md:pb-32 pt-32 w-full">
          <p className="eyebrow text-sand/80 mb-5 animate-fade-in">{t("home.heroEyebrow")}</p>
          <h1 className="display-italic text-sand max-w-5xl animate-fade-up">
            {t("home.heroTitle1")}
            <br />
            <span className="text-dune inline-block mt-2">{t("home.heroTitle2")}</span>
          </h1>
          <p className="mt-8 text-sand/90 max-w-xl font-light animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {t("home.heroSub")}
          </p>

          <div className="mt-10 flex flex-wrap gap-5 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Link
              to="/boeken"
              className="bg-dune text-navy px-10 py-4 rounded-full font-semibold hover:bg-dune-soft transition-all shadow-soft hover:shadow-lift active:scale-95"
            >
              {t("home.ctaCheck")}
            </Link>
            <Link
              to="/accommodatie"
              className="border border-sand/40 text-sand px-10 py-4 rounded-full font-medium hover:bg-sand/10 transition-all backdrop-blur-sm inline-flex items-center gap-2 group"
            >
              {t("home.ctaDiscover")} <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-16 max-w-4xl animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <AvailabilityBar />
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float pointer-events-none opacity-60">
          <span className="eyebrow text-sand/80">Ontdek meer</span>
          <ChevronDown className="w-5 h-5 text-sand" />
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-card border-y border-border overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--sand-deep))_0%,transparent_50%)] opacity-40 pointer-events-none" />
        <div className="relative container-wide py-12 md:py-16 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {trustItems.map((item) => (
            <div key={item.key} className="flex flex-col items-center justify-center text-center gap-4 group cursor-default">
              <div className="w-14 h-14 rounded-full bg-sand-deep flex items-center justify-center text-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-dune/20 group-hover:shadow-soft">
                <span className="transition-transform duration-500 group-hover:rotate-12" aria-hidden>{item.icon}</span>
              </div>
              <span className="eyebrow group-hover:text-navy transition-colors">{t(item.key)}</span>
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
              alt="Open plan kitchen and social space"
              className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-soft transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
              width={1080}
              height={1350}
            />
            <div className="hidden md:block absolute -bottom-10 -right-8 w-56 aspect-square transition-all duration-700 hover:scale-110 hover:-rotate-3 z-10">
              <img
                src={images.bedroomSwanPremium}
                alt="Atmospheric bedroom detail"
                className="w-full h-full object-cover rounded-xl shadow-lift border-8 border-sand"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">{t("home.introEyebrow")}</p>
            <h2 className="display-italic text-navy">
              {t("home.introTitle1")} <br />{t("home.introTitle2")}
            </h2>
            <div className="mt-6 space-y-5 text-navy/75">
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
      <section className="bg-sand-deep pt-20 pb-10">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-3">
            <div>
              <p className="eyebrow mb-3">{t("home.galEyebrow")}</p>
              <h2 className="display-italic text-navy">{t("home.galTitle")}</h2>
            </div>
            <Link to="/accommodatie" className="text-navy/70 hover:text-navy inline-flex items-center gap-1.5">
              {t("home.galSeeAll")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.slice(0, 5).map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(i)}
                className={cn(
                  "relative overflow-hidden rounded-2xl shadow-soft group transition-all duration-500 hover:shadow-lift",
                  i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"
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

      {/* EXPERIENCE THE VIBE */}
      <section className="bg-sand-deep pb-20 overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lift group">
                <img 
                  src={images.livingLifestyle} 
                  alt="Cozy reading moment" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-sand/90 font-light italic leading-relaxed">
                    "The perfect spot to lose track of time with a good book and the sound of the sea."
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-6 md:space-y-8 pt-12">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-soft group">
                  <img 
                    src={images.dogExperience} 
                    alt="Dog enjoying the stay" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 glass-card rounded-2xl border border-white/20">
                  <h3 className="display-italic text-navy mb-3">Slow Living</h3>
                  <p className="text-navy/70 leading-relaxed">
                    Every corner is designed for relaxation. From the handcrafted details to the warm, natural materials.
                  </p>
                </div>
              </div>
              <div className="space-y-6 md:space-y-8">
                <div className="p-8 bg-dune/10 rounded-2xl border border-dune/20">
                  <h3 className="display-italic text-navy mb-3">Unique Details</h3>
                  <p className="text-navy/70 leading-relaxed">
                    Rustic sliding doors, exposed brickwork, and curated vintage finds create an atmosphere you won't find anywhere else.
                  </p>
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-soft group">
                  <img 
                    src={images.propertyCollage} 
                    alt="Property highlights" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
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
            <h2 className="display-italic text-navy">
              {t("home.locTitle")}
            </h2>
            <p className="mt-6 text-navy/75">
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
              <p className="eyebrow text-navy/60 mb-1">Location</p>
              <p className="text-navy leading-snug">Just 3 minutes walk to the beach</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-[#fdfbf7] section-py relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dune/5 rounded-full -mr-64 -mt-64 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy/5 rounded-full -ml-64 -mb-64 blur-[100px] pointer-events-none" />
        
        <div className="relative container-wide">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="eyebrow mb-6 text-navy/50 tracking-[0.25em]">{t("home.revEyebrow")}</p>
            <h2 className="display-italic text-navy text-4xl md:text-5xl lg:text-6xl mb-6">{t("home.revTitle")}</h2>
            <p className="text-lg md:text-xl text-navy/70 font-light leading-relaxed">
              {t("home.revSub")}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Featured Review & Image */}
            <div className="lg:w-2/3 relative group shadow-2xl overflow-hidden aspect-[1.3/1] rounded-[2.5rem]">
              <img 
                src={images.livingReading} 
                alt="Cozy reading corner" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 w-fit mb-8">
                  <Star className="w-3.5 h-3.5 fill-sand text-sand" />
                  <span className="eyebrow text-white text-[10px] tracking-[0.2em] uppercase font-bold">Verified Partner</span>
                </div>
                
                <p className="text-white text-xl md:text-2xl font-light italic leading-relaxed text-balance">
                  "Location! You are right behind the boulevard by the old church; it's a 5-minute walk and you're standing with your feet in the sand. The accommodation is cozy, but fully equipped. Beautiful bathroom and a spacious bedroom. Do pay attention, though: because the bedroom is in the basement, you have to go up and down a fairly steep spiral staircase."
                </p>
              </div>
            </div>

            {/* Ratings Column */}
            <div className="lg:w-1/3 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4 flex-1">
                {ratingCategories.slice(0, 4).map((cat) => (
                  <div 
                    key={cat.label} 
                    className="bg-white rounded-[2rem] p-8 flex flex-col justify-center border border-black/5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="eyebrow text-navy/30 mb-2 text-[8px] tracking-[0.25em] uppercase font-bold">
                      {cat.label}
                    </span>
                    <span className="text-5xl text-navy font-bold leading-none tracking-tight">{cat.score}</span>
                  </div>
                ))}
              </div>

              {/* Booking.com Branding Card */}
              <div className="bg-[#1a2b3b] rounded-[2rem] p-8 flex items-center justify-between shadow-2xl border border-white/5">
                <div className="flex items-center gap-5">
                  <div className="bg-[#d4b996] text-[#1a2b3b] w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg ring-4 ring-white/5">
                    9.1
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sand font-bold uppercase tracking-[0.15em] text-xs">Rated Superb</span>
                    <span className="text-sand/40 text-[9px] mt-1 uppercase tracking-[0.1em] leading-none">
                      On <span className="text-sand/70 font-bold">Booking.com</span>
                    </span>
                  </div>
                </div>
                <div className="flex gap-0.5 opacity-80">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4b996] text-[#d4b996]" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24">
            {reviews.slice(1).map((r, idx) => (
              <article
                key={r.name}
                className={cn(
                  "bg-white rounded-[2.5rem] p-12 shadow-sm flex flex-col items-start relative border border-black/[0.03] transition-all duration-500 hover:shadow-xl hover:-translate-y-1",
                  idx === 1 ? "md:translate-y-16" : ""
                )}
              >
                <Quote className="absolute top-10 right-10 w-10 h-10 text-navy/[0.02] fill-current" />
                
                <div className="flex gap-1 text-[#d4b996] mb-10">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                
                <p className="text-navy/70 italic font-light leading-relaxed flex-1 mb-12 text-[16px]">
                  "{t(r.textKey)}"
                </p>
                
                <div className="flex items-center justify-between w-full border-t border-black/[0.05] pt-8 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-navy font-bold text-lg mb-0.5 tracking-tight">{r.name}</span>
                    <span className="eyebrow text-navy/20 lowercase text-[10px] tracking-[0.2em]">{r.location}</span>
                  </div>
                  <div className="flex items-center gap-2 grayscale opacity-20">
                    <div className="w-1 h-1 rounded-full bg-navy" />
                    <span className="eyebrow text-navy text-[8px] uppercase tracking-[0.3em] font-bold">Verified</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-32">
              <a
                href="https://www.booking.com/hotel/nl/tiny-beachhouse.html"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-3 text-navy font-medium border-b-2 border-dune/30 hover:border-dune transition-all pb-1.5 group"
              >
                <span className="tracking-wide">{t("home.revMore")}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
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
