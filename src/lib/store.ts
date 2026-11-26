import { promises as fs } from "fs";
import { defaults, type Content } from "@/data/content";
const U = process.env.SUPABASE_URL, K = process.env.SUPABASE_SERVICE_KEY, F = ".data/content.json";
const H = { apikey: K || "", Authorization: `Bearer ${K}`, "Content-Type": "application/json" };
export async function getContent(fresh = false): Promise<Content> {
  try {
    if (U && K) {
      const r = await fetch(`${U}/rest/v1/site_content?id=eq.main&select=data`, { headers: H, ...(fresh ? { cache: "no-store" as const } : { next: { revalidate: 60 } }) });
      const j = await r.json();
      if (j[0]?.data) return j[0].data;
    } else return JSON.parse(await fs.readFile(F, "utf8"));
  } catch {}
  return defaults;
}
export async function saveContent(c: Content) {
  if (U && K) {
    const r = await fetch(`${U}/rest/v1/site_content`, { method: "POST", headers: { ...H, Prefer: "resolution=merge-duplicates" }, body: JSON.stringify({ id: "main", data: c }) });
    if (!r.ok) throw new Error("db");
  } else { await fs.mkdir(".data", { recursive: true }); await fs.writeFile(F, JSON.stringify(c)); }
}
export function valid(c: any) {
  try {
    const long = (v: any): boolean => typeof v === "string" ? v.length > 3000 : v && typeof v === "object" ? Object.values(v).some(long) : false;
    return JSON.stringify(c).length < 6e4 && !long(c) && typeof c?.name === "string" && ["projects", "socials", "skills", "journey", "services"].every((k) => Array.isArray(c[k])) && !!c.about && !!c.tagline && !!c.role;
  } catch { return false; }
}
