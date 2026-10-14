/*
  ============================================================
  Tes photos se déclarent ici — rien d'autre à modifier.
  1. Dépose tes fichiers dans le dossier /images (grand format)
     et /images/thumbs (miniatures de la grille, ~1000 px de large)
  2. Ajoute une ligne par photo dans PHOTOS
  Champs :
    src       grand format, affiché dans la visionneuse
    thumb     (optionnel) miniature de la grille ; sinon src est utilisé
    title     légende affichée au survol et dans la visionneuse (français)
    title_en  (optionnel) légende en anglais ; sinon le titre français est repris
    category  (optionnel) ex. "Nature" — les filtres se créent tout seuls
    ratio     largeur/hauteur de l'image : évite les sauts de mise en page
  L'ordre des lignes = l'ordre d'affichage (de gauche à droite, de haut en bas).
  ============================================================
*/

// Photo d'en-tête (plein écran en haut de page). Laisse vide pour un fond sombre.
const HERO_IMAGE = "images/pin-au-crepuscule.jpg";

const PHOTOS = [
  { src: "images/reflets.jpg", thumb: "images/thumbs/reflets.jpg", title: "Reflets", title_en: "Reflections", category: "Paysages", ratio: "3500/2333" },
  { src: "images/silhouette-du-puy.jpg", thumb: "images/thumbs/silhouette-du-puy.jpg", title: "Silhouette du Puy", title_en: "Silhouette of the Puy", category: "Ciels", ratio: "1969/3500" },
  { src: "images/vache-blanche-heure-bleue.jpg", thumb: "images/thumbs/vache-blanche-heure-bleue.jpg", title: "Vache blanche, heure bleue", title_en: "White cow, blue hour", category: "Nature", ratio: "3500/2333" },
  { src: "images/portrait-de-nuit.jpg", thumb: "images/thumbs/portrait-de-nuit.jpg", title: "Portrait de nuit", title_en: "Night portrait", category: "Portraits", ratio: "2333/3500" },
  { src: "images/le-puy-par-la-fenetre.jpg", thumb: "images/thumbs/le-puy-par-la-fenetre.jpg", title: "Le Puy par la fenêtre", title_en: "The Puy through the window", category: "Ciels", ratio: "3500/2333" },
  { src: "images/fleurs-de-verre.jpg", thumb: "images/thumbs/fleurs-de-verre.jpg", title: "Fleurs de verre", title_en: "Glass flowers", category: "Rue", ratio: "3500/2627" },
  { src: "images/deux-silhouettes.jpg", thumb: "images/thumbs/deux-silhouettes.jpg", title: "Deux silhouettes", title_en: "Two silhouettes", category: "Portraits", ratio: "3500/2333" },
  { src: "images/mer-de-nuages-i.jpg", thumb: "images/thumbs/mer-de-nuages-i.jpg", title: "Mer de nuages I", title_en: "Sea of clouds I", category: "Paysages", ratio: "2333/3500" },
  { src: "images/cygnes-dans-les-branches.jpg", thumb: "images/thumbs/cygnes-dans-les-branches.jpg", title: "Cygnes dans les branches", title_en: "Swans among the branches", category: "Nature", ratio: "2333/3500" },
  { src: "images/renverse.jpg", thumb: "images/thumbs/renverse.jpg", title: "Renversé", title_en: "Upside down", category: "Ciels", ratio: "3500/2985" },
  { src: "images/studio.jpg", thumb: "images/thumbs/studio.jpg", title: "Studio", title_en: "Studio", category: "Soirées", ratio: "3500/2333" },
  { src: "images/dans-le-miroir.jpg", thumb: "images/thumbs/dans-le-miroir.jpg", title: "Dans le miroir", title_en: "In the mirror", category: "Rue", ratio: "2333/3500" },
  { src: "images/lightfall.jpg", thumb: "images/thumbs/lightfall.jpg", title: "Lightfall", title_en: "Lightfall", category: "Rue", ratio: "1967/3500" },
  { src: "images/grillage.jpg", thumb: "images/thumbs/grillage.jpg", title: "Grillage", title_en: "Wire fence", category: "Portraits", ratio: "2623/3500" },
  { src: "images/mer-de-nuages-ii.jpg", thumb: "images/thumbs/mer-de-nuages-ii.jpg", title: "Mer de nuages II", title_en: "Sea of clouds II", category: "Paysages", ratio: "3500/2333" },
  { src: "images/sous-bois.jpg", thumb: "images/thumbs/sous-bois.jpg", title: "Sous-bois", title_en: "Undergrowth", category: "Nature", ratio: "3500/2333" },
  { src: "images/lune-encadree.jpg", thumb: "images/thumbs/lune-encadree.jpg", title: "Lune encadrée", title_en: "Framed moon", category: "Ciels", ratio: "3500/2333" },
  { src: "images/caisse-claire.jpg", thumb: "images/thumbs/caisse-claire.jpg", title: "Caisse claire", title_en: "Snare drum", category: "Soirées", ratio: "3500/2333" },
  { src: "images/la-boutique.jpg", thumb: "images/thumbs/la-boutique.jpg", title: "La boutique", title_en: "The shop", category: "Rue", ratio: "2333/3500" },
  { src: "images/en-ville-i.jpg", thumb: "images/thumbs/en-ville-i.jpg", title: "En ville I", title_en: "In the city I", category: "Portraits", ratio: "2333/3500" },
  { src: "images/horizon-volcanique.jpg", thumb: "images/thumbs/horizon-volcanique.jpg", title: "Horizon volcanique", title_en: "Volcanic horizon", category: "Paysages", ratio: "3500/1969" },
  { src: "images/envol-i.jpg", thumb: "images/thumbs/envol-i.jpg", title: "Envol I", title_en: "Flight I", category: "Nature", ratio: "1938/3446" },
  { src: "images/reflets-du-soir.jpg", thumb: "images/thumbs/reflets-du-soir.jpg", title: "Reflets du soir", title_en: "Evening reflections", category: "Ciels", ratio: "1969/3500" },
  { src: "images/danse-rouge-i.jpg", thumb: "images/thumbs/danse-rouge-i.jpg", title: "Danse rouge I", title_en: "Red dance I", category: "Soirées", ratio: "3500/2333" },
  { src: "images/ville-rose.jpg", thumb: "images/thumbs/ville-rose.jpg", title: "Ville rose", title_en: "Pink city", category: "Rue", ratio: "3500/2335" },
  { src: "images/en-ville-ii.jpg", thumb: "images/thumbs/en-ville-ii.jpg", title: "En ville II", title_en: "In the city II", category: "Portraits", ratio: "2333/3500" },
  { src: "images/entre-les-pins.jpg", thumb: "images/thumbs/entre-les-pins.jpg", title: "Entre les pins", title_en: "Among the pines", category: "Paysages", ratio: "3500/2333" },
  { src: "images/envol-ii.jpg", thumb: "images/thumbs/envol-ii.jpg", title: "Envol II", title_en: "Flight II", category: "Nature", ratio: "1166/2073" },
  { src: "images/voie-lactee.jpg", thumb: "images/thumbs/voie-lactee.jpg", title: "Voie lactée", title_en: "Milky Way", category: "Ciels", ratio: "1970/3500" },
  { src: "images/danse-rouge-ii.jpg", thumb: "images/thumbs/danse-rouge-ii.jpg", title: "Danse rouge II", title_en: "Red dance II", category: "Soirées", ratio: "3500/2333" },
  { src: "images/ville-noir-et-blanc.jpg", thumb: "images/thumbs/ville-noir-et-blanc.jpg", title: "Ville, noir et blanc", title_en: "City, black and white", category: "Rue", ratio: "3500/2335" },
  { src: "images/en-ville-iii.jpg", thumb: "images/thumbs/en-ville-iii.jpg", title: "En ville III", title_en: "In the city III", category: "Portraits", ratio: "2333/3500" },
  { src: "images/neige.jpg", thumb: "images/thumbs/neige.jpg", title: "Neige", title_en: "Snow", category: "Paysages", ratio: "2627/3500" },
  { src: "images/tulipes-i.jpg", thumb: "images/thumbs/tulipes-i.jpg", title: "Tulipes I", title_en: "Tulips I", category: "Nature", ratio: "3500/2333" },
  { src: "images/ciel-de-feu.jpg", thumb: "images/thumbs/ciel-de-feu.jpg", title: "Ciel de feu", title_en: "Sky on fire", category: "Ciels", ratio: "1970/3500" },
  { src: "images/danse-rouge-iii.jpg", thumb: "images/thumbs/danse-rouge-iii.jpg", title: "Danse rouge III", title_en: "Red dance III", category: "Soirées", ratio: "3500/2333" },
  { src: "images/tableau-de-bord.jpg", thumb: "images/thumbs/tableau-de-bord.jpg", title: "Tableau de bord", title_en: "Dashboard", category: "Rue", ratio: "3287/2190" },
  { src: "images/contre-jour-i.jpg", thumb: "images/thumbs/contre-jour-i.jpg", title: "Contre-jour I", title_en: "Against the light I", category: "Portraits", ratio: "3500/2335" },
  { src: "images/soleil-d-hiver.jpg", thumb: "images/thumbs/soleil-d-hiver.jpg", title: "Soleil d'hiver", title_en: "Winter sun", category: "Paysages", ratio: "3500/2333" },
  { src: "images/tulipes-ii.jpg", thumb: "images/thumbs/tulipes-ii.jpg", title: "Tulipes II", title_en: "Tulips II", category: "Nature", ratio: "3500/2333" },
  { src: "images/pin-au-crepuscule.jpg", thumb: "images/thumbs/pin-au-crepuscule.jpg", title: "Pin au crépuscule", title_en: "Pine at dusk", category: "Ciels", ratio: "3500/1970" },
  { src: "images/danse-rouge-iv.jpg", thumb: "images/thumbs/danse-rouge-iv.jpg", title: "Danse rouge IV", title_en: "Red dance IV", category: "Soirées", ratio: "3500/2333" },
  { src: "images/manege.jpg", thumb: "images/thumbs/manege.jpg", title: "Manège", title_en: "Carousel", category: "Rue", ratio: "2802/3500" },
  { src: "images/contre-jour-ii.jpg", thumb: "images/thumbs/contre-jour-ii.jpg", title: "Contre-jour II", title_en: "Against the light II", category: "Portraits", ratio: "3500/2335" },
  { src: "images/sentier.jpg", thumb: "images/thumbs/sentier.jpg", title: "Sentier", title_en: "Path", category: "Paysages", ratio: "3500/2333" },
  { src: "images/troupeau.jpg", thumb: "images/thumbs/troupeau.jpg", title: "Troupeau", title_en: "The flock", category: "Nature", ratio: "3500/2333" },
  { src: "images/symetrie.jpg", thumb: "images/thumbs/symetrie.jpg", title: "Symétrie", title_en: "Symmetry", category: "Ciels", ratio: "3500/2799" },
  { src: "images/auvergne-city-i.jpg", thumb: "images/thumbs/auvergne-city-i.jpg", title: "Auvergne-City I", title_en: "Auvergne-City I", category: "Soirées", ratio: "2333/3500" },
  { src: "images/la-cave.jpg", thumb: "images/thumbs/la-cave.jpg", title: "La Cave", title_en: "La Cave", category: "Rue", ratio: "3500/2335" },
  { src: "images/pause.jpg", thumb: "images/thumbs/pause.jpg", title: "Pause", title_en: "Pause", category: "Portraits", ratio: "2798/3500" },
  { src: "images/puy-vert.jpg", thumb: "images/thumbs/puy-vert.jpg", title: "Puy vert", title_en: "Green Puy", category: "Paysages", ratio: "3500/2333" },
  { src: "images/fleurs-de-montagne.jpg", thumb: "images/thumbs/fleurs-de-montagne.jpg", title: "Fleurs de montagne", title_en: "Mountain flowers", category: "Nature", ratio: "1970/3500" },
  { src: "images/pleine-lune.jpg", thumb: "images/thumbs/pleine-lune.jpg", title: "Pleine lune", title_en: "Full moon", category: "Ciels", ratio: "1725/3069" },
  { src: "images/auvergne-city-ii.jpg", thumb: "images/thumbs/auvergne-city-ii.jpg", title: "Auvergne-City II", title_en: "Auvergne-City II", category: "Soirées", ratio: "3500/2333" },
  { src: "images/fou-rire.jpg", thumb: "images/thumbs/fou-rire.jpg", title: "Fou rire", title_en: "Laughter", category: "Portraits", ratio: "3500/2333" },
  { src: "images/vallee-boisee.jpg", thumb: "images/thumbs/vallee-boisee.jpg", title: "Vallée boisée", title_en: "Wooded valley", category: "Paysages", ratio: "3500/2333" },
  { src: "images/mouette.jpg", thumb: "images/thumbs/mouette.jpg", title: "Mouette", title_en: "Gull", category: "Nature", ratio: "3500/2387" },
  { src: "images/lune-dans-les-branches.jpg", thumb: "images/thumbs/lune-dans-les-branches.jpg", title: "Lune dans les branches", title_en: "Moon in the branches", category: "Ciels", ratio: "2560/1710" },
  { src: "images/derriere-le-voile.jpg", thumb: "images/thumbs/derriere-le-voile.jpg", title: "Derrière le voile", title_en: "Behind the veil", category: "Soirées", ratio: "3500/2333" },
  { src: "images/collage-i.jpg", thumb: "images/thumbs/collage-i.jpg", title: "Collage I", title_en: "Collage I", category: "Portraits", ratio: "2800/3500" },
  { src: "images/la-barriere.jpg", thumb: "images/thumbs/la-barriere.jpg", title: "La barrière", title_en: "The gate", category: "Paysages", ratio: "3500/2334" },
  { src: "images/dans-l-eau.jpg", thumb: "images/thumbs/dans-l-eau.jpg", title: "Dans l'eau", title_en: "In the water", category: "Nature", ratio: "2760/1840" },
  { src: "images/lunes.jpg", thumb: "images/thumbs/lunes.jpg", title: "Lunes", title_en: "Moons", category: "Ciels", ratio: "1080/1920" },
  { src: "images/sourire-aux-platines.jpg", thumb: "images/thumbs/sourire-aux-platines.jpg", title: "Sourire aux platines", title_en: "Smile at the decks", category: "Soirées", ratio: "3500/2333" },
  { src: "images/verre-a-la-main.jpg", thumb: "images/thumbs/verre-a-la-main.jpg", title: "Verre à la main", title_en: "Glass in hand", category: "Portraits", ratio: "2335/3500" },
  { src: "images/lac-au-crepuscule.jpg", thumb: "images/thumbs/lac-au-crepuscule.jpg", title: "Lac au crépuscule", title_en: "Lake at dusk", category: "Paysages", ratio: "2338/1558" },
  { src: "images/rapace-perche.jpg", thumb: "images/thumbs/rapace-perche.jpg", title: "Rapace perché", title_en: "Perched raptor", category: "Nature", ratio: "1968/3500" },
  { src: "images/mouvement-i.jpg", thumb: "images/thumbs/mouvement-i.jpg", title: "Mouvement I", title_en: "Motion I", category: "Soirées", ratio: "3500/2333" },
  { src: "images/silhouettes.jpg", thumb: "images/thumbs/silhouettes.jpg", title: "Silhouettes", title_en: "Silhouettes", category: "Portraits", ratio: "3500/2333" },
  { src: "images/drapeau.jpg", thumb: "images/thumbs/drapeau.jpg", title: "Drapeau", title_en: "Flag", category: "Paysages", ratio: "3500/2333" },
  { src: "images/sur-la-branche.jpg", thumb: "images/thumbs/sur-la-branche.jpg", title: "Sur la branche", title_en: "On the branch", category: "Nature", ratio: "2542/2540" },
  { src: "images/mouvement-ii.jpg", thumb: "images/thumbs/mouvement-ii.jpg", title: "Mouvement II", title_en: "Motion II", category: "Soirées", ratio: "3500/2333" },
  { src: "images/cadre-dans-le-cadre.jpg", thumb: "images/thumbs/cadre-dans-le-cadre.jpg", title: "Cadre dans le cadre", title_en: "Frame within a frame", category: "Portraits", ratio: "3500/2335" },
  { src: "images/vallee.jpg", thumb: "images/thumbs/vallee.jpg", title: "Vallée", title_en: "Valley", category: "Paysages", ratio: "3500/2333" },
  { src: "images/herbes.jpg", thumb: "images/thumbs/herbes.jpg", title: "Herbes", title_en: "Grasses", category: "Nature", ratio: "1970/3500" },
  { src: "images/toits-de-pierre.jpg", thumb: "images/thumbs/toits-de-pierre.jpg", title: "Toits de pierre", title_en: "Stone roofs", category: "Paysages", ratio: "3500/2333" },
  { src: "images/crecerelle-en-trois-temps.jpg", thumb: "images/thumbs/crecerelle-en-trois-temps.jpg", title: "Crécerelle en trois temps", title_en: "Kestrel in three stages", category: "Nature", ratio: "2972/1670" },
  { src: "images/a-bord.jpg", thumb: "images/thumbs/a-bord.jpg", title: "À bord", title_en: "On board", category: "Portraits", ratio: "2333/3500" },
  { src: "images/la-coumasse.jpg", thumb: "images/thumbs/la-coumasse.jpg", title: "La Coumasse", title_en: "La Coumasse", category: "Paysages", ratio: "3500/2334" },
  { src: "images/crecerelle-en-trois-temps-noir-et-blanc.jpg", thumb: "images/thumbs/crecerelle-en-trois-temps-noir-et-blanc.jpg", title: "Crécerelle en trois temps, noir et blanc", title_en: "Kestrel in three stages, black and white", category: "Nature", ratio: "2972/1670" },
  { src: "images/collage-ii.jpg", thumb: "images/thumbs/collage-ii.jpg", title: "Collage II", title_en: "Collage II", category: "Portraits", ratio: "2799/3500" },
  { src: "images/haute-montagne.jpg", thumb: "images/thumbs/haute-montagne.jpg", title: "Haute montagne", title_en: "High mountains", category: "Paysages", ratio: "3500/2333" },
  { src: "images/souche.jpg", thumb: "images/thumbs/souche.jpg", title: "Souche", title_en: "Tree stump", category: "Nature", ratio: "2333/3500" },
  { src: "images/fumee-verte-i.jpg", thumb: "images/thumbs/fumee-verte-i.jpg", title: "Fumée verte I", title_en: "Green smoke I", category: "Portraits", ratio: "2333/3500" },
  { src: "images/ruisseau.jpg", thumb: "images/thumbs/ruisseau.jpg", title: "Ruisseau", title_en: "Stream", category: "Paysages", ratio: "2333/3500" },
  { src: "images/fumee-verte-ii.jpg", thumb: "images/thumbs/fumee-verte-ii.jpg", title: "Fumée verte II", title_en: "Green smoke II", category: "Portraits", ratio: "2333/3500" },
  { src: "images/ascenseur.jpg", thumb: "images/thumbs/ascenseur.jpg", title: "Ascenseur", title_en: "Elevator", category: "Portraits", ratio: "2333/3500" },
  { src: "images/contre-le-mur.jpg", thumb: "images/thumbs/contre-le-mur.jpg", title: "Contre le mur", title_en: "Against the wall", category: "Portraits", ratio: "2333/3500" },
  { src: "images/lumieres-de-fin-d-annee.jpg", thumb: "images/thumbs/lumieres-de-fin-d-annee.jpg", title: "Lumières de fin d'année", title_en: "Holiday lights", category: "Portraits", ratio: "2333/3500" },
];

// Noms anglais des catégories (la clé est le nom français utilisé dans PHOTOS).
const CATEGORY_EN = {
  "Paysages": "Landscapes",
  "Ciels": "Skies",
  "Nature": "Nature",
  "Portraits": "Portraits",
  "Rue": "Street",
  "Soirées": "Parties"
};

// Tant qu'aucune photo n'est ajoutée, des emplacements élégants sont affichés.
const PLACEHOLDER_RATIOS = ["3/2", "2/3", "1/1", "2/3", "3/2", "1/1"];
