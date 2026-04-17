import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const titles: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Tiny Beachhouse Scheveningen — Boutique B&B steps from the beach",
    description:
      "A beautifully designed tiny beach house in Scheveningen, 200m from the North Sea. Book direct for the best rate.",
  },
  "/accommodatie": {
    title: "The Space — Tiny Beachhouse, Scheveningen",
    description:
      "Discover the bedroom, kitchen, terrace and amenities of Tiny Beachhouse — a boutique tiny house by the sea.",
  },
  "/omgeving": {
    title: "Scheveningen & surroundings — Tiny Beachhouse",
    description:
      "Beach, pier, museums, restaurants and dunes — explore everything within walking distance of Tiny Beachhouse.",
  },
  "/boeken": {
    title: "Book Direct — Tiny Beachhouse Scheveningen",
    description:
      "Reserve your stay directly with the hosts. Best available rate, no platform fees.",
  },
};

export const SiteLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = titles[pathname] ?? titles["/"];
    document.title = meta.title;
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    descTag.setAttribute("content", meta.description);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

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
