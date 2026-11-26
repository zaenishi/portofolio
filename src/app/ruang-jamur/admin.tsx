"use client";
import { useEffect, useState } from "react";
const blank = (v: any): any => Array.isArray(v) ? [] : v && typeof v === "object" ? Object.fromEntries(Object.keys(v).map((k) => [k, blank(v[k])])) : "";
function Ed({ v, set, k }: { v: any; set: (x: any) => void; k: string }) {
  if (Array.isArray(v)) return (
    <fieldset><legend>{k}</legend>
      {v.map((x, i) => <div className="it" key={i}><Ed v={x} k={`${k} #${i + 1}`} set={(n) => set(v.map((o, j) => (j === i ? n : o)))} /><button type="button" onClick={() => set(v.filter((_, j) => j !== i))}>🗑 Hapus</button></div>)}
      <button type="button" onClick={() => set([...v, blank(v[0] ?? "")])}>＋ Tambah</button>
    </fieldset>);
  if (v && typeof v === "object") return <fieldset><legend>{k}</legend>{Object.keys(v).map((f) => <Ed key={f} k={f} v={v[f]} set={(n) => set({ ...v, [f]: n })} />)}</fieldset>;
  return <label>{k}<input value={v} maxLength={3000} onChange={(e) => set(e.target.value)} /></label>;
}
const post = (b: object) => fetch("/api/admin", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(b) }).then(async (r) => ({ s: r.status, ...(await r.json()) }));
export default function Admin() {
  const [c, setC] = useState<any>(null), [pw, setPw] = useState(""), [m, setM] = useState("");
  const load = () => fetch("/api/admin").then((r) => (r.ok ? r.json() : null)).then((d) => d && setC(d));
  useEffect(() => { load(); }, []);
  const login = async () => { const r = await post({ a: "login", p: pw }); setPw(""); r.ok ? load() : setM(r.e); };
  const save = async () => { setM("Menyimpan…"); const r = await post({ a: "save", c }); setM(r.ok ? "✓ Tersimpan. Situs diperbarui ≤1 menit." : r.e); };
  const out = async () => { await post({ a: "logout" }); setC(null); };
  if (!c) return (
    <main className="ad"><div className="box"><h1>🍄 Ruang Jamur</h1>
      <input type="password" autoComplete="current-password" aria-label="Password" value={pw} onChange={(e) => setPw(e.target.value)} onKeyDown={(e) => e.key === "Enter" && login()} />
      <button className="btn" onClick={login}>Masuk</button><p role="alert">{m}</p></div></main>);
  return (
    <main className="ad"><div className="box"><h1>🍄 Ruang Jamur</h1>
      <p>Ubah apa saja, lalu tekan Simpan. Kolom “id/en” = teks Indonesia/Inggris.</p>
      <Ed v={c} k="Konten" set={setC} />
      <div className="nav"><button className="btn" onClick={save}>💾 Simpan</button><button onClick={out}>Keluar</button></div><p role="status">{m}</p></div></main>);
}
