import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCallButton } from "@/components/StickyCallButton";
import { BUSINESS, AVOCAT, CONTACT, LEGAL, EXPERTISES } from "@/lib/config";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pms-avocats.com"),
  title: {
    default: `${BUSINESS.name} · Cabinet d'avocats Paris — Droit des affaires & pénal des affaires`,
    template: `%s · ${BUSINESS.name}`,
  },
  description: `${BUSINESS.name} — Cabinet d'avocats à Paris fondé par ${AVOCAT.fullName}. Droit des affaires, droit pénal des affaires, droit pénal général, défense des lanceurs d'alerte. Suivi sur-mesure et appui d'un réseau pluridisciplinaire. 22 Avenue de la Grande Armée, Paris 17ᵉ.`,
  keywords: [
    "avocat Paris",
    "avocat droit des affaires Paris",
    "avocat pénal des affaires",
    "avocat pénal Paris",
    "avocat lanceur d'alerte",
    "Mathieu Sassi avocat",
    "PMS Avocats",
    "cabinet d'avocats Paris 17",
  ],
  openGraph: {
    title: `${BUSINESS.name} · Cabinet d'avocats Paris`,
    description: `Cabinet d'avocats à Paris — droit des affaires, droit pénal des affaires, défense des lanceurs d'alerte. Cabinet à taille humaine, adossé au réseau pluridisciplinaire ${AVOCAT.reseau.nom}.`,
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const baseUrl = "https://pms-avocats.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": `${baseUrl}/#legalservice`,
      name: BUSINESS.name,
      legalName: BUSINESS.legalName,
      url: baseUrl,
      image: `${baseUrl}/og-image.jpg`,
      telephone: CONTACT.phoneMainE164,
      email: CONTACT.email,
      priceRange: "€€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT.adresse,
        addressLocality: CONTACT.city,
        postalCode: CONTACT.zip,
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: CONTACT.geo.lat,
        longitude: CONTACT.geo.lng,
      },
      openingHoursSpecification: CONTACT.openingHours.map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.opens,
        closes: h.closes,
      })),
      areaServed: { "@type": "Country", name: "France" },
      knowsAbout: EXPERTISES.map((e) => e.title),
      founder: { "@id": `${baseUrl}/#mathieu-sassi` },
      member: { "@id": `${baseUrl}/#mathieu-sassi` },
    },
    {
      "@type": "Attorney",
      "@id": `${baseUrl}/#mathieu-sassi`,
      name: AVOCAT.fullName,
      givenName: AVOCAT.prenom,
      familyName: AVOCAT.nom,
      jobTitle: AVOCAT.titre,
      worksFor: { "@id": `${baseUrl}/#legalservice` },
      memberOf: {
        "@type": "Organization",
        name: `Barreau de ${LEGAL.barreau}`,
        url: LEGAL.ordreUrl,
      },
      knowsLanguage: ["French"],
      knowsAbout: EXPERTISES.map((e) => e.title),
      sameAs: [AVOCAT.linkedin],
      alumniOf: AVOCAT.formations.map((f) => ({
        "@type": "EducationalOrganization",
        name: f.annee,
      })),
    },
    ...EXPERTISES.map((e) => ({
      "@type": "Service",
      "@id": `${baseUrl}/expertises/${e.slug}#service`,
      name: e.title,
      description: e.description,
      serviceType: "Legal Service",
      provider: { "@id": `${baseUrl}/#legalservice` },
      areaServed: { "@type": "Country", name: "France" },
    })),
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-cream text-ink font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
