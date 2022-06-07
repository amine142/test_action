/* global tag, tarteaucitron */
import './css/main.scss';
import {
    API_AGENDA_CURRENT_URL,
    AGENDA_PAGER,
    EVENTS_URL,
    MEDIA_URL,
    CSV_URL,
} from './constants';
import {SCREEN_SWITCH} from '../app/js/Constants';
import Api from '../app/js/Api';
import Paging from '../app/js/Paging';
import Copy from '../app/js/Copy';
import GroupButtons from '../app/js/GroupButtons';
import List from './js/List';
import Map from './js/Map';
import Date from './js/Date';
import Send from './js/Send';
import Weekly from './js/Weekly';
import Datepicker from './js/Datepicker';
import moment from 'moment';
import 'moment/locale/fr';
import AtTags from '../app/js/AtTags';

const levelAT = '4';
const atSite2 = 'agenda_' + document.querySelector('h1 span').innerText;

function dataList(dataURL, scrollPage, prevWeek, nextWeek) {
    new Api().get(dataURL).then((dataContent) => {
        // Not scroll / empty content for first loading page
        if (scrollPage) {
            document.querySelector('.col-content:nth-child(2)').scrollIntoView({
                behavior: 'smooth',
            });
        } else {
            prevWeek = dataContent['hydra:member'].length
                ? Date(dataContent['hydra:member'][0].date)
                : undefined;
            nextWeek = document.querySelector('#week').dataset.end;
            Datepicker();
            ATClick();
        }
        // Delete DOM function
        const getDomArray = [
            '.tile-group',
            '.pager .fr-pagination .event-pager',
            '.pager .fr-pagination .weekly-pager',
        ];
        destroyDom(getDomArray);

        // Build List if API return result
        if (dataContent['hydra:totalItems'] > 0) {
            dataContent['hydra:member'].forEach((item) => {
                document
                    .querySelector('.tile-group')
                    .insertAdjacentHTML('beforeend', List(item));
            });

            // Generate PDF file link (check if it's in the API)
            if (dataContent['hydra:member'][0].weekly.pdfUrl && !scrollPage) {
                const pdfDiv = document.querySelector('.pdf');
                pdfDiv.querySelector('a+span').innerText =
                    'PDF - ' +
                    formatBytes(dataContent['hydra:member'][0].weekly.pdfSize);
                pdfDiv.querySelector('a').href =
                    MEDIA_URL + dataContent['hydra:member'][0].weekly.pdfUrl;
                pdfDiv.classList.add('visible');
            }

            // Check week after and before to display link (only for 'This week')
            if (
                document.querySelector('#accordion-predefinie input#week')
                    .checked &&
                document.querySelectorAll('.events-tags .fr-tag.active')
                    .length === 0
            ) {
                Weekly(dataList, prevWeek, nextWeek, '.weekly-pager');
            } else if (
                dataContent['hydra:view'] &&
                dataContent['hydra:view']['hydra:last']
            ) {
                // Pager
                Paging(dataList, dataContent, 'sm', 'Page', '.event-pager');
            }
            atListReload();
            dataMap(dataURL);
        } else {
            // No result
            destroyDom(['.map']);
            document
                .querySelector('.map')
                .insertAdjacentHTML(
                    'beforeend',
                    "<p class='fr-p-2w fr-mt-10w fr-mt-md-4w'>Votre recherche n'est associée à aucun résultat, merci d'essayer d'autres critères de recherche.</p>"
                );
        }
        window.addEventListener('resize', mobileScrollToTop);
        if (window.innerWidth <= SCREEN_SWITCH) {
            mobileScrollToTop();
        }

        // Generate CSV file link
        const csvDiv = document.querySelector('.csv');
        csvDiv.querySelector('a').href = CSV_URL;
        csvDiv.querySelector('a+span').innerText = 'CSV';
    });
}

function destroyDom(arrayDestroy) {
    arrayDestroy.forEach((item) => {
        if (document.querySelector(item).querySelectorAll('*').length > 0) {
            document.querySelector(item).innerHTML = '';
        }
    });
}

function dataListEvent(dataURL) {
    new Api().get(dataURL).then((dataContent) => {
        document
            .querySelector('#accordion-evenements')
            .appendChild(
                GroupButtons(
                    dataContent['hydra:member'],
                    'events-tags',
                    levelAT,
                    'evenement',
                    atSite2
                )
            );
    });
}

// Return PDF size
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Octet';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Octets', 'Ko', 'Mo', 'Go', 'To', 'Po', 'Eo', 'Zo', 'Yo'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function mobileScrollToTop() {
    if (window.innerWidth <= SCREEN_SWITCH) {
        // Only small devices
        // If scroll up 350px => display scroll to top button
        window.addEventListener(
            'scroll',
            function () {
                if (document.documentElement.scrollTop > 350) {
                    document
                        .querySelector('.pinMapButton')
                        .classList.add('visible');
                } else {
                    document
                        .querySelector('.pinMapButton')
                        .classList.remove('visible');
                }
            },
            {passive: true}
        );

        // Click on place => scroll to top
        const clickMapToTop = document.querySelectorAll('.scrollToMap');
        clickMapToTop.forEach((item) => {
            item.addEventListener('click', function () {
                document
                    .querySelector('.col-content:nth-child(2)')
                    .scrollIntoView({
                        behavior: 'smooth',
                    });
            });
        });

        // Observer interact for filter on sticky top detection, sticky CSS position is not enougth

        if (
            'IntersectionObserver' in window &&
            window.innerWidth <= SCREEN_SWITCH
        ) {
            const el = document.querySelector(
                '.agenda section .col-content:first-child'
            );
            const observer = new IntersectionObserver(
                ([e]) =>
                    e.target.classList.toggle(
                        'is-pinned',
                        e.intersectionRatio < 1
                    ),

                {threshold: [1]}
            );

            observer.observe(el);
        }

        // Click filter handle
        const colorTitle = document.querySelectorAll('.colorTitle');
        const closeDiv = document.createElement('span');
        closeDiv.classList.add('fr-text--sm', 'fr-mb-0', 'closeFilter');
        closeDiv.innerHTML =
            'Fermer <span class="fr-fi-close-line fr-fi--sm" aria-hidden="true"></span>';
        colorTitle.forEach((item) => {
            item.addEventListener('click', function (e) {
                e.stopImmediatePropagation();
                if (
                    document.documentElement.scrollTop <
                    document.querySelector('header').offsetHeight +
                        document.querySelector('section:first-child')
                            .offsetHeight
                ) {
                    document
                        .querySelector('.fr-fi-calendar-line')
                        .scrollIntoView({
                            behavior: 'smooth',
                        });
                }
                document
                    .querySelector(
                        'section:last-child .col-content:first-child'
                    )
                    .classList.toggle('filterOpen');
                document.querySelector('html').classList.toggle('blockScroll');
                if (document.querySelector('.filterOpen')) {
                    item.appendChild(closeDiv);
                    if (item.querySelector('.text').innerText === 'Filtres') {
                        item.querySelector('.text').innerText =
                            'Modifier les filtres';
                    }
                    document
                        .querySelector('.fr-accordions-group')
                        .classList.add('displayFilter');
                } else {
                    item.removeChild(closeDiv);
                    if (
                        item.querySelector('.text').innerText ===
                        'Modifier les filtres'
                    ) {
                        item.querySelector('.text').innerText = 'Filtres';
                    }
                    document
                        .querySelector('.fr-accordions-group')
                        .classList.remove('displayFilter');
                }

                colorTitle.forEach((item) => {
                    if (this !== item) {
                        item.classList.toggle('displayFilter');
                    }
                });
            });
        });
    }
}

function validateButton() {
    // Validate filter button
    document.querySelector('html').classList.remove('blockScroll');
    document
        .querySelector('.btn-filter-submit button')
        .addEventListener('click', function () {
            if (window.innerWidth <= SCREEN_SWITCH) {
                if (document.querySelector('.closeFilter')) {
                    document
                        .querySelector('.closeFilter')
                        .parentElement.click();
                }
            }
            // Check define input date
            const dateInput = document.querySelectorAll(
                '#accordion-predefinie input'
            );
            let dateRange = '';
            let startDateValid = '';
            let endDateValid = '';
            const inputWeek = document.querySelector('input#week');
            const inputMonth = document.querySelector('input#month');
            const inputLast3Months = document.querySelector(
                'input#last3Months'
            );
            const pickDateStart = document.querySelector('.start');
            const pickDateEnd = document.querySelector('.end');
            if (
                !inputWeek.checked &&
                !inputMonth.checked &&
                !inputLast3Months.checked &&
                pickDateStart.value === '' &&
                pickDateEnd.value === ''
            ) {
                inputWeek.click();
            }

            dateInput.forEach((item) => {
                if (item.checked) {
                    dateRange =
                        moment(item.dataset.start).format('D MMM') +
                        ' - ' +
                        moment(item.dataset.end).format('D MMM');
                    startDateValid = moment(item.dataset.start)
                        .subtract(1, 'days')
                        .format('YYYY-MM-DD');
                    endDateValid = item.dataset.end;
                }
            });
            // Check datepicker input date
            if (pickDateStart.value !== '' && pickDateEnd.value === '') {
                dateRange =
                    'À partir du ' +
                    moment(pickDateStart.value).format('D MMM');
            }
            if (pickDateEnd.value !== '' && pickDateStart.value === '') {
                dateRange =
                    "Jusqu'au " + moment(pickDateEnd.value).format('D MMM');
            }
            if (pickDateEnd.value !== '' && pickDateStart.value !== '') {
                dateRange =
                    moment(pickDateStart.value).format('D MMM') +
                    ' - ' +
                    moment(pickDateEnd.value).format('D MMM');
            }

            document.querySelector(
                '.colorTitle:first-child .text'
            ).innerText = dateRange;
            Send(dataList, true, startDateValid, endDateValid);
        });
}

function ATClick() {
    document
        .querySelectorAll(
            '.agenda a:not(.leaflet-control-zoom-in):not(.leaflet-control-zoom-out)',
            '.agenda button:not(.collapseFilter):not(.fr-tag.fr-thematic)',
            '.agenda .fr-radio-group label'
        )
        .forEach((item) => {
            item.addEventListener('click', function () {
                if (
                    item.classList.contains('active') ||
                    (!item.parentElement.classList.contains(
                        'fr-accordion__title'
                    ) &&
                        !item.closest('duet-date-picker'))
                ) {
                    const moduleName = item.closest('[data-module]')
                        ? item
                              .closest('[data-module]')
                              .getAttribute('data-module')
                        : false;
                    const moduleChildName = item.closest('[data-child-module]')
                        ? item
                              .closest('[data-child-module]')
                              .getAttribute('data-child-module')
                        : '';
                    let name = this.getAttribute('data-text')
                        ? this.getAttribute('data-text')
                        : this.innerText;
                    if (moduleName === 'filtre') {
                        name = 'recherche_' + name;
                    }
                    let type = '';
                    if (moduleName === 'bouton') {
                        type = 'download';
                    }
                    if (
                        moduleName === 'partage' ||
                        moduleName === 'haut_de_page'
                    ) {
                        type = 'action';
                    }
                    if (moduleName === 'pagination') {
                        type = 'navigation';
                    }
                    // AT Tag Call
                    const jsonAt = {
                        name: name,
                        chapter1: atSite2,
                        chapter2: moduleName,
                        chapter3: moduleChildName,
                        level2: levelAT,
                        type: type,
                    };
                    new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);
                }
            });
        });
}

function atListReload() {
    let name;
    let chapter3;
    document
        .querySelectorAll(
            '.col-content .tile-group button, .col-content .pager button, .col-content .fr-link--cart'
        )
        .forEach((item) => {
            item.addEventListener('click', function () {
                const moduleName = item
                    .closest('[data-module]')
                    .getAttribute('data-module');
                if (moduleName === 'pagination') {
                    name = this.innerText
                        ? this.innerText
                        : this.parentNode.querySelector('.text').innerText;
                } else {
                    name = this.innerText;
                    chapter3 =
                        this.parentNode
                            .querySelector('.fr-tile__detail .date')
                            .innerText.split('/')
                            .reverse()
                            .join('-') +
                        '_' +
                        this.parentNode.querySelector('.fr-tile__detail .time')
                            .innerText;
                }
                // AT Tag Call
                const jsonAt = {
                    name: name,
                    chapter1: atSite2,
                    chapter2: moduleName,
                    chapter3: chapter3,
                    level2: levelAT,
                    type: 'action',
                };
                new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);
            });
        });
}

// Generate MAP
function dataMap(dataURL) {
    const a = document.createElement('a');
    a.href = dataURL;
    if (
        !document.querySelector('#week').checked ||
        (document.querySelector('#week').checked &&
            document.querySelectorAll('.events-tags .fr-tag.active').length > 0)
    ) {
        const param = a.search ? '&' + a.search.substring(1) : '';
        dataURL = a.pathname + AGENDA_PAGER + param;
    }
    new Api().get(dataURL).then((dataContent) => {
        destroyDom(['.map']);
        if (dataContent['hydra:totalItems'] > 0) {
            Map(dataContent['hydra:member'], levelAT, atSite2);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    dataListEvent(EVENTS_URL);
    dataList(API_AGENDA_CURRENT_URL, false);
    validateButton();
    Copy();
});

// Load AT + TAC
window.addEventListener('tarteaucitron_loaded', function () {
    if (tarteaucitron.state.atinternetcnil && typeof tag !== 'undefined') {
        const jsonAt = {
            name: atSite2,
            level2: levelAT,
            chapter1: 'composition_du_gouvernement',
            chapter2: 'premier_ministre',
        };
        const customVars = {
            site: {
                1: 'fr',
                2: 'agenda',
                15: window.location.href,
            },
        };
        new AtTags().atTagsCallPage(JSON.stringify(jsonAt), customVars);
    }
});
