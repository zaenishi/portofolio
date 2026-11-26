# ZAENISHI Portfolio — Game Edition 🍄
`npm i && npm run dev` · Deploy: Vercel.

**Env (Vercel → Settings → Environment Variables):** lihat `.env.example`. `NEXT_PUBLIC_SITE_URL` wajib diisi domain asli (untuk sitemap/canonical).

**Admin tersembunyi:** tidak ada link. Buka `/ruang-jamur` atau ketuk logo 🍄 di header 7× cepat. Password = `ADMIN_PASSWORD` (tanpa env, login dinonaktifkan).

**Penyimpanan admin (Supabase, sekali saja):**
```sql
create table site_content (id text primary key, data jsonb not null);
alter table site_content enable row level security; -- tanpa policy: hanya server (service key) yang bisa akses
```
Tanpa Supabase, perubahan disimpan ke `.data/content.json` (hanya jalan di server biasa/lokal, bukan Vercel).

**Google:** setelah deploy, kirim `https://domain-kamu.com/sitemap.xml` di Search Console.

**Catatan keamanan jujur:** rate-limit di kode hanya penahan dasar; anti-DDoS sungguhan = Vercel Firewall/Cloudflare. Blokir klik kanan/F12 hanya penghalang awam, bukan keamanan nyata — data rahasia jangan taruh di front-end.
