import type { MetadataRoute } from "next";
const U = process.env.NEXT_PUBLIC_SITE_URL || "https://zaenishi.vercel.app";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/ruang-jamur"] }, sitemap: `${U}/sitemap.xml`, host: U };
}
