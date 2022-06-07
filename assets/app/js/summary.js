import {v4 as uuidv4} from 'uuid';
import {SCREEN_MOBILE_SWITCH} from './Constants';

export default function Summary() {
    const titles = document.querySelectorAll('div[data-module=titre] h2');
    if (titles.length) {
        generateSummary(titles);
    }
}

function generateSummary(titles) {
    const summary = document.querySelector('.contents-summary');
    const summaryContainer = document.querySelector('.fr-sidemenu__list');
    let html = '';
    titles.forEach((title) => {
        const titleId = title.getAttribute('id') || generateId(title);
        html += `
      <li class="fr-sidemenu__item">
        <a class="fr-sidemenu__link fr-text-title--blue-france" href="#${titleId}">${title.innerText}</a>
      </li>
    `;
    });
    summaryContainer.innerHTML = html;
    summary.style.display = 'block';
    initiateSummary(summary);
    displayMobileContent(summary);
}

function generateId(title) {
    const summaryUuid = `fr-sidemenu__link-${uuidv4()}`;
    title.setAttribute('id', summaryUuid);
    return summaryUuid;
}

function initiateSummary(summary) {
    const summaryAnchors = summary.querySelectorAll('.fr-sidemenu__link');

    summaryAnchors.forEach((link) => {
        link.addEventListener('click', () => {
            const collapse = document.getElementById('content-summary');
            window.dsfr(collapse).collapse.conceal();
        });
    });

    const options = {
        rootMargin: '0px 0px -10% 0px',
        threshold: 1.0,
    };

    window.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const id = entry.target.getAttribute('id');
                const menuLink = document.querySelector(
                    `.fr-sidemenu__link[href="#${id}"]`
                );
                const menuItem = menuLink.parentElement;
                if (entry.isIntersecting) {
                    resetSummaryActivation();
                    menuItem.classList.add('active-summary');
                } else if (entry.intersectionRect.top > 0) {
                    resetSummaryActivation();
                    const previousMenuItem = menuItem.previousElementSibling;
                    if (previousMenuItem) {
                        previousMenuItem.classList.add('active-summary');
                    }
                }
            });
        }, options);

        // Track all <h2> that have an `id` applied
        document.querySelectorAll('h2[id]').forEach((title) => {
            observer.observe(title);
        });
    });
}

function resetSummaryActivation() {
    const activeSummaryItem = document.querySelector('.active-summary');
    if (activeSummaryItem) activeSummaryItem.classList.remove('active-summary');
}

function displayMobileContent() {
    if (window.innerWidth < SCREEN_MOBILE_SWITCH + 1) {
        // Summary
        const summaryMobileWrapper = document.querySelector(
            '.contents-summary__mobile-wrapper'
        );
        const summary = document.querySelector('.contents-summary');
        if (summaryMobileWrapper && summary) {
            summaryMobileWrapper.appendChild(summary);
        }
    }
}
