"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X,
  Github, Linkedin, Instagram, Mail, MoveUpRight, Code2, Sparkles,
  Globe2, MessageCircle, MousePointer2
} from "lucide-react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const navItems = [
  ["About", "#about"], ["Works", "#work"], ["Expertise", "#expertise"],
  ["Journey", "#journey"], ["Services", "#services"], ["Contact", "#contact"]
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <div className={`reveal ${className}`} style={{ ["--delay" as string]: `${delay}ms` }}>{children}</div>;
}

function ProjectArtwork({ visual }: { visual: string }) {
  const symbols: Record<string, string> = { horror: "✳", community: "◉", commerce: "⌘", bot: "⌁" };
  return (
    <div className={`project-visual visual-${visual}`}>
      <div className="visual-top"><span>ZAENISHI / SELECTED WORK</span><span>🍄</span></div>
      <div className="visual-center"><span className="visual-symbol">{symbols[visual] || "✳"}</span><span className="visual-orbit orbit-one"/><span className="visual-orbit orbit-two"/></div>
      <div className="visual-bottom"><span>INDEPENDENT PROJECT</span><span>OPEN CASE STUDY ↗</span></div>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));

    const sections = document.querySelectorAll("main section[id]");
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => sectionObserver.observe(section));

    return () => { observer.disconnect(); sectionObserver.disconnect(); };
  }, []);

  const categories = ["All", "Web", "Game", "Automation"];
  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Game") return project.category.toLowerCase().includes("game");
    if (filter === "Automation") return project.category.toLowerCase().includes("automation") || project.name.toLowerCase().includes("bot");
    return project.category.toLowerCase().includes("web") || project.category.toLowerCase().includes("product");
  });

    const emailHref = site.email ? `mailto:${site.email}` : "#contact";
    const socialIcons = [Github, Linkedin, Instagram, MessageCircle];
    
    const socials: readonly {
      label: string;
      href?: string;
      handle?: string;
    }[] = site.socials;
    
  return (
    <main id="home" className="portfolio">
      <div className="top-progress" aria-hidden="true"/>
      <header className="site-header shell">
        <Link href="#home" className="wordmark" aria-label="Zaenishi home">
          <span className="brand-mushroom">🍄</span> ZAENISHI<span className="brand-dot">®</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className={activeSection === href.slice(1) ? "nav-active" : ""}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">Let's talk <ArrowUpRight size={14}/></a>
        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X/> : <Menu/>}
        </button>
      </header>

      {menuOpen && <div className="mobile-menu">
        <div className="mobile-menu-head"><span>EXPLORE</span><span>🍄</span></div>
        {navItems.map(([label, href], index) => <a key={href} href={href} onClick={() => setMenuOpen(false)}><small>0{index + 1}</small>{label}<ArrowUpRight size={18}/></a>)}
        <p>GROWING IDEAS INTO DIGITAL EXPERIENCES.</p>
      </div>}

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-topline"><span><i className="status-dot"/> {site.availability}</span><span>BASED IN {site.location.toUpperCase()}</span></div>
        <div className="hero-content">
          <Reveal className="hero-kicker"><span className="kicker-line"/> INDEPENDENT DEVELOPER <span className="kicker-star">✳</span> DIGITAL CREATOR</Reveal>
          <Reveal delay={100}><h1 id="hero-title">Growing ideas<br/>into <span className="hero-italic">digital</span><br/><span className="hero-last">experiences<span className="hero-period">.</span></span></h1></Reveal>
          <Reveal delay={200} className="hero-bottom">
            <p>{site.intro}</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <ArrowUpRight size={16}/></a>
              <a className="text-link" href="#about">A little about me <ArrowDownRight size={16}/></a>
            </div>
          </Reveal>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-grid"/>
          <div className="art-ring ring-a"/><div className="art-ring ring-b"/>
          <div className="art-cross cross-a">+</div><div className="art-cross cross-b">+</div>
          <div className="mushroom-sticker"><span>🍄</span><small>IDEAS<br/>GROW HERE</small></div>
          <span className="art-coordinate">06° S / 107° E</span>
          <span className="art-side-label">A SMALL SYMBOL. A BIG ECOSYSTEM.</span>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
        <div className="hero-index">01 <span>/</span> 07</div>
      </section>

      <div className="marquee" aria-label="Curiosity, creativity, and code">
        <div className="marquee-track"><span>CURIOUS BY NATURE</span><b>🍄</b><span>BUILT WITH PURPOSE</span><b>✳</b><span>ALWAYS EXPLORING</span><b>🍄</b><span>CURIOUS BY NATURE</span><b>✳</b><span>BUILT WITH PURPOSE</span><b>🍄</b></div>
      </div>

      <section id="about" className="section about-section shell">
        <div className="section-heading"><span className="eyebrow">01 / THE PERSON BEHIND THE PIXELS</span><span className="section-aside">A LITTLE INTRODUCTION</span></div>
        <div className="about-grid">
          <Reveal><h2>Not just writing code.<br/><span>Growing possibilities.</span></h2></Reveal>
          <Reveal delay={100} className="about-copy">
            <p className="large-copy">{site.about}</p>
            <div className="about-facts">
              <div><span>NAME</span><strong>{site.fullName}</strong></div>
              <div><span>ROLE</span><strong>{site.role}</strong></div>
              <div><span>LOCATION</span><strong>{site.location}</strong></div>
            </div>
            <a className="underlined-link" href="#journey">Explore my journey <ArrowUpRight size={15}/></a>
          </Reveal>
        </div>
        <div className="about-signature"><span>MY APPROACH</span><p>Observe <b>→</b> Experiment <b>→</b> Build <b>→</b> Improve</p><span className="signature-mushroom">🍄</span></div>
      </section>

      <section id="work" className="section work-section">
        <div className="shell">
          <div className="section-heading"><span className="eyebrow">02 / SELECTED WORKS</span><span className="section-aside">A FEW THINGS I'VE BEEN GROWING</span></div>
          <div className="work-intro">
            <Reveal><h2>Ideas made<br/><span>tangible.</span></h2></Reveal>
            <Reveal delay={100}><p>Experiments, independent projects, and digital products. Each one is a chance to learn something new and make something useful.</p></Reveal>
          </div>
          <div className="filter-row" role="group" aria-label="Filter projects">
            <span>FILTER BY</span>
            <div>{categories.map((category) => <button key={category} className={filter === category ? "filter-active" : ""} onClick={() => setFilter(category)}>{category}</button>)}</div>
          </div>
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 70} className="project-card-wrap">
                <Link href={`/projects/${project.slug}`} className="project-card">
                  <div className="project-card-art"><ProjectArtwork visual={project.visual}/><span className="project-open"><ArrowUpRight size={19}/></span></div>
                  <div className="project-card-meta"><span>{project.number} / {project.category}</span><span className={`project-status ${project.status === "In Development" ? "status-live" : ""}`}>{project.status}</span></div>
                  <div className="project-card-title"><h3>{project.name}</h3><ArrowUpRight size={19}/></div>
                  <p>{project.shortDescription}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="work-footnote"><span>MORE EXPERIMENTS ARE ALWAYS IN PROGRESS.</span><span>🍄</span></div>
        </div>
      </section>

      <section id="expertise" className="section expertise-section shell">
        <div className="section-heading"><span className="eyebrow">03 / EXPERTISE & TOOLKIT</span><span className="section-aside">TOOLS ARE PART OF THE PROCESS</span></div>
        <div className="expertise-intro"><Reveal><h2>Curiosity is the<br/><span>starting point.</span></h2></Reveal><Reveal delay={100}><p>I keep learning through practical work. Here's a snapshot of the technologies and tools I've explored or used in personal projects.</p></Reveal></div>
        <div className="skills-grid">
          {site.skills.map((skill, index) => <Reveal key={skill.group} delay={index * 70} className="skill-group"><div className="skill-number">0{index + 1}</div><h3>{skill.group}</h3><div className="tag-list">{skill.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div></Reveal>)}
        </div>
        <p className="honesty-note"><Sparkles size={14}/> Skill lists are intentionally honest and can be updated as experience grows.</p>
      </section>

      <section id="journey" className="section journey-section">
        <div className="shell">
          <div className="section-heading"><span className="eyebrow">04 / THE JOURNEY</span><span className="section-aside">STILL GROWING, ALWAYS</span></div>
          <div className="journey-intro"><Reveal><h2>Progress over<br/><span>perfection.</span></h2></Reveal><Reveal delay={100}><p>Every project leaves behind a new skill, a better question, or a different way of thinking.</p></Reveal></div>
          <div className="timeline">
            {site.journey.map((item, index) => <Reveal key={item.year} delay={index * 90} className="timeline-item"><div className="timeline-year">{item.year}</div><div className="timeline-marker"><span/></div><div className="timeline-content"><span>CHAPTER 0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section id="services" className="section services-section shell">
        <div className="section-heading"><span className="eyebrow">05 / WHAT I CAN HELP WITH</span><span className="section-aside">SELECTED SERVICES</span></div>
        <div className="services-intro"><Reveal><h2>Let's build<br/><span>something useful.</span></h2></Reveal><Reveal delay={100}><p>Have a project in mind? I’m open to discussing clear, realistic projects where I can contribute and keep growing.</p></Reveal></div>
        <div className="service-list">
          {site.services.map((service) => <Reveal key={service.number} className="service-row"><span className="service-no">{service.number}</span><div><h3>{service.title}</h3><p>{service.description}</p></div><ArrowUpRight className="service-arrow" size={20}/></Reveal>)}
        </div>
        <p className="service-disclaimer">Project scope and availability are discussed before any commitment.</p>
      </section>

      <section id="contact" className="contact-section">
        <div className="shell contact-inner">
          <div className="section-heading"><span className="eyebrow">06 / CONTACT</span><span className="section-aside">THE NEXT IDEA COULD BE YOURS</span></div>
          <Reveal><p className="contact-kicker">HAVE SOMETHING IN MIND?</p><h2>Let's make<br/>it <span>grow.</span><b>🍄</b></h2></Reveal>
          <div className="contact-bottom">
            <p>For freelance inquiries, collaborations, or just a good conversation about building things.</p>
            <a className="button button-light" href={emailHref}>{site.email ? "Send me an email" : "Set up your email first"} <ArrowUpRight size={16}/></a>
          </div>
          <div className="social-row">
            {socials.map((social, index) => {
              const Icon = socialIcons[index] || Globe2;
              return social.href
                ? <a key={social.label} href={social.href} target="_blank" rel="noreferrer"><Icon size={15}/>{social.label}<ArrowUpRight size={12}/></a>
                : <span key={social.label} className="social-placeholder"><Icon size={15}/>{social.label}<small>ADD LINK</small></span>;
            })}
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <Link href="#home" className="wordmark"><span className="brand-mushroom">🍄</span> ZAENISHI<span className="brand-dot">®</span></Link>
        <span>© {new Date().getFullYear()} ZAENISHI. Built with curiosity.</span>
        <a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={13}/></a>
      </footer>
      <div className="cursor-note" aria-hidden="true"><MousePointer2 size={13}/> KEEP EXPLORING</div>
    </main>
  );
}
