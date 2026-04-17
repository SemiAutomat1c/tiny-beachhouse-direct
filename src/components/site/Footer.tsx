import { Link } from "react-router-dom";
import { MapPin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-sand-deep">
      {/* Wave divider */}
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-10 text-sand-deep"
        aria-hidden
      >
        <path
          d="M0,30 C240,60 480,0 720,20 C960,40 1200,10 1440,30 L1440,60 L0,60 Z"
          fill="currentColor"
        />
      </svg>

      <div className="container-wide py-16 grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-display italic text-2xl font-bold text-navy">
            Tiny Beachhouse
          </p>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
            200m from the sea.
            <br />
            Scheveningen, Den Haag.
          </p>
        </div>

        <div className="md:text-center">
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-navy/80 hover:text-navy transition-colors">Home</Link></li>
            <li><Link to="/accommodatie" className="text-navy/80 hover:text-navy transition-colors">De Accommodatie</Link></li>
            <li><Link to="/omgeving" className="text-navy/80 hover:text-navy transition-colors">Omgeving</Link></li>
            <li><Link to="/boeken" className="text-navy/80 hover:text-navy transition-colors">Direct Boeken</Link></li>
          </ul>
        </div>

        <div className="md:text-right">
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-navy/80">
            <li className="flex md:justify-end items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" />
              Jacob Pronkstraat, 2584 BS Scheveningen
            </li>
            <li className="flex md:justify-end items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              <a href="mailto:hello@tinybeachhouse.nl" className="hover:text-navy">
                hello@tinybeachhouse.nl
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-dune/30">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Tiny Beachhouse</p>
          <p>Privacy Policy · Built with care in Scheveningen</p>
        </div>
      </div>
    </footer>
  );
};
