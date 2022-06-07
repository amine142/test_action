import AtTags from './AtTags';
import {activateParent} from './Filters';
export default function Measure(result, levelAT) {
    const div = document.createElement('div');
    const select = document.createElement('select');
    select.classList.add('fr-select', 'fr-my-1w');
    select.id = select.name = 'select';
    const option = document.createElement('option');
    select.appendChild(option);
    option.value = '';
    option.setAttribute('data-atTag', '');
    option.innerText = 'Sélectionner';
    const divReset = document.createElement('div');
    divReset.classList.add('fr-mt-3w');

    select.addEventListener('change', function (e) {
        option.setAttribute('disabled', '');
        option.setAttribute('hidden', '');
        buttonReset.removeAttribute('disabled');
        activateParent(e.currentTarget, '.fr-accordion');

        // AT Tag Call
        const jsonAt = {
            name: 'recherche_' + this.options[this.selectedIndex].text,
            chapter2: 'filtre',
            chapter3: 'mesure',
            level2: levelAT,
        };
        new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);
    });

    const buttonReset = document.createElement('button');
    buttonReset.classList.add(
        'fr-btn',
        'fr-btn--sm',
        'fr-fi-close-circle-line',
        'fr-btn--icon-right',
        'fr-btn--tertiary',
        'resetButton'
    );
    buttonReset.innerText = 'Réinitialiser';
    buttonReset.setAttribute('disabled', true);
    buttonReset.addEventListener('click', function (e) {
        e.preventDefault();
        e.currentTarget.setAttribute('disabled', true);
        activateParent(e.currentTarget, '.fr-accordion', false);
        select.selectedIndex = 0;
        // AT Tag Call

        const jsonAt = {
            name: 'recherche_reinitialiser',
            chapter2: 'filtre',
            chapter3: 'mesure',
            level2: levelAT,
        };
        new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);
    });
    divReset.appendChild(buttonReset);
    result.forEach(function (elementMeasure) {
        const option = document.createElement('option');
        option.innerText = elementMeasure.name;
        option.value = elementMeasure.id;
        select.appendChild(option);
    });
    div.appendChild(select);
    div.appendChild(divReset);
    return div;
}
