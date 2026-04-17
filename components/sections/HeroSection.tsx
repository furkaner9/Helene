"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

const display = { fontFamily: "'Cormorant Garamond', serif" };
const font = { fontFamily: "'Jost', sans-serif" };

export default function HeroSection() {
  const locale = useLocale();
  const tr = locale === "tr";

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "#FDFBF7",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", backgroundColor: "#E2EDE2", opacity: 0.5, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "400px", height: "400px", borderRadius: "50%", backgroundColor: "#F2E8D5", opacity: 0.6, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)", ...display, fontSize: "480px", color: "#E2EDE2", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>
        H
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "680px" }}>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E2EDE2", borderRadius: "999px", padding: "6px 16px", marginBottom: "32px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#4A7C59" }} />
            <span style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#3A6147" }}>
              {tr ? "Fizyoterapi & Rehabilitasyon" : "Physiotherapy & Rehabilitation"}
            </span>
          </div>

          <h1 style={{ ...display, fontSize: "clamp(56px, 8vw, 96px)", lineHeight: 1.05, color: "#1E3325", marginBottom: "24px", fontWeight: 400 }}>
            {tr ? (
              <>Hareketin<br /><em style={{ color: "#4A7C59", fontStyle: "italic" }}>şifa</em> gücü</>
            ) : (
              <>The healing<br /><em style={{ color: "#4A7C59", fontStyle: "italic" }}>power</em> of movement</>
            )}
          </h1>

          <p style={{ ...font, fontSize: "17px", color: "#3A6147", lineHeight: 1.75, marginBottom: "40px", maxWidth: "520px", opacity: 0.85 }}>
            {tr
              ? "Fizyoterapi hastalıkları, tedavi yöntemleri ve rehabilitasyon süreçleri hakkında bilimsel ve güvenilir bilgiye ulaşın."
              : "Discover scientific and reliable information about physiotherapy conditions, treatment methods and rehabilitation processes."}
          </p>

          <Link
            href={`/${locale}/treatments`}
            style={{ ...font, display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#3A6147", color: "white", textDecoration: "none", padding: "14px 32px", borderRadius: "999px", fontSize: "14px", letterSpacing: "0.05em" }}
          >
            {tr ? "Tedavileri Keşfet" : "Explore Treatments"}
            <ArrowRight size={16} />
          </Link>

        </div>
      </div>
    </section>
  );
}