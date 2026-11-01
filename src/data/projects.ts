export type ProjectStatus = "In Development" | "Concept" | "Personal Project";

export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  status: ProjectStatus;
  year: string;
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  contribution: string[];
  technologies: string[];
  highlights: string[];
  demoUrl: string;
  repoUrl: string;
  visual: "horror" | "community" | "commerce" | "bot";
};

export const projects: Project[] = [
  {
    slug: "malam-kelam",
    number: "01",
    name: "Malam Kelam di Desa Terkutuk",
    category: "Game development · Interactive experience",
    status: "In Development",
    year: "2026",
    shortDescription: "An atmospheric horror survival game set in a mysterious, cursed village.",
    overview: "A personal game development project focused on an atmospheric survival experience, exploration, progression, and interactive systems.",
    problem: "The challenge is to bring multiple game systems together into an experience that feels coherent, understandable, and engaging across devices.",
    solution: "Develop the experience iteratively, keeping gameplay systems, interface, progression, and player feedback connected.",
    contribution: ["Project concept and direction", "Frontend and game interface work", "Gameplay system development and testing", "Iteration based on observed bugs and player experience"],
    technologies: ["JavaScript", "HTML Canvas", "CSS", "Firebase", "Vercel"],
    highlights: ["Exploration-focused game world", "Progression and player interface", "Ongoing gameplay and stability improvements"],
    demoUrl: "https://desakelam.vercel.app",
    repoUrl: "https://github.com/zaenishi/desakelam",
    visual: "horror"
  },
  {
    slug: "jamur-menfess",
    number: "02",
    name: "Jamur Menfess",
    category: "Web development · Community platform",
    status: "In Development",
    year: "2026",
    shortDescription: "A community-oriented messaging experience connected to chat automation.",
    overview: "A personal web project exploring a community submission experience and messaging-platform integration.",
    problem: "Community tools need a straightforward interface and dependable message handling without making the user journey complicated.",
    solution: "Combine a focused web interface with bot and messaging integrations, then improve the experience through testing.",
    contribution: ["Interface design and frontend implementation", "Project structure and integration planning", "Testing and iterative improvements"],
    technologies: ["JavaScript", "Node.js", "Baileys", "Telegram"],
    highlights: ["Community-oriented submission flow", "Messaging integration experiments", "Responsive interface direction"],
    demoUrl: "https://jamur-menfess.vercel.app",
    repoUrl: "https://github.com/zaenishi/jamurmenfess",
    visual: "community"
  },
  {
    slug: "mushbot",
    number: "04",
    name: "MushBot",
    category: "Bot development · Automation",
    status: "Personal Project",
    year: "2025–2026",
    shortDescription: "Messaging automation experiments and bot integrations.",
    overview: "A collection of bot development experiments focused on automating useful interactions across messaging platforms.",
    problem: "Repeated messaging tasks and platform interactions can benefit from clear commands and well-structured automation.",
    solution: "Explore JavaScript-based bot workflows and integrations, with an emphasis on maintainable command handling.",
    contribution: ["Bot workflow exploration", "Command and integration experiments", "Testing and maintenance"],
    technologies: ["JavaScript", "Node.js", "Baileys", "Telegraf"],
    highlights: ["Messaging automation experiments", "Command-based interaction", "API integration practice"],
    demoUrl: "",
    repoUrl: "https://github.com/zaenishi/mushbot",
    visual: "bot"
  }
];
