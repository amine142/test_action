import AutoComplete from '@tarekraafat/autocomplete.js/dist/autoComplete';
import AtTags from './AtTags';
import {activateParent} from './Filters';
export default function State(result, overflowParent) {
    const inputField = document.querySelector('#search-input-state input');
    const buttonReset = document.querySelector(
        '#search-input-state .resetButton'
    );
    buttonReset.addEventListener('click', (e) => {
        e.preventDefault();
        e.currentTarget.setAttribute('disabled', true);
        inputField.value = '';
        activateParent(e.currentTarget, '.fr-accordion', false);

        // AT Tag
        const jsonAt = {
            name: 'recherche_reinitialiser',
            chapter2: 'filtre',
            chapter3: 'region',
            level2: '50',
        };
        new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);
    });
    initAutocomplete(result, buttonReset, inputField, overflowParent);
}

// The autoComplete.js Engine instance creator
function initAutocomplete(result, buttonReset, inputField, overflowParent) {
    const autoCompleteJS = new AutoComplete({
        data: {
            src: result.sort(getSortOrder('nom')),
            keys: ['nom'],
            cache: true,
        },
        selector: '#search-input',
        diacritics: true,
        placeHolder: 'Région',
        resultsList: {
            element: (list, data) => {
                if (data.results.length === 0) {
                    const info = document.createElement('p');
                    info.classList.add('no_result', 'fr-p-3v', 'fr-m-0');
                    info.innerText = 'Pas de résultats';
                    buttonReset.setAttribute('disabled', true);
                    activateParent(inputField, '.fr-accordion', false);
                    list.prepend(info);
                }
            },
            id: 'autoComplete_list',
            noResults: false,
            maxResults: 20,
            class: 'autoComplete_list fr-autocomplete',
        },
        resultItem: {
            class: 'autoComplete_result',
            element: (item, data) => {
                // Modify Results Item Content
                item.innerHTML = `<button class="fr-link fr-p-3v" tabindex="-1">${data.match}</button>`;
            },
        },
        trigger: () => {
            return true; // Returns "Boolean"
        },
    });

    function getSortOrder(prop) {
        return function (a, b) {
            a = a[prop].normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            b = b[prop].normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            }
            return 0;
        };
    }

    autoCompleteJS.input.addEventListener('input', function () {
        if (inputField.value.length === 0) {
            buttonReset.setAttribute('disabled', true);
            activateParent(inputField, '.fr-accordion', false);
        }
    });

    autoCompleteJS.input.addEventListener('focus', function () {
        document.querySelector(overflowParent).classList.add('visible');
        autoCompleteJS.start();
    });
    autoCompleteJS.input.addEventListener('blur', function () {
        document.querySelector(overflowParent).classList.remove('visible');
    });

    autoCompleteJS.input.addEventListener('selection', function (event) {
        event.preventDefault();
        buttonReset.removeAttribute('disabled');
        activateParent(inputField, '.fr-accordion');
        const feedback = event.detail;
        // Prepare User's Selected Value
        const selection = feedback.selection.value[feedback.selection.key];
        // Replace Input value with the selected value
        autoCompleteJS.input.value = selection;
        inputField.setAttribute(
            'data-region-code',
            feedback.selection.value.code
        );

        // AT
        const jsonAt = {
            name: 'recherche_' + feedback.selection.value.nom,
            chapter2: 'filtre',
            chapter3: 'region',
            level2: '50',
        };
        new AtTags().atTagsCallClick(JSON.stringify(jsonAt));
    });
}
