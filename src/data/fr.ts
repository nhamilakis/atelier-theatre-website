import type { SiteContent } from "./types";
import { galleryFor } from "./showPhotos";

// --- Images & content

import homePageBanner from "../assets/home-page-banner.jpg";
import TeamBanner from "../assets/team-banner.jpg";
import AthinaImage from "../assets/athina.jpg";

// Community page photos
import CommunityHouse from "../assets/misc/Maison de la Grèce.jpg";
import CommunityProva from "../assets/misc/prova.jpg";
import CommunityBackstage from "../assets/misc/backstage-godot.jpg";

// ---------------- Show Images ----------------
import GynaikaLooserPoster from "../assets/shows/2022_GYNAIKA LOSER/AFFICHE WINNER-logos.jpg";
import GynaikaLooserLeaflet from "../assets/shows/2022_GYNAIKA LOSER/PROGRAMMA WINNER.pdf";

import SigaTaAimataPoster from "../assets/shows/2023_SIGA TA AIMATA/SIGA-TA-AIMATA_2023.jpg";
import SigaTaAimataLeaflet from "../assets/shows/2023_SIGA TA AIMATA/PROGRAMMA SIGA TA AIMATA.pdf";

import SouvenirsAssasinPoster from "../assets/shows/2024_SOUVENIRS ASSASSINS/AFISA_DOLOFONOS.jpg";
import SouvenirAssasinLeaflet from "../assets/shows/2024_SOUVENIRS ASSASSINS/PROGRAMMA ADULTES 2024.pdf";

import SpeedDatePoster from "../assets/shows/2025_SPEED DATE/AFISA_ADULTES_2025_final.jpg";
import SpeedDateLeaflet from "../assets/shows/2025_SPEED DATE/BROCHURE ADULTES 2025.pdf";

import ParamithiPoster from "../assets/shows/2026_PARAMYTHI/AFISA_ADULTES_2026_final_2.jpg";
import ParamithiLeaflet from "../assets/shows/2026_PARAMYTHI/BROCHURE ADULTES 2026.pdf";

import GODOTPoster from "../assets/shows/2021_GODOT/AFISA GODOT-wide.jpg";

import AkropoliPoster from "../assets/shows/akropoli.jpg";

// -----------------------------------------------------------------------------
// FRENCH CONTENT / CONTENU FRANÇAIS
// -----------------------------------------------------------------------------

export const fr: SiteContent = {
  meta: {
    title: "Ateliers de théâtre",
    description:
      "[À REMPLACER] Troupe de théâtre — présentation, créations et contact.",
  },

  nav: {
    shows: "Nos spectacles",
    team: "L'équipe",
    community: "La communauté",
    contact: "Contact",
  },

  hero: {
    header_title: "",
    title:
      "Les Ateliers de théâtre de la Communauté Hellénique de Paris et des environs",
    // [À REMPLACER] Une phrase qui résume l'esprit de la troupe.
    tagline: "",
    footer_title:
      "Ateliers de théâtre de la Communauté Hellénique de Paris et des environs",
  },

  company: {
    title:
      "L'Atelier de théâtre pour adultes de la Communauté Hellénique de Paris et des environs",
    body: `L’Atelier de théâtre pour adultes est né en 2019 comme troupe de théâtre de Grecs de la diaspora, à l'initiative
      de la Communauté Hellénique de Paris et des environs et d'Athina Axiotou. En 2020
      et 2021, l'atelier a adapté son activité théâtrale aux restrictions imposées par la
      pandémie et a présenté en ligne « Lysistrata - Nous restons à l'Acropole », d'après
      l'œuvre d'Aristophane Lysistrata, et « En attendant notre Godot », d'après l'œuvre de Samuel
      Beckett. En 2022, la première représentation sur scène a été accueillie avec succès,
      « Γυναίκα Loser » de Vili Sotiropoulou ; les saisons suivantes ont suivi, dans
      l'ordre, les spectacles « Σιγά τα αίματα » d'Akis Dimou, « Souvenirs assassins » —
      d'après l'œuvre de Serge Valetti, traduite par les élèves de l'atelier,
      « Speed date » de Giorgos Iliopoulos et notre dernier spectacle « Παραμύθι χωρίς όνομα » (Un conte sans nom) de Iakovos Kambanellis.`,
  },

  home: {
    aboutTitle: "Qui sommes-nous",
    newsTitle: "Actualités",
    latestShowTitle: "Notre spectacle le plus récent",
    banner: homePageBanner,
    articles: {
      title: "Articles & mentions",
      intro: "",
      items: [
        {
          label: "« Un conte sans nom » présenté avec succès à Paris",
          href: "https://www.thesnewsline.com/parisi-to-theatriko-ergastiri-tis-ellinikis-koinotitas-parousiase-me-epitychia-to-paramythi-choris-onoma/",
          source: "thesnewsline.com · 2026 (en grec)",
        },
        {
          label: "Le théâtre amateur grec de la diaspora (photos)",
          href: "https://www.thesnewsline.com/parisi-to-elliniko-erasitechniko-theatro-sti-diaspora-fotografies/",
          source: "thesnewsline.com · 2025 (en grec)",
        },
        {
          label: "« Lysistrata ou Nous restons à l'Acropole »",
          href: "https://www.clickatlife.gr/theatro/story/164846",
          source: "clickatlife.gr · 2020 (en grec)",
        },
        {
          label:
            "« Lysistrata reste à l'Acropole » cette année, à cause du coronavirus",
          href: "https://www.ethnos.gr/culture/article/106524/hlysistrathemeineakropolhfetoslogokoronoioy",
          source: "ethnos.gr · 2020 (en grec)",
        },
        {
          label:
            "Athina Axiotou : l’âme de la troupe de théâtre OposOpos à Paris",
          href: "https://hephaestuswien.com/athina-auxentiou-opos-opos/",
          source: "hephaestuswien.com - 2020",
        },
        {
          label: "Interview d'Athina Axiotou sur Real FM",
          href: "https://soundcloud.com/athina-axiotou",
          source: "Real FM · SoundCloud (en grec)",
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

  shows: {
    title: "Nos spectacles",
    leafletLabel: "Dépliant",
    galleryLabel: "Galerie",
    creditsLabel: "Distribution",
    // [À REMPLACER] Une courte introduction aux spectacles de la compagnie.
    intro: "",
    items: [
      {
        slug: "paramythi",
        title: "Παραμύθι χωρίς όνομα",
        subtitle: "Saison théâtrale 2025–2026",
        poster: { image: ParamithiPoster, alt: "Affiche du spectacle" },
        description: `
        « Παραμύθι χωρίς όνομα » (Un conte sans nom) est la pièce de Iakovos Kambanellis,
          inspirée du livre homonyme de Pénélope Delta. Les paroles des chansons ont été
          mises en musique par Manos Hadjidakis.

          « Et si nous avions eu tort d'attendre tout d'ailleurs ? Et si notre pays avait
          tout, et que nous ne l'avions pas vu parce que nous regardions de travers ? »

          Le royaume est en pleine décadence… Le couple royal, depuis longtemps incapable de
          redresser la situation, s'apprête à quitter le pays, malgré les objections de son
          fils. Le peuple a faim, souffre, peine de plus en plus à joindre les deux bouts au
          quotidien. Seul un miracle — l'aide financière demandée (et pas pour la première
          fois…) à l'Oncle Roi — pourrait sauver la situation. Et oui, le prêt est arrivé une
          fois de plus ! Ou peut-être pas, cette fois-ci ? La caisse envoyée par l'oncle
          contient-elle vraiment de l'argent, ou autre chose ?
        `,
        leaflet: [
          {
            label: "Dépliant du spectacle — Mai 2026",
            file: ParamithiLeaflet,
          },
        ],
        gallery: galleryFor(
          "2026_PARAMYTHI",
          "Photo de la représentation « Un conte sans nom »",
        ),
        videos: [
          {
            label: "Teaser du spectacle — Mai 2026",
            videoId: "cJKA2SQghx8",
          },
        ],
        /*
        // From description
        // <br/>
        //
        // #### Musique & chansons
        //
        // <br/>
        // Avec la participation de l'Atelier de chant grec, dans l'œuvre homonyme de Manos
        // Hadjidakis, sous la direction de Katerina Fotinaki, qui joue de la guitare sur scène.

        details: [
          { label: "Année", value: "2025–2026" },
          { label: "Auteur", value: "Iakovos Kambanellis" },
          {
            label: "Mise en scène & direction artistique",
            value: "Athina Axiotou",
          },
          { label: "Assistante & secrétariat", value: "Kleio Parisi" },
          {
            label: "Décors",
            value:
              "Athina Axiotou, Stéphane Delaunay, Nikos Hamilakis, Nikos Fertakis, Elena Mylona, Evgenia Strati, Paschalis Pelitaris",
          },
          { label: "Affiche", value: "Elena Mylona" },
          {
            label: "Programme",
            value: "Kleio Parisi, Elena Mylona, Athina Axiotou",
          },
          {
            label: "Support technique",
            value: "Stéphane Delaunay, Periklis Akogiounoglou",
          },
          { label: "Direction musicale", value: "Katerina Fotinaki" },
        ],
        credits: [
          {
            label: "Distribution (par ordre d'apparition)",
            roles: [
              { role: "Le Roi", name: "Nikos Hamilakis" },
              { role: "La Reine", name: "Evgenia Strati" },
              { role: "Le Prince", name: "Tasos Xenakis" },
              { role: "Polykarpos", name: "Domingo Aguilera Sánchez" },
              { role: "Maria", name: "Ifigenia Nikolakopoulou" },
              { role: "Juge / Femme", name: "Anastasia Vrana" },
              { role: "La mère pauvre", name: "Elena Mylona" },
              { role: "Le tavernier", name: "Maria Kostopoulou" },
              { role: "Spyros", name: "Marina Nikolidaki" },
              { role: "Le forgeron", name: "Niki Papailiaki" },
              { role: "Maître d'œuvre / Le muet", name: "Kleio Parisi" },
              { role: "Giannis", name: "Christina Pappa" },
              { role: "Michalis", name: "Irini Giannopoulou" },
              { role: "Philippos", name: "Emilia Patera" },
              { role: "Theodoros", name: "Sofia Slaftsaki" },
              { role: "Le boiteux", name: "Nikos Fertakis" },
              { role: "L'amiral", name: "Dimitris Kalogirou-Valtis" },
              { role: "Le maître", name: "Paschalis Pelitaris" },
              { role: "Guest", name: "Konstantinos Delaunay Axiotis" },
            ],
          },
          {
            label: "Chantent (par ordre d'apparition)",
            roles: [
              { role: "Prologue", name: "Maria Kostopoulou" },
              { role: "« Du forgeron »", name: "Seta Theodoridou" },
              { role: "« Du vieux marin »", name: "Haris Voulgaris" },
              { role: "« Du brave »", name: "Konstantinos Hatziantoniou" },
              { role: "Chanson d'amour", name: "Evgenia Strati" },
              { role: "« Hector et Andromaque »", name: "Olga Kannavou" },
              { role: "Épilogue", name: "Stefania Hounta" },
            ],
          },
        ],
        */
      },
      {
        slug: "speed-date",
        title: "Speed date",
        subtitle: "Saison théâtrale 2024–2025",
        poster: { image: SpeedDatePoster, alt: "Affiche du spectacle" },
        description: `
        Douze personnages si différents les uns des autres, réunis dans un même lieu avec un
        objectif commun : ce soir, ils doivent trouver leur moitié… Des visages
        d'aujourd'hui, des gens d'à côté que nous avons tous croisés quelque part, chacun
        avec ses problèmes, son univers, ses démons et ses ambitions, se retrouvent cette
        nuit dans un seul but : former un couple ! La pression du temps, mais aussi l'effort
        et l'angoisse d'être acceptés, créent un environnement dense de conflits et de
        rebondissements qui, à grandes doses d'humour, composent une galerie révélatrice de
        personnages et de comportements contemporains.
        `,
        leaflet: [
          {
            label: "Dépliant du spectacle — Mai 2025",
            file: SpeedDateLeaflet,
          },
        ],
        gallery: galleryFor(
          "2025_SPEED DATE",
          "Photo de la représentation « Speed date »",
        ),
        /*
        details: [
          { label: "Année", value: "2024–2025" },
          { label: "Auteur", value: "Giorgos Iliopoulos" },
          {
            label: "Mise en scène & direction artistique",
            value: "Athina Axiotou",
          },
          { label: "Assistante & secrétariat", value: "Kleio Parisi" },
          { label: "Affiche", value: "Elena Mylona" },
          { label: "Programme", value: "Kleio Parisi, Elena Mylona" },
          {
            label: "Collaborateur externe & support technique",
            value: "Stéphane Delaunay",
          },
        ],
        credits: [
          {
            label: "Distribution (par ordre d'apparition)",
            roles: [
              { role: "La présentatrice", name: "Irini Giannopoulou" },
              { role: "Niki", name: "Sofia Slaftsaki / Niki Papailiaki" },
              { role: "Alexandros", name: "Katerina Premeti" },
              { role: "Myrto", name: "Elena Mylona" },
              { role: "Haritos", name: "Nikos Fertakis" },
              { role: "Elli", name: "Danai Leventakou / Marina Nikolidaki" },
              { role: "Dimitris", name: "Domingo Aguilera Sánchez" },
              { role: "Tina", name: "Kleio Parisi / Anastasia Vrana" },
              { role: "Kostas", name: "Paul Béranger" },
              { role: "Lykourgos", name: "Nikos Hamilakis" },
              { role: "Maira", name: "Evgenia Strati" },
              {
                role: "Fani",
                name: "Emilia Patera / Ifigenia Nikolakopoulou",
              },
              { role: "Petros", name: "Tasos Xenakis" },
            ],
          },
        ],
        */
      },
      {
        slug: "souvenirs-assassins",
        title: "Δολοφονικές αναμνήσεις",
        subtitle: "Saison théâtrale 2023–2024",
        poster: { image: SouvenirsAssasinPoster, alt: "Affiche du spectacle" },
        description: `
        <ul style="list-style-type: '- ';">
          <li> "Dites-moi, monsieur, tout cela se passe-t-il dans votre tête ?" </li>
          <li> "Oui, pourquoi ?"</li>
          <li> "Parfait…" </li>
        </ul>

        <br/>

        Un comédien monte une fois de plus sur scène, décidé à dérouler devant son public le
        fil de sa vie. Le premier souvenir de son enfance. Le premier vinyle qu'il a tenté
        d'acheter. Le premier tour de magie qu'il a appris. Ses premières vacances au bord de
        la mer, à Golfe-Juan, et son premier flirt. Les premiers amours et les premiers
        drames familiaux… Les premiers signes que…

        <br/>

        "Mais ce n'est pas un homme, c'est un immeuble !"
        `,
        leaflet: [
          {
            label: "Dépliant du spectacle — Juin 2024",
            file: SouvenirAssasinLeaflet,
          },
        ],
        videos: [{ videoId: "6G60HXuyqvg" }],
        gallery: galleryFor(
          "2024_SOUVENIRS ASSASSINS",
          "Photo de la représentation « Souvenirs assassins »",
        ),
        /*
        details: [
          { label: "Année", value: "2023–2024" },
          {
            label: "D'après",
            value: "« Souvenirs Assassins » de Serge Valetti",
          },
          {
            label: "Mise en scène & direction artistique",
            value: "Athina Axiotou",
          },
          { label: "Assistante & secrétariat", value: "Kleio Parisi" },
          { label: "Affiche", value: "Elena Mylona" },
          {
            label: "Programme",
            value: "Kleio Parisi, Elena Mylona",
          },
          {
            label: "Collaborateur externe & support technique",
            value: "Stéphane Delaunay",
          },
          { label: "Traduction", value: "Les élèves de l'atelier" },
        ],
        credits: [
          {
            label: "Distribution (par ordre d'apparition)",
            roles: [
              { role: "", name: "Giannis Baroumas" },
              { role: "", name: "Kalliopi Fragkioudaki" },
              { role: "", name: "Niki Papailiaki" },
              { role: "", name: "Nikos Hamilakis" },
              { role: "", name: "Kleio Parisi" },
              { role: "", name: "Domingo Aguilera Sánchez" },
              { role: "", name: "Sofia Slaftsaki" },
              { role: "", name: "Panagiotis Zachariadis" },
              { role: "", name: "Gogo Kanellaki" },
              { role: "", name: "Evgenia Strati" },
              { role: "", name: "Elena Mylona" },
              { role: "", name: "Vasiliki Missiou" },
              { role: "", name: "Anastasia Vrana" },
              { role: "", name: "Ippokratis Stampouloglou" },
              { role: "", name: "Konstantina Partasidou" },
              { role: "", name: "Melina Skourla" },
              { role: "", name: "Sotiris Konstantis" },
            ],
          },
        ],
        */
      },
      {
        slug: "siga-ta-aimata",
        title: "Σιγά τα αίματα!",
        subtitle: "Saison théâtrale 2022–2023",
        poster: { image: SigaTaAimataPoster, alt: "Affiche du spectacle" },
        description: `
          L'Orestie d'Eschyle : la seule trilogie antique conservée, elle remporta le premier
          prix aux Dionysies en 458 av. J.-C. Elle traite des événements de la maison royale
          des Atrides, et en particulier de la tragédie familiale qui suit le retour
          d'Agamemnon à Argos après la guerre de Troie…
          « Oresteia the next generation » est une parodie de l'Orestie, qui commente en
          parallèle, sur un ton comique, la réalité néo-hellénique contemporaine. Une troupe
          de comédiens amateurs se prépare fiévreusement (ou pas… c'est le producteur qui en
          jugera !) à présenter sur scène certains épisodes de la trilogie. Agamemnon revient
          dans son royaume après 10 ans. Son épouse Clytemnestre, malgré les objections de sa
          sœur Hélène, projette de l'assassiner. Leur fille Électre, avec ses frères et sœurs
          Iphigénie (Fifi) et Oreste, et… son ami Pylade, projette à son tour d'assassiner ses
          parents. La prophétesse Cassandre tente d'avertir Agamemnon tandis qu'Eschyle
          s'efforce de maintenir les équilibres…
          `,
        leaflet: [
          {
            label: "Dépliant du spectacle — Juin 2023",
            file: SigaTaAimataLeaflet,
          },
        ],
        videos: [{ videoId: "VOJpWu76xN0" }],
        gallery: galleryFor(
          "2023_SIGA TA AIMATA",
          "Photo de la représentation « Σιγά τα αίματα! »",
        ),
        /*
        details: [
          { label: "Année", value: "2022–2023" },
          { label: "Auteur", value: "Akis Dimou" },
          {
            label: "Mise en scène & direction artistique",
            value: "Athina Axiotou",
          },
          { label: "Assistante & secrétariat", value: "Kleio Parisi" },
          { label: "Affiche", value: "Elena Mylona" },
          { label: "Programme", value: "Kleio Parisi, Elena Mylona" },
          { label: "Direction musicale & piano", value: "Olga Kannavou" },
          { label: "Chorégraphie tango", value: "Melina Skourla" },
          {
            label: "Collaborateur externe & support technique",
            value: "Stéphane Delaunay",
          },
        ],
        credits: [
          {
            label: "Distribution (par ordre d'apparition)",
            roles: [
              { role: "Eschyle", name: "Sotiris Konstantis" },
              {
                role: "Clytemnestre",
                name: "Natasa Saridi, Kleio Parisi, Evgenia Strati, Elena Mylona",
              },
              {
                role: "Hélène",
                name: "Sofia Slaftsaki, Elena Mylona, Anastasia Vrana",
              },
              { role: "Agamemnon", name: "Ippokratis Stampouloglou" },
              {
                role: "Cassandre",
                name: "Katerina Premeti, Irini Giannopoulou",
              },
              { role: "Électre", name: "Lemonthea Grigoriadou, Zoi Fragkaki" },
              { role: "Iphigénie", name: "Gogo Kanellaki, Melina Skourla" },
              { role: "Oreste", name: "Nikos Hamilakis" },
              { role: "Pylade", name: "Guelfo Ascanelli" },
              { role: "Theofylaktos Besikiotis", name: "Sofia Slaftsaki" },
            ],
          },
        ],
        */
      },
      {
        slug: "gynaika-loser",
        title: "Γυναίκα Loser",
        subtitle: "Saison théâtrale 2021–2022",
        poster: { image: GynaikaLooserPoster, alt: "Affiche du spectacle" },
        description: `
          « Γυναίκα Loser » suit le parcours de la femme contemporaine, de l'adolescence à
          l'âge adulte : des libérales des années 80 et des carriéristes solitaires et
          accomplies des années 2000, jusqu'aux désespérées de la crise. Les femmes de la
          pièce partagent leurs histoires à travers trois décennies et de nombreux thèmes :
          l'amour, le sexe, l'amitié, la psychanalyse, la solitude, la carrière, le chômage,
          la ménopause, l'ascension et la chute de la classe moyenne. Et bien sûr, elles ne
          sont pas seules. Les hommes, ensemble ou séparément, sont là, sur le même voyage,
          tantôt dans le rire, tantôt dans les larmes, sur un chemin vers le « Connais-toi
          toi-même ».
          `,
        leaflet: [
          {
            label: "Dépliant du spectacle — Mai 2022",
            file: GynaikaLooserLeaflet,
          },
        ],
        gallery: galleryFor(
          "2022_GYNAIKA LOSER",
          "Photo de la représentation « Γυναίκα Loser »",
        ),
        /*
        details: [
          { label: "Année", value: "2021–2022" },
          { label: "Autrice", value: "Vili Sotiropoulou" },
          {
            label: "Mise en scène & direction artistique",
            value: "Athina Axiotou",
          },
          { label: "Assistante & secrétariat", value: "Kleio Parisi" },
          { label: "Programme", value: "Niki Papailiaki, Elena Mylona" },
          { label: "Affiche", value: "Elena Mylona" },
          {
            label: "Collaborateur externe & support technique",
            value: "Stéphane Delaunay",
          },
          { label: "Note", value: "Première création sur scène" },
        ],
        credits: [
          {
            label: "Distribution (par ordre d'apparition)",
            roles: [
              { role: "La nonne (narratrice)", name: "Niki Papailiaki" },
              {
                role: "La nonne plus jeune",
                name: "Zoi Fragkaki, Margarita Bosmi, Anastasia Vrana, Natasa Saridi, Elena Mylona, Christiana Sachini",
              },
              { role: "Le psychanalyste", name: "Giorgos Psaltopoulos" },
              { role: "Tasoulis", name: "Tasos Poulios" },
              { role: "Telis / Alexios", name: "Sotiris Konstantis" },
              { role: "Giannis / Christos", name: "Nikos Hamilakis" },
              { role: "Kostas", name: "Ippokratis Stampouloglou" },
              {
                role: "Peny",
                name: "Evgenia Strati, Natasa Saridi, Elena Mylona, Sofia Slaftsaki",
              },
              { role: "Le patron", name: "Giorgos Psaltopoulos" },
              { role: "Le gourou / Le Français", name: "Sotiris Konstantis" },
              { role: "Doros", name: "Tasos Poulios" },
              { role: "Stobos", name: "Ippokratis Stampouloglou" },
              { role: "Nounou (Sofaki)", name: "Margarita Bosmi" },
              { role: "Nounou (la Bulgare)", name: "Anastasia Vrana" },
              { role: "Nounou (la Roumaine)", name: "Kleio Parisi" },
              { role: "Nounou (la Philippine)", name: "Zoi Fragkaki" },
              { role: "Nounou (Youlitska)", name: "Evgenia Strati" },
              { role: "Mirella", name: "Konstantina Partasidou" },
              { role: "Giorgos", name: "Nikos Hamilakis" },
              {
                role: "Collègues / Mamans",
                name: "Irini Giannopoulou, Kleio Parisi, Christiana Sachini",
              },
              {
                role: "La chasseuse d'hommes (narratrice)",
                name: "Kleio Parisi",
              },
              {
                role: "La chasseuse d'hommes",
                name: "Evgenia Strati, Anastasia Vrana, Sofia Slaftsaki, Christiana Sachini, Irini Giannopoulou",
              },
              { role: "Markos", name: "Ippokratis Stampouloglou" },
              { role: "Lena / Angelos", name: "Konstantina Partasidou" },
              { role: "La thérapeute", name: "Zoi Fragkaki" },
              { role: "Spyrakos", name: "Sotiris Konstantis" },
              { role: "Theofilos", name: "Tasos Poulios" },
              { role: "L'avocat", name: "Nikos Hamilakis" },
              {
                role: "Les femmes",
                name: "Zoi Fragkaki, Elena Mylona, Natasa Saridi",
              },
            ],
          },
        ],
        */
      },
      {
        slug: "godot",
        title: "Περιμένοντας τον δικό μας Γκοντό",
        subtitle: "Saison théâtrale 2020–2021",
        details: [
          { label: "Année", value: "2020–2021" },
          {
            label: "D'après",
            value: "En attendant Godot de Samuel Beckett",
          },
          {
            label: "Mise en scène & direction artistique",
            value: "Athina Axiotou",
          },
          {
            label: "Support technique — couteau suisse",
            value: "Nikos Hamilakis",
          },
          {
            label: "Secrétariat & assistante à tout faire",
            value: "Kleio Parisi",
          },
          {
            label: "Photographe & assistante à tout faire",
            value: "Elena Mylona",
          },
          { label: "Collaborateur externe", value: "Stéphane Delaunay" },
          { label: "Décor", value: "Pathoulas Xavier" },
          { label: "Transports & déménagements", value: "« O kyr-Mitsos »" },
          { label: "Forme", value: "Représentation en ligne" },
        ],
        poster: { image: GODOTPoster, alt: "Affiche du spectacle" },
        description: `
        “Dans une ruelle solitaire, sous un arbre squelettique et à côté d’un banc oublié, deux sans-abris, deux voyous chapardeurs, un couple marié, deux médecins, une influenceuse et sa follower, deux vieilles dames, deux journalistes, deux policiers, deux jeunes éméchés, se succèderont, sans jamais se rencontrer, pris au piège d’une attente perpétuelle”

        Dés la création de l’Atelier Théâtre de la Communauté Hellénique de Paris et environs, en octobre 2019, la metteuse en scène Athina Axiotou a dû innover et élaborer de nouvelles approches du théâtre dans le contexte de restrictions que la pandémie nous a imposées.

        Si avec la mise en scéne d’un texte revisité de Lysistrata d’Aristophane, elle avait réussi à montrer la nécessité de résister aux nouvelles atterrantes reçues en début de la pandémie, cette année elle a choisi de travailler sur le ressenti du temps suspendu et sur “l’absurde” de l’attente que nous avons endurée ces derniers temps, en s'appuyant sur la piéce de S. Beckett “En attendant Godot”.

        La majorité des répétitions se sont faites en ligne, trés peu de répétitions en présentiel ont pu être realisées, entre la levée des restrictions de déplacement et la représentation finale.

        Les décors ont été montés à la maison de la Gréce avec le peu de moyens dont nous disposions et surtout grâce à l’aide de tous les membres de la troupe.

        La metteuse en scène a su tourner à sont avantage tous les obstacles recontrés et cette expérience théâtrale fût pour nous tous salutaire, une sorte de reméde contre la rupture du lien social que nous avons vécue.
        `,
        videos: [{ videoId: "5FIIp7Lln_4" }],
        credits: [
          {
            label: "Les sans-abris",
            roles: [
              { role: "Estragon", name: "Bosmi Margarita" },
              { role: "Vladimir", name: "Parisi Kleio" },
            ],
          },
          {
            label: "Les petits voleurs",
            roles: [
              { role: "Estragon", name: "Baroumas Giannis" },
              { role: "Vladimir", name: "Stampouloglou Ippokratis" },
            ],
          },
          {
            label: "Le couple",
            roles: [
              { role: "Estragon", name: "Baroumas Giannis" },
              { role: "Vladimir", name: "Missiou Vasiliki" },
            ],
          },
          {
            label: "Les médecins",
            roles: [
              { role: "Estragon", name: "Slaftsaki Sofia" },
              { role: "Vladimir", name: "Strati Evgenia" },
            ],
          },
          {
            label: "Les influenceurs",
            roles: [
              { role: "Estragon", name: "Menagia Amalthia" },
              { role: "Vladimir", name: "Vrana Anastasia" },
            ],
          },
          {
            label: "Les grand-mères",
            roles: [
              { role: "Estragon", name: "Mitrogogou Anastasia" },
              { role: "Vladimir", name: "Mylona Elena" },
            ],
          },
          {
            label: "Les journalistes",
            roles: [
              { role: "Estragon", name: "Neokleous Irini" },
              { role: "Vladimir", name: "Papailiaki Niki" },
            ],
          },
          {
            label: "Les policiers",
            roles: [
              { role: "Estragon", name: "Sachini Christiana" },
              { role: "Vladimir", name: "Poulios Tasos" },
            ],
          },
          {
            label: "Les jeunes",
            roles: [
              { role: "Estragon", name: "Fragkaki Zoi" },
              { role: "Vladimir", name: "Hamilakis Nikos" },
            ],
          },
          {
            label: "Par ordre d'apparition",
            roles: [
              {
                role: "Pozzo",
                name: "Hamilakis Nikos, Giannopoulou Irini, Stampouloglou Ippokratis",
              },
              { role: "Lucky", name: "Konstantis Sotiris" },
              { role: "Le garçon", name: "Psaltopoulos Giorgos" },
            ],
          },
          {
            label: "Musique",
            roles: [
              {
                role: "« L'horloge cassée »",
                name: "Composition et interprétation Konstantinos Delaunay Axiotis",
              },
            ],
          },
        ],
        gallery: galleryFor(
          "2021_GODOT",
          "Photo de la représentation « En attendant notre Godot »",
        ),
      },
      {
        slug: "lysistrata",
        title: "Λυσιστράτη - Μένουμε Ακρόπολη",
        subtitle: "Saison théâtrale 2020–2021",
        details: [
          { label: "Année", value: "2019–2020" },
          { label: "D'après", value: "« Lysistrata » d'Aristophane" },
          {
            label: "Conception, mise en scène & montage",
            value: "Athina Axiotou",
          },
          {
            label: "Équipe technique « Ierapetra »",
            value: "Yannis Baroumas, Nicolas Hamilakis",
          },
          { label: "Partenaire extérieur", value: "Stéphane Delaunay" },
          {
            label: "Forme",
            value: "Représentation en ligne (première mondiale)",
          },
        ],
        poster: { image: AkropoliPoster, alt: "Affiche du spectacle" },
        description: `
        Pour la première année, et avec un grand succès, l'Atelier de théâtre pour adultes de
          la Communauté Hellénique de Paris et des environs a vu le jour. Dix-huit élèves et la
          metteuse en scène Athina Axiotou préparaient avec énergie la « Lysistrata »
          d'Aristophane, jusqu'à ce que l'épidémie de coronavirus nous oblige à interrompre les
          répétitions.

          Le confinement et l'isolement, loin de nous arrêter, sont devenus un défi pour
          continuer. Comment nos personnages réagiraient-ils si une nouvelle pandémie frappait
          Athènes en 411 av. J.-C. ? Ainsi, le « Nous restons à la maison » est devenu pour
          nous « Nous restons à l'Acropole ».

          Visioconférences, répétitions et tournages à distance ont rempli nos journées. Chacun
          a écrit son texte et confectionné costumes et décors avec ce qu'il avait chez lui.
          L'idée de départ, toute simple, est vite devenue une superproduction, avec de la
          prose, des chansons et beaucoup d'entrain.

          Nous sommes très fiers de présenter « Nous restons à l'Acropole » en première
          mondiale ! Les anachronismes, toujours avec licence poétique, ne sont pas fortuits !
        `,
        videos: [{ videoId: "F0eUPQy_FyY" }],
        credits: [
          {
            label: "",
            roles: [
              { role: "Epivoulos", name: "Baroumas Yannis" },
              { role: "Myrrhiné", name: "Bosmi Margarita" },
              { role: "Stratyllis", name: "Giannopoulou Eirini" },
              { role: "Anissalo", name: "Gogolou Anna" },
              { role: "L'enfant de Cinésias", name: "Hamilakis Nicolas" },
              { role: "Démaratos", name: "Kofos Dimitrios" },
              { role: "Proboulos", name: "Konstantis Sotiris" },
              { role: "Cléonice", name: "Menagia Amalthia" },
              { role: "Idothéa", name: "Militarou Elena" },
              { role: "Vatyllis", name: "Missiou Vasiliki" },
              { role: "Deinomahi", name: "Papailiaki Niki" },
              { role: "Clio l'Aixonienne", name: "Parisi Clio" },
              { role: "Strymodore", name: "Psaltopoulos Georges" },
              { role: "Lampito", name: "Slaftsaki Sofia" },
              { role: "Cinésias Péonidis", name: "Stampouloglou Ippokratis" },
              { role: "Lysistrata", name: "Strati Evgenia" },
              { role: "Drakis", name: "Vlahopoulos Stéphane" },
              { role: "Glaucinna", name: "Vrana Anastasia" },
            ],
          },
        ],
        gallery: galleryFor(
          "2020_AKROPOLI",
          "Photo de la représentation « Lysistrata ou Nous restons à l'Acropole »",
        ),
      },
    ],
  },

  team: {
    title: "L'équipe",
    photo: { image: TeamBanner, alt: "L'équipe" },
    director: {
      title: "Mise en scène & Enseignement",
      name: "Athina Axiotou",
      photo: { image: AthinaImage, alt: "Athina Axiotou" },
      body: `Athina Axiotou est comédienne, metteuse en scène et fondatrice de la troupe de
        théâtre Opos Opos à Paris. Au long de son parcours dans le milieu, elle a participé à
        de nombreux spectacles et a enseigné dans de nombreux ateliers de théâtre, dans
        divers arrondissements et écoles de Paris.`,
    },
    members: {
      title: "Les membres",
      year: "2025–2026",
      names: [
        { name: "Hamilakis Nikos" },
        { name: "Strati Evgenia" },
        { name: "Xenakis Tasos" },
        { name: "Aguilera Sánchez Domingo" },
        { name: "Nikolakopoulou Ifigenia" },
        { name: "Vrana Anastasia" },
        { name: "Mylona Elena" },
        { name: "Kostopoulou Maria" },
        { name: "Nikolidaki Marina" },
        { name: "Papailiaki Niki" },
        { name: "Parisi Kleio" },
        { name: "Pappa Christina" },
        { name: "Giannopoulou Irini" },
        { name: "Patera Emilia" },
        { name: "Slaftsaki Sofia" },
        { name: "Fertakis Nikos" },
        { name: "Kalogirou-Valtis Dimitris" },
        { name: "Pelitaris Paschalis" },
      ],
    },
  },

  community: {
    title: "La Communauté Hellénique de Paris et des environs",
    body: `Notre atelier de théâtre est né et a grandi au sein de la Communauté
      Hellénique de Paris et des environs. Dès la toute première année, la
      Communauté nous a accueillis, soutenus et accompagnés à chaque étape.

      Nos répétitions et nos cours ont toujours lieu à la Maison de la Grèce,
      ce lieu devenu une seconde maison pour nous tous.

      Forte d'une longue histoire au service de l'hellénisme de la diaspora, la
      Communauté entretient le lien vivant avec notre langue et notre culture —
      et nous sommes fiers d'en être une petite partie.`,
    images: [
      { image: CommunityHouse, alt: "La Maison de la Grèce" },
      { image: CommunityProva, alt: "Répétition de la troupe" },
      {
        image: CommunityBackstage,
        alt: "Dans les coulisses de notre spectacle en ligne",
      },
    ],
    link: {
      label: "Site de la Communauté",
      href: "https://communaute-hellenique.org/index.html",
    },
  },

  contact: {
    title: "Contact",
    body: `Nous serons ravis d'échanger avec vous — pour des informations sur les
      spectacles et les cours, pour une collaboration ou pour rejoindre la troupe.`,
    courses:
      "Les cours ont lieu chaque Mardi, 19:30 - 21:30, à la Maison de la Grèce.",
    email: "list.chpe@gmail.com",
    tel_communaute: "+33 (0)1 47 04 67 89",
    address:
      "Communauté Hellénique de Paris et des Environs, 9 Rue Mesnil, 75016 Paris, France",
    socials: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/theatrikoergastirienilikonCHPE",
        icon: "facebook",
      },
    ],
  },
};
