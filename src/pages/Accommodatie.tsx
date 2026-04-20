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
import { cn } from "@/lib/utils";

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
          src={images.heroAcc}
          alt="Bedroom of Tiny Beachhouse"
          className="absolute inset-0 w-full h-full object-cover animate-image-zoom"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative container-wide pb-16 md:pb-20">
          <p className="eyebrow text-sand/80 mb-3">{t("acc.heroEyebrow")}</p>
          <h1 className="display-italic text-sand max-w-3xl">
            {t("acc.heroTitle")}
          </h1>
        </div>
      </section>

      {/* The Space */}
      <section className="section-py">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative group">
            <img
              src={images.kitchenIslandWide}
              alt="Bright open kitchen and island"
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-soft transition-all duration-700 group-hover:scale-[1.01]"
              loading="lazy"
            />
            <div className="hidden md:block absolute -bottom-6 -left-6 w-48 aspect-square rounded-xl overflow-hidden shadow-lift border-4 border-sand transition-transform duration-500 hover:scale-110 hover:rotate-2">
              <img 
                src={images.dogExperience} 
                alt="A cozy stay for everyone" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="eyebrow mb-4">{t("acc.spaceEyebrow")}</p>
            <h2 className="display-italic text-navy">
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
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow mb-4">{t("acc.facEyebrow")}</p>
            <h2 className="display-italic text-navy">{t("acc.facTitle")}</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {facilities.map(({ icon: Icon, key }) => (
              <div
                key={key}
                className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-8 flex flex-col items-center text-center gap-5 shadow-soft hover:shadow-lift transition-all duration-500 border border-white/40 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-sand-deep flex items-center justify-center transition-all duration-500 group-hover:bg-dune/20 group-hover:rotate-3 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-navy" />
                </div>
                <span className="font-medium text-navy/80 tracking-wide text-sm md:text-base">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* House Rules */}
      <section className="section-py relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sand-deep/30 -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="container-narrow relative z-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="eyebrow mb-4">{t("acc.rulesEyebrow")}</p>
            <h2 className="display-italic text-navy">{t("acc.rulesTitle")}</h2>
          </div>
          <div className="bg-white rounded-[2.5rem] shadow-soft p-10 md:p-16 grid md:grid-cols-2 gap-x-16 gap-y-8 border border-border/10">
            {houseRules.map((rule) => (
              <div key={rule.key} className="flex items-start gap-5 text-navy/85 group">
                <span
                  className={cn(
                    "mt-0.5 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500",
                    rule.positive 
                      ? "bg-seafoam/20 text-navy group-hover:bg-seafoam/40" 
                      : "bg-dune/10 text-navy group-hover:bg-dune/20"
                  )}
                >
                  <rule.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                </span>
                <span className="font-light leading-relaxed italic text-[15px]">{t(rule.key)}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center eyebrow">
            {t("acc.payment")}
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-sand-deep section-py">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow mb-3">{t("acc.galEyebrow")}</p>
            <h2 className="display-italic text-navy">{t("acc.galTitle")}</h2>
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
          <h2 className="display-italic text-sand">
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
