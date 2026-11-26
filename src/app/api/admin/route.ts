import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { ok, mint, limited } from "@/lib/auth";
import { getContent, saveContent, valid } from "@/lib/store";
export const dynamic = "force-dynamic";
const J = (b: object, s = 200) => NextResponse.json(b, { status: s, headers: { "Cache-Control": "no-store" } });
export async function GET(r: NextRequest) {
  if (!ok(r.cookies.get("rj")?.value)) return J({ e: "auth" }, 401);
  return J(await getContent(true));
}
export async function POST(r: NextRequest) {
  const ip = (r.headers.get("x-forwarded-for") || "x").split(",")[0];
  if (limited("a" + ip, 60)) return J({ e: "Terlalu banyak permintaan." }, 429);
  const b = await r.json().catch(() => null);
  if (!b) return J({ e: "bad" }, 400);
  if (b.a === "login") {
    if (limited("l" + ip, 5)) return J({ e: "Terlalu banyak percobaan. Coba lagi 15 menit lagi." }, 429);
    const t = mint(b.p);
    if (!t) return J({ e: "Password salah" }, 401);
    const res = J({ ok: 1 });
    res.cookies.set("rj", t, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: 7200 });
    return res;
  }
  if (!ok(r.cookies.get("rj")?.value)) return J({ e: "auth" }, 401);
  if (b.a === "logout") { const res = J({ ok: 1 }); res.cookies.delete("rj"); return res; }
  if (b.a === "save") {
    if (!valid(b.c)) return J({ e: "Data tidak valid" }, 400);
    try { await saveContent(b.c); } catch { return J({ e: "Penyimpanan belum dikonfigurasi (lihat README)" }, 500); }
    revalidatePath("/");
    return J({ ok: 1 });
  }
  return J({ e: "bad" }, 400);
}
