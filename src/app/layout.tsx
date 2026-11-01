import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZAENISHI® — Independent Developer",
  description: "The portfolio of ZAENISHI — an independent developer exploring web technologies, digital products, and interactive experiences.",
  applicationName: "ZAENISHI Portfolio",
  openGraph: {
    title: "ZAENISHI® — Growing ideas into digital experiences",
    description: "Independent developer portfolio.",
    type: "website",
    images: ["/og-image.svg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "ZAENISHI® — Independent Developer",
    description: "Growing ideas into digital experiences.",
    images: ["/og-image.svg"]
  },
  icons: { icon: "/favicon.svg" }
};

export const viewport: Viewport = {
  themeColor: "#f2f0e8",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
