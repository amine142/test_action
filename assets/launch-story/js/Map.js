import Osm from '../../app/js/Map/Osm';
import List from './List';
import {SCREEN_SWITCH} from '../../app/js/Constants';

export default function Map(
    result,
    querySpecificPin,
    atLevel,
    zoomLevel,
    atSite2
) {
    let worldWide = false;
    const domParent = '#infoMapTile';
    const domElt = domParent + ' .slider';
    const infoMapTile = document.createElement('div');
    infoMapTile.setAttribute('id', 'infoMapTile');
    infoMapTile.setAttribute('data-module', 'map-cards');
    document
        .querySelector('#backToMetropolitan')
        .parentNode.classList.add('onClickMiniMap');
    document
        .querySelector('#backToMetropolitan')
        .classList.remove('backFranceClick');
    document.querySelector('#backToMetropolitan input').checked = false;
    let FranceMAP = {
        FR: {
            region: 'France Métropolitaine',
            regionCode: 'FR',
            latitude: zoomLevel ? '' : '0',
            longitude: zoomLevel ? '' : '0',
            zoom: '5',
        },
        '01': {
            region: 'Guadeloupe',
            regionCode: '01',
            latitude: '16.197587',
            longitude: '-61.53982',
            zoom: '9',
        },
        '02': {
            region: 'Martinique',
            regionCode: '02',
            latitude: '14.854532',
            longitude: '-61.01893',
            zoom: '9',
        },
        '03': {
            region: 'Guyane',
            regionCode: '03',
            latitude: '5.922325',
            longitude: '-53.23917',
            zoom: '7',
        },
        '04': {
            region: 'La Réunion',
            regionCode: '04',
            latitude: '-21.133165',
            longitude: '55.53251',
            zoom: '9',
        },
        '06': {
            region: 'Mayotte',
            regionCode: '06',
            latitude: '-12.843055',
            longitude: '45.138333',
            zoom: '10',
        },
    };
    if (window.innerWidth <= SCREEN_SWITCH) {
        FranceMAP = {
            ...FranceMAP,
            FR: {
                region: 'France Métropolitaine',
                regionCode: 'FR',
                latitude: zoomLevel ? '-2.15' : '0',
                longitude: zoomLevel ? '5.22' : '0',
                zoom: zoomLevel ? '1' : '3',
            },
        };
        // Focus world wide only mobile devices
        worldWide = true;
    } else if (window.innerWidth > SCREEN_SWITCH && !zoomLevel) {
        worldWide = true;
    }

    const franceMetropolitan = FranceMAP.FR;
    // Button back to France
    const backToFrance = document.querySelector('#backToMetropolitan');

    // Treat France Metropolitan MAP specifically
    const mapMetropolitan = buildMapInherit(
        franceMetropolitan,
        result,
        false,
        '',
        atLevel,
        domElt,
        domParent,
        querySpecificPin,
        zoomLevel,
        worldWide,
        atSite2
    );

    // Other French oversea territories
    Object.keys(FranceMAP).forEach((item) => {
        if (item !== 'FR') {
            buildMapInherit(
                FranceMAP[item],
                result,
                mapMetropolitan,
                backToFrance,
                '',
                '',
                domParent
            );
        }
    });

    // Button back to France Metropolitan
    backToFrance.addEventListener('click', function () {
        moveMetropolitanMap(mapMetropolitan, '2.966', '46.86', 5);
        interactive(domParent);
        document
            .querySelectorAll('.innerMapDomTom .mapParent')
            .forEach((item) => {
                item.classList.remove('onClickDROM');
            });
        this.classList.remove('onClickMap');
        document
            .querySelector('.filter-geoloc')
            .parentNode.classList.add('blueClick');
        document.querySelector('.filter-geoloc').innerText =
            'France métropolitaine';
    });

    document.querySelectorAll('.leaflet-control-zoom a').forEach((item) => {
        item.addEventListener('click', function () {
            document.querySelectorAll('.groupMarker').forEach((item) => {
                item.classList.remove('focusOn');
            });
        });
    });
    document.querySelector('.map .mapParent').appendChild(infoMapTile);
}

function buildMapInherit(
    array,
    result,
    mapMetropolitan,
    backToFrance,
    atLevel,
    customPopin,
    nodeParent,
    querySpecificPin,
    zoomLevel,
    worldWide,
    atSite2
) {
    document
        .querySelector(mapMetropolitan ? '.innerMapDomTom' : '.map')
        .insertAdjacentHTML(
            'beforeend',
            '<div class="mapParent' +
                (mapMetropolitan ? ' fr-mt-md-1v fr-mr-md-1v"' : '"') +
                '><div id="map' +
                (mapMetropolitan ? array.regionCode + 'BtnFR' : '') +
                '" class="mapGlobal"></div><div class="fr-radio-group fr-radio-group--sm fr-m-0"><input type="radio" id="region' +
                array.regionCode +
                '" name="radioRegion"><label class="labelDomTom fr-label fr-text--bold fr-mb-0 fr-py-0" for="region' +
                array.regionCode +
                '">' +
                array.region +
                '</label></div></div>'
        );
    const mapAllFrance = new Osm(
        document.querySelector(
            '#map' + (mapMetropolitan ? array.regionCode + 'BtnFR' : '')
        )
    );
    // Carrefull : opposite condition false === Metropolitan / True === overseas territories
    if (!mapMetropolitan) {
        const mapNewLocation = mapAllFrance
            .renderWithPin(
                result,
                'map',
                {
                    latitude: zoomLevel ? '46.86' : array.latitude,
                    longitude: zoomLevel ? '2.966' : array.longitude,
                    countPin: true,
                    zoom: array.zoom,
                    zoomControl: true,
                    dragging: true,
                    doubleClickZoom: true,
                    scrollWheelZoom: true,
                    popinFunction: List,
                    customPopin: customPopin,
                    nodeParent: nodeParent,
                    querySpecificPin: querySpecificPin,
                    cluster: worldWide,
                    maxClusterRadius: 25,
                },
                '',
                atLevel,
                atSite2,
                '.fr-card__region span'
            )
            .addEventListener('click', function () {
                interactive(nodeParent);
            })
            .addEventListener('dragend', function () {
                interactive(nodeParent);
            });
        for (const item of result) {
            if (
                item.regionCode !== '01' &&
                item.regionCode !== '02' &&
                item.regionCode !== '03' &&
                item.regionCode !== '04' &&
                item.regionCode !== '06'
            ) {
                document
                    .querySelector('#backToMetropolitan')
                    .parentNode.classList.remove('onClickMiniMap');
                break;
            }
        }
        // Need to return only France Metropolitan MAP to apply lat/long on click oversea territories

        return mapNewLocation;
    } else {
        const arrayDomTom = [];
        result.forEach((item) => {
            if (item.regionCode === array.regionCode) {
                arrayDomTom.push(item);
            }
        });
        if (arrayDomTom.length === 0) {
            mapAllFrance.selector.parentNode.classList.add('onClickMiniMap');
        }

        mapAllFrance.renderWithPin(
            arrayDomTom,
            'map' + array.regionCode + 'BtnFR',
            {
                countPin: true,
                zoom: array.regionCode === '03' ? 3 : 6,
                latitude: array.latitude,
                longitude: array.longitude,
            }
        );
        mapAllFrance.selector.parentNode.addEventListener(
            'click',
            function (e) {
                moveMetropolitanMap(
                    mapMetropolitan,
                    array.longitude,
                    array.latitude,
                    array.zoom,
                    e
                );
                interactive(nodeParent);
                document.querySelectorAll('.mapParent').forEach((item) => {
                    item.classList.remove('onClickDROM');
                });
                document
                    .querySelector('#backToMetropolitan')
                    .classList.remove('backFranceClick');
                this.classList.add('onClickDROM');
                backToFrance.classList.add('onClickMap');
                document
                    .querySelectorAll(
                        '.innerMapDomTom,.closeFilters, .mapInsert'
                    )
                    .forEach((item) => {
                        item.classList.remove('activeGeoloc');
                    });
                document
                    .querySelector('.mobile-filters')
                    .classList.remove('inactiveGeoloc');
                document.querySelector('html').classList.remove('blockScroll');
            }
        );
    }
}
function interactive(domParent) {
    document.querySelector(domParent).innerHTML = '';
    document.querySelectorAll('.groupMarker').forEach((item) => {
        item.classList.remove('focusOn');
    });
}
function moveMetropolitanMap(mapMetropolitan, longitude, latitude, zoom, e) {
    mapMetropolitan.setView(new L.LatLng(latitude, longitude), zoom);
    if (e && e.target.classList[0] === 'labelDomTom') {
        document.querySelector('.filter-geoloc').innerText = e.target.innerText;
        document
            .querySelector('.filter-geoloc')
            .parentNode.classList.add('blueClick');
    }
}
