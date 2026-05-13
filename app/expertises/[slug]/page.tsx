import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { EXPERTISES } from "@/lib/config";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return EXPERTISES.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const expertise = EXPERTISES.find((e) => e.slug === slug);
  if (!expertise) return {};
  return {
    title: expertise.title,
    description: expertise.short,
  };
}

export default async function ExpertisePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const expertise = EXPERTISES.find((e) => e.slug === slug);
  if (!expertise) notFound();

  const others = EXPERTISES.filter((e) => e.slug !== slug);

  return (
    <>
      <section className="bg-cream pt-20 pb-12 md:pt-28 md:pb-16 border-b border-rule">
        <div className="container mx-auto px-6 md:px-10">
          <Link
            href="/expertises"
            className="inline-flex items-center gap-2 text-sm font-sans text-ink/60 hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Toutes les expertises
          </Link>
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold font-medium">
            Expertise
          </p>
          <h1 className="mt-4 font-display font-medium text-hero text-navy leading-[1.05] max-w-4xl">
            {expertise.title}
          </h1>
          <div className="gold-rule" />
          <p className="mt-8 font-sans text-lg text-ink/75 max-w-3xl leading-relaxed">
            {expertise.description}
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-navy/60 font-medium mb-5">
                Domaines d'intervention
              </p>
              <ul className="space-y-4">
                {expertise.prestations.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 font-sans text-ink/85 text-lg leading-relaxed border-b border-rule pb-4 last:border-0"
                  >
                    <span className="text-gold mt-1.5 text-sm">§</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="md:col-span-5">
              <div className="bg-soft border border-rule p-8">
                <h2 className="font-display font-semibold text-2xl text-navy">
                  Une question sur ce domaine&nbsp;?
                </h2>
                <p className="mt-4 font-sans text-ink/75 leading-relaxed">
                  Un premier échange confidentiel permet d'évaluer la pertinence d'une
                  intervention et les options à envisager.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-cream px-6 py-3 font-sans font-medium transition-all"
                >
                  Prendre rendez-vous
                  <ArrowRight size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-10">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold font-medium mb-6">
            Autres expertises
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/expertises/${o.slug}`}
                className="group bg-cream border border-rule hover:border-gold p-6 transition-all"
              >
                <h3 className="font-display font-semibold text-xl text-navy">{o.title}</h3>
                <p className="mt-3 font-sans text-sm text-ink/70 leading-relaxed">{o.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:text-navy transition-colors">
                  Lire la suite <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
