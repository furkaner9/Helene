import Link from "next/link";
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
    <footer style={{ backgroundColor: "#1E3325", color: "white", ...font }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 24px 40px" }}>

        {/* 3 kolon grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "64px",
            marginBottom: "48px",
          }}
        >
          {/* Marka */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
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
              <span style={{ ...display, fontSize: "26px", fontWeight: 500, letterSpacing: "0.04em" }}>
                Helene
              </span>
            </div>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: "1.75", maxWidth: "280px" }}>
              {tr
                ? "Kanıta dayalı fizyoterapi ve rehabilitasyon hizmetleri."
                : "Evidence-based physiotherapy and rehabilitation services."}
            </p>
          </div>

          {/* Sayfalar */}
          <div>
            <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#97BE97", marginBottom: "20px" }}>
              {tr ? "Sayfalar" : "Pages"}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                  >
                    {tr ? link.labelTr : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#97BE97", marginBottom: "20px" }}>
              {tr ? "İletişim" : "Contact"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)" }}>
                +90 (212) 555 00 00
              </p>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)" }}>
                info@helene.com.tr
              </p>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)" }}>
                Kadıköy, İstanbul
              </p>
            </div>
          </div>
        </div>

        <Separator style={{ backgroundColor: "rgba(255,255,255,0.1)", marginBottom: "28px" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
            © 2025 Helene {tr ? "Fizyoterapi" : "Physiotherapy"}
          </p>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
            {tr ? "İstanbul'da yapıldı" : "Made in Istanbul"} 🌿
          </p>
        </div>

      </div>
    </footer>
  );
}