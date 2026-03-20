// ─── Lead Submission Utility ───────────────────────────────────────────────────
// Handles two destinations:
//   1. Netlify Forms   → Armazena no painel Netlify + envia e-mail de notificação
//   2. CallMeBot       → Envia alerta no WhatsApp do dono (opcional, requer setup)
//
// SETUP NECESSÁRIO:
//   → Netlify Forms: Já funciona após o deploy (formulário detectado automaticamente).
//     Configure notificações em: Netlify > Site > Forms > quiz-leads > Notifications
//     E-mail padrão: adicione jpvivaldi@gmail.com como destinatário.
//
//   → CallMeBot WhatsApp (OPCIONAL mas recomendado para alertas instantâneos):
//     1. Salve o contato "+34 644 59 21 11" como "CallMeBot" no celular
//     2. Mande "I allow callmebot to send me messages" via WhatsApp para esse número
//     3. Em alguns segundos você recebe sua API key de volta
//     4. Cole a key na constante CALLMEBOT_API_KEY abaixo
//     Ref: https://www.callmebot.com/blog/free-api-whatsapp-messages/

import type { Profile, LeadData } from "./quizData";
import { questions, PROFILES } from "./quizData";

// ─── Configuração ─────────────────────────────────────────────────────────────

/** Número que RECEBE os alertas de WhatsApp (seu número, com DDI) */
const CALLMEBOT_OWNER_PHONE = "5527997983112";

/**
 * Chave da API CallMeBot.
 * Deixe vazio ("") para desativar alertas de WhatsApp — o Netlify Forms continua
 * funcionando normalmente e você recebe os leads por e-mail.
 */
const CALLMEBOT_API_KEY = ""; // ← Cole sua chave aqui após o setup

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** URL-encodes um objeto para application/x-www-form-urlencoded */
function encodeFormData(data: Record<string, string>): string {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");
}

/** Converte o índice da resposta no texto legível da opção */
function getAnswerLabel(questionId: string, answerIndex: number | undefined): string {
  if (answerIndex === undefined) return "—";
  const qIndex = parseInt(questionId.replace("q", "")) - 1;
  return questions[qIndex]?.options[answerIndex] ?? `opção ${answerIndex + 1}`;
}

/** Monta um resumo legível de todas as respostas */
function buildAnswersSummary(answers: Record<string, number>): string {
  return questions
    .map((q, i) => {
      const key = `q${i + 1}`;
      return `[${key.toUpperCase()}] ${q.text}\n→ ${getAnswerLabel(key, answers[key])}`;
    })
    .join("\n\n");
}

// ─── Netlify Forms ────────────────────────────────────────────────────────────

/**
 * Submete os dados do lead ao Netlify Forms.
 * O Netlify salva o registro e pode disparar e-mail de notificação.
 * Nunca vai quebrar o quiz mesmo se falhar (silencioso).
 */
export async function submitToNetlify(
  lead: LeadData,
  answers: Record<string, number>,
  profile: Profile | null
): Promise<void> {
  if (!lead.email && !lead.phone) return; // skip anônimos (clicaram em "prefiro não")

  try {
    const profileLabel = profile
      ? `${profile} — ${PROFILES[profile].title}`
      : "Não calculado";

    const body = encodeFormData({
      "form-name": "quiz-leads",
      nome: lead.name || "(não informado)",
      email: lead.email,
      whatsapp: lead.phone,
      perfil: profileLabel,
      respostas: buildAnswersSummary(answers),
      data_hora: new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      }),
    });

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
  } catch {
    // Falha silenciosa — não interrompe o quiz
  }
}

// ─── CallMeBot WhatsApp Alert ─────────────────────────────────────────────────

/**
 * Envia uma mensagem de alerta no WhatsApp do dono quando um lead chega.
 * Requer CALLMEBOT_API_KEY preenchida.
 */
export async function sendWhatsAppAlert(
  lead: LeadData,
  profile: Profile | null
): Promise<void> {
  if (!CALLMEBOT_API_KEY || !lead.email) return;

  try {
    const profileLabel = profile
      ? `${PROFILES[profile].title} (${profile})`
      : "—";

    const text = [
      "🎯 NOVO LEAD — Lumen Pages",
      "",
      `Nome: ${lead.name || "—"}`,
      `E-mail: ${lead.email}`,
      `WhatsApp: ${lead.phone}`,
      `Perfil: ${profileLabel}`,
      "",
      `Hora: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}`,
    ].join("\n");

    const url =
      `https://api.callmebot.com/whatsapp.php` +
      `?phone=${CALLMEBOT_OWNER_PHONE}` +
      `&text=${encodeURIComponent(text)}` +
      `&apikey=${CALLMEBOT_API_KEY}`;

    await fetch(url);
  } catch {
    // Falha silenciosa
  }
}
