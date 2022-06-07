"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["launch-story-list"],{

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

/***/ "./assets/app/js/CheckFields.js":
/*!**************************************!*\
  !*** ./assets/app/js/CheckFields.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckFields)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _launch_story_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../launch-story/constants */ "./assets/launch-story/constants.js");




function CheckFields(functionCallBack, page) {
  var param = '';
  var scroll = false;

  if (page) {
    param = appendURL(param, 'page', page);
    scroll = true;
  }

  if (document.querySelector('#select').value) {
    param = appendURL(param, 'measure[]', _launch_story_constants__WEBPACK_IMPORTED_MODULE_3__.MEASURE_URL + '/' + document.querySelector('#select').value);
  }

  if (document.querySelector('#search-input').value !== '') {
    param = appendURL(param, 'regionCode[]', document.querySelector('#search-input').dataset.regionCode);
  }

  if (document.querySelectorAll('.thematics .fr-tag.active').length > 0) {
    var thematic = '';
    var thematicEntry = '';
    thematic = document.querySelectorAll('.thematics .fr-tag.active');
    thematic.forEach(function (child) {
      thematicEntry = child.dataset.api;
      param = appendURL(param, 'thematics[]', thematicEntry);
    });
  }

  functionCallBack(_launch_story_constants__WEBPACK_IMPORTED_MODULE_3__.API_LAUNCH_STORIES_URL + param, scroll);
}

function appendURL(url, key, value) {
  return url + (url.indexOf('?') >= 0 ? '&' : '?') + encodeURIComponent(key) + '=' + encodeURIComponent(value);
}

/***/ }),

/***/ "./assets/app/js/Constants.js":
/*!************************************!*\
  !*** ./assets/app/js/Constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SCREEN_SWITCH": () => (/* binding */ SCREEN_SWITCH),
/* harmony export */   "SCREEN_MOBILE_SWITCH": () => (/* binding */ SCREEN_MOBILE_SWITCH)
/* harmony export */ });
var SCREEN_SWITCH = 992;
var SCREEN_MOBILE_SWITCH = 767;

/***/ }),

/***/ "./assets/app/js/Copy.js":
/*!*******************************!*\
  !*** ./assets/app/js/Copy.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Copy)
/* harmony export */ });
function Copy() {
  // Copy URL button function : create, focus, select, copy and destroy
  var copy = document.querySelector('.copy-url');

  if (copy) {
    var input = document.createElement('input');
    input.type = 'text';
    input.setAttribute('aria-hidden', 'true');
    input.id = 'copyInput';
    input.value = '';
    copy.addEventListener('click', function () {
      copy.appendChild(input);
      var inputValue = document.querySelector('#copyInput');
      inputValue.value = window.location.href;
      inputValue.select();
      document.execCommand('copy');
      copy.removeChild(input);
    });
  }
}

/***/ }),

/***/ "./assets/app/js/Filters.js":
/*!**********************************!*\
  !*** ./assets/app/js/Filters.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activateParent": () => (/* binding */ activateParent),
/* harmony export */   "appendURL": () => (/* binding */ appendURL),
/* harmony export */   "replaceURL": () => (/* binding */ replaceURL),
/* harmony export */   "getSearchParams": () => (/* binding */ getSearchParams),
/* harmony export */   "insertUrlParam": () => (/* binding */ insertUrlParam),
/* harmony export */   "removeUrlParameter": () => (/* binding */ removeUrlParameter),
/* harmony export */   "checkboxParameter": () => (/* binding */ checkboxParameter)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_19__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





















function activateParent(currentSelector, parentSelector) {
  var active = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var parent = currentSelector.closest(parentSelector);

  if (parent) {
    active ? parent.classList.add('active') : parent.classList.remove('active');
  }
}
function appendURL(url, key, value) {
  return url + (url.indexOf('?') >= 0 ? '&' : '?') + encodeURIComponent(key) + '=' + encodeURIComponent(value);
}
function replaceURL(url, key, value) {
  var searchParams = new URLSearchParams(url);
  searchParams["delete"](key);
  searchParams.set(key, value);
  return "?".concat(searchParams.toString());
}
function getSearchParams() {
  return new URLSearchParams(window.location.search);
}
function insertUrlParam(key, value) {
  var searchParams = getSearchParams();
  searchParams.set(key, value);
  var newurl = "".concat(window.location.protocol, "//").concat(window.location.host + window.location.pathname, "?").concat(searchParams.toString());
  window.history.pushState({
    path: newurl
  }, '', newurl);
}
function removeUrlParameter(paramKey) {
  var currentUrl = window.location.href;
  var url = new URL(currentUrl);
  url.searchParams["delete"](paramKey);
  var newUrl = url.href;
  window.history.pushState({
    path: newUrl
  }, '', newUrl);
}
function checkboxParameter(paramKey, elt) {
  var currentUrl = window.location.href;
  var url = new URL(currentUrl); // Empty all the keys set before apply new ones

  url.searchParams["delete"](paramKey);

  var _iterator = _createForOfIteratorHelper(elt),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var resultValue = _step.value;
      var splitDocData = resultValue.dataset.document.split('=');

      if (resultValue.checked) {
        url.searchParams.append(splitDocData.shift(), splitDocData.pop());
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var newUrl = url.href;
  window.history.pushState({
    path: newUrl
  }, '', newUrl);
}

/***/ }),

/***/ "./assets/app/js/GroupButtons.js":
/*!***************************************!*\
  !*** ./assets/app/js/GroupButtons.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GroupButtons)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Filters */ "./assets/app/js/Filters.js");
/* harmony import */ var _AtTags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AtTags */ "./assets/app/js/AtTags.js");





function GroupButtons(result, tag, levelAT, typeAT, atSite2) {
  var ul = document.createElement('ul');
  ul.classList.add('fr-tags-group', tag);
  result.forEach(function (item) {
    var li = document.createElement('li');
    var button = document.createElement('button');
    button.classList.add('fr-tag', 'fr-tag--sm', 'fr-thematic', 'fr-mr-2w', 'fr-mb-2w', 'fr-px-3v');
    button.setAttribute('data-api', item['@id']);
    button.innerText = item.name;
    li.appendChild(button);
    ul.appendChild(li);
    button.addEventListener('click', function (event) {
      this.classList.toggle('active');

      if (document.querySelectorAll('.' + tag + ' .active').length > 0) {
        buttonErase.removeAttribute('disabled');
        (0,_Filters__WEBPACK_IMPORTED_MODULE_3__.activateParent)(event.currentTarget, '.fr-accordion');
      } else {
        buttonErase.setAttribute('disabled', '');
        (0,_Filters__WEBPACK_IMPORTED_MODULE_3__.activateParent)(event.currentTarget, '.fr-accordion', false);
      }

      if (this.classList.contains('active')) {
        // AT Tag Call
        var jsonAt = {
          name: 'recherche_' + event.currentTarget.innerText,
          chapter1: atSite2,
          chapter2: 'filtre',
          chapter3: typeAT,
          level2: levelAT
        };
        new _AtTags__WEBPACK_IMPORTED_MODULE_4__["default"]().atTagsCallClick(JSON.stringify(jsonAt), this);
      }
    });
  });
  var liErase = document.createElement('li');
  var buttonErase = document.createElement('button');
  buttonErase.classList.add('fr-btn', 'fr-btn--sm', 'fr-fi-close-circle-line', 'fr-btn--icon-right', 'fr-btn--tertiary', 'fr-thematic', 'fr-my-3v', 'resetButton');
  buttonErase.addEventListener('click', function (event) {
    var buttonActive = document.querySelectorAll('.' + tag + ' .active');

    if (buttonActive.length > 0) {
      buttonActive.forEach(function (item) {
        item.classList.remove('active');
      });
      event.currentTarget.setAttribute('disabled', '');
      (0,_Filters__WEBPACK_IMPORTED_MODULE_3__.activateParent)(event.currentTarget, '.fr-accordion', false);
    } // AT Tag Call


    var jsonAt = {
      name: 'recherche_reinitialiser',
      chapter1: atSite2,
      chapter2: 'filtre',
      chapter3: typeAT,
      level2: levelAT
    };
    new _AtTags__WEBPACK_IMPORTED_MODULE_4__["default"]().atTagsCallClick(JSON.stringify(jsonAt), this);
  });
  buttonErase.setAttribute('disabled', '');
  buttonErase.innerText = 'Réinitialiser';
  liErase.appendChild(buttonErase);
  ul.appendChild(liErase);
  return ul;
}

/***/ }),

/***/ "./assets/app/js/Measure.js":
/*!**********************************!*\
  !*** ./assets/app/js/Measure.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Measure)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AtTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AtTags */ "./assets/app/js/AtTags.js");
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Filters */ "./assets/app/js/Filters.js");





function Measure(result, levelAT) {
  var div = document.createElement('div');
  var select = document.createElement('select');
  select.classList.add('fr-select', 'fr-my-1w');
  select.id = select.name = 'select';
  var option = document.createElement('option');
  select.appendChild(option);
  option.value = '';
  option.setAttribute('data-atTag', '');
  option.innerText = 'Sélectionner';
  var divReset = document.createElement('div');
  divReset.classList.add('fr-mt-3w');
  select.addEventListener('change', function (e) {
    option.setAttribute('disabled', '');
    option.setAttribute('hidden', '');
    buttonReset.removeAttribute('disabled');
    (0,_Filters__WEBPACK_IMPORTED_MODULE_4__.activateParent)(e.currentTarget, '.fr-accordion'); // AT Tag Call

    var jsonAt = {
      name: 'recherche_' + this.options[this.selectedIndex].text,
      chapter2: 'filtre',
      chapter3: 'mesure',
      level2: levelAT
    };
    new _AtTags__WEBPACK_IMPORTED_MODULE_3__["default"]().atTagsCallClick(JSON.stringify(jsonAt), this);
  });
  var buttonReset = document.createElement('button');
  buttonReset.classList.add('fr-btn', 'fr-btn--sm', 'fr-fi-close-circle-line', 'fr-btn--icon-right', 'fr-btn--tertiary', 'resetButton');
  buttonReset.innerText = 'Réinitialiser';
  buttonReset.setAttribute('disabled', true);
  buttonReset.addEventListener('click', function (e) {
    e.preventDefault();
    e.currentTarget.setAttribute('disabled', true);
    (0,_Filters__WEBPACK_IMPORTED_MODULE_4__.activateParent)(e.currentTarget, '.fr-accordion', false);
    select.selectedIndex = 0; // AT Tag Call

    var jsonAt = {
      name: 'recherche_reinitialiser',
      chapter2: 'filtre',
      chapter3: 'mesure',
      level2: levelAT
    };
    new _AtTags__WEBPACK_IMPORTED_MODULE_3__["default"]().atTagsCallClick(JSON.stringify(jsonAt), this);
  });
  divReset.appendChild(buttonReset);
  result.forEach(function (elementMeasure) {
    var option = document.createElement('option');
    option.innerText = elementMeasure.name;
    option.value = elementMeasure.id;
    select.appendChild(option);
  });
  div.appendChild(select);
  div.appendChild(divReset);
  return div;
}

/***/ }),

/***/ "./assets/app/js/Pager.js":
/*!********************************!*\
  !*** ./assets/app/js/Pager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CheckFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CheckFields */ "./assets/app/js/CheckFields.js");
/* harmony import */ var _AtTags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AtTags */ "./assets/app/js/AtTags.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Constants */ "./assets/app/js/Constants.js");









function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Pager = /*#__PURE__*/function () {
  function Pager(currentPage) {
    _classCallCheck(this, Pager);

    this.currentPage = parseInt(currentPage['hydra:view']['@id'].split('=').pop());
    this.firstPage = parseInt(currentPage['hydra:view']['hydra:first'].split('=').pop());
    this.lastPage = parseInt(currentPage['hydra:view']['hydra:last'].split('=').pop());
    this.ul = document.createElement('ul');
  }

  _createClass(Pager, [{
    key: "constructPager",
    value: function constructPager(pager, currentPage, css, wording, functionCallBack) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      var pagerIndex = currentPage + 1;
      a.innerText = a.title = wording;
      a.classList.add('fr-pagination__link', 'fr-pagination__link--' + css);

      if (css === 'prev') {
        pagerIndex = currentPage - 1;
      }

      if (['first', 'last'].includes(css)) {
        pagerIndex = pager;
      } else {
        a.classList.add('fr-pagination__link--lg-label');
      }

      if (currentPage !== pager) {
        a.href = '#';
        a.setAttribute('data-page', pagerIndex);
        this.clickPager(a, functionCallBack, pagerIndex);
      }

      li.appendChild(a);
      return li;
    }
  }, {
    key: "clickPager",
    value: function clickPager(a, functionCallBack, i) {
      var _this = this;

      a.addEventListener('click', function (event) {
        event.preventDefault();

        _this.updatePageTitle(event.currentTarget.dataset.page);

        var chapter1 = 'galerie_des_portraits';
        var nextPrev = '';

        if (a.classList.contains('fr-pagination__link--next')) {
          nextPrev = '_suivant';
        } else if (a.classList.contains('fr-pagination__link--prev')) {
          nextPrev = '_precedent';
        }

        var name = document.querySelector('h1').getAttribute('data-atLink-tag') ? document.querySelector('h1').getAttribute('data-atLink-tag') : document.querySelector('h1').innerText;
        (0,_CheckFields__WEBPACK_IMPORTED_MODULE_8__["default"])(functionCallBack, i); // AT Tag Page

        var jsonAt = {
          name: name,
          chapter1: chapter1 + '_page=' + i,
          level2: '50'
        };
        var customVars = {
          site: {
            1: 'fr',
            2: 'france_relance',
            15: document.location.href
          }
        }; // AT Tag Click

        var jsonAtClick = {
          name: chapter1 + nextPrev + '_page=' + i,
          chapter1: name,
          chapter2: 'pagination',
          level2: '50',
          type: 'navigation'
        };
        new _AtTags__WEBPACK_IMPORTED_MODULE_9__["default"]().atTagsCallPage(JSON.stringify(jsonAt), customVars);
        new _AtTags__WEBPACK_IMPORTED_MODULE_9__["default"]().atTagsCallClick(JSON.stringify(jsonAtClick));
      });
    }
  }, {
    key: "updatePageTitle",
    value: function updatePageTitle(nextPage) {
      var currentPageTitle = document.title;
      var pageTitlePosition = currentPageTitle.indexOf(' | ');
      var pageLabel = ' - Page ';
      var insertIndex = currentPageTitle.indexOf(pageLabel) > -1 ? pageTitlePosition - pageLabel.length : pageTitlePosition;
      var nextPageTitle = [currentPageTitle.slice(0, insertIndex), pageLabel + nextPage, currentPageTitle.slice(pageTitlePosition)].join('');
      document.title = nextPageTitle;
    }
  }, {
    key: "createPager",
    value: function createPager(currentPage, i, markup, functionCallBack) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.classList.add('fr-pagination__link');
      a.title = 'Page ' + i;
      a.innerText = i;

      if (markup && i !== currentPage) {
        a.href = '#';
        a.setAttribute('data-page', i);
        this.clickPager(a, functionCallBack, i);
      }

      if (i === currentPage) {
        a.setAttribute('aria-current', 'page');
      }

      li.appendChild(a);
      this.ul.appendChild(li);
    }
  }, {
    key: "render",
    value: function render(functionCallBack) {
      this.ul.classList.add('fr-pagination__list');
      var previousPager = this.constructPager(1, this.currentPage, 'prev', 'Page précédente', functionCallBack);
      this.ul.appendChild(previousPager);
      this.createPager(this.currentPage, 1, true, functionCallBack);

      for (var i = 2; i <= this.lastPage - 1; i++) {
        var firstMax = 3;

        if (window.innerWidth <= _Constants__WEBPACK_IMPORTED_MODULE_10__.SCREEN_SWITCH) {
          firstMax = 2;
        }

        var lastMax = firstMax - 1; // Display max 5 pages inline

        if (this.lastPage < 6) {
          this.createPager(this.currentPage, i, true, functionCallBack);
        } else {
          // First numbers
          if (i <= firstMax && this.currentPage <= firstMax) {
            this.createPager(this.currentPage, i, true, functionCallBack);

            if (i === firstMax) {
              this.createPager(this.currentPage, '...', false);
            } // Last numbers

          } else if (i >= this.lastPage - lastMax && this.currentPage >= this.lastPage - lastMax) {
            if (i === this.lastPage - lastMax) {
              this.createPager(this.currentPage, '...', false);
            }

            this.createPager(this.currentPage, i, true, functionCallBack); // Between numbers
          } else if (i === this.currentPage) {
            this.createPager(this.currentPage, '...', false);
            this.createPager(this.currentPage, i, false);
            this.createPager(this.currentPage, '...', false);
          }
        }
      }

      this.createPager(this.currentPage, this.lastPage, true, functionCallBack);
      var nextPager = this.constructPager(this.lastPage, this.currentPage, 'next', 'Page suivante', functionCallBack);
      this.ul.appendChild(nextPager);
      return this.ul;
    }
  }]);

  return Pager;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pager);

/***/ }),

/***/ "./assets/app/js/State.js":
/*!********************************!*\
  !*** ./assets/app/js/State.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ State)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarekraafat_autocomplete_js_dist_autoComplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarekraafat/autocomplete.js/dist/autoComplete */ "./node_modules/@tarekraafat/autocomplete.js/dist/autoComplete.js");
/* harmony import */ var _tarekraafat_autocomplete_js_dist_autoComplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarekraafat_autocomplete_js_dist_autoComplete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AtTags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AtTags */ "./assets/app/js/AtTags.js");
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Filters */ "./assets/app/js/Filters.js");







function State(result, overflowParent) {
  var _this = this;

  var inputField = document.querySelector('#search-input-state input');
  var buttonReset = document.querySelector('#search-input-state .resetButton');
  buttonReset.addEventListener('click', function (e) {
    e.preventDefault();
    e.currentTarget.setAttribute('disabled', true);
    inputField.value = '';
    (0,_Filters__WEBPACK_IMPORTED_MODULE_6__.activateParent)(e.currentTarget, '.fr-accordion', false); // AT Tag

    var jsonAt = {
      name: 'recherche_reinitialiser',
      chapter2: 'filtre',
      chapter3: 'region',
      level2: '50'
    };
    new _AtTags__WEBPACK_IMPORTED_MODULE_5__["default"]().atTagsCallClick(JSON.stringify(jsonAt), _this);
  });
  initAutocomplete(result, buttonReset, inputField, overflowParent);
} // The autoComplete.js Engine instance creator

function initAutocomplete(result, buttonReset, inputField, overflowParent) {
  var autoCompleteJS = new (_tarekraafat_autocomplete_js_dist_autoComplete__WEBPACK_IMPORTED_MODULE_4___default())({
    data: {
      src: result.sort(getSortOrder('nom')),
      keys: ['nom'],
      cache: true
    },
    selector: '#search-input',
    diacritics: true,
    placeHolder: 'Région',
    resultsList: {
      element: function element(list, data) {
        if (data.results.length === 0) {
          var info = document.createElement('p');
          info.classList.add('no_result', 'fr-p-3v', 'fr-m-0');
          info.innerText = 'Pas de résultats';
          buttonReset.setAttribute('disabled', true);
          (0,_Filters__WEBPACK_IMPORTED_MODULE_6__.activateParent)(inputField, '.fr-accordion', false);
          list.prepend(info);
        }
      },
      id: 'autoComplete_list',
      noResults: false,
      maxResults: 20,
      "class": 'autoComplete_list fr-autocomplete'
    },
    resultItem: {
      "class": 'autoComplete_result',
      element: function element(item, data) {
        // Modify Results Item Content
        item.innerHTML = "<button class=\"fr-link fr-p-3v\" tabindex=\"-1\">".concat(data.match, "</button>");
      }
    },
    trigger: function trigger() {
      return true; // Returns "Boolean"
    }
  });

  function getSortOrder(prop) {
    return function (a, b) {
      a = a[prop].normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      b = b[prop].normalize('NFD').replace(/[\u0300-\u036f]/g, '');

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    };
  }

  autoCompleteJS.input.addEventListener('input', function () {
    if (inputField.value.length === 0) {
      buttonReset.setAttribute('disabled', true);
      (0,_Filters__WEBPACK_IMPORTED_MODULE_6__.activateParent)(inputField, '.fr-accordion', false);
    }
  });
  autoCompleteJS.input.addEventListener('focus', function () {
    document.querySelector(overflowParent).classList.add('visible');
    autoCompleteJS.start();
  });
  autoCompleteJS.input.addEventListener('blur', function () {
    document.querySelector(overflowParent).classList.remove('visible');
  });
  autoCompleteJS.input.addEventListener('selection', function (event) {
    event.preventDefault();
    buttonReset.removeAttribute('disabled');
    (0,_Filters__WEBPACK_IMPORTED_MODULE_6__.activateParent)(inputField, '.fr-accordion');
    var feedback = event.detail; // Prepare User's Selected Value

    var selection = feedback.selection.value[feedback.selection.key]; // Replace Input value with the selected value

    autoCompleteJS.input.value = selection;
    inputField.setAttribute('data-region-code', feedback.selection.value.code); // AT

    var jsonAt = {
      name: 'recherche_' + feedback.selection.value.nom,
      chapter2: 'filtre',
      chapter3: 'region',
      level2: '50'
    };
    new _AtTags__WEBPACK_IMPORTED_MODULE_5__["default"]().atTagsCallClick(JSON.stringify(jsonAt));
  });
}

/***/ }),

/***/ "./assets/launch-story/constants.js":
/*!******************************************!*\
  !*** ./assets/launch-story/constants.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LAUNCH_STORIES_URL": () => (/* binding */ LAUNCH_STORIES_URL),
/* harmony export */   "LAUNCH_STORIES_PIN": () => (/* binding */ LAUNCH_STORIES_PIN),
/* harmony export */   "LAUNCH_STORIES_PAGER": () => (/* binding */ LAUNCH_STORIES_PAGER),
/* harmony export */   "API_LAUNCH_STORIES_URL": () => (/* binding */ API_LAUNCH_STORIES_URL),
/* harmony export */   "API_LAUNCH_STORIES_MAP": () => (/* binding */ API_LAUNCH_STORIES_MAP),
/* harmony export */   "API_LAUNCH_STORIES_PIN": () => (/* binding */ API_LAUNCH_STORIES_PIN),
/* harmony export */   "THEMATICS_URL": () => (/* binding */ THEMATICS_URL),
/* harmony export */   "MEASURE_URL": () => (/* binding */ MEASURE_URL)
/* harmony export */ });
var LAUNCH_STORIES_URL = '/portraits-de-la-relance';
var LAUNCH_STORIES_PIN = '/pins';
var LAUNCH_STORIES_PAGER = '?pagination=false';
var API_LAUNCH_STORIES_URL = "/api" + LAUNCH_STORIES_URL;
var API_LAUNCH_STORIES_MAP = "/api" + LAUNCH_STORIES_URL + LAUNCH_STORIES_PIN + LAUNCH_STORIES_PAGER;
var API_LAUNCH_STORIES_PIN = "/api" + LAUNCH_STORIES_URL + LAUNCH_STORIES_PAGER;
var THEMATICS_URL = "/api" + '/thematics';
var MEASURE_URL = "/api" + '/measures';

/***/ }),

/***/ "./assets/launch-story/index-list.js":
/*!*******************************************!*\
  !*** ./assets/launch-story/index-list.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_js_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/js/Api */ "./assets/app/js/Api.js");
/* harmony import */ var _js_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/List */ "./assets/launch-story/js/List.js");
/* harmony import */ var _js_Filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/Filters */ "./assets/launch-story/js/Filters.js");
/* harmony import */ var _app_js_Measure__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/js/Measure */ "./assets/app/js/Measure.js");
/* harmony import */ var _app_js_Pager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/js/Pager */ "./assets/app/js/Pager.js");
/* harmony import */ var _app_js_State__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/js/State */ "./assets/app/js/State.js");
/* harmony import */ var _app_js_GroupButtons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/js/GroupButtons */ "./assets/app/js/GroupButtons.js");
/* harmony import */ var _js_Map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/Map */ "./assets/launch-story/js/Map.js");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./css/main.scss */ "./assets/launch-story/css/main.scss");
/* harmony import */ var _css_list_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./css/list.scss */ "./assets/launch-story/css/list.scss");
/* harmony import */ var _css_filter_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./css/filter.scss */ "./assets/launch-story/css/filter.scss");
/* harmony import */ var _css_map_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./css/map.scss */ "./assets/launch-story/css/map.scss");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./constants */ "./assets/launch-story/constants.js");
/* harmony import */ var _app_js_AtTags__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../app/js/AtTags */ "./assets/app/js/AtTags.js");
/* harmony import */ var _app_js_Copy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../app/js/Copy */ "./assets/app/js/Copy.js");





/* global tarteaucitron, tag */















var levelAT = '50';
var atSite2 = document.querySelector('h1').getAttribute('data-atlink-tag'); // Listing + pager

function initiateListing(dataURL, scrollPage) {
  new _app_js_Api__WEBPACK_IMPORTED_MODULE_4__["default"]().get(dataURL).then(function (dataContent) {
    // Not scroll / empty content for first loading page
    if (scrollPage) {
      document.querySelector('.cardsContainer').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    if (document.querySelector('.list').querySelectorAll('*').length > 0) {
      document.querySelector('.list').querySelectorAll('*').forEach(function (n) {
        return n.remove();
      });
      document.querySelector('.fr-pagination').querySelectorAll('*').forEach(function (n) {
        return n.remove();
      });
    }

    if (dataContent['hydra:member'].length > 0) {
      // List
      dataContent['hydra:member'].forEach(function (item) {
        document.querySelector('.list').insertAdjacentHTML('beforeend', (0,_js_List__WEBPACK_IMPORTED_MODULE_5__["default"])(item));
      });
      document.querySelectorAll('.fr-card__link').forEach(function (item) {
        item.addEventListener('click', function () {
          // AT Tag Call
          var jsonAt = {
            name: this.innerText,
            chapter2: 'cards',
            chapter3: this.closest('.fr-card').querySelector('.fr-tag').innerText,
            level2: levelAT
          };
          new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_17__["default"]().atTagsCallClick(JSON.stringify(jsonAt), this);
        });
      });

      if (dataContent['hydra:view'] && dataContent['hydra:view']['hydra:last']) {
        // Pager
        document.querySelector('.pager .fr-pagination').appendChild(new _app_js_Pager__WEBPACK_IMPORTED_MODULE_8__["default"](dataContent).render(initiateListing));
      }

      initiateMap(dataURL);
    } else {
      document.querySelector('.list').insertAdjacentHTML('beforeend', "<div class='fr-col-lg-6 fr-text--lg no-result'><p class='fr-mt-0 fr-px-3w'>Votre recherche n'est associée à aucun résultat, merci d'essayer d'autres critères de recherche.</p></div>");
      initiateMap(dataURL);
    }
  });
}

function initiateThematic(dataURL) {
  new _app_js_Api__WEBPACK_IMPORTED_MODULE_4__["default"]().get(dataURL).then(function (dataContent) {
    document.querySelector('.thematics-tags').appendChild((0,_app_js_GroupButtons__WEBPACK_IMPORTED_MODULE_10__["default"])(dataContent['hydra:member'], 'thematics-tags', levelAT, 'thematique'));
  });
}

function initiateMeasure(dataURL) {
  new _app_js_Api__WEBPACK_IMPORTED_MODULE_4__["default"]().get(dataURL).then(function (dataContent) {
    document.querySelector('.measure').appendChild((0,_app_js_Measure__WEBPACK_IMPORTED_MODULE_7__["default"])(dataContent['hydra:member'], levelAT));
  });
}

function initiateState(dataURL) {
  new _app_js_Api__WEBPACK_IMPORTED_MODULE_4__["default"]().get(dataURL, true).then(function (dataContent) {
    (0,_app_js_State__WEBPACK_IMPORTED_MODULE_9__["default"])(dataContent, '#fr-accordion-state');
  });
}

function initiateMap(dataURL) {
  var zoomLevel = true;
  var a = document.createElement('a');
  a.href = dataURL;
  var param = a.search ? '&' + a.search.substring(1) : '';

  if (param) {
    zoomLevel = false;
  }

  var pinCall = a.pathname + _constants__WEBPACK_IMPORTED_MODULE_16__.LAUNCH_STORIES_PIN + _constants__WEBPACK_IMPORTED_MODULE_16__.LAUNCH_STORIES_PAGER + param; // Hide button

  document.querySelector('#backToMetropolitan').classList.remove('onClickMap');
  new _app_js_Api__WEBPACK_IMPORTED_MODULE_4__["default"]().get(pinCall).then(function (dataContent) {
    if (document.querySelector('.map').querySelectorAll('*').length > 0) {
      document.querySelector('.map').querySelector('.mapParent').remove();
    }

    if (document.querySelector('.innerMapDomTom').querySelectorAll('.mapParent').length > 0) {
      document.querySelector('.innerMapDomTom').querySelectorAll('.mapParent').forEach(function (n) {
        return n.remove();
      });
    } // Map, send request call specific pin in 2nd param


    (0,_js_Map__WEBPACK_IMPORTED_MODULE_11__["default"])(dataContent['hydra:member'], _constants__WEBPACK_IMPORTED_MODULE_16__.API_LAUNCH_STORIES_PIN + param, levelAT, zoomLevel, atSite2);
  });
} // AT click static elements


function ATClickStatic() {
  AtClickService('.socialNetwork .fr-share', 'partage');
  AtClickService('.fr-rebound a', 'mise-en-avant', 'pour_en_savoir_plus_sur_les_mesures_du_plan_de_relance');
}

function AtClickService(eltDom, chapter2, chapter3) {
  document.querySelectorAll(eltDom).forEach(function (item) {
    item.addEventListener('click', function () {
      // AT Tag Call
      var jsonAt = {
        chapter2: chapter2,
        chapter3: chapter3,
        level2: levelAT
      };
      new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_17__["default"]().atTagsCallClick(JSON.stringify(jsonAt), this);
    });
  });
} // Initiate at first load


document.addEventListener('DOMContentLoaded', function () {
  initiateListing(_constants__WEBPACK_IMPORTED_MODULE_16__.API_LAUNCH_STORIES_URL, false);
  initiateThematic(_constants__WEBPACK_IMPORTED_MODULE_16__.THEMATICS_URL);
  initiateMeasure(_constants__WEBPACK_IMPORTED_MODULE_16__.MEASURE_URL);
  initiateState('https://geo.api.gouv.fr/regions/');
  (0,_js_Filters__WEBPACK_IMPORTED_MODULE_6__["default"])(initiateListing);
  ATClickStatic();
  (0,_app_js_Copy__WEBPACK_IMPORTED_MODULE_18__["default"])();
}); // Load AT + TAC

window.addEventListener('tarteaucitron_loaded', function () {
  if (tarteaucitron.state.atinternetcnil && typeof tag !== 'undefined') {
    var titleAT = document.querySelector('h1').getAttribute('data-atLink-tag');
    var jsonAt = {
      name: titleAT || document.querySelector('h1').innerText,
      level2: levelAT
    };
    var customVars = {
      site: {
        1: 'fr',
        2: 'france_relance',
        15: window.location.href
      }
    };
    new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_17__["default"]().atTagsCallPage(JSON.stringify(jsonAt), customVars);
  }
});

/***/ }),

/***/ "./assets/launch-story/js/Filters.js":
/*!*******************************************!*\
  !*** ./assets/launch-story/js/Filters.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initiateFilters)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _app_js_CheckFields__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../app/js/CheckFields */ "./assets/app/js/CheckFields.js");
/* harmony import */ var _app_js_AtTags__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../app/js/AtTags */ "./assets/app/js/AtTags.js");
/* harmony import */ var _app_js_Constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../app/js/Constants */ "./assets/app/js/Constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



















var mobileFiltersButton = document.querySelector('.openFilters');
function initiateFilters(callback) {
  var _this = this;

  document.querySelector('.submitFilters').addEventListener('click', function (e) {
    document.querySelector('.mapParent').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    var accordions = document.querySelectorAll('.fr-accordion');
    var selectedFilters = Array.from(accordions).filter(function (accordion) {
      return !accordion.querySelector('.resetButton').disabled;
    });

    if (selectedFilters.length) {
      // For Desktop only
      if (window.innerWidth > _app_js_Constants__WEBPACK_IMPORTED_MODULE_17__.SCREEN_SWITCH) {
        updateDesktopFilters(accordions);
      }
    }

    document.querySelector('.openLocalisation').classList.remove('blueClick');
    document.querySelector('.filter-geoloc').innerText = 'Modifier la localisation';
    (0,_app_js_CheckFields__WEBPACK_IMPORTED_MODULE_15__["default"])(callback);
    displayMobileFilters(false);
    activeFilters(!!selectedFilters.length); // AT Tag

    var jsonAt = {
      name: 'recherche_afficher',
      chapter2: 'filtre',
      chapter3: 'Affiner la recherche',
      level2: '50'
    };
    new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_16__["default"]().atTagsCallClick(JSON.stringify(jsonAt), _this);
    e.currentTarget.focus();
  });
  document.querySelector('.closeFilters').addEventListener('click', function () {
    displayMobileFilters(false);
  });
  mobileFiltersButton.addEventListener('click', function () {
    displayMobileFilters();
  });
  document.querySelector('.openLocalisation').addEventListener('click', function () {
    closeOpenGeoloc();
  });
  document.querySelector('.filterGeoloc .closeFilters').addEventListener('click', function () {
    closeOpenGeoloc();
  });
  document.querySelector('#backToMetropolitan .labelDomTom').addEventListener('click', function (e) {
    e.currentTarget.parentNode.classList.add('backFranceClick');
    closeOpenGeoloc();
  });
  toggleAccordions();
}

function displayMobileFilters() {
  var open = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var filtersCol = document.querySelector('.col-filters');
  var blockScroll = document.querySelector('html');

  if (open) {
    filtersCol.classList.add('active');
    blockScroll.classList.add('blockScroll');
  } else {
    filtersCol.classList.remove('active');
    blockScroll.classList.remove('blockScroll');
  }
}

function activeFilters(hasFilters) {
  hasFilters ? mobileFiltersButton.classList.add('active') : mobileFiltersButton.classList.remove('active');
}

function updateDesktopFilters(accordions) {
  accordions.forEach(function (accordion) {
    if (accordion.classList.contains('active')) {
      accordion.querySelector('.fr-accordion__btn').setAttribute('aria-expanded', 'true');
    } else {
      accordion.querySelector('.fr-accordion__btn').setAttribute('aria-expanded', 'false');
    }
  });
}

function toggleAccordions() {
  var accordionButtons = document.querySelectorAll('.fr-accordion__btn');
  accordionButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      var currentAccordion = e.currentTarget;
      currentAccordion.closest('.filters-container').classList.add('outline-color-load');
      accordionButtons.forEach(function (button) {
        if (button.getAttribute('aria-expanded') === 'true') {
          button.setAttribute('aria-expanded', 'false');
        }
      });
      setTimeout(function () {
        currentAccordion.focus();
        document.querySelector('.filters-container').classList.remove('outline-color-load');
      }, 20);
    });
  });
}

function closeOpenGeoloc() {
  document.querySelectorAll('.innerMapDomTom,.closeFilters, .mapInsert').forEach(function (item) {
    item.classList.toggle('activeGeoloc');
  });
  document.querySelector('.mobile-filters').classList.toggle('inactiveGeoloc');
  document.querySelector('html').classList.toggle('blockScroll');
} // Function add class to expand filters on mobile


if ('IntersectionObserver' in window && window.innerWidth <= _app_js_Constants__WEBPACK_IMPORTED_MODULE_17__.SCREEN_SWITCH) {
  var el = document.querySelector('.col-filters');
  var observer = new IntersectionObserver(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        e = _ref2[0];

    return e.target.classList.toggle('is-pinned', e.intersectionRatio < 1);
  }, {
    threshold: [1]
  });
  observer.observe(el);
}

/***/ }),

/***/ "./assets/launch-story/js/List.js":
/*!****************************************!*\
  !*** ./assets/launch-story/js/List.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./assets/launch-story/constants.js");
/* harmony import */ var _images_common_map_pin_2_line_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/common/map-pin-2-line.svg */ "./assets/images/common/map-pin-2-line.svg");




function List(result) {
  function generateURL() {
    return _constants__WEBPACK_IMPORTED_MODULE_2__.LAUNCH_STORIES_URL + result.slug;
  }

  function generateMediaURL(mediaURL) {
    return "http://bo-pmv7.docker" + mediaURL;
  }

  function getMedia() {
    if (result.mediaURL) {
      return "\n                <div class=\"fr-card__img\">\n                    <img class=\"fr-responsive-img\"\n                        src=\"".concat(generateMediaURL(result.mediaURL), "\"\n                        alt=\"\" />\n                </div>\n            ");
    }

    return '';
  }

  return "\n    <div class=\"tile fr-col-12 fr-col-md-6 fr-py-0 fr-mb-3w\">\n\n        <div class=\"fr-card fr-enlarge-link\">\n            <div class=\"fr-card__body fr-pt-2w\">\n                <h4 class=\"fr-card__title fr-mb-3v\">\n                    <a href=\"".concat(generateURL(), "\" class=\"fr-card__link\" target=\"_self\">").concat(result.shortTitle, "</a>\n                </h4>\n                <p class=\"fr-card__detail fr-mb-3v\">\n                    <span class=\"fr-tag fr-tag--sm\">").concat(result.mainThematic.name, "</span>\n                </p>\n                <span class=\"fr-text--sm fr-mb-3v fr-text--regular fr-card__region\">\n                    <img src=\"").concat(_images_common_map_pin_2_line_svg__WEBPACK_IMPORTED_MODULE_3__, "\" class=\"fr-mr-1v\" alt=\"\" aria-hidden=\"true\"><span class=\"text fr-text--xs\">").concat(result.region, "</span>\n                </span>\n            </div>\n            <div class=\"fr-card__header\">\n                ").concat(getMedia(), "\n            </div>\n        </div>\n    </div>");
}

/***/ }),

/***/ "./assets/launch-story/js/Map.js":
/*!***************************************!*\
  !*** ./assets/launch-story/js/Map.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Map)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _app_js_Map_Osm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../app/js/Map/Osm */ "./assets/app/js/Map/Osm.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./List */ "./assets/launch-story/js/List.js");
/* harmony import */ var _app_js_Constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../app/js/Constants */ "./assets/app/js/Constants.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Map(result, querySpecificPin, atLevel, zoomLevel, atSite2) {
  var worldWide = false;
  var domParent = '#infoMapTile';
  var domElt = domParent + ' .slider';
  var infoMapTile = document.createElement('div');
  infoMapTile.setAttribute('id', 'infoMapTile');
  infoMapTile.setAttribute('data-module', 'map-cards');
  document.querySelector('#backToMetropolitan').parentNode.classList.add('onClickMiniMap');
  document.querySelector('#backToMetropolitan').classList.remove('backFranceClick');
  document.querySelector('#backToMetropolitan input').checked = false;
  var FranceMAP = {
    FR: {
      region: 'France Métropolitaine',
      regionCode: 'FR',
      latitude: zoomLevel ? '' : '0',
      longitude: zoomLevel ? '' : '0',
      zoom: '5'
    },
    '01': {
      region: 'Guadeloupe',
      regionCode: '01',
      latitude: '16.197587',
      longitude: '-61.53982',
      zoom: '9'
    },
    '02': {
      region: 'Martinique',
      regionCode: '02',
      latitude: '14.854532',
      longitude: '-61.01893',
      zoom: '9'
    },
    '03': {
      region: 'Guyane',
      regionCode: '03',
      latitude: '5.922325',
      longitude: '-53.23917',
      zoom: '7'
    },
    '04': {
      region: 'La Réunion',
      regionCode: '04',
      latitude: '-21.133165',
      longitude: '55.53251',
      zoom: '9'
    },
    '06': {
      region: 'Mayotte',
      regionCode: '06',
      latitude: '-12.843055',
      longitude: '45.138333',
      zoom: '10'
    }
  };

  if (window.innerWidth <= _app_js_Constants__WEBPACK_IMPORTED_MODULE_21__.SCREEN_SWITCH) {
    FranceMAP = _objectSpread(_objectSpread({}, FranceMAP), {}, {
      FR: {
        region: 'France Métropolitaine',
        regionCode: 'FR',
        latitude: zoomLevel ? '-2.15' : '0',
        longitude: zoomLevel ? '5.22' : '0',
        zoom: zoomLevel ? '1' : '3'
      }
    }); // Focus world wide only mobile devices

    worldWide = true;
  } else if (window.innerWidth > _app_js_Constants__WEBPACK_IMPORTED_MODULE_21__.SCREEN_SWITCH && !zoomLevel) {
    worldWide = true;
  }

  var franceMetropolitan = FranceMAP.FR; // Button back to France

  var backToFrance = document.querySelector('#backToMetropolitan'); // Treat France Metropolitan MAP specifically

  var mapMetropolitan = buildMapInherit(franceMetropolitan, result, false, '', atLevel, domElt, domParent, querySpecificPin, zoomLevel, worldWide, atSite2); // Other French oversea territories

  Object.keys(FranceMAP).forEach(function (item) {
    if (item !== 'FR') {
      buildMapInherit(FranceMAP[item], result, mapMetropolitan, backToFrance, '', '', domParent);
    }
  }); // Button back to France Metropolitan

  backToFrance.addEventListener('click', function () {
    moveMetropolitanMap(mapMetropolitan, '2.966', '46.86', 5);
    interactive(domParent);
    document.querySelectorAll('.innerMapDomTom .mapParent').forEach(function (item) {
      item.classList.remove('onClickDROM');
    });
    this.classList.remove('onClickMap');
    document.querySelector('.filter-geoloc').parentNode.classList.add('blueClick');
    document.querySelector('.filter-geoloc').innerText = 'France métropolitaine';
  });
  document.querySelectorAll('.leaflet-control-zoom a').forEach(function (item) {
    item.addEventListener('click', function () {
      document.querySelectorAll('.groupMarker').forEach(function (item) {
        item.classList.remove('focusOn');
      });
    });
  });
  document.querySelector('.map .mapParent').appendChild(infoMapTile);
}

function buildMapInherit(array, result, mapMetropolitan, backToFrance, atLevel, customPopin, nodeParent, querySpecificPin, zoomLevel, worldWide, atSite2) {
  document.querySelector(mapMetropolitan ? '.innerMapDomTom' : '.map').insertAdjacentHTML('beforeend', '<div class="mapParent' + (mapMetropolitan ? ' fr-mt-md-1v fr-mr-md-1v"' : '"') + '><div id="map' + (mapMetropolitan ? array.regionCode + 'BtnFR' : '') + '" class="mapGlobal"></div><div class="fr-radio-group fr-radio-group--sm fr-m-0"><input type="radio" id="region' + array.regionCode + '" name="radioRegion"><label class="labelDomTom fr-label fr-text--bold fr-mb-0 fr-py-0" for="region' + array.regionCode + '">' + array.region + '</label></div></div>');
  var mapAllFrance = new _app_js_Map_Osm__WEBPACK_IMPORTED_MODULE_19__["default"](document.querySelector('#map' + (mapMetropolitan ? array.regionCode + 'BtnFR' : ''))); // Carrefull : opposite condition false === Metropolitan / True === overseas territories

  if (!mapMetropolitan) {
    var mapNewLocation = mapAllFrance.renderWithPin(result, 'map', {
      latitude: zoomLevel ? '46.86' : array.latitude,
      longitude: zoomLevel ? '2.966' : array.longitude,
      countPin: true,
      zoom: array.zoom,
      zoomControl: true,
      dragging: true,
      doubleClickZoom: true,
      scrollWheelZoom: true,
      popinFunction: _List__WEBPACK_IMPORTED_MODULE_20__["default"],
      customPopin: customPopin,
      nodeParent: nodeParent,
      querySpecificPin: querySpecificPin,
      cluster: worldWide,
      maxClusterRadius: 25
    }, '', atLevel, atSite2, '.fr-card__region span').addEventListener('click', function () {
      interactive(nodeParent);
    }).addEventListener('dragend', function () {
      interactive(nodeParent);
    });

    var _iterator = _createForOfIteratorHelper(result),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (item.regionCode !== '01' && item.regionCode !== '02' && item.regionCode !== '03' && item.regionCode !== '04' && item.regionCode !== '06') {
          document.querySelector('#backToMetropolitan').parentNode.classList.remove('onClickMiniMap');
          break;
        }
      } // Need to return only France Metropolitan MAP to apply lat/long on click oversea territories

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return mapNewLocation;
  } else {
    var arrayDomTom = [];
    result.forEach(function (item) {
      if (item.regionCode === array.regionCode) {
        arrayDomTom.push(item);
      }
    });

    if (arrayDomTom.length === 0) {
      mapAllFrance.selector.parentNode.classList.add('onClickMiniMap');
    }

    mapAllFrance.renderWithPin(arrayDomTom, 'map' + array.regionCode + 'BtnFR', {
      countPin: true,
      zoom: array.regionCode === '03' ? 3 : 6,
      latitude: array.latitude,
      longitude: array.longitude
    });
    mapAllFrance.selector.parentNode.addEventListener('click', function (e) {
      moveMetropolitanMap(mapMetropolitan, array.longitude, array.latitude, array.zoom, e);
      interactive(nodeParent);
      document.querySelectorAll('.mapParent').forEach(function (item) {
        item.classList.remove('onClickDROM');
      });
      document.querySelector('#backToMetropolitan').classList.remove('backFranceClick');
      this.classList.add('onClickDROM');
      backToFrance.classList.add('onClickMap');
      document.querySelectorAll('.innerMapDomTom,.closeFilters, .mapInsert').forEach(function (item) {
        item.classList.remove('activeGeoloc');
      });
      document.querySelector('.mobile-filters').classList.remove('inactiveGeoloc');
      document.querySelector('html').classList.remove('blockScroll');
    });
  }
}

function interactive(domParent) {
  document.querySelector(domParent).innerHTML = '';
  document.querySelectorAll('.groupMarker').forEach(function (item) {
    item.classList.remove('focusOn');
  });
}

function moveMetropolitanMap(mapMetropolitan, longitude, latitude, zoom, e) {
  mapMetropolitan.setView(new L.LatLng(latitude, longitude), zoom);

  if (e && e.target.classList[0] === 'labelDomTom') {
    document.querySelector('.filter-geoloc').innerText = e.target.innerText;
    document.querySelector('.filter-geoloc').parentNode.classList.add('blueClick');
  }
}

/***/ }),

/***/ "./assets/launch-story/css/filter.scss":
/*!*********************************************!*\
  !*** ./assets/launch-story/css/filter.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/launch-story/css/list.scss":
/*!*******************************************!*\
  !*** ./assets/launch-story/css/list.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/launch-story/css/main.scss":
/*!*******************************************!*\
  !*** ./assets/launch-story/css/main.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/launch-story/css/map.scss":
/*!******************************************!*\
  !*** ./assets/launch-story/css/map.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/images/common/map-pin-2-line.svg":
/*!*************************************************!*\
  !*** ./assets/images/common/map-pin-2-line.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/map-pin-2-line.f2286aa9.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--b791ff","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-60d642","vendors-node_modules_axios_index_js-node_modules_regenerator-runtime_runtime_js","vendors-node_modules_core-js_modules_es_array_map_js-node_modules_core-js_modules_web_timers_-b460de","vendors-node_modules_tarekraafat_autocomplete_js_dist_autoComplete_js-node_modules_core-js_mo-a5b30c","assets_app_js_Map_Osm_js"], () => (__webpack_exec__("./assets/launch-story/index-list.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkIsRUFBa0N2RixTQUFsQyxHQUE4QyxFQUE5QztBQUNBdE0sRUFBQUEsUUFBUSxDQUFDNEIsZ0JBQVQsQ0FBMEIsY0FBMUIsRUFBMEN2QyxPQUExQyxDQUFrRCxVQUFDQyxJQUFELEVBQVU7QUFDeERBLElBQUFBLElBQUksQ0FBQ21HLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixTQUF0QjtBQUNILEdBRkQ7QUFHSDs7QUFDRCxTQUFTOE0sbUJBQVQsQ0FBNkJGLGVBQTdCLEVBQThDSixTQUE5QyxFQUF5REQsUUFBekQsRUFBbUVFLElBQW5FLEVBQXlFM1IsQ0FBekUsRUFBNEU7QUFDeEU4UixFQUFBQSxlQUFlLENBQUNvQixPQUFoQixDQUF3QixJQUFJQyxDQUFDLENBQUNDLE1BQU4sQ0FBYTNCLFFBQWIsRUFBdUJDLFNBQXZCLENBQXhCLEVBQTJEQyxJQUEzRDs7QUFDQSxNQUFJM1IsQ0FBQyxJQUFJQSxDQUFDLENBQUM3QixNQUFGLENBQVM2RyxTQUFULENBQW1CLENBQW5CLE1BQTBCLGFBQW5DLEVBQWtEO0FBQzlDekYsSUFBQUEsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixFQUF5Q0gsU0FBekMsR0FBcURXLENBQUMsQ0FBQzdCLE1BQUYsQ0FBU2tCLFNBQTlEO0FBQ0FFLElBQUFBLFFBQVEsQ0FDSEMsYUFETCxDQUNtQixnQkFEbkIsRUFFSytQLFVBRkwsQ0FFZ0J2SyxTQUZoQixDQUUwQkMsR0FGMUIsQ0FFOEIsV0FGOUI7QUFHSDtBQUNKOzs7Ozs7Ozs7OztBQzNTRDs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvQXRUYWdzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvQ2hlY2tGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9Db3B5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvRmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL0dyb3VwQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL01lYXN1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9QYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL1N0YXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9sYXVuY2gtc3RvcnkvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9sYXVuY2gtc3RvcnkvaW5kZXgtbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbGF1bmNoLXN0b3J5L2pzL0ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xhdW5jaC1zdG9yeS9qcy9MaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9sYXVuY2gtc3RvcnkvanMvTWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9sYXVuY2gtc3RvcnkvY3NzL2ZpbHRlci5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9sYXVuY2gtc3RvcnkvY3NzL2xpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbGF1bmNoLXN0b3J5L2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xhdW5jaC1zdG9yeS9jc3MvbWFwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHRhZywgdGFydGVhdWNpdHJvbiAqL1xyXG5cclxuY2xhc3MgQXRUYWdzIHtcclxuICAgIC8vIEZ1bmN0aW9uIGNsZWFuIGRhdGEgdG8gc3RyaW5nXHJcbiAgICByZWdleFBhZ2UodGV4dCwgZWx0LCBjdXN0b21WYXJzKSB7XHJcbiAgICAgICAgbGV0IGNsaWNrVHlwZSA9ICcnO1xyXG4gICAgICAgIGlmICghY3VzdG9tVmFycykge1xyXG4gICAgICAgICAgICBpZiAoZWx0ICYmIGVsdC50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkRmlsZUV4dGVuc2lvbnMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BkZicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ29kdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21wMycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ljcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ppcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N2ZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RvY3gnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0eHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdqc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnY3N2JyxcclxuICAgICAgICAgICAgICAgICAgICAncG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAnZ2lmJyxcclxuICAgICAgICAgICAgICAgICAgICAnanBnJyxcclxuICAgICAgICAgICAgICAgICAgICAnanBlZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N2ZycsXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgdGhlIGVudmlyb25tZW50IHN5c3RlbSBkb21haW4gdG8gaHJlZiB0YWcgZG9tYWluIChTb2NpYWwgTmV0d29yaylcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBlbHQuaG9zdG5hbWUgPT09ICd3d3cuZmFjZWJvb2suY29tJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVsdC5ob3N0bmFtZSA9PT0gJ3R3aXR0ZXIuY29tJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVsdC5ob3N0bmFtZSA9PT0gJ3d3dy5saW5rZWRpbi5jb20nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZWx0Lmhvc3RuYW1lID09PSAnd3d3Lmluc3RhZ3JhbS5jb20nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZWx0LmhyZWYuaW5kZXhPZignbWFpbHRvOicpID4gLTFcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrVHlwZSA9ICdhY3Rpb24nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5FTlZfVVJMICE9PSBlbHQub3JpZ2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tUeXBlID0gJ2V4aXQnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGlja1R5cGUgPSAnbmF2aWdhdGlvbic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgbGluayBpcyBkb3dubG9hZGFibGUgZmlsZVxyXG4gICAgICAgICAgICAgICAgdmFsaWRGaWxlRXh0ZW5zaW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID09PSBlbHQucGF0aG5hbWUuc3BsaXQoJy4nKS5wb3AoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHQuZGF0YXNldC50eXBlID09PSAnZG93bmxvYWQnXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrVHlwZSA9ICdkb3dubG9hZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbGlja1R5cGUgPSAnYWN0aW9uJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGpzb25BVEVuZCA9IHtcclxuICAgICAgICAgICAgbmFtZTogZWx0ID8gZWx0LmlubmVyVGV4dCA6ICcnLFxyXG4gICAgICAgICAgICBjaGFwdGVyMTogY3VzdG9tVmFyc1xyXG4gICAgICAgICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLmdldEF0dHJpYnV0ZSgnZGF0YS1hdExpbmstdGFnJylcclxuICAgICAgICAgICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXRMaW5rLXRhZycpXHJcbiAgICAgICAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAuLi50ZXh0LFxyXG4gICAgICAgICAgICB0eXBlOiBjbGlja1R5cGUsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGVsdCAmJiBlbHQuY2xvc2VzdCgnZGl2W2RhdGEtbW9kdWxlPWJvdXRvbl0nKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2U3RvcCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nKFxyXG4gICAgICAgICAgICAgICAgZWx0LmNsb3Nlc3QoJ2RpdltkYXRhLW1vZHVsZT1ib3V0b25dJyksXHJcbiAgICAgICAgICAgICAgICAnZGl2W2RhdGEtbW9kdWxlPXRpdHJlXSdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAganNvbkFURW5kID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uanNvbkFURW5kLFxyXG4gICAgICAgICAgICAgICAgY2hhcHRlcjM6IHByZXZTdG9wID8gcHJldlN0b3AuaW5uZXJUZXh0IDogJycsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhcnJheUl0ZXJhdGUgPSBbanNvbkFURW5kLCBjdXN0b21WYXJzID8gY3VzdG9tVmFycy5zaXRlIDogJyddO1xyXG4gICAgICAgIGFycmF5SXRlcmF0ZS5mb3JFYWNoKGZ1bmN0aW9uIChlLCBpKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBbdmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9TcGFjZVF1b3Rlc0xvd2VyY2FzZSA9IGVbdmFsdWVdXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nfCB8XCIvZywgJ18nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9BY2NlbnQgPSBub1NwYWNlUXVvdGVzTG93ZXJjYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgLm5vcm1hbGl6ZSgnTkZEJylcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgJycpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGFycmF5SXRlcmF0ZVtpXVtub0FjY2VudF07XHJcbiAgICAgICAgICAgICAgICBhcnJheUl0ZXJhdGVbaV1bdmFsXSA9IGVuY29kZVVSSUNvbXBvbmVudChub0FjY2VudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChlbHQgJiYgZWx0LmhyZWYpIHtcclxuICAgICAgICAgICAgYXJyYXlJdGVyYXRlWzBdID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uYXJyYXlJdGVyYXRlWzBdLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tT2JqZWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY191cmxfYnJ1dDogZWx0LmhyZWYsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gey4uLmFycmF5SXRlcmF0ZVswXSwgY3VzdG9tVmFyc307XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3RhdGljIFNTUiBsaW5rc1xyXG4gICAgYXRUYWdzQ2FsbFN0YXRpYygpIHtcclxuICAgICAgICBjb25zdCBmbkNsaWNrRGF0YSA9IHRoaXMuYXRUYWdzQ2FsbENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgY29uc3QgYXRBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICdib2R5ID4gOm5vdChoZWFkZXIpOm5vdChmb290ZXIpIGEsIGJvZHkgPiA6bm90KGhlYWRlcik6bm90KGZvb3RlcikgYnV0dG9uJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgYXRBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChlbHQpIHtcclxuICAgICAgICAgICAgaWYgKGVsdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXRMaW5rLXRhZycpKSB7XHJcbiAgICAgICAgICAgICAgICBlbHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm5DbGlja0RhdGEoZWx0LmdldEF0dHJpYnV0ZSgnZGF0YS1hdExpbmstdGFnJyksIGVsdCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNlbmQgY2xpY2tcclxuICAgIGF0VGFnc0NhbGxDbGljayhqc29uQVQsIGVsdCkge1xyXG4gICAgICAgIGlmICh0YXJ0ZWF1Y2l0cm9uLnN0YXRlLmF0aW50ZXJuZXRjbmlsICYmIHR5cGVvZiB0YWcgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGVsdCAmJlxyXG4gICAgICAgICAgICAgICAgZWx0LmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpICYmXHJcbiAgICAgICAgICAgICAgICBlbHQuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICd0cnVlJ1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YWcuY2xpY2suc2VuZCh0aGlzLnJlZ2V4UGFnZShKU09OLnBhcnNlKGpzb25BVCksIGVsdCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTZW5kIFBhZ2VcclxuICAgIGF0VGFnc0NhbGxQYWdlKGpzb25BVCwganNvblZpc2l0KSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChqc29uVmlzaXQuc2l0ZVsnMTUnXSk7XHJcbiAgICAgICAgaWYgKHVybC5oYXNoLnN1YnN0cmluZygxKS5zcGxpdCgnPScpLnNoaWZ0KCkgPT09ICd4dG9yJykge1xyXG4gICAgICAgICAgICB1cmwuaGFzaCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMoJ3h0b3InKSkge1xyXG4gICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZSgneHRvcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqc29uVmlzaXQuc2l0ZVsnMTUnXSA9IHVybC50b1N0cmluZygpLnJlcGxhY2UoJyMnLCAnJTIzJyk7XHJcbiAgICAgICAgdGFnLnBhZ2Uuc2VuZCh0aGlzLnJlZ2V4UGFnZShKU09OLnBhcnNlKGpzb25BVCksICcnLCBqc29uVmlzaXQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgcHJldmlvdXMgZG9tXHJcblxyXG4gICAgZ2V0UHJldmlvdXNTaWJsaW5nKGVsZW0sIHNlbGVjdG9yKSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBuZXh0IHNpYmxpbmcgZWxlbWVudFxyXG4gICAgICAgIGxldCBzaWJsaW5nID0gZWxlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIHNlbGVjdG9yLCByZXR1cm4gdGhlIGZpcnN0IHNpYmxpbmdcclxuICAgICAgICBpZiAoIXNlbGVjdG9yKSByZXR1cm4gc2libGluZztcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIHNpYmxpbmcgbWF0Y2hlcyBvdXIgc2VsZWN0b3IsIHVzZSBpdFxyXG4gICAgICAgIC8vIElmIG5vdCwganVtcCB0byB0aGUgbmV4dCBzaWJsaW5nIGFuZCBjb250aW51ZSB0aGUgbG9vcFxyXG4gICAgICAgIHdoaWxlIChzaWJsaW5nKSB7XHJcbiAgICAgICAgICAgIGlmIChzaWJsaW5nLm1hdGNoZXMoc2VsZWN0b3IpKSByZXR1cm4gc2libGluZztcclxuICAgICAgICAgICAgc2libGluZyA9IHNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF0VGFncztcclxuIiwiaW1wb3J0IHtcclxuICAgIEFQSV9MQVVOQ0hfU1RPUklFU19VUkwsXHJcbiAgICBNRUFTVVJFX1VSTCxcclxufSBmcm9tICcuLi8uLi9sYXVuY2gtc3RvcnkvY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrRmllbGRzKGZ1bmN0aW9uQ2FsbEJhY2ssIHBhZ2UpIHtcclxuICAgIGxldCBwYXJhbSA9ICcnO1xyXG4gICAgbGV0IHNjcm9sbCA9IGZhbHNlO1xyXG4gICAgaWYgKHBhZ2UpIHtcclxuICAgICAgICBwYXJhbSA9IGFwcGVuZFVSTChwYXJhbSwgJ3BhZ2UnLCBwYWdlKTtcclxuICAgICAgICBzY3JvbGwgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QnKS52YWx1ZSkge1xyXG4gICAgICAgIHBhcmFtID0gYXBwZW5kVVJMKFxyXG4gICAgICAgICAgICBwYXJhbSxcclxuICAgICAgICAgICAgJ21lYXN1cmVbXScsXHJcbiAgICAgICAgICAgIE1FQVNVUkVfVVJMICsgJy8nICsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdCcpLnZhbHVlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWlucHV0JykudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgcGFyYW0gPSBhcHBlbmRVUkwoXHJcbiAgICAgICAgICAgIHBhcmFtLFxyXG4gICAgICAgICAgICAncmVnaW9uQ29kZVtdJyxcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1pbnB1dCcpLmRhdGFzZXQucmVnaW9uQ29kZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRoZW1hdGljcyAuZnItdGFnLmFjdGl2ZScpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgdGhlbWF0aWMgPSAnJztcclxuICAgICAgICBsZXQgdGhlbWF0aWNFbnRyeSA9ICcnO1xyXG4gICAgICAgIHRoZW1hdGljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRoZW1hdGljcyAuZnItdGFnLmFjdGl2ZScpO1xyXG4gICAgICAgIHRoZW1hdGljLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoZW1hdGljRW50cnkgPSBjaGlsZC5kYXRhc2V0LmFwaTtcclxuICAgICAgICAgICAgcGFyYW0gPSBhcHBlbmRVUkwocGFyYW0sICd0aGVtYXRpY3NbXScsIHRoZW1hdGljRW50cnkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb25DYWxsQmFjayhBUElfTEFVTkNIX1NUT1JJRVNfVVJMICsgcGFyYW0sIHNjcm9sbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZFVSTCh1cmwsIGtleSwgdmFsdWUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgdXJsICtcclxuICAgICAgICAodXJsLmluZGV4T2YoJz8nKSA+PSAwID8gJyYnIDogJz8nKSArXHJcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgK1xyXG4gICAgICAgICc9JyArXHJcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKVxyXG4gICAgKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgU0NSRUVOX1NXSVRDSCA9IDk5MjtcclxuZXhwb3J0IGNvbnN0IFNDUkVFTl9NT0JJTEVfU1dJVENIID0gNzY3O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3B5KCkge1xyXG4gICAgLy8gQ29weSBVUkwgYnV0dG9uIGZ1bmN0aW9uIDogY3JlYXRlLCBmb2N1cywgc2VsZWN0LCBjb3B5IGFuZCBkZXN0cm95XHJcbiAgICBjb25zdCBjb3B5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcHktdXJsJyk7XHJcbiAgICBpZiAoY29weSkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgICAgIGlucHV0LmlkID0gJ2NvcHlJbnB1dCc7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICBjb3B5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb3B5LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3B5SW5wdXQnKTtcclxuICAgICAgICAgICAgaW5wdXRWYWx1ZS52YWx1ZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgICAgICBpbnB1dFZhbHVlLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgICAgICAgICBjb3B5LnJlbW92ZUNoaWxkKGlucHV0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVQYXJlbnQoY3VycmVudFNlbGVjdG9yLCBwYXJlbnRTZWxlY3RvciwgYWN0aXZlID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudFNlbGVjdG9yLmNsb3Nlc3QocGFyZW50U2VsZWN0b3IpO1xyXG4gICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgIGFjdGl2ZVxyXG4gICAgICAgICAgICA/IHBhcmVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICA6IHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFVSTCh1cmwsIGtleSwgdmFsdWUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgdXJsICtcclxuICAgICAgICAodXJsLmluZGV4T2YoJz8nKSA+PSAwID8gJyYnIDogJz8nKSArXHJcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgK1xyXG4gICAgICAgICc9JyArXHJcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKVxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VVUkwodXJsLCBrZXksIHZhbHVlKSB7XHJcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybCk7XHJcbiAgICBzZWFyY2hQYXJhbXMuZGVsZXRlKGtleSk7XHJcbiAgICBzZWFyY2hQYXJhbXMuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIGA/JHtzZWFyY2hQYXJhbXMudG9TdHJpbmcoKX1gO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VhcmNoUGFyYW1zKCkge1xyXG4gICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRVcmxQYXJhbShrZXksIHZhbHVlKSB7XHJcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBnZXRTZWFyY2hQYXJhbXMoKTtcclxuICAgIHNlYXJjaFBhcmFtcy5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICBjb25zdCBuZXd1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgICB9PyR7c2VhcmNoUGFyYW1zLnRvU3RyaW5nKCl9YDtcclxuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7cGF0aDogbmV3dXJsfSwgJycsIG5ld3VybCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVVcmxQYXJhbWV0ZXIocGFyYW1LZXkpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoY3VycmVudFVybCk7XHJcbiAgICB1cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZShwYXJhbUtleSk7XHJcbiAgICBjb25zdCBuZXdVcmwgPSB1cmwuaHJlZjtcclxuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7cGF0aDogbmV3VXJsfSwgJycsIG5ld1VybCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja2JveFBhcmFtZXRlcihwYXJhbUtleSwgZWx0KSB7XHJcbiAgICBjb25zdCBjdXJyZW50VXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGN1cnJlbnRVcmwpO1xyXG4gICAgLy8gRW1wdHkgYWxsIHRoZSBrZXlzIHNldCBiZWZvcmUgYXBwbHkgbmV3IG9uZXNcclxuICAgIHVybC5zZWFyY2hQYXJhbXMuZGVsZXRlKHBhcmFtS2V5KTtcclxuICAgIGZvciAoY29uc3QgcmVzdWx0VmFsdWUgb2YgZWx0KSB7XHJcbiAgICAgICAgY29uc3Qgc3BsaXREb2NEYXRhID0gcmVzdWx0VmFsdWUuZGF0YXNldC5kb2N1bWVudC5zcGxpdCgnPScpO1xyXG4gICAgICAgIGlmIChyZXN1bHRWYWx1ZS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKHNwbGl0RG9jRGF0YS5zaGlmdCgpLCBzcGxpdERvY0RhdGEucG9wKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG5ld1VybCA9IHVybC5ocmVmO1xyXG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtwYXRoOiBuZXdVcmx9LCAnJywgbmV3VXJsKTtcclxufVxyXG4iLCJpbXBvcnQge2FjdGl2YXRlUGFyZW50fSBmcm9tICcuL0ZpbHRlcnMnO1xyXG5pbXBvcnQgQXRUYWdzIGZyb20gJy4vQXRUYWdzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyb3VwQnV0dG9ucyhyZXN1bHQsIHRhZywgbGV2ZWxBVCwgdHlwZUFULCBhdFNpdGUyKSB7XHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCdmci10YWdzLWdyb3VwJywgdGFnKTtcclxuICAgIHJlc3VsdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICAgICAnZnItdGFnJyxcclxuICAgICAgICAgICAgJ2ZyLXRhZy0tc20nLFxyXG4gICAgICAgICAgICAnZnItdGhlbWF0aWMnLFxyXG4gICAgICAgICAgICAnZnItbXItMncnLFxyXG4gICAgICAgICAgICAnZnItbWItMncnLFxyXG4gICAgICAgICAgICAnZnItcHgtM3YnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWFwaScsIGl0ZW1bJ0BpZCddKTtcclxuICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gaXRlbS5uYW1lO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0YWcgKyAnIC5hY3RpdmUnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b25FcmFzZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZVBhcmVudChldmVudC5jdXJyZW50VGFyZ2V0LCAnLmZyLWFjY29yZGlvbicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uRXJhc2Uuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcclxuICAgICAgICAgICAgICAgIGFjdGl2YXRlUGFyZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQsICcuZnItYWNjb3JkaW9uJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgIC8vIEFUIFRhZyBDYWxsXHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uQXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlY2hlcmNoZV8nICsgZXZlbnQuY3VycmVudFRhcmdldC5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjE6IGF0U2l0ZTIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjI6ICdmaWx0cmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXB0ZXIzOiB0eXBlQVQsXHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwyOiBsZXZlbEFULFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIG5ldyBBdFRhZ3MoKS5hdFRhZ3NDYWxsQ2xpY2soSlNPTi5zdHJpbmdpZnkoanNvbkF0KSwgdGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGxpRXJhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgYnV0dG9uRXJhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbkVyYXNlLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgJ2ZyLWJ0bicsXHJcbiAgICAgICAgJ2ZyLWJ0bi0tc20nLFxyXG4gICAgICAgICdmci1maS1jbG9zZS1jaXJjbGUtbGluZScsXHJcbiAgICAgICAgJ2ZyLWJ0bi0taWNvbi1yaWdodCcsXHJcbiAgICAgICAgJ2ZyLWJ0bi0tdGVydGlhcnknLFxyXG4gICAgICAgICdmci10aGVtYXRpYycsXHJcbiAgICAgICAgJ2ZyLW15LTN2JyxcclxuICAgICAgICAncmVzZXRCdXR0b24nXHJcbiAgICApO1xyXG4gICAgYnV0dG9uRXJhc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBidXR0b25BY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRhZyArICcgLmFjdGl2ZScpO1xyXG4gICAgICAgIGlmIChidXR0b25BY3RpdmUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBidXR0b25BY3RpdmUuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcclxuICAgICAgICAgICAgYWN0aXZhdGVQYXJlbnQoZXZlbnQuY3VycmVudFRhcmdldCwgJy5mci1hY2NvcmRpb24nLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFUIFRhZyBDYWxsXHJcbiAgICAgICAgY29uc3QganNvbkF0ID0ge1xyXG4gICAgICAgICAgICBuYW1lOiAncmVjaGVyY2hlX3JlaW5pdGlhbGlzZXInLFxyXG4gICAgICAgICAgICBjaGFwdGVyMTogYXRTaXRlMixcclxuICAgICAgICAgICAgY2hhcHRlcjI6ICdmaWx0cmUnLFxyXG4gICAgICAgICAgICBjaGFwdGVyMzogdHlwZUFULFxyXG4gICAgICAgICAgICBsZXZlbDI6IGxldmVsQVQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBuZXcgQXRUYWdzKCkuYXRUYWdzQ2FsbENsaWNrKEpTT04uc3RyaW5naWZ5KGpzb25BdCksIHRoaXMpO1xyXG4gICAgfSk7XHJcbiAgICBidXR0b25FcmFzZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xyXG4gICAgYnV0dG9uRXJhc2UuaW5uZXJUZXh0ID0gJ1LDqWluaXRpYWxpc2VyJztcclxuICAgIGxpRXJhc2UuYXBwZW5kQ2hpbGQoYnV0dG9uRXJhc2UpO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQobGlFcmFzZSk7XHJcblxyXG4gICAgcmV0dXJuIHVsO1xyXG59XHJcbiIsImltcG9ydCBBdFRhZ3MgZnJvbSAnLi9BdFRhZ3MnO1xyXG5pbXBvcnQge2FjdGl2YXRlUGFyZW50fSBmcm9tICcuL0ZpbHRlcnMnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZWFzdXJlKHJlc3VsdCwgbGV2ZWxBVCkge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmci1zZWxlY3QnLCAnZnItbXktMXcnKTtcclxuICAgIHNlbGVjdC5pZCA9IHNlbGVjdC5uYW1lID0gJ3NlbGVjdCc7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gJyc7XHJcbiAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWF0VGFnJywgJycpO1xyXG4gICAgb3B0aW9uLmlubmVyVGV4dCA9ICdTw6lsZWN0aW9ubmVyJztcclxuICAgIGNvbnN0IGRpdlJlc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXZSZXNldC5jbGFzc0xpc3QuYWRkKCdmci1tdC0zdycpO1xyXG5cclxuICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xyXG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcclxuICAgICAgICBidXR0b25SZXNldC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgYWN0aXZhdGVQYXJlbnQoZS5jdXJyZW50VGFyZ2V0LCAnLmZyLWFjY29yZGlvbicpO1xyXG5cclxuICAgICAgICAvLyBBVCBUYWcgQ2FsbFxyXG4gICAgICAgIGNvbnN0IGpzb25BdCA9IHtcclxuICAgICAgICAgICAgbmFtZTogJ3JlY2hlcmNoZV8nICsgdGhpcy5vcHRpb25zW3RoaXMuc2VsZWN0ZWRJbmRleF0udGV4dCxcclxuICAgICAgICAgICAgY2hhcHRlcjI6ICdmaWx0cmUnLFxyXG4gICAgICAgICAgICBjaGFwdGVyMzogJ21lc3VyZScsXHJcbiAgICAgICAgICAgIGxldmVsMjogbGV2ZWxBVCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIG5ldyBBdFRhZ3MoKS5hdFRhZ3NDYWxsQ2xpY2soSlNPTi5zdHJpbmdpZnkoanNvbkF0KSwgdGhpcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBidXR0b25SZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uUmVzZXQuY2xhc3NMaXN0LmFkZChcclxuICAgICAgICAnZnItYnRuJyxcclxuICAgICAgICAnZnItYnRuLS1zbScsXHJcbiAgICAgICAgJ2ZyLWZpLWNsb3NlLWNpcmNsZS1saW5lJyxcclxuICAgICAgICAnZnItYnRuLS1pY29uLXJpZ2h0JyxcclxuICAgICAgICAnZnItYnRuLS10ZXJ0aWFyeScsXHJcbiAgICAgICAgJ3Jlc2V0QnV0dG9uJ1xyXG4gICAgKTtcclxuICAgIGJ1dHRvblJlc2V0LmlubmVyVGV4dCA9ICdSw6lpbml0aWFsaXNlcic7XHJcbiAgICBidXR0b25SZXNldC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICBidXR0b25SZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgYWN0aXZhdGVQYXJlbnQoZS5jdXJyZW50VGFyZ2V0LCAnLmZyLWFjY29yZGlvbicsIGZhbHNlKTtcclxuICAgICAgICBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgLy8gQVQgVGFnIENhbGxcclxuXHJcbiAgICAgICAgY29uc3QganNvbkF0ID0ge1xyXG4gICAgICAgICAgICBuYW1lOiAncmVjaGVyY2hlX3JlaW5pdGlhbGlzZXInLFxyXG4gICAgICAgICAgICBjaGFwdGVyMjogJ2ZpbHRyZScsXHJcbiAgICAgICAgICAgIGNoYXB0ZXIzOiAnbWVzdXJlJyxcclxuICAgICAgICAgICAgbGV2ZWwyOiBsZXZlbEFULFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbmV3IEF0VGFncygpLmF0VGFnc0NhbGxDbGljayhKU09OLnN0cmluZ2lmeShqc29uQXQpLCB0aGlzKTtcclxuICAgIH0pO1xyXG4gICAgZGl2UmVzZXQuYXBwZW5kQ2hpbGQoYnV0dG9uUmVzZXQpO1xyXG4gICAgcmVzdWx0LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnRNZWFzdXJlKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGVsZW1lbnRNZWFzdXJlLm5hbWU7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gZWxlbWVudE1lYXN1cmUuaWQ7XHJcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGRpdlJlc2V0KTtcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuIiwiaW1wb3J0IGNoZWNrRmllbGRzIGZyb20gJy4vQ2hlY2tGaWVsZHMnO1xyXG5pbXBvcnQgQXRUYWdzIGZyb20gJy4vQXRUYWdzJztcclxuaW1wb3J0IHtTQ1JFRU5fU1dJVENIfSBmcm9tICcuL0NvbnN0YW50cyc7XHJcbmNsYXNzIFBhZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgICBjdXJyZW50UGFnZVsnaHlkcmE6dmlldyddWydAaWQnXS5zcGxpdCgnPScpLnBvcCgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmZpcnN0UGFnZSA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgICBjdXJyZW50UGFnZVsnaHlkcmE6dmlldyddWydoeWRyYTpmaXJzdCddLnNwbGl0KCc9JykucG9wKClcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubGFzdFBhZ2UgPSBwYXJzZUludChcclxuICAgICAgICAgICAgY3VycmVudFBhZ2VbJ2h5ZHJhOnZpZXcnXVsnaHlkcmE6bGFzdCddLnNwbGl0KCc9JykucG9wKClcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMudWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdFBhZ2VyKHBhZ2VyLCBjdXJyZW50UGFnZSwgY3NzLCB3b3JkaW5nLCBmdW5jdGlvbkNhbGxCYWNrKSB7XHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgbGV0IHBhZ2VySW5kZXggPSBjdXJyZW50UGFnZSArIDE7XHJcbiAgICAgICAgYS5pbm5lclRleHQgPSBhLnRpdGxlID0gd29yZGluZztcclxuICAgICAgICBhLmNsYXNzTGlzdC5hZGQoJ2ZyLXBhZ2luYXRpb25fX2xpbmsnLCAnZnItcGFnaW5hdGlvbl9fbGluay0tJyArIGNzcyk7XHJcbiAgICAgICAgaWYgKGNzcyA9PT0gJ3ByZXYnKSB7XHJcbiAgICAgICAgICAgIHBhZ2VySW5kZXggPSBjdXJyZW50UGFnZSAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChbJ2ZpcnN0JywgJ2xhc3QnXS5pbmNsdWRlcyhjc3MpKSB7XHJcbiAgICAgICAgICAgIHBhZ2VySW5kZXggPSBwYWdlcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhLmNsYXNzTGlzdC5hZGQoJ2ZyLXBhZ2luYXRpb25fX2xpbmstLWxnLWxhYmVsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSAhPT0gcGFnZXIpIHtcclxuICAgICAgICAgICAgYS5ocmVmID0gJyMnO1xyXG4gICAgICAgICAgICBhLnNldEF0dHJpYnV0ZSgnZGF0YS1wYWdlJywgcGFnZXJJbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2tQYWdlcihhLCBmdW5jdGlvbkNhbGxCYWNrLCBwYWdlckluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgcmV0dXJuIGxpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrUGFnZXIoYSwgZnVuY3Rpb25DYWxsQmFjaywgaSkge1xyXG4gICAgICAgIGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQYWdlVGl0bGUoZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnBhZ2UpO1xyXG4gICAgICAgICAgICBjb25zdCBjaGFwdGVyMSA9ICdnYWxlcmllX2Rlc19wb3J0cmFpdHMnO1xyXG4gICAgICAgICAgICBsZXQgbmV4dFByZXYgPSAnJztcclxuICAgICAgICAgICAgaWYgKGEuY2xhc3NMaXN0LmNvbnRhaW5zKCdmci1wYWdpbmF0aW9uX19saW5rLS1uZXh0JykpIHtcclxuICAgICAgICAgICAgICAgIG5leHRQcmV2ID0gJ19zdWl2YW50JztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhLmNsYXNzTGlzdC5jb250YWlucygnZnItcGFnaW5hdGlvbl9fbGluay0tcHJldicpKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0UHJldiA9ICdfcHJlY2VkZW50JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdoMScpXHJcbiAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLWF0TGluay10YWcnKVxyXG4gICAgICAgICAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLmdldEF0dHJpYnV0ZSgnZGF0YS1hdExpbmstdGFnJylcclxuICAgICAgICAgICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgIGNoZWNrRmllbGRzKGZ1bmN0aW9uQ2FsbEJhY2ssIGkpO1xyXG4gICAgICAgICAgICAvLyBBVCBUYWcgUGFnZVxyXG4gICAgICAgICAgICBjb25zdCBqc29uQXQgPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgY2hhcHRlcjE6IGNoYXB0ZXIxICsgJ19wYWdlPScgKyBpLFxyXG4gICAgICAgICAgICAgICAgbGV2ZWwyOiAnNTAnLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBjdXN0b21WYXJzID0ge1xyXG4gICAgICAgICAgICAgICAgc2l0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIDE6ICdmcicsXHJcbiAgICAgICAgICAgICAgICAgICAgMjogJ2ZyYW5jZV9yZWxhbmNlJyxcclxuICAgICAgICAgICAgICAgICAgICAxNTogZG9jdW1lbnQubG9jYXRpb24uaHJlZixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vIEFUIFRhZyBDbGlja1xyXG4gICAgICAgICAgICBjb25zdCBqc29uQXRDbGljayA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IGNoYXB0ZXIxICsgbmV4dFByZXYgKyAnX3BhZ2U9JyArIGksXHJcbiAgICAgICAgICAgICAgICBjaGFwdGVyMTogbmFtZSxcclxuICAgICAgICAgICAgICAgIGNoYXB0ZXIyOiAncGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgICAgICBsZXZlbDI6ICc1MCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnbmF2aWdhdGlvbicsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG5ldyBBdFRhZ3MoKS5hdFRhZ3NDYWxsUGFnZShKU09OLnN0cmluZ2lmeShqc29uQXQpLCBjdXN0b21WYXJzKTtcclxuICAgICAgICAgICAgbmV3IEF0VGFncygpLmF0VGFnc0NhbGxDbGljayhKU09OLnN0cmluZ2lmeShqc29uQXRDbGljaykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBhZ2VUaXRsZShuZXh0UGFnZSkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlVGl0bGUgPSBkb2N1bWVudC50aXRsZTtcclxuICAgICAgICBjb25zdCBwYWdlVGl0bGVQb3NpdGlvbiA9IGN1cnJlbnRQYWdlVGl0bGUuaW5kZXhPZignIHwgJyk7XHJcbiAgICAgICAgY29uc3QgcGFnZUxhYmVsID0gJyAtIFBhZ2UgJztcclxuICAgICAgICBjb25zdCBpbnNlcnRJbmRleCA9XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlVGl0bGUuaW5kZXhPZihwYWdlTGFiZWwpID4gLTFcclxuICAgICAgICAgICAgICAgID8gcGFnZVRpdGxlUG9zaXRpb24gLSBwYWdlTGFiZWwubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICA6IHBhZ2VUaXRsZVBvc2l0aW9uO1xyXG4gICAgICAgIGNvbnN0IG5leHRQYWdlVGl0bGUgPSBbXHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlVGl0bGUuc2xpY2UoMCwgaW5zZXJ0SW5kZXgpLFxyXG4gICAgICAgICAgICBwYWdlTGFiZWwgKyBuZXh0UGFnZSxcclxuICAgICAgICAgICAgY3VycmVudFBhZ2VUaXRsZS5zbGljZShwYWdlVGl0bGVQb3NpdGlvbiksXHJcbiAgICAgICAgXS5qb2luKCcnKTtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IG5leHRQYWdlVGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUGFnZXIoY3VycmVudFBhZ2UsIGksIG1hcmt1cCwgZnVuY3Rpb25DYWxsQmFjaykge1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGEuY2xhc3NMaXN0LmFkZCgnZnItcGFnaW5hdGlvbl9fbGluaycpO1xyXG4gICAgICAgIGEudGl0bGUgPSAnUGFnZSAnICsgaTtcclxuICAgICAgICBhLmlubmVyVGV4dCA9IGk7XHJcbiAgICAgICAgaWYgKG1hcmt1cCAmJiBpICE9PSBjdXJyZW50UGFnZSkge1xyXG4gICAgICAgICAgICBhLmhyZWYgPSAnIyc7XHJcbiAgICAgICAgICAgIGEuc2V0QXR0cmlidXRlKCdkYXRhLXBhZ2UnLCBpKTtcclxuICAgICAgICAgICAgdGhpcy5jbGlja1BhZ2VyKGEsIGZ1bmN0aW9uQ2FsbEJhY2ssIGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA9PT0gY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgYS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICdwYWdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xyXG4gICAgICAgIHRoaXMudWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihmdW5jdGlvbkNhbGxCYWNrKSB7XHJcbiAgICAgICAgdGhpcy51bC5jbGFzc0xpc3QuYWRkKCdmci1wYWdpbmF0aW9uX19saXN0Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzUGFnZXIgPSB0aGlzLmNvbnN0cnVjdFBhZ2VyKFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlLFxyXG4gICAgICAgICAgICAncHJldicsXHJcbiAgICAgICAgICAgICdQYWdlIHByw6ljw6lkZW50ZScsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uQ2FsbEJhY2tcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMudWwuYXBwZW5kQ2hpbGQocHJldmlvdXNQYWdlcik7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlUGFnZXIodGhpcy5jdXJyZW50UGFnZSwgMSwgdHJ1ZSwgZnVuY3Rpb25DYWxsQmFjayk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gdGhpcy5sYXN0UGFnZSAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZmlyc3RNYXggPSAzO1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gU0NSRUVOX1NXSVRDSCkge1xyXG4gICAgICAgICAgICAgICAgZmlyc3RNYXggPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RNYXggPSBmaXJzdE1heCAtIDE7XHJcbiAgICAgICAgICAgIC8vIERpc3BsYXkgbWF4IDUgcGFnZXMgaW5saW5lXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RQYWdlIDwgNikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQYWdlcih0aGlzLmN1cnJlbnRQYWdlLCBpLCB0cnVlLCBmdW5jdGlvbkNhbGxCYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEZpcnN0IG51bWJlcnNcclxuICAgICAgICAgICAgICAgIGlmIChpIDw9IGZpcnN0TWF4ICYmIHRoaXMuY3VycmVudFBhZ2UgPD0gZmlyc3RNYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVBhZ2VyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbkNhbGxCYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gZmlyc3RNYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQYWdlcih0aGlzLmN1cnJlbnRQYWdlLCAnLi4uJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBMYXN0IG51bWJlcnNcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgaSA+PSB0aGlzLmxhc3RQYWdlIC0gbGFzdE1heCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPj0gdGhpcy5sYXN0UGFnZSAtIGxhc3RNYXhcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSB0aGlzLmxhc3RQYWdlIC0gbGFzdE1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVBhZ2VyKHRoaXMuY3VycmVudFBhZ2UsICcuLi4nLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUGFnZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uQ2FsbEJhY2tcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEJldHdlZW4gbnVtYmVyc1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSB0aGlzLmN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQYWdlcih0aGlzLmN1cnJlbnRQYWdlLCAnLi4uJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUGFnZXIodGhpcy5jdXJyZW50UGFnZSwgaSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUGFnZXIodGhpcy5jdXJyZW50UGFnZSwgJy4uLicsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyZWF0ZVBhZ2VyKFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlLFxyXG4gICAgICAgICAgICB0aGlzLmxhc3RQYWdlLFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICBmdW5jdGlvbkNhbGxCYWNrXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV4dFBhZ2VyID0gdGhpcy5jb25zdHJ1Y3RQYWdlcihcclxuICAgICAgICAgICAgdGhpcy5sYXN0UGFnZSxcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSxcclxuICAgICAgICAgICAgJ25leHQnLFxyXG4gICAgICAgICAgICAnUGFnZSBzdWl2YW50ZScsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uQ2FsbEJhY2tcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMudWwuYXBwZW5kQ2hpbGQobmV4dFBhZ2VyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VyO1xyXG4iLCJpbXBvcnQgQXV0b0NvbXBsZXRlIGZyb20gJ0B0YXJla3JhYWZhdC9hdXRvY29tcGxldGUuanMvZGlzdC9hdXRvQ29tcGxldGUnO1xyXG5pbXBvcnQgQXRUYWdzIGZyb20gJy4vQXRUYWdzJztcclxuaW1wb3J0IHthY3RpdmF0ZVBhcmVudH0gZnJvbSAnLi9GaWx0ZXJzJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhdGUocmVzdWx0LCBvdmVyZmxvd1BhcmVudCkge1xyXG4gICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtaW5wdXQtc3RhdGUgaW5wdXQnKTtcclxuICAgIGNvbnN0IGJ1dHRvblJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAnI3NlYXJjaC1pbnB1dC1zdGF0ZSAucmVzZXRCdXR0b24nXHJcbiAgICApO1xyXG4gICAgYnV0dG9uUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIGlucHV0RmllbGQudmFsdWUgPSAnJztcclxuICAgICAgICBhY3RpdmF0ZVBhcmVudChlLmN1cnJlbnRUYXJnZXQsICcuZnItYWNjb3JkaW9uJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBBVCBUYWdcclxuICAgICAgICBjb25zdCBqc29uQXQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdyZWNoZXJjaGVfcmVpbml0aWFsaXNlcicsXHJcbiAgICAgICAgICAgIGNoYXB0ZXIyOiAnZmlsdHJlJyxcclxuICAgICAgICAgICAgY2hhcHRlcjM6ICdyZWdpb24nLFxyXG4gICAgICAgICAgICBsZXZlbDI6ICc1MCcsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBuZXcgQXRUYWdzKCkuYXRUYWdzQ2FsbENsaWNrKEpTT04uc3RyaW5naWZ5KGpzb25BdCksIHRoaXMpO1xyXG4gICAgfSk7XHJcbiAgICBpbml0QXV0b2NvbXBsZXRlKHJlc3VsdCwgYnV0dG9uUmVzZXQsIGlucHV0RmllbGQsIG92ZXJmbG93UGFyZW50KTtcclxufVxyXG5cclxuLy8gVGhlIGF1dG9Db21wbGV0ZS5qcyBFbmdpbmUgaW5zdGFuY2UgY3JlYXRvclxyXG5mdW5jdGlvbiBpbml0QXV0b2NvbXBsZXRlKHJlc3VsdCwgYnV0dG9uUmVzZXQsIGlucHV0RmllbGQsIG92ZXJmbG93UGFyZW50KSB7XHJcbiAgICBjb25zdCBhdXRvQ29tcGxldGVKUyA9IG5ldyBBdXRvQ29tcGxldGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgc3JjOiByZXN1bHQuc29ydChnZXRTb3J0T3JkZXIoJ25vbScpKSxcclxuICAgICAgICAgICAga2V5czogWydub20nXSxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3RvcjogJyNzZWFyY2gtaW5wdXQnLFxyXG4gICAgICAgIGRpYWNyaXRpY3M6IHRydWUsXHJcbiAgICAgICAgcGxhY2VIb2xkZXI6ICdSw6lnaW9uJyxcclxuICAgICAgICByZXN1bHRzTGlzdDoge1xyXG4gICAgICAgICAgICBlbGVtZW50OiAobGlzdCwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnbm9fcmVzdWx0JywgJ2ZyLXAtM3YnLCAnZnItbS0wJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5mby5pbm5lclRleHQgPSAnUGFzIGRlIHLDqXN1bHRhdHMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblJlc2V0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0ZVBhcmVudChpbnB1dEZpZWxkLCAnLmZyLWFjY29yZGlvbicsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnByZXBlbmQoaW5mbyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGlkOiAnYXV0b0NvbXBsZXRlX2xpc3QnLFxyXG4gICAgICAgICAgICBub1Jlc3VsdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBtYXhSZXN1bHRzOiAyMCxcclxuICAgICAgICAgICAgY2xhc3M6ICdhdXRvQ29tcGxldGVfbGlzdCBmci1hdXRvY29tcGxldGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzdWx0SXRlbToge1xyXG4gICAgICAgICAgICBjbGFzczogJ2F1dG9Db21wbGV0ZV9yZXN1bHQnLFxyXG4gICAgICAgICAgICBlbGVtZW50OiAoaXRlbSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gTW9kaWZ5IFJlc3VsdHMgSXRlbSBDb250ZW50XHJcbiAgICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPVwiZnItbGluayBmci1wLTN2XCIgdGFiaW5kZXg9XCItMVwiPiR7ZGF0YS5tYXRjaH08L2J1dHRvbj5gO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJpZ2dlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gUmV0dXJucyBcIkJvb2xlYW5cIlxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTb3J0T3JkZXIocHJvcCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICBhID0gYVtwcm9wXS5ub3JtYWxpemUoJ05GRCcpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKTtcclxuICAgICAgICAgICAgYiA9IGJbcHJvcF0ubm9ybWFsaXplKCdORkQnKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCAnJyk7XHJcbiAgICAgICAgICAgIGlmIChhID4gYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYSA8IGIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGF1dG9Db21wbGV0ZUpTLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChpbnB1dEZpZWxkLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBidXR0b25SZXNldC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlUGFyZW50KGlucHV0RmllbGQsICcuZnItYWNjb3JkaW9uJywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGF1dG9Db21wbGV0ZUpTLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3ZlcmZsb3dQYXJlbnQpLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgICAgICBhdXRvQ29tcGxldGVKUy5zdGFydCgpO1xyXG4gICAgfSk7XHJcbiAgICBhdXRvQ29tcGxldGVKUy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3ZlcmZsb3dQYXJlbnQpLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGF1dG9Db21wbGV0ZUpTLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgYnV0dG9uUmVzZXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIGFjdGl2YXRlUGFyZW50KGlucHV0RmllbGQsICcuZnItYWNjb3JkaW9uJyk7XHJcbiAgICAgICAgY29uc3QgZmVlZGJhY2sgPSBldmVudC5kZXRhaWw7XHJcbiAgICAgICAgLy8gUHJlcGFyZSBVc2VyJ3MgU2VsZWN0ZWQgVmFsdWVcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBmZWVkYmFjay5zZWxlY3Rpb24udmFsdWVbZmVlZGJhY2suc2VsZWN0aW9uLmtleV07XHJcbiAgICAgICAgLy8gUmVwbGFjZSBJbnB1dCB2YWx1ZSB3aXRoIHRoZSBzZWxlY3RlZCB2YWx1ZVxyXG4gICAgICAgIGF1dG9Db21wbGV0ZUpTLmlucHV0LnZhbHVlID0gc2VsZWN0aW9uO1xyXG4gICAgICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAnZGF0YS1yZWdpb24tY29kZScsXHJcbiAgICAgICAgICAgIGZlZWRiYWNrLnNlbGVjdGlvbi52YWx1ZS5jb2RlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gQVRcclxuICAgICAgICBjb25zdCBqc29uQXQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdyZWNoZXJjaGVfJyArIGZlZWRiYWNrLnNlbGVjdGlvbi52YWx1ZS5ub20sXHJcbiAgICAgICAgICAgIGNoYXB0ZXIyOiAnZmlsdHJlJyxcclxuICAgICAgICAgICAgY2hhcHRlcjM6ICdyZWdpb24nLFxyXG4gICAgICAgICAgICBsZXZlbDI6ICc1MCcsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBuZXcgQXRUYWdzKCkuYXRUYWdzQ2FsbENsaWNrKEpTT04uc3RyaW5naWZ5KGpzb25BdCkpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IExBVU5DSF9TVE9SSUVTX1VSTCA9ICcvcG9ydHJhaXRzLWRlLWxhLXJlbGFuY2UnO1xyXG5leHBvcnQgY29uc3QgTEFVTkNIX1NUT1JJRVNfUElOID0gJy9waW5zJztcclxuZXhwb3J0IGNvbnN0IExBVU5DSF9TVE9SSUVTX1BBR0VSID0gJz9wYWdpbmF0aW9uPWZhbHNlJztcclxuZXhwb3J0IGNvbnN0IEFQSV9MQVVOQ0hfU1RPUklFU19VUkwgPVxyXG4gICAgcHJvY2Vzcy5lbnYuQVBJX1BSRUZJWCArIExBVU5DSF9TVE9SSUVTX1VSTDtcclxuZXhwb3J0IGNvbnN0IEFQSV9MQVVOQ0hfU1RPUklFU19NQVAgPVxyXG4gICAgcHJvY2Vzcy5lbnYuQVBJX1BSRUZJWCArXHJcbiAgICBMQVVOQ0hfU1RPUklFU19VUkwgK1xyXG4gICAgTEFVTkNIX1NUT1JJRVNfUElOICtcclxuICAgIExBVU5DSF9TVE9SSUVTX1BBR0VSO1xyXG5leHBvcnQgY29uc3QgQVBJX0xBVU5DSF9TVE9SSUVTX1BJTiA9XHJcbiAgICBwcm9jZXNzLmVudi5BUElfUFJFRklYICsgTEFVTkNIX1NUT1JJRVNfVVJMICsgTEFVTkNIX1NUT1JJRVNfUEFHRVI7XHJcbmV4cG9ydCBjb25zdCBUSEVNQVRJQ1NfVVJMID0gcHJvY2Vzcy5lbnYuQVBJX1BSRUZJWCArICcvdGhlbWF0aWNzJztcclxuZXhwb3J0IGNvbnN0IE1FQVNVUkVfVVJMID0gcHJvY2Vzcy5lbnYuQVBJX1BSRUZJWCArICcvbWVhc3VyZXMnO1xyXG4iLCIvKiBnbG9iYWwgdGFydGVhdWNpdHJvbiwgdGFnICovXHJcbmltcG9ydCBBcGkgZnJvbSAnLi4vYXBwL2pzL0FwaSc7XHJcbmltcG9ydCBMaXN0IGZyb20gJy4vanMvTGlzdCc7XHJcbmltcG9ydCBpbml0aWF0ZUZpbHRlcnMgZnJvbSAnLi9qcy9GaWx0ZXJzJztcclxuaW1wb3J0IE1lYXN1cmUgZnJvbSAnLi4vYXBwL2pzL01lYXN1cmUnO1xyXG5pbXBvcnQgUGFnZXIgZnJvbSAnLi4vYXBwL2pzL1BhZ2VyJztcclxuaW1wb3J0IFN0YXRlIGZyb20gJy4uL2FwcC9qcy9TdGF0ZSc7XHJcbmltcG9ydCBHcm91cEJ1dHRvbnMgZnJvbSAnLi4vYXBwL2pzL0dyb3VwQnV0dG9ucyc7XHJcbmltcG9ydCBNYXAgZnJvbSAnLi9qcy9NYXAnO1xyXG5pbXBvcnQgJy4vY3NzL21haW4uc2Nzcyc7XHJcbmltcG9ydCAnLi9jc3MvbGlzdC5zY3NzJztcclxuaW1wb3J0ICcuL2Nzcy9maWx0ZXIuc2Nzcyc7XHJcbmltcG9ydCAnLi9jc3MvbWFwLnNjc3MnO1xyXG5pbXBvcnQge1xyXG4gICAgQVBJX0xBVU5DSF9TVE9SSUVTX1BJTixcclxuICAgIExBVU5DSF9TVE9SSUVTX1BJTixcclxuICAgIEFQSV9MQVVOQ0hfU1RPUklFU19VUkwsXHJcbiAgICBMQVVOQ0hfU1RPUklFU19QQUdFUixcclxuICAgIE1FQVNVUkVfVVJMLFxyXG4gICAgVEhFTUFUSUNTX1VSTCxcclxufSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCBBdFRhZ3MgZnJvbSAnLi4vYXBwL2pzL0F0VGFncyc7XHJcbmltcG9ydCBDb3B5IGZyb20gJy4uL2FwcC9qcy9Db3B5JztcclxuXHJcbmNvbnN0IGxldmVsQVQgPSAnNTAnO1xyXG5jb25zdCBhdFNpdGUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXRsaW5rLXRhZycpO1xyXG5cclxuLy8gTGlzdGluZyArIHBhZ2VyXHJcbmZ1bmN0aW9uIGluaXRpYXRlTGlzdGluZyhkYXRhVVJMLCBzY3JvbGxQYWdlKSB7XHJcbiAgICBuZXcgQXBpKCkuZ2V0KGRhdGFVUkwpLnRoZW4oKGRhdGFDb250ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gTm90IHNjcm9sbCAvIGVtcHR5IGNvbnRlbnQgZm9yIGZpcnN0IGxvYWRpbmcgcGFnZVxyXG4gICAgICAgIGlmIChzY3JvbGxQYWdlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNhcmRzQ29udGFpbmVyJylcclxuICAgICAgICAgICAgICAgIC5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0J30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKS5xdWVyeVNlbGVjdG9yQWxsKCcqJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5saXN0JylcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcqJylcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChuKSA9PiBuLnJlbW92ZSgpKTtcclxuICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZnItcGFnaW5hdGlvbicpXHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnKicpXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgobikgPT4gbi5yZW1vdmUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhQ29udGVudFsnaHlkcmE6bWVtYmVyJ10ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBMaXN0XHJcbiAgICAgICAgICAgIGRhdGFDb250ZW50WydoeWRyYTptZW1iZXInXS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTGlzdChpdGVtKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZnItY2FyZF9fbGluaycpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQVQgVGFnIENhbGxcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBqc29uQXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFwdGVyMjogJ2NhcmRzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjM6IHRoaXMuY2xvc2VzdCgnLmZyLWNhcmQnKS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJy5mci10YWcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDI6IGxldmVsQVQsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQXRUYWdzKCkuYXRUYWdzQ2FsbENsaWNrKEpTT04uc3RyaW5naWZ5KGpzb25BdCksIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBkYXRhQ29udGVudFsnaHlkcmE6dmlldyddICYmXHJcbiAgICAgICAgICAgICAgICBkYXRhQ29udGVudFsnaHlkcmE6dmlldyddWydoeWRyYTpsYXN0J11cclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBQYWdlclxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnBhZ2VyIC5mci1wYWdpbmF0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQYWdlcihkYXRhQ29udGVudCkucmVuZGVyKGluaXRpYXRlTGlzdGluZylcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluaXRpYXRlTWFwKGRhdGFVUkwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmxpc3QnKVxyXG4gICAgICAgICAgICAgICAgLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcclxuICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J2ZyLWNvbC1sZy02IGZyLXRleHQtLWxnIG5vLXJlc3VsdCc+PHAgY2xhc3M9J2ZyLW10LTAgZnItcHgtM3cnPlZvdHJlIHJlY2hlcmNoZSBuJ2VzdCBhc3NvY2nDqWUgw6AgYXVjdW4gcsOpc3VsdGF0LCBtZXJjaSBkJ2Vzc2F5ZXIgZCdhdXRyZXMgY3JpdMOocmVzIGRlIHJlY2hlcmNoZS48L3A+PC9kaXY+XCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGluaXRpYXRlTWFwKGRhdGFVUkwpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWF0ZVRoZW1hdGljKGRhdGFVUkwpIHtcclxuICAgIG5ldyBBcGkoKS5nZXQoZGF0YVVSTCkudGhlbigoZGF0YUNvbnRlbnQpID0+IHtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnRoZW1hdGljcy10YWdzJylcclxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICAgICAgR3JvdXBCdXR0b25zKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFDb250ZW50WydoeWRyYTptZW1iZXInXSxcclxuICAgICAgICAgICAgICAgICAgICAndGhlbWF0aWNzLXRhZ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsQVQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RoZW1hdGlxdWUnXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhdGVNZWFzdXJlKGRhdGFVUkwpIHtcclxuICAgIG5ldyBBcGkoKS5nZXQoZGF0YVVSTCkudGhlbigoZGF0YUNvbnRlbnQpID0+IHtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLm1lYXN1cmUnKVxyXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoTWVhc3VyZShkYXRhQ29udGVudFsnaHlkcmE6bWVtYmVyJ10sIGxldmVsQVQpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWF0ZVN0YXRlKGRhdGFVUkwpIHtcclxuICAgIG5ldyBBcGkoKS5nZXQoZGF0YVVSTCwgdHJ1ZSkudGhlbigoZGF0YUNvbnRlbnQpID0+IHtcclxuICAgICAgICBTdGF0ZShkYXRhQ29udGVudCwgJyNmci1hY2NvcmRpb24tc3RhdGUnKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWF0ZU1hcChkYXRhVVJMKSB7XHJcbiAgICBsZXQgem9vbUxldmVsID0gdHJ1ZTtcclxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBhLmhyZWYgPSBkYXRhVVJMO1xyXG4gICAgY29uc3QgcGFyYW0gPSBhLnNlYXJjaCA/ICcmJyArIGEuc2VhcmNoLnN1YnN0cmluZygxKSA6ICcnO1xyXG4gICAgaWYgKHBhcmFtKSB7XHJcbiAgICAgICAgem9vbUxldmVsID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwaW5DYWxsID1cclxuICAgICAgICBhLnBhdGhuYW1lICsgTEFVTkNIX1NUT1JJRVNfUElOICsgTEFVTkNIX1NUT1JJRVNfUEFHRVIgKyBwYXJhbTtcclxuICAgIC8vIEhpZGUgYnV0dG9uXHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjYmFja1RvTWV0cm9wb2xpdGFuJylcclxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnb25DbGlja01hcCcpO1xyXG5cclxuICAgIG5ldyBBcGkoKS5nZXQocGluQ2FsbCkudGhlbigoZGF0YUNvbnRlbnQpID0+IHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hcCcpLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXAnKS5xdWVyeVNlbGVjdG9yKCcubWFwUGFyZW50JykucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuaW5uZXJNYXBEb21Ub20nKVxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXBQYXJlbnQnKS5sZW5ndGggPiAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmlubmVyTWFwRG9tVG9tJylcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubWFwUGFyZW50JylcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChuKSA9PiBuLnJlbW92ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTWFwLCBzZW5kIHJlcXVlc3QgY2FsbCBzcGVjaWZpYyBwaW4gaW4gMm5kIHBhcmFtXHJcbiAgICAgICAgTWFwKFxyXG4gICAgICAgICAgICBkYXRhQ29udGVudFsnaHlkcmE6bWVtYmVyJ10sXHJcbiAgICAgICAgICAgIEFQSV9MQVVOQ0hfU1RPUklFU19QSU4gKyBwYXJhbSxcclxuICAgICAgICAgICAgbGV2ZWxBVCxcclxuICAgICAgICAgICAgem9vbUxldmVsLFxyXG4gICAgICAgICAgICBhdFNpdGUyXHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBBVCBjbGljayBzdGF0aWMgZWxlbWVudHNcclxuZnVuY3Rpb24gQVRDbGlja1N0YXRpYygpIHtcclxuICAgIEF0Q2xpY2tTZXJ2aWNlKCcuc29jaWFsTmV0d29yayAuZnItc2hhcmUnLCAncGFydGFnZScpO1xyXG4gICAgQXRDbGlja1NlcnZpY2UoXHJcbiAgICAgICAgJy5mci1yZWJvdW5kIGEnLFxyXG4gICAgICAgICdtaXNlLWVuLWF2YW50JyxcclxuICAgICAgICAncG91cl9lbl9zYXZvaXJfcGx1c19zdXJfbGVzX21lc3VyZXNfZHVfcGxhbl9kZV9yZWxhbmNlJ1xyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQXRDbGlja1NlcnZpY2UoZWx0RG9tLCBjaGFwdGVyMiwgY2hhcHRlcjMpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWx0RG9tKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gQVQgVGFnIENhbGxcclxuICAgICAgICAgICAgY29uc3QganNvbkF0ID0ge1xyXG4gICAgICAgICAgICAgICAgY2hhcHRlcjI6IGNoYXB0ZXIyLFxyXG4gICAgICAgICAgICAgICAgY2hhcHRlcjM6IGNoYXB0ZXIzLFxyXG4gICAgICAgICAgICAgICAgbGV2ZWwyOiBsZXZlbEFULFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBuZXcgQXRUYWdzKCkuYXRUYWdzQ2FsbENsaWNrKEpTT04uc3RyaW5naWZ5KGpzb25BdCksIHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIEluaXRpYXRlIGF0IGZpcnN0IGxvYWRcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGluaXRpYXRlTGlzdGluZyhBUElfTEFVTkNIX1NUT1JJRVNfVVJMLCBmYWxzZSk7XHJcbiAgICBpbml0aWF0ZVRoZW1hdGljKFRIRU1BVElDU19VUkwpO1xyXG4gICAgaW5pdGlhdGVNZWFzdXJlKE1FQVNVUkVfVVJMKTtcclxuICAgIGluaXRpYXRlU3RhdGUoJ2h0dHBzOi8vZ2VvLmFwaS5nb3V2LmZyL3JlZ2lvbnMvJyk7XHJcbiAgICBpbml0aWF0ZUZpbHRlcnMoaW5pdGlhdGVMaXN0aW5nKTtcclxuICAgIEFUQ2xpY2tTdGF0aWMoKTtcclxuICAgIENvcHkoKTtcclxufSk7XHJcblxyXG4vLyBMb2FkIEFUICsgVEFDXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0YXJ0ZWF1Y2l0cm9uX2xvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0YXJ0ZWF1Y2l0cm9uLnN0YXRlLmF0aW50ZXJuZXRjbmlsICYmIHR5cGVvZiB0YWcgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgY29uc3QgdGl0bGVBVCA9IGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdoMScpXHJcbiAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXRMaW5rLXRhZycpO1xyXG4gICAgICAgIGNvbnN0IGpzb25BdCA9IHtcclxuICAgICAgICAgICAgbmFtZTogdGl0bGVBVCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgbGV2ZWwyOiBsZXZlbEFULFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgY3VzdG9tVmFycyA9IHtcclxuICAgICAgICAgICAgc2l0ZToge1xyXG4gICAgICAgICAgICAgICAgMTogJ2ZyJyxcclxuICAgICAgICAgICAgICAgIDI6ICdmcmFuY2VfcmVsYW5jZScsXHJcbiAgICAgICAgICAgICAgICAxNTogd2luZG93LmxvY2F0aW9uLmhyZWYsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBuZXcgQXRUYWdzKCkuYXRUYWdzQ2FsbFBhZ2UoSlNPTi5zdHJpbmdpZnkoanNvbkF0KSwgY3VzdG9tVmFycyk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgY2hlY2tGaWVsZHMgZnJvbSAnLi4vLi4vYXBwL2pzL0NoZWNrRmllbGRzJztcclxuaW1wb3J0IEF0VGFncyBmcm9tICcuLi8uLi9hcHAvanMvQXRUYWdzJztcclxuaW1wb3J0IHtTQ1JFRU5fU1dJVENIfSBmcm9tICcuLi8uLi9hcHAvanMvQ29uc3RhbnRzJztcclxuXHJcbmNvbnN0IG1vYmlsZUZpbHRlcnNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BlbkZpbHRlcnMnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYXRlRmlsdGVycyhjYWxsYmFjaykge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdEZpbHRlcnMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5tYXBQYXJlbnQnKVxyXG4gICAgICAgICAgICAuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdzdGFydCd9KTtcclxuICAgICAgICBjb25zdCBhY2NvcmRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZyLWFjY29yZGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVycyA9IEFycmF5LmZyb20oYWNjb3JkaW9ucykuZmlsdGVyKFxyXG4gICAgICAgICAgICAoYWNjb3JkaW9uKSA9PiAhYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3IoJy5yZXNldEJ1dHRvbicpLmRpc2FibGVkXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRGaWx0ZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyBGb3IgRGVza3RvcCBvbmx5XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IFNDUkVFTl9TV0lUQ0gpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZURlc2t0b3BGaWx0ZXJzKGFjY29yZGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcub3BlbkxvY2FsaXNhdGlvbicpXHJcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdibHVlQ2xpY2snKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLWdlb2xvYycpLmlubmVyVGV4dCA9XHJcbiAgICAgICAgICAgICdNb2RpZmllciBsYSBsb2NhbGlzYXRpb24nO1xyXG4gICAgICAgIGNoZWNrRmllbGRzKGNhbGxiYWNrKTtcclxuICAgICAgICBkaXNwbGF5TW9iaWxlRmlsdGVycyhmYWxzZSk7XHJcbiAgICAgICAgYWN0aXZlRmlsdGVycyghIXNlbGVjdGVkRmlsdGVycy5sZW5ndGgpO1xyXG4gICAgICAgIC8vIEFUIFRhZ1xyXG4gICAgICAgIGNvbnN0IGpzb25BdCA9IHtcclxuICAgICAgICAgICAgbmFtZTogJ3JlY2hlcmNoZV9hZmZpY2hlcicsXHJcbiAgICAgICAgICAgIGNoYXB0ZXIyOiAnZmlsdHJlJyxcclxuICAgICAgICAgICAgY2hhcHRlcjM6ICdBZmZpbmVyIGxhIHJlY2hlcmNoZScsXHJcbiAgICAgICAgICAgIGxldmVsMjogJzUwJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIG5ldyBBdFRhZ3MoKS5hdFRhZ3NDYWxsQ2xpY2soSlNPTi5zdHJpbmdpZnkoanNvbkF0KSwgdGhpcyk7XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmZvY3VzKCk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZUZpbHRlcnMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkaXNwbGF5TW9iaWxlRmlsdGVycyhmYWxzZSk7XHJcbiAgICB9KTtcclxuICAgIG1vYmlsZUZpbHRlcnNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGxheU1vYmlsZUZpbHRlcnMoKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcignLm9wZW5Mb2NhbGlzYXRpb24nKVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY2xvc2VPcGVuR2VvbG9jKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyR2VvbG9jIC5jbG9zZUZpbHRlcnMnKVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY2xvc2VPcGVuR2VvbG9jKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjYmFja1RvTWV0cm9wb2xpdGFuIC5sYWJlbERvbVRvbScpXHJcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnYmFja0ZyYW5jZUNsaWNrJyk7XHJcbiAgICAgICAgICAgIGNsb3NlT3Blbkdlb2xvYygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgdG9nZ2xlQWNjb3JkaW9ucygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TW9iaWxlRmlsdGVycyhvcGVuID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgZmlsdGVyc0NvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2wtZmlsdGVycycpO1xyXG4gICAgY29uc3QgYmxvY2tTY3JvbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XHJcbiAgICBpZiAob3Blbikge1xyXG4gICAgICAgIGZpbHRlcnNDb2wuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgYmxvY2tTY3JvbGwuY2xhc3NMaXN0LmFkZCgnYmxvY2tTY3JvbGwnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsdGVyc0NvbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBibG9ja1Njcm9sbC5jbGFzc0xpc3QucmVtb3ZlKCdibG9ja1Njcm9sbCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhY3RpdmVGaWx0ZXJzKGhhc0ZpbHRlcnMpIHtcclxuICAgIGhhc0ZpbHRlcnNcclxuICAgICAgICA/IG1vYmlsZUZpbHRlcnNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICA6IG1vYmlsZUZpbHRlcnNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZURlc2t0b3BGaWx0ZXJzKGFjY29yZGlvbnMpIHtcclxuICAgIGFjY29yZGlvbnMuZm9yRWFjaCgoYWNjb3JkaW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKGFjY29yZGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgIGFjY29yZGlvblxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5mci1hY2NvcmRpb25fX2J0bicpXHJcbiAgICAgICAgICAgICAgICAuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhY2NvcmRpb25cclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZnItYWNjb3JkaW9uX19idG4nKVxyXG4gICAgICAgICAgICAgICAgLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVBY2NvcmRpb25zKCkge1xyXG4gICAgY29uc3QgYWNjb3JkaW9uQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mci1hY2NvcmRpb25fX2J0bicpO1xyXG4gICAgYWNjb3JkaW9uQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QWNjb3JkaW9uID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICBjdXJyZW50QWNjb3JkaW9uXHJcbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLmZpbHRlcnMtY29udGFpbmVyJylcclxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdvdXRsaW5lLWNvbG9yLWxvYWQnKTtcclxuICAgICAgICAgICAgYWNjb3JkaW9uQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEFjY29yZGlvbi5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmZpbHRlcnMtY29udGFpbmVyJylcclxuICAgICAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnb3V0bGluZS1jb2xvci1sb2FkJyk7XHJcbiAgICAgICAgICAgIH0sIDIwKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU9wZW5HZW9sb2MoKSB7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5uZXJNYXBEb21Ub20sLmNsb3NlRmlsdGVycywgLm1hcEluc2VydCcpXHJcbiAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmVHZW9sb2MnKTtcclxuICAgICAgICB9KTtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtZmlsdGVycycpXHJcbiAgICAgICAgLmNsYXNzTGlzdC50b2dnbGUoJ2luYWN0aXZlR2VvbG9jJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuY2xhc3NMaXN0LnRvZ2dsZSgnYmxvY2tTY3JvbGwnKTtcclxufVxyXG5cclxuLy8gRnVuY3Rpb24gYWRkIGNsYXNzIHRvIGV4cGFuZCBmaWx0ZXJzIG9uIG1vYmlsZVxyXG5pZiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cgJiYgd2luZG93LmlubmVyV2lkdGggPD0gU0NSRUVOX1NXSVRDSCkge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sLWZpbHRlcnMnKTtcclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxyXG4gICAgICAgIChbZV0pID0+XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2lzLXBpbm5lZCcsIGUuaW50ZXJzZWN0aW9uUmF0aW8gPCAxKSxcclxuXHJcbiAgICAgICAge3RocmVzaG9sZDogWzFdfVxyXG4gICAgKTtcclxuXHJcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsKTtcclxufVxyXG4iLCJpbXBvcnQge0xBVU5DSF9TVE9SSUVTX1VSTH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IGdlb1BpbiBmcm9tICcuLi8uLi9pbWFnZXMvY29tbW9uL21hcC1waW4tMi1saW5lLnN2Zyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KHJlc3VsdCkge1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVVUkwoKSB7XHJcbiAgICAgICAgcmV0dXJuIExBVU5DSF9TVE9SSUVTX1VSTCArIHJlc3VsdC5zbHVnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlTWVkaWFVUkwobWVkaWFVUkwpIHtcclxuICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuVVJMX01FRElBICsgbWVkaWFVUkw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TWVkaWEoKSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5tZWRpYVVSTCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZyLWNhcmRfX2ltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJmci1yZXNwb25zaXZlLWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7Z2VuZXJhdGVNZWRpYVVSTChyZXN1bHQubWVkaWFVUkwpfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwidGlsZSBmci1jb2wtMTIgZnItY29sLW1kLTYgZnItcHktMCBmci1tYi0zd1wiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZnItY2FyZCBmci1lbmxhcmdlLWxpbmtcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZyLWNhcmRfX2JvZHkgZnItcHQtMndcIj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImZyLWNhcmRfX3RpdGxlIGZyLW1iLTN2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7Z2VuZXJhdGVVUkwoKX1cIiBjbGFzcz1cImZyLWNhcmRfX2xpbmtcIiB0YXJnZXQ9XCJfc2VsZlwiPiR7XHJcbiAgICAgICAgcmVzdWx0LnNob3J0VGl0bGVcclxuICAgIH08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmci1jYXJkX19kZXRhaWwgZnItbWItM3ZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZyLXRhZyBmci10YWctLXNtXCI+JHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1haW5UaGVtYXRpYy5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnItdGV4dC0tc20gZnItbWItM3YgZnItdGV4dC0tcmVndWxhciBmci1jYXJkX19yZWdpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Z2VvUGlufVwiIGNsYXNzPVwiZnItbXItMXZcIiBhbHQ9XCJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3BhbiBjbGFzcz1cInRleHQgZnItdGV4dC0teHNcIj4ke1xyXG4gICAgICAgIHJlc3VsdC5yZWdpb25cclxuICAgIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnItY2FyZF9faGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAke2dldE1lZGlhKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxufVxyXG4iLCJpbXBvcnQgT3NtIGZyb20gJy4uLy4uL2FwcC9qcy9NYXAvT3NtJztcclxuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcclxuaW1wb3J0IHtTQ1JFRU5fU1dJVENIfSBmcm9tICcuLi8uLi9hcHAvanMvQ29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcChcclxuICAgIHJlc3VsdCxcclxuICAgIHF1ZXJ5U3BlY2lmaWNQaW4sXHJcbiAgICBhdExldmVsLFxyXG4gICAgem9vbUxldmVsLFxyXG4gICAgYXRTaXRlMlxyXG4pIHtcclxuICAgIGxldCB3b3JsZFdpZGUgPSBmYWxzZTtcclxuICAgIGNvbnN0IGRvbVBhcmVudCA9ICcjaW5mb01hcFRpbGUnO1xyXG4gICAgY29uc3QgZG9tRWx0ID0gZG9tUGFyZW50ICsgJyAuc2xpZGVyJztcclxuICAgIGNvbnN0IGluZm9NYXBUaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbmZvTWFwVGlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZm9NYXBUaWxlJyk7XHJcbiAgICBpbmZvTWFwVGlsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kdWxlJywgJ21hcC1jYXJkcycpO1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcignI2JhY2tUb01ldHJvcG9saXRhbicpXHJcbiAgICAgICAgLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnb25DbGlja01pbmlNYXAnKTtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNiYWNrVG9NZXRyb3BvbGl0YW4nKVxyXG4gICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrRnJhbmNlQ2xpY2snKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWNrVG9NZXRyb3BvbGl0YW4gaW5wdXQnKS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICBsZXQgRnJhbmNlTUFQID0ge1xyXG4gICAgICAgIEZSOiB7XHJcbiAgICAgICAgICAgIHJlZ2lvbjogJ0ZyYW5jZSBNw6l0cm9wb2xpdGFpbmUnLFxyXG4gICAgICAgICAgICByZWdpb25Db2RlOiAnRlInLFxyXG4gICAgICAgICAgICBsYXRpdHVkZTogem9vbUxldmVsID8gJycgOiAnMCcsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogem9vbUxldmVsID8gJycgOiAnMCcsXHJcbiAgICAgICAgICAgIHpvb206ICc1JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcwMSc6IHtcclxuICAgICAgICAgICAgcmVnaW9uOiAnR3VhZGVsb3VwZScsXHJcbiAgICAgICAgICAgIHJlZ2lvbkNvZGU6ICcwMScsXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiAnMTYuMTk3NTg3JyxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiAnLTYxLjUzOTgyJyxcclxuICAgICAgICAgICAgem9vbTogJzknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJzAyJzoge1xyXG4gICAgICAgICAgICByZWdpb246ICdNYXJ0aW5pcXVlJyxcclxuICAgICAgICAgICAgcmVnaW9uQ29kZTogJzAyJyxcclxuICAgICAgICAgICAgbGF0aXR1ZGU6ICcxNC44NTQ1MzInLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6ICctNjEuMDE4OTMnLFxyXG4gICAgICAgICAgICB6b29tOiAnOScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnMDMnOiB7XHJcbiAgICAgICAgICAgIHJlZ2lvbjogJ0d1eWFuZScsXHJcbiAgICAgICAgICAgIHJlZ2lvbkNvZGU6ICcwMycsXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiAnNS45MjIzMjUnLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6ICctNTMuMjM5MTcnLFxyXG4gICAgICAgICAgICB6b29tOiAnNycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnMDQnOiB7XHJcbiAgICAgICAgICAgIHJlZ2lvbjogJ0xhIFLDqXVuaW9uJyxcclxuICAgICAgICAgICAgcmVnaW9uQ29kZTogJzA0JyxcclxuICAgICAgICAgICAgbGF0aXR1ZGU6ICctMjEuMTMzMTY1JyxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiAnNTUuNTMyNTEnLFxyXG4gICAgICAgICAgICB6b29tOiAnOScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnMDYnOiB7XHJcbiAgICAgICAgICAgIHJlZ2lvbjogJ01heW90dGUnLFxyXG4gICAgICAgICAgICByZWdpb25Db2RlOiAnMDYnLFxyXG4gICAgICAgICAgICBsYXRpdHVkZTogJy0xMi44NDMwNTUnLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6ICc0NS4xMzgzMzMnLFxyXG4gICAgICAgICAgICB6b29tOiAnMTAnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IFNDUkVFTl9TV0lUQ0gpIHtcclxuICAgICAgICBGcmFuY2VNQVAgPSB7XHJcbiAgICAgICAgICAgIC4uLkZyYW5jZU1BUCxcclxuICAgICAgICAgICAgRlI6IHtcclxuICAgICAgICAgICAgICAgIHJlZ2lvbjogJ0ZyYW5jZSBNw6l0cm9wb2xpdGFpbmUnLFxyXG4gICAgICAgICAgICAgICAgcmVnaW9uQ29kZTogJ0ZSJyxcclxuICAgICAgICAgICAgICAgIGxhdGl0dWRlOiB6b29tTGV2ZWwgPyAnLTIuMTUnIDogJzAnLFxyXG4gICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiB6b29tTGV2ZWwgPyAnNS4yMicgOiAnMCcsXHJcbiAgICAgICAgICAgICAgICB6b29tOiB6b29tTGV2ZWwgPyAnMScgOiAnMycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBGb2N1cyB3b3JsZCB3aWRlIG9ubHkgbW9iaWxlIGRldmljZXNcclxuICAgICAgICB3b3JsZFdpZGUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IFNDUkVFTl9TV0lUQ0ggJiYgIXpvb21MZXZlbCkge1xyXG4gICAgICAgIHdvcmxkV2lkZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZnJhbmNlTWV0cm9wb2xpdGFuID0gRnJhbmNlTUFQLkZSO1xyXG4gICAgLy8gQnV0dG9uIGJhY2sgdG8gRnJhbmNlXHJcbiAgICBjb25zdCBiYWNrVG9GcmFuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFja1RvTWV0cm9wb2xpdGFuJyk7XHJcblxyXG4gICAgLy8gVHJlYXQgRnJhbmNlIE1ldHJvcG9saXRhbiBNQVAgc3BlY2lmaWNhbGx5XHJcbiAgICBjb25zdCBtYXBNZXRyb3BvbGl0YW4gPSBidWlsZE1hcEluaGVyaXQoXHJcbiAgICAgICAgZnJhbmNlTWV0cm9wb2xpdGFuLFxyXG4gICAgICAgIHJlc3VsdCxcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICAnJyxcclxuICAgICAgICBhdExldmVsLFxyXG4gICAgICAgIGRvbUVsdCxcclxuICAgICAgICBkb21QYXJlbnQsXHJcbiAgICAgICAgcXVlcnlTcGVjaWZpY1BpbixcclxuICAgICAgICB6b29tTGV2ZWwsXHJcbiAgICAgICAgd29ybGRXaWRlLFxyXG4gICAgICAgIGF0U2l0ZTJcclxuICAgICk7XHJcblxyXG4gICAgLy8gT3RoZXIgRnJlbmNoIG92ZXJzZWEgdGVycml0b3JpZXNcclxuICAgIE9iamVjdC5rZXlzKEZyYW5jZU1BUCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtICE9PSAnRlInKSB7XHJcbiAgICAgICAgICAgIGJ1aWxkTWFwSW5oZXJpdChcclxuICAgICAgICAgICAgICAgIEZyYW5jZU1BUFtpdGVtXSxcclxuICAgICAgICAgICAgICAgIHJlc3VsdCxcclxuICAgICAgICAgICAgICAgIG1hcE1ldHJvcG9saXRhbixcclxuICAgICAgICAgICAgICAgIGJhY2tUb0ZyYW5jZSxcclxuICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgICAgICBkb21QYXJlbnRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBCdXR0b24gYmFjayB0byBGcmFuY2UgTWV0cm9wb2xpdGFuXHJcbiAgICBiYWNrVG9GcmFuY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbW92ZU1ldHJvcG9saXRhbk1hcChtYXBNZXRyb3BvbGl0YW4sICcyLjk2NicsICc0Ni44NicsIDUpO1xyXG4gICAgICAgIGludGVyYWN0aXZlKGRvbVBhcmVudCk7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbm5lck1hcERvbVRvbSAubWFwUGFyZW50JylcclxuICAgICAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnb25DbGlja0RST00nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdvbkNsaWNrTWFwJyk7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItZ2VvbG9jJylcclxuICAgICAgICAgICAgLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnYmx1ZUNsaWNrJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlci1nZW9sb2MnKS5pbm5lclRleHQgPVxyXG4gICAgICAgICAgICAnRnJhbmNlIG3DqXRyb3BvbGl0YWluZSc7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGVhZmxldC1jb250cm9sLXpvb20gYScpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JvdXBNYXJrZXInKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzT24nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXAgLm1hcFBhcmVudCcpLmFwcGVuZENoaWxkKGluZm9NYXBUaWxlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRNYXBJbmhlcml0KFxyXG4gICAgYXJyYXksXHJcbiAgICByZXN1bHQsXHJcbiAgICBtYXBNZXRyb3BvbGl0YW4sXHJcbiAgICBiYWNrVG9GcmFuY2UsXHJcbiAgICBhdExldmVsLFxyXG4gICAgY3VzdG9tUG9waW4sXHJcbiAgICBub2RlUGFyZW50LFxyXG4gICAgcXVlcnlTcGVjaWZpY1BpbixcclxuICAgIHpvb21MZXZlbCxcclxuICAgIHdvcmxkV2lkZSxcclxuICAgIGF0U2l0ZTJcclxuKSB7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKG1hcE1ldHJvcG9saXRhbiA/ICcuaW5uZXJNYXBEb21Ub20nIDogJy5tYXAnKVxyXG4gICAgICAgIC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgICdiZWZvcmVlbmQnLFxyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1hcFBhcmVudCcgK1xyXG4gICAgICAgICAgICAgICAgKG1hcE1ldHJvcG9saXRhbiA/ICcgZnItbXQtbWQtMXYgZnItbXItbWQtMXZcIicgOiAnXCInKSArXHJcbiAgICAgICAgICAgICAgICAnPjxkaXYgaWQ9XCJtYXAnICtcclxuICAgICAgICAgICAgICAgIChtYXBNZXRyb3BvbGl0YW4gPyBhcnJheS5yZWdpb25Db2RlICsgJ0J0bkZSJyA6ICcnKSArXHJcbiAgICAgICAgICAgICAgICAnXCIgY2xhc3M9XCJtYXBHbG9iYWxcIj48L2Rpdj48ZGl2IGNsYXNzPVwiZnItcmFkaW8tZ3JvdXAgZnItcmFkaW8tZ3JvdXAtLXNtIGZyLW0tMFwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInJlZ2lvbicgK1xyXG4gICAgICAgICAgICAgICAgYXJyYXkucmVnaW9uQ29kZSArXHJcbiAgICAgICAgICAgICAgICAnXCIgbmFtZT1cInJhZGlvUmVnaW9uXCI+PGxhYmVsIGNsYXNzPVwibGFiZWxEb21Ub20gZnItbGFiZWwgZnItdGV4dC0tYm9sZCBmci1tYi0wIGZyLXB5LTBcIiBmb3I9XCJyZWdpb24nICtcclxuICAgICAgICAgICAgICAgIGFycmF5LnJlZ2lvbkNvZGUgK1xyXG4gICAgICAgICAgICAgICAgJ1wiPicgK1xyXG4gICAgICAgICAgICAgICAgYXJyYXkucmVnaW9uICtcclxuICAgICAgICAgICAgICAgICc8L2xhYmVsPjwvZGl2PjwvZGl2PidcclxuICAgICAgICApO1xyXG4gICAgY29uc3QgbWFwQWxsRnJhbmNlID0gbmV3IE9zbShcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAnI21hcCcgKyAobWFwTWV0cm9wb2xpdGFuID8gYXJyYXkucmVnaW9uQ29kZSArICdCdG5GUicgOiAnJylcclxuICAgICAgICApXHJcbiAgICApO1xyXG4gICAgLy8gQ2FycmVmdWxsIDogb3Bwb3NpdGUgY29uZGl0aW9uIGZhbHNlID09PSBNZXRyb3BvbGl0YW4gLyBUcnVlID09PSBvdmVyc2VhcyB0ZXJyaXRvcmllc1xyXG4gICAgaWYgKCFtYXBNZXRyb3BvbGl0YW4pIHtcclxuICAgICAgICBjb25zdCBtYXBOZXdMb2NhdGlvbiA9IG1hcEFsbEZyYW5jZVxyXG4gICAgICAgICAgICAucmVuZGVyV2l0aFBpbihcclxuICAgICAgICAgICAgICAgIHJlc3VsdCxcclxuICAgICAgICAgICAgICAgICdtYXAnLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiB6b29tTGV2ZWwgPyAnNDYuODYnIDogYXJyYXkubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiB6b29tTGV2ZWwgPyAnMi45NjYnIDogYXJyYXkubG9uZ2l0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50UGluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHpvb206IGFycmF5Lnpvb20sXHJcbiAgICAgICAgICAgICAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZ2dpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZG91YmxlQ2xpY2tab29tOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFdoZWVsWm9vbTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3BpbkZ1bmN0aW9uOiBMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbVBvcGluOiBjdXN0b21Qb3BpbixcclxuICAgICAgICAgICAgICAgICAgICBub2RlUGFyZW50OiBub2RlUGFyZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5U3BlY2lmaWNQaW46IHF1ZXJ5U3BlY2lmaWNQaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgY2x1c3Rlcjogd29ybGRXaWRlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heENsdXN0ZXJSYWRpdXM6IDI1LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICAgICAgYXRMZXZlbCxcclxuICAgICAgICAgICAgICAgIGF0U2l0ZTIsXHJcbiAgICAgICAgICAgICAgICAnLmZyLWNhcmRfX3JlZ2lvbiBzcGFuJ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGludGVyYWN0aXZlKG5vZGVQYXJlbnQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGludGVyYWN0aXZlKG5vZGVQYXJlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGl0ZW0ucmVnaW9uQ29kZSAhPT0gJzAxJyAmJlxyXG4gICAgICAgICAgICAgICAgaXRlbS5yZWdpb25Db2RlICE9PSAnMDInICYmXHJcbiAgICAgICAgICAgICAgICBpdGVtLnJlZ2lvbkNvZGUgIT09ICcwMycgJiZcclxuICAgICAgICAgICAgICAgIGl0ZW0ucmVnaW9uQ29kZSAhPT0gJzA0JyAmJlxyXG4gICAgICAgICAgICAgICAgaXRlbS5yZWdpb25Db2RlICE9PSAnMDYnXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignI2JhY2tUb01ldHJvcG9saXRhbicpXHJcbiAgICAgICAgICAgICAgICAgICAgLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnb25DbGlja01pbmlNYXAnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE5lZWQgdG8gcmV0dXJuIG9ubHkgRnJhbmNlIE1ldHJvcG9saXRhbiBNQVAgdG8gYXBwbHkgbGF0L2xvbmcgb24gY2xpY2sgb3ZlcnNlYSB0ZXJyaXRvcmllc1xyXG5cclxuICAgICAgICByZXR1cm4gbWFwTmV3TG9jYXRpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGFycmF5RG9tVG9tID0gW107XHJcbiAgICAgICAgcmVzdWx0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ucmVnaW9uQ29kZSA9PT0gYXJyYXkucmVnaW9uQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgYXJyYXlEb21Ub20ucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChhcnJheURvbVRvbS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgbWFwQWxsRnJhbmNlLnNlbGVjdG9yLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnb25DbGlja01pbmlNYXAnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcEFsbEZyYW5jZS5yZW5kZXJXaXRoUGluKFxyXG4gICAgICAgICAgICBhcnJheURvbVRvbSxcclxuICAgICAgICAgICAgJ21hcCcgKyBhcnJheS5yZWdpb25Db2RlICsgJ0J0bkZSJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY291bnRQaW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICB6b29tOiBhcnJheS5yZWdpb25Db2RlID09PSAnMDMnID8gMyA6IDYsXHJcbiAgICAgICAgICAgICAgICBsYXRpdHVkZTogYXJyYXkubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICBsb25naXR1ZGU6IGFycmF5LmxvbmdpdHVkZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWFwQWxsRnJhbmNlLnNlbGVjdG9yLnBhcmVudE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgJ2NsaWNrJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIG1vdmVNZXRyb3BvbGl0YW5NYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgbWFwTWV0cm9wb2xpdGFuLFxyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5LmxvbmdpdHVkZSxcclxuICAgICAgICAgICAgICAgICAgICBhcnJheS5sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICAgICBhcnJheS56b29tLFxyXG4gICAgICAgICAgICAgICAgICAgIGVcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGl2ZShub2RlUGFyZW50KTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXBQYXJlbnQnKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdvbkNsaWNrRFJPTScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjYmFja1RvTWV0cm9wb2xpdGFuJylcclxuICAgICAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnYmFja0ZyYW5jZUNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ29uQ2xpY2tEUk9NJyk7XHJcbiAgICAgICAgICAgICAgICBiYWNrVG9GcmFuY2UuY2xhc3NMaXN0LmFkZCgnb25DbGlja01hcCcpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJy5pbm5lck1hcERvbVRvbSwuY2xvc2VGaWx0ZXJzLCAubWFwSW5zZXJ0J1xyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUdlb2xvYycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLm1vYmlsZS1maWx0ZXJzJylcclxuICAgICAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmVHZW9sb2MnKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5jbGFzc0xpc3QucmVtb3ZlKCdibG9ja1Njcm9sbCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpbnRlcmFjdGl2ZShkb21QYXJlbnQpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZG9tUGFyZW50KS5pbm5lckhUTUwgPSAnJztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncm91cE1hcmtlcicpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzT24nKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIG1vdmVNZXRyb3BvbGl0YW5NYXAobWFwTWV0cm9wb2xpdGFuLCBsb25naXR1ZGUsIGxhdGl0dWRlLCB6b29tLCBlKSB7XHJcbiAgICBtYXBNZXRyb3BvbGl0YW4uc2V0VmlldyhuZXcgTC5MYXRMbmcobGF0aXR1ZGUsIGxvbmdpdHVkZSksIHpvb20pO1xyXG4gICAgaWYgKGUgJiYgZS50YXJnZXQuY2xhc3NMaXN0WzBdID09PSAnbGFiZWxEb21Ub20nKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlci1nZW9sb2MnKS5pbm5lclRleHQgPSBlLnRhcmdldC5pbm5lclRleHQ7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItZ2VvbG9jJylcclxuICAgICAgICAgICAgLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnYmx1ZUNsaWNrJyk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkF0VGFncyIsInRleHQiLCJlbHQiLCJjdXN0b21WYXJzIiwiY2xpY2tUeXBlIiwidGFyZ2V0IiwidmFsaWRGaWxlRXh0ZW5zaW9ucyIsImhvc3RuYW1lIiwiaHJlZiIsImluZGV4T2YiLCJwcm9jZXNzIiwiZW52IiwiRU5WX1VSTCIsIm9yaWdpbiIsImZvckVhY2giLCJpdGVtIiwicGF0aG5hbWUiLCJzcGxpdCIsInBvcCIsImRhdGFzZXQiLCJ0eXBlIiwianNvbkFURW5kIiwibmFtZSIsImlubmVyVGV4dCIsImNoYXB0ZXIxIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwiY2xvc2VzdCIsInByZXZTdG9wIiwiZ2V0UHJldmlvdXNTaWJsaW5nIiwiY2hhcHRlcjMiLCJhcnJheUl0ZXJhdGUiLCJzaXRlIiwiZSIsImkiLCJPYmplY3QiLCJrZXlzIiwidmFsdWUiLCJ2YWwiLCJub1NwYWNlUXVvdGVzTG93ZXJjYXNlIiwidHJpbSIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsIm5vQWNjZW50Iiwibm9ybWFsaXplIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiY3VzdG9tT2JqZWN0IiwiY2xpY191cmxfYnJ1dCIsImZuQ2xpY2tEYXRhIiwiYXRUYWdzQ2FsbENsaWNrIiwiYmluZCIsImF0QXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImpzb25BVCIsInRhcnRlYXVjaXRyb24iLCJzdGF0ZSIsImF0aW50ZXJuZXRjbmlsIiwidGFnIiwiY2xpY2siLCJzZW5kIiwicmVnZXhQYWdlIiwiSlNPTiIsInBhcnNlIiwianNvblZpc2l0IiwidXJsIiwiVVJMIiwiaGFzaCIsInN1YnN0cmluZyIsInNoaWZ0Iiwic2VhcmNoUGFyYW1zIiwiaGFzIiwidG9TdHJpbmciLCJwYWdlIiwiZWxlbSIsInNlbGVjdG9yIiwic2libGluZyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJtYXRjaGVzIiwiQVBJX0xBVU5DSF9TVE9SSUVTX1VSTCIsIk1FQVNVUkVfVVJMIiwiQ2hlY2tGaWVsZHMiLCJmdW5jdGlvbkNhbGxCYWNrIiwicGFyYW0iLCJzY3JvbGwiLCJhcHBlbmRVUkwiLCJyZWdpb25Db2RlIiwibGVuZ3RoIiwidGhlbWF0aWMiLCJ0aGVtYXRpY0VudHJ5IiwiY2hpbGQiLCJhcGkiLCJrZXkiLCJTQ1JFRU5fU1dJVENIIiwiU0NSRUVOX01PQklMRV9TV0lUQ0giLCJDb3B5IiwiY29weSIsImlucHV0IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlkIiwiYXBwZW5kQ2hpbGQiLCJpbnB1dFZhbHVlIiwid2luZG93IiwibG9jYXRpb24iLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZUNoaWxkIiwiYWN0aXZhdGVQYXJlbnQiLCJjdXJyZW50U2VsZWN0b3IiLCJwYXJlbnRTZWxlY3RvciIsImFjdGl2ZSIsInBhcmVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInJlcGxhY2VVUkwiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZXQiLCJnZXRTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJpbnNlcnRVcmxQYXJhbSIsIm5ld3VybCIsInByb3RvY29sIiwiaG9zdCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJwYXRoIiwicmVtb3ZlVXJsUGFyYW1ldGVyIiwicGFyYW1LZXkiLCJjdXJyZW50VXJsIiwibmV3VXJsIiwiY2hlY2tib3hQYXJhbWV0ZXIiLCJyZXN1bHRWYWx1ZSIsInNwbGl0RG9jRGF0YSIsImNoZWNrZWQiLCJhcHBlbmQiLCJHcm91cEJ1dHRvbnMiLCJyZXN1bHQiLCJsZXZlbEFUIiwidHlwZUFUIiwiYXRTaXRlMiIsInVsIiwibGkiLCJidXR0b24iLCJldmVudCIsInRvZ2dsZSIsImJ1dHRvbkVyYXNlIiwicmVtb3ZlQXR0cmlidXRlIiwiY3VycmVudFRhcmdldCIsImNvbnRhaW5zIiwianNvbkF0IiwiY2hhcHRlcjIiLCJsZXZlbDIiLCJzdHJpbmdpZnkiLCJsaUVyYXNlIiwiYnV0dG9uQWN0aXZlIiwiTWVhc3VyZSIsImRpdiIsIm9wdGlvbiIsImRpdlJlc2V0IiwiYnV0dG9uUmVzZXQiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInByZXZlbnREZWZhdWx0IiwiZWxlbWVudE1lYXN1cmUiLCJjaGVja0ZpZWxkcyIsIlBhZ2VyIiwiY3VycmVudFBhZ2UiLCJwYXJzZUludCIsImZpcnN0UGFnZSIsImxhc3RQYWdlIiwicGFnZXIiLCJjc3MiLCJ3b3JkaW5nIiwiYSIsInBhZ2VySW5kZXgiLCJ0aXRsZSIsImluY2x1ZGVzIiwiY2xpY2tQYWdlciIsInVwZGF0ZVBhZ2VUaXRsZSIsIm5leHRQcmV2IiwianNvbkF0Q2xpY2siLCJhdFRhZ3NDYWxsUGFnZSIsIm5leHRQYWdlIiwiY3VycmVudFBhZ2VUaXRsZSIsInBhZ2VUaXRsZVBvc2l0aW9uIiwicGFnZUxhYmVsIiwiaW5zZXJ0SW5kZXgiLCJuZXh0UGFnZVRpdGxlIiwic2xpY2UiLCJqb2luIiwibWFya3VwIiwicHJldmlvdXNQYWdlciIsImNvbnN0cnVjdFBhZ2VyIiwiY3JlYXRlUGFnZXIiLCJmaXJzdE1heCIsImlubmVyV2lkdGgiLCJsYXN0TWF4IiwibmV4dFBhZ2VyIiwiQXV0b0NvbXBsZXRlIiwiU3RhdGUiLCJvdmVyZmxvd1BhcmVudCIsImlucHV0RmllbGQiLCJpbml0QXV0b2NvbXBsZXRlIiwiYXV0b0NvbXBsZXRlSlMiLCJkYXRhIiwic3JjIiwic29ydCIsImdldFNvcnRPcmRlciIsImNhY2hlIiwiZGlhY3JpdGljcyIsInBsYWNlSG9sZGVyIiwicmVzdWx0c0xpc3QiLCJlbGVtZW50IiwibGlzdCIsInJlc3VsdHMiLCJpbmZvIiwicHJlcGVuZCIsIm5vUmVzdWx0cyIsIm1heFJlc3VsdHMiLCJyZXN1bHRJdGVtIiwiaW5uZXJIVE1MIiwibWF0Y2giLCJ0cmlnZ2VyIiwicHJvcCIsImIiLCJzdGFydCIsImZlZWRiYWNrIiwiZGV0YWlsIiwic2VsZWN0aW9uIiwiY29kZSIsIm5vbSIsIkxBVU5DSF9TVE9SSUVTX1VSTCIsIkxBVU5DSF9TVE9SSUVTX1BJTiIsIkxBVU5DSF9TVE9SSUVTX1BBR0VSIiwiQVBJX1BSRUZJWCIsIkFQSV9MQVVOQ0hfU1RPUklFU19NQVAiLCJBUElfTEFVTkNIX1NUT1JJRVNfUElOIiwiVEhFTUFUSUNTX1VSTCIsIkFwaSIsIkxpc3QiLCJpbml0aWF0ZUZpbHRlcnMiLCJNYXAiLCJpbml0aWF0ZUxpc3RpbmciLCJkYXRhVVJMIiwic2Nyb2xsUGFnZSIsImdldCIsInRoZW4iLCJkYXRhQ29udGVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsIm4iLCJpbnNlcnRBZGphY2VudEhUTUwiLCJyZW5kZXIiLCJpbml0aWF0ZU1hcCIsImluaXRpYXRlVGhlbWF0aWMiLCJpbml0aWF0ZU1lYXN1cmUiLCJpbml0aWF0ZVN0YXRlIiwiem9vbUxldmVsIiwicGluQ2FsbCIsIkFUQ2xpY2tTdGF0aWMiLCJBdENsaWNrU2VydmljZSIsImVsdERvbSIsInRpdGxlQVQiLCJtb2JpbGVGaWx0ZXJzQnV0dG9uIiwiY2FsbGJhY2siLCJhY2NvcmRpb25zIiwic2VsZWN0ZWRGaWx0ZXJzIiwiQXJyYXkiLCJmcm9tIiwiZmlsdGVyIiwiYWNjb3JkaW9uIiwiZGlzYWJsZWQiLCJ1cGRhdGVEZXNrdG9wRmlsdGVycyIsImRpc3BsYXlNb2JpbGVGaWx0ZXJzIiwiYWN0aXZlRmlsdGVycyIsImZvY3VzIiwiY2xvc2VPcGVuR2VvbG9jIiwicGFyZW50Tm9kZSIsInRvZ2dsZUFjY29yZGlvbnMiLCJvcGVuIiwiZmlsdGVyc0NvbCIsImJsb2NrU2Nyb2xsIiwiaGFzRmlsdGVycyIsImFjY29yZGlvbkJ1dHRvbnMiLCJjdXJyZW50QWNjb3JkaW9uIiwic2V0VGltZW91dCIsImVsIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImludGVyc2VjdGlvblJhdGlvIiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsImdlb1BpbiIsImdlbmVyYXRlVVJMIiwic2x1ZyIsImdlbmVyYXRlTWVkaWFVUkwiLCJtZWRpYVVSTCIsIlVSTF9NRURJQSIsImdldE1lZGlhIiwic2hvcnRUaXRsZSIsIm1haW5UaGVtYXRpYyIsInJlZ2lvbiIsIk9zbSIsInF1ZXJ5U3BlY2lmaWNQaW4iLCJhdExldmVsIiwid29ybGRXaWRlIiwiZG9tUGFyZW50IiwiZG9tRWx0IiwiaW5mb01hcFRpbGUiLCJGcmFuY2VNQVAiLCJGUiIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiem9vbSIsImZyYW5jZU1ldHJvcG9saXRhbiIsImJhY2tUb0ZyYW5jZSIsIm1hcE1ldHJvcG9saXRhbiIsImJ1aWxkTWFwSW5oZXJpdCIsIm1vdmVNZXRyb3BvbGl0YW5NYXAiLCJpbnRlcmFjdGl2ZSIsImFycmF5IiwiY3VzdG9tUG9waW4iLCJub2RlUGFyZW50IiwibWFwQWxsRnJhbmNlIiwibWFwTmV3TG9jYXRpb24iLCJyZW5kZXJXaXRoUGluIiwiY291bnRQaW4iLCJ6b29tQ29udHJvbCIsImRyYWdnaW5nIiwiZG91YmxlQ2xpY2tab29tIiwic2Nyb2xsV2hlZWxab29tIiwicG9waW5GdW5jdGlvbiIsImNsdXN0ZXIiLCJtYXhDbHVzdGVyUmFkaXVzIiwiYXJyYXlEb21Ub20iLCJwdXNoIiwic2V0VmlldyIsIkwiLCJMYXRMbmciXSwic291cmNlUm9vdCI6IiJ9