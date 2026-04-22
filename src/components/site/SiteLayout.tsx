import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useI18n } from "@/i18n/I18nContext";

const titles: Record<string, { nl: { title: string; description: string }; en: { title: string; description: string } }> = {
  "/": {
    nl: {
      title: "Tiny Beachhouse Scheveningen — Boutique B&B op een steenworp van het strand",
      description: "Een prachtig vormgegeven tiny beachhouse in Scheveningen, 200m van de Noordzee. Boek direct voor de beste prijs.",
    },
    en: {
      title: "Tiny Beachhouse Scheveningen — Boutique B&B steps from the beach",
      description: "A beautifully designed tiny beach house in Scheveningen, 200m from the North Sea. Book direct for the best rate.",
    },
  },
  "/accommodatie": {
    nl: {
      title: "De Accommodatie — Tiny Beachhouse, Scheveningen",
      description: "Ontdek de slaapkamer, keuken, terras en voorzieningen van Tiny Beachhouse — een boutique tiny house aan zee.",
    },
    en: {
      title: "The Space — Tiny Beachhouse, Scheveningen",
      description: "Discover the bedroom, kitchen, terrace and amenities of Tiny Beachhouse — a boutique tiny house by the sea.",
    },
  },
  "/omgeving": {
    nl: {
      title: "Scheveningen & omgeving — Tiny Beachhouse",
      description: "Strand, pier, musea, restaurants en duinen — alles op loopafstand van Tiny Beachhouse.",
    },
    en: {
      title: "Scheveningen & surroundings — Tiny Beachhouse",
      description: "Beach, pier, museums, restaurants and dunes — explore everything within walking distance of Tiny Beachhouse.",
    },
  },
  "/boeken": {
    nl: {
      title: "Direct Boeken — Tiny Beachhouse Scheveningen",
      description: "Reserveer je verblijf direct bij de gastheren. Beste prijs, geen platformkosten.",
    },
    en: {
      title: "Book Direct — Tiny Beachhouse Scheveningen",
      description: "Reserve your stay directly with the hosts. Best available rate, no platform fees.",
    },
  },
};

export const SiteLayout = () => {
  const { pathname } = useLocation();
  const { lang } = useI18n();

  useEffect(() => {
    const entry = titles[pathname as keyof typeof titles];
    if (entry) {
      const meta = entry[lang];
      document.title = meta.title;
      let descTag = document.querySelector('meta[name="description"]');
      if (!descTag) {
        descTag = document.createElement("meta");
        descTag.setAttribute("name", "description");
        document.head.appendChild(descTag);
      }
      descTag.setAttribute("content", meta.description);
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, lang]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

