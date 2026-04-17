"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Search, ArrowRight, Zap, Activity, Bone, Brain, Heart, Hand } from "lucide-react";
import { treatments } from "@/lib/treatments";

const display = { fontFamily: "'Cormorant Garamond', serif" };
const font = { fontFamily: "'Jost', sans-serif" };

const iconMap: Record<string, React.ElementType> = {
  Zap, Activity, Bone, Brain, Heart, Hand,
};

export default function TreatmentsPage() {
  const locale = useLocale();
  const tr = locale === "tr";
  const [query, setQuery] = useState("");

  const filtered = treatments.filter((t) => {
    const q = query.toLowerCase();
    if (!q) return true;
    const title = tr ? t.titleTr : t.titleEn;
    const symptoms = tr ? t.symptomsTr : t.symptomsEn;
    const methods = tr ? t.methodsTr : t.methodsEn;
    const conditions = tr ? t.conditionsTr : t.conditionsEn;
    return (
      title.toLowerCase().includes(q) ||
      symptoms.some((s) => s.toLowerCase().includes(q)) ||
      methods.some((m) => m.toLowerCase().includes(q)) ||
      conditions.some((c) => c.name.toLowerCase().includes(q))
    );
  });

  return (
    <div style={{ backgroundColor: "#FDFBF7", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ backgroundColor: "#F9F4EC", padding: "140px 24px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "400px", height: "400px", borderRadius: "50%", backgroundColor: "#E2EDE2", opacity: 0.4, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "280px", height: "280px", borderRadius: "50%", backgroundColor: "#F2E8D5", opacity: 0.5, pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "640px", margin: "0 auto" }}>
          <span style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#4A7C59", backgroundColor: "#E2EDE2", padding: "6px 16px", borderRadius: "999px" }}>
            {tr ? "Tedavi Alanları" : "Treatment Areas"}
          </span>
          <h1 style={{ ...display, fontSize: "clamp(44px, 6vw, 72px)", color: "#1E3325", fontWeight: 400, lineHeight: 1.1, margin: "20px 0 16px" }}>
            {tr ? <><em style={{ color: "#4A7C59", fontStyle: "italic" }}>Fizyoterapi</em> Hizmetleri</> : <><em style={{ color: "#4A7C59", fontStyle: "italic" }}>Physiotherapy</em> Services</>}
          </h1>
          <p style={{ ...font, fontSize: "16px", color: "#3A6147", lineHeight: 1.75, opacity: 0.8, marginBottom: "36px" }}>
            {tr
              ? "Hastalık veya tedavi yöntemi arayın, detaylı bilgiye ulaşın."
              : "Search for a condition or treatment method and access detailed information."}
          </p>

          {/* Arama kutusu */}
          <div style={{ position: "relative", maxWidth: "480px", margin: "0 auto" }}>
            <Search size={18} color="#6A9F6A" style={{ position: "absolute", left: "18px", top: "50%", transform: "translateY(-50%)" }} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={tr ? "Örn: bel ağrısı, skolyoz, manuel terapi..." : "E.g. back pain, scoliosis, manual therapy..."}
              style={{
                ...font,
                width: "100%",
                padding: "14px 18px 14px 48px",
                borderRadius: "999px",
                border: "1px solid #C3D9C3",
                backgroundColor: "white",
                fontSize: "14px",
                color: "#2D4D38",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>
      </section>

      {/* Kartlar */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 24px" }}>

        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "64px 0" }}>
            <p style={{ ...display, fontSize: "28px", color: "#97BE97" }}>
              {tr ? "Sonuç bulunamadı." : "No results found."}
            </p>
            <p style={{ ...font, fontSize: "14px", color: "#6A9F6A", marginTop: "8px" }}>
              {tr ? "Farklı bir arama terimi deneyin." : "Try a different search term."}
            </p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {filtered.map((t) => {
              const Icon = iconMap[t.icon] ?? Zap;
              return (
                <Link
                  key={t.slug}
                  href={`/${locale}/treatments/${t.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "24px",
                      padding: "32px",
                      border: "1px solid #F2E8D5",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      cursor: "pointer",
                      transition: "box-shadow 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(74,124,89,0.12)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "#97BE97";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "#F2E8D5";
                    }}
                  >
                    <div style={{ width: "48px", height: "48px", borderRadius: "14px", backgroundColor: "#E2EDE2", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                      <Icon size={22} color="#3A6147" />
                    </div>

                    <h2 style={{ ...display, fontSize: "26px", color: "#1E3325", fontWeight: 400, marginBottom: "12px" }}>
                      {tr ? t.titleTr : t.titleEn}
                    </h2>

                    <p style={{ ...font, fontSize: "14px", color: "#3A6147", lineHeight: 1.7, opacity: 0.8, marginBottom: "20px", flex: 1 }}>
                      {tr ? t.shortTr : t.shortEn}
                    </p>

                    {/* Semptom etiketleri */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                      {(tr ? t.symptomsTr : t.symptomsEn).slice(0, 3).map((s) => (
                        <span key={s} style={{ ...font, fontSize: "11px", backgroundColor: "#F9F4EC", color: "#3A6147", padding: "3px 10px", borderRadius: "999px", border: "1px solid #E8D9BC" }}>
                          {s}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#4A7C59" }}>
                      <span style={{ ...font, fontSize: "13px" }}>{tr ? "Detayları Gör" : "View Details"}</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}