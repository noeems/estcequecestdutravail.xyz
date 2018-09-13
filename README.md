# Est-ce que c'est du travail ?

Personal web site, based off the http://html5up.net/spectral design by
[@ajlkn](http://twitter.com/ajlkn).
The site uses jekyll, a method of creating and maintaining a web site,
which works by using local templates to generate static files that you upload
and sync with your remote site.

## With thanks to
Loïc Sander at Velvetyne foundry for the [Fengardo Neue font](http://velvetyne.fr/fonts/fengardo-neue/).

## Under [Creative Commons license CC BY-NC](http://creativecommons.org/licenses/by-nc/4.0/)
**English**
This license lets others remix, tweak, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don’t have to license their derivative works on the same terms.

**French**
Cette licence permet aux autres de remixer, arranger, et adapter votre œuvre à des fins non commerciales et, bien que les nouvelles œuvres doivent vous créditer en citant votre nom et ne pas constituer une utilisation commerciale, elles n’ont pas à être diffusées selon les mêmes conditions.

# Guide d'utilisation

## Ajouter une feuille de route

Une feuille de route est un fichier Markdown placé dans le répertoire `_itineraries`. ⭐️ [Exemple](_itineraries/2018-08.md).

### Embarquer une carte

1. Créer une carte avec Google Maps ou [uMap](https://umap.openstreetmap.fr/).
1. Mettre le lien dans une métadonnées `map` d'un fichier `_itineraries/<année>-<mois>.md`

```markdown
---
map: https://umap.openstreetmap.fr/en/...
---
```

### Générer la carte dynamiquement

1. Utiliser [geojson.io](https://geojson.io/) pour créer des lignes et des marqueurs.
1. Créer un fichier `_data/itinerary/<année>-<mois>.json` et y coller les données.

⭐️ [Exemple](data/itinerary/2018-08.json).
Attributs utilisés :

- `people` : Thomas, Noémie
- `marker-symbol` : un identifiant parmi ceux de [Maki Icons](https://www.mapbox.com/maki-icons/)
