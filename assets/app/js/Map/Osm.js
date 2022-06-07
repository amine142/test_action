import pinTriangle from '../../../images/common/triangle_pin.svg';
import pinDefault from '../../../images/common/icon_default_pin.svg';
import pinCluster from '../../../images/common/pin.svg';
import Slideshow from '../Slideshow';
import AtTags from '../AtTags';

export default class Osm {
    constructor(selector) {
        this.selector = selector;
    }

    createMap(infoMap, nameMap, optionSet) {
        const map = L.map(nameMap, {
            zoomControl: optionSet.zoomControl,
            scrollWheelZoom: optionSet.scrollWheelZoom,
            doubleClickZoom: optionSet.doubleClickZoom,
            dragging: optionSet.dragging,
            tap: false,
        }).setView(
            optionSet.longitude
                ? [optionSet.latitude, optionSet.longitude]
                : infoMap[0].latitude && infoMap[0].longitude
                ? [infoMap[0].latitude, infoMap[0].longitude]
                : [0, 0]
        );
        map.attributionControl.setPosition('bottomleft');
        if (optionSet.zoomControl) {
            map.zoomControl.setPosition('bottomright');
        }

        if (optionSet.cluster) {
            const arrayCenterPin = [];
            let isTable = false;
            infoMap.forEach((item) => {
                if (item.latitude && item.longitude) {
                    arrayCenterPin.push([item.latitude, item.longitude]);
                    isTable = true;
                }
            });
            if (!isTable) {
                arrayCenterPin.push([46.449, 2.21]);
            }
            const bounds = new L.LatLngBounds(arrayCenterPin);
            // Center + avoid pins on map edge
            map.fitBounds([bounds], {
                padding: [80, 80],
                maxZoom: !isTable ? 5 : 7,
            });
        } else {
            map.setZoom(optionSet.zoom);
        }

        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            attribution:
                '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
            detectRetina: false,
        }).addTo(map);

        setTimeout(function () {
            map.invalidateSize();
        }, 200);

        return map;
    }

    renderWithPin(
        infoMap,
        nameMap,
        optionSet,
        contentPopup,
        atLevel,
        atSite2,
        optionCustom
    ) {
        const callSlideshow = this.slideshowMove.bind(this);
        const tagAT = this.ATCall.bind(this);
        const map = this.createMap(infoMap, nameMap, optionSet);

        const LeafIcon = L.Icon.extend({
            options: {
                shadowUrl: pinTriangle,
                iconSize: [40, 40],
                shadowSize: [20, 20],
                shadowAnchor: [10, 11],
            },
        });
        // Use cluster
        // maxClusterRadius : maxClusterRadius parameter assigns radius to cluster
        const markers = L.markerClusterGroup({
            spiderfyOnMaxZoom: false,
            showCoverageOnHover: false,
            singleMarkerMode: true,
            maxClusterRadius: optionSet.maxClusterRadius
                ? optionSet.maxClusterRadius
                : 10,
            iconCreateFunction: function (cluster) {
                return L.divIcon({
                    html:
                        '<div class="groupMarker" data-text="' +
                        cluster.getAllChildMarkers()[0].options.name +
                        '"><img src="' +
                        pinCluster +
                        '" alt=""><span class="countPin">' +
                        cluster.getChildCount() +
                        '</span></div>',
                });
            },
        }).on('clusterclick', function (a) {
            const bounds = a.layer.getBounds();
            let clusterParent = false;
            if (
                bounds._southWest.lat === bounds._northEast.lat &&
                bounds._southWest.lng === bounds._northEast.lng
            ) {
                clusterParent = true;
                markers.options.zoomToBoundsOnClick = false;
                tagAT(
                    a.originalEvent.target.parentNode.getAttribute('data-text'),
                    atLevel,
                    atSite2
                );
            } else {
                markers.options.zoomToBoundsOnClick = true;
            }

            callSlideshow(
                map,
                optionSet.popinFunction,
                infoMap,
                optionSet.customPopin,
                optionSet.nodeParent,
                a.layer._cLatLng.lat,
                a.layer._cLatLng.lng,
                clusterParent,
                optionSet.querySpecificPin,
                {atLevel, atSite2, optionCustom}
            );
            document.querySelectorAll('.groupMarker').forEach((item) => {
                item.classList.remove('focusOn');
            });
            a.originalEvent.target.parentNode.classList.add('focusOn');
        });
        infoMap.forEach((item) => {
            if (item.latitude && item.longitude) {
                const iconPin = new LeafIcon({
                    iconUrl: item.mediaURL
                        ? process.env.URL_MEDIA + item.mediaURL
                        : pinDefault,
                });
                const mark = L.marker([item.latitude, item.longitude], {
                    icon: iconPin,
                    name: item.location ? item.location : item.region,
                })
                    .bindPopup(contentPopup ? contentPopup(item) : '', {
                        minWidth: 400,
                        offset: [0, -40],
                    })
                    .on('click', function (a) {
                        document
                            .querySelectorAll('.groupMarker')
                            .forEach((item) => {
                                item.classList.remove('focusOn');
                            });
                        a.originalEvent.target.parentNode.classList.add(
                            'focusOn'
                        );
                        map.on('zoomend', function () {
                            a.originalEvent.target.parentNode.classList.remove(
                                'focusOn'
                            );
                        });

                        callSlideshow(
                            map,
                            optionSet.popinFunction,
                            infoMap,
                            optionSet.customPopin,
                            optionSet.nodeParent,
                            item.latitude,
                            item.longitude,
                            true,
                            optionSet.querySpecificPin,
                            {atLevel, atSite2, optionCustom}
                        );
                        tagAT(
                            a.originalEvent.target.parentNode.getAttribute(
                                'data-text'
                            ),
                            atLevel,
                            atSite2
                        );
                    });
                if (!optionSet.countPin) {
                    mark.addTo(map);
                } else {
                    markers.addLayer(mark);
                }
            }
        });

        map.addLayer(markers);
        return map;
    }

    ATCall(elt, atLevel, atSite2) {
        const jsonAt = {
            name: elt,
            chapter1: atSite2,
            chapter2: 'map-spot',
            level2: atLevel,
        };
        new AtTags().atTagsCallClick(JSON.stringify(jsonAt), '');
    }

    slideshowMove(
        map,
        functionCall,
        array,
        customPopin,
        nodeParent,
        latitude,
        longitude,
        clusterParent,
        querySpecificPin,
        callAT
    ) {
        L.Map.prototype.setViewOffset = function (lat, lng, offset, zoomLevel) {
            // Convert lat / lng into pixels and move map in Y axis transform
            const targetPoint = this.project([lat, lng], zoomLevel).subtract(
                offset
            );
            // Convert from pixels to lat / lng
            const targetLatLng = this.unproject(targetPoint, zoomLevel);
            return this.setView(targetLatLng, zoomLevel);
        };
        map.setViewOffset(latitude, longitude, [0, -100], map.getZoom() + 3);
        if (customPopin) {
            Slideshow(
                functionCall,
                array,
                customPopin,
                nodeParent,
                latitude,
                longitude,
                '',
                clusterParent,
                querySpecificPin,
                callAT
            );
        }
        setTimeout(function () {
            map.invalidateSize();
        }, 200);
    }
}
