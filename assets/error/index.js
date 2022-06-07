/* global tarteaucitron */

import AtTags from '../app/js/AtTags';

document.addEventListener('DOMContentLoaded', () => {
    document
        .querySelector('main div a')
        .addEventListener('click', function (e) {
            const jsonAt = {
                name: e.currentTarget.textContent,
                chapter1: document.querySelector('h1').textContent,
                chapter2: document.querySelector('h1+p').textContent,
                level2: '7',
            };
            new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);
        });
});

// Load TAC
window.addEventListener('tarteaucitron_loaded', function () {
    if (tarteaucitron.state.atinternetcnil && typeof tag !== 'undefined') {
        const jsonAt = {
            name: document.querySelector('h1 + p').innerText,
            level2: '7',
        };
        const customVars = {
            site: {
                1: 'fr',
                3: '20220408',
                4: '20220426',
                6: 'page-erreur',
                15: window.location.href,
            },
        };
        new AtTags().atTagsCallPage(JSON.stringify(jsonAt), customVars);
    }
});
