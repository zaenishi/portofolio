export type L = { id: string; en: string };
export type Content = {
  name: string; full: string; role: L; tagline: L; about: L; avail: L; email: string;
  socials: { label: string; href: string }[];
  services: L[];
  skills: { g: string; items: string[] }[];
  journey: { y: string; t: L }[];
  projects: { slug: string; name: string; st: L; year: string; d: L; tech: string[]; demo: string; repo: string }[];
};
export const defaults: Content = {
  name: "ZAENISHI", full: "Jaenar Mohasan Zaki",
  role: { id: "Developer Independen", en: "Independent Developer" },
  tagline: { id: "Menumbuhkan ide menjadi pengalaman digital.", en: "Growing ideas into digital experiences." },
  about: {
    id: "Saya developer otodidak yang suka memahami cara kerja produk digital dan mewujudkan ide. Saya belajar dengan bereksperimen, membangun, menguji, lalu memperbaiki — dari website dan tools komunitas hingga pengalaman interaktif.",
    en: "I'm a self-driven developer who enjoys understanding how digital products work and bringing ideas to life. I learn by experimenting, building, testing, and improving — from websites and community tools to interactive experiences."
  },
  avail: { id: "Terbuka untuk proyek freelance pilihan", en: "Open to selected freelance projects" },
  email: "zaenishi@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/zaenishi" }, { label: "LinkedIn", href: "https://www.linkedin.com/in/zaenishi" },
    { label: "Instagram", href: "https://instagram.com/zaenishi" }, { label: "WhatsApp", href: "https://wa.me/6283188229366" }
  ],
  services: [
    { id: "Pengembangan website", en: "Website development" },
    { id: "Implementasi frontend", en: "Frontend implementation" },
    { id: "Integrasi bot & API", en: "Bot & API integration" }
  ],
  skills: [
    { g: "Frontend", items: ["HTML", "CSS", "JavaScript", "Responsive UI"] },
    { g: "Backend & Integration", items: ["Node.js", "REST API", "Bot"] },
    { g: "Tools", items: ["Git", "GitHub", "Termux", "Acode"] },
    { g: "Deploy & Data", items: ["Vercel", "Firebase", "Supabase"] }
  ],
  journey: [
    { y: "2024", t: { id: "Rasa penasaran jadi praktik", en: "Curiosity becomes practice" } },
    { y: "2025", t: { id: "Belajar sambil membangun", en: "Learning by building" } },
    { y: "2026", t: { id: "Membangun proyek mandiri", en: "Building independent projects" } }
  ],
  projects: [
    { slug: "malam-kelam", name: "Malam Kelam di Desa Terkutuk", st: { id: "Dalam pengembangan", en: "In development" }, year: "2026",
      d: { id: "Game survival horor beratmosfer di sebuah desa terkutuk yang misterius.", en: "An atmospheric horror survival game set in a mysterious, cursed village." },
      tech: ["JavaScript", "HTML Canvas", "Firebase", "Vercel"], demo: "https://desakelam.vercel.app", repo: "https://github.com/zaenishi/desakelam" },
    { slug: "jamur-menfess", name: "Jamur Menfess", st: { id: "Dalam pengembangan", en: "In development" }, year: "2026",
      d: { id: "Pengalaman pesan komunitas yang terhubung dengan otomasi chat.", en: "A community messaging experience connected to chat automation." },
      tech: ["JavaScript", "Node.js", "Baileys", "Telegram"], demo: "https://jamur-menfess.vercel.app", repo: "https://github.com/zaenishi/jamurmenfess" },
    { slug: "mushbot", name: "MushBot", st: { id: "Proyek pribadi", en: "Personal project" }, year: "2025–2026",
      d: { id: "Eksperimen otomasi pesan dan integrasi bot.", en: "Messaging automation experiments and bot integrations." },
      tech: ["JavaScript", "Node.js", "Baileys", "Telegraf"], demo: "", repo: "https://github.com/zaenishi/mushbot" }
  ]
};
