import Link from "next/link";
import { MapPin, Mail, Linkedin } from "lucide-react";
import { BUSINESS, AVOCAT, CONTACT, LEGAL, EXPERTISES } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-navy text-cream mt-20 pb-24 md:pb-12">
      <div className="container mx-auto px-6 md:px-10 pt-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Cabinet */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-semibold mb-4">{BUSINESS.name}</h3>
            <p className="font-sans text-sm text-cream/70 leading-relaxed">
              Cabinet d'avocats à Paris fondé par {AVOCAT.fullName}, ancien parquetier.
              Droit des affaires, droit pénal des affaires et défense des lanceurs d'alerte.
            </p>
            <a
              href={AVOCAT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-cream/80 hover:text-gold transition-colors text-sm font-sans"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
          </div>

          {/* Expertises */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Expertises</h4>
            <ul className="space-y-2 text-sm font-sans text-cream/80">
              {EXPERTISES.map((e) => (
                <li key={e.slug}>
                  <Link
                    href={`/expertises/${e.slug}`}
                    className="hover:text-gold transition-colors"
                  >
                    {e.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cabinet (adresse) */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Cabinet</h4>
            <div className="space-y-3 text-sm font-sans text-cream/80">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 shrink-0 text-gold" />
                <span>
                  {CONTACT.adresse}
                  <br />
                  {CONTACT.zip} {CONTACT.city}
                </span>
              </div>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Mail size={14} className="text-gold" />
                {CONTACT.email}
              </a>
              <p className="text-cream/60 text-xs leading-relaxed pt-1">
                {CONTACT.hoursLabel}
              </p>
            </div>
          </div>

          {/* Liens institutionnels */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Le cabinet</h4>
            <ul className="space-y-2 text-sm font-sans text-cream/80">
              <li>
                <Link href="/a-propos" className="hover:text-gold transition-colors">
                  Le cabinet
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:text-gold transition-colors">
                  Publications & enseignement
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-gold transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/15 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/50 font-sans">
          <span>
            © {new Date().getFullYear()} {BUSINESS.legalName} · {AVOCAT.fullName} · Toque {LEGAL.toque} — Barreau de {LEGAL.barreau}
          </span>
          <span>Site conçu par EXTROPIUM</span>
        </div>
      </div>
    </footer>
  );
}
