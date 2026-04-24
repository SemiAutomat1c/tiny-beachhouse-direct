import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Buildings,
  Car,
  ForkKnife,
  GlobeStand,
  House,
  IconProps,
  MapPin,
  PaintBrush,
  PawPrint,
  Quotes,
  ShoppingBag,
  Star,
  Tree,
  Umbrella,
  WifiHigh,
} from "@phosphor-icons/react";
import { getBookingUrl } from "@/lib/booking";
import { activityImageUrls } from "@/lib/activityImages";
import { images, galleryImages } from "@/lib/images";
import { BookDirectBanner } from "@/components/site/BookDirectBanner";
import { Lightbox } from "@/components/site/Lightbox";
import { useI18n } from "@/i18n/I18nContext";
import type { TranslationKey } from "@/i18n/translations";

/** Default hero MP4 on Cloudinary — override with `VITE_HERO_VIDEO_URL` (e.g. local `public/…`). */
const DEFAULT_HERO_VIDEO_SRC =
  "https://res.cloudinary.com/dthannwji/video/upload/v1776847841/Scheveningen_14-02-2026_qqnkba.mp4";

const Index = () => {
  const { t } = useI18n();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const heroVideoSrc =
    import.meta.env.VITE_HERO_VIDEO_URL?.trim() || DEFAULT_HERO_VIDEO_SRC;

  const accSpecs: { icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>; key: TranslationKey }[] = [
    { icon: House, key: "home.accSpec1" },
    { icon: WifiHigh, key: "home.accSpec2" },
    { icon: Car, key: "home.accSpec3" },
    { icon: PawPrint, key: "home.accSpec4" },
  ];

  const reviewShowcase: { textKey: TranslationKey; byKey: TranslationKey }[] = [
    { textKey: "home.review1", byKey: "home.reviewBy1" },
    { textKey: "home.review2", byKey: "home.reviewBy2" },
  ];

  const activities: { titleKey: TranslationKey; image: string; icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> }[] = [
    { titleKey: "home.actBoulevard", image: activityImageUrls[0], icon: MapPin },
    { titleKey: "home.actStrandtenten", image: activityImageUrls[1], icon: Umbrella },
    { titleKey: "home.actDuinen", image: activityImageUrls[2], icon: Tree },
    { titleKey: "home.actFoodhall", image: activityImageUrls[3], icon: ForkKnife },
    { titleKey: "home.actMadurodam", image: activityImageUrls[4], icon: GlobeStand },
    { titleKey: "home.actMall", image: activityImageUrls[5], icon: ShoppingBag },
    { titleKey: "home.actBinnenstad", image: activityImageUrls[6], icon: Buildings },
    { titleKey: "home.actMusea", image: activityImageUrls[7], icon: PaintBrush },
  ];

  return (
    <>
      {/* HERO — full-bleed video over navy; HotelBeach-style split + CTAs */}
      <section className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden pb-8 pt-[4.75rem] sm:pb-10 sm:pt-28 md:pb-12 md:pt-32">
        <div className="absolute inset-0 bg-navy" aria-hidden="true" />
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          src={heroVideoSrc}
        />
        <div className="absolute inset-0 bg-navy/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-navy/10 to-navy/15" />

        <div className="relative w-full px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="w-full">
            {/* Headline left, Book Direct circle right — same row on all breakpoints */}
            <div className="flex w-full flex-row items-center gap-3 sm:gap-5 md:gap-8 lg:items-end">
              <div className="min-w-0 max-w-2xl flex-1 space-y-3 text-left md:space-y-4 lg:max-w-3xl">
                <p className="eyebrow animate-fade-in text-sand/85 tracking-[0.35em]">{t("home.heroEyebrow")}</p>
                <h1 className="animate-fade-up font-display font-light tracking-normal text-white">
                  <span className="block text-[clamp(1.875rem,3.5vw+0.5rem,3.8125rem)] leading-[1.08]">
                    {t("home.heroTitle1")}
                  </span>
                  <span className="mt-2 block font-display font-light text-white/95 text-[clamp(1.5rem,2.5vw+0.35rem,3rem)] leading-[1.15] md:mt-2.5">
                    {t("home.heroTitle2")}
                  </span>
                </h1>
              </div>
            </div>

            {/* Full-width rule — reads “wide” like the reference */}
            <div className="mt-5 w-full border-t border-white/40 md:mt-6 lg:mt-7" />

            {/* Subcopy + pill — bottom corners */}
            <div className="mt-4 flex flex-col gap-6 md:mt-5 md:gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
              <p className="max-w-md font-body text-[16px] font-normal leading-[26px] text-sand/90 md:max-w-lg">
                {t("home.heroSub")}
              </p>
              <Link
                to="/accommodatie"
                className="group inline-flex shrink-0 items-center gap-4 self-start rounded-full border border-white/45 bg-white/10 px-5 py-1.5 pl-6 font-body text-xs font-semibold uppercase tracking-[0.22em] text-sand backdrop-blur-sm transition hover:border-white/70 hover:bg-white/15 lg:self-end"
              >
                {t("home.heroViewAccommodation")}
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sand text-navy transition group-hover:scale-105">
                  <ArrowUpRight className="h-4 w-4" weight="bold" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-50 animate-float md:bottom-8">
          <div className="h-9 w-px bg-sand/40 md:h-11" />
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="pt-12 md:pt-20 pb-20 md:pb-28 lg:pb-32 bg-[#faf2e6] relative overflow-hidden">
        <div className="container-wide">
          <div className="container-narrow text-center mb-16 md:mb-24 pt-4 md:pt-8">
            <p className="eyebrow mb-6 text-[#1E1E1E]/40 tracking-[0.4em] uppercase">
              {t("home.introEyebrow")}
            </p>
            <h2 className="display-serif text-[#1E1E1E] text-[32px] md:text-[49px] mb-12 leading-[1.326]">
              {t("home.introTitle")}
            </h2>
            <div className="w-16 h-[1px] bg-dune mx-auto mb-12" />
            <p className="max-w-3xl mx-auto text-[#1E1E1E] text-base leading-[26px] font-normal">
              {t("home.introBody")}
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square overflow-hidden group">
            <img
              src={images.livingArea}
              alt="Tiny Beachhouse Interior"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="relative aspect-square overflow-hidden group">
            <img
              src={images.beachSunset}
              alt="Scheveningen Beach"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>

      </section>

      {/* ACTIVITIES — Scheveningen & Den Haag (H2, body, marquee like Services) */}
      <section
        className="bg-white py-16 md:py-20 lg:py-24 overflow-hidden"
        aria-labelledby="home-activities-heading"
      >
        <div className="container-wide">
          <div className="mb-10 flex w-full flex-col gap-8 md:mb-12 lg:mb-16 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <h2
              id="home-activities-heading"
              className="display-serif shrink-0 text-[#1E1E1E] text-[32px] md:text-[49px] leading-[1.326] max-w-sm md:max-w-md"
            >
              {t("home.actTitle")}
            </h2>
            <p className="shrink-0 max-w-md text-left text-[#1E1E1E] text-base font-normal leading-[26px] sm:max-w-lg lg:max-w-xl">
              {t("home.actBody")}
            </p>
          </div>
        </div>

        <div className="group flex overflow-hidden p-2 [--gap:1.5rem] [--duration:50s]">
          <div className="flex w-max shrink-0 gap-[var(--gap)] pr-[var(--gap)] animate-marquee group-hover:[animation-play-state:paused]">
            {[...activities, ...activities].map((item, idx) => (
              <div
                key={`${item.titleKey}-${idx}`}
                className="group/card relative w-[300px] shrink-0 overflow-hidden aspect-[4/5] transition-transform duration-700 hover:scale-[1.02] md:w-[450px]"
              >
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-0 flex items-end justify-between gap-4 p-6 text-sand md:p-8">
                  <item.icon
                    weight="thin"
                    className="h-9 w-9 shrink-0 md:h-10 md:w-10"
                    aria-hidden
                  />
                  <h3 className="max-w-[min(12rem,55%)] text-right font-body text-sm font-semibold uppercase leading-snug tracking-[0.14em] md:text-base">
                    {t(item.titleKey)}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCOMMODATION — Framer-style: large image inset on the right; smaller card straddles seam + cream */}
      <section
        className="w-full border-y border-dune/15 bg-[#faf2e6]"
        aria-labelledby="home-accommodation-heading"
      >
        <div className="grid w-full min-h-[100dvh] grid-cols-1 items-stretch lg:min-h-screen lg:grid-cols-2 lg:gap-x-6 xl:gap-x-10 2xl:gap-x-14">
          <div className="order-2 flex w-full min-h-0 flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:order-1 lg:min-h-screen lg:max-w-none lg:justify-center lg:py-20 lg:pl-8 lg:pr-2 xl:pl-12 2xl:pl-20 2xl:pr-8">
            <div className="relative z-20 max-w-2xl">
            <h2
              id="home-accommodation-heading"
              className="display-serif text-[#1E1E1E] text-[32px] leading-[1.326] md:text-[49px]"
            >
              {t("home.accTitle")}
            </h2>
            <p className="mt-6 text-base font-normal leading-[26px] text-[#1E1E1E]">
              {t("home.accBody")}
            </p>
            <ul className="mt-10 space-y-3 border-t border-dune/35 pt-8">
              {accSpecs.map((row) => (
                <li key={row.key} className="flex items-center gap-3 text-sm font-medium text-[#1E1E1E]">
                  <row.icon
                    weight="regular"
                    className="h-5 w-5 shrink-0 text-navy/45"
                    aria-hidden
                  />
                  {t(row.key)}
                </li>
              ))}
            </ul>
            <Link
              to="/accommodatie"
              className="group mt-10 inline-flex w-fit items-center gap-3 border-b border-navy/25 pb-1.5 text-sm font-bold uppercase tracking-[0.2em] text-navy transition-all hover:gap-5"
            >
              {t("home.exploreSpace")}{" "}
              <ArrowRight
                weight="bold"
                className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            </div>
          </div>
          <div className="relative z-0 order-1 h-[22rem] min-h-0 w-full overflow-visible sm:h-[28rem] lg:order-2 lg:h-full lg:min-h-screen">
            {/* Main photo — not full-bleed: weighted right, with margin from the frame (like the reference) */}
            <div
              className="absolute overflow-hidden border border-dune/10 shadow-sm
                inset-2.5
                sm:inset-3
                lg:inset-0
                lg:left-[10%] lg:top-1/2 lg:h-[min(64vh,38rem)] lg:max-w-[min(32rem,88%)] lg:-translate-y-1/2 lg:rounded-sm
                lg:right-5 xl:left-[5%] xl:max-w-[40rem] xl:h-[min(62vh,42rem)] 2xl:right-8
              "
            >
              <img
                src={images.kitchenBright}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            {/* Foreground photo — on mobile, corner overlap; on lg+ half sits on cream past the column seam */}
            <div
              className="absolute z-20 aspect-[3/4] w-40 max-w-[min(92%,14rem)]
                border border-white/20 bg-white/5 object-cover shadow-2xl
                bottom-4 right-4 sm:bottom-5 sm:right-5 sm:max-w-[15rem] md:w-44
                lg:bottom-auto lg:left-0 lg:right-auto lg:top-1/2
                lg:w-56 lg:max-w-[16rem] lg:-translate-x-1/2 lg:-translate-y-1/2
                xl:max-w-[18rem] xl:w-64
              "
            >
              <img
                src={images.livingArea}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS — full-bleed Scheveningen beach, two quotes + Booking.com score */}
      <section
        className="relative isolate min-h-[min(100dvh,52rem)] overflow-hidden lg:min-h-[90vh]"
        aria-labelledby="home-reviews-heading"
      >
        <img
          src={images.beachSunset}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/55" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/50 to-navy/25"
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-between gap-14 px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:min-h-[90vh] lg:flex-row lg:items-end lg:gap-12 lg:px-10 lg:py-20 xl:px-12">
          <div className="flex max-w-3xl flex-col justify-center lg:max-w-[min(100%,42rem)] lg:py-8 xl:max-w-2xl">
            <h2 id="home-reviews-heading" className="sr-only">
              {t("home.revEyebrow")} — {t("home.revTitle")}
            </h2>
            <div className="space-y-12 md:space-y-16 lg:space-y-20">
              {reviewShowcase.map((block) => (
                <blockquote key={block.textKey} className="border-0 p-0">
                  <Quotes
                    weight="fill"
                    className="mb-4 h-9 w-9 text-white/35 sm:mb-5 sm:h-10 sm:w-10"
                    aria-hidden
                  />
                  <p className="font-body text-lg font-light leading-relaxed text-white/95 md:text-xl">
                    {t(block.textKey)}
                  </p>
                  <footer className="mt-5 text-sm font-medium tracking-wide text-white/65 md:mt-6">
                    {t(block.byKey)}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>

          <aside className="w-full shrink-0 lg:max-w-sm lg:self-end">
            <a
              href="https://www.booking.com/hotel/nl/tiny-beachhouse.html"
              target="_blank"
              rel="noreferrer noopener"
              className="group flex flex-col gap-4 rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-md transition hover:border-white/35 hover:bg-white/15 md:p-7"
            >
              <p className="eyebrow text-[10px] tracking-[0.28em] text-white/70">BOOKING.COM</p>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-display text-5xl font-light leading-none text-white md:text-6xl">
                    9.1
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-dune">
                    {t("home.bookingRatingWord")}
                  </p>
                </div>
                <div className="flex gap-0.5 text-dune">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} weight="fill" className="h-5 w-5 md:h-6 md:w-6" />
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/75">{t("home.revSub")}</p>
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3">
                {t("home.revMore")}
                <ArrowRight
                  weight="bold"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </p>
            </a>
          </aside>
        </div>
      </section>

      {/* LOCATION — copy + map */}
      <section className="section-py bg-[#faf2e6]">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-4 inline-flex items-center gap-2 text-[#1E1E1E]/50">
              <MapPin weight="thin" className="w-3.5 h-3.5" aria-hidden />
              {t("home.locEyebrow")}
            </p>
            <h2 className="display-serif text-[#1E1E1E] text-[32px] leading-[1.326] md:text-[49px]">
              {t("home.locTitle")}
            </h2>
            <p className="mt-6 text-base font-normal leading-[26px] text-[#1E1E1E]">
              {t("home.locText")}
            </p>
            <Link
              to="/accommodatie"
              className="mt-8 inline-flex items-center gap-1.5 border-b-2 border-dune pb-1 font-medium text-navy transition-all hover:gap-3"
            >
              {t("home.exploreSpace")} <ArrowRight weight="bold" className="h-4 w-4" />
            </Link>
          </div>
          <div className="group relative aspect-[4/3] overflow-hidden">
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
            <div className="pointer-events-none absolute left-5 top-5 max-w-[200px] border border-dune/20 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm md:px-5 md:py-3">
              <p className="eyebrow mb-1 text-[#1E1E1E]/60">{t("home.locMapTitle")}</p>
              <p className="text-sm leading-snug text-[#1E1E1E]">{t("home.locMapBlurb")}</p>
            </div>
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
