"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Zap, Activity, Bone, Brain, Heart, Hand, ChevronRight } from "lucide-react";

const display = { fontFamily: "'Cormorant Garamond', serif" };
const font = { fontFamily: "'Jost', sans-serif" };

const iconMap: Record<string, React.ElementType> = {
  Zap, Activity, Bone, Brain, Heart, Hand,
};

const treatments = [
  {
    id: "manuel",
    icon: "Hand",
    step: "01",
    titleTr: "Manuel Terapi",
    titleEn: "Manual Therapy",
    tagTr: "Temel Yaklaşım",
    tagEn: "Core Approach",
    descTr: "Fizyoterapistin elleriyle doğrudan uyguladığı eklem mobilizasyonu, manipülasyon ve yumuşak doku tekniklerini kapsar. Ağrı giderme ve hareket açıklığını artırmada hızlı ve etkili sonuçlar sağlar.",
    descEn: "Encompasses joint mobilisation, manipulation and soft tissue techniques applied directly with the physiotherapist's hands. Provides fast and effective results in pain relief and improving range of motion.",
    methodsTr: ["Eklem Mobilizasyonu", "Miyofasyal Gevşetme", "Trigger Point Terapisi", "Kraniosakral Terapi"],
    methodsEn: ["Joint Mobilisation", "Myofascial Release", "Trigger Point Therapy", "Craniosacral Therapy"],
    conditionsTr: ["Kronik ağrı", "Eklem sertliği", "Boyun-bel ağrısı", "Baş ağrısı"],
    conditionsEn: ["Chronic pain", "Joint stiffness", "Neck-back pain", "Headaches"],
  },
  {
    id: "egzersiz",
    icon: "Activity",
    step: "02",
    titleTr: "Egzersiz Terapisi",
    titleEn: "Exercise Therapy",
    tagTr: "Rehabilitasyon Temeli",
    tagEn: "Rehab Foundation",
    descTr: "Hastanın bireysel ihtiyaçlarına göre tasarlanan özel egzersiz programları ile kas güçlendirme, esneklik, denge ve fonksiyonel kapasite artırılır. Kanıta dayalı en etkili fizyoterapi yöntemlerinden biridir.",
    descEn: "Specially designed exercise programmes tailored to individual needs to improve muscle strength, flexibility, balance and functional capacity. One of the most effective evidence-based physiotherapy methods.",
    methodsTr: ["Çekirdek Stabilizasyon", "Propriyosepsiyon Eğitimi", "Denge Egzersizleri", "Fonksiyonel Antrenman"],
    methodsEn: ["Core Stabilisation", "Proprioception Training", "Balance Exercises", "Functional Training"],
    conditionsTr: ["Ameliyat sonrası rehabilitasyon", "Spor yaralanmaları", "Nörolojik hastalıklar", "Kronik ağrı"],
    conditionsEn: ["Post-surgical rehab", "Sports injuries", "Neurological conditions", "Chronic pain"],
  },
  {
    id: "elektroterapi",
    icon: "Zap",
    step: "03",
    titleTr: "Elektroterapi",
    titleEn: "Electrotherapy",
    tagTr: "Teknolojik Destek",
    tagEn: "Tech-Assisted",
    descTr: "TENS, ultrason, lazer ve interferans gibi elektrofizyolojik modaliteler ağrı kontrolü, doku iyileşmesinin hızlandırılması ve kas aktivasyonu için kullanılır. Diğer tedavi yöntemleriyle kombinasyon halinde en yüksek etkinliğe ulaşır.",
    descEn: "Electrophysiological modalities such as TENS, ultrasound, laser and interferential are used for pain control, accelerating tissue healing and muscle activation. Achieves highest efficacy in combination with other treatment methods.",
    methodsTr: ["TENS", "Ultrason Terapisi", "Lazer Terapi", "Interferans Akımı", "FES"],
    methodsEn: ["TENS", "Ultrasound Therapy", "Laser Therapy", "Interferential Current", "FES"],
    conditionsTr: ["Akut ağrı", "Tendon yaralanmaları", "Ödem kontrolü", "Kas atrofisi"],
    conditionsEn: ["Acute pain", "Tendon injuries", "Oedema control", "Muscle atrophy"],
  },
  {
    id: "dry-needling",
    icon: "Zap",
    step: "04",
    titleTr: "Dry Needling",
    titleEn: "Dry Needling",
    tagTr: "İleri Teknik",
    tagEn: "Advanced Technique",
    descTr: "İnce iğnelerin kas içindeki tetik noktalara (trigger point) yerleştirilmesiyle kas spazmı giderilir ve kronik ağrı döngüsü kırılır. Miyofasyal ağrı sendromu ve spor yaralanmalarında oldukça etkilidir.",
    descEn: "Inserting thin needles into trigger points within muscles releases muscle spasm and breaks the chronic pain cycle. Highly effective in myofascial pain syndrome and sports injuries.",
    methodsTr: ["Trigger Point İğnelemesi", "İntramüsküler Stimülasyon", "Fasyal Dry Needling"],
    methodsEn: ["Trigger Point Needling", "Intramuscular Stimulation", "Fascial Dry Needling"],
    conditionsTr: ["Miyofasyal ağrı", "Kas gerilmesi", "Kronik boyun-bel ağrısı", "Baş ağrısı"],
    conditionsEn: ["Myofascial pain", "Muscle strain", "Chronic neck-back pain", "Headaches"],
  },
  {
    id: "kinesio",
    icon: "Activity",
    step: "05",
    titleTr: "Kinesio Bantlama",
    titleEn: "Kinesio Taping",
    tagTr: "Destekleyici Yöntem",
    tagEn: "Supportive Method",
    descTr: "Elastik yapıdaki özel bantların deri üzerine belirli tekniklerle yapıştırılmasıyla eklem desteği, lenf drenajı ve propriyoseptif geri bildirim sağlanır. Spor yaralanmaları ve ödem kontrolünde sıklıkla tercih edilir.",
    descEn: "Applying specially elastic tape to the skin using specific techniques provides joint support, lymphatic drainage and proprioceptive feedback. Frequently preferred in sports injuries and oedema control.",
    methodsTr: ["Mekanik Bantlama", "Lenfatik Bantlama", "Fonksiyonel Bantlama", "Postür Bantlama"],
    methodsEn: ["Mechanical Taping", "Lymphatic Taping", "Functional Taping", "Postural Taping"],
    conditionsTr: ["Spor yaralanmaları", "Ödem", "Omuz sorunları", "Postür bozukluğu"],
    conditionsEn: ["Sports injuries", "Oedema", "Shoulder problems", "Postural disorders"],
  },
  {
    id: "hidroterapi",
    icon: "Heart",
    step: "06",
    titleTr: "Hidroterapi",
    titleEn: "Hydrotherapy",
    tagTr: "Özel Uygulama",
    tagEn: "Specialised",
    descTr: "Suyun kaldırma kuvveti, ısısı ve direncinden yararlanılarak yapılan egzersizler, eklem yükünü azaltırken hareket açıklığını ve kas gücünü artırır. Ortopedik rehabilitasyon ve nörolojik hastalıklarda özellikle endikedir.",
    descEn: "Exercises utilising the buoyancy, warmth and resistance of water reduce joint load while increasing range of motion and muscle strength. Particularly indicated in orthopaedic rehabilitation and neurological conditions.",
    methodsTr: ["Havuz Egzersizleri", "Bad Ragaz Ring Metodu", "Halliwick Metodu", "Aqua Jogging"],
    methodsEn: ["Pool Exercises", "Bad Ragaz Ring Method", "Halliwick Method", "Aqua Jogging"],
    conditionsTr: ["Eklem hastalıkları", "Ortopedik rehabilitasyon", "Nörolojik hastalıklar", "Kronik ağrı"],
    conditionsEn: ["Joint diseases", "Orthopaedic rehab", "Neurological conditions", "Chronic pain"],
  },
  {
    id: "bobath",
    icon: "Brain",
    step: "07",
    titleTr: "Bobath / Nörogelişimsel Tedavi",
    titleEn: "Bobath / Neurodevelopmental Treatment",
    tagTr: "Nörolojik Yaklaşım",
    tagEn: "Neurological Approach",
    descTr: "Merkezi sinir sistemi hasarı olan hastalarda nöroplastisiteyi kullanarak hareket kontrolünü yeniden düzenleyen özel fizyoterapi yaklaşımıdır. İnme, serebral palsi ve MS rehabilitasyonunda uluslararası standart kabul edilmektedir.",
    descEn: "A specialised physiotherapy approach that uses neuroplasticity to reorganise movement control in patients with central nervous system damage. Internationally accepted standard in stroke, cerebral palsy and MS rehabilitation.",
    methodsTr: ["Normal Hareket Fasilitasyonu", "Tonus Normalleştirilmesi", "Denge Eğitimi", "GYA Entegrasyonu"],
    methodsEn: ["Normal Movement Facilitation", "Tone Normalisation", "Balance Training", "ADL Integration"],
    conditionsTr: ["İnme", "Serebral palsi", "Multipl Skleroz", "Beyin hasarı"],
    conditionsEn: ["Stroke", "Cerebral palsy", "Multiple Sclerosis", "Brain injury"],
  },
  {
    id: "schroth",
    icon: "Bone",
    step: "08",
    titleTr: "Schroth Metodu",
    titleEn: "Schroth Method",
    tagTr: "Skolyoz Uzmanı",
    tagEn: "Scoliosis Specialist",
    descTr: "Skolyoza özgü üç boyutlu solunum ve postür düzeltme egzersizlerini içeren özelleşmiş bir fizyoterapi yaklaşımıdır. Büyüme çağındaki çocuklarda skolyozun ilerlemesini önlemede en güçlü kanıta sahip konservatif yöntemdir.",
    descEn: "A specialised physiotherapy approach containing three-dimensional breathing and posture correction exercises specific to scoliosis. The conservative method with the strongest evidence for preventing scoliosis progression in growing children.",
    methodsTr: ["3D Solunum Egzersizleri", "Rotasyonel Düzeltme", "Kas Aktivasyonu", "Postür Eğitimi"],
    methodsEn: ["3D Breathing Exercises", "Rotational Correction", "Muscle Activation", "Postural Training"],
    conditionsTr: ["İdiyopatik skolyoz", "Nöromüsküler skolyoz", "Hiperkifoz", "Postür bozukluğu"],
    conditionsEn: ["Idiopathic scoliosis", "Neuromuscular scoliosis", "Hyperkyphosis", "Postural disorders"],
  },
];

export default function TreatmentsPage() {
  const locale = useLocale();
  const tr = locale === "tr";
  const [active, setActive] = useState<string>("manuel");

  const selected = treatments.find(t => t.id === active) ?? treatments[0];
  const Icon = iconMap[selected.icon] ?? Hand;

  return (
    <div style={{ backgroundColor: "#F8F6F2", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(135deg, #1E3325 0%, #2D4D38 60%, #1A2E20 100%)",
        padding: "130px 24px 56px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(74,124,89,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(151,190,151,0.4)", borderRadius: "999px", padding: "6px 16px", marginBottom: "24px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#97BE97" }} />
            <span style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#97BE97" }}>
              {tr ? "Tedavi Yöntemleri" : "Treatment Methods"}
            </span>
          </div>
          <h1 style={{ ...display, fontSize: "clamp(48px, 6vw, 80px)", color: "white", fontWeight: 300, lineHeight: 1.05, marginBottom: "16px" }}>
            {tr ? "Fizyoterapi " : "Physiotherapy "}
            <em style={{ color: "#97BE97", fontStyle: "italic" }}>
              {tr ? "Tedavileri" : "Treatments"}
            </em>
          </h1>
          <p style={{ ...font, fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: "500px", margin: "0 auto" }}>
            {tr
              ? "Bilimsel temelli tedavi yöntemlerini ve uygulama alanlarını keşfedin."
              : "Explore evidence-based treatment methods and their areas of application."}
          </p>
        </div>
      </section>

      {/* ── TİMELİNE LAYOUT ── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "64px 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: "40px", alignItems: "start" }}>

          {/* Sol — Timeline nav */}
          <div style={{ position: "sticky", top: "100px" }}>
            <p style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#97BE97", marginBottom: "24px" }}>
              {tr ? "Tedavi Listesi" : "Treatment List"}
            </p>

            <div style={{ position: "relative" }}>
              {/* Dikey çizgi */}
              <div style={{ position: "absolute", left: "20px", top: "24px", bottom: "24px", width: "1px", backgroundColor: "#E8E0D8" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {treatments.map((t) => {
                  const TIcon = iconMap[t.icon] ?? Hand;
                  const isActive = active === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActive(t.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        padding: "12px 16px 12px 0",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        borderRadius: "12px",
                        transition: "all 0.2s",
                      }}
                    >
                      {/* Timeline nokta */}
                      <div style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: isActive ? "#1E3325" : "white",
                        border: `1px solid ${isActive ? "#1E3325" : "#E8E0D8"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        zIndex: 1,
                        transition: "all 0.2s",
                      }}>
                        <TIcon size={16} color={isActive ? "#97BE97" : "#B0A898"} />
                      </div>

                      <div style={{ flex: 1 }}>
                        <p style={{ ...font, fontSize: "11px", color: isActive ? "#4A7C59" : "#B0A898", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "2px" }}>
                          {tr ? t.tagTr : t.tagEn}
                        </p>
                        <p style={{ ...display, fontSize: "17px", color: isActive ? "#1E3325" : "#6A6A5A", fontWeight: isActive ? 500 : 400, lineHeight: 1.2 }}>
                          {tr ? t.titleTr : t.titleEn}
                        </p>
                      </div>

                      {isActive && <ChevronRight size={16} color="#4A7C59" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sağ — Detay paneli */}
          <div style={{ backgroundColor: "white", borderRadius: "24px", border: "1px solid #EDE8E0", overflow: "hidden" }}>

            {/* Panel başlık */}
            <div style={{
              background: "linear-gradient(135deg, #1E3325 0%, #2D4D38 100%)",
              padding: "40px 40px 36px",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{ position: "absolute", right: "-30px", bottom: "-30px", width: "160px", height: "160px", borderRadius: "50%", backgroundColor: "rgba(74,124,89,0.15)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", backgroundColor: "rgba(151,190,151,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={22} color="#97BE97" />
                  </div>
                  <span style={{ ...font, fontSize: "11px", color: "#97BE97", textTransform: "uppercase", letterSpacing: "0.15em", border: "1px solid rgba(151,190,151,0.3)", padding: "3px 12px", borderRadius: "999px" }}>
                    {tr ? selected.tagTr : selected.tagEn}
                  </span>
                </div>
                <h2 style={{ ...display, fontSize: "40px", color: "white", fontWeight: 300, lineHeight: 1.1 }}>
                  {tr ? selected.titleTr : selected.titleEn}
                </h2>
              </div>
            </div>

            {/* Panel içerik */}
            <div style={{ padding: "36px 40px 40px" }}>
              <p style={{ ...font, fontSize: "15px", color: "#4A4A3A", lineHeight: 1.85, marginBottom: "36px" }}>
                {tr ? selected.descTr : selected.descEn}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>

                {/* Teknikler */}
                <div style={{ backgroundColor: "#F8F6F2", borderRadius: "16px", padding: "24px" }}>
                  <p style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#4A7C59", marginBottom: "16px" }}>
                    {tr ? "Kullanılan Teknikler" : "Techniques Used"}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {(tr ? selected.methodsTr : selected.methodsEn).map((m, i) => (
                      <div key={m} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "24px", height: "24px", borderRadius: "8px", backgroundColor: "#1E3325", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <span style={{ ...font, fontSize: "10px", color: "#97BE97", fontWeight: 600 }}>{String(i + 1).padStart(2, "0")}</span>
                        </div>
                        <span style={{ ...font, fontSize: "13px", color: "#2D2D1E" }}>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Endikasyonlar */}
                <div style={{ backgroundColor: "#F8F6F2", borderRadius: "16px", padding: "24px" }}>
                  <p style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#4A7C59", marginBottom: "16px" }}>
                    {tr ? "Endikasyonlar" : "Indications"}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {(tr ? selected.conditionsTr : selected.conditionsEn).map((c) => (
                      <div key={c} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#4A7C59", flexShrink: 0 }} />
                        <span style={{ ...font, fontSize: "13px", color: "#2D2D1E" }}>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}