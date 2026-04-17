import { Link } from "react-router-dom";
import { useState } from "react";
import { Bed, Bath, Coffee, Car, PawPrint, Wifi, Star, MapPin, ArrowRight } from "lucide-react";
import { images, galleryImages } from "@/lib/images";
import { AvailabilityBar } from "@/components/site/AvailabilityBar";
import { BookDirectBanner } from "@/components/site/BookDirectBanner";
import { Lightbox } from "@/components/site/Lightbox";

const trustItems = [
  { icon: "🏖️", text: "200m from Scheveningen Beach" },
  { icon: "⭐", text: "Highly rated on Booking.com" },
  { icon: "🔑", text: "Private entrance & parking" },
  { icon: "🌿", text: "Designed with care — every detail" },
];

const featurePills = [
  { icon: Bed, label: "1 Bedroom" },
  { icon: Bath, label: "Private Bathroom" },
  { icon: Coffee, label: "Full Kitchen" },
  { icon: Car, label: "Parking + EV" },
  { icon: PawPrint, label: "Pets Welcome" },
  { icon: Wifi, label: "Free WiFi" },
];

const reviews = [
  {
    text: "This is an exceptional spot. It's larger than it looks in the pictures and incredibly comfortable. The kitchen is well supplied and the hosts are helpful and considerate.",
    name: "Sophie",
  },
  {
    text: "Brilliant location right beside the beach. Wonderful hosts and beautifully decorated apartment.",
    name: "James",
  },
  {
    text: "Perfect hosts. Best location — next to the beach and a central road with cafes. We will surely be back.",
    name: "Marta",
  },
  {
    text: "Very cozy Dutch house designed in the style of a beach house. Interior thought to the small details. The sea is one hundred metres away.",
    name: "Lukas",
  },
];

const Index = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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
          <p className="eyebrow text-sand/80 mb-5 animate-fade-in">Scheveningen · Den Haag</p>
          <h1 className="display-italic text-display md:text-[5.5rem] text-sand max-w-4xl animate-fade-up">
            Your private escape.
            <br />
            <span className="text-dune">Steps from the sea.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-sand/85 max-w-xl font-light animate-fade-up" style={{ animationDelay: "0.1s" }}>
            A beautifully designed beach house in Scheveningen — just 200 metres from the North Sea.
          </p>

          <div className="mt-9 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Link
              to="/boeken"
              className="bg-dune text-navy px-7 py-3.5 rounded-full font-medium hover:bg-dune-soft transition shadow-soft"
            >
              Check Availability
            </Link>
            <Link
              to="/accommodatie"
              className="border border-sand/70 text-sand px-7 py-3.5 rounded-full font-medium hover:bg-sand/10 transition inline-flex items-center gap-2"
            >
              Discover the Space <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-12 max-w-3xl animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <AvailabilityBar />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-card border-y border-border">
        <div className="container-wide py-7 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustItems.map((item) => (
            <div key={item.text} className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-navy/80">
              <span className="text-xl" aria-hidden>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="section-py">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src={images.interiorLiving}
              alt="Living room corner with linen sofa and coastal art"
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-soft"
              loading="lazy"
              width={1080}
              height={1350}
            />
            <img
              src={images.detailDecor}
              alt="Driftwood and linen detail"
              className="hidden md:block absolute -bottom-10 -right-8 w-48 aspect-square object-cover rounded-xl shadow-lift border-4 border-sand"
              loading="lazy"
            />
          </div>

          <div>
            <p className="eyebrow mb-4">A place unlike any other</p>
            <h2 className="display-italic text-h1 text-navy">
              A tiny house. <br />An unforgettable stay.
            </h2>
            <div className="mt-6 space-y-5 text-base md:text-lg text-navy/75 leading-relaxed">
              <p>
                Tiny Beachhouse is a thoughtfully designed retreat in the heart of Scheveningen.
                Inspired by coastal living, every corner tells a story — from the driftwood details to the sea-facing terrace.
              </p>
              <p>
                Whether you're here for a romantic weekend, a solo escape, or simply to breathe in sea air —
                this is your home away from home.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {featurePills.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 bg-dune/30 text-navy px-3.5 py-1.5 rounded-full text-sm"
                >
                  <Icon className="w-3.5 h-3.5" /> {label}
                </span>
              ))}
            </div>

            <Link
              to="/accommodatie"
              className="mt-8 inline-flex items-center gap-1.5 text-navy font-medium border-b-2 border-dune pb-1 hover:gap-3 transition-all"
            >
              Explore the full space <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-sand-deep section-py">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-3">
            <div>
              <p className="eyebrow mb-3">Photo gallery</p>
              <h2 className="display-italic text-h1 text-navy">A look inside</h2>
            </div>
            <Link to="/accommodatie" className="text-navy/70 hover:text-navy text-sm inline-flex items-center gap-1.5">
              See all photos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.slice(0, 6).map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(i)}
                className={`relative overflow-hidden rounded-xl shadow-soft group ${
                  i === 0 || i === 3 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
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
              In the heart of Scheveningen
            </h2>
            <p className="mt-6 text-base md:text-lg text-navy/75 leading-relaxed">
              Scheveningen is The Hague's vibrant beach district — 200 metres from your door.
              Walk to the beach, cycle the dunes, dine at seafront restaurants, or visit the Museum Beelden aan Zee.
            </p>
            <Link
              to="/omgeving"
              className="mt-8 inline-flex items-center gap-1.5 text-navy font-medium border-b-2 border-dune pb-1 hover:gap-3 transition-all"
            >
              Explore the area <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-soft aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps?q=Jacob+Pronkstraat,+2584+BS+Scheveningen&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Tiny Beachhouse, Scheveningen"
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-sand-deep section-py">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">What guests say</p>
            <h2 className="display-italic text-h1 text-navy">Loved by travellers</h2>
            <p className="mt-4 text-navy/70">
              Rated highly on Booking.com by guests from around the world.
            </p>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-6 -mx-6 px-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:mx-0 md:px-0 no-scrollbar">
            {reviews.map((r) => (
              <article
                key={r.name}
                className="bg-card rounded-2xl p-7 shadow-soft min-w-[300px] md:min-w-0 flex flex-col"
              >
                <div className="flex gap-0.5 text-dune mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-navy/85 leading-relaxed text-[0.95rem] flex-1">"{r.text}"</p>
                <p className="mt-5 text-sm font-medium text-navy">— {r.name}</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.booking.com/hotel/nl/tiny-beachhouse.html"
              target="_blank"
              rel="noreferrer noopener"
              className="text-navy/70 hover:text-navy text-sm inline-flex items-center gap-1.5"
            >
              Read more reviews on Booking.com <ArrowRight className="w-4 h-4" />
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
