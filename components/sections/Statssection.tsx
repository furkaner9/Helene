"use client";

import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";

const display = { fontFamily: "'Cormorant Garamond', serif" };
const font = { fontFamily: "'Jost', sans-serif" };

const stats = [
  { num: 80,  suffix: "%", labelTr: "Bel ağrısı vakalarının fizyoterapiyle ameliyatsız iyileşme oranı", labelEn: "of lower back pain cases recover without surgery through physiotherapy" },
  { num: 6,   suffix: "×", labelTr: "Erken başlanan rehabilitasyonun iyileşme hızını artırma katsayısı", labelEn: "faster recovery when rehabilitation is started early" },
  { num: 40,  suffix: "%", labelTr: "Düzenli fizyoterapinin kronik ağrıyı azaltma oranı", labelEn: "reduction in chronic pain with regular physiotherapy" },
  { num: 100, suffix: "+", labelTr: "Fizyoterapinin etkinliği kanıtlanmış hastalık ve durum sayısı", labelEn: "conditions with proven physiotherapy effectiveness" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const start = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} style={{ ...display, fontSize: "clamp(56px, 6vw, 80px)", color: "white", fontWeight: 300, lineHeight: 1, display: "flex", alignItems: "baseline", gap: "4px" }}>
      <span>{count}</span>
      <span style={{ fontSize: "0.6em", color: "#97BE97" }}>{suffix}</span>
    </div>
  );
}

export default function StatsSection() {
  const locale = useLocale();
  const tr = locale === "tr";

  return (
    <section style={{
      background: "linear-gradient(135deg, #0F1F14 0%, #1A2E1E 40%, #2D4D38 100%)",
      padding: "100px 24px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Dekoratif arka plan */}
      <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(74,124,89,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(45,77,56,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Başlık */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#97BE97", border: "1px solid rgba(151,190,151,0.25)", padding: "6px 16px", borderRadius: "999px", display: "inline-block", marginBottom: "20px" }}>
            {tr ? "Araştırmalar Ne Diyor?" : "What Does Research Say?"}
          </span>
          <h2 style={{ ...display, fontSize: "clamp(36px, 5vw, 60px)", color: "white", fontWeight: 300, lineHeight: 1.1, margin: 0 }}>
            {tr ? "Fizyoterapinin " : "The "}
            <em style={{ color: "#97BE97", fontStyle: "italic" }}>
              {tr ? "gücü" : "power of physiotherapy"}
            </em>
            {tr ? " rakamlarla" : ""}
          </h2>
        </div>

        {/* İstatistikler grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              padding: "40px 32px",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              textAlign: "center",
            }}>
              <Counter target={stat.num} suffix={stat.suffix} />
              <div style={{ width: "32px", height: "1px", backgroundColor: "rgba(151,190,151,0.3)", margin: "20px auto 16px" }} />
              <p style={{ ...font, fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>
                {tr ? stat.labelTr : stat.labelEn}
              </p>
            </div>
          ))}
        </div>

        {/* Alt not */}
        <p style={{ ...font, fontSize: "11px", color: "rgba(255,255,255,0.2)", textAlign: "center", marginTop: "48px", letterSpacing: "0.05em" }}>
          {tr ? "* Uluslararası fizyoterapi araştırmaları ve meta-analizlere dayanmaktadır." : "* Based on international physiotherapy research and meta-analyses."}
        </p>

      </div>
    </section>
  );
}