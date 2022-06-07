/* global tarteaucitron, tag */
import Api from '../app/js/Api';
import List from './js/List';
import initiateFilters from './js/Filters';
import Measure from '../app/js/Measure';
import Pager from '../app/js/Pager';
import State from '../app/js/State';
import GroupButtons from '../app/js/GroupButtons';
import Map from './js/Map';
import './css/main.scss';
import './css/list.scss';
import './css/filter.scss';
import './css/map.scss';
import {
    API_LAUNCH_STORIES_PIN,
    LAUNCH_STORIES_PIN,
    API_LAUNCH_STORIES_URL,
    LAUNCH_STORIES_PAGER,
    MEASURE_URL,
    THEMATICS_URL,
} from './constants';
import AtTags from '../app/js/AtTags';
import Copy from '../app/js/Copy';

const levelAT = '50';
const atSite2 = document.querySelector('h1').getAttribute('data-atlink-tag');

// Listing + pager
function initiateListing(dataURL, scrollPage) {
    new Api().get(dataURL).then((dataContent) => {
        // Not scroll / empty content for first loading page
        if (scrollPage) {
            document
                .querySelector('.cardsContainer')
                .scrollIntoView({behavior: 'smooth', block: 'start'});
        }
        if (document.querySelector('.list').querySelectorAll('*').length > 0) {
            document
                .querySelector('.list')
                .querySelectorAll('*')
                .forEach((n) => n.remove());
            document
                .querySelector('.fr-pagination')
                .querySelectorAll('*')
                .forEach((n) => n.remove());
        }
        if (dataContent['hydra:member'].length > 0) {
            // List
            dataContent['hydra:member'].forEach((item) => {
                document
                    .querySelector('.list')
                    .insertAdjacentHTML('beforeend', List(item));
            });
            document.querySelectorAll('.fr-card__link').forEach((item) => {
                item.addEventListener('click', function () {
                    // AT Tag Call
                    const jsonAt = {
                        name: this.innerText,
                        chapter2: 'cards',
                        chapter3: this.closest('.fr-card').querySelector(
                            '.fr-tag'
                        ).innerText,
                        level2: levelAT,
                    };
                    new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);
                });
            });
            if (
                dataContent['hydra:view'] &&
                dataContent['hydra:view']['hydra:last']
            ) {
                // Pager
                document
                    .querySelector('.pager .fr-pagination')
                    .appendChild(
                        new Pager(dataContent).render(initiateListing)
                    );
            }
            initiateMap(dataURL);
        } else {
            document
                .querySelector('.list')
                .insertAdjacentHTML(
                    'beforeend',
                    "<div class='fr-col-lg-6 fr-text--lg no-result'><p class='fr-mt-0 fr-px-3w'>Votre recherche n'est associée à aucun résultat, merci d'essayer d'autres critères de recherche.</p></div>"
                );
            initiateMap(dataURL);
        }
    });
}

function initiateThematic(dataURL) {
    new Api().get(dataURL).then((dataContent) => {
        document
            .querySelector('.thematics-tags')
            .appendChild(
                GroupButtons(
                    dataContent['hydra:member'],
                    'thematics-tags',
                    levelAT,
                    'thematique'
                )
            );
    });
}

function initiateMeasure(dataURL) {
    new Api().get(dataURL).then((dataContent) => {
        document
            .querySelector('.measure')
            .appendChild(Measure(dataContent['hydra:member'], levelAT));
    });
}

function initiateState(dataURL) {
    new Api().get(dataURL, true).then((dataContent) => {
        State(dataContent, '#fr-accordion-state');
    });
}

function initiateMap(dataURL) {
    let zoomLevel = true;
    const a = document.createElement('a');
    a.href = dataURL;
    const param = a.search ? '&' + a.search.substring(1) : '';
    if (param) {
        zoomLevel = false;
    }
    const pinCall =
        a.pathname + LAUNCH_STORIES_PIN + LAUNCH_STORIES_PAGER + param;
    // Hide button
    document
        .querySelector('#backToMetropolitan')
        .classList.remove('onClickMap');

    new Api().get(pinCall).then((dataContent) => {
        if (document.querySelector('.map').querySelectorAll('*').length > 0) {
            document.querySelector('.map').querySelector('.mapParent').remove();
        }
        if (
            document
                .querySelector('.innerMapDomTom')
                .querySelectorAll('.mapParent').length > 0
        ) {
            document
                .querySelector('.innerMapDomTom')
                .querySelectorAll('.mapParent')
                .forEach((n) => n.remove());
        }
        // Map, send request call specific pin in 2nd param
        Map(
            dataContent['hydra:member'],
            API_LAUNCH_STORIES_PIN + param,
            levelAT,
            zoomLevel,
            atSite2
        );
    });
}

// AT click static elements
function ATClickStatic() {
    AtClickService('.socialNetwork .fr-share', 'partage');
    AtClickService(
        '.fr-rebound a',
        'mise-en-avant',
        'pour_en_savoir_plus_sur_les_mesures_du_plan_de_relance'
    );
}

function AtClickService(eltDom, chapter2, chapter3) {
    document.querySelectorAll(eltDom).forEach((item) => {
        item.addEventListener('click', function () {
            // AT Tag Call
            const jsonAt = {
                chapter2: chapter2,
                chapter3: chapter3,
                level2: levelAT,
            };
            new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);
        });
    });
}

// Initiate at first load
document.addEventListener('DOMContentLoaded', () => {
    initiateListing(API_LAUNCH_STORIES_URL, false);
    initiateThematic(THEMATICS_URL);
    initiateMeasure(MEASURE_URL);
    initiateState('https://geo.api.gouv.fr/regions/');
    initiateFilters(initiateListing);
    ATClickStatic();
    Copy();
});

// Load AT + TAC
window.addEventListener('tarteaucitron_loaded', function () {
    if (tarteaucitron.state.atinternetcnil && typeof tag !== 'undefined') {
        const titleAT = document
            .querySelector('h1')
            .getAttribute('data-atLink-tag');
        const jsonAt = {
            name: titleAT || document.querySelector('h1').innerText,
            level2: levelAT,
        };
        const customVars = {
            site: {
                1: 'fr',
                2: 'france_relance',
                15: window.location.href,
            },
        };
        new AtTags().atTagsCallPage(JSON.stringify(jsonAt), customVars);
    }
});
