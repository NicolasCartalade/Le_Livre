/*
  ============================================================
  Tes photos se déclarent ici — rien d'autre à modifier.
  1. Dépose tes fichiers dans le dossier /images (grand format)
     et /images/thumbs (miniatures de la grille, ~1000 px de large)
  2. Ajoute une ligne par photo dans PHOTOS
  Champs :
    src       grand format, affiché dans la visionneuse
    thumb     (optionnel) miniature de la grille ; sinon src est utilisé
    title     légende affichée au survol et dans la visionneuse
    category  (optionnel) ex. "Nature" — les filtres se créent tout seuls
    ratio     largeur/hauteur de l'image : évite les sauts de mise en page
  L'ordre des lignes = l'ordre d'affichage.
  ============================================================
*/

// Photo d'en-tête (plein écran en haut de page). Laisse vide pour un fond sombre.
const HERO_IMAGE = "images/pin-crepuscule.jpg";

const PHOTOS = [
  { src: "images/lac-reflets.jpg", thumb: "images/thumbs/lac-reflets.jpg", title: "Reflets", category: "Nature", ratio: "2352/1568" },
  { src: "images/fenetre-puy.jpg", thumb: "images/thumbs/fenetre-puy.jpg", title: "Le Puy par la fenêtre", category: "Crépuscule", ratio: "2352/1568" },
  { src: "images/portrait-nuit.jpg", thumb: "images/thumbs/portrait-nuit.jpg", title: "Portrait de nuit", category: "Portraits", ratio: "1568/2352" },
  { src: "images/platines-trio.jpg", thumb: "images/thumbs/platines-trio.jpg", title: "Derrière le voile", category: "Soirées", ratio: "2352/1568" },
  { src: "images/la-cave.jpg", thumb: "images/thumbs/la-cave.jpg", title: "La Cave", category: "Rue", ratio: "2351/1568" },
  { src: "images/vache-montagne.jpg", thumb: "images/thumbs/vache-montagne.jpg", title: "Vache blanche, heure bleue", category: "Nature", ratio: "2352/1568" },
  { src: "images/pin-symetrie.jpg", thumb: "images/thumbs/pin-symetrie.jpg", title: "Symétrie", category: "Crépuscule", ratio: "2156/1724" },
  { src: "images/fumee-verte-1.jpg", thumb: "images/thumbs/fumee-verte-1.jpg", title: "Fumée verte I", category: "Portraits", ratio: "1568/2352" },
  { src: "images/auvergne-city.jpg", thumb: "images/thumbs/auvergne-city.jpg", title: "Auvergne-City", category: "Soirées", ratio: "2352/1568" },
  { src: "images/fleurs-de-verre.jpg", thumb: "images/thumbs/fleurs-de-verre.jpg", title: "Fleurs de verre", category: "Rue", ratio: "2212/1660" },
  { src: "images/lune.jpg", thumb: "images/thumbs/lune.jpg", title: "Pleine lune", category: "Nature", ratio: "1448/2576" },
  { src: "images/puy-silhouette.jpg", thumb: "images/thumbs/puy-silhouette.jpg", title: "Silhouette du Puy", category: "Crépuscule", ratio: "1450/2576" },
  { src: "images/ascenseur.jpg", thumb: "images/thumbs/ascenseur.jpg", title: "Ascenseur", category: "Portraits", ratio: "1568/2352" },
  { src: "images/mouvement-1.jpg", thumb: "images/thumbs/mouvement-1.jpg", title: "Mouvement I", category: "Soirées", ratio: "2352/1568" },
  { src: "images/manege.jpg", thumb: "images/thumbs/manege.jpg", title: "Manège", category: "Rue", ratio: "1726/2156" },
  { src: "images/crecerelle.jpg", thumb: "images/thumbs/crecerelle.jpg", title: "Crécerelle en trois temps", category: "Nature", ratio: "2576/1447" },
  { src: "images/pin-crepuscule.jpg", thumb: "images/thumbs/pin-crepuscule.jpg", title: "Pin au crépuscule", category: "Crépuscule", ratio: "2576/1450" },
  { src: "images/fumee-verte-2.jpg", thumb: "images/thumbs/fumee-verte-2.jpg", title: "Fumée verte II", category: "Portraits", ratio: "1568/2352" },
  { src: "images/laverdye-city.jpg", thumb: "images/thumbs/laverdye-city.jpg", title: "Sourire aux platines", category: "Soirées", ratio: "2352/1568" },
  { src: "images/mouvement-2.jpg", thumb: "images/thumbs/mouvement-2.jpg", title: "Mouvement II", category: "Soirées", ratio: "2352/1568" },
];

// Tant qu'aucune photo n'est ajoutée, des emplacements élégants sont affichés.
const PLACEHOLDER_RATIOS = ["3/2", "2/3", "1/1", "2/3", "3/2", "1/1"];
