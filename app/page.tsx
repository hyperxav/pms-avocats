import Link from "next/link";
import { ArrowRight, Scale, Briefcase, ShieldCheck, AlertTriangle } from "lucide-react";
import { Hero } from "@/components/Hero";
import { BUSINESS, AVOCAT, EXPERTISES, PROCESS } from "@/lib/config";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "droit-des-affaires": Briefcase,
  "droit-penal-des-affaires": Scale,
  "droit-penal-general": ShieldCheck,
  "lanceurs-d-alerte": AlertTriangle,
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* EXPERTISES */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-14">
            <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold font-medium">
              Nos expertises
            </p>
            <h2 className="mt-3 font-display font-medium text-mega text-navy">
              Quatre domaines d'intervention, une exigence commune.
            </h2>
            <p className="mt-5 font-sans text-lg text-ink/75 leading-relaxed">
              Chaque dossier est traité avec un suivi sur-mesure et, lorsque la
              complexité l'exige, l'appui d'un réseau pluridisciplinaire.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {EXPERTISES.map((e) => {
              const Icon = ICONS[e.slug] ?? Briefcase;
              return (
                <Link
                  key={e.slug}
                  href={`/expertises/${e.slug}`}
                  className="group bg-soft border border-rule hover:border-gold p-8 md:p-10 shadow-card hover:shadow-cardHover transition-all"
                >
                  <Icon size={28} className="text-gold mb-5" />
                  <h3 className="font-display font-semibold text-2xl md:text-3xl text-navy leading-tight">
                    {e.title}
                  </h3>
                  <p className="mt-4 font-sans text-ink/75 leading-relaxed">{e.short}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-medium text-gold group-hover:text-navy transition-colors">
                    En savoir plus
                    <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* LE CABINET — taille humaine + réseau */}
      <section className="bg-navy text-cream py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7">
              <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold font-medium">
                Le cabinet
              </p>
              <h2 className="mt-3 font-display font-medium text-mega leading-[1.1]">
                Un cabinet à taille humaine,{" "}
                <em className="not-italic text-gold">ancré dans un réseau.</em>
              </h2>
              <p className="mt-8 font-sans text-lg text-cream/85 leading-relaxed">
                {BUSINESS.name} est un cabinet indépendant, attaché à un suivi personnalisé
                de chaque dossier. Pour les problématiques complexes, il s'appuie sur{" "}
                {AVOCAT.reseau.nom}, un réseau pluridisciplinaire associant avocats, juristes,
                experts-comptables, huissiers et associations partenaires.
              </p>
              <p className="mt-5 font-sans text-lg text-cream/85 leading-relaxed">
                Chargé d'enseignement en droit des sociétés à l'{AVOCAT.enseignement.etablissement},
                {" "}{AVOCAT.fullName} conjugue rigueur académique et pratique judiciaire au
                service des dirigeants, entreprises et personnes physiques.
              </p>
              <Link
                href="/a-propos"
                className="mt-10 inline-flex items-center gap-2 text-gold hover:text-cream transition-colors font-sans font-medium"
              >
                Découvrir le cabinet
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="md:col-span-5">
              <div className="border-l border-gold pl-6 md:pl-8 space-y-6">
                {AVOCAT.parcours.map((p) => (
                  <div key={p.annee}>
                    <p className="font-sans text-xs uppercase tracking-widest text-gold/80 font-medium">
                      {p.annee}
                    </p>
                    <p className="mt-1 font-display text-xl text-cream">{p.libelle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-14">
            <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold font-medium">
              Notre méthode
            </p>
            <h2 className="mt-3 font-display font-medium text-mega text-navy">
              Une intervention structurée, en quatre temps.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.step} className="border-t border-gold pt-6">
                <span className="font-display text-4xl text-gold/80 font-medium">
                  {p.step.padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display font-semibold text-xl text-navy">
                  {p.title}
                </h3>
                <p className="mt-3 font-sans text-sm text-ink/70 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-soft py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display font-medium text-mega text-navy leading-tight">
              Un dossier à confier, une question à poser ?
            </h2>
            <p className="mt-5 font-sans text-lg text-ink/75 leading-relaxed">
              Un premier échange, en toute confidentialité, permet d'évaluer votre situation
              et de définir une stratégie d'action sur-mesure.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-cream px-7 py-3.5 font-sans font-medium transition-all shadow-cta"
              >
                Prendre rendez-vous
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
