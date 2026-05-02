"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";

const display = { fontFamily: "'Cormorant Garamond', serif" };
const font = { fontFamily: "'Jost', sans-serif" };

export default function ContactPage() {
  const locale = useLocale();
  const tr = locale === "tr";

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
    setLoading(false);
    setSent(true);
  };

  const inputStyle = {
    ...font,
    width: "100%",
    padding: "14px 18px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.1)",
    backgroundColor: "rgba(255,255,255,0.06)",
    color: "white",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box" as const,
    backdropFilter: "blur(4px)",
    letterSpacing: "0.02em",
  };

  return (
    <>
      <style>{`
        .contact-input::placeholder { color: rgba(255,255,255,0.25); }
        .contact-input:focus { border-color: rgba(151,190,151,0.5) !important; background-color: rgba(255,255,255,0.09) !important; }
        .contact-input:focus + .input-label,
        .contact-input:not(:placeholder-shown) + .input-label { top: -10px; font-size: 10px; color: #97BE97; }
        .submit-btn:hover { background-color: #3A6147 !important; transform: translateY(-1px); }
        .submit-btn { transition: all 0.25s ease !important; }
        @keyframes success-pop { from { opacity:0; transform:scale(0.9) translateY(10px); } to { opacity:1; transform:scale(1) translateY(0); } }
        .success-anim { animation: success-pop 0.5s cubic-bezier(.16,1,.3,1) both; }
        @keyframes fade-in-up { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .f1 { animation: fade-in-up 0.7s ease 0.1s both; }
        .f2 { animation: fade-in-up 0.7s ease 0.25s both; }
        .f3 { animation: fade-in-up 0.7s ease 0.4s both; }
        .f4 { animation: fade-in-up 0.7s ease 0.55s both; }
      `}</style>

      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #080F0A 0%, #0F1F14 35%, #1A2E1E 65%, #2D4D38 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}>

        {/* Dekoratif arka plan */}
        <div style={{ position: "absolute", top: "-150px", right: "-150px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(74,124,89,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-100px", left: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(45,77,56,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "40%", left: "30%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(97,158,107,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* İçerik */}
        <div style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px 80px",
          position: "relative",
          zIndex: 1,
        }}>
          <div style={{ width: "100%", maxWidth: "960px" }}>

            {/* Başlık */}
            <div className="f1" style={{ textAlign: "center", marginBottom: "56px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                border: "1px solid rgba(151,190,151,0.25)", borderRadius: "999px",
                padding: "7px 18px", marginBottom: "24px",
                backgroundColor: "rgba(255,255,255,0.03)",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#97BE97", boxShadow: "0 0 8px rgba(151,190,151,0.6)" }} />
                <span style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#97BE97" }}>
                  {tr ? "İletişim" : "Contact"}
                </span>
              </div>
              <h1 style={{ ...display, fontSize: "clamp(40px, 6vw, 72px)", color: "white", fontWeight: 300, lineHeight: 1.05, margin: 0 }}>
                {tr ? "Bize " : "Get in "}
                <em style={{ color: "#97BE97", fontStyle: "italic" }}>
                  {tr ? "ulaşın" : "touch"}
                </em>
              </h1>
            </div>

            {/* Ana grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "32px", alignItems: "start" }}>

              {/* Sol — İletişim bilgileri */}
              <div className="f2" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

                {/* Bilgi kartları */}
                {[
                  {
                    icon: Phone,
                    labelTr: "Telefon", labelEn: "Phone",
                    valueTr: "+90 (212) 555 00 00", valueEn: "+90 (212) 555 00 00",
                    href: "tel:+902125550000",
                  },
                  {
                    icon: Mail,
                    labelTr: "E-posta", labelEn: "Email",
                    valueTr: "info@helene.com.tr", valueEn: "info@helene.com.tr",
                    href: "mailto:info@helene.com.tr",
                  },
                  {
                    icon: MapPin,
                    labelTr: "Adres", labelEn: "Address",
                    valueTr: "Moda Cad. No:42\nKadıköy, İstanbul", valueEn: "Moda Ave. No:42\nKadıköy, Istanbul",
                    href: undefined,
                  },
                ].map(({ icon: Icon, labelTr, labelEn, valueTr, valueEn, href }) => (
                  <a
                    key={labelTr}
                    href={href ?? undefined}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: "16px",
                      padding: "22px 24px",
                      borderRadius: "16px",
                      border: "1px solid rgba(255,255,255,0.07)",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      textDecoration: "none",
                      backdropFilter: "blur(8px)",
                      cursor: href ? "pointer" : "default",
                    }}
                  >
                    <div style={{
                      width: "40px", height: "40px", borderRadius: "12px",
                      backgroundColor: "rgba(151,190,151,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon size={18} color="#97BE97" />
                    </div>
                    <div>
                      <p style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)", marginBottom: "6px" }}>
                        {tr ? labelTr : labelEn}
                      </p>
                      <p style={{ ...font, fontSize: "14px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                        {tr ? valueTr : valueEn}
                      </p>
                    </div>
                  </a>
                ))}

                {/* Çalışma saatleri */}
                <div style={{
                  padding: "22px 24px",
                  borderRadius: "16px",
                  border: "1px solid rgba(151,190,151,0.15)",
                  backgroundColor: "rgba(74,124,89,0.08)",
                }}>
                  <p style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#97BE97", marginBottom: "14px" }}>
                    {tr ? "Çalışma Saatleri" : "Working Hours"}
                  </p>
                  {[
                    { dayTr: "Pazartesi – Cuma", dayEn: "Monday – Friday", time: "09:00 – 18:00" },
                    { dayTr: "Cumartesi", dayEn: "Saturday", time: "09:00 – 14:00" },
                    { dayTr: "Pazar", dayEn: "Sunday", time: tr ? "Kapalı" : "Closed" },
                  ].map(({ dayTr, dayEn, time }) => (
                    <div key={dayTr} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "8px" }}>
                      <span style={{ ...font, fontSize: "13px", color: "rgba(255,255,255,0.55)" }}>
                        {tr ? dayTr : dayEn}
                      </span>
                      <span style={{ ...font, fontSize: "13px", color: time === "Kapalı" || time === "Closed" ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sağ — Form */}
              <div className="f3">
                {sent ? (
                  <div className="success-anim" style={{
                    padding: "56px 40px",
                    borderRadius: "20px",
                    border: "1px solid rgba(151,190,151,0.2)",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    textAlign: "center",
                    backdropFilter: "blur(12px)",
                  }}>
                    <CheckCircle2 size={52} color="#97BE97" style={{ margin: "0 auto 24px" }} />
                    <h3 style={{ ...display, fontSize: "34px", color: "white", fontWeight: 300, marginBottom: "12px" }}>
                      {tr ? "Mesajınız alındı!" : "Message received!"}
                    </h3>
                    <p style={{ ...font, fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
                      {tr
                        ? "En kısa sürede size geri dönüş yapılacaktır."
                        : "You will be contacted as soon as possible."}
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    style={{
                      padding: "40px",
                      borderRadius: "20px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      backdropFilter: "blur(12px)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    {/* Ad Soyad + Email */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)" }}>
                          {tr ? "Ad Soyad" : "Full Name"}
                        </label>
                        <input
                          required
                          type="text"
                          className="contact-input"
                          value={form.name}
                          onChange={e => set("name", e.target.value)}
                          placeholder={tr ? "Ada Yılmaz" : "Jane Smith"}
                          style={inputStyle}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)" }}>
                          {tr ? "E-posta" : "Email"}
                        </label>
                        <input
                          required
                          type="email"
                          className="contact-input"
                          value={form.email}
                          onChange={e => set("email", e.target.value)}
                          placeholder="ornek@email.com"
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    {/* Konu */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)" }}>
                        {tr ? "Konu" : "Subject"}
                      </label>
                      <input
                        type="text"
                        className="contact-input"
                        value={form.subject}
                        onChange={e => set("subject", e.target.value)}
                        placeholder={tr ? "Örn: Bel fıtığı hakkında bilgi almak istiyorum" : "E.g. I'd like information about disc herniation"}
                        style={inputStyle}
                      />
                    </div>

                    {/* Mesaj */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ ...font, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)" }}>
                        {tr ? "Mesajınız" : "Your Message"}
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="contact-input"
                        value={form.message}
                        onChange={e => set("message", e.target.value)}
                        placeholder={tr ? "Şikayetinizi veya sorunuzu buraya yazın..." : "Write your complaint or question here..."}
                        style={{ ...inputStyle, resize: "none", lineHeight: 1.7 }}
                      />
                    </div>

                    {/* Gönder */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="submit-btn"
                      style={{
                        ...font,
                        display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                        backgroundColor: "#4A7C59",
                        color: "white",
                        border: "none",
                        padding: "15px 32px",
                        borderRadius: "10px",
                        fontSize: "14px",
                        fontWeight: 500,
                        letterSpacing: "0.05em",
                        cursor: loading ? "not-allowed" : "pointer",
                        opacity: loading ? 0.7 : 1,
                        marginTop: "4px",
                        boxShadow: "0 4px 20px rgba(74,124,89,0.3)",
                      }}
                    >
                      {loading
                        ? <><Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} /> {tr ? "Gönderiliyor..." : "Sending..."}</>
                        : <><Send size={16} /> {tr ? "Mesaj Gönder" : "Send Message"}</>
                      }
                    </button>

                    <p style={{ ...font, fontSize: "11px", color: "rgba(255,255,255,0.2)", textAlign: "center", lineHeight: 1.6 }}>
                      {tr
                        ? "Bilgileriniz gizli tutulur ve üçüncü şahıslarla paylaşılmaz."
                        : "Your information is kept confidential and not shared with third parties."}
                    </p>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </>
  );
}