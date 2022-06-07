(self["webpackChunk"] = self["webpackChunk"] || []).push([["launch-story-view"],{

/***/ "./assets/app/js/AtTags.js":
/*!*********************************!*\
  !*** ./assets/app/js/AtTags.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./assets/launch-story/index-view-v2.js":
/*!**********************************************!*\
  !*** ./assets/launch-story/index-view-v2.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/main.scss */ "./assets/launch-story/css/main.scss");
/* harmony import */ var _css_view_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/view.scss */ "./assets/launch-story/css/view.scss");
/* harmony import */ var _app_js_Map_Osm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/js/Map/Osm */ "./assets/app/js/Map/Osm.js");
/* harmony import */ var _app_js_AtTags__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/js/AtTags */ "./assets/app/js/AtTags.js");









/* global tarteaucitron, tag */





function generateScroll() {
  // Get element DOM of sec header
  var headerSec = document.querySelector('.progressParent'); // Get the position Y of sec Header

  var sticky = headerSec.offsetTop; // Listener on scroll

  window.addEventListener('scroll', function () {
    /* PROGRESS BAR */
    // Get the height of document
    var heightDoc = document.documentElement.scrollHeight - window.innerHeight; // Get the scroll Y

    var position = window.scrollY; // Get the document width

    var widthDoc = document.documentElement.clientWidth; // Calculation of large bar

    var bar = position / heightDoc * widthDoc; // Apply CSS properties

    document.querySelector('#progress').style.width = bar + 'px';
    /* STICKY + Collapse header */
    // Add or remove stick class following view page position

    if (window.pageYOffset > sticky) {
      headerSec.classList.add('sticky');
    } else {
      headerSec.classList.remove('sticky');
    }
  });
}

function getTargetLinkAT() {
  document.querySelectorAll('div[data-module="paragraph"]').forEach(function (item) {
    item.querySelectorAll('a').forEach(function (elt) {
      if (elt && !(elt.getAttribute('target') === '_blank')) {
        elt.setAttribute('target', '_blank');
      }
    });
  });
  document.querySelectorAll('#myContentViewBody a').forEach(function (item) {
    item.addEventListener('click', function () {
      var chapter3 = '';
      var moduleName = item.closest('[data-module]').getAttribute('data-module');

      if (moduleName === 'paragraph') {
        moduleName = 'lien';
      }

      if (moduleName === 'mise-en-avant') {
        if (item.closest('[data-module]').querySelector('h3')) {
          chapter3 = ',"chapter3":"' + item.closest('[data-module]').querySelector('h3').innerText + '"';
        }
      } // AT Tag Call


      var jsonAt = '{"chapter2":"' + moduleName + '","level2":"50"' + chapter3 + '}';
      new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_11__["default"]().atTagsCallClick(jsonAt, this);
    });
  });
}

function dataMap() {
  var mapSelector = 'map';
  var mapDataset = document.getElementById(mapSelector).dataset;
  var map = new _app_js_Map_Osm__WEBPACK_IMPORTED_MODULE_10__["default"]('#' + mapSelector);
  var mapArray = [];
  mapArray.push({
    region: mapDataset.mapRegion,
    latitude: mapDataset.mapLatitude,
    longitude: mapDataset.mapLongitude,
    mediaURL: mapDataset.mapImage
  });
  map.renderWithPin(mapArray, 'map', {
    zoom: 8,
    zoomControl: false,
    doubleClickZoom: false,
    dragging: false
  });
}

document.addEventListener('DOMContentLoaded', function () {
  generateScroll();
  getTargetLinkAT();
  dataMap();
}); // Load AT + TAC

window.addEventListener('tarteaucitron_loaded', function () {
  if (tarteaucitron.state.atinternetcnil && typeof tag !== 'undefined') {
    var _tag = document.querySelectorAll('.fr-tag');

    var itemString = '';

    _tag.forEach(function (item, index, array) {
      var tagTreatment = item.innerText.trim().replace(/'| |"/g, '_').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

      if (index !== array.length - 1) {
        itemString += tagTreatment + ',';
      } else {
        itemString += tagTreatment;
      }
    });

    var jsonAt = {
      name: document.querySelector('h1').getAttribute('data-atLink-tag') ? document.querySelector('h1').getAttribute('data-atLink-tag') : document.querySelector('h1').innerText,
      level2: '50'
    };
    var customVars = {
      site: {
        1: 'fr',
        2: itemString,
        3: document.querySelector('.date').innerText.split(':')[1].trim().split('/').reverse().join(''),
        15: window.location.href
      }
    };
    new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_11__["default"]().atTagsCallPage(JSON.stringify(jsonAt), customVars);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reverse.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reverse.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

var nativeReverse = [].reverse;
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray(this)) this.length = this.length;
    return nativeReverse.call(this);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-properties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-properties.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "./assets/launch-story/css/main.scss":
/*!*******************************************!*\
  !*** ./assets/launch-story/css/main.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/launch-story/css/view.scss":
/*!*******************************************!*\
  !*** ./assets/launch-story/css/view.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--b791ff","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-60d642","vendors-node_modules_axios_index_js-node_modules_regenerator-runtime_runtime_js","vendors-node_modules_core-js_modules_es_array_map_js-node_modules_core-js_modules_web_timers_-b460de","assets_app_js_Map_Osm_js"], () => (__webpack_exec__("./assets/launch-story/index-view-v2.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUYsWUFBSS9DLE1BQU0sQ0FBQ2dELFFBQVAsQ0FBZ0I3SDtBQVZsQjtBQURTLEtBQW5CO0FBY0EsUUFBSVIsdURBQUosR0FBYXNJLGNBQWIsQ0FBNEJ2RSxJQUFJLENBQUN3RSxTQUFMLENBQWUvQixNQUFmLENBQTVCLEVBQW9EckcsVUFBcEQ7QUFDSDtBQUNKLENBeENEOzs7Ozs7Ozs7OztBQ3RHYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsY0FBYyxtQkFBTyxDQUFDLDJFQUF1Qjs7QUFFN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0VBQStFO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ2pCRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRCx1QkFBdUIsbUJBQU8sQ0FBQywyR0FBdUM7O0FBRXRFO0FBQ0E7QUFDQSxJQUFJLHdFQUF3RTtBQUM1RTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDUkQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQsY0FBYyxtQkFBTyxDQUFDLDJFQUF1QjtBQUM3QyxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQscUNBQXFDLG1CQUFPLENBQUMsK0hBQWlEO0FBQzlGLHFCQUFxQixtQkFBTyxDQUFDLHlGQUE4Qjs7QUFFM0Q7QUFDQTtBQUNBLElBQUksa0RBQWtEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3ZCRDs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9BdFRhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xhdW5jaC1zdG9yeS9pbmRleC12aWV3LXYyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkucmV2ZXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9sYXVuY2gtc3RvcnkvY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbGF1bmNoLXN0b3J5L2Nzcy92aWV3LnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHRhZywgdGFydGVhdWNpdHJvbiAqL1xyXG5cclxuY2xhc3MgQXRUYWdzIHtcclxuICAgIC8vIEZ1bmN0aW9uIGNsZWFuIGRhdGEgdG8gc3RyaW5nXHJcbiAgICByZWdleFBhZ2UodGV4dCwgZWx0LCBjdXN0b21WYXJzKSB7XHJcbiAgICAgICAgbGV0IGNsaWNrVHlwZSA9ICcnO1xyXG4gICAgICAgIGlmICghY3VzdG9tVmFycykge1xyXG4gICAgICAgICAgICBpZiAoZWx0ICYmIGVsdC50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkRmlsZUV4dGVuc2lvbnMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BkZicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ29kdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21wMycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ljcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ppcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N2ZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RvY3gnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0eHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdqc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnY3N2JyxcclxuICAgICAgICAgICAgICAgICAgICAncG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAnZ2lmJyxcclxuICAgICAgICAgICAgICAgICAgICAnanBnJyxcclxuICAgICAgICAgICAgICAgICAgICAnanBlZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N2ZycsXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgdGhlIGVudmlyb25tZW50IHN5c3RlbSBkb21haW4gdG8gaHJlZiB0YWcgZG9tYWluIChTb2NpYWwgTmV0d29yaylcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBlbHQuaG9zdG5hbWUgPT09ICd3d3cuZmFjZWJvb2suY29tJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVsdC5ob3N0bmFtZSA9PT0gJ3R3aXR0ZXIuY29tJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVsdC5ob3N0bmFtZSA9PT0gJ3d3dy5saW5rZWRpbi5jb20nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZWx0Lmhvc3RuYW1lID09PSAnd3d3Lmluc3RhZ3JhbS5jb20nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZWx0LmhyZWYuaW5kZXhPZignbWFpbHRvOicpID4gLTFcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrVHlwZSA9ICdhY3Rpb24nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5FTlZfVVJMICE9PSBlbHQub3JpZ2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tUeXBlID0gJ2V4aXQnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGlja1R5cGUgPSAnbmF2aWdhdGlvbic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgbGluayBpcyBkb3dubG9hZGFibGUgZmlsZVxyXG4gICAgICAgICAgICAgICAgdmFsaWRGaWxlRXh0ZW5zaW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID09PSBlbHQucGF0aG5hbWUuc3BsaXQoJy4nKS5wb3AoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHQuZGF0YXNldC50eXBlID09PSAnZG93bmxvYWQnXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrVHlwZSA9ICdkb3dubG9hZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbGlja1R5cGUgPSAnYWN0aW9uJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGpzb25BVEVuZCA9IHtcclxuICAgICAgICAgICAgbmFtZTogZWx0ID8gZWx0LmlubmVyVGV4dCA6ICcnLFxyXG4gICAgICAgICAgICBjaGFwdGVyMTogY3VzdG9tVmFyc1xyXG4gICAgICAgICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLmdldEF0dHJpYnV0ZSgnZGF0YS1hdExpbmstdGFnJylcclxuICAgICAgICAgICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXRMaW5rLXRhZycpXHJcbiAgICAgICAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAuLi50ZXh0LFxyXG4gICAgICAgICAgICB0eXBlOiBjbGlja1R5cGUsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGVsdCAmJiBlbHQuY2xvc2VzdCgnZGl2W2RhdGEtbW9kdWxlPWJvdXRvbl0nKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2U3RvcCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nKFxyXG4gICAgICAgICAgICAgICAgZWx0LmNsb3Nlc3QoJ2RpdltkYXRhLW1vZHVsZT1ib3V0b25dJyksXHJcbiAgICAgICAgICAgICAgICAnZGl2W2RhdGEtbW9kdWxlPXRpdHJlXSdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAganNvbkFURW5kID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uanNvbkFURW5kLFxyXG4gICAgICAgICAgICAgICAgY2hhcHRlcjM6IHByZXZTdG9wID8gcHJldlN0b3AuaW5uZXJUZXh0IDogJycsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhcnJheUl0ZXJhdGUgPSBbanNvbkFURW5kLCBjdXN0b21WYXJzID8gY3VzdG9tVmFycy5zaXRlIDogJyddO1xyXG4gICAgICAgIGFycmF5SXRlcmF0ZS5mb3JFYWNoKGZ1bmN0aW9uIChlLCBpKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBbdmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9TcGFjZVF1b3Rlc0xvd2VyY2FzZSA9IGVbdmFsdWVdXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nfCB8XCIvZywgJ18nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9BY2NlbnQgPSBub1NwYWNlUXVvdGVzTG93ZXJjYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgLm5vcm1hbGl6ZSgnTkZEJylcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgJycpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGFycmF5SXRlcmF0ZVtpXVtub0FjY2VudF07XHJcbiAgICAgICAgICAgICAgICBhcnJheUl0ZXJhdGVbaV1bdmFsXSA9IGVuY29kZVVSSUNvbXBvbmVudChub0FjY2VudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChlbHQgJiYgZWx0LmhyZWYpIHtcclxuICAgICAgICAgICAgYXJyYXlJdGVyYXRlWzBdID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uYXJyYXlJdGVyYXRlWzBdLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tT2JqZWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY191cmxfYnJ1dDogZWx0LmhyZWYsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gey4uLmFycmF5SXRlcmF0ZVswXSwgY3VzdG9tVmFyc307XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3RhdGljIFNTUiBsaW5rc1xyXG4gICAgYXRUYWdzQ2FsbFN0YXRpYygpIHtcclxuICAgICAgICBjb25zdCBmbkNsaWNrRGF0YSA9IHRoaXMuYXRUYWdzQ2FsbENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgY29uc3QgYXRBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICdib2R5ID4gOm5vdChoZWFkZXIpOm5vdChmb290ZXIpIGEsIGJvZHkgPiA6bm90KGhlYWRlcik6bm90KGZvb3RlcikgYnV0dG9uJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgYXRBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChlbHQpIHtcclxuICAgICAgICAgICAgaWYgKGVsdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXRMaW5rLXRhZycpKSB7XHJcbiAgICAgICAgICAgICAgICBlbHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm5DbGlja0RhdGEoZWx0LmdldEF0dHJpYnV0ZSgnZGF0YS1hdExpbmstdGFnJyksIGVsdCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNlbmQgY2xpY2tcclxuICAgIGF0VGFnc0NhbGxDbGljayhqc29uQVQsIGVsdCkge1xyXG4gICAgICAgIGlmICh0YXJ0ZWF1Y2l0cm9uLnN0YXRlLmF0aW50ZXJuZXRjbmlsICYmIHR5cGVvZiB0YWcgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGVsdCAmJlxyXG4gICAgICAgICAgICAgICAgZWx0LmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpICYmXHJcbiAgICAgICAgICAgICAgICBlbHQuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICd0cnVlJ1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YWcuY2xpY2suc2VuZCh0aGlzLnJlZ2V4UGFnZShKU09OLnBhcnNlKGpzb25BVCksIGVsdCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTZW5kIFBhZ2VcclxuICAgIGF0VGFnc0NhbGxQYWdlKGpzb25BVCwganNvblZpc2l0KSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChqc29uVmlzaXQuc2l0ZVsnMTUnXSk7XHJcbiAgICAgICAgaWYgKHVybC5oYXNoLnN1YnN0cmluZygxKS5zcGxpdCgnPScpLnNoaWZ0KCkgPT09ICd4dG9yJykge1xyXG4gICAgICAgICAgICB1cmwuaGFzaCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMoJ3h0b3InKSkge1xyXG4gICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZSgneHRvcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqc29uVmlzaXQuc2l0ZVsnMTUnXSA9IHVybC50b1N0cmluZygpLnJlcGxhY2UoJyMnLCAnJTIzJyk7XHJcbiAgICAgICAgdGFnLnBhZ2Uuc2VuZCh0aGlzLnJlZ2V4UGFnZShKU09OLnBhcnNlKGpzb25BVCksICcnLCBqc29uVmlzaXQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgcHJldmlvdXMgZG9tXHJcblxyXG4gICAgZ2V0UHJldmlvdXNTaWJsaW5nKGVsZW0sIHNlbGVjdG9yKSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBuZXh0IHNpYmxpbmcgZWxlbWVudFxyXG4gICAgICAgIGxldCBzaWJsaW5nID0gZWxlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIHNlbGVjdG9yLCByZXR1cm4gdGhlIGZpcnN0IHNpYmxpbmdcclxuICAgICAgICBpZiAoIXNlbGVjdG9yKSByZXR1cm4gc2libGluZztcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIHNpYmxpbmcgbWF0Y2hlcyBvdXIgc2VsZWN0b3IsIHVzZSBpdFxyXG4gICAgICAgIC8vIElmIG5vdCwganVtcCB0byB0aGUgbmV4dCBzaWJsaW5nIGFuZCBjb250aW51ZSB0aGUgbG9vcFxyXG4gICAgICAgIHdoaWxlIChzaWJsaW5nKSB7XHJcbiAgICAgICAgICAgIGlmIChzaWJsaW5nLm1hdGNoZXMoc2VsZWN0b3IpKSByZXR1cm4gc2libGluZztcclxuICAgICAgICAgICAgc2libGluZyA9IHNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF0VGFncztcclxuIiwiLyogZ2xvYmFsIHRhcnRlYXVjaXRyb24sIHRhZyAqL1xyXG5pbXBvcnQgJy4vY3NzL21haW4uc2Nzcyc7XHJcbmltcG9ydCAnLi9jc3Mvdmlldy5zY3NzJztcclxuaW1wb3J0IE9zbSBmcm9tICcuLi9hcHAvanMvTWFwL09zbSc7XHJcbmltcG9ydCBBdFRhZ3MgZnJvbSAnLi4vYXBwL2pzL0F0VGFncyc7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVNjcm9sbCgpIHtcclxuICAgIC8vIEdldCBlbGVtZW50IERPTSBvZiBzZWMgaGVhZGVyXHJcbiAgICBjb25zdCBoZWFkZXJTZWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3NQYXJlbnQnKTtcclxuICAgIC8vIEdldCB0aGUgcG9zaXRpb24gWSBvZiBzZWMgSGVhZGVyXHJcbiAgICBjb25zdCBzdGlja3kgPSBoZWFkZXJTZWMub2Zmc2V0VG9wO1xyXG4gICAgLy8gTGlzdGVuZXIgb24gc2Nyb2xsXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgIC8qIFBST0dSRVNTIEJBUiAqL1xyXG4gICAgICAgIC8vIEdldCB0aGUgaGVpZ2h0IG9mIGRvY3VtZW50XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0RG9jID1cclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICAvLyBHZXQgdGhlIHNjcm9sbCBZXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgICAvLyBHZXQgdGhlIGRvY3VtZW50IHdpZHRoXHJcbiAgICAgICAgY29uc3Qgd2lkdGhEb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgLy8gQ2FsY3VsYXRpb24gb2YgbGFyZ2UgYmFyXHJcbiAgICAgICAgY29uc3QgYmFyID0gKHBvc2l0aW9uIC8gaGVpZ2h0RG9jKSAqIHdpZHRoRG9jO1xyXG4gICAgICAgIC8vIEFwcGx5IENTUyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2dyZXNzJykuc3R5bGUud2lkdGggPSBiYXIgKyAncHgnO1xyXG5cclxuICAgICAgICAvKiBTVElDS1kgKyBDb2xsYXBzZSBoZWFkZXIgKi9cclxuICAgICAgICAvLyBBZGQgb3IgcmVtb3ZlIHN0aWNrIGNsYXNzIGZvbGxvd2luZyB2aWV3IHBhZ2UgcG9zaXRpb25cclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gc3RpY2t5KSB7XHJcbiAgICAgICAgICAgIGhlYWRlclNlYy5jbGFzc0xpc3QuYWRkKCdzdGlja3knKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXJTZWMuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRhcmdldExpbmtBVCgpIHtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltkYXRhLW1vZHVsZT1cInBhcmFncmFwaFwiXScpXHJcbiAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCdhJykuZm9yRWFjaCgoZWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWx0ICYmICEoZWx0LmdldEF0dHJpYnV0ZSgndGFyZ2V0JykgPT09ICdfYmxhbmsnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsdC5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI215Q29udGVudFZpZXdCb2R5IGEnKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGNoYXB0ZXIzID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBtb2R1bGVOYW1lID0gaXRlbVxyXG4gICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ1tkYXRhLW1vZHVsZV0nKVxyXG4gICAgICAgICAgICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS1tb2R1bGUnKTtcclxuICAgICAgICAgICAgaWYgKG1vZHVsZU5hbWUgPT09ICdwYXJhZ3JhcGgnKSB7XHJcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lID0gJ2xpZW4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtb2R1bGVOYW1lID09PSAnbWlzZS1lbi1hdmFudCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNsb3Nlc3QoJ1tkYXRhLW1vZHVsZV0nKS5xdWVyeVNlbGVjdG9yKCdoMycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjMgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnLFwiY2hhcHRlcjNcIjpcIicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsb3Nlc3QoJ1tkYXRhLW1vZHVsZV0nKS5xdWVyeVNlbGVjdG9yKCdoMycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5uZXJUZXh0ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1wiJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBBVCBUYWcgQ2FsbFxyXG4gICAgICAgICAgICBjb25zdCBqc29uQXQgPVxyXG4gICAgICAgICAgICAgICAgJ3tcImNoYXB0ZXIyXCI6XCInICtcclxuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWUgK1xyXG4gICAgICAgICAgICAgICAgJ1wiLFwibGV2ZWwyXCI6XCI1MFwiJyArXHJcbiAgICAgICAgICAgICAgICBjaGFwdGVyMyArXHJcbiAgICAgICAgICAgICAgICAnfSc7XHJcbiAgICAgICAgICAgIG5ldyBBdFRhZ3MoKS5hdFRhZ3NDYWxsQ2xpY2soanNvbkF0LCB0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkYXRhTWFwKCkge1xyXG4gICAgY29uc3QgbWFwU2VsZWN0b3IgPSAnbWFwJztcclxuICAgIGNvbnN0IG1hcERhdGFzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtYXBTZWxlY3RvcikuZGF0YXNldDtcclxuICAgIGNvbnN0IG1hcCA9IG5ldyBPc20oJyMnICsgbWFwU2VsZWN0b3IpO1xyXG4gICAgY29uc3QgbWFwQXJyYXkgPSBbXTtcclxuICAgIG1hcEFycmF5LnB1c2goe1xyXG4gICAgICAgIHJlZ2lvbjogbWFwRGF0YXNldC5tYXBSZWdpb24sXHJcbiAgICAgICAgbGF0aXR1ZGU6IG1hcERhdGFzZXQubWFwTGF0aXR1ZGUsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiBtYXBEYXRhc2V0Lm1hcExvbmdpdHVkZSxcclxuICAgICAgICBtZWRpYVVSTDogbWFwRGF0YXNldC5tYXBJbWFnZSxcclxuICAgIH0pO1xyXG4gICAgbWFwLnJlbmRlcldpdGhQaW4obWFwQXJyYXksICdtYXAnLCB7XHJcbiAgICAgICAgem9vbTogOCxcclxuICAgICAgICB6b29tQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgZG91YmxlQ2xpY2tab29tOiBmYWxzZSxcclxuICAgICAgICBkcmFnZ2luZzogZmFsc2UsXHJcbiAgICB9KTtcclxufVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgZ2VuZXJhdGVTY3JvbGwoKTtcclxuICAgIGdldFRhcmdldExpbmtBVCgpO1xyXG4gICAgZGF0YU1hcCgpO1xyXG59KTtcclxuXHJcbi8vIExvYWQgQVQgKyBUQUNcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RhcnRlYXVjaXRyb25fbG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRhcnRlYXVjaXRyb24uc3RhdGUuYXRpbnRlcm5ldGNuaWwgJiYgdHlwZW9mIHRhZyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZnItdGFnJyk7XHJcbiAgICAgICAgbGV0IGl0ZW1TdHJpbmcgPSAnJztcclxuICAgICAgICB0YWcuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhZ1RyZWF0bWVudCA9IGl0ZW0uaW5uZXJUZXh0XHJcbiAgICAgICAgICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvJ3wgfFwiL2csICdfJylcclxuICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAubm9ybWFsaXplKCdORkQnKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBhcnJheS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtU3RyaW5nICs9IHRhZ1RyZWF0bWVudCArICcsJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1TdHJpbmcgKz0gdGFnVHJlYXRtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QganNvbkF0ID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLmdldEF0dHJpYnV0ZSgnZGF0YS1hdExpbmstdGFnJylcclxuICAgICAgICAgICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXRMaW5rLXRhZycpXHJcbiAgICAgICAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICBsZXZlbDI6ICc1MCcsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgY3VzdG9tVmFycyA9IHtcclxuICAgICAgICAgICAgc2l0ZToge1xyXG4gICAgICAgICAgICAgICAgMTogJ2ZyJyxcclxuICAgICAgICAgICAgICAgIDI6IGl0ZW1TdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAzOiBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgLmlubmVyVGV4dC5zcGxpdCgnOicpWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnLycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKSxcclxuICAgICAgICAgICAgICAgIDE1OiB3aW5kb3cubG9jYXRpb24uaHJlZixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIG5ldyBBdFRhZ3MoKS5hdFRhZ3NDYWxsUGFnZShKU09OLnN0cmluZ2lmeShqc29uQXQpLCBjdXN0b21WYXJzKTtcclxuICAgIH1cclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxudmFyIG5hdGl2ZVJldmVyc2UgPSBbXS5yZXZlcnNlO1xudmFyIHRlc3QgPSBbMSwgMl07XG5cbi8vIGBBcnJheS5wcm90b3R5cGUucmV2ZXJzZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZXZlcnNlXG4vLyBmaXggZm9yIFNhZmFyaSAxMi4wIGJ1Z1xuLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE4ODc5NFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU3RyaW5nKHRlc3QpID09PSBTdHJpbmcodGVzdC5yZXZlcnNlKCkpIH0sIHtcbiAgcmV2ZXJzZTogZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1hc3NpZ24gLS0gZGlydHkgaGFja1xuICAgIGlmIChpc0FycmF5KHRoaXMpKSB0aGlzLmxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICAgIHJldHVybiBuYXRpdmVSZXZlcnNlLmNhbGwodGhpcyk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIURFU0NSSVBUT1JTLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBkZWZpbmVQcm9wZXJ0aWVzOiBkZWZpbmVQcm9wZXJ0aWVzXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmplY3QpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICAgIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgICB2YXIga2V5cyA9IG93bktleXMoTyk7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGtleSwgZGVzY3JpcHRvcjtcbiAgICB3aGlsZSAoa2V5cy5sZW5ndGggPiBpbmRleCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBrZXkgPSBrZXlzW2luZGV4KytdKTtcbiAgICAgIGlmIChkZXNjcmlwdG9yICE9PSB1bmRlZmluZWQpIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQXRUYWdzIiwidGV4dCIsImVsdCIsImN1c3RvbVZhcnMiLCJjbGlja1R5cGUiLCJ0YXJnZXQiLCJ2YWxpZEZpbGVFeHRlbnNpb25zIiwiaG9zdG5hbWUiLCJocmVmIiwiaW5kZXhPZiIsInByb2Nlc3MiLCJlbnYiLCJFTlZfVVJMIiwib3JpZ2luIiwiZm9yRWFjaCIsIml0ZW0iLCJwYXRobmFtZSIsInNwbGl0IiwicG9wIiwiZGF0YXNldCIsInR5cGUiLCJqc29uQVRFbmQiLCJuYW1lIiwiaW5uZXJUZXh0IiwiY2hhcHRlcjEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJjbG9zZXN0IiwicHJldlN0b3AiLCJnZXRQcmV2aW91c1NpYmxpbmciLCJjaGFwdGVyMyIsImFycmF5SXRlcmF0ZSIsInNpdGUiLCJlIiwiaSIsIk9iamVjdCIsImtleXMiLCJ2YWx1ZSIsInZhbCIsIm5vU3BhY2VRdW90ZXNMb3dlcmNhc2UiLCJ0cmltIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwibm9BY2NlbnQiLCJub3JtYWxpemUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJjdXN0b21PYmplY3QiLCJjbGljX3VybF9icnV0IiwiZm5DbGlja0RhdGEiLCJhdFRhZ3NDYWxsQ2xpY2siLCJiaW5kIiwiYXRBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwianNvbkFUIiwidGFydGVhdWNpdHJvbiIsInN0YXRlIiwiYXRpbnRlcm5ldGNuaWwiLCJ0YWciLCJjbGljayIsInNlbmQiLCJyZWdleFBhZ2UiLCJKU09OIiwicGFyc2UiLCJqc29uVmlzaXQiLCJ1cmwiLCJVUkwiLCJoYXNoIiwic3Vic3RyaW5nIiwic2hpZnQiLCJzZWFyY2hQYXJhbXMiLCJoYXMiLCJ0b1N0cmluZyIsInBhZ2UiLCJlbGVtIiwic2VsZWN0b3IiLCJzaWJsaW5nIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm1hdGNoZXMiLCJPc20iLCJnZW5lcmF0ZVNjcm9sbCIsImhlYWRlclNlYyIsInN0aWNreSIsIm9mZnNldFRvcCIsIndpbmRvdyIsImhlaWdodERvYyIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbEhlaWdodCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJzY3JvbGxZIiwid2lkdGhEb2MiLCJjbGllbnRXaWR0aCIsImJhciIsInN0eWxlIiwid2lkdGgiLCJwYWdlWU9mZnNldCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImdldFRhcmdldExpbmtBVCIsInNldEF0dHJpYnV0ZSIsIm1vZHVsZU5hbWUiLCJqc29uQXQiLCJkYXRhTWFwIiwibWFwU2VsZWN0b3IiLCJtYXBEYXRhc2V0IiwiZ2V0RWxlbWVudEJ5SWQiLCJtYXAiLCJtYXBBcnJheSIsInB1c2giLCJyZWdpb24iLCJtYXBSZWdpb24iLCJsYXRpdHVkZSIsIm1hcExhdGl0dWRlIiwibG9uZ2l0dWRlIiwibWFwTG9uZ2l0dWRlIiwibWVkaWFVUkwiLCJtYXBJbWFnZSIsInJlbmRlcldpdGhQaW4iLCJ6b29tIiwiem9vbUNvbnRyb2wiLCJkb3VibGVDbGlja1pvb20iLCJkcmFnZ2luZyIsIml0ZW1TdHJpbmciLCJpbmRleCIsImFycmF5IiwidGFnVHJlYXRtZW50IiwibGVuZ3RoIiwibGV2ZWwyIiwicmV2ZXJzZSIsImpvaW4iLCJsb2NhdGlvbiIsImF0VGFnc0NhbGxQYWdlIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==