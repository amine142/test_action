import {activateParent} from './Filters';
import AtTags from './AtTags';

export default function GroupButtons(result, tag, levelAT, typeAT, atSite2) {
    const ul = document.createElement('ul');
    ul.classList.add('fr-tags-group', tag);
    result.forEach((item) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.classList.add(
            'fr-tag',
            'fr-tag--sm',
            'fr-thematic',
            'fr-mr-2w',
            'fr-mb-2w',
            'fr-px-3v'
        );
        button.setAttribute('data-api', item['@id']);
        button.innerText = item.name;
        li.appendChild(button);
        ul.appendChild(li);
        button.addEventListener('click', function (event) {
            this.classList.toggle('active');
            if (document.querySelectorAll('.' + tag + ' .active').length > 0) {
                buttonErase.removeAttribute('disabled');
                activateParent(event.currentTarget, '.fr-accordion');
            } else {
                buttonErase.setAttribute('disabled', '');
                activateParent(event.currentTarget, '.fr-accordion', false);
            }
            if (this.classList.contains('active')) {
                // AT Tag Call
                const jsonAt = {
                    name: 'recherche_' + event.currentTarget.innerText,
                    chapter1: atSite2,
                    chapter2: 'filtre',
                    chapter3: typeAT,
                    level2: levelAT,
                };
                new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);
            }
        });
    });

    const liErase = document.createElement('li');
    const buttonErase = document.createElement('button');
    buttonErase.classList.add(
        'fr-btn',
        'fr-btn--sm',
        'fr-fi-close-circle-line',
        'fr-btn--icon-right',
        'fr-btn--tertiary',
        'fr-thematic',
        'fr-my-3v',
        'resetButton'
    );
    buttonErase.addEventListener('click', function (event) {
        const buttonActive = document.querySelectorAll('.' + tag + ' .active');
        if (buttonActive.length > 0) {
            buttonActive.forEach((item) => {
                item.classList.remove('active');
            });
            event.currentTarget.setAttribute('disabled', '');
            activateParent(event.currentTarget, '.fr-accordion', false);
        }
        // AT Tag Call
        const jsonAt = {
            name: 'recherche_reinitialiser',
            chapter1: atSite2,
            chapter2: 'filtre',
            chapter3: typeAT,
            level2: levelAT,
        };
        new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);
    });
    buttonErase.setAttribute('disabled', '');
    buttonErase.innerText = 'Réinitialiser';
    liErase.appendChild(buttonErase);
    ul.appendChild(liErase);

    return ul;
}
