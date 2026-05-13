"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BUSINESS } from "@/lib/config";

const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/expertises", label: "Expertises" },
  { href: "/a-propos", label: "Le cabinet" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b border-rule">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-navy">
            {BUSINESS.name}
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-sm font-medium text-ink/80 hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-cream px-5 py-2.5 font-sans text-sm font-medium transition-all"
            >
              Prendre rendez-vous
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Menu"
            className="md:hidden p-2 text-navy"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 border-t border-rule pt-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans py-2 text-ink/80"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy text-cream px-4 py-2.5 font-sans text-sm font-medium w-fit"
              onClick={() => setOpen(false)}
            >
              Prendre rendez-vous
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
