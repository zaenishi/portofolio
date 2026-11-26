import { createHmac, createHash, timingSafeEqual } from "crypto";
const P = () => process.env.ADMIN_PASSWORD || "";
const sig = (x: string) => createHmac("sha256", process.env.SESSION_SECRET || P()).update(x).digest("hex");
const h = (x: string) => createHash("sha256").update(x).digest();
export function mint(p: unknown) {
  if (!P() || typeof p !== "string" || !timingSafeEqual(h(p), h(P()))) return "";
  const e = String(Date.now() + 72e5);
  return e + "." + sig(e);
}
export function ok(t?: string) {
  if (!P() || !t) return false;
  const [e, s] = t.split(".");
  if (!e || !s || +e < Date.now()) return false;
  const g = sig(e);
  return s.length === g.length && timingSafeEqual(Buffer.from(s), Buffer.from(g));
}
const m = new Map<string, { n: number; t: number }>();
export function limited(ip: string, max: number) {
  const now = Date.now(), r = m.get(ip);
  if (!r || now - r.t > 9e5) { m.set(ip, { n: 1, t: now }); return false; }
  return ++r.n > max;
}
