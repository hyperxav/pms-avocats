// Données business PMS Avocats — sources : site existant pms-avocats.com/fr/, LinkedIn Mathieu Sassi,
// Pappers, Doctrine, JustiFit, Allaw, Predictice, Pappers Justice, Gens de Confiance.
// Modifier ici met à jour automatiquement toutes les pages.

export const BUSINESS = {
  name: "PMS Avocats",
  legalName: "PMS Avocats",
  tagline: "Cabinet d'avocats — Paris 17ᵉ",
  subtitle: "Droit des affaires · Droit pénal des affaires · Droit pénal général",
  promise:
    "Un cabinet à dimension humaine, fondé par un ancien parquetier, dédié à la défense rigoureuse des entreprises et des personnes.",
  positioning:
    "Cabinet indépendant alliant la maîtrise du droit pénal acquise au parquet et l'exigence du conseil en droit des affaires.",
  founded: 2023, // prestation de serment 6 novembre 2023
  years() {
    return new Date().getFullYear() - this.founded;
  },
} as const;

export const AVOCAT = {
  prenom: "Mathieu",
  nom: "Sassi",
  fullName: "Maître Mathieu Sassi",
  titre: "Avocat au Barreau de Paris",
  toque: "C1127",
  serment: "6 novembre 2023",
  formations: [
    { annee: "Université Paris-Sorbonne", libelle: "Master Droit des affaires" },
    { annee: "IRIS Sup'", libelle: "Spécialisation Sécurité & gestion des crises" },
  ],
  enseignement: {
    etablissement: "Institut catholique de Paris",
    matiere: "Droit des sociétés",
    fonction: "Chargé d'enseignement",
  },
  parcours: [
    {
      annee: "2023 — présent",
      libelle: "Avocat fondateur — PMS Avocats, Paris",
    },
    {
      annee: "2020 — 2023",
      libelle: "Magistrat — Parquet, section criminalité organisée",
    },
    {
      annee: "Antérieurement",
      libelle: "Direction juridique en entreprise",
    },
  ],
  reseau: {
    nom: "Le Paraclet",
    description:
      "Réseau pluridisciplinaire d'avocats, juristes, experts-comptables, huissiers et associations partenaires permettant une réponse complète aux problématiques complexes.",
  },
  linkedin: "https://fr.linkedin.com/in/mathieu-sassi-059bb8223",
} as const;

export const CONTACT = {
  phoneMain: "01 89 23 45 67", // PLACEHOLDER — à confirmer auprès de Maître Sassi
  phoneMainE164: "+33189234567", // PLACEHOLDER
  phoneVisible: false, // tant que pas confirmé, on n'affiche pas
  email: "contact@pms-avocats.com",
  adresse: "22 Avenue de la Grande Armée",
  zip: "75017",
  city: "Paris",
  geo: { lat: 48.8754, lng: 2.2895 }, // approximatif 22 av Grande Armée
  hoursLabel: "Lundi — Vendredi · 9h — 19h · Sur rendez-vous",
  openingHours: [
    { day: "Monday", opens: "09:00", closes: "19:00" },
    { day: "Tuesday", opens: "09:00", closes: "19:00" },
    { day: "Wednesday", opens: "09:00", closes: "19:00" },
    { day: "Thursday", opens: "09:00", closes: "19:00" },
    { day: "Friday", opens: "09:00", closes: "19:00" },
  ],
} as const;

export const LEGAL = {
  forme: "Cabinet individuel",
  barreau: "Paris",
  toque: "C1127",
  ordreUrl: "https://www.avocatparis.org/",
  carpa: "CARPA Paris",
  assurance: "Conformément aux règles du Barreau de Paris (assurance RCP obligatoire)",
  mediation: {
    name: "Médiateur de la consommation de la profession d'avocat",
    website: "https://mediateur-consommation-avocat.fr",
    address: "180 boulevard Haussmann, 75008 Paris",
  },
  tva: "TVA intracommunautaire — à compléter",
} as const;

// 4 expertises principales (validées audit)
export type Expertise = {
  slug: string;
  title: string;
  short: string;
  description: string;
  prestations: readonly string[];
  emoji: string;
  featured: boolean;
};

export const EXPERTISES: readonly Expertise[] = [
  {
    slug: "droit-des-affaires",
    title: "Droit des affaires",
    short: "Conseil et contentieux pour entrepreneurs, dirigeants et sociétés.",
    description:
      "Accompagnement quotidien des dirigeants et entreprises sur l'ensemble des problématiques juridiques liées à la vie des affaires : structuration, négociation, contentieux commercial.",
    prestations: [
      "Création et structuration de sociétés",
      "Pactes d'associés, cessions de titres, opérations de capital",
      "Rédaction et négociation de contrats commerciaux",
      "Contentieux commercial et recouvrement",
      "Conseil aux dirigeants et gouvernance",
    ],
    emoji: "§",
    featured: true,
  },
  {
    slug: "droit-penal-des-affaires",
    title: "Droit pénal des affaires",
    short: "Défense des dirigeants et entreprises en matière de délinquance économique.",
    description:
      "Une connaissance fine du parquet acquise en section criminalité organisée pour défendre dirigeants, entreprises et professionnels mis en cause dans des dossiers économiques et financiers.",
    prestations: [
      "Abus de biens sociaux, abus de confiance, escroquerie",
      "Blanchiment, corruption, trafic d'influence",
      "Fraude fiscale et infractions douanières",
      "Atteintes à la probité, manquements aux obligations déclaratives",
      "Garde à vue, mise en examen, instruction, audience",
    ],
    emoji: "§§",
    featured: true,
  },
  {
    slug: "droit-penal-general",
    title: "Droit pénal général",
    short: "Défense des personnes physiques à toutes les étapes de la procédure pénale.",
    description:
      "Accompagnement des personnes physiques mises en cause ou victimes, depuis la garde à vue jusqu'à l'audience, dans le respect strict des droits de la défense.",
    prestations: [
      "Garde à vue — assistance et conseil",
      "Comparution immédiate, CRPC, audience correctionnelle",
      "Instruction et défense devant le juge d'instruction",
      "Assistance aux victimes et constitution de partie civile",
      "Voies de recours, appel, cassation",
    ],
    emoji: "§",
    featured: true,
  },
  {
    slug: "lanceurs-d-alerte",
    title: "Défense des lanceurs d'alerte",
    short: "Protection juridique des personnes ayant révélé des atteintes à l'intérêt général.",
    description:
      "Conseil et défense des lanceurs d'alerte au sens de la loi Sapin II et de la directive européenne, dans un cadre confidentiel et sécurisé.",
    prestations: [
      "Évaluation préalable de la qualité de lanceur d'alerte",
      "Sécurisation du signalement (interne, autorité, public)",
      "Défense face aux mesures de représailles",
      "Action en justice et indemnisation",
      "Confidentialité absolue et accompagnement personnalisé",
    ],
    emoji: "§",
    featured: true,
  },
];

export const ANNUAIRES = [
  { name: "Doctrine", url: "https://www.doctrine.fr/" },
  { name: "JustiFit", url: "https://www.justifit.fr/" },
  { name: "Allaw", url: "https://www.allaw.fr/" },
  { name: "Predictice", url: "https://predictice.com/" },
  { name: "Pappers Justice", url: "https://www.pappers.fr/" },
  { name: "Gens de Confiance", url: "https://www.gensdeconfiance.fr/" },
] as const;

// Publications & interventions — placeholder à enrichir avec les vrais articles de Maître Sassi
export const PUBLICATIONS = [
  {
    type: "Enseignement",
    titre: "Droit des sociétés — chargé d'enseignement",
    lieu: "Institut catholique de Paris",
    date: "Depuis 2024",
  },
] as const;

// Process accompagnement client en 4 étapes — argument trust signal
export const PROCESS = [
  {
    step: "1",
    title: "Premier échange",
    description:
      "Un appel ou rendez-vous initial pour comprendre votre situation. Confidentialité absolue, sans engagement.",
  },
  {
    step: "2",
    title: "Analyse et stratégie",
    description:
      "Étude approfondie du dossier, identification des enjeux, élaboration d'une stratégie sur-mesure et chiffrage clair.",
  },
  {
    step: "3",
    title: "Action concertée",
    description:
      "Mise en œuvre de la stratégie en lien étroit avec vous. Point d'avancement régulier, accessibilité maintenue.",
  },
  {
    step: "4",
    title: "Suivi et conclusion",
    description:
      "Conduite du dossier jusqu'à son issue. Accompagnement post-décision si nécessaire (recours, exécution).",
  },
] as const;
