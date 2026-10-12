import type { SiteContent } from "./types";

// --- Images & content

import homePageBanner from "../assets/home-page-banner.jpg";

export const fr: SiteContent = {
  meta: {
    title: "Nom de la Compagnie — Théâtre",
    description:
      "[À REMPLACER] Compagnie théâtrale — présentation, créations et contact.",
  },

  nav: {
    shows: "Nos spectacles",
    team: "L'équipe",
    community: "La communauté",
    contact: "Contact",
  },

  hero: {
    header_title: "",
    title: "Nom de la Compagnie",
    tagline: "[À REMPLACER] Une phrase qui résume l'esprit de la troupe.",
    footer_title: "[À REMPLACER] Nom",
  },

  company: {
    title: "La compagnie",
    body: `[À REMPLACER] Présentez ici la compagnie : quand et comment elle est née,
      ce qui vous rassemble, la démarche artistique qui vous anime.

      [À REMPLACER] Un deuxième paragraphe pour préciser votre approche, vos
      influences ou les thèmes que vous aimez explorer sur scène.`,
  },

  home: {
    aboutTitle: "Qui sommes-nous",
    newsTitle: "Actualités",
    latestShowTitle: "Notre dernier spectacle",
    banner: homePageBanner,
    articles: {
      title: "Articles & mentions",
      intro:
        "[À REMPLACER] Publications et mentions de la compagnie dans la presse.",
      items: [
        {
          label: "[À REMPLACER] Titre de l'article",
          href: "https://example.org",
          source: "[À REMPLACER] Média / année",
        },
      ],
    },
    // Crowdfunding : à ajouter quand la campagne sera publique (masqué pour l'instant).
    // crowdfunding: {
    //   title: "Soutenez-nous",
    //   body: "[À REMPLACER] Texte de la campagne.",
    //   link: { label: "Soutenir le projet", href: "https://example.org" },
    // },
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
    intro:
      "[À REMPLACER] Une courte introduction aux spectacles de la compagnie.",
    items: [
      {
        slug: "paramythi",
        title: "Παραμύθι χωρίς όνομα",
        details: [
          { label: "Année", value: "2025–2026" },
          { label: "Auteur", value: "Iakovos Kambanellis" },
          { label: "Mise en scène", value: "Athina Axiotou" },
        ],
        description: "[À REMPLACER] Courte description du spectacle.",
      },
      {
        slug: "speed-date",
        title: "Speed date",
        details: [{ label: "Auteur", value: "Giorgos Iliopoulos" }],
        description: "[À REMPLACER] Courte description du spectacle.",
      },
      {
        slug: "souvenirs-assassins",
        title: "Δολοφονικές αναμνήσεις",
        details: [
          {
            label: "D'après",
            value: "« Souvenirs Assassins » de Serge Valetti",
          },
          { label: "Traduction", value: "Les élèves de l'atelier" },
        ],
        description: "[À REMPLACER] Courte description du spectacle.",
        videos: [{ videoId: "6G60HXuyqvg" }],
      },
      {
        slug: "siga-ta-aimata",
        title: "Σιγά τα αίματα!",
        details: [{ label: "Auteur", value: "Akis Dimou" }],
        description: "[À REMPLACER] Courte description du spectacle.",
        videos: [{ videoId: "VOJpWu76xN0" }],
      },
      {
        slug: "gynaika-loser",
        title: "Γυναίκα Loser",
        details: [
          { label: "Année", value: "2022" },
          { label: "Autrice", value: "Vili Sotiropoulou" },
          { label: "Note", value: "Première création sur scène" },
        ],
        description: "[À REMPLACER] Courte description du spectacle.",
      },
      {
        slug: "godot",
        title: "Περιμένοντας τον δικό μας Γκοντό",
        details: [
          { label: "Année", value: "2020–2021" },
          { label: "D'après", value: "Samuel Beckett" },
          { label: "Forme", value: "Représentation en ligne" },
        ],
        description: `
        “Dans une ruelle solitaire, sous un arbre squelettique et à côté d’un bac oublié, deux sans-abris, deux voyous chapardeurs, un couple marié, deux medecins, une influenceuse et sa follower, deux vieilles dames, deux journalistes, deux policiers, deux jeunes éméchés, se succèderont, sans jamais se rencontrer, pris au piège d’une attente perpétuelle”

        Dés la création de l’Atelier Théâtre de la Communauté Hellénique de Paris et environs, en octobre 2019, la metteuse en scène Athina Axiotou a dû innover et élaborer de nouvelles approches du théâtre dans le contexte de restrictions que la pandémie nous a imposées.

        Si l’année dernière, avec la mise en scéne d’un texte revisité de Lysistrata d’Aristophane, elle avait réussi à montrer la nécessité de résister aux nouvelles atterrantes reçues en début de la pandémie, cette année elle a choisi de travailler sur le ressenti du temps suspendu et sur “l’absurde” de l’attente que nous avons endurée ces derniers temps, en s'appuyant sur la piéce de S. Beckett “En attendant Godot”.

        La majorité des répétitions se sont faites en ligne, trés peu de répétitions en présentiel ont pu être realisées, entre la levée des restrictions de déplacement et la représentation finale.

        Les décors ont ét” montés à la maison de la Gréce avec le peu de moyens dont nous disposions et surtout grâce à l’aide de tous les membres de la troupe.

        La metteuse en scène a su tourner à sont avantage tous les obstacles recontrés et cette expérience théâtrale fût pour nous tous salutaire, une sotre de reméde contre la rupture du lien social que nous avons vécue.
        `,
        videos: [{ videoId: "5FIIp7Lln_4" }],
      },
      {
        slug: "lysistrata",
        title: "Λυσιστράτη ή Μένουμε Ακρόπολη",
        details: [
          { label: "Année", value: "2020–2021" },
          { label: "D'après", value: "Aristophane" },
          { label: "Forme", value: "Représentation en ligne" },
        ],
        description: "[À REMPLACER] Courte description du spectacle.",
        videos: [{ videoId: "F0eUPQy_FyY" }],
        // Exemple de distribution — décommentez et complétez :
        // credits: [
        //   { role: "Mise en scène", name: "Athina Axiotou" },
        // ],
      },
    ],
  },

  team: {
    title: "L'équipe",
    // Photo de groupe : placez le fichier dans src/assets/, importez-le en haut
    // du fichier puis décommentez la ligne suivante :
    // photo: { image: TeamPhoto, alt: "L'équipe" },
    director: {
      title: "Mise en scène & Enseignement",
      name: "Athina Axiotou",
      // Portrait : importez l'image en haut du fichier puis décommentez :
      // photo: { image: DirectorPhoto, alt: "Athina Axiotou" },
      body: `[À REMPLACER] Une courte biographie de la metteuse en scène :
        parcours, formation, démarche.

        [À REMPLACER] Un second paragraphe sur sa vision du théâtre et son rôle au
        sein de la compagnie.`,
    },
    members: {
      title: "Les membres",
      year: "2025–2026",
      names: [
        { name: "[À REMPLACER] Prénom Nom" },
        { name: "[À REMPLACER] Prénom Nom" },
        { name: "[À REMPLACER] Prénom Nom" },
      ],
    },
    alumni: {
      title: "Anciens membres",
      names: ["[À REMPLACER] Prénom Nom", "[À REMPLACER] Prénom Nom"],
    },
  },

  community: {
    title: "Le lieu qui nous accueille",
    body: `[À REMPLACER] Présentez la structure, le théâtre ou la communauté qui vous
      héberge et soutient votre travail.`,
    link: {
      label: "[À REMPLACER] Site du lieu",
      href: "https://example.org",
    },
  },

  contact: {
    title: "Contact",
    body: `[À REMPLACER] Comment nous joindre pour une programmation, une collaboration
      ou toute autre demande.`,
    email: "contact@example.org",
    socials: [
      { label: "Instagram", href: "https://instagram.com/" },
      { label: "Facebook", href: "https://facebook.com/" },
    ],
  },
};
