import moment from 'moment';
import {API_AGENDA_URL, API_AGENDA_CURRENT_URL} from '../constants';

export default function Send(callBack, scroll, startDate, endDate) {
    let param = '';
    let apiAgendaCall = API_AGENDA_URL;
    const pickDateStart = document.querySelector('.start');
    const pickDateEnd = document.querySelector('.end');
    const event = document.querySelectorAll('.events-tags .fr-tag.active');
    const weekDom = document.querySelector('input#week');

    // Check datepicker input date
    if (pickDateStart.value !== '') {
        param = concatWeek(pickDateStart.value, null, param);
    }
    if (pickDateEnd.value !== '') {
        param = concatWeek(null, pickDateEnd.value, param);
    }

    if (pickDateStart.value === '' && pickDateEnd.value === '') {
        // Check define input date
        const dateInput = document.querySelectorAll(
            '#accordion-predefinie input'
        );
        dateInput.forEach((item) => {
            if (item.checked && !weekDom.checked) {
                param = concatWeek(item.dataset.start, item.dataset.end, param);
            }
        });
        if (weekDom.checked && event.length === 0) {
            apiAgendaCall = API_AGENDA_CURRENT_URL;
        } else if (weekDom.checked && event.length > 0) {
            param = concatWeek(
                weekDom.dataset.start,
                weekDom.dataset.end,
                param
            );
        }
    }

    // Check Event
    if (event.length > 0) {
        event.forEach(function (child) {
            param = appendURL(param, 'eventType[]', child.dataset.api);
        });
    }
    callBack(apiAgendaCall + param, scroll, startDate, endDate);
}

function concatWeek(afterDate, beforeDate, param) {
    if (afterDate) {
        // substract 1 day for UTC matching
        param = appendURL(
            param,
            'date[after]',
            moment(afterDate).subtract(1, 'days').format('YYYY/MM/DD')
        );
    }
    if (beforeDate) {
        const regexSlash = /-/gi;
        param = appendURL(
            param,
            'date[before]',
            beforeDate.replace(regexSlash, '/')
        );
    }
    return param;
}

function appendURL(url, key, value) {
    return (
        url +
        (url.indexOf('?') >= 0 ? '&' : '?') +
        encodeURIComponent(key) +
        '=' +
        encodeURIComponent(value)
    );
}
