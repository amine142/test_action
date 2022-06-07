/* global tarteaucitron, tag */
import './css/main.scss';
import './css/view.scss';
import Osm from '../app/js/Map/Osm';
import AtTags from '../app/js/AtTags';

function generateScroll() {
    // Get element DOM of sec header
    const headerSec = document.querySelector('.progressParent');
    // Get the position Y of sec Header
    const sticky = headerSec.offsetTop;
    // Listener on scroll
    window.addEventListener('scroll', () => {
        /* PROGRESS BAR */
        // Get the height of document
        const heightDoc =
            document.documentElement.scrollHeight - window.innerHeight;
        // Get the scroll Y
        const position = window.scrollY;
        // Get the document width
        const widthDoc = document.documentElement.clientWidth;
        // Calculation of large bar
        const bar = (position / heightDoc) * widthDoc;
        // Apply CSS properties
        document.querySelector('#progress').style.width = bar + 'px';

        /* STICKY + Collapse header */
        // Add or remove stick class following view page position
        if (window.pageYOffset > sticky) {
            headerSec.classList.add('sticky');
        } else {
            headerSec.classList.remove('sticky');
        }
    });
}

function getTargetLinkAT() {
    document
        .querySelectorAll('div[data-module="paragraph"]')
        .forEach((item) => {
            item.querySelectorAll('a').forEach((elt) => {
                if (elt && !(elt.getAttribute('target') === '_blank')) {
                    elt.setAttribute('target', '_blank');
                }
            });
        });

    document.querySelectorAll('#myContentViewBody a').forEach((item) => {
        item.addEventListener('click', function () {
            let chapter3 = '';
            let moduleName = item
                .closest('[data-module]')
                .getAttribute('data-module');
            if (moduleName === 'paragraph') {
                moduleName = 'lien';
            }
            if (moduleName === 'mise-en-avant') {
                if (item.closest('[data-module]').querySelector('h3')) {
                    chapter3 =
                        ',"chapter3":"' +
                        item.closest('[data-module]').querySelector('h3')
                            .innerText +
                        '"';
                }
            }
            // AT Tag Call
            const jsonAt =
                '{"chapter2":"' +
                moduleName +
                '","level2":"50"' +
                chapter3 +
                '}';
            new AtTags().atTagsCallClick(jsonAt, this);
        });
    });
}

function dataMap() {
    const mapSelector = 'map';
    const mapDataset = document.getElementById(mapSelector).dataset;
    const map = new Osm('#' + mapSelector);
    const mapArray = [];
    mapArray.push({
        region: mapDataset.mapRegion,
        latitude: mapDataset.mapLatitude,
        longitude: mapDataset.mapLongitude,
        mediaURL: mapDataset.mapImage,
    });
    map.renderWithPin(mapArray, 'map', {
        zoom: 8,
        zoomControl: false,
        doubleClickZoom: false,
        dragging: false,
    });
}
document.addEventListener('DOMContentLoaded', () => {
    generateScroll();
    getTargetLinkAT();
    dataMap();
});

// Load AT + TAC
window.addEventListener('tarteaucitron_loaded', function () {
    if (tarteaucitron.state.atinternetcnil && typeof tag !== 'undefined') {
        const tag = document.querySelectorAll('.fr-tag');
        let itemString = '';
        tag.forEach(function (item, index, array) {
            const tagTreatment = item.innerText
                .trim()
                .replace(/'| |"/g, '_')
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '');
            if (index !== array.length - 1) {
                itemString += tagTreatment + ',';
            } else {
                itemString += tagTreatment;
            }
        });
        const jsonAt = {
            name: document.querySelector('h1').getAttribute('data-atLink-tag')
                ? document.querySelector('h1').getAttribute('data-atLink-tag')
                : document.querySelector('h1').innerText,
            level2: '50',
        };

        const customVars = {
            site: {
                1: 'fr',
                2: itemString,
                3: document
                    .querySelector('.date')
                    .innerText.split(':')[1]
                    .trim()
                    .split('/')
                    .reverse()
                    .join(''),
                15: window.location.href,
            },
        };
        new AtTags().atTagsCallPage(JSON.stringify(jsonAt), customVars);
    }
});
