"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { diseases, categories } from "@/lib/diseases";
import { ArrowLeft, CheckCircle2, Zap, Activity, Bone, Brain, Heart, Baby } from "lucide-react";

const display = { fontFamily: "'Cormorant Garamond', serif" };
const font = { fontFamily: "'Jost', sans-serif" };

const iconMap: Record<string, React.ElementType> = {
  Zap, Activity, Bone, Brain, Heart, Baby,
};

export default async function DiseaseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const tr = locale === "tr";
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) notFound();

  const category = categories.find((c) => c.slug === disease.category);
  const CatIcon = iconMap[category?.icon ?? "Zap"] ?? Zap;

  const relatedDiseases = diseases
    .filter((d) => d.category === disease.category && d.slug !== slug)
    .slice(0, 3);

  return (
    <div style={{ backgroundColor: "#FDFBF7", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ backgroundColor: "#F9F4EC", padding: "140px 24px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "500px", height: "500px", borderRadius: "50%", backgroundColor: "#E2EDE2", opacity: 0.35, pointerEvents: "none" }} />

        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
            <Link href={`/${locale}/diseases`} style={{ ...font, fontSize: "13px", color: "#6A9F6A", textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>
              <ArrowLeft size={14} />
              {tr ? "Hastalıklar" : "Conditions"}
            </Link>
            <span style={{ color: "#C3D9C3" }}>/</span>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <CatIcon size={14} color="#6A9F6A" />
              <span style={{ ...font, fontSize: "13px", color: "#6A9F6A" }}>
                {tr ? category?.labelTr : category?.labelEn}
              </span>
            </div>
          </div>

          {/* Başlık */}
          <h1 style={{ ...display, fontSize: "clamp(44px, 6vw, 72px)", color: "#1E3325", fontWeight: 400, lineHeight: 1.1, marginBottom: "16px" }}>
            {tr ? disease.titleTr : disease.titleEn}
          </h1>
          <p style={{ ...font, fontSize: "16px", color: "#3A6147", lineHeight: 1.75, opacity: 0.85, maxWidth: "640px" }}>
            {tr ? disease.summaryTr : disease.summaryEn}
          </p>
        </div>
      </section>

      {/* İçerik */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "56px 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "48px", alignItems: "start" }}>

          {/* Sol — ana içerik */}
          <div>
            {/* Açıklama */}
            <div style={{ marginBottom: "48px" }}>
              <h2 style={{ ...display, fontSize: "34px", color: "#1E3325", fontWeight: 400, marginBottom: "20px" }}>
                {tr ? "Hastalık Hakkında" : "About this Condition"}
              </h2>
              {(tr ? disease.descTr : disease.descEn).split("\n\n").map((para, i) => (
                <p key={i} style={{ ...font, fontSize: "15px", color: "#2D4D38", lineHeight: 1.9, marginBottom: "16px", opacity: 0.85 }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Belirtiler */}
            <div style={{ backgroundColor: "white", borderRadius: "20px", padding: "32px", border: "1px solid #F2E8D5", marginBottom: "24px" }}>
              <h2 style={{ ...display, fontSize: "28px", color: "#1E3325", fontWeight: 400, marginBottom: "20px" }}>
                {tr ? "Belirtiler" : "Symptoms"}
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {(tr ? disease.symptomsTr : disease.symptomsEn).map((s) => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <CheckCircle2 size={16} color="#4A7C59" style={{ flexShrink: 0 }} />
                    <span style={{ ...font, fontSize: "14px", color: "#2D4D38" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* İlgili hastalıklar */}
            {relatedDiseases.length > 0 && (
              <div>
                <h2 style={{ ...display, fontSize: "28px", color: "#1E3325", fontWeight: 400, marginBottom: "16px" }}>
                  {tr ? "Benzer Hastalıklar" : "Related Conditions"}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {relatedDiseases.map((r) => (
                    <Link key={r.slug} href={`/${locale}/diseases/${r.slug}`} style={{ textDecoration: "none" }}>
                      <div
                        style={{ backgroundColor: "white", borderRadius: "16px", padding: "20px 24px", border: "1px solid #F2E8D5", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                        onMouseEnter={(e) => (e.currentTarget as HTMLDivElement).style.borderColor = "#97BE97"}
                        onMouseLeave={(e) => (e.currentTarget as HTMLDivElement).style.borderColor = "#F2E8D5"}
                      >
                        <div>
                          <p style={{ ...display, fontSize: "20px", color: "#1E3325", fontWeight: 400 }}>{tr ? r.titleTr : r.titleEn}</p>
                          <p style={{ ...font, fontSize: "13px", color: "#6A9F6A", marginTop: "4px" }}>{tr ? r.summaryTr.slice(0, 60) : r.summaryEn.slice(0, 60)}...</p>
                        </div>
                        <ArrowLeft size={16} color="#97BE97" style={{ transform: "rotate(180deg)", flexShrink: 0 }} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sağ — sidebar */}
          <div style={{ position: "sticky", top: "100px", display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Tedavi yöntemleri */}
            <div style={{ backgroundColor: "#1E3325", borderRadius: "20px", padding: "28px" }}>
              <h3 style={{ ...display, fontSize: "22px", color: "white", fontWeight: 400, marginBottom: "16px" }}>
                {tr ? "Tedavi Yöntemleri" : "Treatment Methods"}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {(tr ? disease.treatmentsTr : disease.treatmentsEn).map((t) => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#97BE97", flexShrink: 0 }} />
                    <span style={{ ...font, fontSize: "13px", color: "rgba(255,255,255,0.8)" }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tedaviler sayfasına link */}
            <Link href={`/${locale}/treatments`} style={{ textDecoration: "none" }}>
              <div style={{ backgroundColor: "#E2EDE2", borderRadius: "20px", padding: "24px", border: "1px solid #C3D9C3", textAlign: "center" }}>
                <p style={{ ...display, fontSize: "20px", color: "#1E3325", fontWeight: 400, marginBottom: "8px" }}>
                  {tr ? "Tedavi Yöntemleri" : "Treatment Methods"}
                </p>
                <p style={{ ...font, fontSize: "13px", color: "#3A6147", lineHeight: 1.6, marginBottom: "12px" }}>
                  {tr ? "Tüm fizyoterapi tedavi yöntemlerini keşfedin." : "Explore all physiotherapy treatment methods."}
                </p>
                <span style={{ ...font, fontSize: "12px", color: "#3A6147", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                  {tr ? "Keşfet" : "Explore"} <ArrowLeft size={12} style={{ transform: "rotate(180deg)" }} />
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}