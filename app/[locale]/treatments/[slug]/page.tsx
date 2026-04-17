import { notFound } from "next/navigation";
import Link from "next/link";
import { treatments } from "@/lib/treatments";
import { ArrowLeft, Zap, Activity, Bone, Brain, Heart, Hand, CheckCircle2 } from "lucide-react";

const display = { fontFamily: "'Cormorant Garamond', serif" };
const font = { fontFamily: "'Jost', sans-serif" };

const iconMap: Record<string, React.ElementType> = {
  Zap, Activity, Bone, Brain, Heart, Hand,
};

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const tr = locale === "tr";
  const treatment = treatments.find((t) => t.slug === slug);
  if (!treatment) notFound();

  const Icon = iconMap[treatment.icon] ?? Zap;
  const conditions = tr ? treatment.conditionsTr : treatment.conditionsEn;
  const symptoms = tr ? treatment.symptomsTr : treatment.symptomsEn;
  const methods = tr ? treatment.methodsTr : treatment.methodsEn;

  return (
    <div style={{ backgroundColor: "#FDFBF7", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ backgroundColor: "#F9F4EC", padding: "140px 24px 72px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "500px", height: "500px", borderRadius: "50%", backgroundColor: "#E2EDE2", opacity: 0.4, pointerEvents: "none" }} />

        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Geri */}
          <Link
            href={`/${locale}/treatments`}
            style={{ ...font, display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#6A9F6A", textDecoration: "none", marginBottom: "32px" }}
          >
            <ArrowLeft size={15} />
            {tr ? "Tüm Tedaviler" : "All Treatments"}
          </Link>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "16px", backgroundColor: "#3A6147", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon size={26} color="white" />
            </div>
            <div>
              <h1 style={{ ...display, fontSize: "clamp(40px, 5vw, 64px)", color: "#1E3325", fontWeight: 400, lineHeight: 1.1, marginBottom: "16px" }}>
                {tr ? treatment.titleTr : treatment.titleEn}
              </h1>
              <p style={{ ...font, fontSize: "16px", color: "#3A6147", lineHeight: 1.75, opacity: 0.85, maxWidth: "640px" }}>
                {tr ? treatment.shortTr : treatment.shortEn}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* İçerik */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "48px", alignItems: "start" }}>

          {/* Sol — ana içerik */}
          <div>
            {/* Açıklama */}
            <div style={{ marginBottom: "48px" }}>
              <h2 style={{ ...display, fontSize: "32px", color: "#1E3325", fontWeight: 400, marginBottom: "16px" }}>
                {tr ? "Genel Bilgi" : "Overview"}
              </h2>
              {(tr ? treatment.descTr : treatment.descEn).split("\n\n").map((para, i) => (
                <p key={i} style={{ ...font, fontSize: "15px", color: "#2D4D38", lineHeight: 1.85, marginBottom: "16px", opacity: 0.85 }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Hastalıklar / Durumlar */}
            <div>
              <h2 style={{ ...display, fontSize: "32px", color: "#1E3325", fontWeight: 400, marginBottom: "24px" }}>
                {tr ? "Hastalıklar & Durumlar" : "Conditions"}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {conditions.map((c) => (
                  <div
                    key={c.name}
                    style={{ backgroundColor: "white", borderRadius: "16px", padding: "24px", border: "1px solid #F2E8D5" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                      <CheckCircle2 size={18} color="#4A7C59" />
                      <h3 style={{ ...display, fontSize: "22px", color: "#1E3325", fontWeight: 400 }}>{c.name}</h3>
                    </div>
                    <p style={{ ...font, fontSize: "14px", color: "#3A6147", lineHeight: 1.7, opacity: 0.85 }}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sağ — sidebar */}
          <div style={{ position: "sticky", top: "100px" }}>

            {/* Belirtiler */}
            <div style={{ backgroundColor: "white", borderRadius: "20px", padding: "28px", border: "1px solid #F2E8D5", marginBottom: "16px" }}>
              <h3 style={{ ...display, fontSize: "22px", color: "#1E3325", fontWeight: 400, marginBottom: "16px" }}>
                {tr ? "Belirtiler" : "Symptoms"}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {symptoms.map((s) => (
                  <li key={s} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#6A9F6A", flexShrink: 0 }} />
                    <span style={{ ...font, fontSize: "13px", color: "#2D4D38" }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tedavi Yöntemleri */}
            <div style={{ backgroundColor: "#1E3325", borderRadius: "20px", padding: "28px" }}>
              <h3 style={{ ...display, fontSize: "22px", color: "white", fontWeight: 400, marginBottom: "16px" }}>
                {tr ? "Tedavi Yöntemleri" : "Treatment Methods"}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {methods.map((m) => (
                  <span key={m} style={{ ...font, fontSize: "12px", backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", padding: "5px 12px", borderRadius: "999px" }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}