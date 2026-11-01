import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="case-page">
      <nav className="case-nav shell">
        <Link href="/" className="wordmark"><span className="brand-mushroom">🍄</span> ZAENISHI<span className="brand-dot">®</span></Link>
        <Link href="/#work" className="back-link"><ArrowLeft size={15}/> Back to works</Link>
      </nav>
      <section className="case-hero shell">
        <div className="eyebrow"><span>{project.number} / SELECTED WORK</span><span>{project.year}</span></div>
        <p className="case-category">{project.category}</p>
        <h1>{project.name}<span className="brand-dot">.</span></h1>
        <p className="case-lead">{project.shortDescription}</p>
        <div className={`project-visual visual-${project.visual} case-visual`}>
          <div className="visual-top"><span>ZAENISHI / PROJECT FILE</span><span>{project.number}—04</span></div>
          <div className="visual-center"><span className="visual-symbol">{project.visual === "horror" ? "✳" : project.visual === "community" ? "◉" : project.visual === "commerce" ? "⌘" : "⌁"}</span><strong>{project.name}</strong><small>{project.category}</small></div>
          <div className="visual-bottom"><span>DESIGN / DEVELOPMENT / ITERATION</span><span>🍄</span></div>
        </div>
        <div className="case-meta">
          <div><span>STATUS</span><strong>{project.status}</strong></div>
          <div><span>YEAR</span><strong>{project.year}</strong></div>
          <div><span>TYPE</span><strong>Independent project</strong></div>
        </div>
      </section>
      <section className="case-content shell">
        <article className="case-block"><span className="section-index">01 / OVERVIEW</span><div><h2>About the project</h2><p>{project.overview}</p></div></article>
        <article className="case-block"><span className="section-index">02 / THE CHALLENGE</span><div><h2>The problem</h2><p>{project.problem}</p></div></article>
        <article className="case-block"><span className="section-index">03 / THE APPROACH</span><div><h2>The solution</h2><p>{project.solution}</p></div></article>
        <article className="case-block"><span className="section-index">04 / CONTRIBUTION</span><div><h2>What I worked on</h2><ul>{project.contribution.map((item) => <li key={item}>{item}</li>)}</ul></div></article>
        <article className="case-block"><span className="section-index">05 / TECHNOLOGY</span><div><h2>Tools & technologies</h2><div className="tag-list">{project.technologies.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div></article>
        <article className="case-block"><span className="section-index">06 / HIGHLIGHTS</span><div><h2>Project focus</h2><ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div></article>
      </section>
      <section className="case-next shell">
        <p className="eyebrow">KEEP EXPLORING</p>
        <Link href="/#work" className="next-link">More selected works <ArrowRight size={20}/></Link>
      </section>
      <footer className="footer shell"><Link href="/" className="wordmark"><span className="brand-mushroom">🍄</span> ZAENISHI<span className="brand-dot">®</span></Link><span>© {new Date().getFullYear()} ZAENISHI. Built with curiosity.</span></footer>
    </main>
  );
}
