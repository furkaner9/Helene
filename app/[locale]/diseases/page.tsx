"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Search, ArrowRight, Zap, Activity, Bone, Brain, Heart, Baby } from "lucide-react";
import { diseases, categories } from "@/lib/diseases";

const display = { fontFamily: "'Cormorant Garamond', serif" };
const font = { fontFamily: "'Jost', sans-serif" };

const iconMap: Record<string, React.ElementType> = {
  Zap, Activity, Bone, Brain, Heart, Baby,
};

export default function DiseasesPage() {
  const locale = useLocale();
  const tr = locale === "tr";
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = diseases.filter((d) => {
    const matchCategory = activeCategory ? d.category === activeCategory : true;
    if (!query) return matchCategory;
    const q = query.toLowerCase();
    return (
      matchCategory &&
      (
        (tr ? d.titleTr : d.titleEn).toLowerCase().includes(q) ||
        (tr ? d.summaryTr : d.summaryEn).toLowerCase().includes(q) ||
        (tr ? d.symptomsTr : d.symptomsEn).some((s) => s.toLowerCase().includes(q)) ||
        (tr ? d.treatmentsTr : d.treatmentsEn).some((t) => t.toLowerCase().includes(q))
      )
    );
  });

  return (
    <div style={{ backgroundColor: "#FDFBF7", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ backgroundColor: "#F9F4EC", padding: "140px 24px 72px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "500px", height: "500px", borderRadius: "50%", backgroundColor: "#E2EDE2", opacity: 0.4, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "300px", height: "300px", borderRadius: "50%", backgroundColor: "#F2E8D5", opacity: 0.5, pointerEvents: "none" }} />

        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <span style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#4A7C59", backgroundColor: "#E2EDE2", padding: "6px 16px", borderRadius: "999px" }}>
            {tr ? "Hastalık Kütüphanesi" : "Disease Library"}
          </span>
          <h1 style={{ ...display, fontSize: "clamp(44px, 6vw, 72px)", color: "#1E3325", fontWeight: 400, lineHeight: 1.1, margin: "20px 0 16px" }}>
            {tr ? <><em style={{ color: "#4A7C59", fontStyle: "italic" }}>Fizyoterapi</em> Hastalıkları</> : <><em style={{ color: "#4A7C59", fontStyle: "italic" }}>Physiotherapy</em> Conditions</>}
          </h1>
          <p style={{ ...font, fontSize: "15px", color: "#3A6147", lineHeight: 1.75, opacity: 0.8, marginBottom: "36px" }}>
            {tr
              ? "Hastalık adı, belirti veya tedavi yöntemi ile arayın. Her hastalık için detaylı bilgi ve tedavi seçeneklerine ulaşın."
              : "Search by condition name, symptom or treatment method. Access detailed information and treatment options for each condition."}
          </p>

          {/* Arama */}
          <div style={{ position: "relative", maxWidth: "500px", margin: "0 auto" }}>
            <Search size={18} color="#6A9F6A" style={{ position: "absolute", left: "18px", top: "50%", transform: "translateY(-50%)" }} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={tr ? "Örn: bel ağrısı, siyatik, Schroth..." : "E.g. back pain, sciatica, Schroth..."}
              style={{ ...font, width: "100%", padding: "14px 18px 14px 48px", borderRadius: "999px", border: "1px solid #C3D9C3", backgroundColor: "white", fontSize: "14px", color: "#2D4D38", outline: "none", boxSizing: "border-box" }}
            />
          </div>
        </div>
      </section>

      {/* Kategori filtreleri */}
      <div style={{ backgroundColor: "white", borderBottom: "1px solid #F2E8D5", position: "sticky", top: "72px", zIndex: 40 }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", gap: "8px", overflowX: "auto", alignItems: "center", height: "64px" }}>
          <button
            onClick={() => setActiveCategory(null)}
            style={{
              ...font,
              fontSize: "13px",
              padding: "7px 18px",
              borderRadius: "999px",
              border: "1px solid",
              borderColor: activeCategory === null ? "#3A6147" : "#E8D9BC",
              backgroundColor: activeCategory === null ? "#3A6147" : "transparent",
              color: activeCategory === null ? "white" : "#3A6147",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {tr ? "Tümü" : "All"}
          </button>
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Zap;
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(isActive ? null : cat.slug)}
                style={{
                  ...font,
                  fontSize: "13px",
                  padding: "7px 18px",
                  borderRadius: "999px",
                  border: "1px solid",
                  borderColor: isActive ? "#3A6147" : "#E8D9BC",
                  backgroundColor: isActive ? "#3A6147" : "transparent",
                  color: isActive ? "white" : "#3A6147",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Icon size={14} />
                {tr ? cat.labelTr : cat.labelEn}
              </button>
            );
          })}
        </div>
      </div>

      {/* Hastalık kartları — kategorilere göre gruplu */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "56px 24px 80px" }}>

        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p style={{ ...display, fontSize: "28px", color: "#97BE97" }}>{tr ? "Sonuç bulunamadı." : "No results found."}</p>
            <p style={{ ...font, fontSize: "14px", color: "#6A9F6A", marginTop: "8px" }}>{tr ? "Farklı bir arama terimi deneyin." : "Try a different search term."}</p>
          </div>
        ) : (
          <>
            {/* Kategori grupları */}
            {(activeCategory ? categories.filter(c => c.slug === activeCategory) : categories).map((cat) => {
              const catDiseases = filtered.filter((d) => d.category === cat.slug);
              if (catDiseases.length === 0) return null;
              const Icon = iconMap[cat.icon] ?? Zap;

              return (
                <div key={cat.slug} style={{ marginBottom: "64px" }}>
                  {/* Kategori başlığı */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "12px", backgroundColor: "#E2EDE2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={20} color="#3A6147" />
                    </div>
                    <h2 style={{ ...display, fontSize: "32px", color: "#1E3325", fontWeight: 400 }}>
                      {tr ? cat.labelTr : cat.labelEn}
                    </h2>
                    <span style={{ ...font, fontSize: "12px", color: "#6A9F6A", backgroundColor: "#F9F4EC", padding: "3px 10px", borderRadius: "999px", border: "1px solid #E8D9BC" }}>
                      {catDiseases.length} {tr ? "hastalık" : "condition"}
                    </span>
                  </div>

                  {/* Kartlar */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                    {catDiseases.map((d) => (
                      <Link key={d.slug} href={`/${locale}/diseases/${d.slug}`} style={{ textDecoration: "none" }}>
                        <div
                          style={{ backgroundColor: "white", borderRadius: "20px", padding: "28px", border: "1px solid #F2E8D5", height: "100%", display: "flex", flexDirection: "column", cursor: "pointer" }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLDivElement).style.borderColor = "#97BE97";
                            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(74,124,89,0.10)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLDivElement).style.borderColor = "#F2E8D5";
                            (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                          }}
                        >
                          <h3 style={{ ...display, fontSize: "22px", color: "#1E3325", fontWeight: 400, marginBottom: "10px" }}>
                            {tr ? d.titleTr : d.titleEn}
                          </h3>
                          <p style={{ ...font, fontSize: "13px", color: "#3A6147", lineHeight: 1.7, opacity: 0.8, marginBottom: "16px", flex: 1 }}>
                            {tr ? d.summaryTr : d.summaryEn}
                          </p>
                          {/* Belirtiler */}
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "16px" }}>
                            {(tr ? d.symptomsTr : d.symptomsEn).slice(0, 3).map((s) => (
                              <span key={s} style={{ ...font, fontSize: "11px", backgroundColor: "#F9F4EC", color: "#3A6147", padding: "2px 9px", borderRadius: "999px", border: "1px solid #E8D9BC" }}>
                                {s}
                              </span>
                            ))}
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#4A7C59" }}>
                            <span style={{ ...font, fontSize: "12px" }}>{tr ? "Detaylı Bilgi" : "Learn More"}</span>
                            <ArrowRight size={13} />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </section>
    </div>
  );
}