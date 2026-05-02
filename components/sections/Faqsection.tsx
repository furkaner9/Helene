"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Plus, Minus } from "lucide-react";

const display = { fontFamily: "'Cormorant Garamond', serif" };
const font = { fontFamily: "'Jost', sans-serif" };

const faqs = [
  {
    qTr: "Fizyoterapiye ne zaman başvurmalıyım?",
    qEn: "When should I seek physiotherapy?",
    aTr: "Hareket kısıtlılığı, kronik veya akut ağrı, ameliyat sonrası iyileşme süreci, spor yaralanmaları, nörolojik bir hastalık tanısı veya günlük yaşam aktivitelerinde zorluk yaşadığınızda fizyoterapiye başvurabilirsiniz. Erken müdahale, iyileşme sürecini önemli ölçüde hızlandırır.",
    aEn: "You can seek physiotherapy when you experience restricted movement, chronic or acute pain, post-surgical recovery, sports injuries, a neurological diagnosis or difficulty with daily living activities. Early intervention significantly accelerates the recovery process.",
  },
  {
    qTr: "Fizyoterapi seanslıkları ne kadar sürer?",
    qEn: "How long do physiotherapy sessions last?",
    aTr: "Standart bir fizyoterapi seansı 45-60 dakika arasında sürer. İlk değerlendirme seansı daha uzun tutulabilir. Tedavi sürecinin toplam uzunluğu ise tanıya, hastanın durumuna ve hedeflere göre birkaç seanstan birkaç aya kadar değişebilir.",
    aEn: "A standard physiotherapy session lasts between 45-60 minutes. The initial assessment session may be longer. The total length of the treatment process can vary from a few sessions to several months depending on the diagnosis, the patient's condition and goals.",
  },
  {
    qTr: "Fizyoterapi ağrılı bir süreç midir?",
    qEn: "Is physiotherapy a painful process?",
    aTr: "Bazı teknikler uygulama sırasında hafif bir rahatsızlık hissi yaratabilir; ancak fizyoterapi genel olarak ağrısız bir süreçtir. Tedavi sonrası hafif kas ağrısı normal kabul edilmekte olup genellikle 24-48 saat içinde geçer. Fizyoterapist, tolere edilebilir sınırlar içinde çalışır.",
    aEn: "Some techniques may create a mild sense of discomfort during application; however physiotherapy is generally a painless process. Mild muscle soreness after treatment is considered normal and usually passes within 24-48 hours. The physiotherapist works within tolerable limits.",
  },
  {
    qTr: "Ameliyat olmadan iyileşmek mümkün mü?",
    qEn: "Is it possible to recover without surgery?",
    aTr: "Pek çok durumda evet. Örneğin, bel fıtığı vakalarının %80'inden fazlası konservatif fizyoterapi tedavisiyle ameliyata gerek kalmadan iyileşmektedir. Rotator manşet yırtıkları, diz kireçlenmesi ve menisküs hasarının birçok vakasında da fizyoterapi, ameliyatla kıyaslanabilir sonuçlar vermektedir.",
    aEn: "In many cases, yes. For example, more than 80% of lumbar disc herniation cases recover without surgery through conservative physiotherapy treatment. In many cases of rotator cuff tears, knee osteoarthritis and meniscus damage, physiotherapy also produces results comparable to surgery.",
  },
  {
    qTr: "Ev egzersizleri ne kadar önemlidir?",
    qEn: "How important are home exercises?",
    aTr: "Son derece önemlidir. Fizyoterapi seansları haftada genellikle 2-3 kez yapılırken, vücudun iyileşme süreci 24 saat devam eder. Ev egzersiz programı, seans dışındaki zamanlarda iyileşmeyi destekler, kas gücünü artırır ve yeniden yaralanma riskini azaltır.",
    aEn: "Extremely important. While physiotherapy sessions are usually held 2-3 times per week, the body's healing process continues 24 hours a day. The home exercise programme supports recovery outside sessions, increases muscle strength and reduces the risk of re-injury.",
  },
  {
    qTr: "Kaç seans gerekir?",
    qEn: "How many sessions are needed?",
    aTr: "Seans sayısı tamamen kişiye ve duruma göre değişir. Akut bir yaralanma için 6-8 seans yeterli olabilirken, kronik bir durum veya ameliyat sonrası rehabilitasyon için 3-6 aylık bir süreç gerekebilir. İlk değerlendirme sonrasında tahmini bir plan oluşturulur.",
    aEn: "The number of sessions varies entirely depending on the individual and condition. For an acute injury 6-8 sessions may be sufficient, while a chronic condition or post-surgical rehabilitation may require a process of 3-6 months. An estimated plan is drawn up after the initial assessment.",
  },
];

export default function FaqSection() {
  const locale = useLocale();
  const tr = locale === "tr";
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ backgroundColor: "#F8F6F2", padding: "100px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px", alignItems: "start" }}>

          {/* Sol — başlık sticky */}
          <div style={{ position: "sticky", top: "120px" }}>
            <span style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#4A7C59", backgroundColor: "#E2EDE2", padding: "6px 16px", borderRadius: "999px", display: "inline-block", marginBottom: "20px" }}>
              {tr ? "Sık Sorulan Sorular" : "FAQ"}
            </span>
            <h2 style={{ ...display, fontSize: "clamp(36px, 5vw, 56px)", color: "#1E3325", fontWeight: 300, lineHeight: 1.1, marginBottom: "20px" }}>
              {tr ? (
                <><em style={{ color: "#4A7C59", fontStyle: "italic" }}>Merak</em> ettiğiniz her şey</>
              ) : (
                <>Everything you <em style={{ color: "#4A7C59", fontStyle: "italic" }}>wondered</em></>
              )}
            </h2>
            <p style={{ ...font, fontSize: "14px", color: "#6A7060", lineHeight: 1.8 }}>
              {tr
                ? "Fizyoterapi hakkında en çok sorulan soruların yanıtları."
                : "Answers to the most frequently asked questions about physiotherapy."}
            </p>
          </div>

          {/* Sağ — SSS listesi */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: isOpen ? "white" : "transparent",
                    borderRadius: "16px",
                    border: `1px solid ${isOpen ? "#C3D9C3" : "#EDE8E0"}`,
                    overflow: "hidden",
                    transition: "all 0.25s ease",
                  }}
                >
                  {/* Soru */}
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "16px",
                      padding: "22px 24px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ ...display, fontSize: "20px", color: "#1E3325", fontWeight: 400, lineHeight: 1.3 }}>
                      {tr ? faq.qTr : faq.qEn}
                    </span>
                    <div style={{
                      width: "32px", height: "32px",
                      borderRadius: "50%",
                      backgroundColor: isOpen ? "#1E3325" : "#F0EBE4",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                      transition: "background-color 0.25s",
                    }}>
                      {isOpen
                        ? <Minus size={14} color="#97BE97" />
                        : <Plus size={14} color="#6A7060" />
                      }
                    </div>
                  </button>

                  {/* Cevap */}
                  {isOpen && (
                    <div style={{ padding: "0 24px 24px" }}>
                      <div style={{ height: "1px", backgroundColor: "#EDE8E0", marginBottom: "20px" }} />
                      <p style={{ ...font, fontSize: "14px", color: "#4A5050", lineHeight: 1.85, margin: 0 }}>
                        {tr ? faq.aTr : faq.aEn}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}