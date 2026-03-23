// ─── Quiz Content Data ────────────────────────────────────────────────────────
// All quiz questions, options, insight texts, profile results and copy.
// Edit placeholder values marked with [PLACEHOLDER] before going live.

export const WA_NUMBER = "5527997983112";
export const WA_BASE = `https://wa.me/${WA_NUMBER}`;

export function makeWALink(profile: Profile | null): string {
  const messages: Record<Profile, string> = {
    A: "Olá! Fiz o diagnóstico da Lumen Pages e descobri que minha presença digital está invisível. Quero entender como uma landing page pode mudar isso.",
    B: "Olá! Fiz o diagnóstico da Lumen Pages e descobri que tenho potencial represado — estou com presença mas convertendo pouco. Quero conversar.",
    C: "Olá! Fiz o diagnóstico da Lumen Pages e descobri que já investi em anúncios mas sem a estrutura certa. Quero resolver isso com uma landing page.",
  };
  const msg = profile ? messages[profile] : "Olá! Fiz o diagnóstico da Lumen Pages e quero conversar sobre uma landing page para meu negócio.";
  return `${WA_BASE}?text=${encodeURIComponent(msg)}`;
}

// ─── Questions ────────────────────────────────────────────────────────────────
export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
}

export const questions: QuizQuestion[] = [
  {
    id: "q1",
    text: "Como as pessoas te encontram hoje?",
    options: [
      "Quase sempre por indicação de outros clientes",
      "Pelo meu perfil no Instagram ou outra rede social",
      "Pelo Google, quando pesquisam meu serviço",
      "Não sei ao certo como me encontram",
    ],
  },
  {
    id: "q2",
    text: "Você tem uma página exclusiva para receber clientes novos?",
    options: [
      "Sim — tenho um site ou landing page profissional",
      "Só tenho meu perfil no Instagram",
      "Tenho um link na bio (Linktree ou similar)",
      "Não tenho nada além do boca a boca",
    ],
  },
  {
    id: "q3",
    text: "Quando alguém pede para ver mais sobre o seu trabalho, o que você envia?",
    options: [
      "Mando o link do meu Instagram",
      "Mando fotos no WhatsApp mesmo",
      "Tenho um site, mas não gosto de mandar — está desatualizado",
      "Tenho uma página profissional e mando com confiança",
    ],
  },
  {
    id: "q4",
    text: "Em média, quantos contatos novos chegam pelo digital por semana?",
    options: [
      "Zero — nada vem do digital",
      "1 a 3 contatos por semana",
      "4 a 10 contatos por semana",
      "Mais de 10 — o digital funciona bem",
    ],
  },
  {
    id: "q5",
    text: "Você já investiu em anúncios no Google ou Instagram?",
    options: [
      "Sim, invisto regularmente e funciona bem",
      "Já tentei, mas gastei dinheiro e não vi resultado",
      "Quero tentar, mas tenho medo de desperdiçar dinheiro",
      "Nunca tentei — não sei por onde começar",
    ],
  },
  {
    id: "q6",
    text: "Qual é o ticket médio de serviço do seu negócio?",
    options: [
      "Até R$ 300",
      "Entre R$ 300 e R$ 1.000",
      "Entre R$ 1.000 e R$ 3.000",
      "Acima de R$ 3.000",
    ],
  },
  {
    id: "q7",
    text: "Hoje, qual o percentual de clientes novos que vêm por indicação?",
    options: [
      "Quase 100% — o digital não me traz nada",
      "Uns 70% a 80% — o digital traz alguma coisa",
      "Uns 50% — está equilibrado",
      "Menos de 30% — o digital já funciona bem",
    ],
  },
  {
    id: "q8",
    text: "Qual é o seu maior objetivo para os próximos 6 meses?",
    options: [
      "Receber mais contatos sem depender só de indicação",
      "Investir em anúncios e ter retorno real desta vez",
      "Aparecer no Google quando alguém pesquisar meu serviço",
      "Ter uma presença profissional que me diferencie da concorrência",
    ],
  },
  {
    id: "q9",
    text: "O que mais te impede de avançar nessa direção hoje?",
    options: [
      "Não sei por onde começar ou o que preciso exatamente",
      "Já tentei antes e não deu resultado — perdi a confiança",
      "Tenho medo de investir e não ter retorno",
      "Falta de tempo para me dedicar a isso",
    ],
  },
  {
    id: "q10",
    text: "Se você pudesse ter uma coisa funcionando a partir desta semana, o que seria?",
    options: [
      "Uma página que recebe contatos automaticamente, mesmo quando estou trabalhando",
      "Parar de perder clientes para concorrentes com presença digital melhor",
      "Um canal de clientes que não depende de algoritmo nem de indicação",
      "Ter clareza de que meu investimento em marketing vai ter retorno",
    ],
  },
];

// ─── Lead Data ─────────────────────────────────────────────────────────────────
export interface LeadData {
  name: string;
  email: string;
  phone: string;
}

// ─── Quiz Step Map ─────────────────────────────────────────────────────────────
// Defines the order of all 23 steps (10 questions + 12 cards + 1 lead capture)
export type StepType =
  | { kind: "welcome" }
  | { kind: "question"; index: number }   // index into questions[]
  | { kind: "insight"; id: 1|2|3|4|5|6 }
  | { kind: "loading" }
  | { kind: "leadcapture" }              // Gate before results — collects name/email/phone
  | { kind: "result" }
  | { kind: "authority" }
  | { kind: "social" }
  | { kind: "cta" };

export const STEPS: StepType[] = [
  { kind: "welcome" },           // 0  — Card 1
  { kind: "question", index: 0 }, // 1  — Q1
  { kind: "insight", id: 1 },    // 2  — Card 2 (insight after Q1)
  { kind: "question", index: 1 }, // 3  — Q2
  { kind: "insight", id: 2 },    // 4  — Card 3 (insight after Q2)
  { kind: "question", index: 2 }, // 5  — Q3
  { kind: "question", index: 3 }, // 6  — Q4
  { kind: "insight", id: 3 },    // 7  — Card 4 (calculator, after Q4)
  { kind: "question", index: 4 }, // 8  — Q5
  { kind: "insight", id: 4 },    // 9  — Card 5 (funnel, after Q5)
  { kind: "question", index: 5 }, // 10 — Q6
  { kind: "question", index: 6 }, // 11 — Q7
  { kind: "insight", id: 5 },    // 12 — Card 6 (referral, after Q7)
  { kind: "question", index: 7 }, // 13 — Q8
  { kind: "question", index: 8 }, // 14 — Q9
  { kind: "insight", id: 6 },    // 15 — Card 7 (ROI, after Q9)
  { kind: "question", index: 9 }, // 16 — Q10
  { kind: "loading" },           // 17 — Card 8 (loading / analysis)
  { kind: "leadcapture" },       // 18 — Lead gate (name + email + phone)
  { kind: "result" },            // 19 — Card 9 (profile result)
  { kind: "authority" },         // 20 — Card 10
  { kind: "social" },            // 21 — Card 11
  { kind: "cta" },               // 22 — Card 12
];

// ─── Profile ──────────────────────────────────────────────────────────────────
export type Profile = "A" | "B" | "C";

export interface ProfileData {
  id: Profile;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  urgency: string;
  color: string;
}

export const PROFILES: Record<Profile, ProfileData> = {
  A: {
    id: "A",
    badge: "DIAGNÓSTICO",
    title: "Presença Invisível",
    subtitle: "Você tem um negócio real — mas o digital ainda não sabe que você existe.",
    description:
      "Suas respostas revelam um negócio construído sobre qualidade e reputação — o que é genuinamente raro. O problema é que essa autoridade está presa dentro de um círculo fechado de indicações. Quando alguém de fora desse círculo pesquisa pelo serviço que você oferece, encontra outro nome. Provavelmente um concorrente com qualidade inferior à sua, mas com uma página que transmite mais confiança em 8 segundos.",
    urgency:
      "Cada dia sem uma landing page é um cliente que encontrou o concorrente antes de te encontrar.",
    color: "#F59E0B",
  },
  B: {
    id: "B",
    badge: "DIAGNÓSTICO",
    title: "Potencial Represado",
    subtitle: "Você tem visibilidade — mas está convertendo muito abaixo do seu potencial.",
    description:
      "Você existe digitalmente. O problema é que sua estrutura atual não foi construída para vender — ela foi construída para parecer presente. Há uma diferença enorme entre os dois, e essa diferença custa leads todos os dias. Visitantes chegam, olham por alguns segundos e vão embora sem entrar em contato — não porque seu serviço não é bom, mas porque a página não os convenceu a agir.",
    urgency:
      "Com a estrutura certa, você poderia converter 3× mais dos visitantes que já chegam até você hoje.",
    color: "#3B82F6",
  },
  C: {
    id: "C",
    badge: "DIAGNÓSTICO",
    title: "Investimento Sem Retorno",
    subtitle: "O problema nunca foi o anúncio — foi para onde ele levava.",
    description:
      "Você investiu em tráfego mas não tinha a estrutura para convertê-lo. É como abastecer um carro com o tanque furado: o combustível chega, mas não fica. A boa notícia é que o problema tem solução direta. Quando resolvido, cada real investido em anúncio passa a ter retorno calculável — e o que parecia um desperdício se transforma em previsibilidade.",
    urgency:
      "Sua próxima campanha de anúncios pode ter ROI real — se tiver a estrutura certa para receber o tráfego.",
    color: "#10B981",
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
export function calculateProfile(answers: Record<string, number>): Profile {
  const q5 = answers["q5"]; // 0=funciona, 1=não funcionou, 2=quero tentar, 3=nunca
  const q7 = answers["q7"]; // 0=100% indicação, 1=70-80%, 2=50%, 3=<30%
  const q2 = answers["q2"]; // 0=tem LP, 1=insta, 2=linktree, 3=nada

  if (q5 === 1) return "C"; // Tentou anúncio e não funcionou
  if ((q7 === 0 || q7 === 1) && (q2 === 1 || q2 === 2 || q2 === 3)) return "A"; // Invisível
  return "B"; // Potencial represado
}

export function getTicketRange(q6: number): { mid: number; label: string } {
  const ranges = [
    { mid: 200, label: "R$ 200" },
    { mid: 600, label: "R$ 600" },
    { mid: 2000, label: "R$ 2.000" },
    { mid: 5000, label: "R$ 5.000" },
  ];
  return ranges[q6] ?? ranges[1];
}

export function getWeeklyContacts(q4: number): number {
  return [0, 2, 7, 15][q4] ?? 2;
}

// ─── Portfolio items ──────────────────────────────────────────────────────────
export interface PortfolioItem {
  title: string;
  segment: string;
  url: string;
  image: string;
  isReal: boolean; // true = real client, false = portfolio piece
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Sorrir Studio",
    segment: "Odontologia",
    url: "sorrirstudio.netlify.app",
    image: "/src/assets/portfolio-sorrir-studio.png",
    isReal: false, // [PLACEHOLDER] — mude para true quando confirmar qual é o cliente real
  },
  {
    title: "Alves Associados",
    segment: "Advocacia",
    url: "alvesassociados.netlify.app",
    image: "/src/assets/portfolio-alves-associados.png",
    isReal: false, // [PLACEHOLDER] — idem
  },
  {
    title: "Studio Lumen Arquitetura",
    segment: "Arquitetura",
    url: "studiolumenarquitetura.netlify.app",
    image: "/src/assets/portfolio-studio-lumen.png",
    isReal: false,
  },
  {
    title: "Vertex Contabilidade",
    segment: "Contabilidade",
    url: "vertexcontabilidade.netlify.app",
    image: "",
    isReal: true,
  },
  {
    title: "Autobahn Estética Auto",
    segment: "Estética Automotiva",
    url: "autobahnesteticaauto.netlify.app",
    image: "",
    isReal: true,
  },
];
