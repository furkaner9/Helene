import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { href: "/", labelTr: "Ana Sayfa", labelEn: "Home" },
  { href: "/treatments", labelTr: "Tedaviler", labelEn: "Treatments" },
  { href: "/about", labelTr: "Hakkımda", labelEn: "About" },
  { href: "/contact", labelTr: "İletişim", labelEn: "Contact" },
];

const font = { fontFamily: "'Jost', sans-serif" };
const display = { fontFamily: "'Cormorant Garamond', serif" };

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const tr = locale === "tr";

  return (
    <footer className="bg-(--sage-800) text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-(--sage-500) flex items-center justify-center">
                <span style={display} className="text-white text-xl">H</span>
              </div>
              <span style={display} className="text-2xl font-medium tracking-wide">
                Helene
              </span>
            </div>
            <p style={font} className="text-sm text-white/60 leading-relaxed mb-6 max-w-xs">
              {tr
                ? "Kanıta dayalı fizyoterapi ile hareket özgürlüğünüzü yeniden kazanın."
                : "Regain your freedom of movement with evidence-based physiotherapy."}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-(--sage-500) flex items-center justify-center transition-colors">
                <Mail size={16} className="text-white/70" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-(--sage-500) flex items-center justify-center transition-colors">
                <Phone size={16} className="text-white/70" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p style={font} className="text-xs uppercase tracking-widest text-(--sage-300) mb-5">
              {tr ? "Hızlı Bağlantılar" : "Quick Links"}
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    style={font}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {tr ? link.labelTr : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={font} className="text-xs uppercase tracking-widest text-(--sage-300) mb-5">
              {tr ? "İletişim" : "Contact"}
            </p>
            <div className="space-y-4">
              <a href="tel:+902125550000" style={font} className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Phone size={15} className="text-(--sage-400)" />
                +90 (212) 555 00 00
              </a>
              <a href="mailto:info@helene.com.tr" style={font} className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Mail size={15} className="text-(--sage-400)" />
                info@helene.com.tr
              </a>
              <div style={font} className="flex items-center gap-3 text-sm text-white/60">
                <MapPin size={15} className="text-(--sage-400)" />
                Kadıköy, İstanbul
              </div>
            </div>
          </div>

        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={font} className="text-xs text-white/40">
            © 2025 Helene {tr ? "Fizyoterapi. Tüm hakları saklıdır." : "Physiotherapy. All rights reserved."}
          </p>
          <p style={font} className="text-xs text-white/30">
            {tr ? "İstanbul'da yapıldı" : "Made in Istanbul"} 🌿
          </p>
        </div>

      </div>
    </footer>
  );
}