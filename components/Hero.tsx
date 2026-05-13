import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BUSINESS, AVOCAT } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative bg-cream pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-rule">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(at 75% 25%, rgba(176, 141, 62, 0.6) 0px, transparent 55%), radial-gradient(at 15% 80%, rgba(15, 37, 71, 0.5) 0px, transparent 55%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Texte */}
          <div className="md:col-span-7">
            <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold font-medium mb-6">
              Cabinet d'avocats — {BUSINESS.tagline.split("—")[1]?.trim() ?? "Paris 17ᵉ"}
            </p>

            <h1 className="font-display font-medium tracking-tight leading-[1.05] text-hero text-navy">
              Défendre les entreprises{" "}
              <span className="italic text-gold">et les personnes</span>.
              Avec la rigueur du parquet et l'exigence du conseil.
            </h1>

            <div className="gold-rule" />

            <p className="mt-10 max-w-2xl font-sans text-lg md:text-xl text-ink/75 leading-relaxed">
              {BUSINESS.positioning} {AVOCAT.fullName} accompagne dirigeants, entreprises
              et personnes physiques en droit des affaires, droit pénal des affaires et
              défense des lanceurs d'alerte.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-cream px-7 py-3.5 font-sans font-medium transition-all shadow-cta"
              >
                Prendre rendez-vous
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/expertises"
                className="inline-flex items-center gap-2 border border-navy/30 hover:border-navy text-navy px-7 py-3.5 font-sans font-medium transition-all"
              >
                Découvrir les expertises
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div className="md:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden bg-navy">
              <Image
                src="/hero-mathieu.png"
                alt={`${AVOCAT.fullName}, avocat au Barreau de Paris, dans les couloirs du Palais de Justice`}
                fill
                priority
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <p className="mt-4 font-sans text-xs uppercase tracking-[0.18em] text-navy/60 font-medium text-center md:text-left">
              {AVOCAT.fullName} · Toque {AVOCAT.toque} — Barreau de Paris
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
