/* global tarteaucitron */

import AtTags from '../../app/js/AtTags';
import VimeoTac from './VimeoTac';
import moment from 'moment';

import {LEVEL_AT} from '../constants';

export default function AtTagsContent() {
    document
        .querySelectorAll('#contents__main a, #contents__main button')
        .forEach((item) => {
            item.addEventListener('click', function () {
                const moduleName = item.closest('[data-module]');
                const moduleChildName = item.closest('[data-child-module]');
                const moduleConcatName = item.closest('[data-concat-module]');
                const aMarkup = item.closest('a');
                if (
                    aMarkup &&
                    !aMarkup.target &&
                    !aMarkup.closest('#content-summary')
                ) {
                    aMarkup.setAttribute('target', '_self');
                }
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
                    // For chapter3, use title data if main Module and h3 markup exist otherwise use Module data only if Child Module exist else empty (no set chapter3)
                    chapter3:
                        moduleName &&
                        moduleName.querySelector('h3') &&
                        moduleName.querySelector('h3').innerText !==
                            'Afficher la transcription'
                            ? moduleName.querySelector('h3').innerText
                            : moduleChildName
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
        VimeoTac();
        const contentType = document.querySelector('.content--type').innerText;
        const jsonAt = {
            name: document.querySelector('h1').innerText,
            chapter1: document.querySelector(
                '#breadcrumb-contents a[data-concat-module="acces"]'
            ).textContent,
            chapter2: document.querySelector('.mainParentThematicTarget')
                .innerText,
            chapter3: document.querySelector('.mainThematicTarget').innerText,
            level2: LEVEL_AT,
        };
        const customVars = {
            site: {
                1: 'fr',
                2: getAllThematics('[data-child-module="thematiques"]'),
                3: moment(
                    document
                        .querySelector('[data-published-date]')
                        .getAttribute('data-published-date'),
                    'DD-MM-YYYY'
                ).format('yyyyMMDD'),
                4: document.querySelector('[data-modified-date]')
                    ? moment(
                          document
                              .querySelector('[data-modified-date]')
                              .getAttribute('data-modified-date'),
                          'DD-MM-YYYY'
                      ).format('yyyyMMDD')
                    : '',
                6:
                    contentType === 'Article'
                        ? contentType +
                          '_' +
                          document
                              .querySelector('[data-format]')
                              .getAttribute('data-format')
                        : contentType,
                15: window.location.href,
                17: getAllThematics('[data-child-module="sous-thematiques"]'),
                18: document
                    .querySelector('[data-uuid]')
                    .getAttribute('data-uuid'),
            },
        };
        new AtTags().atTagsCallPage(JSON.stringify(jsonAt), customVars);
    }
});

function getAllThematics(thematics) {
    const getAllThematics = document.querySelectorAll(thematics);
    const getThematicArray = [];
    getAllThematics.forEach((thematic) => {
        getThematicArray.push(thematic.innerText);
    });
    const concatSep = getThematicArray.join('_/_');
    return concatSep;
}
