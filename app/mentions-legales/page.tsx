import type { Metadata } from "next";
import { BUSINESS, AVOCAT, CONTACT, LEGAL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du cabinet ${BUSINESS.name} — ${AVOCAT.fullName}, avocat au Barreau de Paris.`,
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="bg-cream pt-20 pb-10 md:pt-28 md:pb-14 border-b border-rule">
        <div className="container mx-auto px-6 md:px-10">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold font-medium">
            Information légale
          </p>
          <h1 className="mt-4 font-display font-medium text-hero text-navy leading-[1.05]">
            Mentions légales
          </h1>
          <div className="gold-rule" />
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-10 max-w-3xl space-y-10 font-sans text-ink/85 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy mb-3">Éditeur</h2>
            <p>
              <strong>{BUSINESS.legalName}</strong>
              <br />
              Cabinet d'avocats — {LEGAL.forme}
              <br />
              Fondé par {AVOCAT.fullName}, avocat au Barreau de {LEGAL.barreau}
              <br />
              Toque&nbsp;: {LEGAL.toque} — Prestation de serment&nbsp;: {AVOCAT.serment}
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy mb-3">Coordonnées</h2>
            <p>
              {CONTACT.adresse}
              <br />
              {CONTACT.zip} {CONTACT.city}
              <br />
              Email&nbsp;: {CONTACT.email}
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy mb-3">
              Profession réglementée
            </h2>
            <p>
              {AVOCAT.fullName} exerce la profession d'avocat, profession réglementée
              soumise aux règles de déontologie de l'Ordre des Avocats du Barreau de{" "}
              {LEGAL.barreau} (
              <a
                href={LEGAL.ordreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-navy underline-offset-4 hover:underline transition-colors"
              >
                avocatparis.org
              </a>
              ).
            </p>
            <p className="mt-3">
              Conformément aux articles L. 6111-1 et suivants du Code du travail, le
              cabinet est soumis au Règlement Intérieur National (RIN) de la profession
              d'avocat et au Règlement Intérieur du Barreau de {LEGAL.barreau}.
            </p>
            <p className="mt-3">
              Maniements de fonds&nbsp;: {LEGAL.carpa}. Assurance responsabilité civile
              professionnelle&nbsp;: {LEGAL.assurance}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy mb-3">
              Médiation de la consommation
            </h2>
            <p>
              Conformément aux articles L. 612-1 et suivants du Code de la consommation,
              en cas de litige, le client a la faculté de saisir le médiateur de la
              consommation&nbsp;:
            </p>
            <p className="mt-3">
              <strong>{LEGAL.mediation.name}</strong>
              <br />
              {LEGAL.mediation.address}
              <br />
              <a
                href={LEGAL.mediation.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-navy underline-offset-4 hover:underline transition-colors"
              >
                {LEGAL.mediation.website}
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy mb-3">Hébergement</h2>
            <p>
              Le site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133,
              Walnut, CA 91789, États-Unis.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy mb-3">
              Propriété intellectuelle
            </h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, images, mise en page)
              est protégé par le droit d'auteur. Toute reproduction, totale ou partielle,
              est interdite sans autorisation préalable.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy mb-3">
              Données personnelles
            </h2>
            <p>
              Les données collectées via le formulaire de contact sont traitées par le
              cabinet aux seules fins de répondre à la demande du visiteur. Elles ne sont
              pas transmises à des tiers et sont conservées pour la durée strictement
              nécessaire au traitement de la demande.
            </p>
            <p className="mt-3">
              Conformément au RGPD et à la loi Informatique et Libertés, le visiteur
              dispose d'un droit d'accès, de rectification, d'effacement et d'opposition
              aux données le concernant. Ces droits peuvent être exercés en écrivant à{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-gold hover:text-navy underline-offset-4 hover:underline transition-colors"
              >
                {CONTACT.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy mb-3">
              Conception du site
            </h2>
            <p>
              Site conçu et développé par <strong>EXTROPIUM</strong>, agence web
              indépendante.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
