import Osm from '../../app/js/Map/Osm';
import List from './List';
import Slideshow from '../../app/js/Slideshow';
import {SCREEN_SWITCH} from '../../app/js/Constants';

export default function Map(result, atLevel, atSite2) {
    const domParent = '#infoMapTile';
    const domElt = domParent + ' .slider';
    const mapDom = document.createElement('div');
    mapDom.setAttribute('id', 'map');
    document.querySelector('.map').appendChild(mapDom);
    const infoMapTile = document.createElement('div');
    infoMapTile.setAttribute('id', 'infoMapTile');
    infoMapTile.setAttribute('data-module', 'map-cards');
    document.querySelector('.map').appendChild(infoMapTile);
    const mapAgenda = new Osm(document.querySelector('#map'))
        .renderWithPin(
            result,
            'map',
            {
                cluster: true,
                zoomControl: true,
                doubleClickZoom: true,
                dragging: true,
                scrollWheelZoom: true,
                customPopin: domElt,
                nodeParent: domParent,
                popinFunction: List,
                countPin: true,
                maxClusterRadius: 10,
            },
            '',
            atLevel,
            atSite2
        )
        .addEventListener('click', function () {
            interactive(domParent);
        })
        .addEventListener('dragend', function () {
            interactive(domParent);
        });
    document.querySelectorAll('.leaflet-control-zoom a').forEach((item) => {
        item.addEventListener('click', function () {
            document.querySelectorAll('.groupMarker').forEach((item) => {
                item.classList.remove('focusOn');
            });
        });
    });

    const arrayGeoClick = document.querySelectorAll(
        '.list .tiles .tile-group button:not(.pinMapButton)'
    );
    arrayGeoClick.forEach((item) => {
        item.addEventListener('click', function () {
            L.Map.prototype.setViewOffset = function (lat, lng, offset) {
                const targetPoint = this.project([lat, lng], 13).subtract(
                    offset
                );
                const targetLatLng = this.unproject(targetPoint, 13);
                return this.setView(targetLatLng, 13);
            };
            mapAgenda.setViewOffset(
                this.getAttribute('data-click-lat'),
                this.getAttribute('data-click-lng'),
                [0, -100],
                13
            );
            Slideshow(
                List,
                result,
                domElt,
                domParent,
                parseFloat(this.getAttribute('data-click-lat')),
                parseFloat(this.getAttribute('data-click-lng')),
                this.getAttribute('data-click-api'),
                true
            );
        });
    });
    if (window.innerWidth >= SCREEN_SWITCH) {
        // To align from the start of top contents column
        const alignTopColumn = 60;
        const heightHeaderMenu =
            document.querySelector('section:first-child').offsetHeight +
            document.querySelector('header').offsetHeight;
        const heightPinned =
            window.innerHeight - heightHeaderMenu - alignTopColumn;
        document.querySelector('.map').style.height = heightPinned + 'px';
        adaptMap(heightPinned, mapAgenda, heightHeaderMenu);
        window.addEventListener('scroll', function () {
            adaptMap(heightPinned, mapAgenda, heightHeaderMenu);
        });
    }
    // Click filter
    document
        .querySelector('.collapseFilter')
        .addEventListener('click', function (e) {
            e.stopImmediatePropagation();
            const domElt = document.querySelector('section:nth-child(2)');
            const filterCheck = domElt.classList.toggle('filterHidden');
            if (filterCheck) {
                domElt.classList.add('filterHidden');
                domElt.classList.remove('filterVisible');
                setTimeout(function () {
                    mapAgenda.invalidateSize();
                }, 400);
            } else {
                domElt.classList.remove('filterHidden');
                domElt.classList.add('filterVisible');
            }
        });
}

function interactive(domParent) {
    document.querySelector(domParent).innerHTML = '';
    document.querySelectorAll('.groupMarker').forEach((item) => {
        item.classList.remove('focusOn');
    });
}

function adaptMap(heightPinned, mapAgenda, heightHeaderMenu) {
    // To avoid end of map outside of the screen height when scroll + padding to have space between footer.
    const heightMapLimit = '94vh';
    if (document.documentElement.scrollTop < heightHeaderMenu) {
        document.querySelector('.map').style.height =
            heightPinned + document.documentElement.scrollTop + 'px';
    } else {
        document.querySelector('.map').style.height = heightMapLimit;
    }
    setTimeout(function () {
        mapAgenda.invalidateSize();
    }, 200);
}
