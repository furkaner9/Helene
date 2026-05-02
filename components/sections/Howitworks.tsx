"use client";

import { useLocale } from "next-intl";
import { ClipboardList, Stethoscope, Dumbbell, TrendingUp } from "lucide-react";

const display = { fontFamily: "'Cormorant Garamond', serif" };
const font = { fontFamily: "'Jost', sans-serif" };

const steps = [
  {
    icon: ClipboardList,
    num: "01",
    titleTr: "Değerlendirme",
    titleEn: "Assessment",
    descTr: "Kapsamlı bir fiziksel muayene ve anamnez ile hastanın mevcut durumu, ağrı düzeyi ve fonksiyonel kısıtlılıkları belirlenir.",
    descEn: "A comprehensive physical examination and medical history determines the patient's current condition, pain level and functional limitations.",
  },
  {
    icon: Stethoscope,
    num: "02",
    titleTr: "Tanı & Plan",
    titleEn: "Diagnosis & Plan",
    descTr: "Değerlendirme sonuçlarına göre kişiye özel bir tedavi planı hazırlanır. Hedefler, yöntemler ve tahmini süre belirlenir.",
    descEn: "A personalised treatment plan is prepared based on assessment results. Goals, methods and estimated duration are determined.",
  },
  {
    icon: Dumbbell,
    num: "03",
    titleTr: "Tedavi",
    titleEn: "Treatment",
    descTr: "Manuel terapi, egzersiz ve elektroterapi gibi kanıta dayalı yöntemlerle tedavi süreci başlatılır. Her seans bir öncekinin üzerine inşa edilir.",
    descEn: "The treatment process begins with evidence-based methods such as manual therapy, exercise and electrotherapy. Each session builds on the previous one.",
  },
  {
    icon: TrendingUp,
    num: "04",
    titleTr: "Takip & İyileşme",
    titleEn: "Follow-up & Recovery",
    descTr: "İlerleme düzenli olarak değerlendirilir, plan gerektiğinde güncellenir. Ev egzersiz programı ile iyileşme desteklenir.",
    descEn: "Progress is regularly assessed and the plan is updated as needed. Recovery is supported with a home exercise programme.",
  },
];

export default function HowItWorks() {
  const locale = useLocale();
  const tr = locale === "tr";

  return (
    <section style={{ backgroundColor: "#F8F6F2", padding: "100px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Başlık */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "end", marginBottom: "72px" }}>
          <div>
            <span style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#4A7C59", backgroundColor: "#E2EDE2", padding: "6px 16px", borderRadius: "999px", display: "inline-block", marginBottom: "20px" }}>
              {tr ? "Süreç" : "Process"}
            </span>
            <h2 style={{ ...display, fontSize: "clamp(36px, 5vw, 60px)", color: "#1E3325", fontWeight: 300, lineHeight: 1.1, margin: 0 }}>
              {tr ? "Fizyoterapi" : "How does"}{" "}
              <em style={{ color: "#4A7C59", fontStyle: "italic" }}>
                {tr ? "nasıl işler?" : "physiotherapy work?"}
              </em>
            </h2>
          </div>
          <p style={{ ...font, fontSize: "15px", color: "#6A7060", lineHeight: 1.8, margin: 0 }}>
            {tr
              ? "Her tedavi süreci dört temel aşamadan oluşur. Bu sistematik yaklaşım, en kısa sürede en iyi sonucu almanızı sağlar."
              : "Every treatment process consists of four key stages. This systematic approach ensures you get the best result in the shortest time."}
          </p>
        </div>

        {/* Adımlar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px", position: "relative" }}>

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <div key={step.num} style={{ position: "relative" }}>

                {/* Bağlantı çizgisi */}
                {!isLast && (
                  <div style={{
                    position: "absolute",
                    top: "44px",
                    right: "-1px",
                    width: "calc(100% - 88px + 2px)",
                    height: "1px",
                    backgroundColor: "#D8D0C4",
                    zIndex: 0,
                    left: "88px",
                  }} />
                )}

                <div style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  padding: "36px 28px",
                  border: "1px solid #EDE8E0",
                  position: "relative",
                  zIndex: 1,
                  margin: "0 8px",
                }}>
                  {/* Adım numarası + ikon */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                    <div style={{
                      width: "52px", height: "52px",
                      borderRadius: "14px",
                      backgroundColor: "#1E3325",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon size={22} color="#97BE97" />
                    </div>
                    <span style={{ ...font, fontSize: "28px", color: "#E2EDE2", fontWeight: 700, letterSpacing: "-0.02em" }}>
                      {step.num}
                    </span>
                  </div>

                  <h3 style={{ ...display, fontSize: "24px", color: "#1E3325", fontWeight: 400, marginBottom: "12px" }}>
                    {tr ? step.titleTr : step.titleEn}
                  </h3>
                  <p style={{ ...font, fontSize: "13px", color: "#6A7060", lineHeight: 1.75, margin: 0 }}>
                    {tr ? step.descTr : step.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}