/* global tarteaucitron, tag */
import '../app/css/summary.scss';
import '../app/css/recentsArticles.scss';
import './css/main.scss';
import {SCREEN_MOBILE_SWITCH} from '../app/js/Constants';
import Copy from '../app/js/Copy.js';
import AtTags from '../app/js/AtTags';
import Summary from '../app/js/summary';

// Slug defines for AT ID
const slugAT = document.querySelector('main').getAttribute('data-slug');

function generateScroll() {
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
    });
}

function getTargetLinkAT() {
    let levelHitAT = '52';
    const titlePage = document.querySelector('h1');
    const brandLogo = document
        .querySelector('.logo-container span')
        .textContent.trim();
    const chapter1 =
        titlePage.textContent.trim() === brandLogo
            ? 'accueil_' + titlePage.textContent.trim()
            : titlePage.textContent.trim();
    if (slugAT) {
        if (slugAT.indexOf('/france-relance') > -1) {
            levelHitAT = '46';
        } else if (slugAT.indexOf('/transformation-numerique') > -1) {
            levelHitAT = '51';
        } else if (slugAT.indexOf('/info-ukraine') > -1) {
            levelHitAT = '53';
        }
    }
    document
        .querySelectorAll('div[data-module="paragraph"]')
        .forEach((item) => {
            item.querySelectorAll('a').forEach((elt) => {
                if (elt && !(elt.getAttribute('target') === '_blank')) {
                    elt.setAttribute('target', '_blank');
                }
            });
        });
    document.querySelectorAll('.fr-breadcrumb__list li a').forEach((item) => {
        const breadcrumbAT = {
            chapter1: chapter1,
            chapter2: 'fil-ariane',
            level2: levelHitAT,
            type: 'navigation',
        };
        item.setAttribute('data-atLink-tag', JSON.stringify(breadcrumbAT));
    });
    const listTarget = document.querySelectorAll('div[data-module=liste] a');
    if (listTarget) {
        listTarget.forEach((item) => {
            item.setAttribute('target', '_self');
        });
    }

    const underMenu = document.querySelectorAll(
        '.fr-sidemenu__inner .fr-nav__list a'
    );
    const underMenuBtn = document.querySelectorAll(
        '.fr-sidemenu__inner .fr-nav__btn'
    );

    if (underMenu) {
        underMenu.forEach((item) => {
            const underMenuAT = {
                name: 'acces_' + item.textContent,
                chapter1: chapter1,
                chapter2: 'navigation-secondaire',
                chapter3: brandLogo,
                level2: levelHitAT,
            };
            item.setAttribute('data-atLink-tag', JSON.stringify(underMenuAT));
        });
    }

    if (underMenuBtn) {
        underMenuBtn.forEach((item) => {
            const underMenuATBtn = {
                name: 'acces_' + item.textContent,
                chapter1: chapter1,
                chapter2: 'navigation-secondaire',
                chapter3: brandLogo,
                level2: levelHitAT,
            };

            item.addEventListener('click', function () {
                if (item.getAttribute('aria-expanded') === 'false') {
                    new AtTags().atTagsCallClick(
                        JSON.stringify(underMenuATBtn),
                        this
                    );
                }
            });
        });
    }

    document
        .querySelectorAll(
            '#myContentViewBody a, #myContentViewBody button, #content-summary a, input[type=radio]'
        )
        .forEach((item) => {
            item.addEventListener('click', function () {
                let chapter3 = '';
                let moduleName = item
                    .closest('[data-module]')
                    .getAttribute('data-module');
                const moduleChildName = item.closest('[data-child-module]')
                    ? item
                          .closest('[data-child-module]')
                          .getAttribute('data-child-module')
                    : false;
                if (moduleName === 'paragraph') {
                    moduleName = 'lien';
                }
                if (
                    moduleName === 'mise-en-avant' ||
                    moduleName === 'publications-recentes' ||
                    moduleName === 'liens-transverses'
                ) {
                    if (item.closest('[data-module]').querySelector('h3')) {
                        chapter3 = item
                            .closest('[data-module]')
                            .querySelector('h3').innerText;
                    }
                }
                if (moduleChildName) {
                    let moduleChildtext = '';
                    if (item.closest('[data-module]').querySelector('h2')) {
                        moduleChildtext = item
                            .closest('[data-module]')
                            .querySelector('h2').innerText;
                    } else {
                        moduleChildtext = item
                            .closest('[data-module]')
                            .querySelector('p').innerText;
                    }
                    if (
                        !item.closest('.press') &&
                        !item.closest('.infoBlock')
                    ) {
                        chapter3 =
                            item
                                .closest('[data-module]')
                                .getAttribute('data-module') +
                            '_-_' +
                            moduleChildtext;
                        moduleName = moduleChildName;
                    } else {
                        chapter3 = moduleChildtext;
                        moduleName = item
                            .closest('[data-child-module]')
                            .getAttribute('data-child-module');
                    }
                }
                // AT Tag Call
                const jsonAt = {
                    name:
                        item.type === 'radio'
                            ? item.parentNode.querySelector('label').textContent
                            : item.closest('#content-summary')
                            ? 'acces_' + item.textContent
                            : item.textContent,
                    chapter1: chapter1,
                    chapter2: moduleName,
                    level2: levelHitAT,
                    chapter3: chapter3,
                };
                new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);
            });
        });
}

// Hardcoded for summary stop stick when meets specific div element.
function getSummaryStop(summaryDom, stopTopDom) {
    const scrollBarPosition = window.pageYOffset | document.body.scrollTop;
    const divTop = document.querySelector('.summary').offsetTop;
    const stopTop = stopTopDom.offsetTop;
    if (scrollBarPosition > divTop && scrollBarPosition < stopTop) {
        summaryDom.style.position = 'sticky';
    } else if (scrollBarPosition > stopTop + 24) {
        // The 24px is equivalent to 1.5rem, it's the placement of summary to make space to the top edge when sticky position.
        summaryDom.style.position = 'relative';
    }
}

const infoBlock = document.querySelector('.infoBlock');
document.addEventListener('DOMContentLoaded', () => {
    const summaryDom = document.querySelector('.summary .fr-sidemenu--sticky');
    if (summaryDom) {
        Summary();
    }
    generateScroll();
    getTargetLinkAT();
    Copy();
    const stopTop = document.querySelector('.press');
    const accordion = document.querySelector('#accordion-checkbox');
    if (window.innerWidth >= SCREEN_MOBILE_SWITCH && summaryDom && stopTop) {
        window.onscroll = function () {
            getSummaryStop(summaryDom, stopTop);
        };
    }
    if (infoBlock && accordion) {
        resizeWindow(infoBlock, accordion);
        infoBlocAction(infoBlock, accordion);
    }
});

// For height background calculation
function heightBlocCalcul(infoBlock) {
    infoBlock.querySelector('.backgroundAdd').style.height =
        infoBlock.offsetHeight + 'px';
}

// For selecting radio button
function infoBlocAction(infoBlock, accordion) {
    const radioButton = infoBlock.querySelectorAll(
        '.fr-accordion input[type="radio"]'
    );
    radioButton.forEach((item) => {
        item.addEventListener('click', function () {
            infoBlock.querySelectorAll('ul').forEach((elt) => {
                elt.classList.remove('visible');
            });
            infoBlock
                .querySelector('ul[data-list="' + item.id + '"]')
                .classList.add('visible');
            if (window.innerWidth <= SCREEN_MOBILE_SWITCH) {
                window.dsfr(accordion).collapse.conceal();
            }
            heightBlocCalcul(infoBlock);
        });
    });
}

window.addEventListener('load', function () {
    if (infoBlock) {
        heightBlocCalcul(infoBlock);
    }
});

// Adapt height div in Information bloc to add background - TO DO: depends on case, maybe better switch this function to app folder
function resizeWindow(infoBlock, accordion) {
    window.addEventListener('resize', function () {
        heightBlocCalcul(infoBlock);
        if (window.innerWidth >= SCREEN_MOBILE_SWITCH) {
            window.dsfr(accordion).collapse.disclose();
        }
    });
}

// Load AT + TAC
window.addEventListener('tarteaucitron_loaded', function () {
    if (tarteaucitron.state.atinternetcnil && typeof tag !== 'undefined') {
        let levelHitAT = '52';
        let pageHitAT = '';
        let subThematic = '';
        let chapter1OPE = '';
        // Hardcoded for AT analytics get Thematic and Sub-thematic
        if (slugAT) {
            if (slugAT.indexOf('/france-relance') > -1) {
                pageHitAT = 'france_relance';
                levelHitAT = '46';
            } else if (slugAT.indexOf('/transformation-numerique') > -1) {
                levelHitAT = '51';
                pageHitAT = 'transformation-numerique';
            } else if (
                slugAT.indexOf(
                    '/luttons-contre-les-violences-faites-aux-femmes'
                ) > -1
            ) {
                pageHitAT = 'securite_et_justice';
            } else if (slugAT.indexOf('/lettre-aux-hommes-de-demain') > -1) {
                pageHitAT = 'affaires_sociales';
                subThematic = 'violences_conjugales';
            } else if (slugAT.indexOf('/info-ukraine') > -1) {
                pageHitAT = 'europe';
                subThematic = 'securite';
                levelHitAT = '53';
                chapter1OPE = 'specialPage';
            }
        }
        const titlePage = document.querySelector('h1').textContent.trim();
        const brandLogo = document
            .querySelector('.logo-container span')
            .textContent.trim();
        const jsonAt = {
            name: titlePage === brandLogo ? 'accueil_' + titlePage : titlePage,
            chapter1:
                chapter1OPE === 'specialPage'
                    ? ''
                    : titlePage === brandLogo
                    ? ''
                    : brandLogo,
            level2: levelHitAT,
        };
        const customVars = {
            site: {
                1: 'fr',
                2: pageHitAT,
                15: window.location.href,
                17: subThematic,
            },
        };
        new AtTags().atTagsCallPage(JSON.stringify(jsonAt), customVars);
    }
});

/*
Since the submenu is a mix of the Main navigation and of the Sidemenu components, there's some conflict on the buttons
interaction. More precisely, clicking a fr-nav__btn does not make the related accordion properly collapse. The following
js fixed that.
 */
function toggleMenuBtnsState() {
    const activeBtn = document.querySelector(
        ".submenu .fr-nav__btn[aria-expanded='true']"
    );
    if (activeBtn) {
        activeBtn.setAttribute('aria-expanded', 'false');
    }
}

document.addEventListener('click', function (e) {
    if (e.target.matches(".submenu .fr-nav__btn[aria-expanded='false']")) {
        toggleMenuBtnsState(e.target);
    }
});
