"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_app_js_Map_Osm_js"],{

/***/ "./assets/app/js/Api.js":
/*!******************************!*\
  !*** ./assets/app/js/Api.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// This class provider a http client


var Api = /*#__PURE__*/function () {
  function Api() {
    _classCallCheck(this, Api);
  }

  _createClass(Api, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(path, outSite) {
        var apiCall;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                apiCall = "http://api-pmv7.docker";

                if (outSite) {
                  apiCall = '';
                }

                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().get(apiCall + path).then(function (response) {
                  if (response.status === 200) {
                    return response.data;
                  } // @TODO manage error


                  // @TODO manage error
                  console.log('Erreur :');
                  console.log(response);
                })["catch"](function (response) {
                  console.log('Erreur :');
                  console.log(response);
                });

              case 4:
                return _context.abrupt("return", _context.sent);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function get(_x, _x2) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }]);

  return Api;
}();



/***/ }),

/***/ "./assets/app/js/Map/Osm.js":
/*!**********************************!*\
  !*** ./assets/app/js/Map/Osm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Osm)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_common_triangle_pin_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../images/common/triangle_pin.svg */ "./assets/images/common/triangle_pin.svg");
/* harmony import */ var _images_common_icon_default_pin_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../images/common/icon_default_pin.svg */ "./assets/images/common/icon_default_pin.svg");
/* harmony import */ var _images_common_pin_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../images/common/pin.svg */ "./assets/images/common/pin.svg");
/* harmony import */ var _Slideshow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Slideshow */ "./assets/app/js/Slideshow.js");
/* harmony import */ var _AtTags__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../AtTags */ "./assets/app/js/AtTags.js");








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Osm = /*#__PURE__*/function () {
  function Osm(selector) {
    _classCallCheck(this, Osm);

    this.selector = selector;
  }

  _createClass(Osm, [{
    key: "createMap",
    value: function createMap(infoMap, nameMap, optionSet) {
      var map = L.map(nameMap, {
        zoomControl: optionSet.zoomControl,
        scrollWheelZoom: optionSet.scrollWheelZoom,
        doubleClickZoom: optionSet.doubleClickZoom,
        dragging: optionSet.dragging,
        tap: false
      }).setView(optionSet.longitude ? [optionSet.latitude, optionSet.longitude] : infoMap[0].latitude && infoMap[0].longitude ? [infoMap[0].latitude, infoMap[0].longitude] : [0, 0]);
      map.attributionControl.setPosition('bottomleft');

      if (optionSet.zoomControl) {
        map.zoomControl.setPosition('bottomright');
      }

      if (optionSet.cluster) {
        var arrayCenterPin = [];
        var isTable = false;
        infoMap.forEach(function (item) {
          if (item.latitude && item.longitude) {
            arrayCenterPin.push([item.latitude, item.longitude]);
            isTable = true;
          }
        });

        if (!isTable) {
          arrayCenterPin.push([46.449, 2.21]);
        }

        var bounds = new L.LatLngBounds(arrayCenterPin); // Center + avoid pins on map edge

        map.fitBounds([bounds], {
          padding: [80, 80],
          maxZoom: !isTable ? 5 : 7
        });
      } else {
        map.setZoom(optionSet.zoom);
      }

      L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        attribution: '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
        detectRetina: false
      }).addTo(map);
      setTimeout(function () {
        map.invalidateSize();
      }, 200);
      return map;
    }
  }, {
    key: "renderWithPin",
    value: function renderWithPin(infoMap, nameMap, optionSet, contentPopup, atLevel, atSite2, optionCustom) {
      var callSlideshow = this.slideshowMove.bind(this);
      var tagAT = this.ATCall.bind(this);
      var map = this.createMap(infoMap, nameMap, optionSet);
      var LeafIcon = L.Icon.extend({
        options: {
          shadowUrl: _images_common_triangle_pin_svg__WEBPACK_IMPORTED_MODULE_7__,
          iconSize: [40, 40],
          shadowSize: [20, 20],
          shadowAnchor: [10, 11]
        }
      }); // Use cluster
      // maxClusterRadius : maxClusterRadius parameter assigns radius to cluster

      var markers = L.markerClusterGroup({
        spiderfyOnMaxZoom: false,
        showCoverageOnHover: false,
        singleMarkerMode: true,
        maxClusterRadius: optionSet.maxClusterRadius ? optionSet.maxClusterRadius : 10,
        iconCreateFunction: function iconCreateFunction(cluster) {
          return L.divIcon({
            html: '<div class="groupMarker" data-text="' + cluster.getAllChildMarkers()[0].options.name + '"><img src="' + _images_common_pin_svg__WEBPACK_IMPORTED_MODULE_9__ + '" alt=""><span class="countPin">' + cluster.getChildCount() + '</span></div>'
          });
        }
      }).on('clusterclick', function (a) {
        var bounds = a.layer.getBounds();
        var clusterParent = false;

        if (bounds._southWest.lat === bounds._northEast.lat && bounds._southWest.lng === bounds._northEast.lng) {
          clusterParent = true;
          markers.options.zoomToBoundsOnClick = false;
          tagAT(a.originalEvent.target.parentNode.getAttribute('data-text'), atLevel, atSite2);
        } else {
          markers.options.zoomToBoundsOnClick = true;
        }

        callSlideshow(map, optionSet.popinFunction, infoMap, optionSet.customPopin, optionSet.nodeParent, a.layer._cLatLng.lat, a.layer._cLatLng.lng, clusterParent, optionSet.querySpecificPin, {
          atLevel: atLevel,
          atSite2: atSite2,
          optionCustom: optionCustom
        });
        document.querySelectorAll('.groupMarker').forEach(function (item) {
          item.classList.remove('focusOn');
        });
        a.originalEvent.target.parentNode.classList.add('focusOn');
      });
      infoMap.forEach(function (item) {
        if (item.latitude && item.longitude) {
          var iconPin = new LeafIcon({
            iconUrl: item.mediaURL ? "http://bo-pmv7.docker" + item.mediaURL : _images_common_icon_default_pin_svg__WEBPACK_IMPORTED_MODULE_8__
          });
          var mark = L.marker([item.latitude, item.longitude], {
            icon: iconPin,
            name: item.location ? item.location : item.region
          }).bindPopup(contentPopup ? contentPopup(item) : '', {
            minWidth: 400,
            offset: [0, -40]
          }).on('click', function (a) {
            document.querySelectorAll('.groupMarker').forEach(function (item) {
              item.classList.remove('focusOn');
            });
            a.originalEvent.target.parentNode.classList.add('focusOn');
            map.on('zoomend', function () {
              a.originalEvent.target.parentNode.classList.remove('focusOn');
            });
            callSlideshow(map, optionSet.popinFunction, infoMap, optionSet.customPopin, optionSet.nodeParent, item.latitude, item.longitude, true, optionSet.querySpecificPin, {
              atLevel: atLevel,
              atSite2: atSite2,
              optionCustom: optionCustom
            });
            tagAT(a.originalEvent.target.parentNode.getAttribute('data-text'), atLevel, atSite2);
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
  }, {
    key: "ATCall",
    value: function ATCall(elt, atLevel, atSite2) {
      var jsonAt = {
        name: elt,
        chapter1: atSite2,
        chapter2: 'map-spot',
        level2: atLevel
      };
      new _AtTags__WEBPACK_IMPORTED_MODULE_11__["default"]().atTagsCallClick(JSON.stringify(jsonAt), '');
    }
  }, {
    key: "slideshowMove",
    value: function slideshowMove(map, functionCall, array, customPopin, nodeParent, latitude, longitude, clusterParent, querySpecificPin, callAT) {
      L.Map.prototype.setViewOffset = function (lat, lng, offset, zoomLevel) {
        // Convert lat / lng into pixels and move map in Y axis transform
        var targetPoint = this.project([lat, lng], zoomLevel).subtract(offset); // Convert from pixels to lat / lng

        var targetLatLng = this.unproject(targetPoint, zoomLevel);
        return this.setView(targetLatLng, zoomLevel);
      };

      map.setViewOffset(latitude, longitude, [0, -100], map.getZoom() + 3);

      if (customPopin) {
        (0,_Slideshow__WEBPACK_IMPORTED_MODULE_10__["default"])(functionCall, array, customPopin, nodeParent, latitude, longitude, '', clusterParent, querySpecificPin, callAT);
      }

      setTimeout(function () {
        map.invalidateSize();
      }, 200);
    }
  }]);

  return Osm;
}();



/***/ }),

/***/ "./assets/app/js/Slideshow.js":
/*!************************************!*\
  !*** ./assets/app/js/Slideshow.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slideshow)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
/* harmony import */ var _AtTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AtTags */ "./assets/app/js/AtTags.js");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Api */ "./assets/app/js/Api.js");





function Slideshow(result, table, elt, nodeParent, latitudeItem, longitudeItem, apiID, clusterParent, querySpecificPin, callAT) {
  if (querySpecificPin) {
    var querySpecPin = querySpecificPin + '&latitude=' + latitudeItem + '&longitude=' + longitudeItem;
    new _Api__WEBPACK_IMPORTED_MODULE_4__["default"]().get(querySpecPin).then(function (dataContent) {
      table = dataContent;
      slideInit(table['hydra:member']);
    });
  } else {
    slideInit(table);
  }

  function slideInit(table) {
    var startIndexSlide;
    document.querySelector(nodeParent).classList.remove('hidden');

    if (document.querySelector(nodeParent).querySelectorAll('*').length > 0) {
      document.querySelector(nodeParent).innerHTML = '';
    }

    var sliderDiv = document.createElement('div');
    sliderDiv.classList.add('slider');
    document.querySelector(nodeParent).appendChild(sliderDiv);
    var indexSlide = 0;
    table.forEach(function (item) {
      // Only if cluster doesn't have another cluster inside (last child)
      if (item.latitude === latitudeItem && item.longitude === longitudeItem && clusterParent) {
        document.querySelector(elt).insertAdjacentHTML('beforeend', result(item));

        if (apiID && item['@id'] === apiID) {
          // Jump to the slide index if click on the list item
          startIndexSlide = indexSlide;
        }

        indexSlide = indexSlide + 1;
      }
    }); // Build slider only if info

    if (document.querySelector(elt).querySelectorAll('*').length > 0) {
      var slider = (0,_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_2__.tns)({
        container: '.slider',
        items: 1,
        // Fix error on mobile touch. 'Auto' works too
        preventScrollOnTouch: 'force',
        loop: false,
        speed: 300,
        // Slide starts at 0
        startIndex: startIndexSlide,
        autoHeight: true,
        controlsText: ['<span class="fr-fi-arrow-left-s-line fr-fi--sm" aria-hidden="true"></span>', '<span class="fr-fi-arrow-right-s-line fr-fi--sm" aria-hidden="true"></span>'],
        nav: false,
        onInit: afterLoad(callAT)
      });
      var initIndex = slider.getInfo();
      document.querySelector('#infoMapTile .tns-outer').insertAdjacentHTML('beforeend', '<p class="fr-map-index fr-text-center fr-text--xs fr-mb-0">' + (startIndexSlide ? startIndexSlide + 1 : '1') + ' sur ' + initIndex.slideCount + '</p>');
      slider.events.on('indexChanged', getSliderIndex);
    }
  } // Get Wording for index slide


  function getSliderIndex(info) {
    document.querySelector('#infoMapTile .fr-map-index').innerText = info.displayIndex + ' sur ' + info.slideCount;
  } // AT


  function afterLoad(callAT) {
    document.querySelectorAll('#infoMapTile .fr-card__link').forEach(function (item) {
      item.addEventListener('click', function (e) {
        var jsonAt = {
          chapter2: 'map-cards',
          chapter3: e.currentTarget.closest('.fr-card').querySelector(callAT.optionCustom).innerText,
          level2: callAT.atLevel
        };
        new _AtTags__WEBPACK_IMPORTED_MODULE_3__["default"]().atTagsCallClick(JSON.stringify(jsonAt), this);
      });
    }); // Tabfocus

    document.querySelectorAll('#infoMapTile button').forEach(function (item) {
      item.tabIndex = '-1';
    });
  }
}

/***/ }),

/***/ "./assets/images/common/icon_default_pin.svg":
/*!***************************************************!*\
  !*** ./assets/images/common/icon_default_pin.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/icon_default_pin.0c0cf015.svg";

/***/ }),

/***/ "./assets/images/common/pin.svg":
/*!**************************************!*\
  !*** ./assets/images/common/pin.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/pin.fa10fa84.svg";

/***/ }),

/***/ "./assets/images/common/triangle_pin.svg":
/*!***********************************************!*\
  !*** ./assets/images/common/triangle_pin.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/triangle_pin.0b0b58e6.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2FwcF9qc19NYXBfT3NtX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFcUJDOzs7Ozs7Ozt5RUFDakIsaUJBQVVDLElBQVYsRUFBZ0JDLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRQyxnQkFBQUEsT0FEUixHQUNrQkMsd0JBRGxCOztBQUVJLG9CQUFJRixPQUFKLEVBQWE7QUFDVEMsa0JBQUFBLE9BQU8sR0FBRyxFQUFWO0FBQ0g7O0FBSkw7QUFBQSx1QkFLaUJKLGdEQUFBLENBQVVJLE9BQU8sR0FBR0YsSUFBcEIsRUFDUk8sSUFEUSxDQUNILFVBQUNDLFFBQUQsRUFBYztBQUNoQixzQkFBSUEsUUFBUSxDQUFDQyxNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCLDJCQUFPRCxRQUFRLENBQUNFLElBQWhCO0FBQ0gsbUJBSGUsQ0FLaEI7OztBQUFBO0FBQ0FDLGtCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0FELGtCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWjtBQUNILGlCQVRRLFdBVUYsVUFBQ0EsUUFBRCxFQUFjO0FBQ2pCRyxrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBRCxrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVo7QUFDSCxpQkFiUSxDQUxqQjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQlU7QUFDakIsZUFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNsQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNIOzs7O1dBRUQsbUJBQVVDLE9BQVYsRUFBbUJDLE9BQW5CLEVBQTRCQyxTQUE1QixFQUF1QztBQUNuQyxVQUFNQyxHQUFHLEdBQUdDLENBQUMsQ0FBQ0QsR0FBRixDQUFNRixPQUFOLEVBQWU7QUFDdkJJLFFBQUFBLFdBQVcsRUFBRUgsU0FBUyxDQUFDRyxXQURBO0FBRXZCQyxRQUFBQSxlQUFlLEVBQUVKLFNBQVMsQ0FBQ0ksZUFGSjtBQUd2QkMsUUFBQUEsZUFBZSxFQUFFTCxTQUFTLENBQUNLLGVBSEo7QUFJdkJDLFFBQUFBLFFBQVEsRUFBRU4sU0FBUyxDQUFDTSxRQUpHO0FBS3ZCQyxRQUFBQSxHQUFHLEVBQUU7QUFMa0IsT0FBZixFQU1UQyxPQU5TLENBT1JSLFNBQVMsQ0FBQ1MsU0FBVixHQUNNLENBQUNULFNBQVMsQ0FBQ1UsUUFBWCxFQUFxQlYsU0FBUyxDQUFDUyxTQUEvQixDQUROLEdBRU1YLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV1ksUUFBWCxJQUF1QlosT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXVyxTQUFsQyxHQUNBLENBQUNYLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV1ksUUFBWixFQUFzQlosT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXVyxTQUFqQyxDQURBLEdBRUEsQ0FBQyxDQUFELEVBQUksQ0FBSixDQVhFLENBQVo7QUFhQVIsTUFBQUEsR0FBRyxDQUFDVSxrQkFBSixDQUF1QkMsV0FBdkIsQ0FBbUMsWUFBbkM7O0FBQ0EsVUFBSVosU0FBUyxDQUFDRyxXQUFkLEVBQTJCO0FBQ3ZCRixRQUFBQSxHQUFHLENBQUNFLFdBQUosQ0FBZ0JTLFdBQWhCLENBQTRCLGFBQTVCO0FBQ0g7O0FBRUQsVUFBSVosU0FBUyxDQUFDYSxPQUFkLEVBQXVCO0FBQ25CLFlBQU1DLGNBQWMsR0FBRyxFQUF2QjtBQUNBLFlBQUlDLE9BQU8sR0FBRyxLQUFkO0FBQ0FqQixRQUFBQSxPQUFPLENBQUNrQixPQUFSLENBQWdCLFVBQUNDLElBQUQsRUFBVTtBQUN0QixjQUFJQSxJQUFJLENBQUNQLFFBQUwsSUFBaUJPLElBQUksQ0FBQ1IsU0FBMUIsRUFBcUM7QUFDakNLLFlBQUFBLGNBQWMsQ0FBQ0ksSUFBZixDQUFvQixDQUFDRCxJQUFJLENBQUNQLFFBQU4sRUFBZ0JPLElBQUksQ0FBQ1IsU0FBckIsQ0FBcEI7QUFDQU0sWUFBQUEsT0FBTyxHQUFHLElBQVY7QUFDSDtBQUNKLFNBTEQ7O0FBTUEsWUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDVkQsVUFBQUEsY0FBYyxDQUFDSSxJQUFmLENBQW9CLENBQUMsTUFBRCxFQUFTLElBQVQsQ0FBcEI7QUFDSDs7QUFDRCxZQUFNQyxNQUFNLEdBQUcsSUFBSWpCLENBQUMsQ0FBQ2tCLFlBQU4sQ0FBbUJOLGNBQW5CLENBQWYsQ0FabUIsQ0FhbkI7O0FBQ0FiLFFBQUFBLEdBQUcsQ0FBQ29CLFNBQUosQ0FBYyxDQUFDRixNQUFELENBQWQsRUFBd0I7QUFDcEJHLFVBQUFBLE9BQU8sRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBRFc7QUFFcEJDLFVBQUFBLE9BQU8sRUFBRSxDQUFDUixPQUFELEdBQVcsQ0FBWCxHQUFlO0FBRkosU0FBeEI7QUFJSCxPQWxCRCxNQWtCTztBQUNIZCxRQUFBQSxHQUFHLENBQUN1QixPQUFKLENBQVl4QixTQUFTLENBQUN5QixJQUF0QjtBQUNIOztBQUVEdkIsTUFBQUEsQ0FBQyxDQUFDd0IsU0FBRixDQUFZLHlEQUFaLEVBQXVFO0FBQ25FQyxRQUFBQSxXQUFXLEVBQ1AscUZBRitEO0FBR25FQyxRQUFBQSxZQUFZLEVBQUU7QUFIcUQsT0FBdkUsRUFJR0MsS0FKSCxDQUlTNUIsR0FKVDtBQU1BNkIsTUFBQUEsVUFBVSxDQUFDLFlBQVk7QUFDbkI3QixRQUFBQSxHQUFHLENBQUM4QixjQUFKO0FBQ0gsT0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUlBLGFBQU85QixHQUFQO0FBQ0g7OztXQUVELHVCQUNJSCxPQURKLEVBRUlDLE9BRkosRUFHSUMsU0FISixFQUlJZ0MsWUFKSixFQUtJQyxPQUxKLEVBTUlDLE9BTkosRUFPSUMsWUFQSixFQVFFO0FBQ0UsVUFBTUMsYUFBYSxHQUFHLEtBQUtDLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENBQXRCO0FBQ0EsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLE1BQUwsQ0FBWUYsSUFBWixDQUFpQixJQUFqQixDQUFkO0FBQ0EsVUFBTXJDLEdBQUcsR0FBRyxLQUFLd0MsU0FBTCxDQUFlM0MsT0FBZixFQUF3QkMsT0FBeEIsRUFBaUNDLFNBQWpDLENBQVo7QUFFQSxVQUFNMEMsUUFBUSxHQUFHeEMsQ0FBQyxDQUFDeUMsSUFBRixDQUFPQyxNQUFQLENBQWM7QUFDM0JDLFFBQUFBLE9BQU8sRUFBRTtBQUNMQyxVQUFBQSxTQUFTLEVBQUV2RCw0REFETjtBQUVMd0QsVUFBQUEsUUFBUSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FGTDtBQUdMQyxVQUFBQSxVQUFVLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUhQO0FBSUxDLFVBQUFBLFlBQVksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMO0FBSlQ7QUFEa0IsT0FBZCxDQUFqQixDQUxGLENBYUU7QUFDQTs7QUFDQSxVQUFNQyxPQUFPLEdBQUdoRCxDQUFDLENBQUNpRCxrQkFBRixDQUFxQjtBQUNqQ0MsUUFBQUEsaUJBQWlCLEVBQUUsS0FEYztBQUVqQ0MsUUFBQUEsbUJBQW1CLEVBQUUsS0FGWTtBQUdqQ0MsUUFBQUEsZ0JBQWdCLEVBQUUsSUFIZTtBQUlqQ0MsUUFBQUEsZ0JBQWdCLEVBQUV2RCxTQUFTLENBQUN1RCxnQkFBVixHQUNadkQsU0FBUyxDQUFDdUQsZ0JBREUsR0FFWixFQU4yQjtBQU9qQ0MsUUFBQUEsa0JBQWtCLEVBQUUsNEJBQVUzQyxPQUFWLEVBQW1CO0FBQ25DLGlCQUFPWCxDQUFDLENBQUN1RCxPQUFGLENBQVU7QUFDYkMsWUFBQUEsSUFBSSxFQUNBLHlDQUNBN0MsT0FBTyxDQUFDOEMsa0JBQVIsR0FBNkIsQ0FBN0IsRUFBZ0NkLE9BQWhDLENBQXdDZSxJQUR4QyxHQUVBLGNBRkEsR0FHQW5FLG1EQUhBLEdBSUEsa0NBSkEsR0FLQW9CLE9BQU8sQ0FBQ2dELGFBQVIsRUFMQSxHQU1BO0FBUlMsV0FBVixDQUFQO0FBVUg7QUFsQmdDLE9BQXJCLEVBbUJiQyxFQW5CYSxDQW1CVixjQW5CVSxFQW1CTSxVQUFVQyxDQUFWLEVBQWE7QUFDL0IsWUFBTTVDLE1BQU0sR0FBRzRDLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxTQUFSLEVBQWY7QUFDQSxZQUFJQyxhQUFhLEdBQUcsS0FBcEI7O0FBQ0EsWUFDSS9DLE1BQU0sQ0FBQ2dELFVBQVAsQ0FBa0JDLEdBQWxCLEtBQTBCakQsTUFBTSxDQUFDa0QsVUFBUCxDQUFrQkQsR0FBNUMsSUFDQWpELE1BQU0sQ0FBQ2dELFVBQVAsQ0FBa0JHLEdBQWxCLEtBQTBCbkQsTUFBTSxDQUFDa0QsVUFBUCxDQUFrQkMsR0FGaEQsRUFHRTtBQUNFSixVQUFBQSxhQUFhLEdBQUcsSUFBaEI7QUFDQWhCLFVBQUFBLE9BQU8sQ0FBQ0wsT0FBUixDQUFnQjBCLG1CQUFoQixHQUFzQyxLQUF0QztBQUNBaEMsVUFBQUEsS0FBSyxDQUNEd0IsQ0FBQyxDQUFDUyxhQUFGLENBQWdCQyxNQUFoQixDQUF1QkMsVUFBdkIsQ0FBa0NDLFlBQWxDLENBQStDLFdBQS9DLENBREMsRUFFRDFDLE9BRkMsRUFHREMsT0FIQyxDQUFMO0FBS0gsU0FYRCxNQVdPO0FBQ0hnQixVQUFBQSxPQUFPLENBQUNMLE9BQVIsQ0FBZ0IwQixtQkFBaEIsR0FBc0MsSUFBdEM7QUFDSDs7QUFFRG5DLFFBQUFBLGFBQWEsQ0FDVG5DLEdBRFMsRUFFVEQsU0FBUyxDQUFDNEUsYUFGRCxFQUdUOUUsT0FIUyxFQUlURSxTQUFTLENBQUM2RSxXQUpELEVBS1Q3RSxTQUFTLENBQUM4RSxVQUxELEVBTVRmLENBQUMsQ0FBQ0MsS0FBRixDQUFRZSxRQUFSLENBQWlCWCxHQU5SLEVBT1RMLENBQUMsQ0FBQ0MsS0FBRixDQUFRZSxRQUFSLENBQWlCVCxHQVBSLEVBUVRKLGFBUlMsRUFTVGxFLFNBQVMsQ0FBQ2dGLGdCQVRELEVBVVQ7QUFBQy9DLFVBQUFBLE9BQU8sRUFBUEEsT0FBRDtBQUFVQyxVQUFBQSxPQUFPLEVBQVBBLE9BQVY7QUFBbUJDLFVBQUFBLFlBQVksRUFBWkE7QUFBbkIsU0FWUyxDQUFiO0FBWUE4QyxRQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGNBQTFCLEVBQTBDbEUsT0FBMUMsQ0FBa0QsVUFBQ0MsSUFBRCxFQUFVO0FBQ3hEQSxVQUFBQSxJQUFJLENBQUNrRSxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsU0FBdEI7QUFDSCxTQUZEO0FBR0FyQixRQUFBQSxDQUFDLENBQUNTLGFBQUYsQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQUF2QixDQUFrQ1MsU0FBbEMsQ0FBNENFLEdBQTVDLENBQWdELFNBQWhEO0FBQ0gsT0FyRGUsQ0FBaEI7QUFzREF2RixNQUFBQSxPQUFPLENBQUNrQixPQUFSLENBQWdCLFVBQUNDLElBQUQsRUFBVTtBQUN0QixZQUFJQSxJQUFJLENBQUNQLFFBQUwsSUFBaUJPLElBQUksQ0FBQ1IsU0FBMUIsRUFBcUM7QUFDakMsY0FBTTZFLE9BQU8sR0FBRyxJQUFJNUMsUUFBSixDQUFhO0FBQ3pCNkMsWUFBQUEsT0FBTyxFQUFFdEUsSUFBSSxDQUFDdUUsUUFBTCxHQUNIM0csdUJBQUEsR0FBd0JvQyxJQUFJLENBQUN1RSxRQUQxQixHQUVIaEcsZ0VBQVVBO0FBSFMsV0FBYixDQUFoQjtBQUtBLGNBQU1rRyxJQUFJLEdBQUd4RixDQUFDLENBQUN5RixNQUFGLENBQVMsQ0FBQzFFLElBQUksQ0FBQ1AsUUFBTixFQUFnQk8sSUFBSSxDQUFDUixTQUFyQixDQUFULEVBQTBDO0FBQ25EbUYsWUFBQUEsSUFBSSxFQUFFTixPQUQ2QztBQUVuRDFCLFlBQUFBLElBQUksRUFBRTNDLElBQUksQ0FBQzRFLFFBQUwsR0FBZ0I1RSxJQUFJLENBQUM0RSxRQUFyQixHQUFnQzVFLElBQUksQ0FBQzZFO0FBRlEsV0FBMUMsRUFJUkMsU0FKUSxDQUlFL0QsWUFBWSxHQUFHQSxZQUFZLENBQUNmLElBQUQsQ0FBZixHQUF3QixFQUp0QyxFQUkwQztBQUMvQytFLFlBQUFBLFFBQVEsRUFBRSxHQURxQztBQUUvQ0MsWUFBQUEsTUFBTSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUMsRUFBTDtBQUZ1QyxXQUoxQyxFQVFSbkMsRUFSUSxDQVFMLE9BUkssRUFRSSxVQUFVQyxDQUFWLEVBQWE7QUFDdEJrQixZQUFBQSxRQUFRLENBQ0hDLGdCQURMLENBQ3NCLGNBRHRCLEVBRUtsRSxPQUZMLENBRWEsVUFBQ0MsSUFBRCxFQUFVO0FBQ2ZBLGNBQUFBLElBQUksQ0FBQ2tFLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixTQUF0QjtBQUNILGFBSkw7QUFLQXJCLFlBQUFBLENBQUMsQ0FBQ1MsYUFBRixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBQXZCLENBQWtDUyxTQUFsQyxDQUE0Q0UsR0FBNUMsQ0FDSSxTQURKO0FBR0FwRixZQUFBQSxHQUFHLENBQUM2RCxFQUFKLENBQU8sU0FBUCxFQUFrQixZQUFZO0FBQzFCQyxjQUFBQSxDQUFDLENBQUNTLGFBQUYsQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQUF2QixDQUFrQ1MsU0FBbEMsQ0FBNENDLE1BQTVDLENBQ0ksU0FESjtBQUdILGFBSkQ7QUFNQWhELFlBQUFBLGFBQWEsQ0FDVG5DLEdBRFMsRUFFVEQsU0FBUyxDQUFDNEUsYUFGRCxFQUdUOUUsT0FIUyxFQUlURSxTQUFTLENBQUM2RSxXQUpELEVBS1Q3RSxTQUFTLENBQUM4RSxVQUxELEVBTVQ3RCxJQUFJLENBQUNQLFFBTkksRUFPVE8sSUFBSSxDQUFDUixTQVBJLEVBUVQsSUFSUyxFQVNUVCxTQUFTLENBQUNnRixnQkFURCxFQVVUO0FBQUMvQyxjQUFBQSxPQUFPLEVBQVBBLE9BQUQ7QUFBVUMsY0FBQUEsT0FBTyxFQUFQQSxPQUFWO0FBQW1CQyxjQUFBQSxZQUFZLEVBQVpBO0FBQW5CLGFBVlMsQ0FBYjtBQVlBSSxZQUFBQSxLQUFLLENBQ0R3QixDQUFDLENBQUNTLGFBQUYsQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQUF2QixDQUFrQ0MsWUFBbEMsQ0FDSSxXQURKLENBREMsRUFJRDFDLE9BSkMsRUFLREMsT0FMQyxDQUFMO0FBT0gsV0ExQ1EsQ0FBYjs7QUEyQ0EsY0FBSSxDQUFDbEMsU0FBUyxDQUFDa0csUUFBZixFQUF5QjtBQUNyQlIsWUFBQUEsSUFBSSxDQUFDN0QsS0FBTCxDQUFXNUIsR0FBWDtBQUNILFdBRkQsTUFFTztBQUNIaUQsWUFBQUEsT0FBTyxDQUFDaUQsUUFBUixDQUFpQlQsSUFBakI7QUFDSDtBQUNKO0FBQ0osT0F4REQ7QUEwREF6RixNQUFBQSxHQUFHLENBQUNrRyxRQUFKLENBQWFqRCxPQUFiO0FBQ0EsYUFBT2pELEdBQVA7QUFDSDs7O1dBRUQsZ0JBQU9tRyxHQUFQLEVBQVluRSxPQUFaLEVBQXFCQyxPQUFyQixFQUE4QjtBQUMxQixVQUFNbUUsTUFBTSxHQUFHO0FBQ1h6QyxRQUFBQSxJQUFJLEVBQUV3QyxHQURLO0FBRVhFLFFBQUFBLFFBQVEsRUFBRXBFLE9BRkM7QUFHWHFFLFFBQUFBLFFBQVEsRUFBRSxVQUhDO0FBSVhDLFFBQUFBLE1BQU0sRUFBRXZFO0FBSkcsT0FBZjtBQU1BLFVBQUl0QyxnREFBSixHQUFhOEcsZUFBYixDQUE2QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLE1BQWYsQ0FBN0IsRUFBcUQsRUFBckQ7QUFDSDs7O1dBRUQsdUJBQ0lwRyxHQURKLEVBRUkyRyxZQUZKLEVBR0lDLEtBSEosRUFJSWhDLFdBSkosRUFLSUMsVUFMSixFQU1JcEUsUUFOSixFQU9JRCxTQVBKLEVBUUl5RCxhQVJKLEVBU0ljLGdCQVRKLEVBVUk4QixNQVZKLEVBV0U7QUFDRTVHLE1BQUFBLENBQUMsQ0FBQzZHLEdBQUYsQ0FBTUMsU0FBTixDQUFnQkMsYUFBaEIsR0FBZ0MsVUFBVTdDLEdBQVYsRUFBZUUsR0FBZixFQUFvQjJCLE1BQXBCLEVBQTRCaUIsU0FBNUIsRUFBdUM7QUFDbkU7QUFDQSxZQUFNQyxXQUFXLEdBQUcsS0FBS0MsT0FBTCxDQUFhLENBQUNoRCxHQUFELEVBQU1FLEdBQU4sQ0FBYixFQUF5QjRDLFNBQXpCLEVBQW9DRyxRQUFwQyxDQUNoQnBCLE1BRGdCLENBQXBCLENBRm1FLENBS25FOztBQUNBLFlBQU1xQixZQUFZLEdBQUcsS0FBS0MsU0FBTCxDQUFlSixXQUFmLEVBQTRCRCxTQUE1QixDQUFyQjtBQUNBLGVBQU8sS0FBSzFHLE9BQUwsQ0FBYThHLFlBQWIsRUFBMkJKLFNBQTNCLENBQVA7QUFDSCxPQVJEOztBQVNBakgsTUFBQUEsR0FBRyxDQUFDZ0gsYUFBSixDQUFrQnZHLFFBQWxCLEVBQTRCRCxTQUE1QixFQUF1QyxDQUFDLENBQUQsRUFBSSxDQUFDLEdBQUwsQ0FBdkMsRUFBa0RSLEdBQUcsQ0FBQ3VILE9BQUosS0FBZ0IsQ0FBbEU7O0FBQ0EsVUFBSTNDLFdBQUosRUFBaUI7QUFDYm5GLFFBQUFBLHVEQUFTLENBQ0xrSCxZQURLLEVBRUxDLEtBRkssRUFHTGhDLFdBSEssRUFJTEMsVUFKSyxFQUtMcEUsUUFMSyxFQU1MRCxTQU5LLEVBT0wsRUFQSyxFQVFMeUQsYUFSSyxFQVNMYyxnQkFUSyxFQVVMOEIsTUFWSyxDQUFUO0FBWUg7O0FBQ0RoRixNQUFBQSxVQUFVLENBQUMsWUFBWTtBQUNuQjdCLFFBQUFBLEdBQUcsQ0FBQzhCLGNBQUo7QUFDSCxPQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1BMO0FBQ0E7QUFDQTtBQUVlLFNBQVNyQyxTQUFULENBQ1hnSSxNQURXLEVBRVhDLEtBRlcsRUFHWHZCLEdBSFcsRUFJWHRCLFVBSlcsRUFLWDhDLFlBTFcsRUFNWEMsYUFOVyxFQU9YQyxLQVBXLEVBUVg1RCxhQVJXLEVBU1hjLGdCQVRXLEVBVVg4QixNQVZXLEVBV2I7QUFDRSxNQUFJOUIsZ0JBQUosRUFBc0I7QUFDbEIsUUFBTStDLFlBQVksR0FDZC9DLGdCQUFnQixHQUNoQixZQURBLEdBRUE0QyxZQUZBLEdBR0EsYUFIQSxHQUlBQyxhQUxKO0FBTUEsUUFBSXBKLDRDQUFKLEdBQVVPLEdBQVYsQ0FBYytJLFlBQWQsRUFBNEI5SSxJQUE1QixDQUFpQyxVQUFDK0ksV0FBRCxFQUFpQjtBQUM5Q0wsTUFBQUEsS0FBSyxHQUFHSyxXQUFSO0FBQ0FDLE1BQUFBLFNBQVMsQ0FBQ04sS0FBSyxDQUFDLGNBQUQsQ0FBTixDQUFUO0FBQ0gsS0FIRDtBQUlILEdBWEQsTUFXTztBQUNITSxJQUFBQSxTQUFTLENBQUNOLEtBQUQsQ0FBVDtBQUNIOztBQUNELFdBQVNNLFNBQVQsQ0FBbUJOLEtBQW5CLEVBQTBCO0FBQ3RCLFFBQUlPLGVBQUo7QUFDQWpELElBQUFBLFFBQVEsQ0FBQ2tELGFBQVQsQ0FBdUJyRCxVQUF2QixFQUFtQ0ssU0FBbkMsQ0FBNkNDLE1BQTdDLENBQW9ELFFBQXBEOztBQUNBLFFBQ0lILFFBQVEsQ0FBQ2tELGFBQVQsQ0FBdUJyRCxVQUF2QixFQUFtQ0ksZ0JBQW5DLENBQW9ELEdBQXBELEVBQXlEa0QsTUFBekQsR0FBa0UsQ0FEdEUsRUFFRTtBQUNFbkQsTUFBQUEsUUFBUSxDQUFDa0QsYUFBVCxDQUF1QnJELFVBQXZCLEVBQW1DdUQsU0FBbkMsR0FBK0MsRUFBL0M7QUFDSDs7QUFDRCxRQUFNQyxTQUFTLEdBQUdyRCxRQUFRLENBQUNzRCxhQUFULENBQXVCLEtBQXZCLENBQWxCO0FBQ0FELElBQUFBLFNBQVMsQ0FBQ25ELFNBQVYsQ0FBb0JFLEdBQXBCLENBQXdCLFFBQXhCO0FBQ0FKLElBQUFBLFFBQVEsQ0FBQ2tELGFBQVQsQ0FBdUJyRCxVQUF2QixFQUFtQzBELFdBQW5DLENBQStDRixTQUEvQztBQUNBLFFBQUlHLFVBQVUsR0FBRyxDQUFqQjtBQUNBZCxJQUFBQSxLQUFLLENBQUMzRyxPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFVO0FBQ3BCO0FBQ0EsVUFDSUEsSUFBSSxDQUFDUCxRQUFMLEtBQWtCa0gsWUFBbEIsSUFDQTNHLElBQUksQ0FBQ1IsU0FBTCxLQUFtQm9ILGFBRG5CLElBRUEzRCxhQUhKLEVBSUU7QUFDRWUsUUFBQUEsUUFBUSxDQUNIa0QsYUFETCxDQUNtQi9CLEdBRG5CLEVBRUtzQyxrQkFGTCxDQUV3QixXQUZ4QixFQUVxQ2hCLE1BQU0sQ0FBQ3pHLElBQUQsQ0FGM0M7O0FBSUEsWUFBSTZHLEtBQUssSUFBSTdHLElBQUksQ0FBQyxLQUFELENBQUosS0FBZ0I2RyxLQUE3QixFQUFvQztBQUNoQztBQUNBSSxVQUFBQSxlQUFlLEdBQUdPLFVBQWxCO0FBQ0g7O0FBQ0RBLFFBQUFBLFVBQVUsR0FBR0EsVUFBVSxHQUFHLENBQTFCO0FBQ0g7QUFDSixLQWpCRCxFQVpzQixDQThCdEI7O0FBQ0EsUUFBSXhELFFBQVEsQ0FBQ2tELGFBQVQsQ0FBdUIvQixHQUF2QixFQUE0QmxCLGdCQUE1QixDQUE2QyxHQUE3QyxFQUFrRGtELE1BQWxELEdBQTJELENBQS9ELEVBQWtFO0FBQzlELFVBQU1PLE1BQU0sR0FBR2xCLDhFQUFHLENBQUM7QUFDZm1CLFFBQUFBLFNBQVMsRUFBRSxTQURJO0FBRWZDLFFBQUFBLEtBQUssRUFBRSxDQUZRO0FBR2Y7QUFDQUMsUUFBQUEsb0JBQW9CLEVBQUUsT0FKUDtBQUtmQyxRQUFBQSxJQUFJLEVBQUUsS0FMUztBQU1mQyxRQUFBQSxLQUFLLEVBQUUsR0FOUTtBQU9mO0FBQ0FDLFFBQUFBLFVBQVUsRUFBRWYsZUFSRztBQVNmZ0IsUUFBQUEsVUFBVSxFQUFFLElBVEc7QUFVZkMsUUFBQUEsWUFBWSxFQUFFLENBQ1YsNEVBRFUsRUFFViw2RUFGVSxDQVZDO0FBY2ZDLFFBQUFBLEdBQUcsRUFBRSxLQWRVO0FBZWZDLFFBQUFBLE1BQU0sRUFBRUMsU0FBUyxDQUFDeEMsTUFBRDtBQWZGLE9BQUQsQ0FBbEI7QUFpQkEsVUFBTXlDLFNBQVMsR0FBR1osTUFBTSxDQUFDYSxPQUFQLEVBQWxCO0FBQ0F2RSxNQUFBQSxRQUFRLENBQ0hrRCxhQURMLENBQ21CLHlCQURuQixFQUVLTyxrQkFGTCxDQUdRLFdBSFIsRUFJUSxpRUFDS1IsZUFBZSxHQUFHQSxlQUFlLEdBQUcsQ0FBckIsR0FBeUIsR0FEN0MsSUFFSSxPQUZKLEdBR0lxQixTQUFTLENBQUNFLFVBSGQsR0FJSSxNQVJaO0FBVUFkLE1BQUFBLE1BQU0sQ0FBQ2UsTUFBUCxDQUFjNUYsRUFBZCxDQUFpQixjQUFqQixFQUFpQzZGLGNBQWpDO0FBQ0g7QUFDSixHQTdFSCxDQStFRTs7O0FBQ0EsV0FBU0EsY0FBVCxDQUF3QkMsSUFBeEIsRUFBOEI7QUFDMUIzRSxJQUFBQSxRQUFRLENBQUNrRCxhQUFULENBQXVCLDRCQUF2QixFQUFxRDBCLFNBQXJELEdBQ0lELElBQUksQ0FBQ0UsWUFBTCxHQUFvQixPQUFwQixHQUE4QkYsSUFBSSxDQUFDSCxVQUR2QztBQUVILEdBbkZILENBcUZFOzs7QUFDQSxXQUFTSCxTQUFULENBQW1CeEMsTUFBbkIsRUFBMkI7QUFDdkI3QixJQUFBQSxRQUFRLENBQ0hDLGdCQURMLENBQ3NCLDZCQUR0QixFQUVLbEUsT0FGTCxDQUVhLFVBQUNDLElBQUQsRUFBVTtBQUNmQSxNQUFBQSxJQUFJLENBQUM4SSxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFVQyxDQUFWLEVBQWE7QUFDeEMsWUFBTTNELE1BQU0sR0FBRztBQUNYRSxVQUFBQSxRQUFRLEVBQUUsV0FEQztBQUVYMEQsVUFBQUEsUUFBUSxFQUFFRCxDQUFDLENBQUNFLGFBQUYsQ0FDTEMsT0FESyxDQUNHLFVBREgsRUFFTGhDLGFBRkssQ0FFU3JCLE1BQU0sQ0FBQzNFLFlBRmhCLEVBRThCMEgsU0FKN0I7QUFLWHJELFVBQUFBLE1BQU0sRUFBRU0sTUFBTSxDQUFDN0U7QUFMSixTQUFmO0FBT0EsWUFBSXRDLCtDQUFKLEdBQWE4RyxlQUFiLENBQTZCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sTUFBZixDQUE3QixFQUFxRCxJQUFyRDtBQUNILE9BVEQ7QUFVSCxLQWJMLEVBRHVCLENBZ0J2Qjs7QUFDQXBCLElBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIscUJBQTFCLEVBQWlEbEUsT0FBakQsQ0FBeUQsVUFBQ0MsSUFBRCxFQUFVO0FBQy9EQSxNQUFBQSxJQUFJLENBQUNtSixRQUFMLEdBQWdCLElBQWhCO0FBQ0gsS0FGRDtBQUdIO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL01hcC9Pc20uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9TbGlkZXNob3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBjbGFzcyBwcm92aWRlciBhIGh0dHAgY2xpZW50XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xyXG4gICAgYXN5bmMgZ2V0KHBhdGgsIG91dFNpdGUpIHtcclxuICAgICAgICBsZXQgYXBpQ2FsbCA9IHByb2Nlc3MuZW52LkFQSV9VUkw7XHJcbiAgICAgICAgaWYgKG91dFNpdGUpIHtcclxuICAgICAgICAgICAgYXBpQ2FsbCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXdhaXQgQXhpb3MuZ2V0KGFwaUNhbGwgKyBwYXRoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEBUT0RPIG1hbmFnZSBlcnJvclxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VycmV1ciA6Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJldXIgOicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgcGluVHJpYW5nbGUgZnJvbSAnLi4vLi4vLi4vaW1hZ2VzL2NvbW1vbi90cmlhbmdsZV9waW4uc3ZnJztcclxuaW1wb3J0IHBpbkRlZmF1bHQgZnJvbSAnLi4vLi4vLi4vaW1hZ2VzL2NvbW1vbi9pY29uX2RlZmF1bHRfcGluLnN2Zyc7XHJcbmltcG9ydCBwaW5DbHVzdGVyIGZyb20gJy4uLy4uLy4uL2ltYWdlcy9jb21tb24vcGluLnN2Zyc7XHJcbmltcG9ydCBTbGlkZXNob3cgZnJvbSAnLi4vU2xpZGVzaG93JztcclxuaW1wb3J0IEF0VGFncyBmcm9tICcuLi9BdFRhZ3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3NtIHtcclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1hcChpbmZvTWFwLCBuYW1lTWFwLCBvcHRpb25TZXQpIHtcclxuICAgICAgICBjb25zdCBtYXAgPSBMLm1hcChuYW1lTWFwLCB7XHJcbiAgICAgICAgICAgIHpvb21Db250cm9sOiBvcHRpb25TZXQuem9vbUNvbnRyb2wsXHJcbiAgICAgICAgICAgIHNjcm9sbFdoZWVsWm9vbTogb3B0aW9uU2V0LnNjcm9sbFdoZWVsWm9vbSxcclxuICAgICAgICAgICAgZG91YmxlQ2xpY2tab29tOiBvcHRpb25TZXQuZG91YmxlQ2xpY2tab29tLFxyXG4gICAgICAgICAgICBkcmFnZ2luZzogb3B0aW9uU2V0LmRyYWdnaW5nLFxyXG4gICAgICAgICAgICB0YXA6IGZhbHNlLFxyXG4gICAgICAgIH0pLnNldFZpZXcoXHJcbiAgICAgICAgICAgIG9wdGlvblNldC5sb25naXR1ZGVcclxuICAgICAgICAgICAgICAgID8gW29wdGlvblNldC5sYXRpdHVkZSwgb3B0aW9uU2V0LmxvbmdpdHVkZV1cclxuICAgICAgICAgICAgICAgIDogaW5mb01hcFswXS5sYXRpdHVkZSAmJiBpbmZvTWFwWzBdLmxvbmdpdHVkZVxyXG4gICAgICAgICAgICAgICAgPyBbaW5mb01hcFswXS5sYXRpdHVkZSwgaW5mb01hcFswXS5sb25naXR1ZGVdXHJcbiAgICAgICAgICAgICAgICA6IFswLCAwXVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWFwLmF0dHJpYnV0aW9uQ29udHJvbC5zZXRQb3NpdGlvbignYm90dG9tbGVmdCcpO1xyXG4gICAgICAgIGlmIChvcHRpb25TZXQuem9vbUNvbnRyb2wpIHtcclxuICAgICAgICAgICAgbWFwLnpvb21Db250cm9sLnNldFBvc2l0aW9uKCdib3R0b21yaWdodCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvblNldC5jbHVzdGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFycmF5Q2VudGVyUGluID0gW107XHJcbiAgICAgICAgICAgIGxldCBpc1RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGluZm9NYXAuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubGF0aXR1ZGUgJiYgaXRlbS5sb25naXR1ZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJheUNlbnRlclBpbi5wdXNoKFtpdGVtLmxhdGl0dWRlLCBpdGVtLmxvbmdpdHVkZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFpc1RhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJheUNlbnRlclBpbi5wdXNoKFs0Ni40NDksIDIuMjFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBib3VuZHMgPSBuZXcgTC5MYXRMbmdCb3VuZHMoYXJyYXlDZW50ZXJQaW4pO1xyXG4gICAgICAgICAgICAvLyBDZW50ZXIgKyBhdm9pZCBwaW5zIG9uIG1hcCBlZGdlXHJcbiAgICAgICAgICAgIG1hcC5maXRCb3VuZHMoW2JvdW5kc10sIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFs4MCwgODBdLFxyXG4gICAgICAgICAgICAgICAgbWF4Wm9vbTogIWlzVGFibGUgPyA1IDogNyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWFwLnNldFpvb20ob3B0aW9uU2V0Lnpvb20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTC50aWxlTGF5ZXIoJ2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5mci9vc21mci97en0ve3h9L3t5fS5wbmcnLCB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uOlxyXG4gICAgICAgICAgICAgICAgJzxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5PcGVuU3RyZWV0TWFwPC9hPicsXHJcbiAgICAgICAgICAgIGRldGVjdFJldGluYTogZmFsc2UsXHJcbiAgICAgICAgfSkuYWRkVG8obWFwKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG1hcC5pbnZhbGlkYXRlU2l6ZSgpO1xyXG4gICAgICAgIH0sIDIwMCk7XHJcblxyXG4gICAgICAgIHJldHVybiBtYXA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyV2l0aFBpbihcclxuICAgICAgICBpbmZvTWFwLFxyXG4gICAgICAgIG5hbWVNYXAsXHJcbiAgICAgICAgb3B0aW9uU2V0LFxyXG4gICAgICAgIGNvbnRlbnRQb3B1cCxcclxuICAgICAgICBhdExldmVsLFxyXG4gICAgICAgIGF0U2l0ZTIsXHJcbiAgICAgICAgb3B0aW9uQ3VzdG9tXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBjYWxsU2xpZGVzaG93ID0gdGhpcy5zbGlkZXNob3dNb3ZlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgY29uc3QgdGFnQVQgPSB0aGlzLkFUQ2FsbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuY3JlYXRlTWFwKGluZm9NYXAsIG5hbWVNYXAsIG9wdGlvblNldCk7XHJcblxyXG4gICAgICAgIGNvbnN0IExlYWZJY29uID0gTC5JY29uLmV4dGVuZCh7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHNoYWRvd1VybDogcGluVHJpYW5nbGUsXHJcbiAgICAgICAgICAgICAgICBpY29uU2l6ZTogWzQwLCA0MF0sXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dTaXplOiBbMjAsIDIwXSxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0FuY2hvcjogWzEwLCAxMV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gVXNlIGNsdXN0ZXJcclxuICAgICAgICAvLyBtYXhDbHVzdGVyUmFkaXVzIDogbWF4Q2x1c3RlclJhZGl1cyBwYXJhbWV0ZXIgYXNzaWducyByYWRpdXMgdG8gY2x1c3RlclxyXG4gICAgICAgIGNvbnN0IG1hcmtlcnMgPSBMLm1hcmtlckNsdXN0ZXJHcm91cCh7XHJcbiAgICAgICAgICAgIHNwaWRlcmZ5T25NYXhab29tOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0NvdmVyYWdlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNpbmdsZU1hcmtlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgIG1heENsdXN0ZXJSYWRpdXM6IG9wdGlvblNldC5tYXhDbHVzdGVyUmFkaXVzXHJcbiAgICAgICAgICAgICAgICA/IG9wdGlvblNldC5tYXhDbHVzdGVyUmFkaXVzXHJcbiAgICAgICAgICAgICAgICA6IDEwLFxyXG4gICAgICAgICAgICBpY29uQ3JlYXRlRnVuY3Rpb246IGZ1bmN0aW9uIChjbHVzdGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTC5kaXZJY29uKHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdyb3VwTWFya2VyXCIgZGF0YS10ZXh0PVwiJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsdXN0ZXIuZ2V0QWxsQ2hpbGRNYXJrZXJzKClbMF0ub3B0aW9ucy5uYW1lICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1wiPjxpbWcgc3JjPVwiJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpbkNsdXN0ZXIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnXCIgYWx0PVwiXCI+PHNwYW4gY2xhc3M9XCJjb3VudFBpblwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHVzdGVyLmdldENoaWxkQ291bnQoKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L3NwYW4+PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLm9uKCdjbHVzdGVyY2xpY2snLCBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICBjb25zdCBib3VuZHMgPSBhLmxheWVyLmdldEJvdW5kcygpO1xyXG4gICAgICAgICAgICBsZXQgY2x1c3RlclBhcmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBib3VuZHMuX3NvdXRoV2VzdC5sYXQgPT09IGJvdW5kcy5fbm9ydGhFYXN0LmxhdCAmJlxyXG4gICAgICAgICAgICAgICAgYm91bmRzLl9zb3V0aFdlc3QubG5nID09PSBib3VuZHMuX25vcnRoRWFzdC5sbmdcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBjbHVzdGVyUGFyZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG1hcmtlcnMub3B0aW9ucy56b29tVG9Cb3VuZHNPbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0YWdBVChcclxuICAgICAgICAgICAgICAgICAgICBhLm9yaWdpbmFsRXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRleHQnKSxcclxuICAgICAgICAgICAgICAgICAgICBhdExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0U2l0ZTJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJrZXJzLm9wdGlvbnMuem9vbVRvQm91bmRzT25DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhbGxTbGlkZXNob3coXHJcbiAgICAgICAgICAgICAgICBtYXAsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25TZXQucG9waW5GdW5jdGlvbixcclxuICAgICAgICAgICAgICAgIGluZm9NYXAsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25TZXQuY3VzdG9tUG9waW4sXHJcbiAgICAgICAgICAgICAgICBvcHRpb25TZXQubm9kZVBhcmVudCxcclxuICAgICAgICAgICAgICAgIGEubGF5ZXIuX2NMYXRMbmcubGF0LFxyXG4gICAgICAgICAgICAgICAgYS5sYXllci5fY0xhdExuZy5sbmcsXHJcbiAgICAgICAgICAgICAgICBjbHVzdGVyUGFyZW50LFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uU2V0LnF1ZXJ5U3BlY2lmaWNQaW4sXHJcbiAgICAgICAgICAgICAgICB7YXRMZXZlbCwgYXRTaXRlMiwgb3B0aW9uQ3VzdG9tfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JvdXBNYXJrZXInKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzT24nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGEub3JpZ2luYWxFdmVudC50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdmb2N1c09uJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW5mb01hcC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmxhdGl0dWRlICYmIGl0ZW0ubG9uZ2l0dWRlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uUGluID0gbmV3IExlYWZJY29uKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uVXJsOiBpdGVtLm1lZGlhVVJMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvY2Vzcy5lbnYuVVJMX01FRElBICsgaXRlbS5tZWRpYVVSTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHBpbkRlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmsgPSBMLm1hcmtlcihbaXRlbS5sYXRpdHVkZSwgaXRlbS5sb25naXR1ZGVdLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogaWNvblBpbixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLmxvY2F0aW9uID8gaXRlbS5sb2NhdGlvbiA6IGl0ZW0ucmVnaW9uLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuYmluZFBvcHVwKGNvbnRlbnRQb3B1cCA/IGNvbnRlbnRQb3B1cChpdGVtKSA6ICcnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiA0MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDogWzAsIC00MF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JvdXBNYXJrZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzT24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhLm9yaWdpbmFsRXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmb2N1c09uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAub24oJ3pvb21lbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLm9yaWdpbmFsRXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZm9jdXNPbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbFNsaWRlc2hvdyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblNldC5wb3BpbkZ1bmN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mb01hcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblNldC5jdXN0b21Qb3BpbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblNldC5ub2RlUGFyZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubG9uZ2l0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblNldC5xdWVyeVNwZWNpZmljUGluLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2F0TGV2ZWwsIGF0U2l0ZTIsIG9wdGlvbkN1c3RvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnQVQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLm9yaWdpbmFsRXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLXRleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXRMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0U2l0ZTJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICghb3B0aW9uU2V0LmNvdW50UGluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyay5hZGRUbyhtYXApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJrZXJzLmFkZExheWVyKG1hcmspO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1hcC5hZGRMYXllcihtYXJrZXJzKTtcclxuICAgICAgICByZXR1cm4gbWFwO1xyXG4gICAgfVxyXG5cclxuICAgIEFUQ2FsbChlbHQsIGF0TGV2ZWwsIGF0U2l0ZTIpIHtcclxuICAgICAgICBjb25zdCBqc29uQXQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGVsdCxcclxuICAgICAgICAgICAgY2hhcHRlcjE6IGF0U2l0ZTIsXHJcbiAgICAgICAgICAgIGNoYXB0ZXIyOiAnbWFwLXNwb3QnLFxyXG4gICAgICAgICAgICBsZXZlbDI6IGF0TGV2ZWwsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBuZXcgQXRUYWdzKCkuYXRUYWdzQ2FsbENsaWNrKEpTT04uc3RyaW5naWZ5KGpzb25BdCksICcnKTtcclxuICAgIH1cclxuXHJcbiAgICBzbGlkZXNob3dNb3ZlKFxyXG4gICAgICAgIG1hcCxcclxuICAgICAgICBmdW5jdGlvbkNhbGwsXHJcbiAgICAgICAgYXJyYXksXHJcbiAgICAgICAgY3VzdG9tUG9waW4sXHJcbiAgICAgICAgbm9kZVBhcmVudCxcclxuICAgICAgICBsYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGUsXHJcbiAgICAgICAgY2x1c3RlclBhcmVudCxcclxuICAgICAgICBxdWVyeVNwZWNpZmljUGluLFxyXG4gICAgICAgIGNhbGxBVFxyXG4gICAgKSB7XHJcbiAgICAgICAgTC5NYXAucHJvdG90eXBlLnNldFZpZXdPZmZzZXQgPSBmdW5jdGlvbiAobGF0LCBsbmcsIG9mZnNldCwgem9vbUxldmVsKSB7XHJcbiAgICAgICAgICAgIC8vIENvbnZlcnQgbGF0IC8gbG5nIGludG8gcGl4ZWxzIGFuZCBtb3ZlIG1hcCBpbiBZIGF4aXMgdHJhbnNmb3JtXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvaW50ID0gdGhpcy5wcm9qZWN0KFtsYXQsIGxuZ10sIHpvb21MZXZlbCkuc3VidHJhY3QoXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gQ29udmVydCBmcm9tIHBpeGVscyB0byBsYXQgLyBsbmdcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0TGF0TG5nID0gdGhpcy51bnByb2plY3QodGFyZ2V0UG9pbnQsIHpvb21MZXZlbCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFZpZXcodGFyZ2V0TGF0TG5nLCB6b29tTGV2ZWwpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWFwLnNldFZpZXdPZmZzZXQobGF0aXR1ZGUsIGxvbmdpdHVkZSwgWzAsIC0xMDBdLCBtYXAuZ2V0Wm9vbSgpICsgMyk7XHJcbiAgICAgICAgaWYgKGN1c3RvbVBvcGluKSB7XHJcbiAgICAgICAgICAgIFNsaWRlc2hvdyhcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uQ2FsbCxcclxuICAgICAgICAgICAgICAgIGFycmF5LFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tUG9waW4sXHJcbiAgICAgICAgICAgICAgICBub2RlUGFyZW50LFxyXG4gICAgICAgICAgICAgICAgbGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICBsb25naXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgIGNsdXN0ZXJQYXJlbnQsXHJcbiAgICAgICAgICAgICAgICBxdWVyeVNwZWNpZmljUGluLFxyXG4gICAgICAgICAgICAgICAgY2FsbEFUXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBtYXAuaW52YWxpZGF0ZVNpemUoKTtcclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7dG5zfSBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL3Rpbnktc2xpZGVyJztcclxuaW1wb3J0IEF0VGFncyBmcm9tICcuL0F0VGFncyc7XHJcbmltcG9ydCBBcGkgZnJvbSAnLi9BcGknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVzaG93KFxyXG4gICAgcmVzdWx0LFxyXG4gICAgdGFibGUsXHJcbiAgICBlbHQsXHJcbiAgICBub2RlUGFyZW50LFxyXG4gICAgbGF0aXR1ZGVJdGVtLFxyXG4gICAgbG9uZ2l0dWRlSXRlbSxcclxuICAgIGFwaUlELFxyXG4gICAgY2x1c3RlclBhcmVudCxcclxuICAgIHF1ZXJ5U3BlY2lmaWNQaW4sXHJcbiAgICBjYWxsQVRcclxuKSB7XHJcbiAgICBpZiAocXVlcnlTcGVjaWZpY1Bpbikge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5U3BlY1BpbiA9XHJcbiAgICAgICAgICAgIHF1ZXJ5U3BlY2lmaWNQaW4gK1xyXG4gICAgICAgICAgICAnJmxhdGl0dWRlPScgK1xyXG4gICAgICAgICAgICBsYXRpdHVkZUl0ZW0gK1xyXG4gICAgICAgICAgICAnJmxvbmdpdHVkZT0nICtcclxuICAgICAgICAgICAgbG9uZ2l0dWRlSXRlbTtcclxuICAgICAgICBuZXcgQXBpKCkuZ2V0KHF1ZXJ5U3BlY1BpbikudGhlbigoZGF0YUNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgdGFibGUgPSBkYXRhQ29udGVudDtcclxuICAgICAgICAgICAgc2xpZGVJbml0KHRhYmxlWydoeWRyYTptZW1iZXInXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNsaWRlSW5pdCh0YWJsZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzbGlkZUluaXQodGFibGUpIHtcclxuICAgICAgICBsZXQgc3RhcnRJbmRleFNsaWRlO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobm9kZVBhcmVudCkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5vZGVQYXJlbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5sZW5ndGggPiAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobm9kZVBhcmVudCkuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNsaWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNsaWRlckRpdi5jbGFzc0xpc3QuYWRkKCdzbGlkZXInKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5vZGVQYXJlbnQpLmFwcGVuZENoaWxkKHNsaWRlckRpdik7XHJcbiAgICAgICAgbGV0IGluZGV4U2xpZGUgPSAwO1xyXG4gICAgICAgIHRhYmxlLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgLy8gT25seSBpZiBjbHVzdGVyIGRvZXNuJ3QgaGF2ZSBhbm90aGVyIGNsdXN0ZXIgaW5zaWRlIChsYXN0IGNoaWxkKVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBpdGVtLmxhdGl0dWRlID09PSBsYXRpdHVkZUl0ZW0gJiZcclxuICAgICAgICAgICAgICAgIGl0ZW0ubG9uZ2l0dWRlID09PSBsb25naXR1ZGVJdGVtICYmXHJcbiAgICAgICAgICAgICAgICBjbHVzdGVyUGFyZW50XHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihlbHQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcmVzdWx0KGl0ZW0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYXBpSUQgJiYgaXRlbVsnQGlkJ10gPT09IGFwaUlEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSnVtcCB0byB0aGUgc2xpZGUgaW5kZXggaWYgY2xpY2sgb24gdGhlIGxpc3QgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXhTbGlkZSA9IGluZGV4U2xpZGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbmRleFNsaWRlID0gaW5kZXhTbGlkZSArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBCdWlsZCBzbGlkZXIgb25seSBpZiBpbmZvXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWx0KS5xdWVyeVNlbGVjdG9yQWxsKCcqJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBzbGlkZXIgPSB0bnMoe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiAnLnNsaWRlcicsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgICAgIC8vIEZpeCBlcnJvciBvbiBtb2JpbGUgdG91Y2guICdBdXRvJyB3b3JrcyB0b29cclxuICAgICAgICAgICAgICAgIHByZXZlbnRTY3JvbGxPblRvdWNoOiAnZm9yY2UnLFxyXG4gICAgICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgICAgICAgICAgLy8gU2xpZGUgc3RhcnRzIGF0IDBcclxuICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXhTbGlkZSxcclxuICAgICAgICAgICAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sc1RleHQ6IFtcclxuICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJmci1maS1hcnJvdy1sZWZ0LXMtbGluZSBmci1maS0tc21cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+JyxcclxuICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJmci1maS1hcnJvdy1yaWdodC1zLWxpbmUgZnItZmktLXNtXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPicsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG9uSW5pdDogYWZ0ZXJMb2FkKGNhbGxBVCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBpbml0SW5kZXggPSBzbGlkZXIuZ2V0SW5mbygpO1xyXG4gICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNpbmZvTWFwVGlsZSAudG5zLW91dGVyJylcclxuICAgICAgICAgICAgICAgIC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJzxwIGNsYXNzPVwiZnItbWFwLWluZGV4IGZyLXRleHQtY2VudGVyIGZyLXRleHQtLXhzIGZyLW1iLTBcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXJ0SW5kZXhTbGlkZSA/IHN0YXJ0SW5kZXhTbGlkZSArIDEgOiAnMScpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyBzdXIgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRJbmRleC5zbGlkZUNvdW50ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzwvcD4nXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzbGlkZXIuZXZlbnRzLm9uKCdpbmRleENoYW5nZWQnLCBnZXRTbGlkZXJJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBXb3JkaW5nIGZvciBpbmRleCBzbGlkZVxyXG4gICAgZnVuY3Rpb24gZ2V0U2xpZGVySW5kZXgoaW5mbykge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmZvTWFwVGlsZSAuZnItbWFwLWluZGV4JykuaW5uZXJUZXh0ID1cclxuICAgICAgICAgICAgaW5mby5kaXNwbGF5SW5kZXggKyAnIHN1ciAnICsgaW5mby5zbGlkZUNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFUXHJcbiAgICBmdW5jdGlvbiBhZnRlckxvYWQoY2FsbEFUKSB7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJyNpbmZvTWFwVGlsZSAuZnItY2FyZF9fbGluaycpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBqc29uQXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXB0ZXIyOiAnbWFwLWNhcmRzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjM6IGUuY3VycmVudFRhcmdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5mci1jYXJkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGNhbGxBVC5vcHRpb25DdXN0b20pLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWwyOiBjYWxsQVQuYXRMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBBdFRhZ3MoKS5hdFRhZ3NDYWxsQ2xpY2soSlNPTi5zdHJpbmdpZnkoanNvbkF0KSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFRhYmZvY3VzXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2luZm9NYXBUaWxlIGJ1dHRvbicpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS50YWJJbmRleCA9ICctMSc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkF4aW9zIiwiQXBpIiwicGF0aCIsIm91dFNpdGUiLCJhcGlDYWxsIiwicHJvY2VzcyIsImVudiIsIkFQSV9VUkwiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInBpblRyaWFuZ2xlIiwicGluRGVmYXVsdCIsInBpbkNsdXN0ZXIiLCJTbGlkZXNob3ciLCJBdFRhZ3MiLCJPc20iLCJzZWxlY3RvciIsImluZm9NYXAiLCJuYW1lTWFwIiwib3B0aW9uU2V0IiwibWFwIiwiTCIsInpvb21Db250cm9sIiwic2Nyb2xsV2hlZWxab29tIiwiZG91YmxlQ2xpY2tab29tIiwiZHJhZ2dpbmciLCJ0YXAiLCJzZXRWaWV3IiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJhdHRyaWJ1dGlvbkNvbnRyb2wiLCJzZXRQb3NpdGlvbiIsImNsdXN0ZXIiLCJhcnJheUNlbnRlclBpbiIsImlzVGFibGUiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJib3VuZHMiLCJMYXRMbmdCb3VuZHMiLCJmaXRCb3VuZHMiLCJwYWRkaW5nIiwibWF4Wm9vbSIsInNldFpvb20iLCJ6b29tIiwidGlsZUxheWVyIiwiYXR0cmlidXRpb24iLCJkZXRlY3RSZXRpbmEiLCJhZGRUbyIsInNldFRpbWVvdXQiLCJpbnZhbGlkYXRlU2l6ZSIsImNvbnRlbnRQb3B1cCIsImF0TGV2ZWwiLCJhdFNpdGUyIiwib3B0aW9uQ3VzdG9tIiwiY2FsbFNsaWRlc2hvdyIsInNsaWRlc2hvd01vdmUiLCJiaW5kIiwidGFnQVQiLCJBVENhbGwiLCJjcmVhdGVNYXAiLCJMZWFmSWNvbiIsIkljb24iLCJleHRlbmQiLCJvcHRpb25zIiwic2hhZG93VXJsIiwiaWNvblNpemUiLCJzaGFkb3dTaXplIiwic2hhZG93QW5jaG9yIiwibWFya2VycyIsIm1hcmtlckNsdXN0ZXJHcm91cCIsInNwaWRlcmZ5T25NYXhab29tIiwic2hvd0NvdmVyYWdlT25Ib3ZlciIsInNpbmdsZU1hcmtlck1vZGUiLCJtYXhDbHVzdGVyUmFkaXVzIiwiaWNvbkNyZWF0ZUZ1bmN0aW9uIiwiZGl2SWNvbiIsImh0bWwiLCJnZXRBbGxDaGlsZE1hcmtlcnMiLCJuYW1lIiwiZ2V0Q2hpbGRDb3VudCIsIm9uIiwiYSIsImxheWVyIiwiZ2V0Qm91bmRzIiwiY2x1c3RlclBhcmVudCIsIl9zb3V0aFdlc3QiLCJsYXQiLCJfbm9ydGhFYXN0IiwibG5nIiwiem9vbVRvQm91bmRzT25DbGljayIsIm9yaWdpbmFsRXZlbnQiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiZ2V0QXR0cmlidXRlIiwicG9waW5GdW5jdGlvbiIsImN1c3RvbVBvcGluIiwibm9kZVBhcmVudCIsIl9jTGF0TG5nIiwicXVlcnlTcGVjaWZpY1BpbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImljb25QaW4iLCJpY29uVXJsIiwibWVkaWFVUkwiLCJVUkxfTUVESUEiLCJtYXJrIiwibWFya2VyIiwiaWNvbiIsImxvY2F0aW9uIiwicmVnaW9uIiwiYmluZFBvcHVwIiwibWluV2lkdGgiLCJvZmZzZXQiLCJjb3VudFBpbiIsImFkZExheWVyIiwiZWx0IiwianNvbkF0IiwiY2hhcHRlcjEiLCJjaGFwdGVyMiIsImxldmVsMiIsImF0VGFnc0NhbGxDbGljayIsIkpTT04iLCJzdHJpbmdpZnkiLCJmdW5jdGlvbkNhbGwiLCJhcnJheSIsImNhbGxBVCIsIk1hcCIsInByb3RvdHlwZSIsInNldFZpZXdPZmZzZXQiLCJ6b29tTGV2ZWwiLCJ0YXJnZXRQb2ludCIsInByb2plY3QiLCJzdWJ0cmFjdCIsInRhcmdldExhdExuZyIsInVucHJvamVjdCIsImdldFpvb20iLCJ0bnMiLCJyZXN1bHQiLCJ0YWJsZSIsImxhdGl0dWRlSXRlbSIsImxvbmdpdHVkZUl0ZW0iLCJhcGlJRCIsInF1ZXJ5U3BlY1BpbiIsImRhdGFDb250ZW50Iiwic2xpZGVJbml0Iiwic3RhcnRJbmRleFNsaWRlIiwicXVlcnlTZWxlY3RvciIsImxlbmd0aCIsImlubmVySFRNTCIsInNsaWRlckRpdiIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImluZGV4U2xpZGUiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJzbGlkZXIiLCJjb250YWluZXIiLCJpdGVtcyIsInByZXZlbnRTY3JvbGxPblRvdWNoIiwibG9vcCIsInNwZWVkIiwic3RhcnRJbmRleCIsImF1dG9IZWlnaHQiLCJjb250cm9sc1RleHQiLCJuYXYiLCJvbkluaXQiLCJhZnRlckxvYWQiLCJpbml0SW5kZXgiLCJnZXRJbmZvIiwic2xpZGVDb3VudCIsImV2ZW50cyIsImdldFNsaWRlckluZGV4IiwiaW5mbyIsImlubmVyVGV4dCIsImRpc3BsYXlJbmRleCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2hhcHRlcjMiLCJjdXJyZW50VGFyZ2V0IiwiY2xvc2VzdCIsInRhYkluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==