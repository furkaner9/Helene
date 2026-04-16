"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", labelTr: "Ana Sayfa", labelEn: "Home" },
  { href: "/treatments", labelTr: "Tedaviler", labelEn: "Treatments" },
  { href: "/about", labelTr: "Hakkımda", labelEn: "About" },
  { href: "/contact", labelTr: "İletişim", labelEn: "Contact" },
];

const display = { fontFamily: "'Cormorant Garamond', serif" };
const font = { fontFamily: "'Jost', sans-serif" };

export default function Navbar() {
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    const full = `/${locale}${href === "/" ? "" : href}`;
    return pathname === full || (href !== "/" && pathname.startsWith(full));
  };

  const otherLocale = locale === "tr" ? "en" : "tr";
  const localePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        className="flex items-center justify-between h-18"
      >
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2.5 no-underline">
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              backgroundColor: "#4A7C59",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ...display,
              fontSize: "20px",
              color: "white",
            }}
          >
            H
          </div>
          <span style={{ ...display, fontSize: "26px", color: "#2D4D38", fontWeight: 500, letterSpacing: "0.04em" }}>
            Helene
          </span>
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              style={font}
              className={cn(
                "text-sm tracking-wide no-underline transition-colors relative group pb-0.5",
                isActive(link.href)
                  ? "text-(--sage-600) font-medium"
                  : "text-(--sage-500) hover:text-(--sage-700)"
              )}
            >
              {locale === "tr"
                ? link.labelTr
                : link.labelEn}
              <span
                className={cn(
                  "absolute -bottom-0.5 left-0 h-px bg-(--sage-500) transition-all duration-300",
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Right — locale switcher only */}
        <div className="hidden md:flex items-center">
          <Link
            href={localePath}
            style={font}
            className="text-xs uppercase tracking-widest text-(--sage-400) hover:text-(--sage-600) border border-(--sage-200) hover:border-(--sage-400) rounded-full px-4 py-1.5 transition-colors no-underline"
          >
            {otherLocale}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-(--sage-600) p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{ backgroundColor: "#FDFBF7", borderTop: "1px solid #F2E8D5", padding: "16px 24px 24px" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              onClick={() => setOpen(false)}
              style={{ ...font, borderBottom: "1px solid #F2E8D5" }}
              className={cn(
                "block py-3 text-sm no-underline transition-colors",
                isActive(link.href) ? "text-(--sage-600) font-medium" : "text-(--sage-500)"
              )}
            >
              {locale === "tr" ? link.labelTr : link.labelEn}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href={localePath}
              onClick={() => setOpen(false)}
              style={font}
              className="text-xs uppercase tracking-widest text-(--sage-400) border border-(--sage-200) rounded-full px-4 py-1.5 no-underline"
            >
              {otherLocale}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}