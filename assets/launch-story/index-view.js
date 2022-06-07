/* global tag, tarteaucitron */

import './css/main.scss';
import './css/view.scss';
import Api from '../app/js/Api';
import ModuleManager from '../app/js/ModuleManager';
import pinDefault from '../images/common/icon_default_pin.svg';
import pinTriangle from '../images/common/triangle_pin.svg';
import {API_LAUNCH_STORIES_URL, LAUNCH_STORIES_URL} from './constants';
import AtTags from '../app/js/AtTags';
import Share from '../app/js/Share';
import L from 'leaflet';

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

// Space if thousand, 10 thousand etc.
function numberWithSpaces(rawNumberWithSpace) {
    return rawNumberWithSpace.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function generateMetadata(data) {
    // Title
    document.querySelector('h1').innerText = data.title;

    // Company type
    document.querySelector('.tag-type').innerText = data.structureType;

    // Company name
    document.querySelector('.tag-company').innerText = data.structureName;

    // Workers number
    if (data.employeesNumber !== null && data.employeesNumber !== 0) {
        document.querySelector('.tag-workers').innerText =
            data.employeesNumber + ' employés';
        document.querySelector('.tag-workers').classList.remove('hidden');
    } else {
        document.querySelector('.tag-company').classList.add('fr-mb-1w');
    }

    // Help amount
    if (data.receivedAmount !== null && data.receivedAmount !== 0) {
        document.querySelector('.tag-amount').innerText =
            numberWithSpaces(data.receivedAmount) + ' euros';
        document.querySelector('.wording-help').classList.remove('hidden');
        document.querySelector('.tag-amount').classList.remove('hidden');
    }

    // Measure / help name
    document.querySelector('.tag-measure').innerText = data.measure.name;

    // Area (state)
    document.querySelector('.tag-state').innerText = data.region;

    // Main topic
    document.querySelector('.tag-thematic-main').innerText =
        data.mainThematic.name;

    // Secondary topic
    if (data.secondaryThematics.length !== 0) {
        data.secondaryThematics.forEach(function (elt) {
            const span = document.createElement('span');
            span.classList.add(
                'fr-tag',
                'fr-tag--sm',
                'fr-mr-1w',
                'fr-mb-1w',
                'tag-thematic-secondary'
            );
            span.innerText = elt.name;
            if (document.querySelectorAll('.tag-thematic-secondary').length) {
                const lastNode = document.querySelectorAll(
                    '.tag-thematic-secondary'
                );
                lastNode[lastNode.length - 1].after(span);
            } else {
                document.querySelector('.tag-thematic-main').after(span);
            }
        });
    }

    // Published date
    const publishedAt = new Intl.DateTimeFormat('fr-FR').format(
        new Date(data.publishedAt)
    );
    document.querySelector('.date').innerText = 'Publié le : ' + publishedAt;

    // Lat / Long / Zoom for Map
    const latMap = data.latitude;
    const longMap = data.longitude;
    const zoomMap = 7;
    // Default pin ico map URL
    let icoPinMap = pinDefault;

    if (data.mediaURL) {
        const image = document.createElement('img');
        // Provide main picture URL + map pin picture
        image.src = icoPinMap = process.env.URL_MEDIA + data.mediaURL;
        document.querySelector('.fr-hflux').classList.remove('hidden');
        document
            .querySelector('.fr-view .fr-bloc-identite:first-child >div')
            .classList.add('isImage');
        document
            .querySelector('.fr-hflux .fr-content-media__img')
            .append(image);
    }

    // MAP if localization (long) is available
    if (longMap) {
        // lgt - ltt - zoom
        const map = L.map('map', {
            zoomControl: false,
            minZoom: zoomMap,
            maxZoom: zoomMap,
        }).setView([latMap, longMap], zoomMap);
        // Hide Leaflet wording
        map.attributionControl.setPrefix(false);
        map.scrollWheelZoom.disable();
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
            detectRetina: false,
        }).addTo(map);
        const myIcon = L.icon({
            // Get the URL main picture
            iconUrl: icoPinMap,
            iconSize: [40, 40],
            // Use the shadow to show triangle under bubble picture
            shadowUrl: pinTriangle,
            shadowSize: [20, 20],
            shadowAnchor: [10, 11],
        });
        L.marker([latMap, longMap], {icon: myIcon, clickable: false}).addTo(
            map
        );
    }

    // Leader paragraph
    document.querySelector('.tag-leader-paragraph').innerText =
        data.leadParagraph;
}

function generateContent(data, linkThematicSlug) {
    const moduleManager = new ModuleManager();
    if (data.editor) {
        const json = JSON.parse(data.editor);
        json.blocks.forEach((element) => {
            const module = moduleManager.getModule(element.type);
            if (module) {
                document
                    .getElementById('myContentViewBody')
                    .insertAdjacentHTML(
                        'beforeend',
                        module.render(element.data)
                    );
            }
        });
        document.querySelectorAll('#myContentViewBody a').forEach((item) => {
            item.addEventListener('click', function () {
                // AT Tag Call
                const jsonAt =
                    '{"click":"' +
                    this.innerText +
                    '","page_chapter1":"' +
                    document.querySelector('body').dataset.atTag +
                    '","page_chapter2":"' +
                    item.closest('[data-module]').getAttribute('data-module') +
                    '"}';
                new AtTags().clickPage(this, jsonAt);
            });
        });
        document.querySelectorAll('.videoCall .youtube-wrapper').forEach(() => {
            tarteaucitron.triggerJobsAfterAjaxCall();
        });
        document
            .querySelectorAll('div[data-module="paragraph"]')
            .forEach((item) => {
                item.querySelectorAll('a').forEach((elt) => {
                    if (elt && !(elt.getAttribute('target') === '_blank')) {
                        elt.setAttribute('target', '_blank');
                    }
                });
            });
        if (json.blocks.length !== 0) {
            const myArrayData = {
                title: data.title,
                shortTitle: data.shortTitle,
                image:
                    process.env.ENV_URL + (data.mediaURL ? data.mediaURL : ''),
                url:
                    process.env.ENV_URL + LAUNCH_STORIES_URL + linkThematicSlug,
                description: data.leadParagraph,
                text1: 'Vous avez aimé ce portrait ?',
                text2: 'Faites-le découvrir à votre entourage',
            };
            document
                .querySelector('.sharedBlock')
                .insertAdjacentHTML('beforeend', Share(myArrayData));
        }
    }
}

function generateView() {
    const thematic = document.querySelector('.view').dataset.thematic;
    const slug = document.querySelector('.view').dataset.slug;
    const linkThematicSlug = '/' + thematic + '/' + slug;
    if (!slug || !thematic) {
        return;
    }

    new Api().get(API_LAUNCH_STORIES_URL + linkThematicSlug).then((data) => {
        generateMetadata(data);
        generateContent(data, linkThematicSlug);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    generateScroll();
    generateView();
});

// Load AT + TAC
window.addEventListener('tarteaucitron_loaded', function () {
    if (tarteaucitron.state.atinternetcnil && typeof tag !== 'undefined') {
        const jsonAt =
            '{"page":"' +
            document.querySelector('h1').innerText +
            '","page_chapter1":"' +
            document.querySelector('body').dataset.atTag +
            '"}';
        new AtTags().setPropsPage('{"gabarit_page": "fiche_detail"}');
        new AtTags().viewPage(jsonAt);
    }
});
