import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Wifi, Car, Zap, Key, PawPrint, Wine, Bath, Tv, Coffee, ChefHat, Trees, VolumeX,
  Check, X, ArrowRight,
} from "lucide-react";
import { images, galleryImages } from "@/lib/images";
import { Lightbox } from "@/components/site/Lightbox";
import { useI18n } from "@/i18n/I18nContext";
import type { TranslationKey } from "@/i18n/translations";

const Accommodatie = () => {
  const { t } = useI18n();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const facilities: { icon: typeof Wifi; key: TranslationKey }[] = [
    { icon: Wifi, key: "acc.fac.wifi" },
    { icon: Car, key: "acc.fac.parking" },
    { icon: Zap, key: "acc.fac.ev" },
    { icon: Key, key: "acc.fac.entrance" },
    { icon: PawPrint, key: "acc.fac.pets" },
    { icon: Wine, key: "acc.fac.wine" },
    { icon: Bath, key: "acc.fac.shower" },
    { icon: Tv, key: "acc.fac.tv" },
    { icon: Coffee, key: "acc.fac.coffee" },
    { icon: ChefHat, key: "acc.fac.fullKitchen" },
    { icon: Trees, key: "acc.fac.terrace" },
    { icon: VolumeX, key: "acc.fac.soundproof" },
  ];

  const features: TranslationKey[] = [
    "acc.feature1", "acc.feature2", "acc.feature3", "acc.feature4",
    "acc.feature5", "acc.feature6", "acc.feature7",
  ];

  const houseRules: { icon: typeof Check; key: TranslationKey; positive: boolean }[] = [
    { icon: Check, key: "acc.rule1", positive: true },
    { icon: Check, key: "acc.rule2", positive: true },
    { icon: Check, key: "acc.rule3", positive: true },
    { icon: X, key: "acc.rule4", positive: false },
    { icon: X, key: "acc.rule5", positive: false },
    { icon: X, key: "acc.rule6", positive: false },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <img
          src={images.interiorBedroom}
          alt="Bedroom of Tiny Beachhouse"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative container-wide pb-16 md:pb-20">
          <p className="eyebrow text-sand/80 mb-3">{t("acc.heroEyebrow")}</p>
          <h1 className="display-italic text-display text-sand max-w-3xl">
            {t("acc.heroTitle")}
          </h1>
        </div>
      </section>

      {/* The Space */}
      <section className="section-py">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <img
            src={images.interiorLiving}
            alt="Living room with linen sofa"
            className="w-full aspect-[4/5] object-cover rounded-2xl shadow-soft"
            loading="lazy"
          />
          <div>
            <p className="eyebrow mb-4">{t("acc.spaceEyebrow")}</p>
            <h2 className="display-italic text-h1 text-navy">
              {t("acc.spaceTitle1")} <br />{t("acc.spaceTitle2")}
            </h2>
            <ul className="mt-8 space-y-3.5 text-navy/80">
              {features.map((key) => (
                <li key={key} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-dune rounded-full shrink-0" />
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="bg-sand-deep section-py">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">{t("acc.facEyebrow")}</p>
            <h2 className="display-italic text-h1 text-navy">{t("acc.facTitle")}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {facilities.map(({ icon: Icon, key }) => (
              <div
                key={key}
                className="bg-card rounded-xl p-5 flex flex-col items-center text-center gap-3 shadow-soft hover:shadow-lift transition"
              >
                <div className="w-11 h-11 rounded-full bg-dune/30 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-navy" />
                </div>
                <span className="text-sm text-navy/85 leading-tight">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* House Rules */}
      <section className="section-py">
        <div className="container-narrow">
          <div className="text-center max-w-xl mx-auto mb-10">
            <p className="eyebrow mb-3">{t("acc.rulesEyebrow")}</p>
            <h2 className="display-italic text-h1 text-navy">{t("acc.rulesTitle")}</h2>
          </div>
          <div className="bg-card rounded-2xl shadow-soft p-8 md:p-10 grid md:grid-cols-2 gap-x-10 gap-y-5">
            {houseRules.map((rule) => (
              <div key={rule.key} className="flex items-center gap-3 text-navy/85">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                    rule.positive ? "bg-seafoam/40 text-navy" : "bg-dune/30 text-navy"
                  }`}
                >
                  <rule.icon className="w-3.5 h-3.5" />
                </span>
                <span className="text-sm">{t(rule.key)}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-muted-foreground">
            {t("acc.payment")}
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-sand-deep section-py">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow mb-3">{t("acc.galEyebrow")}</p>
            <h2 className="display-italic text-h1 text-navy">{t("acc.galTitle")}</h2>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {galleryImages.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(i)}
                className="block w-full mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-soft group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-navy text-sand">
        <div className="container-wide py-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <h2 className="display-italic text-h1 text-sand">
            {t("acc.ctaTitle")}
          </h2>
          <Link
            to="/boeken"
            className="bg-dune text-navy px-7 py-3.5 rounded-full font-medium hover:bg-dune-soft transition inline-flex items-center gap-2"
          >
            {t("acc.ctaBtn")} <ArrowRight className="w-4 h-4" />
          </Link>
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
