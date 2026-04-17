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
      {/* Arka plan dekoratif daire */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          backgroundColor: "#E2EDE2",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          backgroundColor: "#F2E8D5",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />

      {/* Büyük dekoratif H harfi */}
      <div
        style={{
          position: "absolute",
          right: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          ...display,
          fontSize: "480px",
          color: "#E2EDE2",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        H
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "680px" }}>

          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#E2EDE2",
              borderRadius: "999px",
              padding: "6px 16px",
              marginBottom: "32px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#4A7C59",
              }}
            />
            <span style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#3A6147" }}>
              {tr ? "Fizyoterapi & Rehabilitasyon" : "Physiotherapy & Rehabilitation"}
            </span>
          </div>

          {/* Başlık */}
          <h1
            style={{
              ...display,
              fontSize: "clamp(56px, 8vw, 96px)",
              lineHeight: 1.05,
              color: "#1E3325",
              marginBottom: "24px",
              fontWeight: 400,
            }}
          >
            {tr ? (
              <>
                Hareketin<br />
                <em style={{ color: "#4A7C59", fontStyle: "italic" }}>şifa</em>{" "}
                gücü
              </>
            ) : (
              <>
                The healing<br />
                <em style={{ color: "#4A7C59", fontStyle: "italic" }}>power</em>{" "}
                of movement
              </>
            )}
          </h1>

          {/* Alt başlık */}
          <p
            style={{
              ...font,
              fontSize: "17px",
              color: "#3A6147",
              lineHeight: 1.75,
              marginBottom: "40px",
              maxWidth: "520px",
              opacity: 0.85,
            }}
          >
            {tr
              ? "Vücudunuzun doğal iyileşme kapasitesini harekete geçiren, bilimsel temelli ve kişiselleştirilmiş fizyoterapi hizmetleri."
              : "Science-based, personalised physiotherapy services that activate your body's natural healing capacity."}
          </p>

          {/* CTA buton */}
          <Link
            href={`/${locale}/contact`}
            style={{
              ...font,
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#3A6147",
              color: "white",
              textDecoration: "none",
              padding: "14px 32px",
              borderRadius: "999px",
              fontSize: "14px",
              letterSpacing: "0.05em",
            }}
          >
            {tr ? "İletişime Geç" : "Get in Touch"}
            <ArrowRight size={16} />
          </Link>

          {/* İstatistikler */}
          <div
            style={{
              display: "flex",
              gap: "48px",
              marginTop: "64px",
              paddingTop: "40px",
              borderTop: "1px solid #E8D9BC",
            }}
          >
            {[
              { num: "500+", labelTr: "Mutlu Hasta", labelEn: "Happy Patients" },
              { num: "8+", labelTr: "Yıl Deneyim", labelEn: "Years Experience" },
              { num: "20+", labelTr: "Tedavi Alanı", labelEn: "Treatment Areas" },
            ].map((stat) => (
              <div key={stat.num}>
                <p style={{ ...display, fontSize: "42px", color: "#2D4D38", fontWeight: 500, lineHeight: 1 }}>
                  {stat.num}
                </p>
                <p style={{ ...font, fontSize: "12px", color: "#6A9F6A", marginTop: "6px", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                  {tr ? stat.labelTr : stat.labelEn}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}