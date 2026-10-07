import type { SiteContent } from "./types";

// --- Images & content

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

import TestImg1 from "../assets/test_img/test-1.jpg";
import TestImg2 from "../assets/test_img/test-2.jpg";
import TestImg3 from "../assets/test_img/test-3.jpg";
import TestImg4 from "../assets/test_img/test-4.jpg";

// -----------------------------------------------------------------------------
// GREEK CONTENT / ΕΛΛΗΝΙΚΟ ΠΕΡΙΕΧΟΜΕΝΟ
// -----------------------------------------------------------------------------
// Εδώ βρίσκεται το ελληνικό κείμενο. Αλλάξτε τα κείμενα παρακάτω — χωρίς HTML.
// Κάθε μεγάλο μπλοκ είναι ένας πίνακας παραγράφων: μία παράγραφος ανά γραμμή.
// Το κείμενο [ΠΡΟΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗ] είναι προσωρινό και πρέπει να αλλάξει.
// -----------------------------------------------------------------------------

export const el: SiteContent = {
  meta: {
    title: "Θεατρικό Εργαστήρι Ενηλίκων",
    description:
      "[ΠΡΟΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗ] Θεατρική ομάδα — παρουσίαση, δημιουργίες και επικοινωνία.",
  },

  nav: {
    company: "Η ομάδα",
    shows: "Οι παραστάσεις μας",
    director: "Σκηνοθεσία",
    members: "Οι συντελεστές",
    community: "Ο χώρος",
    contact: "Επικοινωνία",
  },

  hero: {
    header_title: "Θεατρικό Εργαστήρι Ενηλίκων (Παντός Καιρού)",
    title:
      "Το Θεατρικό Εργαστήρι ενηλίκων της Ελληνικής Κοινότητας Παρισιού και περιχώρων (Παντός Καιρού)",
    tagline:
      "[ΠΡΟΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗ] Μια φράση που συνοψίζει το πνεύμα της ομάδας.",
  },

  company: {
    title:
      "Το Θεατρικό Εργαστήρι ενηλίκων της Ελληνικής Κοινότητας Παρισιού και περιχώρων",
    body: [
      `Ξεκίνησε το 2019 ως θεατρική ομάδα Ελλήνων της διασποράς από την Ελληνική Κοινότητα
      Παρισιού και περιχώρων και την Αθηνά Αξιώτου. Το 2020 και 2021 το εργαστήρι προσάρμοσε
      το θεατρικό δρώμενο στις απαγορεύσεις που επέβαλε η πανδημία και παρουσίασε διαδικτυακά το
      «Λυσιστράτη ή Μένουμε Ακρόπολη» βασισμένο στο έργο του Αριστοφάνη και το «Περιμένοντας
      τον δικό μας Γκοντό» βασισμένο στο έργο του Samuel Beckett. Το 2022 ανέβηκε με επιτυχία η
      πρώτη παράσταση επί σκηνής, το έργο «Γυναίκα Loser» της Βίλης Σωτηροπούλου, ενώ τις επόμενες
      χρονιές ακολούθησαν κατά σειρά οι παραστάσεις «Σιγά τα αίματα» του Άκη Δήμου, «Δολοφονικές
      αναμνήσεις», βασισμένη στο έργο του Serge Valetti «Souvenirs Assassins» σε μετάφρασή του από
      τους μαθητές του εργαστηρίου, και το «Speed date» του Γιώργου Ηλιόπουλου.`,
    ],
  },

  // ---------------------------------------------------------------------------
  // ΟΙ ΠΑΡΑΣΤΑΣΕΙΣ / SHOWS
  // Σειρά εμφάνισης: details → description → βίντεο → φυλλάδιο → φωτογραφίες →
  // διανομή. Όλα εκτός από title/description είναι προαιρετικά.
  //
  // Εικόνες & αρχεία: κάντε import στην κορυφή αυτού του αρχείου και μετά
  // αναφερθείτε σε αυτά στην παράσταση:
  //
  //   import godotPoster from "../assets/shows/godot.jpg";
  //   import godotLeaflet from "../assets/shows/godot-programma.pdf";
  //   import godot1 from "../assets/shows/godot/01.jpg";
  //   import godot2 from "../assets/shows/godot/02.jpg";
  //   ...
  //   poster:  { image: godotPoster, alt: "Αφίσα της παράστασης" },
  //   leaflet: godotLeaflet,                       // σύνδεσμος προς PDF
  //   gallery: [                                    // μικρογραφίες -> pop-up
  //     { image: godot1, alt: "Σκηνή 1" },
  //     { image: godot2, alt: "Σκηνή 2" },
  //   ],
  // ---------------------------------------------------------------------------
  shows: {
    title: "Οι παραστάσεις μας",
    leafletLabel: "Φυλλάδιο",
    galleryLabel: "Φωτογραφίες",
    creditsLabel: "Διανομή",
    intro: [
      "[ΠΡΟΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗ] Μια σύντομη εισαγωγή στις παραστάσεις της ομάδας.",
    ],
    items: [
      {
        title: "Παραμύθι χωρίς όνομα",
        details: [
          { label: "Έτος", value: "2025–2026" },
          { label: "Συγγραφέας", value: "Ιάκωβος Καμπανέλλης" },
          { label: "Σκηνοθεσία", value: "Αθηνά Αξιώτου" },
          { label: "Βοηθός - Γραμματειακή υποστήριξη", value: "Κλειώ Παρίση" },
          { label: "Επιμέλεια αφίσας", value: "Έλενα Μυλωνά" },
        ],
        poster: { image: ParamithiPoster, alt: "Αφίσα της παράστασης" },
        description: [
          `Το «Παραμύθι χωρίς όνομα» είναι το θεατρικό έργο του Ιάκωβου Καμπανέλλη που βασίζεται στο
            ομώνυμο βιβλίο της Πηνελόπης Δέλτα. Τους στίχους των τραγουδιών μελοποίησε ο Μάνος Χατζιδάκις.
                          «Λέτε να κάναμε λάθος που τα περιμέναμε όλα απ’ αλλού;
                        Λέτε να τα ‘χει όλα ο τόπος και να μην τα ‘δαμε γιατί κοιτάξαμε λοξά;»

            Το βασίλειο βρίσκεται σε πλήρη παρακμή... Το βασιλικό ζεύγος, εδώ και καιρό ανίκανο να ανατρέψει
            την κατάσταση, ετοιμάζεται να εγκαταλείψει τη χώρα, παρά τις αντιρρήσεις του γιου του. Ο λαός
            πεινάει, υποφέρει, δυσκολεύεται όλο και περισσότερο να τα βγάλει πέρα στην καθημερινή του
            ζωή. Μόνο ένα θαύμα, η οικονομική βοήθεια που είχε ζητηθεί (όχι για πρώτη φορά...) από τον θείο
            Βασιλιά, θα μπορούσε να σώσει την κατάσταση. Και ναι, το δάνειο ήρθε και πάλι! Ή μήπως αυτή τη
            φορά, όχι; Το κιβώτιο που έστειλε ο θείος περιέχει όντως χρήματα ή κάτι άλλο;
            `,
        ],
        leaflet: ParamithiLeaflet,
        credits: [
          { role: "Βασιλιάς", name: "Νίκος Χαμηλάκης" },
          { role: "Βασίλισσα", name: "Ευγενία Στράτη" },
          { role: "Πρίγκιπας", name: "Τάσος Ξενάκης" },
          { role: "Πολύκαρπος", name: "Domingo Aguilera Sánchez" },
          { role: "Μαρία", name: "Ιφιγένεια Νικολακοπούλου" },
          { role: "Δικαστής/Γυναίκα", name: "Αναστασία Βρανά" },
          { role: "Φτωχομάνα", name: "Έλενα Μυλωνά" },
          { role: "Ταβερνιάρης", name: "Μαρία Κωστοπούλου" },
          { role: "Σπύρος", name: "Μαρίνα Νικολιδάκη" },
          { role: "Σιδεράς", name: "Νίκη Παπαηλιάκη" },
          { role: "Πρωτομάστορας/Μουγκός", name: "Κλειώ Παρίση" },
          { role: "Γιάννης", name: "Χριστίνα Παππά" },
          { role: "Μιχάλης", name: "Ειρήνη Γιαννοπούλου" },
          { role: "Φίλιππος", name: "Αιμιλία Πατέρα" },
          { role: "Θεόδωρος", name: "Σοφία Σλαφτσάκη" },
          { role: "Κουτσός", name: "Νίκος Φερτάκης" },
          { role: "Ναύαρχος", name: "Δημήτρης Καλογήρου-Βαλτής" },
          { role: "Δάσκαλος", name: "Πασχάλης Πελιτάρης" },
          { role: "Guest εμφάνιση", name: "Κωνσταντίνος Delaunay Αξιώτης" },
        ],
        gallery: [
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
        ],
      },
      {
        title: "Speed date",
        details: [
          { label: "Έτος", value: "2024–2025" },
          { label: "Συγγραφέας", value: "Γιώργος Ηλιόπουλος" },
          { label: "Σκηνοθεσία", value: "Αθηνά Αξιώτου" },
        ],
        poster: { image: SpeedDatePoster, alt: "Αφίσα της παράστασης" },
        description: ["[ΠΡΟΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗ] Σύντομη περιγραφή της παράστασης."],
        leaflet: SpeedDateLeaflet,
        gallery: [
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
        ],
      },
      {
        title: "Δολοφονικές αναμνήσεις",
        details: [
          { label: "Έτος", value: "2023–2024" },
          {
            label: "Βασισμένο σε",
            value: "«Souvenirs Assassins» του Serge Valetti",
          },
          { label: "Σκηνοθεσία", value: "Αθηνά Αξιώτου" },
          { label: "Μετάφραση", value: "Μαθητές του εργαστηρίου" },
        ],
        poster: { image: SouvenirsAssasinPoster, alt: "Αφίσα της παράστασης" },
        description: ["[ΠΡΟΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗ] Σύντομη περιγραφή της παράστασης."],
        leaflet: SouvenirAssasinLeaflet,
        videoId: "6G60HXuyqvg",
        credits: [],
        gallery: [
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
        ],
      },
      {
        title: "Σιγά τα αίματα!",
        details: [
          { label: "Έτος", value: "2022–2023" },
          { label: "Συγγραφέας", value: "Άκης Δήμου" },
          {
            label: "Σκηνοθεσία - Καλλιτεχνική Επιμέλεια",
            value: "Αθηνά Αξιώτου",
          },
          { label: "Βοηθός - Γραμματειακή υποστήριξη", value: "Κλειώ Παρίση" },
          { label: "Επιμέλεια αφίσας", value: "Έλενα Μυλωνά" },
          {
            label: "Επιμέλεια προγράμματος",
            value: "Κλειώ Παρίση, Έλενα Μυλωνά",
          },
          { label: "Μουσική επιμέλεια - Πιάνο", value: "Όλγα Κανναβού" },
          { label: "Χορογραφία τανγκό", value: "Μελίνα Σκουρλά" },
          {
            label: "Εξωτερικός συνεργάτης - Τεχνική υποστήριξη",
            value: "Stéphane Delaunay",
          },
        ],
        poster: { image: SigaTaAimataPoster, alt: "Αφίσα της παράστασης" },
        description: [
          `
          Αισχύλου Ορέστεια: η μόνη σωζόμενη αρχαία τριλογία, κέρδισε το πρώτο βραβείο
          στα Διονύσια το 458 π.Χ. Ασχολείται με γεγονότα του βασιλικού οίκου των
          Ατρειδών, και ειδικότερα με την οικογενειακή τραγωδία έπειτα από την επιστροφή
          του Αγαμέμνονα στο Άργος μετά τον Τρωικό πόλεμο…
          Η Oresteia the next generation είναι μια παρωδία της Ορέστειας, σχολιάζοντας
          παράλληλα με κωμικό τρόπο και τη σύγχρονη νεοελληνική πραγματικότητα. Ένας
          θίασος ερασιτεχνών ηθοποιών προετοιμάζεται πυρετωδώς (ή και όχι… Ο παραγωγός
          θα το κρίνει!) να παρουσιάσει στη σκηνή ορισμένα επεισόδια της τριλογίας. Ο
          Αγαμέμνονας επιστρέφει στο βασίλειό του μετά από 10 χρόνια. Η σύζυγός του
          Κλυταιμνήστρα, παρά τις ενστάσεις της αδερφής της, της Ελένης, σχεδιάζει τη
          δολοφονία του. Η κόρη τους Ηλέκτρα, μαζί με τα αδέρφια της, Ιφιγένεια (Φιφή) και
          Ορέστη, και τον… φίλο του, τον Πυλάδη, σχεδιάζει με τη σειρά της τη δολοφονία των
          γονιών της. Η μάντισσα Κασσάνδρα προσπαθεί να προειδοποιήσει τον Αγαμέμνονα
          ενώ ο Αισχύλος να κρατήσει τις ισορροπίες…
          `,
        ],
        leaflet: SigaTaAimataLeaflet,
        videoId: "VOJpWu76xN0",
        credits: [
          { role: "Αισχύλος", name: "Σωτήρης Κωνσταντής" },
          {
            role: "Κλυταιμνήστρα",
            name: "Νατάσα Σαρίδη, Κλειώ Παρίση, Ευγενία Στράτη, Έλενα Μυλωνά",
          },
          {
            role: "Ελένη",
            name: "Σοφία Σλαφτσάκη, Έλενα Μυλωνά, Αναστασία Βρανά",
          },
          { role: "Αγαμέμνων", name: "Ιπποκράτης Σταμπούλογλου" },
          { role: "Κασσάνδρα", name: "Κατερίνα Πρεμέτη, Ειρήνη Γιαννοπούλου" },
          { role: "Ηλέκτρα", name: "Λεμονθέα Γρηγοριάδου, Ζωή Φραγκάκη" },
          { role: "Ιφιγένεια", name: "Γωγώ Κανελλάκη, Μελίνα Σκουρλά" },
          { role: "Ορέστης", name: "Νίκος Χαμηλάκης" },
          { role: "Πυλάδης", name: "Γκουέλφο Ασκανέλλι" },
          { role: "Θεοφύλακτος Μπεσικιώτης", name: "Σοφία Σλαφτσάκη" },
        ],
        gallery: [
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
        ],
      },
      {
        title: "Γυναίκα Loser",
        details: [
          { label: "Έτος", value: "2021–2022" },
          { label: "Συγγραφέας", value: "Βίλη Σωτηροπούλου" },
          { label: "Σκηνοθεσία", value: "Αθηνά Αξιώτου" },
          { label: "Βοηθός - Γραμματειακή υποστήριξη", value: "Κλειώ Παρίση" },
          {
            label: "Επιμέλεια προγράμματος",
            value: "Νίκη Παπαηλιάκη, Έλενα Μυλωνά",
          },
          { label: "Επιμέλεια αφίσας", value: "Έλενα Μυλωνά" },
          {
            label: "Εξωτερικός συνεργάτης - Τεχνική υποστήριξη",
            value: "Stéphane Delaunay",
          },
          { label: "Σημείωση", value: "Πρώτη παράσταση επί σκηνής" },
        ],
        poster: { image: GynaikaLooserPoster, alt: "Αφίσα της παράστασης" },
        description: [
          `
          Η Γυναίκα Loser ακολουθεί την πορεία της σύγχρονης γυναίκας από την εφηβεία
          στην ενηλικίωση, από τις φιλελεύθερες του ’80 και τις μοναχικές επιτυχημένες
          καριερίστες του 2000, ως τις απελπισμένες της κρίσης. Οι γυναίκες του έργου
          μοιράζονται τις ιστορίες τους διατρέχοντας τρεις δεκαετίες και πολλά θέματα : τον
          έρωτα, το σεξ, τη φιλία, την ψυχανάλυση, τη μοναξιά, την καριέρα, την ανεργία,
          την κλιμακτήριο, την άνοδο και την πτώση της μεσαίας τάξης. Και φυσικά δεν είναι
          μόνες τους. Oι άνδρες, είτε μαζί, είτε χώρια, βρίσκονται εκεί στο ίδιο ταξίδι, άλλοτε
          με γέλιο κι άλλοτε με κλάμα, σε μια διαδρομή προς το Γνώθι σαυτόν.
          `,
        ],
        leaflet: GynaikaLooserLeaflet,
        credits: [
          /** Ας ανακεφαλαιώσω ή Οι φιλελεύθερες της γενιάς μου */
          { role: "Καλόγρια (αφηγήτρια)", name: "Νίκη Παπαηλιάκη" },
          {
            role: "Καλόγρια σε νεότερη ηλικία",
            name: "Ζωή Φραγκάκη, Μαργαρίτα Μποσμή, Αναστασία Βρανά, Νατάσα Σαρίδη, Έλενα Μυλωνά, Χριστιάνα Σαχίνη",
          },
          { role: "Ψυχαναλυτής", name: "Γιώργος Ψαλτόπουλος" },
          { role: "Τασούλης", name: "Τάσος Πούλιος" },
          { role: "Τέλης / Αλέξιος", name: "Σωτήρης Κωνσταντής" },
          { role: "Γιάννης / Χρήστος", name: "Νίκος Χαμηλάκης" },
          { role: "Κώστας", name: "Ιπποκράτης Σταμπούλογλου" },
          /** Το χρυσόψαρο μέσα στη γυάλα */
          {
            role: "Πένυ",
            name: "Ευγενία Στράτη, Νατάσα Σαρίδη, Έλενα Μυλωνά, Σοφία Σλαφτσάκη",
          },
          { role: "Αφεντικό", name: "Γιώργος Ψαλτόπουλος" },
          { role: "Γκουρού / Γάλλος", name: "Σωτήρης Κωνσταντής" },
          { role: "Ντόρος", name: "Τάσος Πούλιος" },
          { role: "Στόμπος", name: "Ιπποκράτης Σταμπούλογλου" },
          { role: "Νταντά (Σοφάκι)", name: "Μαργαρίτα Μπoσμή" },
          { role: "Νταντά (Βουλγάρα)", name: "Αναστασία Βρανά" },
          { role: "Νταντά (Ρουμάνα)", name: "Κλειώ Παρίση" },
          { role: "Νταντά (Φιλιππινέζα)", name: "Ζωή Φραγκάκη" },
          { role: "Νταντά (Γιούλιτσκα)", name: "Ευγενία Στράτη" },
          { role: "Μιρέλλα", name: "Κωνσταντίνα Παρτασίδου" },
          { role: "Γιώργος", name: "Νίκος Χαμηλάκης" },
          {
            role: "Συνάδελφοι / Μαμάδες",
            name: "Ειρήνη Γιαννοπούλου, Κλειώ Παρίση, Χριστιάνα Σαχίνη",
          },
          /** Ανδροδιώχτρα καριέρας */
          { role: "Ανδροδιώχτρα (αφηγήτρια)", name: "Κλειώ Παρίση" },
          {
            role: "Ανδροδιώχτρα",
            name: "Ευγενία Στράτη, Αναστασία Βρανά, Σοφία Σλαφτσάκη, Χριστιάνα Σαχίνη, Ειρήνη Γιαννοπούλου",
          },
          { role: "Μάρκος", name: "Ιπποκράτης Σταμπούλογλου" },
          { role: "Λένα / Άγγελος", name: "Κωνσταντίνα Παρτασίδου" },
          { role: "Θεραπεύτρια", name: "Ζωή Φραγκάκη" },
          { role: "Σπυράκος", name: "Σωτήρης Κωνσταντής" },
          { role: "Θεόφιλος", name: "Τάσος Πούλιος" },
          { role: "Δικηγόρος", name: "Νίκος Χαμηλάκης" },
          {
            role: "Γυναίκες",
            name: "Ζωή Φραγκάκη, Έλενα Μυλωνά, Νατάσα Σαρίδη",
          },
        ],
        gallery: [
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
        ],
      },
      {
        title: "Περιμένοντας τον δικό μας Γκοντό",
        details: [
          { label: "Έτος", value: "2020–2021" },
          { label: "Βασισμένο σε", value: "Samuel Beckett" },
          { label: "Σκηνοθεσία", value: "Αθηνά Αξιώτου" },
          { label: "Μορφή", value: "Διαδικτυακή παρουσίαση" },
        ],
        poster: { image: GODOTPoster, alt: "Αφίσα της παράστασης" },
        description: ["[ΠΡΟΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗ] Σύντομη περιγραφή της παράστασης."],
        videoId: "5FIIp7Lln_4",
        gallery: [
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
        ],
      },
      {
        title: "Λυσιστράτη ή Μένουμε Ακρόπολη",
        details: [
          {
            label: "Έτος",
            value: "2019–2020",
          },
          { label: "Βασισμένο σε", value: "Λυσιστράτη του Αριστοφάνη" },
          { label: "Σκηνοθεσία", value: "Αθηνά Αξιώτου" },
          { label: "Μορφή", value: "Διαδικτυακή παρουσίαση" },
        ],
        poster: { image: AkropoliPoster, alt: "Αφίσα της παράστασης" },
        description: ["[ΠΡΟΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗ] Σύντομη περιγραφή της παράστασης."],
        videoId: "F0eUPQy_FyY",
        gallery: [
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
          { image: TestImg1, alt: "Test 1" },
          { image: TestImg2, alt: "Test 2" },
          { image: TestImg3, alt: "Test 3" },
          { image: TestImg4, alt: "Test 4" },
        ],
      },
    ],
  },

  members: {
    title: "Οι συντελεστές",
    intro:
      "[ΠΡΟΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗ] Μια σύντομη εισαγωγή σε όσους και όσες δίνουν ζωή στην ομάδα.",
    people: [
      /**       {
        name: "[ΠΡΟΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗ] Όνομα Επώνυμο",
        role: "Ηθοποιός",
        bio: "[ΠΡΟΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗ] Μία ή δύο προτάσεις παρουσίασης.",
      },
      {
        name: "[ΠΡΟΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗ] Όνομα Επώνυμο",
        role: "Ηθοποιός",
        bio: "[ΠΡΟΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗ] Μία ή δύο προτάσεις παρουσίασης.",
      },
      {
        name: "[ΠΡΟΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗ] Όνομα Επώνυμο",
        role: "Σκηνογραφία",
        bio: "[ΠΡΟΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗ] Μία ή δύο προτάσεις παρουσίασης.",
      },
*/
    ],
  },

  director: {
    title: "Σκηνοθεσία",
    name: "Αθηνά Αξιώτου",
    body: [
      `Η Αθηνά Αξιώτου είναι ηθοποιός, σκηνοθέτης και ιδρύτρια της Θεατρικής ομάδας Opos Opos
      στο Παρίσι. Στην πολύχρονη πορεία της στον χώρο, έχει συμμετάσχει σε πολλές θεατρικές
      παραστάσεις και έχει διδάξει σε πολλά θεατρικά εργαστήρια σε διάφορα δημοτικά διαμερίσματα και
      σχολεία των Παρισίων.`,
    ],
  },

  community: {
    title: "Ο χώρος που μας φιλοξενεί",
    body: [
      "[ΠΡΟΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗ] Παρουσιάστε τον φορέα, το θέατρο ή την κοινότητα που σας " +
        "φιλοξενεί και στηρίζει τη δουλειά σας.",
    ],
    link: {
      label: "[ΠΡΟΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗ] Ιστότοπος του χώρου",
      href: "https://example.org",
    },
  },

  contact: {
    title: "Επικοινωνία",
    body: [
      "[ΠΡΟΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗ] Πώς μπορείτε να επικοινωνήσετε μαζί μας για προγραμματισμό, " +
        "συνεργασία ή οποιοδήποτε άλλο αίτημα.",
    ],
    email: "contact@example.org",
    socials: [
      { label: "Instagram", href: "https://instagram.com/" },
      { label: "Facebook", href: "https://facebook.com/" },
    ],
  },
};
