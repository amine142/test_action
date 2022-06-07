import moment from 'moment';
import 'moment/locale/fr';

export default function Date(startDateInit) {
    const week = document.querySelector('#accordion-predefinie input#week');
    const startDate = moment(startDateInit)
        .startOf('isoweek')
        .format('YYYY-MM-DD');
    const endDate = moment(startDateInit).endOf('isoweek').format('YYYY-MM-DD');
    week.setAttribute('data-start', startDate);
    week.setAttribute('data-end', endDate);
    const month = document.querySelector('#accordion-predefinie input#month');
    month.setAttribute(
        'data-start',
        moment().startOf('month').format('YYYY-MM-DD')
    );
    month.setAttribute(
        'data-end',
        moment().endOf('month').format('YYYY-MM-DD')
    );

    const last3Months = document.querySelector(
        '#accordion-predefinie input#last3Months'
    );
    last3Months.setAttribute(
        'data-start',
        moment().startOf('month').subtract(2, 'month').format('YYYY-MM-DD')
    );
    last3Months.setAttribute(
        'data-end',
        moment().endOf('month').format('YYYY-MM-DD')
    );

    const dateLabel = document.querySelectorAll('#accordion-predefinie label');
    dateLabel.forEach((item) => {
        item.addEventListener('click', function () {
            emptyDateFields();
        });
    });

    document
        .querySelector('.emptyDatePicker')
        .addEventListener('click', function () {
            document.querySelector('#accordion-predefinie input#week').click();
            emptyDateFields();
        });

    document.querySelector('.colorTitle:first-child .text').innerText =
        moment(startDate).format('D MMM') +
        ' - ' +
        moment(endDate).format('D MMM');
    return moment(startDate).subtract(1, 'days').format('YYYY-MM-DD');
}

function emptyDateFields() {
    const startDateEmpty = document.querySelector('.start');
    const endDateEmpty = document.querySelector('.end');
    // reinit calendar for UX
    startDateEmpty.value = '';
    endDateEmpty.value = '';
    startDateEmpty.max = '';
    endDateEmpty.min = '';
    document.querySelector('.emptyDatePicker').setAttribute('disabled', '');
}
