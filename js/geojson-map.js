document.addEventListener('DOMContentLoaded', () => {
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));

  $$('.geojson-map').forEach(el => {
    const map = L.map(el);
    map.setView([46.66362, 0.93952], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    }).addTo(map);

    const jsonData = JSON.parse(decodeURI(el.dataset.geojson));
    const boundaries = L.latLngBounds([]);

    const layer = L.geoJson(jsonData, {
      pointToLayer: (point, latlng) => {
        const classes = [];
        const {people} = point.properties;
        boundaries.extend(latlng);

        if (!people || (people.match(/noémie/i) && people.match(/thomas/i))){
          classes.push('with--both');
        }
        else if (people && people.match(/noémie/i)) {
          classes.push('with--noemie');
        }
        else if (people && people.match(/thomas/i)) {
          classes.push('with--thomas');
        }

        const icon = L.divIcon({
          html: '<svg class="geo-marker" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="/images/marker.svg#Layer_1"></use></svg>',
          iconUrl: '/images/marker.svg',
          className: classes.join(' '),
          iconSize: 20,
        });

        return L.marker(latlng, { icon });
      },
    });

    layer.once('add', (evt) => {
      map.fitBounds(boundaries, {
        padding: [10, 10]
      });
    });

    layer.addTo(map);
  });

});
