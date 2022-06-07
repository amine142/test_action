import {DuetDatePicker} from '@duetds/date-picker/custom-element';
import AtTags from '../../app/js/AtTags';

export default function Datepicker() {
    customElements.define('duet-date-picker', DuetDatePicker);
    const startPicker = document.querySelector('.start');
    const endPicker = document.querySelector('.end');
    const firstDateAvailable = '2021-02-01';
    const lastDateAvailable = document
        .querySelector('#week')
        .getAttribute('data-end');

    // When the start date picker is changed...
    startPicker.addEventListener('duetChange', function (e) {
        endPicker.min = e.detail.value;
        uncheckDefineDate(this, e.detail.value);
    });

    // When the end date date picker is changed...
    endPicker.addEventListener('duetChange', function (e) {
        startPicker.max = e.detail.value;
        uncheckDefineDate(this, e.detail.value);
    });

    localizationDate(startPicker, 'début');
    localizationDate(endPicker, 'fin');

    const toggleDate = document.querySelector(
        'button[aria-controls=accordion-personnalisee]'
    );
    toggleDate.addEventListener('click', function () {
        if (
            document.querySelector(
                'button[aria-controls=accordion-personnalisee][aria-expanded=false]'
            )
        ) {
            document
                .querySelector('#accordion-personnalisee')
                .classList.remove('overflowVisible');
        }
    });

    function localizationDate(domElt, wording) {
        domElt.localization = {
            buttonLabel: 'Choisir la date de ' + wording,
            placeholder: 'Choisir une date',
            selectedDateMessage: 'La date choisie est : ',
            prevMonthLabel: 'Mois précédent',
            nextMonthLabel: 'Mois suivant',
            monthSelectLabel: 'Mois',
            yearSelectLabel: 'Année',
            closeLabel: 'Fermer la fenêtre',
            calendarHeading: 'Choisir la date de ' + wording,
            dayNames: [
                'Dimanche',
                'Lundi',
                'Mardi',
                'Mercredi',
                'Jeudi',
                'Vendredi',
                'Samedi',
            ],
            monthNames: [
                'Janvier',
                'Février',
                'Mars',
                'Avril',
                'Mai',
                'Juin',
                'Juillet',
                'Août',
                'Septembre',
                'Octobre',
                'Novembre',
                'Décembre',
            ],
            get monthNamesShort() {
                return this.monthNames;
            },
            locale: 'fr-FR',
        };

        domElt.min = firstDateAvailable;
        domElt.max = lastDateAvailable;

        domElt.addEventListener('duetOpen', function () {
            document
                .querySelector('#accordion-personnalisee')
                .classList.add('overflowVisible');
        });

        domElt.addEventListener('duetClose', function () {
            const focusButton = setInterval(function () {
                if (domElt.datePickerButton === document.activeElement) {
                    domElt.setFocus();
                    clearInterval(focusButton);
                }
            }, 1);
        });

        const dateFormat = /^(\d{2})\/(\d{2})\/(\d{4})$/;

        domElt.dateAdapter = {
            parse(value = '', createDate) {
                const matches = value.match(dateFormat);
                if (matches) {
                    return createDate(matches[3], matches[2], matches[1]);
                }
            },
            format(date) {
                let d = date.getDate().toString(10);
                let m = (date.getMonth() + 1).toString(10);
                const y = date.getFullYear().toString(10);
                // days are not zero-indexed, so pad if less than 10
                if (date.getDate() < 10) {
                    d = `0${d}`;
                }
                // months *are* zero-indexed, pad if less than 9!
                if (date.getMonth() < 9) {
                    m = `0${m}`;
                }
                return `${d}/${m}/${y}`;
            },
        };
    }
}

function uncheckDefineDate(elt, value) {
    let startOrEnd = 'debut';
    if (elt.classList.contains('end')) {
        startOrEnd = 'fin';
    }
    const dateInput = document.querySelectorAll('#accordion-predefinie input');
    dateInput.forEach((item) => {
        item.checked = false;
    });
    document.querySelector('.emptyDatePicker').removeAttribute('disabled');

    // AT
    const jsonAt =
        '{"name":"recherche_' +
        startOrEnd +
        '_' +
        value +
        '","chapter1":"agenda_' +
        document.querySelector('h1 span').innerText +
        '","chapter2": "filtre","chapter3": "date","level2":"4"}';
    new AtTags().atTagsCallClick(jsonAt, this);
}
