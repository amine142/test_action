import geo from '../../images/common/map-pin-2-line.svg';

export default function List(result) {
    // Event date
    const eventDate = new Intl.DateTimeFormat('fr-FR').format(
        new Date(result.date)
    );

    // Event period
    function timeEvent() {
        let eventTime = '';
        if (result.period !== null) {
            if (result.period === 'morning') {
                eventTime = 'Matin';
            } else if (result.period === 'afternoon') {
                eventTime = 'Après-midi';
            } else if (result.period === 'evening') {
                eventTime = 'En soirée';
            } else {
                eventTime = 'En journée';
            }
        } else if (result.datetime !== null) {
            eventTime = new Date(result.datetime).toLocaleTimeString('fr-FR', {
                hour: '2-digit',
                minute: '2-digit',
            });
        }
        return eventTime;
    }

    // Button Geoloc
    function geolocButton() {
        let isGeoloc = '';
        if (result.latitude && result.longitude) {
            isGeoloc =
                '<button class="fr-link fr-text--xs fr-p-0 fr-pb-1v scrollToMap" data-click-lat="' +
                result.latitude +
                '" data-click-lng="' +
                result.longitude +
                '" data-click-api="' +
                result['@id'] +
                '"><span><img src="' +
                geo +
                '" alt="" class="fr-mr-1v">' +
                result.location +
                '</span></button>';
        }
        return isGeoloc;
    }

    // Text event
    function textEvent() {
        const isTextEvent = result.linkTitle ? result.linkTitle : false;
        const isLinkEvent = result.linkUrl ? encodeURI(result.linkUrl) : false;
        let isBlock = '';
        if (isTextEvent && isLinkEvent) {
            isBlock =
                '<a class="fr-text--xs fr-link--cart fr-mt-2w fr-mb-0 fr-p-3v fr-text--bold" href="' +
                isLinkEvent +
                '" tabindex="0" target="_blank">' +
                isTextEvent +
                ' <span class="fr-fi-arrow-right-line fr-fi--sm" aria-hidden="true"></span></a>';
        }
        return isBlock;
    }

    return `
    <div class="tile fr-grid-row fr-grid-row--gutters">
        <div class="fr-col-12 fr-mb-2v">
            <div class="fr-tile fr-tile--horizontal">
                <div class="fr-tile__body fr-m-3w">
                    <p class="fr-tile__detail fr-text--xs fr-mb-0 fr-text--alt fr-mb-1v">
                        <span class="date">${eventDate}</span>
                        <span class="time">${timeEvent()}</span>
                    </p>
                    <h4 class="fr-tile__title fr-mb-1v">
                        <span class="fr-tile__link fr-text--sm fr-m-0">${
                            result.eventType.name
                        }</span>
                    </h4>
                    <p class="fr-tile__desc fr-text--xs fr-mt-0 fr-mb-1v">${
                        result.description
                    }</p>
                    ${geolocButton()}
                    ${textEvent()}
                </div>
            </div>  
        </div>
    </div>
        `;
}
