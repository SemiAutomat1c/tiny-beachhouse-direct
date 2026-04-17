import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const BookDirectBanner = () => (
  <section className="bg-navy text-sand">
    <div className="container-narrow py-20 md:py-28 text-center">
      <h2 className="display-italic text-h1 md:text-display text-sand">
        Skip the middleman.
        <br />
        <span className="text-dune">Book direct and save.</span>
      </h2>
      <p className="mt-6 text-base md:text-lg text-sand/75 max-w-xl mx-auto">
        Direct bookings mean better communication, flexible requests, and the best available rate — always.
      </p>
      <Link
        to="/boeken"
        className="mt-9 inline-flex items-center gap-2 bg-dune text-navy px-7 py-3.5 rounded-full font-medium hover:bg-dune-soft transition shadow-soft"
      >
        Book Your Stay <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </section>
);
