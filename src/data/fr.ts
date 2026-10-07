import type { SiteContent } from "./types";

// -----------------------------------------------------------------------------
// FRENCH CONTENT
// -----------------------------------------------------------------------------
// This is where the French text lives. Edit the strings below — no HTML needed.
// Each long block is an array of paragraphs: one string per paragraph.
// The placeholder text is marked [À REMPLACER] and should be replaced.
// -----------------------------------------------------------------------------

export const fr: SiteContent = {
  meta: {
    title: "Nom de la Compagnie — Théâtre",
    description:
      "[À REMPLACER] Compagnie théâtrale — présentation, créations et contact.",
  },

  nav: {
    company: "La compagnie",
    shows: "Nos spectacles",
    director: "Mise en scène",
    members: "L'équipe",
    community: "Le lieu",
    contact: "Contact",
  },

  hero: {
    header_title: "Atelier de theatre",
    title: "Nom de la Compagnie",
    tagline: "[À REMPLACER] Une phrase qui résume l'esprit de la troupe.",
  },

  company: {
    title: "La compagnie",
    body: [
      "[À REMPLACER] Présentez ici la compagnie : quand et comment elle est née, " +
        "ce qui vous rassemble, la démarche artistique qui vous anime.",
      "[À REMPLACER] Un deuxième paragraphe pour préciser votre approche, vos " +
        "influences ou les thèmes que vous aimez explorer sur scène.",
    ],
  },

  // ---------------------------------------------------------------------------
  // LES SPECTACLES / SHOWS
  // Chaque spectacle a un titre et une description. Facultatif : informations
  // générales (details), distribution (credits), vidéo (videoId), affiche
  // (poster). Les titres ci-dessous sont en grec — à traduire ou translittérer
  // selon votre choix.
  //
  // Pour ajouter une affiche :
  //   1. Placez le fichier dans src/assets/shows/ (ex. godot.jpg)
  //   2. Importez-le en haut de ce fichier :
  //        import godotPoster from "../assets/shows/godot.jpg";
  //   3. Ajoutez au spectacle :
  //        poster: { image: godotPoster, alt: "Affiche du spectacle" },
  // ---------------------------------------------------------------------------
  shows: {
    title: "Nos spectacles",
    leafletLabel: "Dépliant",
    galleryLabel: "Galerie",
    creditsLabel: "Distribution",
    intro: [
      "[À REMPLACER] Une courte introduction aux spectacles de la compagnie.",
    ],
    items: [
      {
        title: "Λυσιστράτη ή Μένουμε Ακρόπολη",
        details: [
          { label: "Année", value: "2020–2021" },
          { label: "D'après", value: "Aristophane" },
          { label: "Forme", value: "Représentation en ligne" },
        ],
        description: ["[À REMPLACER] Courte description du spectacle."],
        videoId: "F0eUPQy_FyY",
        // Exemple de distribution — décommentez et complétez :
        // credits: [
        //   { role: "Mise en scène", name: "Athina Axiotou" },
        // ],
      },
      {
        title: "Περιμένοντας τον δικό μας Γκοντό",
        details: [
          { label: "Année", value: "2020–2021" },
          { label: "D'après", value: "Samuel Beckett" },
          { label: "Forme", value: "Représentation en ligne" },
        ],
        description: ["[À REMPLACER] Courte description du spectacle."],
        videoId: "5FIIp7Lln_4",
      },
      {
        title: "Γυναίκα Loser",
        details: [
          { label: "Année", value: "2022" },
          { label: "Autrice", value: "Vili Sotiropoulou" },
          { label: "Note", value: "Première création sur scène" },
        ],
        description: ["[À REMPLACER] Courte description du spectacle."],
      },
      {
        title: "Σιγά τα αίματα!",
        details: [{ label: "Auteur", value: "Akis Dimou" }],
        description: ["[À REMPLACER] Courte description du spectacle."],
        videoId: "VOJpWu76xN0",
      },
      {
        title: "Δολοφονικές αναμνήσεις",
        details: [
          {
            label: "D'après",
            value: "« Souvenirs Assassins » de Serge Valetti",
          },
          { label: "Traduction", value: "Les élèves de l'atelier" },
        ],
        description: ["[À REMPLACER] Courte description du spectacle."],
        videoId: "6G60HXuyqvg",
      },
      {
        title: "Speed date",
        details: [{ label: "Auteur", value: "Giorgos Iliopoulos" }],
        description: ["[À REMPLACER] Courte description du spectacle."],
      },
    ],
  },

  members: {
    title: "L'équipe",
    intro:
      "[À REMPLACER] Une courte introduction à celles et ceux qui font vivre la compagnie.",
    people: [
      {
        name: "[À REMPLACER] Prénom Nom",
        role: "Comédien·ne",
        bio: "[À REMPLACER] Une ou deux phrases de présentation.",
      },
      {
        name: "[À REMPLACER] Prénom Nom",
        role: "Comédien·ne",
        bio: "[À REMPLACER] Une ou deux phrases de présentation.",
      },
      {
        name: "[À REMPLACER] Prénom Nom",
        role: "Scénographie",
        bio: "[À REMPLACER] Une ou deux phrases de présentation.",
      },
    ],
  },

  director: {
    title: "Mise en scène",
    name: "[À REMPLACER] Prénom Nom",
    body: [
      "[À REMPLACER] Une courte biographie de la metteuse ou du metteur en scène : " +
        "parcours, formation, démarche.",
      "[À REMPLACER] Un second paragraphe sur sa vision du théâtre et son rôle au " +
        "sein de la compagnie.",
    ],
  },

  community: {
    title: "Le lieu qui nous accueille",
    body: [
      "[À REMPLACER] Présentez la structure, le théâtre ou la communauté qui vous " +
        "héberge et soutient votre travail.",
    ],
    link: {
      label: "[À REMPLACER] Site du lieu",
      href: "https://example.org",
    },
  },

  contact: {
    title: "Contact",
    body: [
      "[À REMPLACER] Comment nous joindre pour une programmation, une collaboration " +
        "ou toute autre demande.",
    ],
    email: "contact@example.org",
    socials: [
      { label: "Instagram", href: "https://instagram.com/" },
      { label: "Facebook", href: "https://facebook.com/" },
    ],
  },
};
