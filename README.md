# Nicolas Cartalade — Portfolio photographe

Site statique (HTML/CSS/JS), sans dépendance, hébergé sur GitHub Pages. Deux langues : français (`index.html`) et anglais (`en/index.html`), avec un sélecteur FR / EN dans l'en-tête.

## Structure

- `index.html` : page française · `en/index.html` : page anglaise
- `style.css`, `script.js` : mise en page et comportement (communs aux deux langues)
- `photos.js` : la liste des photos, leurs titres (FR et EN), les catégories et la photo d'en-tête
- `images/` : photos en grand format · `images/thumbs/` : miniatures de la grille
- `video/` : la vidéo en boucle de la section « À propos »

## Ajouter ou modifier des photos

1. Place l'image grand format dans `images/` (JPEG, ~3500 px sur le grand côté) et sa miniature (~1000 px de large) dans `images/thumbs/`, avec le même nom.
2. Ajoute une ligne dans `photos.js` (l'ordre des lignes = l'ordre d'affichage) :

```js
{ src: "images/exemple.jpg", thumb: "images/thumbs/exemple.jpg", title: "Exemple", title_en: "Example", category: "Paysages", ratio: "3500/2333" },
```

3. Photo d'en-tête : `HERO_IMAGE` dans `photos.js`.

Les filtres de catégories se créent tout seuls ; les noms anglais des catégories sont dans `CATEGORY_EN` (`photos.js`).

## Visibilité

Le site est référençable par les moteurs de recherche (pas de balise `noindex`). Pour le masquer à nouveau, ajouter `<meta name="robots" content="noindex, nofollow">` dans le `<head>` de `index.html` et de `en/index.html`. GitHub Pages ne propose pas de mode privé sur un compte personnel : toute personne ayant le lien peut ouvrir le site.
