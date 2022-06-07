/* global $ */

// DS
import '@gouvfr/dsfr/dist/dsfr/dsfr.min.css';

// MAP
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import 'leaflet.markercluster/dist/leaflet.markercluster.js';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

// AT tag
import AtTags from './js/AtTags';

import './css/app.scss';

// Import GLobal Jquery in all project
global.$ = global.jQuery = $;

// @TODO : REMOVE THIS WHEN SEARCH WILL BE BUILD
window.addEventListener('DOMContentLoaded', (event) => {
    new AtTags().atTagsCallStatic();
    document
        .querySelector('#search-container button')
        .addEventListener('click', function (e) {
            document.location.href =
                'https://www.gouvernement.fr/search/site/' +
                document.querySelector('#search-container-input').value;
            e.preventDefault();
        });
});
