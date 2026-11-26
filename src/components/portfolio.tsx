"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Content } from "@/data/content";

type Lg = "id" | "en";
const K = ["about", "skills", "path", "work", "contact"] as const;
const IC = ["🍄", "🎒", "🗺️", "🎮", "💌"];
const T = {
  id: { start: "Mulai Petualangan", skip: "Lewati", next: "Lanjut", back: "Kembali", hint: "Tips: pakai tombol ◀ ▶ atau panah keyboard", done: "Petualangan Selesai!", doneT: "Kamu sudah mengenal semuanya. Silakan jelajahi portofolio lengkapnya.", enter: "Masuk Portofolio", replay: "Main lagi", about: "Tentang", skills: "Keahlian", path: "Perjalanan", work: "Proyek", contact: "Kontak", demo: "Demo", repo: "Kode", hi: "Halo, aku" },
  en: { start: "Start Adventure", skip: "Skip", next: "Next", back: "Back", hint: "Tip: use ◀ ▶ or the arrow keys", done: "Quest Complete!", doneT: "You now know it all. Feel free to explore the full portfolio.", enter: "Enter Portfolio", replay: "Play again", about: "About", skills: "Skills", path: "Journey", work: "Projects", contact: "Contact", demo: "Demo", repo: "Code", hi: "Hi, I'm" }
};
const sf = (u: string) => (/^(https?:|mailto:)/i.test(u) ? u : "#");
const A = { target: "_blank", rel: "noopener noreferrer" };

function Sec({ k, c, l }: { k: (typeof K)[number]; c: Content; l: Lg }) {
  const t = T[l];
  if (k === "about") return <><p>{c.about[l]}</p><p className="ok">● {c.avail[l]}</p><ul className="ls">{c.services.map((s, i) => <li key={i}>{s[l]}</li>)}</ul></>;
  if (k === "skills") return <div className="gr">{c.skills.map((s, i) => <div key={i}><h4>{s.g}</h4><p>{s.items.map((x, j) => <span className="chip" key={j}>{x}</span>)}</p></div>)}</div>;
  if (k === "path") return <ol className="ls">{c.journey.map((j, i) => <li key={i}><b>{j.y}</b> {j.t[l]}</li>)}</ol>;
  if (k === "work") return (
    <div className="gr">{c.projects.map((p, i) => (
      <article className="card" key={i}><small>{p.st[l]} · {p.year}</small><h3>{p.name}</h3><p>{p.d[l]}</p>
        <p>{p.tech.map((x, j) => <span className="chip" key={j}>{x}</span>)}</p>
        <p>{p.demo && <a href={sf(p.demo)} {...A}>{t.demo} ↗</a>} {p.repo && <a href={sf(p.repo)} {...A}>{t.repo} ↗</a>}</p></article>))}</div>);
  return <><p><a href={"mailto:" + c.email}>{c.email}</a></p><p>{c.socials.map((s, i) => <a className="chip" key={i} href={sf(s.href)} {...A}>{s.label}</a>)}</p></>;
}

export default function Portfolio({ c }: { c: Content }) {
  const [l, setL] = useState<Lg>("id"), [open, setOpen] = useState(true), [s, setS] = useState(-1);
  const tap = useRef({ n: 0, t: 0 }), r = useRouter(), t = T[l];
  useEffect(() => { try { if (localStorage.getItem("jm_l") === "en") setL("en"); if (localStorage.getItem("jm_d")) setOpen(false); } catch {} }, []);
  useEffect(() => { document.documentElement.lang = l; try { localStorage.setItem("jm_l", l); } catch {} }, [l]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  const fin = () => { setOpen(false); try { localStorage.setItem("jm_d", "1"); } catch {} window.scrollTo(0, 0); };
  useEffect(() => {
    if (!open) return;
    const f = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setS((x) => Math.min(x + 1, 5));
      if (e.key === "ArrowLeft") setS((x) => Math.max(x - 1, -1));
      if (e.key === "Escape") fin();
    };
    window.addEventListener("keydown", f);
    return () => window.removeEventListener("keydown", f);
  }, [open]);
  useEffect(() => { // penghalang awam (bukan keamanan nyata), hanya production
    if (process.env.NODE_ENV !== "production") return;
    const k = (e: KeyboardEvent) => { const x = e.key.toLowerCase(); if (e.key === "F12" || (e.ctrlKey && (x === "u" || (e.shiftKey && "ijc".includes(x) && x.length === 1)))) e.preventDefault(); };
    const m = (e: Event) => e.preventDefault();
    window.addEventListener("keydown", k); window.addEventListener("contextmenu", m);
    return () => { window.removeEventListener("keydown", k); window.removeEventListener("contextmenu", m); };
  }, []);
  const logo = () => { const n = Date.now(), z = tap.current; z.n = n - z.t < 900 ? z.n + 1 : 1; z.t = n; if (z.n >= 7) r.push("/ruang-jamur"); };
  const lang = <button onClick={() => setL(l === "id" ? "en" : "id")} aria-label="Ganti bahasa / Switch language">{l === "id" ? "ID ▸ EN" : "EN ▸ ID"}</button>;
  return (
    <>
      {open && (
        <div className="game" role="dialog" aria-modal="true" aria-label="Petualangan Jamur">
          <div className="bar">{lang}<button onClick={fin}>{t.skip} ✕</button></div>
          {s < 0 ? (
            <div className="box tc"><img className="av" src="/jamur.jpg" alt="" width={120} height={120} />
              <small>{t.hi}</small><h1>{c.name}</h1><p>{c.role[l]} — {c.tagline[l]}</p>
              <button className="btn" onClick={() => setS(0)}>▶ {t.start}</button><small>{t.hint}</small></div>
          ) : s < 5 ? (
            <>
              <div className="track" aria-hidden="true">
                {K.map((k, i) => <span key={k} className={i <= s ? "on" : ""}>{IC[i]}</span>)}
                <img className="me" src="/jamur.jpg" alt="" style={{ transform: `translateX(${s * 100}%)` }} />
              </div>
              <div className="box"><small>{s + 1}/5</small><h2>{IC[s]} {t[K[s]]}</h2>
                <div className="sc"><Sec k={K[s]} c={c} l={l} /></div>
                <div className="nav"><button onClick={() => setS(s - 1)}>◀ {t.back}</button><button className="btn" onClick={() => setS(s + 1)}>{t.next} ▶</button></div></div>
            </>
          ) : (
            <div className="box tc"><div className="av big">🏆</div><h2>{t.done}</h2><p>{t.doneT}</p>
              <button className="btn" onClick={fin}>{t.enter} ▶</button><button onClick={() => setS(-1)}>{t.replay}</button></div>
          )}
        </div>
      )}
      <header className="top"><button className="brand" onClick={logo} aria-label="ZAENISHI"><span>🍄</span> {c.name}</button>
        <nav aria-label="Menu">{K.map((k) => <a key={k} href={"#" + k}>{t[k]}</a>)}</nav>{lang}</header>
      <main>
        <section className="hero"><img className="av" src="/jamur.jpg" alt={`${c.full} — ${c.name}`} width={160} height={160} />
          <div><small>{t.hi}</small><h1>{c.name}</h1><p className="role">{c.full} · {c.role[l]}</p><p>{c.tagline[l]}</p>
            <p><a className="btn" href="#work">{t.work} ↓</a> <button onClick={() => { setS(-1); setOpen(true); try { localStorage.removeItem("jm_d"); } catch {} }}>🎮 {t.replay}</button></p></div></section>
        {K.map((k, i) => <section key={k} id={k} className="sec"><h2>{IC[i]} {t[k]}</h2><Sec k={k} c={c} l={l} /></section>)}
      </main>
      <footer>© {new Date().getFullYear()} {c.name} · 🍄</footer>
    </>
  );
}
