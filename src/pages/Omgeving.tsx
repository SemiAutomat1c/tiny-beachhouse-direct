import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Car, Train, Plane, Compass } from "lucide-react";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/I18nContext";
import type { TranslationKey } from "@/i18n/translations";

interface Attraction {
  img: string;
  badgeKey: TranslationKey;
  nameKey: TranslationKey;
  distKey: TranslationKey;
  textKey: TranslationKey;
}

const Omgeving = () => {
  const { t } = useI18n();

  const attractions: Attraction[] = [
    { img: images.heroBeach, badgeKey: "omg.attr1.badge", nameKey: "omg.attr1.name", distKey: "omg.attr1.dist", textKey: "omg.attr1.text" },
    { img: images.areaPier, badgeKey: "omg.attr2.badge", nameKey: "omg.attr2.name", distKey: "omg.attr2.dist", textKey: "omg.attr2.text" },
    { img: images.areaMuseum, badgeKey: "omg.attr3.badge", nameKey: "omg.attr3.name", distKey: "omg.attr3.dist", textKey: "omg.attr3.text" },
    { img: images.areaRestaurant, badgeKey: "omg.attr4.badge", nameKey: "omg.attr4.name", distKey: "omg.attr4.dist", textKey: "omg.attr4.text" },
    { img: images.areaDunes, badgeKey: "omg.attr5.badge", nameKey: "omg.attr5.name", distKey: "omg.attr5.dist", textKey: "omg.attr5.text" },
    { img: images.exteriorHouse, badgeKey: "omg.attr6.badge", nameKey: "omg.attr6.name", distKey: "omg.attr6.dist", textKey: "omg.attr6.text" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[75vh] min-h-[520px] flex items-end overflow-hidden">
        <img
          src={images.omgevingHero}
          alt="Aerial view of Scheveningen beach and boulevard"
          className="absolute inset-0 w-full h-full object-cover animate-image-zoom"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative container-wide pb-16 md:pb-20">
          <p className="eyebrow text-sand/80 mb-3">{t("omg.heroEyebrow")}</p>
          <h1 className="display-italic text-sand max-w-3xl">
            {t("omg.heroTitle1")} <br />{t("omg.heroTitle2")}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-py">
        <div className="container-narrow text-center">
          <p className="text-navy/75 leading-relaxed font-light">
            {t("omg.intro")}
          </p>
        </div>
      </section>

      {/* Attractions Editorial Grid */}
      <section className="bg-sand-deep section-py overflow-hidden">
        <div className="container-wide">
          <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">{t("omg.gridEyebrow")}</p>
              <h2 className="display-italic text-navy leading-tight">{t("omg.gridTitle")}</h2>
            </div>
            <p className="text-navy/50 italic font-light max-w-xs md:text-right">
              Everything the Dutch coast has to offer, within a few minutes from your private hideaway.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12">
            {attractions.map((a, idx) => (
              <article
                key={a.nameKey}
                className={cn(
                  "bg-white rounded-[2.5rem] overflow-hidden shadow-soft hover:shadow-lift transition-all duration-700 group border border-border/10 flex flex-col",
                  idx === 0 || idx === 3 ? "lg:col-span-3" : "lg:col-span-3", // Adjusted to be more balanced 3-3 or 2-2-2
                  idx % 2 !== 0 ? "md:translate-y-16" : ""
                )}
              >
                <div className="overflow-hidden relative aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3]">
                  <img
                    src={a.img}
                    alt={t(a.nameKey)}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/80 backdrop-blur-md text-navy text-[10px] uppercase tracking-[0.2em] font-bold px-5 py-2.5 rounded-full shadow-sm border border-white/20">
                      {t(a.badgeKey)}
                    </span>
                  </div>
                </div>
                <div className="p-10 md:p-12 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <h3 className="text-2xl md:text-3xl font-display text-navy tracking-tight">{t(a.nameKey)}</h3>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-dune font-bold mb-8 inline-flex items-center gap-2.5">
                    <MapPin className="w-3.5 h-3.5 text-dune/60" /> {t(a.distKey)}
                  </p>
                  <p className="text-navy/70 leading-relaxed font-light italic flex-1 text-[15px] lg:text-base">
                    {t(a.textKey)}
                  </p>
                  <div className="mt-8 pt-8 border-t border-sand-deep opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-navy font-medium inline-flex items-center gap-2 text-sm italic">
                      Explore location <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="section-py">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="eyebrow mb-3">{t("omg.travelEyebrow")}</p>
            <h2 className="display-italic text-navy mb-8">{t("omg.travelTitle")}</h2>
            <div className="space-y-8">
              <div className="flex gap-5 group">
                <div className="w-12 h-12 rounded-full bg-sand-deep flex items-center justify-center shrink-0 transition-colors group-hover:bg-dune/20">
                  <Car className="w-5 h-5 text-navy transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-display text-navy">{t("omg.car.title")}</h3>
                  <p className="text-navy/70 mt-1.5 leading-relaxed font-light italic">
                    {t("omg.car.text")}
                  </p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="w-12 h-12 rounded-full bg-sand-deep flex items-center justify-center shrink-0 transition-colors group-hover:bg-dune/20">
                  <Train className="w-5 h-5 text-navy transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-display text-navy">{t("omg.transit.title")}</h3>
                  <p className="text-navy/70 mt-1.5 leading-relaxed font-light italic">
                    {t("omg.transit.text")}
                  </p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="w-12 h-12 rounded-full bg-sand-deep flex items-center justify-center shrink-0 transition-colors group-hover:bg-dune/20">
                  <Plane className="w-5 h-5 text-navy transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-display text-navy">{t("omg.air.title")}</h3>
                  <p className="text-navy/70 mt-1.5 leading-relaxed font-light italic">
                    {t("omg.air.text")}
                  </p>
                </div>
              </div>
            </div>
            <Link
              to="/boeken"
              className="mt-10 inline-flex items-center gap-2 bg-navy text-sand px-7 py-3.5 rounded-full font-medium hover:bg-navy-soft transition"
            >
              {t("omg.bookCta")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-soft aspect-[4/3] lg:aspect-square">
            <iframe
              src="https://www.google.com/maps?q=Jacob+Pronkstraat,+2584+BS+Scheveningen&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Tiny Beachhouse area"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Omgeving;
