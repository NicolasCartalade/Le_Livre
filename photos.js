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
  { src: "images/silhouette-du-puy.jpg", thumb: "images/thumbs/silhouette-du-puy.jpg", title: "Silhouette du Puy de Dôme", title_en: "Silhouette of the Puy de Dôme", category: "Ciels", ratio: "1969/3500" },
  { src: "images/vache-blanche-heure-bleue.jpg", thumb: "images/thumbs/vache-blanche-heure-bleue.jpg", title: "Vache blanche, heure bleue sur le Sancy", title_en: "White cow, blue hour on the Sancy", category: "Nature/Animalier", ratio: "3500/2333" },
  { src: "images/portrait-de-nuit.jpg", thumb: "images/thumbs/portrait-de-nuit.jpg", title: "Portrait de nuit", title_en: "Night portrait", category: "Portraits", ratio: "2333/3500" },
  { src: "images/le-puy-par-la-fenetre.jpg", thumb: "images/thumbs/le-puy-par-la-fenetre.jpg", title: "Puy de Dôme par le cadre de la fenêtre", title_en: "Puy de Dôme through the window frame", category: "Ciels", ratio: "3500/2333" },
  { src: "images/fleurs-de-verre.jpg", thumb: "images/thumbs/fleurs-de-verre.jpg", title: "Fleurs de verre au marché", title_en: "Glass flowers at the market", category: "Rue", ratio: "3500/2627" },
  { src: "images/deux-silhouettes.jpg", thumb: "images/thumbs/deux-silhouettes.jpg", title: "Face à la brume", title_en: "Facing the mist", category: "Portraits", ratio: "3500/2333" },
  { src: "images/mer-de-nuages-i.jpg", thumb: "images/thumbs/mer-de-nuages-i.jpg", title: "Mer de nuages sur le Mont Blanc, Alpes I", title_en: "Sea of clouds over Mont Blanc, Alps I", category: "Paysages", ratio: "2333/3500" },
  { src: "images/cygnes-dans-les-branches.jpg", thumb: "images/thumbs/cygnes-dans-les-branches.jpg", title: "Cygnes entre les branches", title_en: "Swans between the branches", category: "Nature/Animalier", ratio: "2333/3500" },
  { src: "images/renverse.jpg", thumb: "images/thumbs/renverse.jpg", title: "Vol au-dessus d'un nid de coucou", title_en: "One Flew Over the Cuckoo's Nest", category: "Ciels", ratio: "3500/2985" },
  { src: "images/studio.jpg", thumb: "images/thumbs/studio.jpg", title: "Studio", title_en: "Studio", category: "Événement/Soirée", ratio: "3500/2333" },
  { src: "images/dans-le-miroir.jpg", thumb: "images/thumbs/dans-le-miroir.jpg", title: "Miroir", title_en: "Mirror", category: "Rue", ratio: "2333/3500" },
  { src: "images/lightfall.jpg", thumb: "images/thumbs/lightfall.jpg", title: "Lightfall", title_en: "Lightfall", category: "Rue", ratio: "1967/3500" },
  { src: "images/grillage.jpg", thumb: "images/thumbs/grillage.jpg", title: "Portrait d'un acteur", title_en: "Portrait of an actor", category: "Portraits", ratio: "2623/3500" },
  { src: "images/mer-de-nuages-ii.jpg", thumb: "images/thumbs/mer-de-nuages-ii.jpg", title: "Mer de nuages sur le Mont Blanc, Alpes II", title_en: "Sea of clouds over Mont Blanc, Alps II", category: "Paysages", ratio: "3500/2333" },
  { src: "images/sous-bois.jpg", thumb: "images/thumbs/sous-bois.jpg", title: "Sous-bois", title_en: "Undergrowth", category: "Nature/Animalier", ratio: "3500/2333" },
  { src: "images/lune-encadree.jpg", thumb: "images/thumbs/lune-encadree.jpg", title: "Cadre de Lune", title_en: "Moon frame", category: "Ciels", ratio: "3500/2333" },
  { src: "images/caisse-claire.jpg", thumb: "images/thumbs/caisse-claire.jpg", title: "Caisse claire", title_en: "Snare drum", category: "Événement/Soirée", ratio: "3500/2333" },
  { src: "images/la-boutique.jpg", thumb: "images/thumbs/la-boutique.jpg", title: "La boutique", title_en: "The shop", category: "Rue", ratio: "2333/3500" },
  { src: "images/en-ville-i.jpg", thumb: "images/thumbs/en-ville-i.jpg", title: "Regard du Panthéon I, Paris", title_en: "View from the Panthéon I, Paris", category: "Portraits", ratio: "2333/3500" },
  { src: "images/horizon-volcanique.jpg", thumb: "images/thumbs/horizon-volcanique.jpg", title: "Horizon volcanique", title_en: "Volcanic horizon", category: "Paysages", ratio: "3500/1969" },
  { src: "images/envol-i.jpg", thumb: "images/thumbs/envol-i.jpg", title: "Envol au crépuscule I", title_en: "Takeoff at dusk I", category: "Nature/Animalier", ratio: "1938/3446" },
  { src: "images/reflets-du-soir.jpg", thumb: "images/thumbs/reflets-du-soir.jpg", title: "Reflets du soir", title_en: "Evening reflections", category: "Ciels", ratio: "1969/3500" },
  { src: "images/danse-rouge-i.jpg", thumb: "images/thumbs/danse-rouge-i.jpg", title: "Danse rouge I", title_en: "Red dance I", category: "Événement/Soirée", ratio: "3500/2333" },
  { src: "images/ville-rose.jpg", thumb: "images/thumbs/ville-rose.jpg", title: "Clermont-Ferrand rosé", title_en: "Clermont-Ferrand in pink", category: "Rue", ratio: "3500/2335" },
  { src: "images/en-ville-ii.jpg", thumb: "images/thumbs/en-ville-ii.jpg", title: "Regard du Panthéon II, Paris", title_en: "View from the Panthéon II, Paris", category: "Portraits", ratio: "2333/3500" },
  { src: "images/entre-les-pins.jpg", thumb: "images/thumbs/entre-les-pins.jpg", title: "Puy de Dôme entre les pins", title_en: "Puy de Dôme among the pines", category: "Paysages", ratio: "3500/2333" },
  { src: "images/envol-ii.jpg", thumb: "images/thumbs/envol-ii.jpg", title: "Envol II", title_en: "Flight II", category: "Nature/Animalier", ratio: "1166/2073" },
  { src: "images/voie-lactee.jpg", thumb: "images/thumbs/voie-lactee.jpg", title: "Voie lactée", title_en: "Milky Way", category: "Ciels", ratio: "1970/3500" },
  { src: "images/danse-rouge-ii.jpg", thumb: "images/thumbs/danse-rouge-ii.jpg", title: "Danse rouge II", title_en: "Red dance II", category: "Événement/Soirée", ratio: "3500/2333" },
  { src: "images/ville-noir-et-blanc.jpg", thumb: "images/thumbs/ville-noir-et-blanc.jpg", title: "Clermont-Ferrand noir et blanc", title_en: "Clermont-Ferrand in black and white", category: "Rue", ratio: "3500/2335" },
  { src: "images/en-ville-iii.jpg", thumb: "images/thumbs/en-ville-iii.jpg", title: "Regard du Panthéon III, Paris", title_en: "View from the Panthéon III, Paris", category: "Portraits", ratio: "2333/3500" },
  { src: "images/neige.jpg", thumb: "images/thumbs/neige.jpg", title: "Vagues de neige", title_en: "Waves of snow", category: "Paysages", ratio: "2627/3500" },
  { src: "images/tulipes-i.jpg", thumb: "images/thumbs/tulipes-i.jpg", title: "Tulipes I", title_en: "Tulips I", category: "Nature/Animalier", ratio: "3500/2333" },
  { src: "images/ciel-de-feu.jpg", thumb: "images/thumbs/ciel-de-feu.jpg", title: "Ciel de feu", title_en: "Sky on fire", category: "Ciels", ratio: "1970/3500" },
  { src: "images/danse-rouge-iii.jpg", thumb: "images/thumbs/danse-rouge-iii.jpg", title: "Danse rouge III", title_en: "Red dance III", category: "Événement/Soirée", ratio: "3500/2333" },
  { src: "images/tableau-de-bord.jpg", thumb: "images/thumbs/tableau-de-bord.jpg", title: "Tableau de bord", title_en: "Dashboard", category: "Rue", ratio: "3287/2190" },
  { src: "images/contre-jour-i.jpg", thumb: "images/thumbs/contre-jour-i.jpg", title: "Contre-jour I", title_en: "Against the light I", category: "Portraits", ratio: "3500/2335" },
  { src: "images/soleil-d-hiver.jpg", thumb: "images/thumbs/soleil-d-hiver.jpg", title: "Soleil d'hiver se reflétant sur la neige", title_en: "Winter sun reflecting on the snow", category: "Paysages", ratio: "3500/2333" },
  { src: "images/tulipes-ii.jpg", thumb: "images/thumbs/tulipes-ii.jpg", title: "Tulipes II", title_en: "Tulips II", category: "Nature/Animalier", ratio: "3500/2333" },
  { src: "images/pin-au-crepuscule.jpg", thumb: "images/thumbs/pin-au-crepuscule.jpg", title: "Pin au crépuscule", title_en: "Pine at dusk", category: "Ciels", ratio: "3500/1970" },
  { src: "images/danse-rouge-iv.jpg", thumb: "images/thumbs/danse-rouge-iv.jpg", title: "Danse rouge IV", title_en: "Red dance IV", category: "Événement/Soirée", ratio: "3500/2333" },
  { src: "images/manege.jpg", thumb: "images/thumbs/manege.jpg", title: "Le Manège", title_en: "The Carousel", category: "Rue", ratio: "2802/3500" },
  { src: "images/contre-jour-ii.jpg", thumb: "images/thumbs/contre-jour-ii.jpg", title: "Contre-jour II", title_en: "Against the light II", category: "Portraits", ratio: "3500/2335" },
  { src: "images/sentier.jpg", thumb: "images/thumbs/sentier.jpg", title: "Sentier vers les Puys", title_en: "Path to the Puys", category: "Paysages", ratio: "3500/2333" },
  { src: "images/troupeau.jpg", thumb: "images/thumbs/troupeau.jpg", title: "Troupeau dans les Puys", title_en: "Herd in the Puys", category: "Nature/Animalier", ratio: "3500/2333" },
  { src: "images/symetrie.jpg", thumb: "images/thumbs/symetrie.jpg", title: "Symétrie de l'arbre", title_en: "Symmetry of the tree", category: "Ciels", ratio: "3500/2799" },
  { src: "images/auvergne-city-i.jpg", thumb: "images/thumbs/auvergne-city-i.jpg", title: "Larvegne-City I", title_en: "Larvegne-City I", category: "Événement/Soirée", ratio: "2333/3500" },
  { src: "images/la-cave.jpg", thumb: "images/thumbs/la-cave.jpg", title: "Terrasse", title_en: "Terrace", category: "Rue", ratio: "3500/2335" },
  { src: "images/pause.jpg", thumb: "images/thumbs/pause.jpg", title: "Pause", title_en: "Pause", category: "Portraits", ratio: "2798/3500" },
  { src: "images/puy-vert.jpg", thumb: "images/thumbs/puy-vert.jpg", title: "Sancy", title_en: "Sancy", category: "Paysages", ratio: "3500/2333" },
  { src: "images/fleurs-de-montagne.jpg", thumb: "images/thumbs/fleurs-de-montagne.jpg", title: "Fleurs de montagne", title_en: "Mountain flowers", category: "Nature/Animalier", ratio: "1970/3500" },
  { src: "images/pleine-lune.jpg", thumb: "images/thumbs/pleine-lune.jpg", title: "Pleine lune", title_en: "Full moon", category: "Ciels", ratio: "1725/3069" },
  { src: "images/auvergne-city-ii.jpg", thumb: "images/thumbs/auvergne-city-ii.jpg", title: "Larvegne-City II", title_en: "Larvegne-City II", category: "Événement/Soirée", ratio: "3500/2333" },
  { src: "images/fou-rire.jpg", thumb: "images/thumbs/fou-rire.jpg", title: "Fou rire", title_en: "Laughter", category: "Portraits", ratio: "3500/2333" },
  { src: "images/vallee-boisee.jpg", thumb: "images/thumbs/vallee-boisee.jpg", title: "Chemin, vallée boisée", title_en: "Path, wooded valley", category: "Paysages", ratio: "3500/2333" },
  { src: "images/mouette.jpg", thumb: "images/thumbs/mouette.jpg", title: "Mouette rieuse", title_en: "Black-headed gull", category: "Nature/Animalier", ratio: "3500/2387" },
  { src: "images/lune-dans-les-branches.jpg", thumb: "images/thumbs/lune-dans-les-branches.jpg", title: "Lune dans les branches", title_en: "Moon in the branches", category: "Ciels", ratio: "2560/1710" },
  { src: "images/derriere-le-voile.jpg", thumb: "images/thumbs/derriere-le-voile.jpg", title: "DJ set derrière le voile", title_en: "DJ set behind the veil", category: "Événement/Soirée", ratio: "3500/2333" },
  { src: "images/collage-i.jpg", thumb: "images/thumbs/collage-i.jpg", title: "Amour aveugle I", title_en: "Blind love I", category: "Portraits", ratio: "2800/3500" },
  { src: "images/la-barriere.jpg", thumb: "images/thumbs/la-barriere.jpg", title: "La barrière", title_en: "The gate", category: "Paysages", ratio: "3500/2334" },
  { src: "images/dans-l-eau.jpg", thumb: "images/thumbs/dans-l-eau.jpg", title: "Ragondin filant dans l'eau", title_en: "Coypu darting through the water", category: "Nature/Animalier", ratio: "2760/1840" },
  { src: "images/lunes.jpg", thumb: "images/thumbs/lunes.jpg", title: "Les 5 Lunes", title_en: "The 5 Moons", category: "Ciels", ratio: "1080/1920" },
  { src: "images/sourire-aux-platines.jpg", thumb: "images/thumbs/sourire-aux-platines.jpg", title: "Sourire", title_en: "Smile", category: "Événement/Soirée", ratio: "3500/2333" },
  { src: "images/verre-a-la-main.jpg", thumb: "images/thumbs/verre-a-la-main.jpg", title: "Dans les plantes", title_en: "Among the plants", category: "Portraits", ratio: "2335/3500" },
  { src: "images/lac-au-crepuscule.jpg", thumb: "images/thumbs/lac-au-crepuscule.jpg", title: "Lac au crépuscule", title_en: "Lake at dusk", category: "Paysages", ratio: "2338/1558" },
  { src: "images/rapace-perche.jpg", thumb: "images/thumbs/rapace-perche.jpg", title: "Rapace perché", title_en: "Perched raptor", category: "Nature/Animalier", ratio: "1968/3500" },
  { src: "images/mouvement-i.jpg", thumb: "images/thumbs/mouvement-i.jpg", title: "Mouvement I", title_en: "Motion I", category: "Événement/Soirée", ratio: "3500/2333" },
  { src: "images/silhouettes.jpg", thumb: "images/thumbs/silhouettes.jpg", title: "Deux frères du rap", title_en: "Two brothers of rap", category: "Portraits", ratio: "3500/2333" },
  { src: "images/drapeau.jpg", thumb: "images/thumbs/drapeau.jpg", title: "Drapeau dans les montagnes", title_en: "Flag in the mountains", category: "Paysages", ratio: "3500/2333" },
  { src: "images/sur-la-branche.jpg", thumb: "images/thumbs/sur-la-branche.jpg", title: "Rapace perché noir et blanc", title_en: "Perched raptor, black and white", category: "Nature/Animalier", ratio: "2542/2540" },
  { src: "images/mouvement-ii.jpg", thumb: "images/thumbs/mouvement-ii.jpg", title: "Mouvement II", title_en: "Motion II", category: "Événement/Soirée", ratio: "3500/2333" },
  { src: "images/cadre-dans-le-cadre.jpg", thumb: "images/thumbs/cadre-dans-le-cadre.jpg", title: "Cadre dans le cadre", title_en: "Frame within a frame", category: "Portraits", ratio: "3500/2335" },
  { src: "images/vallee.jpg", thumb: "images/thumbs/vallee.jpg", title: "Vallée alpine", title_en: "Alpine valley", category: "Paysages", ratio: "3500/2333" },
  { src: "images/herbes.jpg", thumb: "images/thumbs/herbes.jpg", title: "Herbes", title_en: "Grasses", category: "Nature/Animalier", ratio: "1970/3500" },
  { src: "images/toits-de-pierre.jpg", thumb: "images/thumbs/toits-de-pierre.jpg", title: "Refuge des Alpes", title_en: "Alpine refuge", category: "Paysages", ratio: "3500/2333" },
  { src: "images/crecerelle-en-trois-temps.jpg", thumb: "images/thumbs/crecerelle-en-trois-temps.jpg", title: "Faucon crécerelle en trois temps", title_en: "Kestrel in three stages", category: "Nature/Animalier", ratio: "2972/1670" },
  { src: "images/a-bord.jpg", thumb: "images/thumbs/a-bord.jpg", title: "À bord", title_en: "On board", category: "Portraits", ratio: "2333/3500" },
  { src: "images/la-coumasse.jpg", thumb: "images/thumbs/la-coumasse.jpg", title: "Lac de la Coumasse", title_en: "Lac de la Coumasse", category: "Paysages", ratio: "3500/2334" },
  { src: "images/crecerelle-en-trois-temps-noir-et-blanc.jpg", thumb: "images/thumbs/crecerelle-en-trois-temps-noir-et-blanc.jpg", title: "Faucon crécerelle en trois temps, noir et blanc", title_en: "Kestrel in three stages, black and white", category: "Nature/Animalier", ratio: "2972/1670" },
  { src: "images/collage-ii.jpg", thumb: "images/thumbs/collage-ii.jpg", title: "Amour aveugle II", title_en: "Blind love II", category: "Portraits", ratio: "2799/3500" },
  { src: "images/haute-montagne.jpg", thumb: "images/thumbs/haute-montagne.jpg", title: "Haute montagne", title_en: "High mountains", category: "Paysages", ratio: "3500/2333" },
  { src: "images/souche.jpg", thumb: "images/thumbs/souche.jpg", title: "Souche", title_en: "Tree stump", category: "Nature/Animalier", ratio: "2333/3500" },
  { src: "images/fumee-verte-i.jpg", thumb: "images/thumbs/fumee-verte-i.jpg", title: "Fumée verte I", title_en: "Green smoke I", category: ["Portraits", "Événement/Soirée"], ratio: "2333/3500" },
  { src: "images/ruisseau.jpg", thumb: "images/thumbs/ruisseau.jpg", title: "Ruisseau", title_en: "Stream", category: "Paysages", ratio: "2333/3500" },
  { src: "images/fumee-verte-ii.jpg", thumb: "images/thumbs/fumee-verte-ii.jpg", title: "Fumée verte II", title_en: "Green smoke II", category: ["Portraits", "Événement/Soirée"], ratio: "2333/3500" },
  { src: "images/ascenseur.jpg", thumb: "images/thumbs/ascenseur.jpg", title: "L'ascenseur bleu", title_en: "The blue elevator", category: "Portraits", ratio: "2333/3500" },
  { src: "images/contre-le-mur.jpg", thumb: "images/thumbs/contre-le-mur.jpg", title: "Contre le mur à Venise", title_en: "Against the wall in Venice", category: "Portraits", ratio: "2333/3500" },
  { src: "images/lumieres-de-fin-d-annee.jpg", thumb: "images/thumbs/lumieres-de-fin-d-annee.jpg", title: "Lumières de fin d'année sur Venise", title_en: "Holiday lights over Venice", category: "Portraits", ratio: "2333/3500" },
  { src: "images/vercingetorix-sous-les-fumigenes.jpg", thumb: "images/thumbs/vercingetorix-sous-les-fumigenes.jpg", title: "Vercingétorix sous les fumigènes", title_en: "Vercingetorix under the flares", category: "Rue", ratio: "2454/1636" },
];

// Noms anglais des catégories (la clé est le nom français utilisé dans PHOTOS).
const CATEGORY_EN = {
  "Paysages": "Landscapes",
  "Ciels": "Skies",
  "Nature/Animalier": "Nature/Wildlife",
  "Portraits": "Portraits",
  "Rue": "Street",
  "Événement/Soirée": "Event/Party"
};

// Tant qu'aucune photo n'est ajoutée, des emplacements élégants sont affichés.
const PLACEHOLDER_RATIOS = ["3/2", "2/3", "1/1", "2/3", "3/2", "1/1"];
