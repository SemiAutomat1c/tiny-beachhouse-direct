import { useState, type ForwardRefExoticComponent, type RefAttributes } from "react";
import type { IconProps } from "@phosphor-icons/react";
import {
  ArrowRight,
  Bathtub,
  Car,
  Check,
  ChefHat,
  Coffee,
  Key,
  Lightning,
  PawPrint,
  SpeakerX,
  Television,
  TreeEvergreen,
  Wine,
  WifiHigh,
  X,
} from "@phosphor-icons/react";
import { getBookingUrl } from "@/lib/booking";
import { images, galleryImages } from "@/lib/images";
import { Lightbox } from "@/components/site/Lightbox";
import { PageHero } from "@/components/site/PageHero";
import { useI18n } from "@/i18n/I18nContext";
import type { TranslationKey } from "@/i18n/translations";
import { cn } from "@/lib/utils";

type SiteIcon = ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;

function Polaroid({
  src,
  alt,
  className,
  rotation = "rotate-[-4deg]",
}: {
  src: string;
  alt: string;
  className?: string;
  rotation?: string;
}) {
  return (
    <div
      className={cn(
        "border-[10px] border-white bg-white shadow-lift",
        rotation,
        "w-40 shrink-0 transition duration-500 hover:z-10 hover:scale-105 sm:w-48",
        className,
      )}
    >
      <img src={src} alt={alt} className="aspect-square w-full object-cover" loading="lazy" />
    </div>
  );
}

function FullBleedFigure({
  src,
  alt,
  minHeightClass = "min-h-[42vh] md:min-h-[56vh]",
  overlayClass,
}: {
  src: string;
  alt: string;
  minHeightClass?: string;
  overlayClass?: string;
}) {
  return (
    <figure className={cn("relative w-full overflow-hidden", minHeightClass)}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
        loading="lazy"
      />
      {overlayClass ? <div className={cn("absolute inset-0", overlayClass)} /> : null}
    </figure>
  );
}

const Accommodatie = () => {
  const { t } = useI18n();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const facilities: { icon: SiteIcon; key: TranslationKey }[] = [
    { icon: WifiHigh, key: "acc.fac.wifi" },
    { icon: Car, key: "acc.fac.parking" },
    { icon: Lightning, key: "acc.fac.ev" },
    { icon: Key, key: "acc.fac.entrance" },
    { icon: PawPrint, key: "acc.fac.pets" },
    { icon: Wine, key: "acc.fac.wine" },
    { icon: Bathtub, key: "acc.fac.shower" },
    { icon: Television, key: "acc.fac.tv" },
    { icon: Coffee, key: "acc.fac.coffee" },
    { icon: ChefHat, key: "acc.fac.fullKitchen" },
    { icon: TreeEvergreen, key: "acc.fac.terrace" },
    { icon: SpeakerX, key: "acc.fac.soundproof" },
  ];

  const features: TranslationKey[] = [
    "acc.feature1", "acc.feature2", "acc.feature3", "acc.feature4",
    "acc.feature5", "acc.feature6", "acc.feature7",
  ];

  const houseRules: { icon: SiteIcon; key: TranslationKey; positive: boolean }[] = [
    { icon: Check, key: "acc.rule1", positive: true },
    { icon: Check, key: "acc.rule2", positive: true },
    { icon: Check, key: "acc.rule3", positive: true },
    { icon: X, key: "acc.rule4", positive: false },
    { icon: X, key: "acc.rule5", positive: false },
    { icon: X, key: "acc.rule6", positive: false },
  ];

  const spotlights: { src: string; alt: string; titleKey: TranslationKey; textKey: TranslationKey }[] = [
    { src: images.kitchenBright, alt: "Kitchen at Tiny Beachhouse", titleKey: "acc.spot1Title", textKey: "acc.spot1Text" },
    { src: images.bedroomMain, alt: "Bedroom at Tiny Beachhouse", titleKey: "acc.spot2Title", textKey: "acc.spot2Text" },
    { src: images.bathroomPremium, alt: "Bathroom at Tiny Beachhouse", titleKey: "acc.spot3Title", textKey: "acc.spot3Text" },
  ];

  return (
    <>
      <PageHero
        variant="editorial"
        imageSrc={images.heroAcc}
        imageAlt="Golden hour at a Scheveningen beach restaurant, tables on the sand"
        eyebrow={t("acc.heroEyebrow")}
        title={t("acc.heroTitle")}
      />

      {/* Intro — full-width white, polaroids + centered copy */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="container-wide">
          <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
            <Polaroid
              src={images.dogExperience}
              alt="A cozy stay for everyone"
              rotation="rotate-[-5deg] lg:rotate-[-6deg]"
              className="hidden lg:block"
            />
            <div className="max-w-xl text-center lg:mx-auto lg:max-w-lg lg:flex-1">
              <p className="text-lg font-light leading-relaxed text-navy/75 md:text-xl md:leading-relaxed-luxury">
                {t("acc.introLead")}
              </p>
              <a
                href="#ruimte"
                className="group mt-10 inline-flex items-center gap-4 rounded-full border border-navy/10 bg-sand/40 px-6 py-3 pr-2 text-navy shadow-soft backdrop-blur-sm transition hover:border-navy/20 hover:bg-sand"
              >
                <span className="text-xs font-bold uppercase tracking-[0.22em]">{t("acc.introCta")}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sand transition group-hover:scale-105">
                  <ArrowRight className="h-4 w-4" weight="bold" />
                </span>
              </a>
            </div>
            <Polaroid
              src={images.livingReading}
              alt="Reading nook at Tiny Beachhouse"
              rotation="rotate-[5deg] lg:rotate-[6deg]"
              className="hidden lg:block"
            />
            <div className="flex justify-center gap-6 lg:hidden">
              <Polaroid
                src={images.dogExperience}
                alt="A cozy stay for everyone"
                rotation="rotate-[-4deg]"
                className="w-36 sm:w-40"
              />
              <Polaroid
                src={images.livingReading}
                alt="Reading nook at Tiny Beachhouse"
                rotation="rotate-[4deg]"
                className="w-36 sm:w-40"
              />
            </div>
          </div>
        </div>
      </section>

      <FullBleedFigure src={images.beachSunset} alt="Scheveningen beach at sunset" />

      {/* Staggered story grid — full-width sand */}
      <section id="ruimte" className="w-full bg-sand py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-center px-6 py-14 md:px-10 md:py-20 lg:px-16 lg:py-24 xl:px-24">
            <p className="eyebrow mb-4 tracking-[0.3em] text-navy/45">{t("acc.spaceEyebrow")}</p>
            <h2 className="display-italic text-4xl text-navy md:text-5xl lg:text-6xl">{t("acc.spaceTitle1")}</h2>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-navy/70">{t("acc.storyBlurb")}</p>
            <ul className="mt-8 max-w-lg space-y-3 border-l border-dune/40 pl-5 text-sm font-light leading-relaxed text-navy/70 md:text-[15px]">
              {features.map((key) => (
                <li key={key}>{t(key)}</li>
              ))}
            </ul>
          </div>
          <div className="min-h-[300px] w-full lg:min-h-[min(100%,520px)]">
            <img
              src={images.kitchenIslandWide}
              alt="Bright open kitchen and island"
              className="h-full w-full object-cover lg:min-h-full"
              loading="lazy"
            />
          </div>
          <div className="min-h-[300px] w-full lg:min-h-[min(100%,520px)] lg:order-3">
            <img
              src={images.bedroomMain}
              alt="Master bedroom"
              className="h-full w-full object-cover lg:min-h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-14 md:px-10 md:py-20 lg:order-4 lg:px-16 lg:py-24 xl:px-24">
            <h2 className="display-italic text-4xl text-navy md:text-5xl lg:text-6xl">{t("acc.spaceTitle2")}</h2>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-navy/70">{t("acc.visionBlurb")}</p>
            <a
              href={getBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex w-fit items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-navy"
            >
              {t("acc.ctaBtn")}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sand transition group-hover:scale-105">
                <ArrowRight className="h-4 w-4" weight="bold" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <FullBleedFigure src={images.livingLifestyle} alt="Living space at Tiny Beachhouse" />

      {/* Facilities — full-width white */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="container-wide">
          <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
            <p className="eyebrow mb-4 tracking-[0.3em] text-navy/45">{t("acc.facEyebrow")}</p>
            <h2 className="display-italic text-4xl text-navy md:text-5xl lg:text-6xl">{t("acc.facTitle")}</h2>
            <div className="mx-auto mt-8 h-px w-16 bg-dune/60" />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {facilities.map(({ icon: Icon, key }) => (
              <div
                key={key}
                className="flex flex-col items-center rounded-2xl border border-navy/[0.06] bg-sand/40 px-4 py-7 text-center transition hover:border-dune/30 hover:bg-sand md:rounded-3xl md:py-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm md:h-14 md:w-14">
                  <Icon className="h-5 w-5 text-navy md:h-6 md:w-6" weight="thin" />
                </div>
                <span className="text-xs font-medium tracking-wide text-navy/80 md:text-sm">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three spotlight cards — full-width, edge-to-edge images */}
      <section className="w-full bg-sand-deep/30">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {spotlights.map((spot) => (
            <article key={spot.titleKey} className="group relative flex min-h-[420px] flex-col justify-end md:min-h-[520px]">
              <img
                src={spot.src}
                alt={spot.alt}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent" />
              <div className="relative p-8 text-sand md:p-10 lg:p-12">
                <h3 className="font-display text-2xl font-light italic tracking-normal md:text-3xl">{t(spot.titleKey)}</h3>
                <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-sand/85 md:text-base">
                  {t(spot.textKey)}
                </p>
                <a
                  href={getBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-dune transition hover:text-sand"
                >
                  {t("acc.readMore")} <ArrowRight className="h-3.5 w-3.5" weight="bold" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* House rules — FAQ-style, tinted full-width band */}
      <section className="w-full bg-[hsl(167_22%_93%)] py-20 md:py-28">
        <div className="container-narrow px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-xl text-center md:mb-16">
            <p className="eyebrow mb-4 tracking-[0.3em] text-navy/45">{t("acc.rulesEyebrow")}</p>
            <h2 className="display-italic text-4xl text-navy md:text-5xl">{t("acc.rulesTitle")}</h2>
          </div>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-navy/10 bg-white/70 shadow-soft md:grid md:grid-cols-2">
            {[0, 1].map((col) => (
              <div key={col} className="divide-y divide-navy/10 md:border-e md:border-navy/10 md:last:border-e-0">
                {houseRules.slice(col * 3, col * 3 + 3).map((rule) => (
                  <div
                    key={rule.key}
                    className="flex items-start gap-4 bg-white/40 px-5 py-5 md:px-6 md:py-6"
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                        rule.positive ? "bg-seafoam/30 text-navy" : "bg-dune/20 text-navy",
                      )}
                    >
                      <rule.icon className="h-3.5 w-3.5" weight="bold" />
                    </span>
                    <span className="flex-1 pt-0.5 text-[15px] font-medium leading-snug text-navy md:text-base">
                      {t(rule.key)}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-lg text-center text-sm leading-relaxed text-navy/50">
            {t("acc.payment")}
          </p>
        </div>
      </section>

      {/* Gallery — heading contained, masonry full-bleed width */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="container-wide mb-12 text-center md:mb-16">
          <p className="eyebrow mb-4 tracking-[0.3em] text-navy/45">{t("acc.galEyebrow")}</p>
          <h2 className="display-italic text-4xl text-navy md:text-5xl lg:text-6xl">{t("acc.galTitle")}</h2>
        </div>
        <div className="relative left-1/2 w-screen max-w-none -translate-x-1/2 px-3 sm:px-4 md:px-6">
          <div className="columns-2 gap-3 sm:gap-4 md:columns-3 md:gap-5 lg:columns-4 [column-fill:_balance]">
            {galleryImages.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group mb-3 block w-full break-inside-avoid overflow-hidden sm:mb-4"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full rounded-lg transition duration-700 group-hover:scale-[1.02] sm:rounded-xl"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — solid navy */}
      <section className="flex min-h-[380px] w-full items-center bg-navy py-20 md:min-h-[440px] md:py-24">
        <div className="container-wide flex w-full flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
          <h2 className="display-italic max-w-lg text-3xl text-sand md:text-4xl lg:text-5xl">{t("acc.ctaTitle")}</h2>
          <a
            href={getBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-5 rounded-full border border-sand/30 bg-sand/10 px-3 py-2 pl-8 backdrop-blur-md transition hover:border-sand/50 hover:bg-sand/15"
          >
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-sand md:text-sm">{t("acc.ctaBtn")}</span>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-dune text-navy shadow-lift transition group-hover:scale-105">
              <ArrowRight className="h-5 w-5" weight="bold" />
            </span>
          </a>
        </div>
      </section>

      <Lightbox
        images={galleryImages}
        openIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </>
  );
};

export default Accommodatie;
