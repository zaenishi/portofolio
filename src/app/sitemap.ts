import type { MetadataRoute } from "next";
const U = process.env.NEXT_PUBLIC_SITE_URL || "https://zaenishi.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: U, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }]; }
