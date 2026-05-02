"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Search, Zap, Activity, Bone, Brain, Heart, Baby, ArrowRight } from "lucide-react";
import { diseases, categories } from "@/lib/diseases";

const display = { fontFamily: "'Cormorant Garamond', serif" };
const font = { fontFamily: "'Jost', sans-serif" };

const iconMap: Record<string, React.ElementType> = {
  Zap, Activity, Bone, Brain, Heart, Baby,
};

// Her kategoriye özgü renk paleti
const categoryColors: Record<string, { bg: string; accent: string; tag: string; text: string }> = {
  omurga:   { bg: "#1E3325", accent: "#4A7C59", tag: "#2D4D38", text: "white" },
  eklem:    { bg: "#2C3E50", accent: "#5D8AA8", tag: "#34495E", text: "white" },
  spor:     { bg: "#3B2F2F", accent: "#8B5E3C", tag: "#4A3728", text: "white" },
  noroloji: { bg: "#2D2640", accent: "#7B68A6", tag: "#3D3352", text: "white" },
  kadin:    { bg: "#3B2535", accent: "#A0627A", tag: "#4A3042", text: "white" },
  pediatri: { bg: "#1F3340", accent: "#4A8FA8", tag: "#284050", text: "white" },
};

export default function DiseasesPage() {
  const locale = useLocale();
  const tr = locale === "tr";
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = diseases.filter((d) => {
    const matchCat = activeCategory ? d.category === activeCategory : true;
    if (!query) return matchCat;
    const q = query.toLowerCase();
    return matchCat && (
      (tr ? d.titleTr : d.titleEn).toLowerCase().includes(q) ||
      (tr ? d.summaryTr : d.summaryEn).toLowerCase().includes(q) ||
      (tr ? d.symptomsTr : d.symptomsEn).some(s => s.toLowerCase().includes(q))
    );
  });

  const visibleCategories = activeCategory
    ? categories.filter(c => c.slug === activeCategory)
    : categories;

  return (
    <div style={{ backgroundColor: "#F8F6F2", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(135deg, #1E3325 0%, #2D4D38 50%, #1A2E20 100%)",
        padding: "130px 24px 64px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Dekoratif arka plan */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 80% 50%, rgba(74,124,89,0.15) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(151,190,151,0.4), transparent)" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(151,190,151,0.4)", borderRadius: "999px", padding: "6px 16px", marginBottom: "24px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#97BE97" }} />
              <span style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#97BE97" }}>
                {tr ? "Hastalık Kütüphanesi" : "Disease Library"}
              </span>
            </div>

            <h1 style={{ ...display, fontSize: "clamp(48px, 6vw, 80px)", color: "white", fontWeight: 300, lineHeight: 1.05, marginBottom: "16px" }}>
              {tr ? "Fizyoterapi " : "Physiotherapy "}
              <em style={{ color: "#97BE97", fontStyle: "italic" }}>
                {tr ? "Hastalıkları" : "Conditions"}
              </em>
            </h1>
            <p style={{ ...font, fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, maxWidth: "520px", marginBottom: "36px" }}>
              {tr
                ? "Fizyoterapinin kapsamındaki hastalıklar, belirtiler ve tedavi yöntemleri hakkında bilimsel bilgiye ulaşın."
                : "Access scientific information about conditions, symptoms and treatment methods within the scope of physiotherapy."}
            </p>

            {/* Arama */}
            <div style={{ position: "relative", width: "100%", maxWidth: "480px" }}>
              <Search size={17} color="rgba(255,255,255,0.4)" style={{ position: "absolute", left: "18px", top: "50%", transform: "translateY(-50%)" }} />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={tr ? "Hastalık, belirti veya tedavi ara..." : "Search condition, symptom or treatment..."}
                style={{
                  ...font,
                  width: "100%",
                  padding: "14px 20px 14px 48px",
                  borderRadius: "12px",
                  border: "1px solid rgba(151,190,151,0.25)",
                  backgroundColor: "rgba(255,255,255,0.07)",
                  color: "white",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── KATEGORİ FİLTRELERİ ── */}
      <div style={{ backgroundColor: "white", borderBottom: "1px solid #EDE8E0", position: "sticky", top: "72px", zIndex: 40 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "flex", gap: "4px", overflowX: "auto" }}>
          <button
            onClick={() => setActiveCategory(null)}
            style={{
              ...font,
              fontSize: "13px",
              padding: "14px 20px",
              border: "none",
              borderBottom: activeCategory === null ? "2px solid #3A6147" : "2px solid transparent",
              backgroundColor: "transparent",
              color: activeCategory === null ? "#1E3325" : "#8A9090",
              fontWeight: activeCategory === null ? 500 : 400,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {tr ? "Tümü" : "All"} ({diseases.length})
          </button>
          {categories.map(cat => {
            const Icon = iconMap[cat.icon] ?? Zap;
            const isActive = activeCategory === cat.slug;
            const count = diseases.filter(d => d.category === cat.slug).length;
            return (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(isActive ? null : cat.slug)}
                style={{
                  ...font,
                  fontSize: "13px",
                  padding: "14px 20px",
                  border: "none",
                  borderBottom: isActive ? "2px solid #3A6147" : "2px solid transparent",
                  backgroundColor: "transparent",
                  color: isActive ? "#1E3325" : "#8A9090",
                  fontWeight: isActive ? 500 : 400,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Icon size={13} />
                {tr ? cat.labelTr : cat.labelEn} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* ── HASTALLIK GRİDİ ── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 24px 80px" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p style={{ ...display, fontSize: "32px", color: "#C3D9C3" }}>{tr ? "Sonuç bulunamadı." : "No results found."}</p>
          </div>
        ) : (
          <>
            {visibleCategories.map(cat => {
              const catDiseases = filtered.filter(d => d.category === cat.slug);
              if (catDiseases.length === 0) return null;
              const colors = categoryColors[cat.slug];
              const Icon = iconMap[cat.icon] ?? Zap;

              return (
                <div key={cat.slug} style={{ marginBottom: "72px" }}>

                  {/* Kategori başlığı */}
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "12px", backgroundColor: colors.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={20} color={colors.accent} />
                    </div>
                    <div>
                      <h2 style={{ ...display, fontSize: "30px", color: "#1A1A1A", fontWeight: 400, lineHeight: 1 }}>
                        {tr ? cat.labelTr : cat.labelEn}
                      </h2>
                      <p style={{ ...font, fontSize: "12px", color: "#8A9090", marginTop: "3px" }}>
                        {catDiseases.length} {tr ? "hastalık" : "condition"}
                      </p>
                    </div>
                  </div>

                  {/* Kartlar — 3'lü grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                    {catDiseases.map((d, i) => {
                      // İlk kart büyük (featured)
                      const isFeatured = i === 0 && catDiseases.length >= 3;
                      return (
                        <Link
                          key={d.slug}
                          href={`/${locale}/diseases/${d.slug}`}
                          style={{
                            textDecoration: "none",
                            gridColumn: isFeatured ? "span 2" : "span 1",
                          }}
                        >
                          <div style={{
                            background: isFeatured
                              ? `linear-gradient(135deg, ${colors.bg} 0%, ${colors.tag} 100%)`
                              : "white",
                            borderRadius: "20px",
                            padding: isFeatured ? "40px" : "28px",
                            border: isFeatured ? "none" : "1px solid #EDE8E0",
                            height: "100%",
                            minHeight: isFeatured ? "220px" : "auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            position: "relative",
                            overflow: "hidden",
                            cursor: "pointer",
                          }}>

                            {/* Featured arka plan desen */}
                            {isFeatured && (
                              <div style={{ position: "absolute", right: "-20px", bottom: "-20px", width: "160px", height: "160px", borderRadius: "50%", backgroundColor: `${colors.accent}22`, pointerEvents: "none" }} />
                            )}

                            <div>
                              {/* Kategori etiketi */}
                              <span style={{
                                ...font,
                                fontSize: "10px",
                                textTransform: "uppercase",
                                letterSpacing: "0.15em",
                                color: isFeatured ? colors.accent : "#8A9090",
                                backgroundColor: isFeatured ? `${colors.accent}22` : "#F8F6F2",
                                padding: "3px 10px",
                                borderRadius: "999px",
                                display: "inline-block",
                                marginBottom: "14px",
                              }}>
                                {tr ? cat.labelTr : cat.labelEn}
                              </span>

                              <h3 style={{
                                ...display,
                                fontSize: isFeatured ? "30px" : "22px",
                                color: isFeatured ? "white" : "#1A1A1A",
                                fontWeight: 400,
                                lineHeight: 1.15,
                                marginBottom: "12px",
                              }}>
                                {tr ? d.titleTr : d.titleEn}
                              </h3>

                              <p style={{
                                ...font,
                                fontSize: "13px",
                                color: isFeatured ? "rgba(255,255,255,0.6)" : "#6A7070",
                                lineHeight: 1.7,
                                marginBottom: "20px",
                              }}>
                                {(tr ? d.summaryTr : d.summaryEn).slice(0, isFeatured ? 140 : 90)}...
                              </p>
                            </div>

                            {/* Belirtiler */}
                            <div>
                              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                                {(tr ? d.symptomsTr : d.symptomsEn).slice(0, isFeatured ? 4 : 2).map(s => (
                                  <span key={s} style={{
                                    ...font,
                                    fontSize: "11px",
                                    backgroundColor: isFeatured ? "rgba(255,255,255,0.1)" : "#F8F6F2",
                                    color: isFeatured ? "rgba(255,255,255,0.75)" : "#4A5050",
                                    border: `1px solid ${isFeatured ? "rgba(255,255,255,0.15)" : "#EDE8E0"}`,
                                    padding: "3px 10px",
                                    borderRadius: "999px",
                                  }}>
                                    {s}
                                  </span>
                                ))}
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: "5px", color: isFeatured ? colors.accent : "#3A6147" }}>
                                <span style={{ ...font, fontSize: "12px", fontWeight: 500 }}>
                                  {tr ? "Detaylı Bilgi" : "Learn More"}
                                </span>
                                <ArrowRight size={13} />
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
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