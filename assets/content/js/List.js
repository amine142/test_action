import moment from 'moment';
import {generateSlug, generateWording} from './generate';

export default function List(result) {
    function generateMediaURL(mediaURL) {
        return process.env.URL_MEDIA + mediaURL;
    }

    function formatDate(date) {
        return moment(date).format('DD/MM/YYYY');
    }

    function getMedia() {
        if (result.media) {
            return `
                <div class="fr-card__img">
                    <img class="fr-responsive-img" src="${generateMediaURL(
                        result.media.url
                    )}" alt="${
                result.media.description ? result.media.description : ''
            }" />
                </div>
            `;
        }
        return '';
    }

    function resultType() {
        if (result.contentType !== 'article') {
            return `<span class="fr-mr-2v">${generateWording(
                result.contentType
            )}</span>`;
        }
        return '';
    }

    return `
    <div class="tile fr-col-12 fr-py-0 fr-mb-3w" data-module="cards">
        <div class="fr-card fr-enlarge-link fr-card--horizontal">
            <div class="fr-card__body">
                <h4 class="fr-card__title fr-text-title--blue-france fr-mb-2w">
                    <a href="${generateSlug(
                        result.slug
                    )}" class="fr-card__link" target="_self">${
        result.shortTitle || result.title
    }</a>
                </h4>
                <p class="fr-card__desc fr-mb-0">
                    Publié ${formatDate(result.publishedAt)}
                </p>
                <p class="fr-card__detail fr-mb-1w">
                ${resultType()} ${result.mainThematic.parent.name}
                </p>
            </div>
            ${getMedia()}           
        </div>
    </div>`;
}
