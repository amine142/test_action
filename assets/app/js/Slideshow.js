import {tns} from '../../../node_modules/tiny-slider/src/tiny-slider';
import AtTags from './AtTags';
import Api from './Api';

export default function Slideshow(
    result,
    table,
    elt,
    nodeParent,
    latitudeItem,
    longitudeItem,
    apiID,
    clusterParent,
    querySpecificPin,
    callAT
) {
    if (querySpecificPin) {
        const querySpecPin =
            querySpecificPin +
            '&latitude=' +
            latitudeItem +
            '&longitude=' +
            longitudeItem;
        new Api().get(querySpecPin).then((dataContent) => {
            table = dataContent;
            slideInit(table['hydra:member']);
        });
    } else {
        slideInit(table);
    }
    function slideInit(table) {
        let startIndexSlide;
        document.querySelector(nodeParent).classList.remove('hidden');
        if (
            document.querySelector(nodeParent).querySelectorAll('*').length > 0
        ) {
            document.querySelector(nodeParent).innerHTML = '';
        }
        const sliderDiv = document.createElement('div');
        sliderDiv.classList.add('slider');
        document.querySelector(nodeParent).appendChild(sliderDiv);
        let indexSlide = 0;
        table.forEach((item) => {
            // Only if cluster doesn't have another cluster inside (last child)
            if (
                item.latitude === latitudeItem &&
                item.longitude === longitudeItem &&
                clusterParent
            ) {
                document
                    .querySelector(elt)
                    .insertAdjacentHTML('beforeend', result(item));

                if (apiID && item['@id'] === apiID) {
                    // Jump to the slide index if click on the list item
                    startIndexSlide = indexSlide;
                }
                indexSlide = indexSlide + 1;
            }
        });
        // Build slider only if info
        if (document.querySelector(elt).querySelectorAll('*').length > 0) {
            const slider = tns({
                container: '.slider',
                items: 1,
                // Fix error on mobile touch. 'Auto' works too
                preventScrollOnTouch: 'force',
                loop: false,
                speed: 300,
                // Slide starts at 0
                startIndex: startIndexSlide,
                autoHeight: true,
                controlsText: [
                    '<span class="fr-fi-arrow-left-s-line fr-fi--sm" aria-hidden="true"></span>',
                    '<span class="fr-fi-arrow-right-s-line fr-fi--sm" aria-hidden="true"></span>',
                ],
                nav: false,
                onInit: afterLoad(callAT),
            });
            const initIndex = slider.getInfo();
            document
                .querySelector('#infoMapTile .tns-outer')
                .insertAdjacentHTML(
                    'beforeend',
                    '<p class="fr-map-index fr-text-center fr-text--xs fr-mb-0">' +
                        (startIndexSlide ? startIndexSlide + 1 : '1') +
                        ' sur ' +
                        initIndex.slideCount +
                        '</p>'
                );
            slider.events.on('indexChanged', getSliderIndex);
        }
    }

    // Get Wording for index slide
    function getSliderIndex(info) {
        document.querySelector('#infoMapTile .fr-map-index').innerText =
            info.displayIndex + ' sur ' + info.slideCount;
    }

    // AT
    function afterLoad(callAT) {
        document
            .querySelectorAll('#infoMapTile .fr-card__link')
            .forEach((item) => {
                item.addEventListener('click', function (e) {
                    const jsonAt = {
                        chapter2: 'map-cards',
                        chapter3: e.currentTarget
                            .closest('.fr-card')
                            .querySelector(callAT.optionCustom).innerText,
                        level2: callAT.atLevel,
                    };
                    new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);
                });
            });

        // Tabfocus
        document.querySelectorAll('#infoMapTile button').forEach((item) => {
            item.tabIndex = '-1';
        });
    }
}
