import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AVOCAT, BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Le cabinet — Maître Mathieu Sassi",
  description: `Le parcours de ${AVOCAT.fullName}, fondateur de ${BUSINESS.name}. Cabinet à taille humaine adossé au réseau pluridisciplinaire ${AVOCAT.reseau.nom}, chargé d'enseignement en droit des sociétés à l'${AVOCAT.enseignement.etablissement}.`,
};

export default function AProposPage() {
  return (
    <>
      <section className="bg-cream pt-20 pb-12 md:pt-28 md:pb-16 border-b border-rule">
        <div className="container mx-auto px-6 md:px-10">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold font-medium">
            Le cabinet
          </p>
          <h1 className="mt-4 font-display font-medium text-hero text-navy leading-[1.05] max-w-4xl">
            {AVOCAT.fullName},{" "}
            <span className="italic text-gold">avocat au Barreau de Paris.</span>
          </h1>
          <div className="gold-rule" />
          <p className="mt-8 font-sans text-lg text-ink/75 max-w-2xl leading-relaxed">
            Un cabinet indépendant, à taille humaine, fondé en {BUSINESS.founded} et
            ancré dans un réseau pluridisciplinaire.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-7 space-y-6">
              <h2 className="font-display font-medium text-3xl text-navy leading-tight">
                Un suivi sur-mesure, adossé à un collectif.
              </h2>
              <p className="font-sans text-ink/80 text-lg leading-relaxed">
                Après une formation initiale en droit des affaires à l'Université
                Paris-Sorbonne, complétée par une spécialisation en sécurité et gestion
                des crises à l'IRIS Sup', {AVOCAT.fullName} a exercé en direction
                juridique en entreprise avant de prêter serment au Barreau de Paris en{" "}
                {BUSINESS.founded}.
              </p>
              <p className="font-sans text-ink/80 text-lg leading-relaxed">
                Le cabinet a fait le choix d'une structure indépendante, à taille humaine,
                qui permet à chaque client de bénéficier d'un suivi personnalisé et d'un
                accès direct au Conseil. Pour les dossiers complexes, {AVOCAT.fullName}{" "}
                mobilise {AVOCAT.reseau.nom}, un réseau pluridisciplinaire associant
                avocats, juristes, experts-comptables, huissiers et associations
                partenaires.
              </p>
              <p className="font-sans text-ink/80 text-lg leading-relaxed">
                Chargé d'enseignement en droit des sociétés à l'
                {AVOCAT.enseignement.etablissement}, il maintient une exigence académique
                qui irrigue chaque dossier traité au cabinet.
              </p>
            </div>

            <aside className="md:col-span-5">
              <div className="border-l border-gold pl-6 md:pl-8 space-y-8">
                <div>
                  <p className="font-sans text-xs uppercase tracking-[0.18em] text-navy/60 font-medium mb-2">
                    Toque
                  </p>
                  <p className="font-display text-2xl text-navy">{AVOCAT.toque}</p>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-[0.18em] text-navy/60 font-medium mb-2">
                    Prestation de serment
                  </p>
                  <p className="font-display text-2xl text-navy">{AVOCAT.serment}</p>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-[0.18em] text-navy/60 font-medium mb-3">
                    Formations
                  </p>
                  <ul className="space-y-3">
                    {AVOCAT.formations.map((f) => (
                      <li key={f.libelle} className="font-sans text-ink/85">
                        <p className="font-medium text-navy">{f.annee}</p>
                        <p className="text-sm text-ink/70">{f.libelle}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-[0.18em] text-navy/60 font-medium mb-2">
                    Enseignement
                  </p>
                  <p className="font-sans text-ink/85 leading-relaxed">
                    {AVOCAT.enseignement.fonction} en {AVOCAT.enseignement.matiere.toLowerCase()} —{" "}
                    {AVOCAT.enseignement.etablissement}.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-navy text-cream py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold font-medium">
              {AVOCAT.reseau.nom}
            </p>
            <h2 className="mt-4 font-display font-medium text-mega leading-tight">
              Un réseau pluridisciplinaire <span className="italic text-gold">au service du client.</span>
            </h2>
            <p className="mt-8 font-sans text-lg text-cream/85 leading-relaxed">
              {AVOCAT.reseau.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-soft py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display font-medium text-mega text-navy leading-tight">
              Vous souhaitez confier un dossier au cabinet ?
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-cream px-7 py-3.5 font-sans font-medium transition-all shadow-cta"
            >
              Prendre rendez-vous
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
