import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Hamburger, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/I18nContext";
import { LanguageToggle } from "./LanguageToggle";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { t } = useI18n();

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/accommodatie", label: t("nav.accommodation") },
    { to: "/omgeving", label: t("nav.area") },
  ];

  const transparentEligible = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const solid = !transparentEligible || scrolled;

  const mobileMenu =
    open &&
    createPortal(
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label={t("nav.menu")}
        className="fixed inset-0 z-[100] flex min-h-[100dvh] flex-col bg-navy text-sand md:hidden"
      >
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-sand/10 px-6">
          <span className="font-display text-2xl font-bold italic">Tiny Beachhouse</span>
          <button type="button" aria-label={t("nav.closeMenu")} className="rounded-md p-2" onClick={() => setOpen(false)}>
            <X className="h-6 w-6" weight="bold" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col items-center justify-center gap-8 px-6 pb-16">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn("font-display text-3xl italic", isActive ? "text-dune" : "text-sand/90")
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/boeken"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-dune px-7 py-3.5 font-medium text-navy"
          >
            {t("nav.bookDirect")} <ArrowUpRight className="h-4 w-4" weight="bold" />
          </Link>
        </nav>
      </div>,
      document.body,
    );

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        solid
          ? "bg-sand/90 backdrop-blur-xl shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="container-wide flex items-center justify-between h-20">
        <Link
          to="/"
          className={cn(
            "font-display italic text-2xl md:text-[1.6rem] font-bold transition-colors",
            solid ? "text-navy" : "text-white"
          )}
        >
          Tiny Beachhouse
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "font-medium tracking-wide transition-colors relative",
                  solid
                    ? isActive
                      ? "text-navy"
                      : "text-navy/70 hover:text-navy"
                    : isActive
                    ? "text-white"
                    : "text-white/80 hover:text-white",
                  isActive &&
                    "after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-px after:bg-current"
                )
              }
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
          <LanguageToggle solid={solid} />
          <Link
            to="/boeken"
            className="inline-flex items-center gap-1.5 bg-navy text-sand px-5 py-2.5 rounded-full font-medium hover:bg-navy-soft transition-colors"
          >
            {t("nav.bookDirect")} <ArrowUpRight className="w-4 h-4" weight="bold" />
          </Link>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle solid={solid} />
          <button
            type="button"
            aria-label={t("nav.openMenu")}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className={cn("rounded-md p-2 transition-colors", solid ? "text-navy" : "text-white")}
            onClick={() => setOpen(true)}
          >
            <Hamburger className="h-6 w-6" weight="bold" />
          </button>
        </div>
      </div>

      {mobileMenu}
    </header>
  );
};
