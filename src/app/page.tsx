import Portfolio from "@/components/portfolio";
import { getContent } from "@/lib/store";
export const revalidate = 60;
export default async function HomePage() {
  const c = await getContent();
  const ld = { "@context": "https://schema.org", "@type": "Person", name: c.full, alternateName: c.name, jobTitle: c.role.en, description: c.about.en, email: "mailto:" + c.email, sameAs: c.socials.map((s) => s.href).filter((u) => /^https?:/.test(u)) };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }} /><Portfolio c={c} /></>);
}
