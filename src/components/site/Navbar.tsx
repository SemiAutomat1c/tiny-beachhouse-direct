import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Hamburger, X } from "@phosphor-icons/react";
import { getBookingUrl } from "@/lib/booking";
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
  ];

  const transparentEligible = pathname === "/" || pathname === "/accommodatie";

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
  const edgeToEdge = transparentEligible && !solid;

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
        <div className="flex h-[4.25rem] shrink-0 items-center justify-between border-b border-sand/10 px-5 sm:px-6">
          <span className="font-display text-2xl font-light tracking-normal">Tiny Beachhouse</span>
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
                cn("font-display text-3xl font-light not-italic tracking-normal", isActive ? "text-dune" : "text-sand/90")
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={getBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-dune px-7 py-3.5 font-medium text-navy"
          >
            {t("nav.bookDirect")} <ArrowUpRight className="h-4 w-4" weight="bold" />
          </a>
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
      <div
        className={cn(
          "flex w-full max-w-[100vw] items-center justify-between",
          edgeToEdge ? "h-[4.25rem] px-5 sm:px-6 md:px-8 lg:px-10" : "container-wide h-20",
        )}
      >
        <Link
          to="/"
          className={cn(
            "font-display font-light tracking-normal transition-colors",
            edgeToEdge ? "text-xl md:text-2xl" : "text-2xl md:text-[1.6rem]",
            solid ? "text-navy" : "text-white",
          )}
        >
          Tiny Beachhouse
        </Link>

        <nav className={cn("hidden items-center md:flex", edgeToEdge ? "gap-5 lg:gap-7" : "gap-9")}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "font-body text-sm font-medium tracking-[0.12em] transition-colors relative",
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
          <a
            href={getBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 font-body text-sm font-semibold tracking-wide transition-colors",
              solid
                ? "bg-navy text-sand hover:bg-navy-soft"
                : "border border-white/50 bg-white/10 text-sand backdrop-blur-sm hover:bg-white/20",
            )}
          >
            {t("nav.bookDirect")} <ArrowUpRight className="h-4 w-4" weight="bold" />
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
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
