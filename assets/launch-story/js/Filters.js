import checkFields from '../../app/js/CheckFields';
import AtTags from '../../app/js/AtTags';
import {SCREEN_SWITCH} from '../../app/js/Constants';

const mobileFiltersButton = document.querySelector('.openFilters');

export default function initiateFilters(callback) {
    document.querySelector('.submitFilters').addEventListener('click', (e) => {
        document
            .querySelector('.mapParent')
            .scrollIntoView({behavior: 'smooth', block: 'start'});
        const accordions = document.querySelectorAll('.fr-accordion');
        const selectedFilters = Array.from(accordions).filter(
            (accordion) => !accordion.querySelector('.resetButton').disabled
        );
        if (selectedFilters.length) {
            // For Desktop only
            if (window.innerWidth > SCREEN_SWITCH) {
                updateDesktopFilters(accordions);
            }
        }
        document
            .querySelector('.openLocalisation')
            .classList.remove('blueClick');
        document.querySelector('.filter-geoloc').innerText =
            'Modifier la localisation';
        checkFields(callback);
        displayMobileFilters(false);
        activeFilters(!!selectedFilters.length);
        // AT Tag
        const jsonAt = {
            name: 'recherche_afficher',
            chapter2: 'filtre',
            chapter3: 'Affiner la recherche',
            level2: '50',
        };
        new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);
        e.currentTarget.focus();
    });
    document.querySelector('.closeFilters').addEventListener('click', () => {
        displayMobileFilters(false);
    });
    mobileFiltersButton.addEventListener('click', () => {
        displayMobileFilters();
    });
    document
        .querySelector('.openLocalisation')
        .addEventListener('click', () => {
            closeOpenGeoloc();
        });
    document
        .querySelector('.filterGeoloc .closeFilters')
        .addEventListener('click', () => {
            closeOpenGeoloc();
        });
    document
        .querySelector('#backToMetropolitan .labelDomTom')
        .addEventListener('click', (e) => {
            e.currentTarget.parentNode.classList.add('backFranceClick');
            closeOpenGeoloc();
        });
    toggleAccordions();
}

function displayMobileFilters(open = true) {
    const filtersCol = document.querySelector('.col-filters');
    const blockScroll = document.querySelector('html');
    if (open) {
        filtersCol.classList.add('active');
        blockScroll.classList.add('blockScroll');
    } else {
        filtersCol.classList.remove('active');
        blockScroll.classList.remove('blockScroll');
    }
}

function activeFilters(hasFilters) {
    hasFilters
        ? mobileFiltersButton.classList.add('active')
        : mobileFiltersButton.classList.remove('active');
}

function updateDesktopFilters(accordions) {
    accordions.forEach((accordion) => {
        if (accordion.classList.contains('active')) {
            accordion
                .querySelector('.fr-accordion__btn')
                .setAttribute('aria-expanded', 'true');
        } else {
            accordion
                .querySelector('.fr-accordion__btn')
                .setAttribute('aria-expanded', 'false');
        }
    });
}

function toggleAccordions() {
    const accordionButtons = document.querySelectorAll('.fr-accordion__btn');
    accordionButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const currentAccordion = e.currentTarget;
            currentAccordion
                .closest('.filters-container')
                .classList.add('outline-color-load');
            accordionButtons.forEach((button) => {
                if (button.getAttribute('aria-expanded') === 'true') {
                    button.setAttribute('aria-expanded', 'false');
                }
            });
            setTimeout(() => {
                currentAccordion.focus();
                document
                    .querySelector('.filters-container')
                    .classList.remove('outline-color-load');
            }, 20);
        });
    });
}

function closeOpenGeoloc() {
    document
        .querySelectorAll('.innerMapDomTom,.closeFilters, .mapInsert')
        .forEach((item) => {
            item.classList.toggle('activeGeoloc');
        });
    document
        .querySelector('.mobile-filters')
        .classList.toggle('inactiveGeoloc');
    document.querySelector('html').classList.toggle('blockScroll');
}

// Function add class to expand filters on mobile
if ('IntersectionObserver' in window && window.innerWidth <= SCREEN_SWITCH) {
    const el = document.querySelector('.col-filters');
    const observer = new IntersectionObserver(
        ([e]) =>
            e.target.classList.toggle('is-pinned', e.intersectionRatio < 1),

        {threshold: [1]}
    );

    observer.observe(el);
}
