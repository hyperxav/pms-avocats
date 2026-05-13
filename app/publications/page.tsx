import type { Metadata } from "next";
import { AVOCAT, PUBLICATIONS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Publications & enseignement",
  description: `Publications et enseignement de ${AVOCAT.fullName} — chargé d'enseignement en droit des sociétés à l'${AVOCAT.enseignement.etablissement}.`,
};

export default function PublicationsPage() {
  return (
    <>
      <section className="bg-cream pt-20 pb-12 md:pt-28 md:pb-16 border-b border-rule">
        <div className="container mx-auto px-6 md:px-10">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold font-medium">
            Publications & enseignement
          </p>
          <h1 className="mt-4 font-display font-medium text-hero text-navy leading-[1.05] max-w-4xl">
            Une activité doctrinale{" "}
            <span className="italic text-gold">au service du dossier.</span>
          </h1>
          <div className="gold-rule" />
          <p className="mt-8 font-sans text-lg text-ink/75 max-w-2xl leading-relaxed">
            Enseignement universitaire et contributions doctrinales nourrissent la
            réflexion juridique mise en œuvre au cabinet.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-10">
          <div className="space-y-10">
            {PUBLICATIONS.map((p, i) => (
              <article
                key={`${p.titre}-${i}`}
                className="grid md:grid-cols-12 gap-6 pb-10 border-b border-rule last:border-0"
              >
                <div className="md:col-span-3">
                  <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold font-medium">
                    {p.type}
                  </p>
                  <p className="mt-2 font-sans text-sm text-ink/60">{p.date}</p>
                </div>
                <div className="md:col-span-9">
                  <h2 className="font-display font-semibold text-2xl text-navy leading-tight">
                    {p.titre}
                  </h2>
                  <p className="mt-2 font-sans text-ink/70">{p.lieu}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 bg-soft border border-rule p-8 md:p-10">
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold font-medium mb-3">
              À venir
            </p>
            <p className="font-sans text-ink/75 leading-relaxed">
              Les contributions doctrinales et interventions de {AVOCAT.fullName} seront
              régulièrement publiées sur cette page. Vous pouvez également retrouver son
              activité professionnelle sur{" "}
              <a
                href={AVOCAT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-navy underline-offset-4 hover:underline transition-colors"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
