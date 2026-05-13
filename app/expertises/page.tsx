import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EXPERTISES } from "@/lib/config";

export const metadata: Metadata = {
  title: "Expertises — Droit des affaires & pénal des affaires",
  description:
    "Les domaines d'intervention du cabinet PMS Avocats : droit des affaires, droit pénal des affaires, droit pénal général, défense des lanceurs d'alerte.",
};

export default function ExpertisesPage() {
  return (
    <>
      <section className="bg-cream pt-20 pb-12 md:pt-28 md:pb-16 border-b border-rule">
        <div className="container mx-auto px-6 md:px-10">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold font-medium">
            Nos expertises
          </p>
          <h1 className="mt-4 font-display font-medium text-hero text-navy leading-[1.05] max-w-4xl">
            Quatre domaines d'intervention,{" "}
            <span className="italic text-gold">une exigence commune.</span>
          </h1>
          <div className="gold-rule" />
          <p className="mt-8 font-sans text-lg text-ink/75 max-w-2xl leading-relaxed">
            Le cabinet intervient principalement en droit des affaires et en droit pénal,
            avec une spécialisation reconnue en matière de délinquance économique et de
            défense des lanceurs d'alerte.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-10 space-y-12">
          {EXPERTISES.map((e) => (
            <article
              key={e.slug}
              className="grid md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-rule last:border-0"
            >
              <div className="md:col-span-5">
                <h2 className="font-display font-medium text-3xl md:text-4xl text-navy leading-tight">
                  {e.title}
                </h2>
                <p className="mt-5 font-sans text-ink/75 leading-relaxed">{e.description}</p>
                <Link
                  href={`/expertises/${e.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-gold hover:text-navy font-sans font-medium transition-colors"
                >
                  Voir le détail
                  <ArrowRight size={14} />
                </Link>
              </div>
              <div className="md:col-span-7">
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-navy/60 font-medium mb-4">
                  Prestations
                </p>
                <ul className="space-y-3">
                  {e.prestations.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 font-sans text-ink/80 leading-relaxed"
                    >
                      <span className="text-gold mt-1">§</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
