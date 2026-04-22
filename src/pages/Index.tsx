import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bathtub,
  Bed,
  BeachBall,
  Car,
  Coffee,
  CookingPot,
  IconProps,
  Leaf,
  MapPin,
  PawPrint,
  Quotes,
  Star,
  Trophy,
  UsersThree,
  Waves,
  WifiHigh,
  Wine,
} from "@phosphor-icons/react";
import { getBookingUrl } from "@/lib/booking";
import { images, galleryImages } from "@/lib/images";
import { AvailabilityBar } from "@/components/site/AvailabilityBar";
import { BookDirectBanner } from "@/components/site/BookDirectBanner";
import { Lightbox } from "@/components/site/Lightbox";
import { cn } from "../lib/utils";
import { useI18n } from "@/i18n/I18nContext";
import type { TranslationKey } from "@/i18n/translations";

/** Served from `public/` — override with `VITE_HERO_VIDEO_URL` when hosting elsewhere. */
const DEFAULT_HERO_VIDEO_SRC = "/Scheveningen_14-02-2026.mp4";

const Index = () => {
  const { t } = useI18n();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const heroVideoSrc =
    import.meta.env.VITE_HERO_VIDEO_URL?.trim() || DEFAULT_HERO_VIDEO_SRC;

  const trustItems: { icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>; key: TranslationKey }[] = [
    { icon: Waves, key: "home.trust1" },
    { icon: Trophy, key: "home.trust2" },
    { icon: UsersThree, key: "home.trust3" },
    { icon: Leaf, key: "home.trust4" },
  ];

  const featurePills: { icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>; key: TranslationKey }[] = [
    { icon: Bed, key: "pill.bedroom" },
    { icon: Bathtub, key: "pill.bathroom" },
    { icon: Coffee, key: "pill.kitchen" },
    { icon: Car, key: "pill.parking" },
    { icon: PawPrint, key: "pill.pets" },
    { icon: WifiHigh, key: "pill.wifi" },
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

  const services = [
    { title: "Swimming Pool", image: images.heroHome, icon: Waves },
    { title: "Meeting & Events", image: images.beachSunset, icon: UsersThree },
    { title: "Dining Options", image: images.kitchenBright, icon: CookingPot },
    { title: "Luxurious Rooms", image: images.bedroomMain, icon: Bed },
    { title: "Beach Access", image: images.beachSunset, icon: BeachBall },
  ];

  return (
    <>
      {/* HERO — full-bleed video or poster; HotelBeach-style split + CTAs */}
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36 lg:pb-32">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={images.beachSunset}
          preload="metadata"
          aria-hidden="true"
          src={heroVideoSrc}
        />
        <div className="absolute inset-0 bg-navy/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-navy/20 to-navy/25" />

        <div className="relative w-full px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="mx-auto w-full max-w-[1400px]">
            {/* Headline + circle — wide gap, airy type */}
            <div className="flex flex-col gap-16 lg:flex-row lg:items-end lg:justify-between lg:gap-x-16 xl:gap-x-24 2xl:gap-x-32">
              <div className="min-w-0 max-w-4xl space-y-8 text-left md:space-y-10 lg:max-w-[46rem] lg:space-y-12 xl:max-w-[52rem]">
                <p className="eyebrow animate-fade-in text-sand/85 tracking-[0.35em]">{t("home.heroEyebrow")}</p>
                <h1 className="animate-fade-up font-body tracking-normal text-sand text-[clamp(1.875rem,3.5vw+0.5rem,3.8125rem)] leading-[1.45] md:leading-[1.48]">
                  <span className="block font-medium">{t("home.heroTitle1")}</span>
                  <span className="mt-6 block font-normal text-dune text-[clamp(1.5rem,2.5vw+0.35rem,3rem)] leading-[1.42] md:mt-8 lg:mt-10">
                    {t("home.heroTitle2")}
                  </span>
                </h1>
              </div>

              <div className="flex shrink-0 justify-center lg:justify-end lg:pb-1">
                <a
                  href={getBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-44 w-44 shrink-0 items-center justify-center rounded-full bg-dune px-7 text-center font-body text-lg font-normal leading-snug tracking-normal text-navy shadow-lift transition hover:scale-[1.03] md:h-52 md:w-52 md:text-xl md:leading-normal"
                >
                  {t("nav.bookDirect")}
                </a>
              </div>
            </div>

            {/* Full-width rule — reads “wide” like the reference */}
            <div className="mt-14 w-full border-t border-white/40 md:mt-20 lg:mt-24" />

            {/* Subcopy + pill — separated row, generous vertical rhythm */}
            <div className="mt-10 flex flex-col gap-10 md:mt-12 md:gap-12 lg:mt-14 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
              <p className="max-w-xl font-body text-[17px] font-normal leading-[1.65] text-sand/90 md:max-w-2xl md:text-lg md:leading-[1.7]">
                {t("home.heroSub")}
              </p>
              <Link
                to="/accommodatie"
                className="group inline-flex shrink-0 items-center gap-4 self-start rounded-full border border-white/45 bg-white/10 px-6 py-3 pl-8 font-body text-xs font-semibold uppercase tracking-[0.22em] text-sand backdrop-blur-sm transition hover:border-white/70 hover:bg-white/15 lg:self-end"
              >
                {t("home.heroViewAccommodation")}
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sand text-navy transition group-hover:scale-105">
                  <ArrowUpRight className="h-4 w-4" weight="bold" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 opacity-60 animate-float">
          <div className="h-12 w-px bg-sand/40" />
        </div>
      </section>

      <section className="bg-sand py-10 md:py-14">
        <div className="container-wide mx-auto max-w-5xl">
          <AvailabilityBar />
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="section-py bg-sand relative overflow-hidden">
        <div className="container-narrow text-center py-20">
          <p className="eyebrow mb-8 text-navy/40 tracking-[0.4em] uppercase">{t("home.introEyebrow")}</p>
          <h2 className="display-italic text-navy text-4xl md:text-6xl lg:text-7xl mb-12">
            {t("home.introTitle1")} <br />{t("home.introTitle2")}
          </h2>
          <div className="w-16 h-[1px] bg-dune mx-auto mb-16" />
          <div className="max-w-3xl mx-auto space-y-8 text-navy/60 text-lg leading-relaxed-luxury font-light">
            <p className="first-letter:text-5xl first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:text-navy">
              {t("home.introP1")}
            </p>
            <p>{t("home.introP2")}</p>
          </div>
        </div>
      </section>

      {/* FULL BLEED CONTENT BLOCK 1 — mobile: stack image then copy; lg: split */}
      <section className="relative overflow-hidden bg-sand lg:bg-transparent lg:min-h-screen">
        <div className="relative z-0 w-full aspect-[5/4] sm:aspect-[3/2] lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2 lg:aspect-auto">
          <img
            src={images.kitchenBright}
            alt="Interior Kitchen"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="relative z-10 flex lg:min-h-screen lg:items-center">
          <div className="container-wide flex w-full justify-end">
            <div className="w-full space-y-8 bg-sand px-6 py-10 sm:px-8 md:p-24 lg:w-1/2 lg:bg-transparent lg:p-32">
              <h2 className="display-italic text-navy text-4xl md:text-6xl">
                Kitchen & Social Space
              </h2>
              <p className="text-navy/60 leading-relaxed-luxury text-lg font-light">
                Crafted with natural materials and modern amenities, the open-plan living and kitchen area is the heart of the home.
              </p>
              <Link
                to="/accommodatie"
                className="group inline-flex items-center gap-4 text-navy uppercase tracking-widest text-sm font-bold border-b border-navy/20 pb-2 transition-all hover:gap-6"
              >
                {t("home.exploreSpace")}{" "}
                <ArrowRight weight="bold" className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FULL BLEED CONTENT BLOCK 2 */}
      <section className="relative overflow-hidden bg-sand lg:bg-transparent lg:min-h-screen">
        <div className="relative z-0 w-full aspect-[5/4] sm:aspect-[3/2] lg:absolute lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-1/2 lg:aspect-auto">
          <img
            src={images.bedroomMain}
            alt="Interior Bedroom"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="relative z-10 flex lg:min-h-screen lg:items-center">
          <div className="container-wide flex w-full justify-start">
            <div className="w-full space-y-8 bg-sand px-6 py-10 sm:px-8 md:p-24 lg:w-1/2 lg:bg-transparent lg:p-32">
              <h2 className="display-italic text-navy text-4xl md:text-6xl">
                Nachtrust aan Zee
              </h2>
              <p className="text-navy/60 leading-relaxed-luxury text-lg font-light">
                Experience the sound of waves as you drift off in our boutique-style master bedroom.
              </p>
              <Link
                to="/accommodatie"
                className="group inline-flex items-center gap-4 text-navy uppercase tracking-widest text-sm font-bold border-b border-navy/20 pb-2 transition-all hover:gap-6"
              >
                Discover Bedroom{" "}
                <ArrowRight weight="bold" className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LARGE ATMOSPHERIC BREAK */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src={images.livingLifestyle}
          className="absolute inset-0 w-full h-full object-cover scale-110"
          alt="Lifestyle"
          style={{ transform: "translateY(var(--scroll-offset, 0))" }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 p-12 md:p-20 rounded-[2rem] text-sand shadow-lift">
            <Quotes weight="thin" className="w-12 h-12 text-dune/60 mx-auto mb-8" />
            <p className="display-italic text-2xl md:text-4xl leading-relaxed italic mb-8">
              "The perfect spot to lose track of time with a good book and the sound of the sea."
            </p>
            <p className="eyebrow tracking-widest">— Erwin from the Netherlands</p>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID SIMPLIFIED */}
      <section className="section-py bg-sand">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {reviews.map((review) => (
              <div key={review.name} className="space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} weight="fill" className="w-3.5 h-3.5 text-dune" />
                  ))}
                </div>
                <p className="text-navy/70 italic text-[17px] leading-relaxed">
                  "{t(review.textKey)}"
                </p>
                <div>
                  <p className="font-bold text-navy uppercase tracking-widest text-xs">{review.name}</p>
                  <p className="text-navy/40 text-xs mt-1 uppercase tracking-widest">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST ELEMENTS */}
      <section className="bg-sand border-y border-navy/5 py-12">
        <div className="container-wide mx-auto flex max-w-lg flex-col items-stretch gap-5 opacity-60 grayscale hover:grayscale-0 sm:max-w-xl md:max-w-none md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-16 md:gap-y-6 lg:gap-x-24 transition-all duration-700">
          {trustItems.map((item) => (
            <div key={item.key} className="flex items-center gap-3 md:w-auto">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center text-navy" aria-hidden>
                <item.icon weight="thin" className="h-6 w-6" />
              </span>
              <span className="eyebrow min-w-0 flex-1 text-left text-xs tracking-[0.2em] md:flex-initial">
                {t(item.key)}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES MARQUEE */}
      <section className="bg-sand py-24 overflow-hidden">
        <div className="container-wide mb-16">
          <p className="eyebrow mb-4 tracking-[0.4em] text-navy/40 uppercase">Amenities & Services</p>
          <h2 className="display-italic text-6xl md:text-8xl text-navy">Services</h2>
        </div>

        <div 
          className="group flex overflow-hidden p-2 [--gap:1.5rem] [--duration:40s]"
        >
          <div className="flex w-max shrink-0 gap-[var(--gap)] pr-[var(--gap)] animate-marquee group-hover:[animation-play-state:paused]">
            {[...services, ...services].map((service, idx) => (
              <div 
                key={`${service.title}-${idx}`} 
                className="relative w-[300px] md:w-[450px] shrink-0 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lift transition-transform duration-700 hover:scale-[1.02]"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end items-start text-sand">
                  <div className="mb-4">
                    <service.icon weight="thin" className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl md:text-2xl tracking-[0.1em] uppercase font-bold">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* LOCATION TEASER */}
      <section className="section-py">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="eyebrow mb-4 inline-flex items-center gap-2">
              <MapPin weight="thin" className="w-3.5 h-3.5" /> Scheveningen, Den Haag
            </p>
            <h2 className="display-italic text-navy">
              {t("home.locTitle")}
            </h2>
            <p className="mt-6 text-navy/75">
              {t("home.locText")}
            </p>
            <Link
              to="/accommodatie"
              className="mt-8 inline-flex items-center gap-1.5 border-b-2 border-dune pb-1 font-medium text-navy transition-all hover:gap-3"
            >
              {t("home.exploreSpace")} <ArrowRight weight="bold" className="h-4 w-4" />
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

      {/* REVIEWS SECTION */}
      <section className="bg-sand section-py overflow-hidden relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-dune-soft/40 to-transparent" />
        <div className="container-wide relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-20 md:mb-28">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-4 mb-8">
                <p className="eyebrow text-navy/40 tracking-[0.4em] uppercase">{t("home.revEyebrow")}</p>
                <span className="h-px w-16 bg-dune/70" />
              </div>
              <h2 className="display-italic text-navy text-4xl md:text-6xl lg:text-7xl mb-8 max-w-4xl">
                {t("home.revTitle")}
              </h2>
              <p className="text-lg md:text-xl text-navy/60 font-light leading-relaxed-luxury max-w-3xl">
                {t("home.revSub")}
              </p>
            </div>

            <aside className="lg:col-span-4">
              <div className="bg-white/70 backdrop-blur-md rounded-[2rem] p-7 md:p-8 border border-white/80 shadow-soft">
                <p className="eyebrow text-navy/50 tracking-[0.22em] mb-4">BOOKING.COM</p>
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="font-display text-5xl leading-none text-navy">9.1</p>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-navy/50 mt-2">Superb rating</p>
                  </div>
                  <div className="flex gap-1 text-dune">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} weight="fill" className="w-4 h-4" />
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            {/* Featured Image Column */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-lift group">
                <img 
                  src={images.livingReading} 
                  alt="Cozy moments at Tiny Beachhouse" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/20" />
                <div className="absolute top-10 left-10">
                  <div className="glass-pill py-2 px-6 flex items-center gap-2">
                    <Star weight="fill" className="w-3 h-3 text-sand" />
                    <span className="eyebrow text-[9px] text-sand tracking-[0.2em] font-bold">TOP RATED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-8">
                <Quotes weight="thin" className="w-10 h-10 text-dune/40" />
                <p className="display-italic text-2xl md:text-3xl lg:text-4xl text-navy leading-relaxed italic pr-8">
                  "The accommodation is cozy, but fully equipped. Beautiful bathroom and a spacious bedroom. Steps away from the sand."
                </p>
                <div className="pt-4">
                  <p className="font-bold text-navy uppercase tracking-[0.2em] text-xs">Pascale</p>
                  <p className="text-navy/40 text-[10px] mt-1 uppercase tracking-[0.2em]">Verified Guest</p>
                </div>
              </div>

              {/* Booking Stats Grid */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-10 border-t border-navy/5 pt-16">
                {ratingCategories.slice(0, 4).map((cat) => (
                  <div key={cat.label} className="space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-navy/30">{cat.label}</p>
                    <p className="text-4xl font-display text-navy">{cat.score}</p>
                  </div>
                ))}
              </div>

              {/* Booking.com Refined Strip */}
              <div className="bg-navy p-10 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-lift">
                <div className="flex items-center gap-6">
                  <div className="text-sand border border-sand/20 w-16 h-16 rounded-2xl flex items-center justify-center font-display text-3xl">
                    9.1
                  </div>
                  <div>
                    <p className="text-sand font-bold uppercase tracking-[0.2em] text-[11px]">Superb Experience</p>
                    <p className="text-sand/40 text-[10px] mt-1 uppercase tracking-[0.1em]">On Booking.com</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} weight="fill" className="w-3.5 h-3.5 text-dune" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand pb-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24">
            {reviews.slice(1).map((r, idx) => (
              <article
                key={r.name}
                className={cn(
                  "bg-white rounded-[2.5rem] p-12 shadow-sm flex flex-col items-start relative border border-black/[0.03] transition-all duration-500 hover:shadow-xl hover:-translate-y-1",
                  idx === 1 ? "md:translate-y-16" : ""
                )}
              >
                <Quotes weight="fill" className="absolute top-10 right-10 w-10 h-10 text-navy/[0.02]" />
                
                <div className="flex gap-1 text-[#d4b996] mb-10">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} weight="fill" className="w-3.5 h-3.5" />
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
                <ArrowRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
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
