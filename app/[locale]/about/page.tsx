"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight, CheckCircle } from "lucide-react";

const display = { fontFamily: "'Cormorant Garamond', serif" };
const font = { fontFamily: "'Jost', sans-serif" };

export default function AboutPreview() {
  const locale = useLocale();
  const tr = locale === "tr";

  const items = tr
    ? [
        "Kanıta dayalı tedavi protokolleri",
        "Kişiselleştirilmiş rehabilitasyon planları",
        "Bütünsel ve hasta odaklı yaklaşım",
        "Güncel bilimsel araştırmalar ışığında uygulama",
      ]
    : [
        "Evidence-based treatment protocols",
        "Personalised rehabilitation plans",
        "Holistic and patient-centred approach",
        "Practice guided by current scientific research",
      ];

  return (
    <section style={{ backgroundColor: "#FDFBF7", padding: "96px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

          {/* Sol — görsel */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "4/5",
                borderRadius: "32px",
                background: "linear-gradient(135deg, #C3D9C3 0%, #4A7C59 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ ...display, fontSize: "160px", color: "rgba(255,255,255,0.2)", lineHeight: 1 }}>H</span>
            </div>
            {/* Yüzen kart */}
            <div
              style={{
                position: "absolute",
                bottom: "-24px",
                right: "-24px",
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "20px 28px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                border: "1px solid #F2E8D5",
              }}
            >
              <p style={{ ...display, fontSize: "40px", color: "#2D4D38", lineHeight: 1, fontWeight: 500 }}>8+</p>
              <p style={{ ...font, fontSize: "12px", color: "#6A9F6A", marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                {tr ? "Yıl Deneyim" : "Years Experience"}
              </p>
            </div>
          </div>

          {/* Sağ — içerik */}
          <div>
            <span style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#4A7C59", backgroundColor: "#E2EDE2", padding: "6px 16px", borderRadius: "999px" }}>
              {tr ? "Hakkımda" : "About"}
            </span>

            <h2 style={{ ...display, fontSize: "clamp(36px, 4vw, 56px)", color: "#1E3325", fontWeight: 400, lineHeight: 1.1, margin: "20px 0 20px" }}>
              {tr ? (
                <>Bilimsel temelli,<br /><em style={{ color: "#4A7C59", fontStyle: "italic" }}>kişiye özel</em> bakış</>
              ) : (
                <>Science-based,<br /><em style={{ color: "#4A7C59", fontStyle: "italic" }}>personalised</em> care</>
              )}
            </h2>

            <p style={{ ...font, fontSize: "15px", color: "#3A6147", lineHeight: 1.8, opacity: 0.85, marginBottom: "32px" }}>
              {tr
                ? "8 yılı aşkın deneyimimle fizyoterapi ve rehabilitasyon alanında hastalara kapsamlı bilgi ve destek sunuyorum. Her hastanın durumu benzersizdir; bu nedenle tedavi yaklaşımım tamamen kişiye özel olarak şekillenir."
                : "With over 8 years of experience, I provide patients with comprehensive knowledge and support in physiotherapy and rehabilitation. Every patient's condition is unique, so my treatment approach is shaped entirely around the individual."}
            </p>

            {/* Liste */}
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {items.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircle size={17} color="#4A7C59" style={{ flexShrink: 0 }} />
                  <span style={{ ...font, fontSize: "14px", color: "#2D4D38" }}>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/${locale}/about`}
              style={{
                ...font,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid #97BE97",
                color: "#3A6147",
                textDecoration: "none",
                padding: "12px 28px",
                borderRadius: "999px",
                fontSize: "14px",
              }}
            >
              {tr ? "Daha Fazla Bilgi" : "Learn More"}
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}