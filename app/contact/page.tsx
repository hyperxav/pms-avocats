import type { Metadata } from "next";
import { Mail, MapPin, Clock, Linkedin } from "lucide-react";
import { CONTACT, AVOCAT, BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact & prise de rendez-vous",
  description: `Contacter ${BUSINESS.name} — ${CONTACT.adresse}, ${CONTACT.zip} ${CONTACT.city}. ${CONTACT.email}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream pt-20 pb-12 md:pt-28 md:pb-16 border-b border-rule">
        <div className="container mx-auto px-6 md:px-10">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold font-medium">
            Contact
          </p>
          <h1 className="mt-4 font-display font-medium text-hero text-navy leading-[1.05] max-w-4xl">
            Un premier échange{" "}
            <span className="italic text-gold">en toute confidentialité.</span>
          </h1>
          <div className="gold-rule" />
          <p className="mt-8 font-sans text-lg text-ink/75 max-w-2xl leading-relaxed">
            Toute prise de contact fait l'objet d'un retour sous 24 à 48 heures ouvrées.
            Les échanges sont protégés par le secret professionnel de l'avocat.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Coordonnées */}
            <div className="md:col-span-5 space-y-8">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-navy/60 font-medium mb-3">
                  Adresse
                </p>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold mt-1 shrink-0" />
                  <div className="font-sans text-ink/85 leading-relaxed">
                    {CONTACT.adresse}
                    <br />
                    {CONTACT.zip} {CONTACT.city}
                  </div>
                </div>
              </div>

              <div>
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-navy/60 font-medium mb-3">
                  Email
                </p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 font-sans text-ink/85 hover:text-gold transition-colors"
                >
                  <Mail size={18} className="text-gold shrink-0" />
                  {CONTACT.email}
                </a>
              </div>

              <div>
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-navy/60 font-medium mb-3">
                  Horaires
                </p>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-gold mt-1 shrink-0" />
                  <span className="font-sans text-ink/85">{CONTACT.hoursLabel}</span>
                </div>
              </div>

              <div>
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-navy/60 font-medium mb-3">
                  Présence professionnelle
                </p>
                <a
                  href={AVOCAT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-sans text-ink/85 hover:text-gold transition-colors"
                >
                  <Linkedin size={18} className="text-gold shrink-0" />
                  {AVOCAT.fullName} sur LinkedIn
                </a>
              </div>
            </div>

            {/* Formulaire */}
            <div className="md:col-span-7">
              <form className="bg-soft border border-rule p-8 md:p-10 space-y-5">
                <p className="font-display text-2xl font-semibold text-navy mb-2">
                  Vous écrire au cabinet
                </p>
                <p className="font-sans text-sm text-ink/65 leading-relaxed mb-4">
                  Décrivez brièvement votre situation. Aucun élément de fond n'est
                  nécessaire à ce stade — un premier échange permettra de préciser le
                  cadre.
                </p>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-[0.18em] text-navy/60 font-medium mb-2">
                    Nom et prénom
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border border-rule bg-cream px-4 py-3 font-sans text-ink focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-[0.18em] text-navy/60 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border border-rule bg-cream px-4 py-3 font-sans text-ink focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-[0.18em] text-navy/60 font-medium mb-2">
                      Téléphone <span className="text-ink/40">(optionnel)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full border border-rule bg-cream px-4 py-3 font-sans text-ink focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-[0.18em] text-navy/60 font-medium mb-2">
                    Domaine concerné
                  </label>
                  <select
                    name="domaine"
                    className="w-full border border-rule bg-cream px-4 py-3 font-sans text-ink focus:border-gold focus:outline-none transition-colors"
                  >
                    <option>Droit des affaires</option>
                    <option>Droit pénal des affaires</option>
                    <option>Droit pénal général</option>
                    <option>Défense des lanceurs d'alerte</option>
                    <option>Autre / non précisé</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-[0.18em] text-navy/60 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full border border-rule bg-cream px-4 py-3 font-sans text-ink focus:border-gold focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy hover:bg-navy-light text-cream px-7 py-3.5 font-sans font-medium transition-all shadow-cta"
                >
                  Envoyer ma demande
                </button>

                <p className="font-sans text-xs text-ink/55 leading-relaxed pt-2">
                  Les informations transmises via ce formulaire sont utilisées
                  exclusivement pour traiter votre demande et soumises au secret
                  professionnel. Aucune relation client-avocat n'est créée par le seul
                  envoi de ce formulaire.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
