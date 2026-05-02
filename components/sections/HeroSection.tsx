"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

const display = { fontFamily: "'Cormorant Garamond', serif" };
const font = { fontFamily: "'Jost', sans-serif" };

export default function HeroSection() {
  const locale = useLocale();
  const tr = locale === "tr";
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0, h = 0;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Partiküller
    const COUNT = 80;
    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      r: number; alpha: number;
      alphaDir: number;
      color: string;
      shape: "circle" | "ring" | "cross" | "line";
    };

    const colors = [
      "rgba(151,190,151,",
      "rgba(74,124,89,",
      "rgba(97,158,107,",
      "rgba(200,230,200,",
      "rgba(255,255,255,",
    ];

    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * (w || 1200),
      y: Math.random() * (h || 800) * 0.75,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.3 - 0.1,
      r: Math.random() * 3 + 1,
      alpha: Math.random() * 0.3 + 0.05,
      alphaDir: (Math.random() - 0.5) * 0.003,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: (["circle", "ring", "cross", "line"] as const)[Math.floor(Math.random() * 4)],
    }));

    // Bağlantı çizgileri için yakın partikülleri bul
    const MAX_DIST = 120;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Bağlantı çizgileri
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const opacity = (1 - dist / MAX_DIST) * 0.08;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(151,190,151,${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Partiküller
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaDir;
        if (p.alpha <= 0.02 || p.alpha >= 0.4) p.alphaDir *= -1;

        // Sınır kontrolü
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h * 0.75 + 20;
        if (p.y > h * 0.75 + 20) p.y = -20;

        ctx.save();
        ctx.translate(p.x, p.y);

        if (p.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha})`;
          ctx.fill();

        } else if (p.shape === "ring") {
          ctx.beginPath();
          ctx.arc(0, 0, p.r * 2.5, 0, Math.PI * 2);
          ctx.strokeStyle = `${p.color}${p.alpha * 0.7})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();

        } else if (p.shape === "cross") {
          ctx.strokeStyle = `${p.color}${p.alpha * 0.8})`;
          ctx.lineWidth = 0.8;
          const s = p.r * 2;
          ctx.beginPath();
          ctx.moveTo(-s, 0); ctx.lineTo(s, 0);
          ctx.moveTo(0, -s); ctx.lineTo(0, s);
          ctx.stroke();

        } else {
          ctx.strokeStyle = `${p.color}${p.alpha * 0.6})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(-p.r * 3, 0);
          ctx.lineTo(p.r * 3, 0);
          ctx.stroke();
        }

        ctx.restore();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes hero-up-1 { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes hero-up-2 { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes hero-up-3 { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes hero-up-4 { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes hero-up-5 { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }

        .h1 { animation: hero-up-1 0.9s cubic-bezier(.16,1,.3,1) 0.1s both; }
        .h2 { animation: hero-up-2 0.9s cubic-bezier(.16,1,.3,1) 0.3s both; }
        .h3 { animation: hero-up-3 0.9s cubic-bezier(.16,1,.3,1) 0.5s both; }
        .h4 { animation: hero-up-4 0.9s cubic-bezier(.16,1,.3,1) 0.7s both; }
        .h5 { animation: hero-up-5 0.9s cubic-bezier(.16,1,.3,1) 0.9s both; }

        @keyframes badge-glow {
          0%,100% { box-shadow: 0 0 0px rgba(151,190,151,0); }
          50%      { box-shadow: 0 0 16px rgba(151,190,151,0.2); }
        }
        .badge-anim { animation: badge-glow 3s ease-in-out infinite; }

        @keyframes scroll-line {
          0%   { transform: scaleY(0); transform-origin: top; opacity:1; }
          50%  { transform: scaleY(1); transform-origin: top; opacity:1; }
          100% { transform: scaleY(1); transform-origin: top; opacity:0; }
        }
        .scroll-line { animation: scroll-line 2s ease-in-out infinite; }

        @keyframes ring-1 { 0%,100%{transform:scale(1);opacity:0.06} 50%{transform:scale(1.06);opacity:0.14} }
        @keyframes ring-2 { 0%,100%{transform:scale(1);opacity:0.04} 50%{transform:scale(1.04);opacity:0.1}  }
        @keyframes ring-3 { 0%,100%{transform:scale(1);opacity:0.03} 50%{transform:scale(1.03);opacity:0.08} }
        .ring-1 { animation: ring-1 6s ease-in-out infinite; }
        .ring-2 { animation: ring-2 8s ease-in-out 1s infinite; }
        .ring-3 { animation: ring-3 10s ease-in-out 2s infinite; }

        @keyframes orb-drift {
          0%,100% { transform:translate(0,0) scale(1); }
          33%     { transform:translate(30px,-20px) scale(1.05); }
          66%     { transform:translate(-20px,15px) scale(0.97); }
        }
        .orb-1 { animation: orb-drift 14s ease-in-out infinite; }
        .orb-2 { animation: orb-drift 18s ease-in-out 3s infinite reverse; }
        .orb-3 { animation: orb-drift 12s ease-in-out 6s infinite; }

        @keyframes text-shimmer {
          0%,100% { opacity:1; }
          50%     { opacity:0.85; }
        }
        .accent-text { animation: text-shimmer 4s ease-in-out infinite; }

        .cta-primary:hover { background-color: #3A6147 !important; transform: translateY(-2px); }
        .cta-secondary:hover { background-color: rgba(255,255,255,0.08) !important; transform: translateY(-2px); }
        .cta-primary, .cta-secondary { transition: all 0.25s ease !important; }
      `}</style>

      <section style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}>

        {/* Arka plan gradient */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(170deg, #080F0A 0%, #0F1F14 30%, #1A2E1E 55%, #2D4D38 72%, #4A6640 82%, #C8DDB8 92%, #F9F4EC 100%)",
          zIndex: 0,
        }} />

        {/* Orb'lar — büyük yumuşak ışık lekeleri */}
        <div className="orb-1" style={{
          position: "absolute", top: "-10%", left: "5%",
          width: "500px", height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,124,89,0.18) 0%, transparent 70%)",
          zIndex: 1, pointerEvents: "none",
        }} />
        <div className="orb-2" style={{
          position: "absolute", top: "5%", right: "-5%",
          width: "600px", height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45,77,56,0.22) 0%, transparent 70%)",
          zIndex: 1, pointerEvents: "none",
        }} />
        <div className="orb-3" style={{
          position: "absolute", top: "30%", left: "40%",
          width: "400px", height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(97,158,107,0.1) 0%, transparent 70%)",
          zIndex: 1, pointerEvents: "none",
        }} />

        {/* Nabız halkaları */}
        {[
          { top: "12%", left: "8%", size: 320, cls: "ring-1" },
          { top: "6%", left: "12%", size: 220, cls: "ring-2" },
          { top: "18%", left: "4%", size: 440, cls: "ring-3" },
        ].map((r, i) => (
          <div key={i} className={r.cls} style={{
            position: "absolute", top: r.top, left: r.left,
            width: `${r.size}px`, height: `${r.size}px`,
            borderRadius: "50%",
            border: "1px solid rgba(151,190,151,0.18)",
            zIndex: 2, pointerEvents: "none",
          }} />
        ))}

        {/* Canvas partiküller */}
        <canvas ref={canvasRef} style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          zIndex: 3, pointerEvents: "none",
        }} />

        {/* ── İÇERİK ── */}
        <div style={{
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", zIndex: 10,
          padding: "120px 24px 100px",
        }}>
          <div style={{ maxWidth: "900px", width: "100%", textAlign: "center" }}>

            {/* Badge */}
            <div className="h1 badge-anim" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              border: "1px solid rgba(151,190,151,0.25)",
              borderRadius: "999px", padding: "8px 20px", marginBottom: "40px",
              backgroundColor: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(8px)",
            }}>
              <span style={{
                width: "6px", height: "6px", borderRadius: "50%",
                backgroundColor: "#97BE97",
                boxShadow: "0 0 8px rgba(151,190,151,0.8)",
              }} />
              <span style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.22em", color: "#97BE97" }}>
                {tr ? "Fizyoterapi & Rehabilitasyon" : "Physiotherapy & Rehabilitation"}
              </span>
            </div>

            {/* Başlık satır 1 */}
            <div className="h2" style={{
              ...display, fontSize: "clamp(56px, 9vw, 108px)",
              color: "rgba(255,255,255,0.92)", fontWeight: 300,
              lineHeight: 0.95, display: "block", marginBottom: "8px",
            }}>
              {tr ? "Hareketin" : "The Healing"}
            </div>

            {/* Başlık satır 2 — vurgulu */}
            <div className="h3 accent-text" style={{
              ...display, fontSize: "clamp(56px, 9vw, 108px)",
              fontWeight: 300, lineHeight: 1.0, display: "block",
              marginBottom: "32px",
            }}>
              <em style={{
                fontStyle: "italic", color: "#97BE97",
                textShadow: "0 0 40px rgba(151,190,151,0.3)",
              }}>
                {tr ? "şifa" : "power"}
              </em>
              {" "}
              <span style={{ color: "rgba(255,255,255,0.92)" }}>
                {tr ? "gücü" : "of movement"}
              </span>
            </div>

            {/* Ayraç */}
            <div className="h3" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
              <div style={{ width: "32px", height: "1px", backgroundColor: "rgba(151,190,151,0.35)" }} />
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "rgba(151,190,151,0.5)" }} />
              <div style={{ width: "32px", height: "1px", backgroundColor: "rgba(151,190,151,0.35)" }} />
            </div>

            {/* Alt yazı */}
            <p className="h4" style={{
              ...font, fontSize: "16px", color: "rgba(255,255,255,0.45)",
              lineHeight: 1.85, maxWidth: "500px", margin: "0 auto 48px",
              letterSpacing: "0.02em",
            }}>
              {tr
                ? "Fizyoterapi hastalıkları ve tedavi yöntemleri hakkında bilimsel, güvenilir ve kapsamlı bilgiye ulaşın."
                : "Access scientific, reliable and comprehensive information about physiotherapy conditions and treatment methods."}
            </p>

            {/* CTA butonları */}
            <div className="h5" style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
              <Link
                href={`/${locale}/diseases`}
                className="cta-primary"
                style={{
                  ...font,
                  display: "inline-flex", alignItems: "center", gap: "9px",
                  backgroundColor: "#4A7C59", color: "white",
                  textDecoration: "none", padding: "15px 34px",
                  borderRadius: "8px", fontSize: "14px",
                  letterSpacing: "0.05em", fontWeight: 500,
                  boxShadow: "0 4px 24px rgba(74,124,89,0.3)",
                }}
              >
                {tr ? "Hastalıkları Keşfet" : "Explore Conditions"}
                <ArrowRight size={16} />
              </Link>

              <Link
                href={`/${locale}/treatments`}
                className="cta-secondary"
                style={{
                  ...font,
                  display: "inline-flex", alignItems: "center", gap: "9px",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none", padding: "15px 34px",
                  borderRadius: "8px", fontSize: "14px",
                  letterSpacing: "0.05em",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {tr ? "Tedavi Yöntemleri" : "Treatment Methods"}
              </Link>
            </div>

          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: "absolute", bottom: "32px", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          zIndex: 10,
        }}>
          <span style={{ ...font, fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.3em", color: "rgba(255,255,255,0.2)" }}>
            scroll
          </span>
          <div style={{ width: "1px", height: "48px", overflow: "hidden" }}>
            <div className="scroll-line" style={{ width: "1px", height: "100%", backgroundColor: "rgba(151,190,151,0.5)" }} />
          </div>
        </div>

      </section>
    </>
  );
}