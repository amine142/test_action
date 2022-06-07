/* global tarteaucitron */

import AtTags from '../app/js/AtTags';
import Api from '../app/js/Api';
import List from './js/List';
import Pager from './js/Pager';
import {
    initiateThematics,
    initiateSubThematics,
    initiateCheckbox,
    updateResultCount,
    isPmVar,
} from './js/Filter';
import './css/filter.scss';
import './css/main-list.scss';
import './css/pager.scss';

import {API_CONTENT_URL, LEVEL_AT} from './constants';

// Listing
export function initiateListing(dataURL, scrollTopPage) {
    new Api().get(dataURL).then((dataContent) => {
        const displayTotalResult = document.querySelector('.result-count');
        const searchParams = new URLSearchParams(window.location.search);
        const pagerWrapper = document.querySelector('.pager');
        const emptyResult = document.querySelector('.no-result');
        if (scrollTopPage) {
            document
                .querySelector('html')
                .scrollIntoView({behavior: 'smooth', block: 'start'});
        }
        if (document.querySelector('.list').querySelectorAll('*').length > 0) {
            document
                .querySelector('.list')
                .querySelectorAll('*')
                .forEach((n) => n.remove());
        }
        if (dataContent && dataContent['hydra:member'].length > 0) {
            if (emptyResult) emptyResult.innerHTML = '';
            // List
            dataContent['hydra:member'].forEach((item) => {
                document
                    .querySelector('.list')
                    .insertAdjacentHTML('beforeend', List(item));
            });
            if (pagerWrapper.innerHTML) pagerWrapper.innerHTML = '';

            if (
                dataContent['hydra:view'] &&
                dataContent['hydra:view']['hydra:last']
            ) {
                // Pager
                pagerWrapper.appendChild(new Pager(dataContent).render());
            }

            document.querySelectorAll('.tile a').forEach((item) => {
                item.addEventListener('click', function () {
                    const moduleName = item.closest('[data-module]');
                    // AT Tag Call
                    const jsonAt = {
                        chapter2: moduleName.getAttribute('data-module'),
                        level2: LEVEL_AT,
                    };
                    new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);
                });
            });
        } else {
            emptyResult.innerHTML = `
                <p class="fr-mb-0">Votre sélection n’a retourné aucun résultat. Pour l’améliorer vous pouvez :</p>
                <ul>
                    <li>Supprimer certains filtres</li>
                    <li>Rechercher un résultat moins spécifique</li>
                </ul>`;
            displayTotalResult.classList.remove('visible');
            if (pagerWrapper) pagerWrapper.innerHTML = '';
        }
        updateResultCount(dataContent['hydra:totalItems']);
        if (Array.from(searchParams).length) {
            displayTotalResult.classList.add('visible');
        } else {
            displayTotalResult.classList.remove('visible');
        }
    });
}

// Initiate at first load
document.addEventListener('DOMContentLoaded', () => {
    const searchParams = new URLSearchParams(window.location.search);
    const isParam = Array.from(searchParams).length;
    const concat = isParam ? '&' : '?';
    if (searchParams.has('page')) {
        const isNum = /^\d+$/.test(searchParams.get('page'));
        if (!isNum) {
            searchParams.set('page', 1);
        }
    }
    const apiURL = isParam
        ? `${API_CONTENT_URL}?${searchParams.toString()}` +
          isPmVar('&', true) +
          initiateCheckbox(concat)
        : API_CONTENT_URL + isPmVar('?', true) + initiateCheckbox(concat);
    initiateListing(apiURL, false);
    initiateThematics();
    if (isParam) {
        initiateSubThematics();
    }
    AtClick();
});

// AT Click
function AtClick() {
    document
        .querySelectorAll('.content-list a, .content-list button')
        .forEach((item) => {
            item.addEventListener('click', function () {
                const moduleName = item.closest('[data-module]');
                const moduleChildName = item.closest('[data-child-module]');
                const moduleConcatName = item.closest('[data-concat-module]');
                // AT Tag Call
                const jsonAt = {
                    // For name, check if it needs to concat specific wording with data
                    name: moduleConcatName
                        ? moduleConcatName.getAttribute('data-concat-module') +
                          '_' +
                          item.innerText
                        : item.innerText,
                    // For chapter2, use data from Child Module if exists otherwise use Module wording else empty (no set chapter2)
                    chapter2: moduleChildName
                        ? moduleChildName.getAttribute('data-child-module')
                        : moduleName
                        ? moduleName.getAttribute('data-module')
                        : '',
                    level2: LEVEL_AT,
                };
                new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);
            });
        });
}

// Load TAC
window.addEventListener('tarteaucitron_loaded', function () {
    if (tarteaucitron.state.atinternetcnil && typeof tag !== 'undefined') {
        const jsonAt = {
            name: document.querySelector('h1').innerText,
            level2: LEVEL_AT,
        };
        const customVars = {
            site: {
                1: 'fr',
                6: 'page-liste',
                15: window.location.href,
            },
        };
        new AtTags().atTagsCallPage(JSON.stringify(jsonAt), customVars);
    }
});
