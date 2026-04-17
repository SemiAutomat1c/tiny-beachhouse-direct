import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Car, Train, Plane } from "lucide-react";
import { images } from "@/lib/images";
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
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative container-wide pb-16 md:pb-20">
          <p className="eyebrow text-sand/80 mb-3">{t("omg.heroEyebrow")}</p>
          <h1 className="display-italic text-display text-sand max-w-3xl">
            {t("omg.heroTitle1")} <br />{t("omg.heroTitle2")}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-py">
        <div className="container-narrow text-center">
          <p className="text-lg md:text-xl text-navy/75 leading-relaxed font-light">
            {t("omg.intro")}
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="bg-sand-deep section-py">
        <div className="container-wide">
          <div className="mb-12">
            <p className="eyebrow mb-3">{t("omg.gridEyebrow")}</p>
            <h2 className="display-italic text-h1 text-navy">{t("omg.gridTitle")}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((a) => (
              <article
                key={a.nameKey}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-lift transition group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={a.img}
                    alt={t(a.nameKey)}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <span className="inline-block bg-dune/30 text-navy text-xs px-3 py-1 rounded-full mb-3">
                    {t(a.badgeKey)}
                  </span>
                  <h3 className="font-display text-xl text-navy">{t(a.nameKey)}</h3>
                  <p className="text-xs text-muted-foreground mt-1 mb-3 inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {t(a.distKey)}
                  </p>
                  <p className="text-sm text-navy/75 leading-relaxed">{t(a.textKey)}</p>
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
            <h2 className="display-italic text-h1 text-navy mb-8">{t("omg.travelTitle")}</h2>
            <div className="space-y-7">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-dune/30 flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-navy">{t("omg.car.title")}</h3>
                  <p className="text-navy/75 text-sm mt-1 leading-relaxed">
                    {t("omg.car.text")}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-dune/30 flex items-center justify-center shrink-0">
                  <Train className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-navy">{t("omg.transit.title")}</h3>
                  <p className="text-navy/75 text-sm mt-1 leading-relaxed">
                    {t("omg.transit.text")}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-dune/30 flex items-center justify-center shrink-0">
                  <Plane className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-navy">{t("omg.air.title")}</h3>
                  <p className="text-navy/75 text-sm mt-1 leading-relaxed">
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
