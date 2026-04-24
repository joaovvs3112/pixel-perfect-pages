import { useState } from "react";
import type { LeadData } from "../quizData";

interface Props {
  onNext: (data: LeadData) => void;
  animDir: string;
}

// ─── Shared input/label styles ─────────────────────────────────────────────────
const inputBase: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(245,158,11,0.25)",
  borderRadius: 10,
  padding: "14px 16px",
  color: "#fff",
  fontSize: "1rem",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

const inputError: React.CSSProperties = {
  ...inputBase,
  borderColor: "#ef4444",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  color: "rgba(255,255,255,0.55)",
  fontSize: "0.78rem",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  marginBottom: 7,
  fontWeight: 600,
};

const errorMsg: React.CSSProperties = {
  color: "#ef4444",
  fontSize: "0.78rem",
  marginTop: 5,
};

// ─── Component ─────────────────────────────────────────────────────────────────
export function LeadCaptureCard({ onNext, animDir }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const clearError = (field: string) =>
    setErrors((prev) => ({ ...prev, [field]: "" }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Como podemos te chamar?";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email))
      e.email = "Digite um e-mail válido";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10)
      e.phone = "Digite um número de WhatsApp válido";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    onNext({ name: name.trim(), email: email.trim(), phone: phone.trim() });
  };

  const handleSkip = () => {
    // Skip without data — quiz still works but no lead is captured
    onNext({ name: "", email: "", phone: "" });
  };

  return (
    <div
      className={animDir}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(245,158,11,0.2)",
        borderRadius: 20,
        padding: "clamp(28px, 5vw, 44px) clamp(20px, 5vw, 40px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative amber glow */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 240,
          height: 240,
          background:
            "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* "QUASE LÁ" badge */}
      <div style={{ marginBottom: 18 }}>
        <span className="insight-badge">QUASE LÁ</span>
      </div>

      {/* Headline */}
      <h2
        style={{
          color: "#fff",
          fontSize: "clamp(1.4rem, 3.2vw, 2rem)",
          fontWeight: 700,
          lineHeight: 1.2,
          marginBottom: 12,
        }}
      >
        Seu diagnóstico está pronto.{" "}
        <span style={{ color: "#F59E0B" }}>Onde posso te enviar?</span>
      </h2>

      <p
        style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "0.95rem",
          marginBottom: 32,
          lineHeight: 1.65,
        }}
      >
        Vou te enviar o diagnóstico completo e as recomendações personalizadas
        para o seu negócio, direto no WhatsApp e no e-mail. Sem spam, sem
        vendas chatas. Só o que é relevante para o seu caso.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div style={{ marginBottom: 18 }}>
          <label style={labelStyle}>Seu nome</label>
          <input
            type="text"
            placeholder="João Silva"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              clearError("name");
            }}
            style={errors.name ? inputError : inputBase}
            autoComplete="name"
          />
          {errors.name && <p style={errorMsg}>{errors.name}</p>}
        </div>

        {/* Email */}
        <div style={{ marginBottom: 18 }}>
          <label style={labelStyle}>Seu melhor e-mail</label>
          <input
            type="email"
            placeholder="joao@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearError("email");
            }}
            style={errors.email ? inputError : inputBase}
            autoComplete="email"
          />
          {errors.email && <p style={errorMsg}>{errors.email}</p>}
        </div>

        {/* Phone */}
        <div style={{ marginBottom: 28 }}>
          <label style={labelStyle}>Seu WhatsApp</label>
          <input
            type="tel"
            placeholder="(27) 99999-9999"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              clearError("phone");
            }}
            style={errors.phone ? inputError : inputBase}
            autoComplete="tel"
          />
          {errors.phone && <p style={errorMsg}>{errors.phone}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="quiz-cta-btn"
          disabled={submitting}
          style={{
            width: "100%",
            fontSize: "1rem",
            padding: "16px 24px",
            opacity: submitting ? 0.7 : 1,
            cursor: submitting ? "not-allowed" : "pointer",
          }}
        >
          {submitting ? "Preparando seu diagnóstico..." : "Ver meu diagnóstico completo →"}
        </button>
      </form>

      {/* Skip link */}
      <div style={{ textAlign: "center", marginTop: 16 }}>
        <button
          onClick={handleSkip}
          style={{
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.28)",
            fontSize: "0.78rem",
            cursor: "pointer",
            textDecoration: "underline",
            padding: 0,
          }}
        >
          Prefiro não receber recomendações personalizadas
        </button>
      </div>

      {/* Trust note */}
      <p
        style={{
          color: "rgba(255,255,255,0.22)",
          fontSize: "0.75rem",
          textAlign: "center",
          marginTop: 10,
          lineHeight: 1.5,
        }}
      >
        Seus dados ficam em segurança. Nunca compartilhados. Zero spam.
      </p>
    </div>
  );
}
