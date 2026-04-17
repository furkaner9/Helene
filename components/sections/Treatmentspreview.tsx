"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight, Zap, Activity, Bone, Brain, Heart, Hand } from "lucide-react";

const display = { fontFamily: "'Cormorant Garamond', serif" };
const font = { fontFamily: "'Jost', sans-serif" };

const treatments = [
  {
    icon: Zap,
    titleTr: "Omurga Sağlığı",
    titleEn: "Spinal Health",
    descTr: "Bel fıtığı, boyun tutulması ve omurga kaymasına yönelik tedavi yöntemleri.",
    descEn: "Treatment methods for disc herniation, neck stiffness and spondylolisthesis.",
    slug: "omurga",
  },
  {
    icon: Activity,
    titleTr: "Spor Yaralanmaları",
    titleEn: "Sports Injuries",
    descTr: "Ligament yırtığı, kas gerilmesi ve tendon iltihabı gibi spor kaynaklı rahatsızlıklar.",
    descEn: "Sports-related conditions such as ligament tears, muscle strains and tendon inflammation.",
    slug: "spor",
  },
  {
    icon: Bone,
    titleTr: "Ortopedik Rehabilitasyon",
    titleEn: "Orthopaedic Rehabilitation",
    descTr: "Ameliyat sonrası eklem hareketliliği ve kas gücünün yeniden kazanılması.",
    descEn: "Regaining joint mobility and muscle strength following surgical procedures.",
    slug: "ortopedi",
  },
  {
    icon: Brain,
    titleTr: "Nörolojik Rehabilitasyon",
    titleEn: "Neurological Rehabilitation",
    descTr: "İnme, Parkinson ve multipl skleroz gibi nörolojik hastalıklarda yaşam kalitesi.",
    descEn: "Quality of life in neurological conditions such as stroke, Parkinson's and MS.",
    slug: "noroloji",
  },
  {
    icon: Heart,
    titleTr: "Kadın Sağlığı",
    titleEn: "Women's Health",
    descTr: "Gebelik, doğum sonrası ve pelvik taban rehabilitasyonuna özel tedaviler.",
    descEn: "Treatments specific to pregnancy, postpartum recovery and pelvic floor rehabilitation.",
    slug: "kadin",
  },
  {
    icon: Hand,
    titleTr: "Manuel Terapi",
    titleEn: "Manual Therapy",
    descTr: "El becerisine dayalı eklem mobilizasyonu ve yumuşak doku teknikleri.",
    descEn: "Hands-on joint mobilisation and soft tissue techniques.",
    slug: "manuel",
  },
];

export default function TreatmentsPreview() {
  const locale = useLocale();
  const tr = locale === "tr";

  return (
    <section style={{ backgroundColor: "#F9F4EC", padding: "96px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Başlık */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "64px" }}>
          <span style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#4A7C59", backgroundColor: "#E2EDE2", padding: "6px 16px", borderRadius: "999px", marginBottom: "20px" }}>
            {tr ? "Uzmanlık Alanları" : "Areas of Expertise"}
          </span>
          <h2 style={{ ...display, fontSize: "clamp(40px, 5vw, 64px)", color: "#1E3325", fontWeight: 400, lineHeight: 1.1, marginBottom: "16px" }}>
            {tr ? "Tedavi" : "Treatment"}{" "}
            <em style={{ color: "#4A7C59", fontStyle: "italic" }}>{tr ? "Alanları" : "Areas"}</em>
          </h2>
          <p style={{ ...font, fontSize: "15px", color: "#3A6147", opacity: 0.75, maxWidth: "480px", lineHeight: 1.7 }}>
            {tr
              ? "Fizyoterapinin kapsamlı dünyasını keşfedin. Her alan için detaylı bilgi ve tedavi yöntemlerine ulaşın."
              : "Explore the comprehensive world of physiotherapy. Find detailed information and treatment methods for each area."}
          </p>
        </div>

        {/* Kartlar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          {treatments.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.slug}
                style={{
                  backgroundColor: "white",
                  borderRadius: "24px",
                  padding: "32px",
                  border: "1px solid #F2E8D5",
                  transition: "box-shadow 0.2s",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    backgroundColor: "#E2EDE2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Icon size={22} color="#3A6147" />
                </div>
                <h3 style={{ ...display, fontSize: "24px", color: "#1E3325", marginBottom: "12px", fontWeight: 400 }}>
                  {tr ? t.titleTr : t.titleEn}
                </h3>
                <p style={{ ...font, fontSize: "14px", color: "#3A6147", lineHeight: 1.7, opacity: 0.8 }}>
                  {tr ? t.descTr : t.descEn}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tümünü gör */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link
            href={`/${locale}/treatments`}
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
              letterSpacing: "0.04em",
            }}
          >
            {tr ? "Tüm Tedavileri Gör" : "View All Treatments"}
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}