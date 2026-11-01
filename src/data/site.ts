export const site = {
  name: "ZAENISHI",
  fullName: "Jaenar Mohasan Zaki",
  role: "Independent Developer",
  location: "Indonesia",
  tagline: "Growing ideas into digital experiences.",
  intro:
    "I explore technology, build digital products, and turn curious ideas into useful experiences.",
  about:
    "I'm a self-driven developer who enjoys understanding how digital products work and bringing ideas to life. I learn by experimenting, building, testing, and improving — from websites and community tools to interactive experiences.",
  availability: "Open to selected freelance projects",
  email: "zaenishi@gmail.com", // Add your real contact email before publishing.
  socials: [
    { label: "GitHub", href: "https://github.com/zaenishi", handle: "Github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/zaenishi", handle: "LinkedIn" },
    { label: "Instagram", href: "https://instagram.com/zaenishi", handle: "Instagram" },
    { label: "WhatsApp", href: "https://wa.me/6283188229366", handle: "WhatsApp" }
  ],
  services: [
    {
      number: "01",
      title: "Website development",
      description: "Responsive websites and landing pages built around clear content, useful interactions, and a consistent visual system."
    },
    {
      number: "02",
      title: "Frontend implementation",
      description: "Turning interface ideas and design references into accessible, responsive web experiences."
    },
    {
      number: "03",
      title: "Bot & API integration",
      description: "Small automation and integration projects involving messaging platforms, APIs, and JavaScript."
    }
  ],
  skills: [
    { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "Responsive UI"] },
    { group: "Backend & integration", items: ["Node.js", "REST API", "Bot integration"] },
    { group: "Tools & workflow", items: ["Git", "GitHub", "Termux", "Acode"] },
    { group: "Deployment & data", items: ["Vercel", "Firebase", "Supabase"] }
  ],
  journey: [
    {
      year: "2024",
      title: "Curiosity becomes practice",
      description: "Started exploring how websites, interfaces, and digital tools are built."
    },
    {
      year: "2025",
      title: "Learning by building",
      description: "Began creating personal web projects and experimenting with JavaScript, APIs, and bots."
    },
    {
      year: "2026",
      title: "Building independent projects",
      description: "Developing larger personal projects and documenting the process, decisions, and lessons learned."
    }
  ]
} as const;
