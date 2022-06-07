import {LAUNCH_STORIES_URL} from '../constants';
import geoPin from '../../images/common/map-pin-2-line.svg';

export default function List(result) {
    function generateURL() {
        return LAUNCH_STORIES_URL + result.slug;
    }

    function generateMediaURL(mediaURL) {
        return process.env.URL_MEDIA + mediaURL;
    }

    function getMedia() {
        if (result.mediaURL) {
            return `
                <div class="fr-card__img">
                    <img class="fr-responsive-img"
                        src="${generateMediaURL(result.mediaURL)}"
                        alt="" />
                </div>
            `;
        }
        return '';
    }

    return `
    <div class="tile fr-col-12 fr-col-md-6 fr-py-0 fr-mb-3w">

        <div class="fr-card fr-enlarge-link">
            <div class="fr-card__body fr-pt-2w">
                <h4 class="fr-card__title fr-mb-3v">
                    <a href="${generateURL()}" class="fr-card__link" target="_self">${
        result.shortTitle
    }</a>
                </h4>
                <p class="fr-card__detail fr-mb-3v">
                    <span class="fr-tag fr-tag--sm">${
                        result.mainThematic.name
                    }</span>
                </p>
                <span class="fr-text--sm fr-mb-3v fr-text--regular fr-card__region">
                    <img src="${geoPin}" class="fr-mr-1v" alt="" aria-hidden="true"><span class="text fr-text--xs">${
        result.region
    }</span>
                </span>
            </div>
            <div class="fr-card__header">
                ${getMedia()}
            </div>
        </div>
    </div>`;
}
