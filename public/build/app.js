"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app/app.js":
/*!***************************!*\
  !*** ./assets/app/app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gouvfr_dsfr_dist_dsfr_dsfr_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gouvfr/dsfr/dist/dsfr/dsfr.min.css */ "./node_modules/@gouvfr/dsfr/dist/dsfr/dsfr.min.css");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/leaflet.js */ "./node_modules/leaflet/dist/leaflet.js");
/* harmony import */ var leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet_markercluster_dist_leaflet_markercluster_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet.markercluster/dist/leaflet.markercluster.js */ "./node_modules/leaflet.markercluster/dist/leaflet.markercluster.js");
/* harmony import */ var leaflet_markercluster_dist_leaflet_markercluster_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster_dist_leaflet_markercluster_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var leaflet_markercluster_dist_MarkerCluster_Default_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet.markercluster/dist/MarkerCluster.Default.css */ "./node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css");
/* harmony import */ var _js_AtTags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/AtTags */ "./assets/app/js/AtTags.js");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/app.scss */ "./assets/app/css/app.scss");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* global $ */
// DS
 // MAP




 // AT tag


 // Import GLobal Jquery in all project

__webpack_require__.g.$ = __webpack_require__.g.jQuery = $; // @TODO : REMOVE THIS WHEN SEARCH WILL BE BUILD

window.addEventListener('DOMContentLoaded', function (event) {
  new _js_AtTags__WEBPACK_IMPORTED_MODULE_5__["default"]().atTagsCallStatic();
  document.querySelector('#search-container button').addEventListener('click', function (e) {
    document.location.href = 'https://www.gouvernement.fr/search/site/' + document.querySelector('#search-container-input').value;
    e.preventDefault();
  });
});

/***/ }),

/***/ "./assets/app/js/AtTags.js":
/*!*********************************!*\
  !*** ./assets/app/js/AtTags.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_22__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* global tag, tarteaucitron */
var AtTags = /*#__PURE__*/function () {
  function AtTags() {
    _classCallCheck(this, AtTags);
  }

  _createClass(AtTags, [{
    key: "regexPage",
    value: // Function clean data to string
    function regexPage(text, elt, customVars) {
      var clickType = '';

      if (!customVars) {
        if (elt && elt.target) {
          var validFileExtensions = ['pdf', 'odt', 'mp3', 'ics', 'zip', 'svg', 'docx', 'txt', 'css', 'json', 'csv', 'png', 'gif', 'jpg', 'jpeg', 'svg']; // Check the environment system domain to href tag domain (Social Network)

          if (elt.hostname === 'www.facebook.com' || elt.hostname === 'twitter.com' || elt.hostname === 'www.linkedin.com' || elt.hostname === 'www.instagram.com' || elt.href.indexOf('mailto:') > -1) {
            clickType = 'action';
          } else if (undefined !== elt.origin) {
            clickType = 'exit';
          } else {
            clickType = 'navigation';
          } // Check if the link is downloadable file


          validFileExtensions.forEach(function (item) {
            if (item === elt.pathname.split('.').pop() || elt.dataset.type === 'download') {
              clickType = 'download';
            }
          });
        } else {
          clickType = 'action';
        }
      }

      var jsonATEnd = _objectSpread(_objectSpread({
        name: elt ? elt.innerText : '',
        chapter1: customVars ? '' : document.querySelector('h1').getAttribute('data-atLink-tag') ? document.querySelector('h1').getAttribute('data-atLink-tag') : document.querySelector('h1').innerText
      }, text), {}, {
        type: clickType
      });

      if (elt && elt.closest('div[data-module=bouton]')) {
        var prevStop = this.getPreviousSibling(elt.closest('div[data-module=bouton]'), 'div[data-module=titre]');
        jsonATEnd = _objectSpread(_objectSpread({}, jsonATEnd), {}, {
          chapter3: prevStop ? prevStop.innerText : ''
        });
      }

      var arrayIterate = [jsonATEnd, customVars ? customVars.site : ''];
      arrayIterate.forEach(function (e, i) {
        Object.keys(e).forEach(function (value) {
          var val = [value];
          var noSpaceQuotesLowercase = e[value].trim().replace(/'| |"/g, '_').toLowerCase();
          var noAccent = noSpaceQuotesLowercase.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          delete arrayIterate[i][noAccent];
          arrayIterate[i][val] = encodeURIComponent(noAccent);
        });
      });

      if (elt && elt.href) {
        arrayIterate[0] = _objectSpread(_objectSpread({}, arrayIterate[0]), {}, {
          customObject: {
            clic_url_brut: elt.href
          }
        });
      }

      return _objectSpread(_objectSpread({}, arrayIterate[0]), {}, {
        customVars: customVars
      });
    } // Static SSR links

  }, {
    key: "atTagsCallStatic",
    value: function atTagsCallStatic() {
      var fnClickData = this.atTagsCallClick.bind(this);
      var atArray = document.querySelectorAll('body > :not(header):not(footer) a, body > :not(header):not(footer) button');
      atArray.forEach(function (elt) {
        if (elt.getAttribute('data-atLink-tag')) {
          elt.addEventListener('click', function () {
            fnClickData(elt.getAttribute('data-atLink-tag'), elt);
          });
        }
      });
    } // Send click

  }, {
    key: "atTagsCallClick",
    value: function atTagsCallClick(jsonAT, elt) {
      if (tarteaucitron.state.atinternetcnil && typeof tag !== 'undefined') {
        if (elt && elt.getAttribute('aria-expanded') && elt.getAttribute('aria-expanded') === 'true') {
          return false;
        }

        tag.click.send(this.regexPage(JSON.parse(jsonAT), elt));
      }
    } // Send Page

  }, {
    key: "atTagsCallPage",
    value: function atTagsCallPage(jsonAT, jsonVisit) {
      var url = new URL(jsonVisit.site['15']);

      if (url.hash.substring(1).split('=').shift() === 'xtor') {
        url.hash = '';
      }

      if (url.searchParams.has('xtor')) {
        url.searchParams["delete"]('xtor');
      }

      jsonVisit.site['15'] = url.toString().replace('#', '%23');
      tag.page.send(this.regexPage(JSON.parse(jsonAT), '', jsonVisit));
    } // Get previous dom

  }, {
    key: "getPreviousSibling",
    value: function getPreviousSibling(elem, selector) {
      // Get the next sibling element
      var sibling = elem.previousElementSibling; // If there's no selector, return the first sibling

      if (!selector) return sibling; // If the sibling matches our selector, use it
      // If not, jump to the next sibling and continue the loop

      while (sibling) {
        if (sibling.matches(selector)) return sibling;
        sibling = sibling.previousElementSibling;
      }
    }
  }]);

  return AtTags;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AtTags);

/***/ }),

/***/ "./assets/app/css/app.scss":
/*!*********************************!*\
  !*** ./assets/app/css/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--b791ff","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-ec0184"], () => (__webpack_exec__("./assets/app/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBWCxDQUFmLEVBQW1DLEVBQW5DLEVBQXVDVSxTQUF2QyxDQUFkO0FBQ0gsTUFFRDs7OztXQUVBLDRCQUFtQlUsSUFBbkIsRUFBeUJDLFFBQXpCLEVBQW1DO0FBQy9CO0FBQ0EsVUFBSUMsT0FBTyxHQUFHRixJQUFJLENBQUNHLHNCQUFuQixDQUYrQixDQUkvQjs7QUFDQSxVQUFJLENBQUNGLFFBQUwsRUFBZSxPQUFPQyxPQUFQLENBTGdCLENBTy9CO0FBQ0E7O0FBQ0EsYUFBT0EsT0FBUCxFQUFnQjtBQUNaLFlBQUlBLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQkgsUUFBaEIsQ0FBSixFQUErQixPQUFPQyxPQUFQO0FBQy9CQSxRQUFBQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0Msc0JBQWxCO0FBQ0g7QUFDSjs7Ozs7O0FBR0wsaUVBQWV0RixNQUFmOzs7Ozs7Ozs7OztBQ2xLQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvQXRUYWdzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvY3NzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCAkICovXHJcblxyXG4vLyBEU1xyXG5pbXBvcnQgJ0Bnb3V2ZnIvZHNmci9kaXN0L2RzZnIvZHNmci5taW4uY3NzJztcclxuXHJcbi8vIE1BUFxyXG5pbXBvcnQgJ2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcyc7XHJcbmltcG9ydCAnbGVhZmxldC9kaXN0L2xlYWZsZXQuanMnO1xyXG5pbXBvcnQgJ2xlYWZsZXQubWFya2VyY2x1c3Rlci9kaXN0L2xlYWZsZXQubWFya2VyY2x1c3Rlci5qcyc7XHJcbmltcG9ydCAnbGVhZmxldC5tYXJrZXJjbHVzdGVyL2Rpc3QvTWFya2VyQ2x1c3Rlci5EZWZhdWx0LmNzcyc7XHJcblxyXG4vLyBBVCB0YWdcclxuaW1wb3J0IEF0VGFncyBmcm9tICcuL2pzL0F0VGFncyc7XHJcblxyXG5pbXBvcnQgJy4vY3NzL2FwcC5zY3NzJztcclxuXHJcbi8vIEltcG9ydCBHTG9iYWwgSnF1ZXJ5IGluIGFsbCBwcm9qZWN0XHJcbmdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XHJcblxyXG4vLyBAVE9ETyA6IFJFTU9WRSBUSElTIFdIRU4gU0VBUkNIIFdJTEwgQkUgQlVJTERcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcclxuICAgIG5ldyBBdFRhZ3MoKS5hdFRhZ3NDYWxsU3RhdGljKCk7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWNvbnRhaW5lciBidXR0b24nKVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPVxyXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vd3d3LmdvdXZlcm5lbWVudC5mci9zZWFyY2gvc2l0ZS8nICtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtY29udGFpbmVyLWlucHV0JykudmFsdWU7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxufSk7XHJcbiIsIi8qIGdsb2JhbCB0YWcsIHRhcnRlYXVjaXRyb24gKi9cclxuXHJcbmNsYXNzIEF0VGFncyB7XHJcbiAgICAvLyBGdW5jdGlvbiBjbGVhbiBkYXRhIHRvIHN0cmluZ1xyXG4gICAgcmVnZXhQYWdlKHRleHQsIGVsdCwgY3VzdG9tVmFycykge1xyXG4gICAgICAgIGxldCBjbGlja1R5cGUgPSAnJztcclxuICAgICAgICBpZiAoIWN1c3RvbVZhcnMpIHtcclxuICAgICAgICAgICAgaWYgKGVsdCAmJiBlbHQudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZEZpbGVFeHRlbnNpb25zID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICdwZGYnLFxyXG4gICAgICAgICAgICAgICAgICAgICdvZHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdtcDMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpY3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICd6aXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdkb2N4JyxcclxuICAgICAgICAgICAgICAgICAgICAndHh0JyxcclxuICAgICAgICAgICAgICAgICAgICAnY3NzJyxcclxuICAgICAgICAgICAgICAgICAgICAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NzdicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2dpZicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2pwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2pwZWcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdmcnLFxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIHRoZSBlbnZpcm9ubWVudCBzeXN0ZW0gZG9tYWluIHRvIGhyZWYgdGFnIGRvbWFpbiAoU29jaWFsIE5ldHdvcmspXHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgZWx0Lmhvc3RuYW1lID09PSAnd3d3LmZhY2Vib29rLmNvbScgfHxcclxuICAgICAgICAgICAgICAgICAgICBlbHQuaG9zdG5hbWUgPT09ICd0d2l0dGVyLmNvbScgfHxcclxuICAgICAgICAgICAgICAgICAgICBlbHQuaG9zdG5hbWUgPT09ICd3d3cubGlua2VkaW4uY29tJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVsdC5ob3N0bmFtZSA9PT0gJ3d3dy5pbnN0YWdyYW0uY29tJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVsdC5ocmVmLmluZGV4T2YoJ21haWx0bzonKSA+IC0xXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGlja1R5cGUgPSAnYWN0aW9uJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuRU5WX1VSTCAhPT0gZWx0Lm9yaWdpbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrVHlwZSA9ICdleGl0JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tUeXBlID0gJ25hdmlnYXRpb24nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGxpbmsgaXMgZG93bmxvYWRhYmxlIGZpbGVcclxuICAgICAgICAgICAgICAgIHZhbGlkRmlsZUV4dGVuc2lvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9PT0gZWx0LnBhdGhuYW1lLnNwbGl0KCcuJykucG9wKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWx0LmRhdGFzZXQudHlwZSA9PT0gJ2Rvd25sb2FkJ1xyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja1R5cGUgPSAnZG93bmxvYWQnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xpY2tUeXBlID0gJ2FjdGlvbic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBqc29uQVRFbmQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGVsdCA/IGVsdC5pbm5lclRleHQgOiAnJyxcclxuICAgICAgICAgICAgY2hhcHRlcjE6IGN1c3RvbVZhcnNcclxuICAgICAgICAgICAgICAgID8gJydcclxuICAgICAgICAgICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXRMaW5rLXRhZycpXHJcbiAgICAgICAgICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuZ2V0QXR0cmlidXRlKCdkYXRhLWF0TGluay10YWcnKVxyXG4gICAgICAgICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgLi4udGV4dCxcclxuICAgICAgICAgICAgdHlwZTogY2xpY2tUeXBlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChlbHQgJiYgZWx0LmNsb3Nlc3QoJ2RpdltkYXRhLW1vZHVsZT1ib3V0b25dJykpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJldlN0b3AgPSB0aGlzLmdldFByZXZpb3VzU2libGluZyhcclxuICAgICAgICAgICAgICAgIGVsdC5jbG9zZXN0KCdkaXZbZGF0YS1tb2R1bGU9Ym91dG9uXScpLFxyXG4gICAgICAgICAgICAgICAgJ2RpdltkYXRhLW1vZHVsZT10aXRyZV0nXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGpzb25BVEVuZCA9IHtcclxuICAgICAgICAgICAgICAgIC4uLmpzb25BVEVuZCxcclxuICAgICAgICAgICAgICAgIGNoYXB0ZXIzOiBwcmV2U3RvcCA/IHByZXZTdG9wLmlubmVyVGV4dCA6ICcnLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYXJyYXlJdGVyYXRlID0gW2pzb25BVEVuZCwgY3VzdG9tVmFycyA/IGN1c3RvbVZhcnMuc2l0ZSA6ICcnXTtcclxuICAgICAgICBhcnJheUl0ZXJhdGUuZm9yRWFjaChmdW5jdGlvbiAoZSwgaSkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gW3ZhbHVlXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vU3BhY2VRdW90ZXNMb3dlcmNhc2UgPSBlW3ZhbHVlXVxyXG4gICAgICAgICAgICAgICAgICAgIC50cmltKClcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJ3wgfFwiL2csICdfJylcclxuICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vQWNjZW50ID0gbm9TcGFjZVF1b3Rlc0xvd2VyY2FzZVxyXG4gICAgICAgICAgICAgICAgICAgIC5ub3JtYWxpemUoJ05GRCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBhcnJheUl0ZXJhdGVbaV1bbm9BY2NlbnRdO1xyXG4gICAgICAgICAgICAgICAgYXJyYXlJdGVyYXRlW2ldW3ZhbF0gPSBlbmNvZGVVUklDb21wb25lbnQobm9BY2NlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZWx0ICYmIGVsdC5ocmVmKSB7XHJcbiAgICAgICAgICAgIGFycmF5SXRlcmF0ZVswXSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLmFycmF5SXRlcmF0ZVswXSxcclxuICAgICAgICAgICAgICAgIGN1c3RvbU9iamVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNfdXJsX2JydXQ6IGVsdC5ocmVmLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsuLi5hcnJheUl0ZXJhdGVbMF0sIGN1c3RvbVZhcnN9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0YXRpYyBTU1IgbGlua3NcclxuICAgIGF0VGFnc0NhbGxTdGF0aWMoKSB7XHJcbiAgICAgICAgY29uc3QgZm5DbGlja0RhdGEgPSB0aGlzLmF0VGFnc0NhbGxDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IGF0QXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAnYm9keSA+IDpub3QoaGVhZGVyKTpub3QoZm9vdGVyKSBhLCBib2R5ID4gOm5vdChoZWFkZXIpOm5vdChmb290ZXIpIGJ1dHRvbidcclxuICAgICAgICApO1xyXG4gICAgICAgIGF0QXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChlbHQuZ2V0QXR0cmlidXRlKCdkYXRhLWF0TGluay10YWcnKSkge1xyXG4gICAgICAgICAgICAgICAgZWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZuQ2xpY2tEYXRhKGVsdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXRMaW5rLXRhZycpLCBlbHQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZW5kIGNsaWNrXHJcbiAgICBhdFRhZ3NDYWxsQ2xpY2soanNvbkFULCBlbHQpIHtcclxuICAgICAgICBpZiAodGFydGVhdWNpdHJvbi5zdGF0ZS5hdGludGVybmV0Y25pbCAmJiB0eXBlb2YgdGFnICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBlbHQgJiZcclxuICAgICAgICAgICAgICAgIGVsdC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSAmJlxyXG4gICAgICAgICAgICAgICAgZWx0LmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZSdcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFnLmNsaWNrLnNlbmQodGhpcy5yZWdleFBhZ2UoSlNPTi5wYXJzZShqc29uQVQpLCBlbHQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2VuZCBQYWdlXHJcbiAgICBhdFRhZ3NDYWxsUGFnZShqc29uQVQsIGpzb25WaXNpdCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoanNvblZpc2l0LnNpdGVbJzE1J10pO1xyXG4gICAgICAgIGlmICh1cmwuaGFzaC5zdWJzdHJpbmcoMSkuc3BsaXQoJz0nKS5zaGlmdCgpID09PSAneHRvcicpIHtcclxuICAgICAgICAgICAgdXJsLmhhc2ggPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuaGFzKCd4dG9yJykpIHtcclxuICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ3h0b3InKTtcclxuICAgICAgICB9XHJcbiAgICAgICAganNvblZpc2l0LnNpdGVbJzE1J10gPSB1cmwudG9TdHJpbmcoKS5yZXBsYWNlKCcjJywgJyUyMycpO1xyXG4gICAgICAgIHRhZy5wYWdlLnNlbmQodGhpcy5yZWdleFBhZ2UoSlNPTi5wYXJzZShqc29uQVQpLCAnJywganNvblZpc2l0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IHByZXZpb3VzIGRvbVxyXG5cclxuICAgIGdldFByZXZpb3VzU2libGluZyhlbGVtLCBzZWxlY3Rvcikge1xyXG4gICAgICAgIC8vIEdldCB0aGUgbmV4dCBzaWJsaW5nIGVsZW1lbnRcclxuICAgICAgICBsZXQgc2libGluZyA9IGVsZW0ucHJldmlvdXNFbGVtZW50U2libGluZztcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBzZWxlY3RvciwgcmV0dXJuIHRoZSBmaXJzdCBzaWJsaW5nXHJcbiAgICAgICAgaWYgKCFzZWxlY3RvcikgcmV0dXJuIHNpYmxpbmc7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBzaWJsaW5nIG1hdGNoZXMgb3VyIHNlbGVjdG9yLCB1c2UgaXRcclxuICAgICAgICAvLyBJZiBub3QsIGp1bXAgdG8gdGhlIG5leHQgc2libGluZyBhbmQgY29udGludWUgdGhlIGxvb3BcclxuICAgICAgICB3aGlsZSAoc2libGluZykge1xyXG4gICAgICAgICAgICBpZiAoc2libGluZy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHNpYmxpbmc7XHJcbiAgICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdFRhZ3M7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJBdFRhZ3MiLCJnbG9iYWwiLCIkIiwialF1ZXJ5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiYXRUYWdzQ2FsbFN0YXRpYyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImUiLCJsb2NhdGlvbiIsImhyZWYiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwidGV4dCIsImVsdCIsImN1c3RvbVZhcnMiLCJjbGlja1R5cGUiLCJ0YXJnZXQiLCJ2YWxpZEZpbGVFeHRlbnNpb25zIiwiaG9zdG5hbWUiLCJpbmRleE9mIiwicHJvY2VzcyIsImVudiIsIkVOVl9VUkwiLCJvcmlnaW4iLCJmb3JFYWNoIiwiaXRlbSIsInBhdGhuYW1lIiwic3BsaXQiLCJwb3AiLCJkYXRhc2V0IiwidHlwZSIsImpzb25BVEVuZCIsIm5hbWUiLCJpbm5lclRleHQiLCJjaGFwdGVyMSIsImdldEF0dHJpYnV0ZSIsImNsb3Nlc3QiLCJwcmV2U3RvcCIsImdldFByZXZpb3VzU2libGluZyIsImNoYXB0ZXIzIiwiYXJyYXlJdGVyYXRlIiwic2l0ZSIsImkiLCJPYmplY3QiLCJrZXlzIiwidmFsIiwibm9TcGFjZVF1b3Rlc0xvd2VyY2FzZSIsInRyaW0iLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJub0FjY2VudCIsIm5vcm1hbGl6ZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImN1c3RvbU9iamVjdCIsImNsaWNfdXJsX2JydXQiLCJmbkNsaWNrRGF0YSIsImF0VGFnc0NhbGxDbGljayIsImJpbmQiLCJhdEFycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImpzb25BVCIsInRhcnRlYXVjaXRyb24iLCJzdGF0ZSIsImF0aW50ZXJuZXRjbmlsIiwidGFnIiwiY2xpY2siLCJzZW5kIiwicmVnZXhQYWdlIiwiSlNPTiIsInBhcnNlIiwianNvblZpc2l0IiwidXJsIiwiVVJMIiwiaGFzaCIsInN1YnN0cmluZyIsInNoaWZ0Iiwic2VhcmNoUGFyYW1zIiwiaGFzIiwidG9TdHJpbmciLCJwYWdlIiwiZWxlbSIsInNlbGVjdG9yIiwic2libGluZyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJtYXRjaGVzIl0sInNvdXJjZVJvb3QiOiIifQ==