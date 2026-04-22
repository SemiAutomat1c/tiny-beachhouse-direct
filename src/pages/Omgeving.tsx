import { Link } from "react-router-dom";
import { AirplaneInFlight, ArrowRight, Car, MapPin, Train } from "@phosphor-icons/react";
import { images } from "@/lib/images";
import { PageHero } from "@/components/site/PageHero";
import { useI18n } from "@/i18n/I18nContext";
import type { TranslationKey } from "@/i18n/translations";
import { cn } from "@/lib/utils";

interface Attraction {
  img: string;
  badgeKey: TranslationKey;
  nameKey: TranslationKey;
  distKey: TranslationKey;
  textKey: TranslationKey;
}

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
  minHeightClass = "min-h-[42vh] md:min-h-[52vh]",
}: {
  src: string;
  alt: string;
  minHeightClass?: string;
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
    </figure>
  );
}

const Omgeving = () => {
  const { t } = useI18n();

  const attractions: Attraction[] = [
    {
      img: images.beachSunset,
      badgeKey: "omg.attr1.badge",
      nameKey: "omg.attr1.name",
      distKey: "omg.attr1.dist",
      textKey: "omg.attr1.text",
    },
    {
      img: images.livingSliding,
      badgeKey: "omg.attr2.badge",
      nameKey: "omg.attr2.name",
      distKey: "omg.attr2.dist",
      textKey: "omg.attr2.text",
    },
    {
      img: images.propertyCollage,
      badgeKey: "omg.attr3.badge",
      nameKey: "omg.attr3.name",
      distKey: "omg.attr3.dist",
      textKey: "omg.attr3.text",
    },
    {
      img: images.livingCozy,
      badgeKey: "omg.attr4.badge",
      nameKey: "omg.attr4.name",
      distKey: "omg.attr4.dist",
      textKey: "omg.attr4.text",
    },
    {
      img: images.exteriorTerraceReal,
      badgeKey: "omg.attr5.badge",
      nameKey: "omg.attr5.name",
      distKey: "omg.attr5.dist",
      textKey: "omg.attr5.text",
    },
    {
      img: images.livingReading,
      badgeKey: "omg.attr6.badge",
      nameKey: "omg.attr6.name",
      distKey: "omg.attr6.dist",
      textKey: "omg.attr6.text",
    },
  ];

  return (
    <>
      <PageHero
        variant="editorial"
        imageSrc={images.omgevingHero}
        imageAlt="Scheveningen beach and boulevard"
        eyebrow={t("omg.heroEyebrow")}
        title={
          <>
            {t("omg.heroTitle1")} <br />
            {t("omg.heroTitle2")}
          </>
        }
      />

      <section className="w-full bg-white py-20 md:py-28">
        <div className="container-wide">
          <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
            <Polaroid
              src={images.beachSunset}
              alt="Scheveningen beach"
              rotation="rotate-[-5deg] lg:rotate-[-6deg]"
              className="hidden lg:block"
            />
            <div className="max-w-xl text-center lg:mx-auto lg:max-w-lg lg:flex-1">
              <p className="text-lg font-light leading-relaxed text-navy/75 md:text-xl md:leading-relaxed-luxury">
                {t("omg.intro")}
              </p>
              <a
                href="#plekken"
                className="group mt-10 inline-flex items-center gap-4 rounded-full border border-navy/10 bg-sand/40 px-6 py-3 pr-2 text-navy shadow-soft backdrop-blur-sm transition hover:border-navy/20 hover:bg-sand"
              >
                <span className="text-xs font-bold uppercase tracking-[0.22em]">{t("omg.introCta")}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sand transition group-hover:scale-105">
                  <ArrowRight className="h-4 w-4" weight="bold" />
                </span>
              </a>
            </div>
            <Polaroid
              src={images.exteriorTerraceReal}
              alt="Tiny Beachhouse terrace"
              rotation="rotate-[5deg] lg:rotate-[6deg]"
              className="hidden lg:block"
            />
            <div className="flex justify-center gap-6 lg:hidden">
              <Polaroid src={images.beachSunset} alt="Scheveningen beach" rotation="rotate-[-4deg]" className="w-36 sm:w-40" />
              <Polaroid
                src={images.exteriorTerraceReal}
                alt="Tiny Beachhouse terrace"
                rotation="rotate-[4deg]"
                className="w-36 sm:w-40"
              />
            </div>
          </div>
        </div>
      </section>

      <FullBleedFigure src={images.livingArea} alt="Coastal living near Scheveningen" />

      <section id="plekken" className="w-full bg-sand-deep/30">
        <div className="container-wide py-16 text-center md:py-20 md:text-left">
          <p className="eyebrow mb-4 tracking-[0.3em] text-navy/45">{t("omg.gridEyebrow")}</p>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="display-italic text-4xl text-navy md:text-5xl lg:max-w-2xl lg:text-6xl">{t("omg.gridTitle")}</h2>
            <p className="max-w-md text-sm font-light italic leading-relaxed text-navy/55 md:text-right md:text-base">
              {t("omg.gridTagline")}
            </p>
          </div>
          <div className="mx-auto mt-10 h-px w-16 bg-dune/60 md:mx-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {attractions.map((a) => (
            <article
              key={a.nameKey}
              className="group relative flex min-h-[400px] flex-col justify-end md:min-h-[460px] lg:min-h-[500px]"
            >
              <img
                src={a.img}
                alt={t(a.nameKey)}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-6 left-6 z-10 md:top-8 md:left-8">
                <span className="inline-block rounded-full border border-white/25 bg-white/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-navy shadow-sm backdrop-blur-sm">
                  {t(a.badgeKey)}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/88 via-navy/28 to-transparent" />
              <div className="relative z-10 p-8 text-sand md:p-10 lg:p-12">
                <h3 className="font-display text-2xl font-light italic tracking-normal md:text-3xl">{t(a.nameKey)}</h3>
                <p className="mt-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-dune md:text-[11px]">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-dune/80" weight="thin" />
                  {t(a.distKey)}
                </p>
                <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-sand/88 md:text-[15px]">
                  {t(a.textKey)}
                </p>
                <a
                  href="#bereikbaar"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-dune transition hover:text-sand"
                >
                  {t("acc.readMore")} <ArrowRight className="h-3.5 w-3.5" weight="bold" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FullBleedFigure src={images.beachSunset} alt="Sunset on the Scheveningen coast" minHeightClass="min-h-[36vh] md:min-h-[48vh]" />

      <section id="bereikbaar" className="w-full bg-[hsl(167_22%_93%)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-center px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24 xl:px-20">
            <p className="eyebrow mb-4 tracking-[0.3em] text-navy/45">{t("omg.travelEyebrow")}</p>
            <h2 className="display-italic text-4xl text-navy md:text-5xl lg:text-6xl">{t("omg.travelTitle")}</h2>
            <div className="mt-12 space-y-10">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/80 shadow-sm">
                  <Car className="h-5 w-5 text-navy" weight="thin" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-light tracking-normal text-navy md:text-xl">{t("omg.car.title")}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-navy/70 md:text-[15px]">{t("omg.car.text")}</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/80 shadow-sm">
                  <Train className="h-5 w-5 text-navy" weight="thin" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-light tracking-normal text-navy md:text-xl">{t("omg.transit.title")}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-navy/70 md:text-[15px]">{t("omg.transit.text")}</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/80 shadow-sm">
                  <AirplaneInFlight className="h-5 w-5 text-navy" weight="thin" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-light tracking-normal text-navy md:text-xl">{t("omg.air.title")}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-navy/70 md:text-[15px]">{t("omg.air.text")}</p>
                </div>
              </div>
            </div>
            <Link
              to="/boeken"
              className="group mt-12 inline-flex w-fit items-center gap-3 rounded-full border border-navy/15 bg-white/70 px-6 py-3 pr-2 shadow-soft backdrop-blur-sm transition hover:border-navy/25 hover:bg-white"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-navy">{t("omg.bookCta")}</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sand transition group-hover:scale-105">
                <ArrowRight className="h-4 w-4" weight="bold" />
              </span>
            </Link>
          </div>
          <div className="relative min-h-[320px] w-full lg:min-h-[560px]">
            <iframe
              src="https://www.google.com/maps?q=Jacob+Pronkstraat,+2584+BS+Scheveningen&output=embed"
              width="100%"
              height="100%"
              className="absolute inset-0 h-full min-h-[320px] w-full border-0 lg:min-h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Tiny Beachhouse area"
            />
          </div>
        </div>
      </section>

      <section className="flex min-h-[380px] w-full items-center bg-navy py-20 md:min-h-[440px] md:py-24">
        <div className="container-wide flex w-full flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
          <h2 className="display-italic max-w-lg text-3xl text-sand md:text-4xl lg:text-5xl">{t("omg.ctaTitle")}</h2>
          <Link
            to="/boeken"
            className="group inline-flex items-center gap-5 rounded-full border border-sand/30 bg-sand/10 px-3 py-2 pl-8 backdrop-blur-md transition hover:border-sand/50 hover:bg-sand/15"
          >
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-sand md:text-sm">{t("omg.bookCta")}</span>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-dune text-navy shadow-lift transition group-hover:scale-105">
              <ArrowRight className="h-5 w-5" weight="bold" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Omgeving;
