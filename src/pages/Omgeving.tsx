import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Car, Train, Plane } from "lucide-react";
import { images } from "@/lib/images";

const attractions = [
  {
    img: images.heroBeach,
    badge: "🏖️ The Beach",
    name: "Scheveningen Beach",
    distance: "2 min walk · 200m",
    text: "Scheveningen's wide North Sea beach is on your doorstep. Swim in summer, walk in winter, or simply watch the waves.",
  },
  {
    img: images.areaPier,
    badge: "🎡 The Pier & Boulevard",
    name: "Pier & SkyView",
    distance: "15 min walk",
    text: "The iconic SkyView Ferris Wheel and Scheveningen Pier offer sweeping sea views. The boulevard is lined with bars and restaurants.",
  },
  {
    img: images.areaMuseum,
    badge: "🎨 Art by the sea",
    name: "Museum Beelden aan Zee",
    distance: "8 min walk",
    text: "An outdoor sculpture museum on the beach — featuring modern works from Dutch and international artists.",
  },
  {
    img: images.areaRestaurant,
    badge: "🍽️ Eat & drink",
    name: "Beach Restaurants",
    distance: "5 min walk",
    text: "Strandpaviljoen BooNooNooNoos, Solbeach, and dozens of seafood restaurants — minutes from your door.",
  },
  {
    img: images.areaDunes,
    badge: "🚲 Cycling & nature",
    name: "Cycling the Dunes",
    distance: "Doorstep",
    text: "Rent a bike and explore the dune landscape stretching north and south — one of the Netherlands' most scenic coastal routes.",
  },
  {
    img: images.exteriorHouse,
    badge: "🌲 Forested escape",
    name: "Scheveningen Woods",
    distance: "25 min walk",
    text: "A peaceful forested park offering cycling trails and a welcome escape from the coast.",
  },
];

const Omgeving = () => {
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
          <p className="eyebrow text-sand/80 mb-3">Omgeving · The area</p>
          <h1 className="display-italic text-display text-sand max-w-3xl">
            Scheveningen — <br />where city meets sea.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-py">
        <div className="container-narrow text-center">
          <p className="text-lg md:text-xl text-navy/75 leading-relaxed font-light">
            Tiny Beachhouse sits in Scheveningen, The Hague's famous seaside district.
            Step outside and you're immediately in one of the Netherlands' most vibrant coastal neighbourhoods —
            <em className="font-display"> beach, restaurants, culture, and nature</em>, all within walking distance.
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="bg-sand-deep section-py">
        <div className="container-wide">
          <div className="mb-12">
            <p className="eyebrow mb-3">Around the corner</p>
            <h2 className="display-italic text-h1 text-navy">What's nearby</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((a) => (
              <article
                key={a.name}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-lift transition group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <span className="inline-block bg-dune/30 text-navy text-xs px-3 py-1 rounded-full mb-3">
                    {a.badge}
                  </span>
                  <h3 className="font-display text-xl text-navy">{a.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 mb-3 inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {a.distance}
                  </p>
                  <p className="text-sm text-navy/75 leading-relaxed">{a.text}</p>
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
            <p className="eyebrow mb-3">Getting here</p>
            <h2 className="display-italic text-h1 text-navy mb-8">Easy to find. Easy to leave (eventually).</h2>
            <div className="space-y-7">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-dune/30 flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-navy">By car</h3>
                  <p className="text-navy/75 text-sm mt-1 leading-relaxed">
                    Free on-site parking & EV charging at Tiny Beachhouse.
                    Located at Jacob Pronkstraat, 2584 BS Scheveningen.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-dune/30 flex items-center justify-center shrink-0">
                  <Train className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-navy">By public transport</h3>
                  <p className="text-navy/75 text-sm mt-1 leading-relaxed">
                    Bus stop <em>Scheveningseslag/Beelden aan Zee</em> is a 10-minute walk.
                    Tram lines connect directly to Den Haag Centraal in 20 minutes.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-dune/30 flex items-center justify-center shrink-0">
                  <Plane className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-navy">From the airport</h3>
                  <p className="text-navy/75 text-sm mt-1 leading-relaxed">
                    Rotterdam The Hague Airport — 25 km, approx. 32 min by car. Schiphol — 50 min by car or train.
                  </p>
                </div>
              </div>
            </div>
            <Link
              to="/boeken"
              className="mt-10 inline-flex items-center gap-2 bg-navy text-sand px-7 py-3.5 rounded-full font-medium hover:bg-navy-soft transition"
            >
              Book your stay <ArrowRight className="w-4 h-4" />
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
