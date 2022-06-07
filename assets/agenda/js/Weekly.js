import Api from '../../app/js/Api';
import {API_AGENDA_URL} from '../constants';
import moment from 'moment';
import 'moment/locale/fr';
import AtTags from '../../app/js/AtTags';

export default function Weekly(dataList, dateStart, dateEnd, css) {
    // Last week
    // Get monday of the last week in raw format for Moment manipulating
    const previousMonday = moment(dateStart)
        .subtract(1, 'weeks')
        .format('YYYY-MM-DD');
    // Formate the date into API pattern
    const previousMondayFormat = moment(previousMonday).format('YYYY/MM/DD');
    // Get sunday of the last week (add 6 days from the last monday)
    const previousSunday = moment(previousMonday)
        .add(7, 'days')
        .format('YYYY-MM-DD');
    const previousSundayFormat = moment(previousSunday).format('YYYY/MM/DD');

    // API call prev week
    const previousWeek = encodeURI(
        API_AGENDA_URL +
            '?date[after]=' +
            previousMondayFormat +
            '&date[before]=' +
            previousSundayFormat +
            '&pagination=false'
    );

    // Next week
    // Get monday of the next week in raw format for Moment manipulating
    const nextMonday = moment(dateEnd).format('YYYY-MM-DD');
    // Formate the date into API pattern
    const nextMondayFormat = moment(nextMonday).format('YYYY/MM/DD');
    // Get sunday of the next week (add 6 days from the next monday)
    const nextSunday = moment(nextMonday).add(7, 'days').format('YYYY-MM-DD');
    const nextSundayFormat = moment(nextSunday).format('YYYY/MM/DD');

    // API call next week
    const nextWeek = encodeURI(
        API_AGENDA_URL +
            '?date[after]=' +
            nextMondayFormat +
            '&date[before]=' +
            nextSundayFormat +
            '&pagination=false'
    );

    const arrayWeek = [previousWeek, nextWeek];
    apiCall(
        arrayWeek[0],
        previousMonday,
        previousSunday,
        dataList,
        'Semaine précédente',
        'left',
        'prev',
        css
    );
    apiCall(
        arrayWeek[1],
        nextMonday,
        nextSunday,
        dataList,
        'Semaine suivante',
        'right',
        'next',
        css
    );
}

function apiCall(
    apiURL,
    prevNextMonday,
    prevNextSunday,
    dataList,
    label,
    direction,
    attribute,
    css
) {
    new Api().get(apiURL).then((dataContent) => {
        const li = document.createElement('li');
        li.classList.add('week-' + direction);
        const button = document.createElement('button');
        button.classList.add('fr-pagination__link', 'fr-my-2w', 'fr-text--xs');
        button.innerText = label;
        const span = document.createElement('span');
        span.classList.add('fr-fi-arrow-' + direction + '-s-line', 'fr-fi--sm');
        span.setAttribute('aria-hidden', 'true');
        if (dataContent['hydra:totalItems'] > 0) {
            button.setAttribute('data-week-' + attribute, apiURL);
            button.addEventListener('click', function () {
                dataList(apiURL, true, prevNextMonday, prevNextSunday);
                document.querySelector(
                    '.colorTitle:first-child .text'
                ).innerText =
                    moment(prevNextMonday).add(1, 'days').format('D MMM') +
                    ' - ' +
                    moment(prevNextSunday).format('D MMM');
                const jsonAt = {
                    name: this.innerText,
                    chapter1:
                        'agenda_' + document.querySelector('h1 span').innerText,
                    chapter2: 'pagination',
                    level2: '4',
                };
                new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);
            });
        } else {
            button.disabled = true;
        }
        if (attribute === 'prev') {
            button.prepend(span);
            document.querySelector(css).classList.add('weekLeft');
        } else {
            button.appendChild(span);
            document.querySelector(css).classList.add('weekRight');
        }
        li.appendChild(button);
        document.querySelector(css).appendChild(li);
    });
}
