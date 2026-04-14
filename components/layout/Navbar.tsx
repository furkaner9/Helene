"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", labelTr: "Ana Sayfa", labelEn: "Home" },
  { href: "/treatments", labelTr: "Tedaviler", labelEn: "Treatments" },
  { href: "/about", labelTr: "Hakkımda", labelEn: "About" },
  { href: "/contact", labelTr: "İletişim", labelEn: "Contact" },
];

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

  const getLabel = (link: (typeof navLinks)[0]) =>
    locale === "tr" ? link.labelTr : link.labelEn;

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
        scrolled
          ? "bg-(--cream-50)/95 backdrop-blur-md shadow-sm border-b border-(--cream-200)"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-(--sage-500) flex items-center justify-center group-hover:bg-(--sage-600) transition-colors">
            <span
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-white text-xl"
            >
              H
            </span>
          </div>
          <span
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-2xl text-(--sage-700) font-medium tracking-wide"
          >
            Helene
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className={cn(
                "text-sm tracking-wide transition-colors relative group",
                isActive(link.href)
                  ? "text-(--sage-600) font-medium"
                  : "text-(--sage-500) hover:text-(--sage-700)"
              )}
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              {getLabel(link)}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-px bg-(--sage-500) transition-all duration-300",
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Right side */}
      <div className="hidden md:flex items-center gap-3 pr-2">
          {/* Dil değiştirici */}
          <Link
            href={localePath}
            className="text-xs uppercase tracking-widest text-(--sage-400) hover:text-(--sage-600) border border-(--sage-200) hover:border-(--sage-400) rounded-full px-3 py-1 transition-colors"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            {otherLocale}
          </Link>

          {/* CTA */}
          <Link
  href={`/${locale}/contact`}
  className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-(--sage-600) text-white text-sm hover:bg-(--sage-700) transition-colors"
  style={{ fontFamily: "'Jost', sans-serif" }}
>
  {locale === "tr" ? "Randevu Al" : "Book Now"}
</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-(--sage-600) p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-(--cream-50) border-t border-(--cream-200) px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              onClick={() => setOpen(false)}
              className={cn(
                "block py-3 text-base border-b border-(--cream-200) transition-colors",
                isActive(link.href)
                  ? "text-(--sage-600) font-medium"
                  : "text-(--sage-500)"
              )}
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              {getLabel(link)}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-4">
            <Link
              href={localePath}
              onClick={() => setOpen(false)}
              className="text-xs uppercase tracking-widest text-(--sage-400)border `border-(--sage-200) rounded-full px-3 py-1"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              {otherLocale}
            </Link>
            <Link
  href={`/${locale}/contact`}
  onClick={() => setOpen(false)}
  className="inline-flex items-center justify-center h-8 px-4 rounded-full bg-(--sage-600) text-white text-xs hover:bg-(--sage-700) transition-colors"
  style={{ fontFamily: "'Jost', sans-serif" }}
>
  {locale === "tr" ? "Randevu Al" : "Book Now"}
</Link>
          </div>
        </div>
      )}
    </header>
  );
}