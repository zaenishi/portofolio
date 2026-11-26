import type { Metadata, Viewport } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
const px = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--px", display: "swap" });
const U = process.env.NEXT_PUBLIC_SITE_URL || "https://zaenishi.vercel.app";
const D = "Portofolio ZAENISHI (Jaenar Mohasan Zaki) — developer independen: website, frontend, bot & integrasi API, dan game interaktif.";
export const metadata: Metadata = {
  metadataBase: new URL(U),
  title: { default: "ZAENISHI 🍄 — Developer Independen | Portofolio", template: "%s · ZAENISHI" },
  description: D,
  keywords: ["ZAENISHI", "Jaenar Mohasan Zaki", "portofolio developer", "web developer Indonesia", "frontend", "bot developer", "freelance"],
  authors: [{ name: "Jaenar Mohasan Zaki" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: { type: "website", url: U, siteName: "ZAENISHI", locale: "id_ID", alternateLocale: ["en_US"], title: "ZAENISHI 🍄 — Developer Independen", description: D, images: ["/og-image.svg"] },
  twitter: { card: "summary_large_image", title: "ZAENISHI 🍄 — Developer Independen", description: D, images: ["/og-image.svg"] },
  icons: { icon: "/favicon.svg" }
};
export const viewport: Viewport = { themeColor: "#2c4a2b", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body className={px.variable}>{children}</body></html>;
}
