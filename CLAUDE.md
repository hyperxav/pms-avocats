# PMS Avocats — Site prototype pour pitch client

Site internet de **PMS Avocats**, cabinet d'avocats à Paris fondé par Maître Mathieu Sassi (ancien parquetier, section criminalité organisée). **Statut** : prototype pour la phase 5 du SOP commercial EXTROPIUM (= « site amélioré déjà construit, à montrer au pitch »).

Une fois Maître Sassi signé, ce code servira de base pour la version finale post-signature (photo professionnelle, publications réelles, mise en prod sur domaine `pms-avocats.com`).

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript strict
- Tailwind 3 + tailwindcss-animate
- Polices : Cormorant Garamond (display) + Source Serif 4 (body)
- Icons : lucide-react

## Direction artistique — Vibe 3 « Profession libérale sobre autoritaire »

Palette :
- `navy` #0F2547 → autorité, fond hero & footer
- `gold` #B08D3E → accents, filets, italiques
- `cream` #FAFAF7 → fond principal
- `soft` #F5F2EB → sections alternées
- `rule` #D9D2C2 → filets, séparateurs
- `ink` #1A1A1A → texte principal

Tone : **sobre, posé, jamais commercial**. Vouvoiement systématique. Aucun emoji. Aucune promesse de résultat (déontologie RIN art. 10).

**PAS Memphis fun** (réservé à EXTROPIUM), **PAS warm restauration** (réservé à Pizza Jean-Jean), **PAS services à domicile** (réservé à Allo James).

## Architecture (7 pages MVP)

```
/                                       home (Hero, Expertises, Avocat, Process, CTA)
/expertises                             liste 4 expertises
/expertises/[slug]                      détail (générée pour chaque expertise)
/a-propos                               parcours + parcours parquet + Le Paraclet
/publications                           enseignement ICP + publications
/contact                                coordonnées + formulaire RGPD
/mentions-legales                       conformité RIN + médiation + RGPD
```

## Données business

Tout est centralisé dans `lib/config.ts` :
- `BUSINESS` : nom, tagline, USP, année fondation (2023)
- `AVOCAT` : prénom, nom, toque C1127, serment 06/11/2023, formations, parcours, enseignement, réseau Paraclet, LinkedIn
- `CONTACT` : adresse 22 av Grande Armée 75017, email contact@pms-avocats.com, horaires (téléphone placeholder à confirmer)
- `LEGAL` : Barreau Paris, RIN, CARPA, médiation
- `EXPERTISES` : 4 piliers avec slug + description + prestations détaillées
- `PROCESS` : 4 étapes méthode cabinet
- `ANNUAIRES` : 6 plateformes métier où Mathieu est déjà présent
- `PUBLICATIONS` : enseignement ICP + futures contributions

Modifier `config.ts` met à jour automatiquement tout le site.

## Schema.org JSON-LD

Markup multi-types injecté dans `app/layout.tsx` :
- `LegalService` (cabinet) — adresse, geo, hours, knowsAbout
- `Attorney` (Mathieu) — alumniOf, memberOf Barreau, sameAs LinkedIn
- `Service` × 4 — un par expertise

**Gap critique audit corrigé** : le site original a 0 schema détecté. Ici, 6 entités structurées.

## Placeholders à remplacer post-signature

1. **Photo professionnelle** : aucune sur le site actuel — séance pro à organiser (200-400 €). En attendant : pas de photo stock (registre premium).
2. **Téléphone** : `CONTACT.phoneMain` est un placeholder, à confirmer auprès de Maître Sassi.
3. **Publications** : `PUBLICATIONS` est minimal — à enrichir avec articles, conférences, interventions.
4. **Geo coordinates** : approximatif 22 av Grande Armée — à affiner si besoin.

## Stack Claude-augmenté (asset MOAT EXTROPIUM)

### Guardrails dans `claude/`
- `client-context.md` — identité cabinet, parcours, persona, interdits déontologiques (RIN art. 10)
- `editorial.md` — ligne sobre autoritaire, lexique, exemples validés
- `gbp-line.md` — rotation thématique posts GBP (18 thèmes / 6 catégories)
- `seo-keywords.md` — 5 piliers + 30 long-tail, priorisation 6 mois

Ces fichiers sont la **source unique de vérité** pour la génération de contenu. Tout post GBP, modif texte, article SEO doit s'y conformer.

### Skills disponibles dans `.claude/skills/` (symlinks vers AUDIT master, à terme)
- `/generate-gbp` — génération batch posts GBP du mois
- `/seo-article` — génération article SEO depuis keyword long-tail

### Règle absolue
Tout contenu généré par Claude (skill ou prompt direct) DOIT passer par review humaine Xavier + validation Maître Sassi avant publication. Le skill génère un draft, jamais un livrable final.

## Conformité déontologique (rappel critique)

- **RIN art. 10** : pas de publicité comparative, pas de mention chiffrée de succès, pas de témoignages clients non-anonymisés
- **Secret professionnel** (art. 66-5 loi 31/12/1971) : aucun élément de dossier nominatif sans accord écrit
- **Médiation de la consommation** (art. L. 612-1 C. conso) : mention obligatoire en mentions légales

## Pas dans ce projet

- Pas de code agence EXTROPIUM (c'est dans `~/Desktop/CODING/SOCIETE-EXTROPIUM/EXTROPIUM/`)
- Pas de code Pizza Jean-Jean ni Allo James (séparés dans leur propre dossier)
- Pas de scripts d'audit (c'est dans `~/Desktop/CODING/SOCIETE-EXTROPIUM/AUDIT/`)
- Pas de notes stratégiques Obsidian-style (c'est dans Obsidian, dossier `Mathieu-sassi/`)
- Pas de masters skills (c'est dans `AUDIT/.claude/skills/` — ici symlinks à terme)
