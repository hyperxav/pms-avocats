import Link from "next/link";
import { Calendar } from "lucide-react";

export function StickyCallButton() {
  return (
    <Link
      href="/contact"
      className="md:hidden fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 bg-navy text-cream px-5 py-3.5 font-sans font-medium text-sm shadow-cta hover:bg-navy-light transition-all"
      aria-label="Prendre rendez-vous avec PMS Avocats"
    >
      <Calendar size={16} />
      Prendre rendez-vous
    </Link>
  );
}
