"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Úvod", href: "/" },
  {
    label: "Nabídka",
    href: "#nabidka",
    children: [
      { label: "Čalounictví & renovace", href: "/calounictvi" },
      { label: "Záclony, závěsy & garnýže", href: "/zaclony" },
      { label: "Rolety, žaluzie & stínění", href: "/rolety" },
      { label: "Tapety na zeď", href: "/tapety" },
    ],
  },
  { label: "O nás", href: "/o-nas" },
  { label: "Galerie", href: "/galerie" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      <div className="hidden lg:flex items-center justify-end gap-6 px-8 py-2 bg-cream-100 border-b border-cream-300/60">
        <a
          href="tel:+420773625655"
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-gold transition-colors duration-200"
        >
          <Phone size={12} strokeWidth={1.5} />
          +420 773 625 655
        </a>
        <span className="text-cream-300">|</span>
        <a
          href="mailto:Design4Life@email.cz"
          className="text-xs text-slate-400 hover:text-gold transition-colors duration-200"
        >
          Design4Life@email.cz
        </a>
      </div>

      <header
        className={[
          "sticky top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-glass"
            : "bg-linen/95 border-b border-cream-200/60",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between gap-8">
            <Link href="/" className="flex flex-col leading-none group">
              <span className="font-serif text-xl font-semibold text-slate-700 group-hover:text-gold transition-colors duration-300">
                Design<span className="text-gold"> 4 </span>Life
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-400 font-sans font-light mt-0.5">
                Interiérový design
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative group">
                    <button
                      onClick={() =>
                        setDropdown(dropdown === link.label ? null : link.label)
                      }
                      onMouseEnter={() => setDropdown(link.label)}
                      onMouseLeave={() => setDropdown(null)}
                      className="flex items-center gap-1 px-4 py-2 text-sm text-slate-500 hover:text-slate-800 transition-colors duration-200 rounded-full hover:bg-cream-100"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        strokeWidth={1.5}
                        className={`transition-transform duration-300 ${
                          dropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      onMouseEnter={() => setDropdown(link.label)}
                      onMouseLeave={() => setDropdown(null)}
                      className={[
                        "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64",
                        "bg-white/90 backdrop-blur-xl rounded-2xl border border-white/60",
                        "shadow-warm-lg py-2 transition-all duration-300 origin-top",
                        dropdown === link.label
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-95 pointer-events-none",
                      ].join(" ")}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-cream-50 transition-colors duration-150"
                          onClick={() => setDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm text-slate-500 hover:text-slate-800 transition-colors duration-200 rounded-full hover:bg-cream-100"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <Link
              href="#kontakt"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-slate-800 text-cream-100 hover:bg-gold hover:text-white transition-all duration-300 shadow-warm-sm"
            >
              Nezávazná konzultace
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-cream-100 transition-colors"
              aria-label={mobileOpen ? "Zavřít menu" : "Otevřít menu"}
            >
              {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={[
          "lg:hidden fixed inset-0 z-40 transition-all duration-500",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        <div
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <nav
          className={[
            "absolute top-0 right-0 h-full w-80 max-w-full",
            "bg-linen/98 backdrop-blur-xl border-l border-cream-200",
            "flex flex-col pt-24 pb-8 px-8 gap-1",
            "transition-transform duration-500",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-base font-serif text-slate-700 border-b border-cream-200 hover:text-gold transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-6 space-y-3">
            <a href="tel:+420773625655" className="flex items-center gap-2 text-sm text-slate-500">
              <Phone size={14} strokeWidth={1.5} />
              +420 773 625 655
            </a>
            <Link
              href="#kontakt"
              className="block text-center py-3 rounded-full bg-slate-800 text-cream-100 text-sm font-medium hover:bg-gold transition-colors duration-300"
              onClick={() => setMobileOpen(false)}
            >
              Nezávazná konzultace
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}