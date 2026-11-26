import type { Metadata } from "next";
import Admin from "./admin";
export const metadata: Metadata = { title: "…", robots: { index: false, follow: false } };
export default function Page() { return <Admin />; }
