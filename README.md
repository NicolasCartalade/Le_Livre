# Nicolas Cartalade — Portfolio photographe

Site statique (HTML/CSS/JS), sans dépendance, hébergeable gratuitement sur GitHub Pages.

## Mettre en ligne sur GitHub Pages

1. Crée un dépôt public nommé **`<ton-pseudo-github>.github.io`** (l'adresse du site sera alors `https://<ton-pseudo-github>.github.io`).
2. Envoie-y tous les fichiers de ce dossier (`index.html`, `style.css`, `script.js`, `photos.js`, `images/`).
3. Dans **Settings → Pages**, choisis la branche `main` et le dossier `/ (root)`.
4. Le site est en ligne après une ou deux minutes.

## Ajouter des photos

1. Place tes images dans le dossier `images/` (JPEG, ~2000 px sur le grand côté, 300–600 Ko chacune pour un site rapide).
2. Déclare-les dans `photos.js` :

```js
{ src: "images/volcan-01.jpg", title: "Puy de Dôme", category: "Paysages", ratio: "3/2" },
```

3. Pour la photo d'en-tête, renseigne `HERO_IMAGE` dans `photos.js`.

Les filtres par catégorie apparaissent automatiquement dès qu'il y a au moins deux catégories.
