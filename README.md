# PMS Avocats — Site prototype

Cabinet d'avocats à Paris fondé par Maître Mathieu Sassi (ancien parquetier, section criminalité organisée). Prototype EXTROPIUM destiné au pitch client.

## Stack

Next.js 15 + Tailwind 3 + Cormorant Garamond (display) + Source Serif 4 (body) + lucide-react.

## Démarrer

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000.

## Direction artistique — Vibe 3 « profession libérale sobre autoritaire »

- `navy` #0F2547 → autorité institutionnelle, hero, footer
- `gold` #B08D3E → accents, filets, italiques de mise en valeur
- `cream` #FAFAF7 → fond principal
- `soft` #F5F2EB → sections alternées
- Typographie : serif élégante (Cormorant) pour display, serif lisible (Source Serif) pour body

## Pages (7)

```
/                                       home
/expertises                             liste des 4 expertises
/expertises/[slug]                      détail expertise (4 slugs)
/a-propos                               parcours Maître Sassi
/publications                           enseignement + publications
/contact                                formulaire + coordonnées
/mentions-legales                       conformité RIN + RGPD
```

## Données

Tout est centralisé dans `lib/config.ts` :
- `BUSINESS`, `AVOCAT`, `CONTACT`, `LEGAL`
- `EXPERTISES` (4 piliers avec prestations détaillées)
- `PROCESS` (méthode 4 étapes)
- `PUBLICATIONS` (à enrichir)
- `ANNUAIRES` (Doctrine, JustiFit, Allaw, Predictice, Pappers Justice, Gens de Confiance)

## Voir aussi

- `CLAUDE.md` — règles projet
- `claude/client-context.md` — identité cabinet + interdits déontologiques
- `claude/editorial.md` — ligne éditoriale sobre autoritaire
- `claude/gbp-line.md` — rotation thématique Google Business Profile
- `claude/seo-keywords.md` — 5 piliers + 30 long-tail
