"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["content-list"],{

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

/***/ "./assets/content/constants.js":
/*!*************************************!*\
  !*** ./assets/content/constants.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TYPE_LIST_BOOLEAN": () => (/* binding */ TYPE_LIST_BOOLEAN),
/* harmony export */   "IS_PM_NEWS": () => (/* binding */ IS_PM_NEWS),
/* harmony export */   "CONTENT_URL": () => (/* binding */ CONTENT_URL),
/* harmony export */   "CONTENT_THEMATICS_URL": () => (/* binding */ CONTENT_THEMATICS_URL),
/* harmony export */   "CONTENT_SUBTHEMATICS_URL": () => (/* binding */ CONTENT_SUBTHEMATICS_URL),
/* harmony export */   "API_CONTENT_URL": () => (/* binding */ API_CONTENT_URL),
/* harmony export */   "LEVEL_AT": () => (/* binding */ LEVEL_AT)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);

var TYPE_LIST_BOOLEAN = document.querySelector('[data-list]') ? !!parseInt(document.querySelector('[data-list]').getAttribute('data-list')) : null;
var IS_PM_NEWS = 'isPmNews';
var CONTENT_URL = TYPE_LIST_BOOLEAN === null ? '/contents' : '/articles';
var CONTENT_THEMATICS_URL = '/api/content_thematics';
var CONTENT_SUBTHEMATICS_URL = '/api/content_subthematics';
var API_CONTENT_URL = "/api" + CONTENT_URL;
var LEVEL_AT = '2';

/***/ }),

/***/ "./assets/content/index-list.js":
/*!**************************************!*\
  !*** ./assets/content/index-list.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initiateListing": () => (/* binding */ initiateListing)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _app_js_AtTags__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app/js/AtTags */ "./assets/app/js/AtTags.js");
/* harmony import */ var _app_js_Api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/js/Api */ "./assets/app/js/Api.js");
/* harmony import */ var _js_List__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./js/List */ "./assets/content/js/List.js");
/* harmony import */ var _js_Pager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./js/Pager */ "./assets/content/js/Pager.js");
/* harmony import */ var _js_Filter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./js/Filter */ "./assets/content/js/Filter.js");
/* harmony import */ var _css_filter_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./css/filter.scss */ "./assets/content/css/filter.scss");
/* harmony import */ var _css_main_list_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./css/main-list.scss */ "./assets/content/css/main-list.scss");
/* harmony import */ var _css_pager_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./css/pager.scss */ "./assets/content/css/pager.scss");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./constants */ "./assets/content/constants.js");














/* global tarteaucitron */








 // Listing

function initiateListing(dataURL, scrollTopPage) {
  new _app_js_Api__WEBPACK_IMPORTED_MODULE_14__["default"]().get(dataURL).then(function (dataContent) {
    var displayTotalResult = document.querySelector('.result-count');
    var searchParams = new URLSearchParams(window.location.search);
    var pagerWrapper = document.querySelector('.pager');
    var emptyResult = document.querySelector('.no-result');

    if (scrollTopPage) {
      document.querySelector('html').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    if (document.querySelector('.list').querySelectorAll('*').length > 0) {
      document.querySelector('.list').querySelectorAll('*').forEach(function (n) {
        return n.remove();
      });
    }

    if (dataContent && dataContent['hydra:member'].length > 0) {
      if (emptyResult) emptyResult.innerHTML = ''; // List

      dataContent['hydra:member'].forEach(function (item) {
        document.querySelector('.list').insertAdjacentHTML('beforeend', (0,_js_List__WEBPACK_IMPORTED_MODULE_15__["default"])(item));
      });
      if (pagerWrapper.innerHTML) pagerWrapper.innerHTML = '';

      if (dataContent['hydra:view'] && dataContent['hydra:view']['hydra:last']) {
        // Pager
        pagerWrapper.appendChild(new _js_Pager__WEBPACK_IMPORTED_MODULE_16__["default"](dataContent).render());
      }

      document.querySelectorAll('.tile a').forEach(function (item) {
        item.addEventListener('click', function () {
          var moduleName = item.closest('[data-module]'); // AT Tag Call

          var jsonAt = {
            chapter2: moduleName.getAttribute('data-module'),
            level2: _constants__WEBPACK_IMPORTED_MODULE_21__.LEVEL_AT
          };
          new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_13__["default"]().atTagsCallClick(JSON.stringify(jsonAt), this);
        });
      });
    } else {
      emptyResult.innerHTML = "\n                <p class=\"fr-mb-0\">Votre s\xE9lection n\u2019a retourn\xE9 aucun r\xE9sultat. Pour l\u2019am\xE9liorer vous pouvez :</p>\n                <ul>\n                    <li>Supprimer certains filtres</li>\n                    <li>Rechercher un r\xE9sultat moins sp\xE9cifique</li>\n                </ul>";
      displayTotalResult.classList.remove('visible');
      if (pagerWrapper) pagerWrapper.innerHTML = '';
    }

    (0,_js_Filter__WEBPACK_IMPORTED_MODULE_17__.updateResultCount)(dataContent['hydra:totalItems']);

    if (Array.from(searchParams).length) {
      displayTotalResult.classList.add('visible');
    } else {
      displayTotalResult.classList.remove('visible');
    }
  });
} // Initiate at first load

document.addEventListener('DOMContentLoaded', function () {
  var searchParams = new URLSearchParams(window.location.search);
  var isParam = Array.from(searchParams).length;
  var concat = isParam ? '&' : '?';

  if (searchParams.has('page')) {
    var isNum = /^\d+$/.test(searchParams.get('page'));

    if (!isNum) {
      searchParams.set('page', 1);
    }
  }

  var apiURL = isParam ? "".concat(_constants__WEBPACK_IMPORTED_MODULE_21__.API_CONTENT_URL, "?").concat(searchParams.toString()) + (0,_js_Filter__WEBPACK_IMPORTED_MODULE_17__.isPmVar)('&', true) + (0,_js_Filter__WEBPACK_IMPORTED_MODULE_17__.initiateCheckbox)(concat) : _constants__WEBPACK_IMPORTED_MODULE_21__.API_CONTENT_URL + (0,_js_Filter__WEBPACK_IMPORTED_MODULE_17__.isPmVar)('?', true) + (0,_js_Filter__WEBPACK_IMPORTED_MODULE_17__.initiateCheckbox)(concat);
  initiateListing(apiURL, false);
  (0,_js_Filter__WEBPACK_IMPORTED_MODULE_17__.initiateThematics)();

  if (isParam) {
    (0,_js_Filter__WEBPACK_IMPORTED_MODULE_17__.initiateSubThematics)();
  }

  AtClick();
}); // AT Click

function AtClick() {
  document.querySelectorAll('.content-list a, .content-list button').forEach(function (item) {
    item.addEventListener('click', function () {
      var moduleName = item.closest('[data-module]');
      var moduleChildName = item.closest('[data-child-module]');
      var moduleConcatName = item.closest('[data-concat-module]'); // AT Tag Call

      var jsonAt = {
        // For name, check if it needs to concat specific wording with data
        name: moduleConcatName ? moduleConcatName.getAttribute('data-concat-module') + '_' + item.innerText : item.innerText,
        // For chapter2, use data from Child Module if exists otherwise use Module wording else empty (no set chapter2)
        chapter2: moduleChildName ? moduleChildName.getAttribute('data-child-module') : moduleName ? moduleName.getAttribute('data-module') : '',
        level2: _constants__WEBPACK_IMPORTED_MODULE_21__.LEVEL_AT
      };
      new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_13__["default"]().atTagsCallClick(JSON.stringify(jsonAt), this);
    });
  });
} // Load TAC


window.addEventListener('tarteaucitron_loaded', function () {
  if (tarteaucitron.state.atinternetcnil && typeof tag !== 'undefined') {
    var jsonAt = {
      name: document.querySelector('h1').innerText,
      level2: _constants__WEBPACK_IMPORTED_MODULE_21__.LEVEL_AT
    };
    var customVars = {
      site: {
        1: 'fr',
        6: 'page-liste',
        15: window.location.href
      }
    };
    new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_13__["default"]().atTagsCallPage(JSON.stringify(jsonAt), customVars);
  }
});

/***/ }),

/***/ "./assets/content/js/Filter.js":
/*!*************************************!*\
  !*** ./assets/content/js/Filter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initiateFilter": () => (/* binding */ initiateFilter),
/* harmony export */   "initiateThematics": () => (/* binding */ initiateThematics),
/* harmony export */   "initiateSubThematics": () => (/* binding */ initiateSubThematics),
/* harmony export */   "initiateCheckbox": () => (/* binding */ initiateCheckbox),
/* harmony export */   "updateResultCount": () => (/* binding */ updateResultCount),
/* harmony export */   "isPmVar": () => (/* binding */ isPmVar)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _app_js_AtTags__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../app/js/AtTags */ "./assets/app/js/AtTags.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../constants */ "./assets/content/constants.js");
/* harmony import */ var _app_js_Api__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../app/js/Api */ "./assets/app/js/Api.js");
/* harmony import */ var _app_js_Filters__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../app/js/Filters */ "./assets/app/js/Filters.js");
/* harmony import */ var _app_js_Constants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../app/js/Constants */ "./assets/app/js/Constants.js");
/* harmony import */ var _index_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../index-list */ "./assets/content/index-list.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























var resetBtn = document.querySelector('.filter-reset');
var openBtn = document.querySelector('.filter-open');
var closeBtn = document.querySelector('.filter-close');
var submitBtn = document.querySelector('.submitFilters');
var thematicSelect = document.querySelector('#select-thematic');
var subthematicSelect = document.querySelector('#select-sub-thematic');
var thematicCounter = document.querySelector('.thematic-counter');
var filterFields = document.querySelectorAll('.content-filter');
var resultCount = document.querySelector('.result-count');
var checkboxes = document.querySelectorAll('#accordion-content-document input');
var documentCounter = document.querySelector('.document-counter');
var isTag = document.querySelector('.tags-place');
var tagFlagClickAT = false;
function initiateFilter(callBack) {
  var _this = this;

  updateFilters();
  updateOpenBtn();
  openBtn.addEventListener('click', function () {
    displayMobileFilter();
    updateFilters();
  });
  closeBtn.addEventListener('click', function () {
    displayMobileFilter(false);
  });
  submitBtn.addEventListener('click', function () {
    deleteAllTags();
    displayMobileFilter(false);
    submitFields(callBack, true);
    updateOpenBtn();
    checkboxes.forEach(function (item) {
      if (item.checked) {
        addTag(item, item.parentNode.querySelector('label').textContent);
      }
    });
    deleteTag(thematicSelect);

    if (thematicSelect.value !== '') {
      addTag(thematicSelect, thematicSelect.options[thematicSelect.selectedIndex].text);
    }

    deleteTag(subthematicSelect);

    if (subthematicSelect.value !== '') {
      addTag(subthematicSelect, subthematicSelect.options[subthematicSelect.selectedIndex].text);
    } // AT call


    var jsonAt = {
      name: 'recherche_afficher',
      chapter2: submitBtn.closest('[data-module]').getAttribute('data-module'),
      level2: _constants__WEBPACK_IMPORTED_MODULE_19__.LEVEL_AT
    };
    new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_18__["default"]().atTagsCallClick(JSON.stringify(jsonAt), _this);
  });
  resetBtn.addEventListener('click', function () {
    resetFilters();
    submitFields(callBack);
  });
  thematicSelect.addEventListener('change', function (event) {
    if (event.target.value !== '') {
      initiateSubThematics();
    }

    updateSubThematicFilter();
    updateThematicCounter();
    submitFields(callBack, false, 'thematic');
  });
  subthematicSelect.addEventListener('change', function () {
    updateThematicCounter();
    (0,_app_js_Filters__WEBPACK_IMPORTED_MODULE_21__.removeUrlParameter)('page');
    submitFields(callBack, false, 'subthematic');
  });

  if (checkboxes.length) {
    var moduleName = document.querySelector('#checkboxes-document').closest('[data-module]');
    checkboxes.forEach(function (item) {
      item.addEventListener('click', function () {
        var labelText = item.parentNode.querySelector('label').textContent.trim();
        updateCheckboxCounter();
        (0,_app_js_Filters__WEBPACK_IMPORTED_MODULE_21__.removeUrlParameter)('page');
        submitFields(callBack);

        if (window.innerWidth > _app_js_Constants__WEBPACK_IMPORTED_MODULE_22__.SCREEN_SWITCH) {
          if (item.checked) {
            addTag(item, labelText);
          } else {
            deleteTag(item, labelText);
          }
        } // AT


        if (!tagFlagClickAT) {
          var atCheckbox = 'recherche_';
          var jsonAt = {
            name: item.checked ? atCheckbox + labelText : atCheckbox + 'decoche_' + labelText,
            level2: _constants__WEBPACK_IMPORTED_MODULE_19__.LEVEL_AT,
            chapter2: moduleName.getAttribute('data-module'),
            chapter3: 'type_de_publication'
          };
          new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_18__["default"]().atTagsCallClick(JSON.stringify(jsonAt), item);
        }

        tagFlagClickAT = false;
      });
    });
  }
}
function initiateThematics() {
  var THEMATIC_URL = "".concat(_constants__WEBPACK_IMPORTED_MODULE_19__.CONTENT_THEMATICS_URL, "?exists[parent]=false") + isPmVar('&', false) + initiateCheckbox('&', true);
  new _app_js_Api__WEBPACK_IMPORTED_MODULE_20__["default"]().get(THEMATIC_URL).then(function (dataContent) {
    if (dataContent && dataContent['hydra:member'].length > 0) {
      initiateSelect(dataContent, thematicSelect, {
        text: 'Toutes les thématiques'
      });
      initiateFilter(_index_list__WEBPACK_IMPORTED_MODULE_23__.initiateListing);
    }

    if (thematicSelect.value) {
      initiateSubThematics();
    }

    var moduleName = document.querySelector('#select-thematic').closest('[data-module]'); // AT Tag Call

    var jsonAt = {
      chapter2: moduleName.getAttribute('data-module'),
      level2: _constants__WEBPACK_IMPORTED_MODULE_19__.LEVEL_AT
    };
    document.querySelector('#select-thematic').addEventListener('change', function () {
      jsonAt = _objectSpread(_objectSpread({}, jsonAt), {}, {
        name: 'recherche_' + this.options[this.selectedIndex].innerText,
        chapter3: 'thematique'
      });
      new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_18__["default"]().atTagsCallClick(JSON.stringify(jsonAt), this);
    });
    document.querySelector('#select-sub-thematic').addEventListener('change', function () {
      jsonAt = _objectSpread(_objectSpread({}, jsonAt), {}, {
        name: 'recherche_' + document.querySelector('#select-thematic').options[document.querySelector('#select-thematic').selectedIndex].innerText.trim() + '_//_' + this.options[this.selectedIndex].innerText.trim(),
        chapter3: 'thematique'
      });
      new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_18__["default"]().atTagsCallClick(JSON.stringify(jsonAt), this);
    });
  });
}
function initiateSubThematics(subthematic) {
  var thematic = thematicSelect.value;

  if (thematic || subthematic) {
    var SUB_THEMATIC_URL = "".concat(_constants__WEBPACK_IMPORTED_MODULE_19__.CONTENT_SUBTHEMATICS_URL, "?parent=").concat(thematic) + isPmVar('&', false) + initiateCheckbox('&', true);
    new _app_js_Api__WEBPACK_IMPORTED_MODULE_20__["default"]().get(SUB_THEMATIC_URL).then(function (dataContent) {
      if (dataContent && dataContent['hydra:member'].length > 0) {
        initiateSelect(dataContent, subthematicSelect, {
          text: 'Toutes les sous-thématiques'
        });

        if (subthematic && subthematicSelect.getElementsByTagName(subthematic)) {
          subthematicSelect.value = subthematic;
          addTag(subthematicSelect, subthematicSelect.options[subthematicSelect.selectedIndex].text);
          subthematicSelect.removeAttribute('disabled');
          updateThematicCounter();
        }
      }
    });
  }
}
function initiateCheckbox(concat, forceReload) {
  var searchParams = (0,_app_js_Filters__WEBPACK_IMPORTED_MODULE_21__.getSearchParams)();
  var checkbox = [];

  if (!searchParams.has('content_type[]') || forceReload) {
    checkboxes.forEach(function (item) {
      checkbox.push(item.dataset.document);
    });
  }

  var docApiCall = checkbox.length ? concat + checkbox.join('&') : '';
  return docApiCall;
}
function updateResultCount(totalItems) {
  if (totalItems && totalItems > 0) {
    resultCount.setAttribute('total', totalItems);
    resultCount.innerHTML = "".concat(totalItems, " r\xE9sultat").concat(totalItems > 1 ? 's' : '');
  } else {
    resultCount.innerHTML = 'Aucun résultat pour les filtres sélectionnés';
    resultCount.setAttribute('total', 0);
    submitBtn.value = 'Aucun résultat';
  }
}
function isPmVar(concat, check) {
  var isList = concat + _constants__WEBPACK_IMPORTED_MODULE_19__.IS_PM_NEWS + '=' + _constants__WEBPACK_IMPORTED_MODULE_19__.TYPE_LIST_BOOLEAN;

  if (check) {
    return _constants__WEBPACK_IMPORTED_MODULE_19__.TYPE_LIST_BOOLEAN !== null ? isList : '';
  } else {
    return _constants__WEBPACK_IMPORTED_MODULE_19__.TYPE_LIST_BOOLEAN ? isList : '';
  }
}

function createOption(text, value) {
  var option = document.createElement('option');
  option.innerText = text;
  option.value = value || '';
  option.name = value || '';
  return option;
}

function displayMobileFilter() {
  var open = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var filtersCol = document.querySelector('.col-filters');
  var blockScroll = document.querySelector('html');

  if (open) {
    filtersCol.classList.add('active');
    blockScroll.classList.add('blockScroll');
    updateMobileSubmitCount(resultCount.getAttribute('total'));
    closeBtn.focus();
  } else {
    filtersCol.classList.remove('active');
    blockScroll.classList.remove('blockScroll');
    openBtn.focus();
  }
}

function getFieldsCount() {
  var validFields = {};
  filterFields.forEach(function (filter) {
    if (filter.value !== '') {
      validFields[filter.name] = filter.value;
    }
  });
  return Object.keys(validFields).length;
}

function getCheckboxesCount() {
  var checkFields = {};
  checkboxes.forEach(function (item) {
    if (item.checked) {
      checkFields[item.name] = item.id;
    }
  });
  return Object.keys(checkFields).length;
}

function initiateSelect(dataContent, select, defaultOption) {
  select.innerHTML = '';
  select.appendChild(createOption(defaultOption.text));
  dataContent['hydra:member'].forEach(function (thematic) {
    select.appendChild(createOption(thematic.name, "".concat(_constants__WEBPACK_IMPORTED_MODULE_19__.CONTENT_THEMATICS_URL, "/").concat(thematic.id)));
  });
}

function resetFilters() {
  thematicSelect.value = '';
  subthematicSelect.value = '';
  subthematicSelect.setAttribute('disabled', true);
  updateThematicCounter();

  if (checkboxes.length) {
    checkboxes.forEach(function (item) {
      if (item.checked) {
        item.checked = false;
      }
    });
    updateCheckboxCounter();
  }

  if (window.innerWidth > _app_js_Constants__WEBPACK_IMPORTED_MODULE_22__.SCREEN_SWITCH) {
    deleteAllTags();
  }
}

function submitFields(callBack, forceReload, tagThematic) {
  var params = '';
  var concat = '?';
  filterFields.forEach(function (filter) {
    if (filter.value !== '') {
      if (filter.name === 'subthematic') {
        params = (0,_app_js_Filters__WEBPACK_IMPORTED_MODULE_21__.replaceURL)(params, 'thematic', filter.value);
      } else {
        params = (0,_app_js_Filters__WEBPACK_IMPORTED_MODULE_21__.appendURL)(params, filter.name, filter.value);
      }

      concat = '&';
    }
  });
  var isCheck = false;
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      var splitDocData = checkbox.dataset.document.split('=');
      params = (0,_app_js_Filters__WEBPACK_IMPORTED_MODULE_21__.appendURL)(params, splitDocData.shift(), splitDocData.pop());
      isCheck = true;
    }
  });

  if (!isCheck) {
    params += initiateCheckbox(params === '' ? '?' : '&', true);
  }

  if (window.innerWidth > _app_js_Constants__WEBPACK_IMPORTED_MODULE_22__.SCREEN_SWITCH || forceReload) {
    filterFields.forEach(function (filter) {
      if (filter.value !== '') {
        if (filter.name === 'subthematic') {
          (0,_app_js_Filters__WEBPACK_IMPORTED_MODULE_21__.insertUrlParam)('thematic', filter.value);
        } else {
          (0,_app_js_Filters__WEBPACK_IMPORTED_MODULE_21__.insertUrlParam)(filter.name, filter.value);
        }
      } else {
        (0,_app_js_Filters__WEBPACK_IMPORTED_MODULE_21__.removeUrlParameter)(filter.name);
        (0,_app_js_Filters__WEBPACK_IMPORTED_MODULE_21__.removeUrlParameter)('page');
      }
    });

    if (checkboxes.length) {
      (0,_app_js_Filters__WEBPACK_IMPORTED_MODULE_21__.checkboxParameter)('content_type[]', checkboxes);
    }

    callBack(_constants__WEBPACK_IMPORTED_MODULE_19__.API_CONTENT_URL + params + isPmVar(concat, true), true); // Reinit tags

    if (tagThematic && tagThematic === 'thematic') {
      deleteTag(subthematicSelect);
      deleteTag(thematicSelect);

      if (thematicSelect.value !== '') {
        addTag(thematicSelect, thematicSelect.options[thematicSelect.selectedIndex].text);
      }
    }

    if (tagThematic && tagThematic === 'subthematic') {
      deleteTag(subthematicSelect);

      if (subthematicSelect.value !== '') {
        addTag(subthematicSelect, subthematicSelect.options[subthematicSelect.selectedIndex].text);
      }
    }
  } else {
    new _app_js_Api__WEBPACK_IMPORTED_MODULE_20__["default"]().get(_constants__WEBPACK_IMPORTED_MODULE_19__.API_CONTENT_URL + params + isPmVar(concat, true)).then(function (dataContent) {
      updateMobileSubmitCount(dataContent['hydra:totalItems']);
    });
  }
}

function updateFilters() {
  var searchParams = (0,_app_js_Filters__WEBPACK_IMPORTED_MODULE_21__.getSearchParams)();
  resetFilters();
  deleteAllTags();

  if (Array.from(searchParams).length && searchParams.has('thematic')) {
    var ALL_THEMATICS_URL = "".concat(_constants__WEBPACK_IMPORTED_MODULE_19__.CONTENT_THEMATICS_URL, "?all=true") + isPmVar('&', false) + initiateCheckbox('&', true);
    new _app_js_Api__WEBPACK_IMPORTED_MODULE_20__["default"]().get(ALL_THEMATICS_URL).then(function (dataContent) {
      if (dataContent && dataContent['hydra:member'].length > 0) {
        var thematicValue = searchParams.get('thematic');
        var thematicId = thematicValue.substring(_constants__WEBPACK_IMPORTED_MODULE_19__.CONTENT_THEMATICS_URL.length + 1);
        dataContent['hydra:member'].forEach(function (item) {
          if (item.id === parseInt(thematicId) && item.parent) {
            thematicSelect.value = "".concat(_constants__WEBPACK_IMPORTED_MODULE_19__.CONTENT_THEMATICS_URL, "/").concat(item.parent.id);
            initiateSubThematics("".concat(_constants__WEBPACK_IMPORTED_MODULE_19__.CONTENT_THEMATICS_URL, "/").concat(item.id));
          }
        });
        addTag(thematicSelect, thematicSelect.options[thematicSelect.selectedIndex].text);
      }
    });
    searchParams.forEach(function (value, key) {
      var filter = document.querySelector("[name=\"".concat(key, "\"]"));
      var option = filter && filter.querySelector("option[value=\"".concat(value, "\"]"));

      if (filter && option && value) {
        filter.value = value;
        updateSubThematicFilter();
        updateThematicCounter();
      }
    });
  }

  if (Array.from(searchParams).length && searchParams.has('content_type[]')) {
    searchParams.forEach(function (value, key) {
      checkboxes.forEach(function (item) {
        var checked = item.dataset.document === key + '=' + value;

        if (checked) {
          item.checked = true;
          addTag(item, item.parentNode.querySelector('label').textContent);
        }
      });
    });
    updateCheckboxCounter();
  }
}

function updateMobileSubmitCount(totalItems) {
  if (totalItems > 0) {
    submitBtn.value = "Afficher le".concat(totalItems > 1 ? 's ' + totalItems : '', " r\xE9sultat").concat(totalItems > 1 ? 's' : '');
  } else if (totalItems === 0) {
    submitBtn.value = 'Aucun résultat';
  }
}

function updateOpenBtn() {
  var fieldsCount = getFieldsCount();
  var checkboxesCount = getCheckboxesCount();

  if (fieldsCount || checkboxesCount) {
    openBtn.classList.add('active');
  } else {
    openBtn.classList.remove('active');
  }
}

function updateSubThematicFilter() {
  subthematicSelect.value = '';

  if (thematicSelect.value === '') {
    subthematicSelect.setAttribute('disabled', true);
  } else {
    subthematicSelect.removeAttribute('disabled');
  }
}

function updateThematicCounter() {
  var fieldsCount = getFieldsCount();
  var checkboxesCount = getCheckboxesCount();

  if (fieldsCount) {
    thematicCounter.innerHTML = "".concat(fieldsCount, " s\xE9lectionn\xE9e").concat(fieldsCount > 1 ? 's' : '');
    resetBtn.classList.add('active');
  } else {
    thematicCounter.innerHTML = '';
  }

  if (!fieldsCount && !checkboxesCount) {
    resetBtn.classList.remove('active');
  }
}

function updateCheckboxCounter() {
  var checkboxesCount = getCheckboxesCount();
  var fieldsCount = getFieldsCount();

  if (checkboxesCount) {
    documentCounter.innerHTML = "".concat(checkboxesCount, " s\xE9lectionn\xE9").concat(checkboxesCount > 1 ? 's' : '');
    resetBtn.classList.add('active');
  } else {
    documentCounter.innerHTML = '';
  }

  if (!fieldsCount && !checkboxesCount) {
    resetBtn.classList.remove('active');
  }
}

function addTag(elt, labelText) {
  var li = document.createElement('li');
  var documentType = elt.dataset.document ? elt.dataset.document : elt.id;
  li.classList.add('fr-mb-2w');
  var button = document.createElement('button');
  button.classList.add('fr-tag', 'fr-tag--sm', 'fr-my-0', 'fr-tag--dismiss');
  button.setAttribute('aria-label', 'Retirer ' + labelText.trim());
  button.setAttribute('data-document', documentType);
  button.textContent = labelText.trim();
  button.addEventListener('click', function (e) {
    tagFlagClickAT = true; // AT

    var jsonAt = {
      name: 'decoche_' + e.currentTarget.textContent,
      level2: _constants__WEBPACK_IMPORTED_MODULE_19__.LEVEL_AT,
      chapter2: 'filtre',
      chapter3: 'tag'
    };
    new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_18__["default"]().atTagsCallClick(JSON.stringify(jsonAt), this);
    removeOnClickTag(elt);
  });
  li.appendChild(button);

  if (isTag.querySelector('ul')) {
    isTag.querySelector('ul').appendChild(li);
  } else {
    var ul = document.createElement('ul');
    ul.classList.add('fr-tags-group', 'fr-pt-1w', 'fr-mb-2w');
    ul.appendChild(li);
    isTag.appendChild(ul);
  }
}

function removeOnClickTag(elt) {
  deleteTag(elt); // For checkboxes deletion

  checkboxes.forEach(function (item) {
    if (item.dataset.document === elt.dataset.document) {
      item.click();
    }
  }); // For thematics deletion

  if (elt.id) {
    var e = new Event('change');
    elt.value = '';
    elt.dispatchEvent(e);
  } // Auto click on mobile submit button to retrieve results without open filter menu - only for click on tag


  if (window.innerWidth < _app_js_Constants__WEBPACK_IMPORTED_MODULE_22__.SCREEN_SWITCH) {
    submitBtn.click();
  }
}

function deleteTag(elt) {
  isTag.querySelectorAll('li').forEach(function (item) {
    var documentType = elt.dataset.document ? elt.dataset.document : elt.id;

    if (item.querySelector('button').dataset.document === documentType) {
      item.remove();
    }
  });

  if (!isTag.querySelectorAll('ul li').length) {
    isTag.innerHTML = '';
  }
}

function deleteAllTags() {
  if (isTag.querySelectorAll('ul li').length) {
    isTag.innerHTML = '';
  }
}

/***/ }),

/***/ "./assets/content/js/List.js":
/*!***********************************!*\
  !*** ./assets/content/js/List.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _generate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generate */ "./assets/content/js/generate.js");






function List(result) {
  function generateMediaURL(mediaURL) {
    return "http://bo-pmv7.docker" + mediaURL;
  }

  function formatDate(date) {
    return moment__WEBPACK_IMPORTED_MODULE_4___default()(date).format('DD/MM/YYYY');
  }

  function getMedia() {
    if (result.media) {
      return "\n                <div class=\"fr-card__img\">\n                    <img class=\"fr-responsive-img\" src=\"".concat(generateMediaURL(result.media.url), "\" alt=\"").concat(result.media.description ? result.media.description : '', "\" />\n                </div>\n            ");
    }

    return '';
  }

  function resultType() {
    if (result.contentType !== 'article') {
      return "<span class=\"fr-mr-2v\">".concat((0,_generate__WEBPACK_IMPORTED_MODULE_5__.generateWording)(result.contentType), "</span>");
    }

    return '';
  }

  return "\n    <div class=\"tile fr-col-12 fr-py-0 fr-mb-3w\" data-module=\"cards\">\n        <div class=\"fr-card fr-enlarge-link fr-card--horizontal\">\n            <div class=\"fr-card__body\">\n                <h4 class=\"fr-card__title fr-text-title--blue-france fr-mb-2w\">\n                    <a href=\"".concat((0,_generate__WEBPACK_IMPORTED_MODULE_5__.generateSlug)(result.slug), "\" class=\"fr-card__link\" target=\"_self\">").concat(result.shortTitle || result.title, "</a>\n                </h4>\n                <p class=\"fr-card__desc fr-mb-0\">\n                    Publi\xE9 ").concat(formatDate(result.publishedAt), "\n                </p>\n                <p class=\"fr-card__detail fr-mb-1w\">\n                ").concat(resultType(), " ").concat(result.mainThematic.parent.name, "\n                </p>\n            </div>\n            ").concat(getMedia(), "           \n        </div>\n    </div>");
}

/***/ }),

/***/ "./assets/content/js/Pager.js":
/*!************************************!*\
  !*** ./assets/content/js/Pager.js ***!
  \************************************/
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
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_js_Filters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app/js/Filters */ "./assets/app/js/Filters.js");
/* harmony import */ var _app_js_AtTags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app/js/AtTags */ "./assets/app/js/AtTags.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants */ "./assets/content/constants.js");










function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Pager = /*#__PURE__*/function () {
  function Pager(currentPage) {
    _classCallCheck(this, Pager);

    this.currentPage = parseInt(currentPage['hydra:view']['@id'].split('=').pop());
    this.firstPage = parseInt(currentPage['hydra:view']['hydra:first'].split('=').pop());
    this.lastPage = parseInt(currentPage['hydra:view']['hydra:last'].split('=').pop());
    this.nav = document.createElement('nav');
    this.nav.classList.add('fr-pagination');
    this.nav.setAttribute('role', 'navigation');
    this.nav.setAttribute('aria-label', 'Pagination');
    this.ul = document.createElement('ul');
    this.filterParams = (0,_app_js_Filters__WEBPACK_IMPORTED_MODULE_9__.getSearchParams)();
  } // TODO refacto construcPager & createPager Methods


  _createClass(Pager, [{
    key: "constructPager",
    value: function constructPager(pager, currentPage, css, wording) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      var pagerIndex = currentPage + 1;
      a.innerText = a.title = wording;
      a.classList.add('fr-pagination__link', 'fr-mx-0', 'fr-pagination__link--' + css);

      if (css === 'prev') {
        pagerIndex = currentPage - 1;
      }

      if (['first', 'last'].includes(css)) {
        pagerIndex = pager;
      } else {
        a.classList.add('fr-pagination__link--lg-label');
      }

      if (currentPage !== pager) {
        if (this.filterParams && this.filterParams.has('page')) {
          this.filterParams["delete"]('page');
        }

        a.href = "?page=".concat(pagerIndex).concat(this.filterParams.toString() ? "&".concat(this.filterParams.toString()) : '');
        this.ATclick(a);
      }

      li.appendChild(a);
      return li;
    }
  }, {
    key: "createPager",
    value: function createPager(currentPage, index, markup) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.classList.add('fr-pagination__link');

      if (index === '...') {
        a.classList.add('fr-px-0', 'fr-mx-0', 'dotText');
      }

      a.title = 'Page ' + index;
      a.innerText = index;

      if (markup && index !== currentPage) {
        if (this.filterParams && this.filterParams.has('page')) {
          this.filterParams["delete"]('page');
        }

        a.href = "?page=".concat(index).concat(this.filterParams.toString() ? "&".concat(this.filterParams.toString()) : '');
        this.ATclick(a);
      }

      if (index === currentPage) {
        a.setAttribute('aria-current', 'page');
      }

      li.appendChild(a);
      this.ul.appendChild(li);
      this.nav.appendChild(this.ul);
    }
  }, {
    key: "ATclick",
    value: function ATclick(a) {
      a.addEventListener('click', function () {
        var jsonAt = {
          name: document.querySelector('h1').innerText + '_page=' + a.innerText,
          chapter2: 'pagination',
          level2: _constants__WEBPACK_IMPORTED_MODULE_11__.LEVEL_AT
        };
        new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_10__["default"]().atTagsCallClick(JSON.stringify(jsonAt), this);
        var jsonAtPage = {
          name: document.querySelector('h1').innerText,
          chapter1: document.querySelector('h1').innerText + '_page=' + a.innerText,
          level2: _constants__WEBPACK_IMPORTED_MODULE_11__.LEVEL_AT
        };
        var customVars = {
          site: {
            1: 'fr',
            6: 'page-liste',
            15: window.location.href
          }
        };
        new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_10__["default"]().atTagsCallPage(JSON.stringify(jsonAtPage), customVars);
      });
    }
  }, {
    key: "render",
    value: function render() {
      this.ul.classList.add('fr-pagination__list');
      var previousPager = this.constructPager(1, this.currentPage, 'prev', 'Précédente');
      this.ul.appendChild(previousPager);
      this.createPager(this.currentPage, 1, true);

      for (var i = 2; i <= this.lastPage - 1; i++) {
        var firstMax = 3;
        var lastMax = firstMax - 2; // Display max 4 pages inline

        if (this.lastPage < 5) {
          this.createPager(this.currentPage, i, true);
        } else {
          // First numbers
          if (i <= firstMax && this.currentPage <= firstMax) {
            this.createPager(this.currentPage, i, true);

            if (i === firstMax) {
              this.createPager(this.currentPage, i + 1, true);
              this.createPager(this.currentPage, '...', false);
            } // Last numbers

          } else if (i >= this.lastPage - lastMax && this.currentPage >= this.lastPage - lastMax) {
            if (i === this.lastPage - lastMax) {
              this.createPager(this.currentPage, '...', false);
              this.createPager(this.currentPage, i - 1, true);
            }

            this.createPager(this.currentPage, i, true); // Between numbers
          } else if (i === this.currentPage) {
            this.createPager(this.currentPage, '...', false);
            this.createPager(this.currentPage, i - 1, true);
            this.createPager(this.currentPage, i, false);
            this.createPager(this.currentPage, i + 1, true);
            this.createPager(this.currentPage, '...', false);
          }
        }
      }

      this.createPager(this.currentPage, this.lastPage, true);
      var nextPager = this.constructPager(this.lastPage, this.currentPage, 'next', 'Suivante');
      this.ul.appendChild(nextPager);
      this.nav.appendChild(this.ul);
      return this.nav;
    }
  }]);

  return Pager;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pager);

/***/ }),

/***/ "./assets/content/js/generate.js":
/*!***************************************!*\
  !*** ./assets/content/js/generate.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateSlug": () => (/* binding */ generateSlug),
/* harmony export */   "generateWording": () => (/* binding */ generateWording)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















function generateSlug(text) {
  var arrayDataContent = {
    '/article': '/actualite',
    '/report': '/rapport',
    '/speech': '/discours',
    '/press_release': '/communique',
    '/press_pack': '/dossier-de-presse',
    '/editors_note': '/note-aux-redactions'
  };
  return arrayText(text, arrayDataContent);
}
function generateWording(text) {
  var arrayDataContent = {
    report: 'rapport',
    speech: 'discours',
    press_release: 'communiqué',
    press_pack: 'dossier de presse',
    editors_note: 'note aux redactions'
  };
  return arrayText(text, arrayDataContent);
}

function arrayText(word, arrayDataContent) {
  for (var _i = 0, _Object$entries = Object.entries(arrayDataContent); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (word.includes(key)) {
      return word.replace(key, value);
    }
  }
}

/***/ }),

/***/ "./assets/content/css/filter.scss":
/*!****************************************!*\
  !*** ./assets/content/css/filter.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/content/css/main-list.scss":
/*!*******************************************!*\
  !*** ./assets/content/css/main-list.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/content/css/pager.scss":
/*!***************************************!*\
  !*** ./assets/content/css/pager.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--b791ff","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-60d642","vendors-node_modules_core-js_modules_es_object_define-properties_js-node_modules_core-js_modu-292aad","vendors-node_modules_axios_index_js-node_modules_regenerator-runtime_runtime_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-853eca","assets_app_js_AtTags_js-assets_app_js_Constants_js-node_modules_moment_locale_sync_recursive_"], () => (__webpack_exec__("./assets/content/index-list.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQXRCLEVBQTRCO0FBQy9CLE1BQU00RyxnQkFBZ0IsR0FBRztBQUNyQixnQkFBWSxZQURTO0FBRXJCLGVBQVcsVUFGVTtBQUdyQixlQUFXLFdBSFU7QUFJckIsc0JBQWtCLGFBSkc7QUFLckIsbUJBQWUsb0JBTE07QUFNckIscUJBQWlCO0FBTkksR0FBekI7QUFRQSxTQUFPQyxTQUFTLENBQUM3RyxJQUFELEVBQU80RyxnQkFBUCxDQUFoQjtBQUNIO0FBRU0sU0FBU3pDLGVBQVQsQ0FBeUJuRSxJQUF6QixFQUErQjtBQUNsQyxNQUFNNEcsZ0JBQWdCLEdBQUc7QUFDckJFLElBQUFBLE1BQU0sRUFBRSxTQURhO0FBRXJCQyxJQUFBQSxNQUFNLEVBQUUsVUFGYTtBQUdyQkMsSUFBQUEsYUFBYSxFQUFFLFlBSE07QUFJckJDLElBQUFBLFVBQVUsRUFBRSxtQkFKUztBQUtyQkMsSUFBQUEsWUFBWSxFQUFFO0FBTE8sR0FBekI7QUFPQSxTQUFPTCxTQUFTLENBQUM3RyxJQUFELEVBQU80RyxnQkFBUCxDQUFoQjtBQUNIOztBQUVELFNBQVNDLFNBQVQsQ0FBbUJNLElBQW5CLEVBQXlCUCxnQkFBekIsRUFBMkM7QUFDdkMscUNBQTJCckUsTUFBTSxDQUFDNkUsT0FBUCxDQUFlUixnQkFBZixDQUEzQixxQ0FBNkQ7QUFBeEQ7QUFBQSxRQUFPOU8sR0FBUDtBQUFBLFFBQVlDLEtBQVo7O0FBQ0QsUUFBSW9QLElBQUksQ0FBQ3BCLFFBQUwsQ0FBY2pPLEdBQWQsQ0FBSixFQUF3QjtBQUNwQixhQUFPcVAsSUFBSSxDQUFDRSxPQUFMLENBQWF2UCxHQUFiLEVBQWtCQyxLQUFsQixDQUFQO0FBQ0g7QUFDSjtBQUNKOzs7Ozs7Ozs7OztBQzdCRDs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9GaWx0ZXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250ZW50L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udGVudC9pbmRleC1saXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250ZW50L2pzL0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udGVudC9qcy9MaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250ZW50L2pzL1BhZ2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250ZW50L2pzL2dlbmVyYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250ZW50L2Nzcy9maWx0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udGVudC9jc3MvbWFpbi1saXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRlbnQvY3NzL3BhZ2VyLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBjbGFzcyBwcm92aWRlciBhIGh0dHAgY2xpZW50XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xyXG4gICAgYXN5bmMgZ2V0KHBhdGgsIG91dFNpdGUpIHtcclxuICAgICAgICBsZXQgYXBpQ2FsbCA9IHByb2Nlc3MuZW52LkFQSV9VUkw7XHJcbiAgICAgICAgaWYgKG91dFNpdGUpIHtcclxuICAgICAgICAgICAgYXBpQ2FsbCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXdhaXQgQXhpb3MuZ2V0KGFwaUNhbGwgKyBwYXRoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEBUT0RPIG1hbmFnZSBlcnJvclxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VycmV1ciA6Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJldXIgOicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVQYXJlbnQoY3VycmVudFNlbGVjdG9yLCBwYXJlbnRTZWxlY3RvciwgYWN0aXZlID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudFNlbGVjdG9yLmNsb3Nlc3QocGFyZW50U2VsZWN0b3IpO1xyXG4gICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgIGFjdGl2ZVxyXG4gICAgICAgICAgICA/IHBhcmVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICA6IHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFVSTCh1cmwsIGtleSwgdmFsdWUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgdXJsICtcclxuICAgICAgICAodXJsLmluZGV4T2YoJz8nKSA+PSAwID8gJyYnIDogJz8nKSArXHJcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgK1xyXG4gICAgICAgICc9JyArXHJcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKVxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VVUkwodXJsLCBrZXksIHZhbHVlKSB7XHJcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybCk7XHJcbiAgICBzZWFyY2hQYXJhbXMuZGVsZXRlKGtleSk7XHJcbiAgICBzZWFyY2hQYXJhbXMuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIGA/JHtzZWFyY2hQYXJhbXMudG9TdHJpbmcoKX1gO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VhcmNoUGFyYW1zKCkge1xyXG4gICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRVcmxQYXJhbShrZXksIHZhbHVlKSB7XHJcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBnZXRTZWFyY2hQYXJhbXMoKTtcclxuICAgIHNlYXJjaFBhcmFtcy5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICBjb25zdCBuZXd1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgICB9PyR7c2VhcmNoUGFyYW1zLnRvU3RyaW5nKCl9YDtcclxuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7cGF0aDogbmV3dXJsfSwgJycsIG5ld3VybCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVVcmxQYXJhbWV0ZXIocGFyYW1LZXkpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoY3VycmVudFVybCk7XHJcbiAgICB1cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZShwYXJhbUtleSk7XHJcbiAgICBjb25zdCBuZXdVcmwgPSB1cmwuaHJlZjtcclxuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7cGF0aDogbmV3VXJsfSwgJycsIG5ld1VybCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja2JveFBhcmFtZXRlcihwYXJhbUtleSwgZWx0KSB7XHJcbiAgICBjb25zdCBjdXJyZW50VXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGN1cnJlbnRVcmwpO1xyXG4gICAgLy8gRW1wdHkgYWxsIHRoZSBrZXlzIHNldCBiZWZvcmUgYXBwbHkgbmV3IG9uZXNcclxuICAgIHVybC5zZWFyY2hQYXJhbXMuZGVsZXRlKHBhcmFtS2V5KTtcclxuICAgIGZvciAoY29uc3QgcmVzdWx0VmFsdWUgb2YgZWx0KSB7XHJcbiAgICAgICAgY29uc3Qgc3BsaXREb2NEYXRhID0gcmVzdWx0VmFsdWUuZGF0YXNldC5kb2N1bWVudC5zcGxpdCgnPScpO1xyXG4gICAgICAgIGlmIChyZXN1bHRWYWx1ZS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKHNwbGl0RG9jRGF0YS5zaGlmdCgpLCBzcGxpdERvY0RhdGEucG9wKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG5ld1VybCA9IHVybC5ocmVmO1xyXG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtwYXRoOiBuZXdVcmx9LCAnJywgbmV3VXJsKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgVFlQRV9MSVNUX0JPT0xFQU4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1saXN0XScpXHJcbiAgICA/ICEhcGFyc2VJbnQoXHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1saXN0XScpLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0JylcclxuICAgICAgKVxyXG4gICAgOiBudWxsO1xyXG5leHBvcnQgY29uc3QgSVNfUE1fTkVXUyA9ICdpc1BtTmV3cyc7XHJcbmV4cG9ydCBjb25zdCBDT05URU5UX1VSTCA9XHJcbiAgICBUWVBFX0xJU1RfQk9PTEVBTiA9PT0gbnVsbCA/ICcvY29udGVudHMnIDogJy9hcnRpY2xlcyc7XHJcbmV4cG9ydCBjb25zdCBDT05URU5UX1RIRU1BVElDU19VUkwgPSAnL2FwaS9jb250ZW50X3RoZW1hdGljcyc7XHJcbmV4cG9ydCBjb25zdCBDT05URU5UX1NVQlRIRU1BVElDU19VUkwgPSAnL2FwaS9jb250ZW50X3N1YnRoZW1hdGljcyc7XHJcbmV4cG9ydCBjb25zdCBBUElfQ09OVEVOVF9VUkwgPSBwcm9jZXNzLmVudi5BUElfUFJFRklYICsgQ09OVEVOVF9VUkw7XHJcbmV4cG9ydCBjb25zdCBMRVZFTF9BVCA9ICcyJztcclxuIiwiLyogZ2xvYmFsIHRhcnRlYXVjaXRyb24gKi9cclxuXHJcbmltcG9ydCBBdFRhZ3MgZnJvbSAnLi4vYXBwL2pzL0F0VGFncyc7XHJcbmltcG9ydCBBcGkgZnJvbSAnLi4vYXBwL2pzL0FwaSc7XHJcbmltcG9ydCBMaXN0IGZyb20gJy4vanMvTGlzdCc7XHJcbmltcG9ydCBQYWdlciBmcm9tICcuL2pzL1BhZ2VyJztcclxuaW1wb3J0IHtcclxuICAgIGluaXRpYXRlVGhlbWF0aWNzLFxyXG4gICAgaW5pdGlhdGVTdWJUaGVtYXRpY3MsXHJcbiAgICBpbml0aWF0ZUNoZWNrYm94LFxyXG4gICAgdXBkYXRlUmVzdWx0Q291bnQsXHJcbiAgICBpc1BtVmFyLFxyXG59IGZyb20gJy4vanMvRmlsdGVyJztcclxuaW1wb3J0ICcuL2Nzcy9maWx0ZXIuc2Nzcyc7XHJcbmltcG9ydCAnLi9jc3MvbWFpbi1saXN0LnNjc3MnO1xyXG5pbXBvcnQgJy4vY3NzL3BhZ2VyLnNjc3MnO1xyXG5cclxuaW1wb3J0IHtBUElfQ09OVEVOVF9VUkwsIExFVkVMX0FUfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG4vLyBMaXN0aW5nXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWF0ZUxpc3RpbmcoZGF0YVVSTCwgc2Nyb2xsVG9wUGFnZSkge1xyXG4gICAgbmV3IEFwaSgpLmdldChkYXRhVVJMKS50aGVuKChkYXRhQ29udGVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlUb3RhbFJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQtY291bnQnKTtcclxuICAgICAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgIGNvbnN0IHBhZ2VyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlcicpO1xyXG4gICAgICAgIGNvbnN0IGVtcHR5UmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vLXJlc3VsdCcpO1xyXG4gICAgICAgIGlmIChzY3JvbGxUb3BQYWdlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignaHRtbCcpXHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdzdGFydCd9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0JykucXVlcnlTZWxlY3RvckFsbCgnKicpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpXHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnKicpXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgobikgPT4gbi5yZW1vdmUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhQ29udGVudCAmJiBkYXRhQ29udGVudFsnaHlkcmE6bWVtYmVyJ10ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoZW1wdHlSZXN1bHQpIGVtcHR5UmVzdWx0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAvLyBMaXN0XHJcbiAgICAgICAgICAgIGRhdGFDb250ZW50WydoeWRyYTptZW1iZXInXS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgTGlzdChpdGVtKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocGFnZXJXcmFwcGVyLmlubmVySFRNTCkgcGFnZXJXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgZGF0YUNvbnRlbnRbJ2h5ZHJhOnZpZXcnXSAmJlxyXG4gICAgICAgICAgICAgICAgZGF0YUNvbnRlbnRbJ2h5ZHJhOnZpZXcnXVsnaHlkcmE6bGFzdCddXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgLy8gUGFnZXJcclxuICAgICAgICAgICAgICAgIHBhZ2VyV3JhcHBlci5hcHBlbmRDaGlsZChuZXcgUGFnZXIoZGF0YUNvbnRlbnQpLnJlbmRlcigpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbGUgYScpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kdWxlTmFtZSA9IGl0ZW0uY2xvc2VzdCgnW2RhdGEtbW9kdWxlXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFUIFRhZyBDYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QganNvbkF0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFwdGVyMjogbW9kdWxlTmFtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kdWxlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsMjogTEVWRUxfQVQsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQXRUYWdzKCkuYXRUYWdzQ2FsbENsaWNrKEpTT04uc3RyaW5naWZ5KGpzb25BdCksIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVtcHR5UmVzdWx0LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZnItbWItMFwiPlZvdHJlIHPDqWxlY3Rpb24gbuKAmWEgcmV0b3VybsOpIGF1Y3VuIHLDqXN1bHRhdC4gUG91ciBs4oCZYW3DqWxpb3JlciB2b3VzIHBvdXZleiA6PC9wPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5TdXBwcmltZXIgY2VydGFpbnMgZmlsdHJlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlJlY2hlcmNoZXIgdW4gcsOpc3VsdGF0IG1vaW5zIHNww6ljaWZpcXVlPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+YDtcclxuICAgICAgICAgICAgZGlzcGxheVRvdGFsUmVzdWx0LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgICAgICAgICAgaWYgKHBhZ2VyV3JhcHBlcikgcGFnZXJXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVSZXN1bHRDb3VudChkYXRhQ29udGVudFsnaHlkcmE6dG90YWxJdGVtcyddKTtcclxuICAgICAgICBpZiAoQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBkaXNwbGF5VG90YWxSZXN1bHQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlUb3RhbFJlc3VsdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIEluaXRpYXRlIGF0IGZpcnN0IGxvYWRcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICBjb25zdCBpc1BhcmFtID0gQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMpLmxlbmd0aDtcclxuICAgIGNvbnN0IGNvbmNhdCA9IGlzUGFyYW0gPyAnJicgOiAnPyc7XHJcbiAgICBpZiAoc2VhcmNoUGFyYW1zLmhhcygncGFnZScpKSB7XHJcbiAgICAgICAgY29uc3QgaXNOdW0gPSAvXlxcZCskLy50ZXN0KHNlYXJjaFBhcmFtcy5nZXQoJ3BhZ2UnKSk7XHJcbiAgICAgICAgaWYgKCFpc051bSkge1xyXG4gICAgICAgICAgICBzZWFyY2hQYXJhbXMuc2V0KCdwYWdlJywgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgYXBpVVJMID0gaXNQYXJhbVxyXG4gICAgICAgID8gYCR7QVBJX0NPTlRFTlRfVVJMfT8ke3NlYXJjaFBhcmFtcy50b1N0cmluZygpfWAgK1xyXG4gICAgICAgICAgaXNQbVZhcignJicsIHRydWUpICtcclxuICAgICAgICAgIGluaXRpYXRlQ2hlY2tib3goY29uY2F0KVxyXG4gICAgICAgIDogQVBJX0NPTlRFTlRfVVJMICsgaXNQbVZhcignPycsIHRydWUpICsgaW5pdGlhdGVDaGVja2JveChjb25jYXQpO1xyXG4gICAgaW5pdGlhdGVMaXN0aW5nKGFwaVVSTCwgZmFsc2UpO1xyXG4gICAgaW5pdGlhdGVUaGVtYXRpY3MoKTtcclxuICAgIGlmIChpc1BhcmFtKSB7XHJcbiAgICAgICAgaW5pdGlhdGVTdWJUaGVtYXRpY3MoKTtcclxuICAgIH1cclxuICAgIEF0Q2xpY2soKTtcclxufSk7XHJcblxyXG4vLyBBVCBDbGlja1xyXG5mdW5jdGlvbiBBdENsaWNrKCkge1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnQtbGlzdCBhLCAuY29udGVudC1saXN0IGJ1dHRvbicpXHJcbiAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZHVsZU5hbWUgPSBpdGVtLmNsb3Nlc3QoJ1tkYXRhLW1vZHVsZV0nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZHVsZUNoaWxkTmFtZSA9IGl0ZW0uY2xvc2VzdCgnW2RhdGEtY2hpbGQtbW9kdWxlXScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kdWxlQ29uY2F0TmFtZSA9IGl0ZW0uY2xvc2VzdCgnW2RhdGEtY29uY2F0LW1vZHVsZV0nKTtcclxuICAgICAgICAgICAgICAgIC8vIEFUIFRhZyBDYWxsXHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uQXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIG5hbWUsIGNoZWNrIGlmIGl0IG5lZWRzIHRvIGNvbmNhdCBzcGVjaWZpYyB3b3JkaW5nIHdpdGggZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG1vZHVsZUNvbmNhdE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBtb2R1bGVDb25jYXROYW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1jb25jYXQtbW9kdWxlJykgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdfJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbm5lclRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgY2hhcHRlcjIsIHVzZSBkYXRhIGZyb20gQ2hpbGQgTW9kdWxlIGlmIGV4aXN0cyBvdGhlcndpc2UgdXNlIE1vZHVsZSB3b3JkaW5nIGVsc2UgZW1wdHkgKG5vIHNldCBjaGFwdGVyMilcclxuICAgICAgICAgICAgICAgICAgICBjaGFwdGVyMjogbW9kdWxlQ2hpbGROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbW9kdWxlQ2hpbGROYW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1jaGlsZC1tb2R1bGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG1vZHVsZU5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBtb2R1bGVOYW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1tb2R1bGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsMjogTEVWRUxfQVQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbmV3IEF0VGFncygpLmF0VGFnc0NhbGxDbGljayhKU09OLnN0cmluZ2lmeShqc29uQXQpLCB0aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbi8vIExvYWQgVEFDXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0YXJ0ZWF1Y2l0cm9uX2xvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0YXJ0ZWF1Y2l0cm9uLnN0YXRlLmF0aW50ZXJuZXRjbmlsICYmIHR5cGVvZiB0YWcgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgY29uc3QganNvbkF0ID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgbGV2ZWwyOiBMRVZFTF9BVCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGN1c3RvbVZhcnMgPSB7XHJcbiAgICAgICAgICAgIHNpdGU6IHtcclxuICAgICAgICAgICAgICAgIDE6ICdmcicsXHJcbiAgICAgICAgICAgICAgICA2OiAncGFnZS1saXN0ZScsXHJcbiAgICAgICAgICAgICAgICAxNTogd2luZG93LmxvY2F0aW9uLmhyZWYsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBuZXcgQXRUYWdzKCkuYXRUYWdzQ2FsbFBhZ2UoSlNPTi5zdHJpbmdpZnkoanNvbkF0KSwgY3VzdG9tVmFycyk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgQXRUYWdzIGZyb20gJy4uLy4uL2FwcC9qcy9BdFRhZ3MnO1xyXG5pbXBvcnQge1xyXG4gICAgQVBJX0NPTlRFTlRfVVJMLFxyXG4gICAgQ09OVEVOVF9USEVNQVRJQ1NfVVJMLFxyXG4gICAgQ09OVEVOVF9TVUJUSEVNQVRJQ1NfVVJMLFxyXG4gICAgTEVWRUxfQVQsXHJcbiAgICBJU19QTV9ORVdTLFxyXG4gICAgVFlQRV9MSVNUX0JPT0xFQU4sXHJcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IEFwaSBmcm9tICcuLi8uLi9hcHAvanMvQXBpJztcclxuaW1wb3J0IHtcclxuICAgIGFwcGVuZFVSTCxcclxuICAgIHJlcGxhY2VVUkwsXHJcbiAgICBnZXRTZWFyY2hQYXJhbXMsXHJcbiAgICBpbnNlcnRVcmxQYXJhbSxcclxuICAgIHJlbW92ZVVybFBhcmFtZXRlcixcclxuICAgIGNoZWNrYm94UGFyYW1ldGVyLFxyXG59IGZyb20gJy4uLy4uL2FwcC9qcy9GaWx0ZXJzJztcclxuaW1wb3J0IHtTQ1JFRU5fU1dJVENIfSBmcm9tICcuLi8uLi9hcHAvanMvQ29uc3RhbnRzJztcclxuaW1wb3J0IHtpbml0aWF0ZUxpc3Rpbmd9IGZyb20gJy4uL2luZGV4LWxpc3QnO1xyXG5cclxuY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLXJlc2V0Jyk7XHJcbmNvbnN0IG9wZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLW9wZW4nKTtcclxuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLWNsb3NlJyk7XHJcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRGaWx0ZXJzJyk7XHJcbmNvbnN0IHRoZW1hdGljU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdC10aGVtYXRpYycpO1xyXG5jb25zdCBzdWJ0aGVtYXRpY1NlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3Qtc3ViLXRoZW1hdGljJyk7XHJcbmNvbnN0IHRoZW1hdGljQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtYXRpYy1jb3VudGVyJyk7XHJcbmNvbnN0IGZpbHRlckZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50LWZpbHRlcicpO1xyXG5jb25zdCByZXN1bHRDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQtY291bnQnKTtcclxuY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAnI2FjY29yZGlvbi1jb250ZW50LWRvY3VtZW50IGlucHV0J1xyXG4pO1xyXG5jb25zdCBkb2N1bWVudENvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jdW1lbnQtY291bnRlcicpO1xyXG5jb25zdCBpc1RhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWdzLXBsYWNlJyk7XHJcbmxldCB0YWdGbGFnQ2xpY2tBVCA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYXRlRmlsdGVyKGNhbGxCYWNrKSB7XHJcbiAgICB1cGRhdGVGaWx0ZXJzKCk7XHJcbiAgICB1cGRhdGVPcGVuQnRuKCk7XHJcbiAgICBvcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BsYXlNb2JpbGVGaWx0ZXIoKTtcclxuICAgICAgICB1cGRhdGVGaWx0ZXJzKCk7XHJcbiAgICB9KTtcclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BsYXlNb2JpbGVGaWx0ZXIoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlQWxsVGFncygpO1xyXG4gICAgICAgIGRpc3BsYXlNb2JpbGVGaWx0ZXIoZmFsc2UpO1xyXG4gICAgICAgIHN1Ym1pdEZpZWxkcyhjYWxsQmFjaywgdHJ1ZSk7XHJcbiAgICAgICAgdXBkYXRlT3BlbkJ0bigpO1xyXG4gICAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUYWcoXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignbGFiZWwnKS50ZXh0Q29udGVudFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRlbGV0ZVRhZyh0aGVtYXRpY1NlbGVjdCk7XHJcbiAgICAgICAgaWYgKHRoZW1hdGljU2VsZWN0LnZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICBhZGRUYWcoXHJcbiAgICAgICAgICAgICAgICB0aGVtYXRpY1NlbGVjdCxcclxuICAgICAgICAgICAgICAgIHRoZW1hdGljU2VsZWN0Lm9wdGlvbnNbdGhlbWF0aWNTZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVsZXRlVGFnKHN1YnRoZW1hdGljU2VsZWN0KTtcclxuICAgICAgICBpZiAoc3VidGhlbWF0aWNTZWxlY3QudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGFkZFRhZyhcclxuICAgICAgICAgICAgICAgIHN1YnRoZW1hdGljU2VsZWN0LFxyXG4gICAgICAgICAgICAgICAgc3VidGhlbWF0aWNTZWxlY3Qub3B0aW9uc1tzdWJ0aGVtYXRpY1NlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFUIGNhbGxcclxuICAgICAgICBjb25zdCBqc29uQXQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdyZWNoZXJjaGVfYWZmaWNoZXInLFxyXG4gICAgICAgICAgICBjaGFwdGVyMjogc3VibWl0QnRuXHJcbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnW2RhdGEtbW9kdWxlXScpXHJcbiAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZHVsZScpLFxyXG4gICAgICAgICAgICBsZXZlbDI6IExFVkVMX0FULFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbmV3IEF0VGFncygpLmF0VGFnc0NhbGxDbGljayhKU09OLnN0cmluZ2lmeShqc29uQXQpLCB0aGlzKTtcclxuICAgIH0pO1xyXG4gICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcmVzZXRGaWx0ZXJzKCk7XHJcbiAgICAgICAgc3VibWl0RmllbGRzKGNhbGxCYWNrKTtcclxuICAgIH0pO1xyXG4gICAgdGhlbWF0aWNTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgaW5pdGlhdGVTdWJUaGVtYXRpY3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXBkYXRlU3ViVGhlbWF0aWNGaWx0ZXIoKTtcclxuICAgICAgICB1cGRhdGVUaGVtYXRpY0NvdW50ZXIoKTtcclxuICAgICAgICBzdWJtaXRGaWVsZHMoY2FsbEJhY2ssIGZhbHNlLCAndGhlbWF0aWMnKTtcclxuICAgIH0pO1xyXG4gICAgc3VidGhlbWF0aWNTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZVRoZW1hdGljQ291bnRlcigpO1xyXG4gICAgICAgIHJlbW92ZVVybFBhcmFtZXRlcigncGFnZScpO1xyXG4gICAgICAgIHN1Ym1pdEZpZWxkcyhjYWxsQmFjaywgZmFsc2UsICdzdWJ0aGVtYXRpYycpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoY2hlY2tib3hlcy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBtb2R1bGVOYW1lID0gZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNjaGVja2JveGVzLWRvY3VtZW50JylcclxuICAgICAgICAgICAgLmNsb3Nlc3QoJ1tkYXRhLW1vZHVsZV0nKTtcclxuICAgICAgICBjaGVja2JveGVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsVGV4dCA9IGl0ZW0ucGFyZW50Tm9kZVxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUNoZWNrYm94Q291bnRlcigpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlVXJsUGFyYW1ldGVyKCdwYWdlJyk7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRGaWVsZHMoY2FsbEJhY2spO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gU0NSRUVOX1NXSVRDSCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVGFnKGl0ZW0sIGxhYmVsVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVGFnKGl0ZW0sIGxhYmVsVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQVRcclxuICAgICAgICAgICAgICAgIGlmICghdGFnRmxhZ0NsaWNrQVQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdENoZWNrYm94ID0gJ3JlY2hlcmNoZV8nO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGpzb25BdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS5jaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGF0Q2hlY2tib3ggKyBsYWJlbFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYXRDaGVja2JveCArICdkZWNvY2hlXycgKyBsYWJlbFRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsMjogTEVWRUxfQVQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXB0ZXIyOiBtb2R1bGVOYW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1tb2R1bGUnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjM6ICd0eXBlX2RlX3B1YmxpY2F0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBBdFRhZ3MoKS5hdFRhZ3NDYWxsQ2xpY2soSlNPTi5zdHJpbmdpZnkoanNvbkF0KSwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0YWdGbGFnQ2xpY2tBVCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYXRlVGhlbWF0aWNzKCkge1xyXG4gICAgY29uc3QgVEhFTUFUSUNfVVJMID1cclxuICAgICAgICBgJHtDT05URU5UX1RIRU1BVElDU19VUkx9P2V4aXN0c1twYXJlbnRdPWZhbHNlYCArXHJcbiAgICAgICAgaXNQbVZhcignJicsIGZhbHNlKSArXHJcbiAgICAgICAgaW5pdGlhdGVDaGVja2JveCgnJicsIHRydWUpO1xyXG4gICAgbmV3IEFwaSgpLmdldChUSEVNQVRJQ19VUkwpLnRoZW4oKGRhdGFDb250ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGFDb250ZW50ICYmIGRhdGFDb250ZW50WydoeWRyYTptZW1iZXInXS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGluaXRpYXRlU2VsZWN0KGRhdGFDb250ZW50LCB0aGVtYXRpY1NlbGVjdCwge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1RvdXRlcyBsZXMgdGjDqW1hdGlxdWVzJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGluaXRpYXRlRmlsdGVyKGluaXRpYXRlTGlzdGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGVtYXRpY1NlbGVjdC52YWx1ZSkge1xyXG4gICAgICAgICAgICBpbml0aWF0ZVN1YlRoZW1hdGljcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbW9kdWxlTmFtZSA9IGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXRoZW1hdGljJylcclxuICAgICAgICAgICAgLmNsb3Nlc3QoJ1tkYXRhLW1vZHVsZV0nKTtcclxuXHJcbiAgICAgICAgLy8gQVQgVGFnIENhbGxcclxuICAgICAgICBsZXQganNvbkF0ID0ge1xyXG4gICAgICAgICAgICBjaGFwdGVyMjogbW9kdWxlTmFtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kdWxlJyksXHJcbiAgICAgICAgICAgIGxldmVsMjogTEVWRUxfQVQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignI3NlbGVjdC10aGVtYXRpYycpXHJcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBqc29uQXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uanNvbkF0LFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZWNoZXJjaGVfJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1t0aGlzLnNlbGVjdGVkSW5kZXhdLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBjaGFwdGVyMzogJ3RoZW1hdGlxdWUnLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIG5ldyBBdFRhZ3MoKS5hdFRhZ3NDYWxsQ2xpY2soSlNPTi5zdHJpbmdpZnkoanNvbkF0KSwgdGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXN1Yi10aGVtYXRpYycpXHJcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBqc29uQXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uanNvbkF0LFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZWNoZXJjaGVfJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignI3NlbGVjdC10aGVtYXRpYycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAub3B0aW9uc1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXRoZW1hdGljJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVkSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uaW5uZXJUZXh0LnRyaW0oKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdfLy9fJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1t0aGlzLnNlbGVjdGVkSW5kZXhdLmlubmVyVGV4dC50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjM6ICd0aGVtYXRpcXVlJyxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBuZXcgQXRUYWdzKCkuYXRUYWdzQ2FsbENsaWNrKEpTT04uc3RyaW5naWZ5KGpzb25BdCksIHRoaXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhdGVTdWJUaGVtYXRpY3Moc3VidGhlbWF0aWMpIHtcclxuICAgIGNvbnN0IHRoZW1hdGljID0gdGhlbWF0aWNTZWxlY3QudmFsdWU7XHJcbiAgICBpZiAodGhlbWF0aWMgfHwgc3VidGhlbWF0aWMpIHtcclxuICAgICAgICBjb25zdCBTVUJfVEhFTUFUSUNfVVJMID1cclxuICAgICAgICAgICAgYCR7Q09OVEVOVF9TVUJUSEVNQVRJQ1NfVVJMfT9wYXJlbnQ9JHt0aGVtYXRpY31gICtcclxuICAgICAgICAgICAgaXNQbVZhcignJicsIGZhbHNlKSArXHJcbiAgICAgICAgICAgIGluaXRpYXRlQ2hlY2tib3goJyYnLCB0cnVlKTtcclxuICAgICAgICBuZXcgQXBpKCkuZ2V0KFNVQl9USEVNQVRJQ19VUkwpLnRoZW4oKGRhdGFDb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhQ29udGVudCAmJiBkYXRhQ29udGVudFsnaHlkcmE6bWVtYmVyJ10ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhdGVTZWxlY3QoZGF0YUNvbnRlbnQsIHN1YnRoZW1hdGljU2VsZWN0LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1RvdXRlcyBsZXMgc291cy10aMOpbWF0aXF1ZXMnLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgc3VidGhlbWF0aWMgJiZcclxuICAgICAgICAgICAgICAgICAgICBzdWJ0aGVtYXRpY1NlbGVjdC5nZXRFbGVtZW50c0J5VGFnTmFtZShzdWJ0aGVtYXRpYylcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YnRoZW1hdGljU2VsZWN0LnZhbHVlID0gc3VidGhlbWF0aWM7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVGFnKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJ0aGVtYXRpY1NlbGVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VidGhlbWF0aWNTZWxlY3Qub3B0aW9uc1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRoZW1hdGljU2VsZWN0LnNlbGVjdGVkSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXS50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJ0aGVtYXRpY1NlbGVjdC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGhlbWF0aWNDb3VudGVyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYXRlQ2hlY2tib3goY29uY2F0LCBmb3JjZVJlbG9hZCkge1xyXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gZ2V0U2VhcmNoUGFyYW1zKCk7XHJcbiAgICBjb25zdCBjaGVja2JveCA9IFtdO1xyXG4gICAgaWYgKCFzZWFyY2hQYXJhbXMuaGFzKCdjb250ZW50X3R5cGVbXScpIHx8IGZvcmNlUmVsb2FkKSB7XHJcbiAgICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LnB1c2goaXRlbS5kYXRhc2V0LmRvY3VtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRvY0FwaUNhbGwgPSBjaGVja2JveC5sZW5ndGggPyBjb25jYXQgKyBjaGVja2JveC5qb2luKCcmJykgOiAnJztcclxuICAgIHJldHVybiBkb2NBcGlDYWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUmVzdWx0Q291bnQodG90YWxJdGVtcykge1xyXG4gICAgaWYgKHRvdGFsSXRlbXMgJiYgdG90YWxJdGVtcyA+IDApIHtcclxuICAgICAgICByZXN1bHRDb3VudC5zZXRBdHRyaWJ1dGUoJ3RvdGFsJywgdG90YWxJdGVtcyk7XHJcbiAgICAgICAgcmVzdWx0Q291bnQuaW5uZXJIVE1MID0gYCR7dG90YWxJdGVtc30gcsOpc3VsdGF0JHtcclxuICAgICAgICAgICAgdG90YWxJdGVtcyA+IDEgPyAncycgOiAnJ1xyXG4gICAgICAgIH1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHRDb3VudC5pbm5lckhUTUwgPSAnQXVjdW4gcsOpc3VsdGF0IHBvdXIgbGVzIGZpbHRyZXMgc8OpbGVjdGlvbm7DqXMnO1xyXG4gICAgICAgIHJlc3VsdENvdW50LnNldEF0dHJpYnV0ZSgndG90YWwnLCAwKTtcclxuICAgICAgICBzdWJtaXRCdG4udmFsdWUgPSAnQXVjdW4gcsOpc3VsdGF0JztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUG1WYXIoY29uY2F0LCBjaGVjaykge1xyXG4gICAgY29uc3QgaXNMaXN0ID0gY29uY2F0ICsgSVNfUE1fTkVXUyArICc9JyArIFRZUEVfTElTVF9CT09MRUFOO1xyXG4gICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIFRZUEVfTElTVF9CT09MRUFOICE9PSBudWxsID8gaXNMaXN0IDogJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBUWVBFX0xJU1RfQk9PTEVBTiA/IGlzTGlzdCA6ICcnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPcHRpb24odGV4dCwgdmFsdWUpIHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICBvcHRpb24udmFsdWUgPSB2YWx1ZSB8fCAnJztcclxuICAgIG9wdGlvbi5uYW1lID0gdmFsdWUgfHwgJyc7XHJcbiAgICByZXR1cm4gb3B0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TW9iaWxlRmlsdGVyKG9wZW4gPSB0cnVlKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJzQ29sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbC1maWx0ZXJzJyk7XHJcbiAgICBjb25zdCBibG9ja1Njcm9sbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTtcclxuICAgIGlmIChvcGVuKSB7XHJcbiAgICAgICAgZmlsdGVyc0NvbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBibG9ja1Njcm9sbC5jbGFzc0xpc3QuYWRkKCdibG9ja1Njcm9sbCcpO1xyXG4gICAgICAgIHVwZGF0ZU1vYmlsZVN1Ym1pdENvdW50KHJlc3VsdENvdW50LmdldEF0dHJpYnV0ZSgndG90YWwnKSk7XHJcbiAgICAgICAgY2xvc2VCdG4uZm9jdXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsdGVyc0NvbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBibG9ja1Njcm9sbC5jbGFzc0xpc3QucmVtb3ZlKCdibG9ja1Njcm9sbCcpO1xyXG4gICAgICAgIG9wZW5CdG4uZm9jdXMoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RmllbGRzQ291bnQoKSB7XHJcbiAgICBjb25zdCB2YWxpZEZpZWxkcyA9IHt9O1xyXG4gICAgZmlsdGVyRmllbGRzLmZvckVhY2goKGZpbHRlcikgPT4ge1xyXG4gICAgICAgIGlmIChmaWx0ZXIudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHZhbGlkRmllbGRzW2ZpbHRlci5uYW1lXSA9IGZpbHRlci52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWxpZEZpZWxkcykubGVuZ3RoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDaGVja2JveGVzQ291bnQoKSB7XHJcbiAgICBjb25zdCBjaGVja0ZpZWxkcyA9IHt9O1xyXG4gICAgY2hlY2tib3hlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBjaGVja0ZpZWxkc1tpdGVtLm5hbWVdID0gaXRlbS5pZDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhjaGVja0ZpZWxkcykubGVuZ3RoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWF0ZVNlbGVjdChkYXRhQ29udGVudCwgc2VsZWN0LCBkZWZhdWx0T3B0aW9uKSB7XHJcbiAgICBzZWxlY3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQoY3JlYXRlT3B0aW9uKGRlZmF1bHRPcHRpb24udGV4dCkpO1xyXG4gICAgZGF0YUNvbnRlbnRbJ2h5ZHJhOm1lbWJlciddLmZvckVhY2goKHRoZW1hdGljKSA9PiB7XHJcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICBjcmVhdGVPcHRpb24oXHJcbiAgICAgICAgICAgICAgICB0aGVtYXRpYy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgYCR7Q09OVEVOVF9USEVNQVRJQ1NfVVJMfS8ke3RoZW1hdGljLmlkfWBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRGaWx0ZXJzKCkge1xyXG4gICAgdGhlbWF0aWNTZWxlY3QudmFsdWUgPSAnJztcclxuICAgIHN1YnRoZW1hdGljU2VsZWN0LnZhbHVlID0gJyc7XHJcbiAgICBzdWJ0aGVtYXRpY1NlbGVjdC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICB1cGRhdGVUaGVtYXRpY0NvdW50ZXIoKTtcclxuICAgIGlmIChjaGVja2JveGVzLmxlbmd0aCkge1xyXG4gICAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHVwZGF0ZUNoZWNrYm94Q291bnRlcigpO1xyXG4gICAgfVxyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gU0NSRUVOX1NXSVRDSCkge1xyXG4gICAgICAgIGRlbGV0ZUFsbFRhZ3MoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0RmllbGRzKGNhbGxCYWNrLCBmb3JjZVJlbG9hZCwgdGFnVGhlbWF0aWMpIHtcclxuICAgIGxldCBwYXJhbXMgPSAnJztcclxuICAgIGxldCBjb25jYXQgPSAnPyc7XHJcbiAgICBmaWx0ZXJGaWVsZHMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XHJcbiAgICAgICAgaWYgKGZpbHRlci52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgaWYgKGZpbHRlci5uYW1lID09PSAnc3VidGhlbWF0aWMnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSByZXBsYWNlVVJMKHBhcmFtcywgJ3RoZW1hdGljJywgZmlsdGVyLnZhbHVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcyA9IGFwcGVuZFVSTChwYXJhbXMsIGZpbHRlci5uYW1lLCBmaWx0ZXIudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbmNhdCA9ICcmJztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgaXNDaGVjayA9IGZhbHNlO1xyXG4gICAgY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0RG9jRGF0YSA9IGNoZWNrYm94LmRhdGFzZXQuZG9jdW1lbnQuc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgcGFyYW1zID0gYXBwZW5kVVJMKFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgc3BsaXREb2NEYXRhLnNoaWZ0KCksXHJcbiAgICAgICAgICAgICAgICBzcGxpdERvY0RhdGEucG9wKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaXNDaGVjayA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWlzQ2hlY2spIHtcclxuICAgICAgICBwYXJhbXMgKz0gaW5pdGlhdGVDaGVja2JveChwYXJhbXMgPT09ICcnID8gJz8nIDogJyYnLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiBTQ1JFRU5fU1dJVENIIHx8IGZvcmNlUmVsb2FkKSB7XHJcbiAgICAgICAgZmlsdGVyRmllbGRzLmZvckVhY2goKGZpbHRlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyLnZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlci5uYW1lID09PSAnc3VidGhlbWF0aWMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0VXJsUGFyYW0oJ3RoZW1hdGljJywgZmlsdGVyLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0VXJsUGFyYW0oZmlsdGVyLm5hbWUsIGZpbHRlci52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVVcmxQYXJhbWV0ZXIoZmlsdGVyLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlVXJsUGFyYW1ldGVyKCdwYWdlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoY2hlY2tib3hlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2hlY2tib3hQYXJhbWV0ZXIoJ2NvbnRlbnRfdHlwZVtdJywgY2hlY2tib3hlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGxCYWNrKEFQSV9DT05URU5UX1VSTCArIHBhcmFtcyArIGlzUG1WYXIoY29uY2F0LCB0cnVlKSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIFJlaW5pdCB0YWdzXHJcblxyXG4gICAgICAgIGlmICh0YWdUaGVtYXRpYyAmJiB0YWdUaGVtYXRpYyA9PT0gJ3RoZW1hdGljJykge1xyXG4gICAgICAgICAgICBkZWxldGVUYWcoc3VidGhlbWF0aWNTZWxlY3QpO1xyXG4gICAgICAgICAgICBkZWxldGVUYWcodGhlbWF0aWNTZWxlY3QpO1xyXG4gICAgICAgICAgICBpZiAodGhlbWF0aWNTZWxlY3QudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUYWcoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWF0aWNTZWxlY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWF0aWNTZWxlY3Qub3B0aW9uc1t0aGVtYXRpY1NlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YWdUaGVtYXRpYyAmJiB0YWdUaGVtYXRpYyA9PT0gJ3N1YnRoZW1hdGljJykge1xyXG4gICAgICAgICAgICBkZWxldGVUYWcoc3VidGhlbWF0aWNTZWxlY3QpO1xyXG4gICAgICAgICAgICBpZiAoc3VidGhlbWF0aWNTZWxlY3QudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUYWcoXHJcbiAgICAgICAgICAgICAgICAgICAgc3VidGhlbWF0aWNTZWxlY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VidGhlbWF0aWNTZWxlY3Qub3B0aW9uc1tzdWJ0aGVtYXRpY1NlbGVjdC5zZWxlY3RlZEluZGV4XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3IEFwaSgpXHJcbiAgICAgICAgICAgIC5nZXQoQVBJX0NPTlRFTlRfVVJMICsgcGFyYW1zICsgaXNQbVZhcihjb25jYXQsIHRydWUpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YUNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU1vYmlsZVN1Ym1pdENvdW50KGRhdGFDb250ZW50WydoeWRyYTp0b3RhbEl0ZW1zJ10pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlRmlsdGVycygpIHtcclxuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IGdldFNlYXJjaFBhcmFtcygpO1xyXG4gICAgcmVzZXRGaWx0ZXJzKCk7XHJcbiAgICBkZWxldGVBbGxUYWdzKCk7XHJcbiAgICBpZiAoQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMpLmxlbmd0aCAmJiBzZWFyY2hQYXJhbXMuaGFzKCd0aGVtYXRpYycpKSB7XHJcbiAgICAgICAgY29uc3QgQUxMX1RIRU1BVElDU19VUkwgPVxyXG4gICAgICAgICAgICBgJHtDT05URU5UX1RIRU1BVElDU19VUkx9P2FsbD10cnVlYCArXHJcbiAgICAgICAgICAgIGlzUG1WYXIoJyYnLCBmYWxzZSkgK1xyXG4gICAgICAgICAgICBpbml0aWF0ZUNoZWNrYm94KCcmJywgdHJ1ZSk7XHJcbiAgICAgICAgbmV3IEFwaSgpLmdldChBTExfVEhFTUFUSUNTX1VSTCkudGhlbigoZGF0YUNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGFDb250ZW50ICYmIGRhdGFDb250ZW50WydoeWRyYTptZW1iZXInXS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aGVtYXRpY1ZhbHVlID0gc2VhcmNoUGFyYW1zLmdldCgndGhlbWF0aWMnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRoZW1hdGljSWQgPSB0aGVtYXRpY1ZhbHVlLnN1YnN0cmluZyhcclxuICAgICAgICAgICAgICAgICAgICBDT05URU5UX1RIRU1BVElDU19VUkwubGVuZ3RoICsgMVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGRhdGFDb250ZW50WydoeWRyYTptZW1iZXInXS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IHBhcnNlSW50KHRoZW1hdGljSWQpICYmIGl0ZW0ucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1hdGljU2VsZWN0LnZhbHVlID0gYCR7Q09OVEVOVF9USEVNQVRJQ1NfVVJMfS8ke2l0ZW0ucGFyZW50LmlkfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYXRlU3ViVGhlbWF0aWNzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7Q09OVEVOVF9USEVNQVRJQ1NfVVJMfS8ke2l0ZW0uaWR9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYWRkVGFnKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1hdGljU2VsZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1hdGljU2VsZWN0Lm9wdGlvbnNbdGhlbWF0aWNTZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZT1cIiR7a2V5fVwiXWApO1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPVxyXG4gICAgICAgICAgICAgICAgZmlsdGVyICYmIGZpbHRlci5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke3ZhbHVlfVwiXWApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZpbHRlciAmJiBvcHRpb24gJiYgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlci52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3ViVGhlbWF0aWNGaWx0ZXIoKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVRoZW1hdGljQ291bnRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEFycmF5LmZyb20oc2VhcmNoUGFyYW1zKS5sZW5ndGggJiYgc2VhcmNoUGFyYW1zLmhhcygnY29udGVudF90eXBlW10nKSkge1xyXG4gICAgICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IGl0ZW0uZGF0YXNldC5kb2N1bWVudCA9PT0ga2V5ICsgJz0nICsgdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkVGFnKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignbGFiZWwnKS50ZXh0Q29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHVwZGF0ZUNoZWNrYm94Q291bnRlcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVNb2JpbGVTdWJtaXRDb3VudCh0b3RhbEl0ZW1zKSB7XHJcbiAgICBpZiAodG90YWxJdGVtcyA+IDApIHtcclxuICAgICAgICBzdWJtaXRCdG4udmFsdWUgPSBgQWZmaWNoZXIgbGUke1xyXG4gICAgICAgICAgICB0b3RhbEl0ZW1zID4gMSA/ICdzICcgKyB0b3RhbEl0ZW1zIDogJydcclxuICAgICAgICB9IHLDqXN1bHRhdCR7dG90YWxJdGVtcyA+IDEgPyAncycgOiAnJ31gO1xyXG4gICAgfSBlbHNlIGlmICh0b3RhbEl0ZW1zID09PSAwKSB7XHJcbiAgICAgICAgc3VibWl0QnRuLnZhbHVlID0gJ0F1Y3VuIHLDqXN1bHRhdCc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZU9wZW5CdG4oKSB7XHJcbiAgICBjb25zdCBmaWVsZHNDb3VudCA9IGdldEZpZWxkc0NvdW50KCk7XHJcbiAgICBjb25zdCBjaGVja2JveGVzQ291bnQgPSBnZXRDaGVja2JveGVzQ291bnQoKTtcclxuICAgIGlmIChmaWVsZHNDb3VudCB8fCBjaGVja2JveGVzQ291bnQpIHtcclxuICAgICAgICBvcGVuQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBvcGVuQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTdWJUaGVtYXRpY0ZpbHRlcigpIHtcclxuICAgIHN1YnRoZW1hdGljU2VsZWN0LnZhbHVlID0gJyc7XHJcbiAgICBpZiAodGhlbWF0aWNTZWxlY3QudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgc3VidGhlbWF0aWNTZWxlY3Quc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzdWJ0aGVtYXRpY1NlbGVjdC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRoZW1hdGljQ291bnRlcigpIHtcclxuICAgIGNvbnN0IGZpZWxkc0NvdW50ID0gZ2V0RmllbGRzQ291bnQoKTtcclxuICAgIGNvbnN0IGNoZWNrYm94ZXNDb3VudCA9IGdldENoZWNrYm94ZXNDb3VudCgpO1xyXG4gICAgaWYgKGZpZWxkc0NvdW50KSB7XHJcbiAgICAgICAgdGhlbWF0aWNDb3VudGVyLmlubmVySFRNTCA9IGAke2ZpZWxkc0NvdW50fSBzw6lsZWN0aW9ubsOpZSR7XHJcbiAgICAgICAgICAgIGZpZWxkc0NvdW50ID4gMSA/ICdzJyA6ICcnXHJcbiAgICAgICAgfWA7XHJcbiAgICAgICAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoZW1hdGljQ291bnRlci5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuICAgIGlmICghZmllbGRzQ291bnQgJiYgIWNoZWNrYm94ZXNDb3VudCkge1xyXG4gICAgICAgIHJlc2V0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDaGVja2JveENvdW50ZXIoKSB7XHJcbiAgICBjb25zdCBjaGVja2JveGVzQ291bnQgPSBnZXRDaGVja2JveGVzQ291bnQoKTtcclxuICAgIGNvbnN0IGZpZWxkc0NvdW50ID0gZ2V0RmllbGRzQ291bnQoKTtcclxuICAgIGlmIChjaGVja2JveGVzQ291bnQpIHtcclxuICAgICAgICBkb2N1bWVudENvdW50ZXIuaW5uZXJIVE1MID0gYCR7Y2hlY2tib3hlc0NvdW50fSBzw6lsZWN0aW9ubsOpJHtcclxuICAgICAgICAgICAgY2hlY2tib3hlc0NvdW50ID4gMSA/ICdzJyA6ICcnXHJcbiAgICAgICAgfWA7XHJcbiAgICAgICAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50Q291bnRlci5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuICAgIGlmICghZmllbGRzQ291bnQgJiYgIWNoZWNrYm94ZXNDb3VudCkge1xyXG4gICAgICAgIHJlc2V0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUYWcoZWx0LCBsYWJlbFRleHQpIHtcclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IGRvY3VtZW50VHlwZSA9IGVsdC5kYXRhc2V0LmRvY3VtZW50ID8gZWx0LmRhdGFzZXQuZG9jdW1lbnQgOiBlbHQuaWQ7XHJcbiAgICBsaS5jbGFzc0xpc3QuYWRkKCdmci1tYi0ydycpO1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZnItdGFnJywgJ2ZyLXRhZy0tc20nLCAnZnItbXktMCcsICdmci10YWctLWRpc21pc3MnKTtcclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnUmV0aXJlciAnICsgbGFiZWxUZXh0LnRyaW0oKSk7XHJcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWRvY3VtZW50JywgZG9jdW1lbnRUeXBlKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGxhYmVsVGV4dC50cmltKCk7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRhZ0ZsYWdDbGlja0FUID0gdHJ1ZTtcclxuICAgICAgICAvLyBBVFxyXG4gICAgICAgIGNvbnN0IGpzb25BdCA9IHtcclxuICAgICAgICAgICAgbmFtZTogJ2RlY29jaGVfJyArIGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgbGV2ZWwyOiBMRVZFTF9BVCxcclxuICAgICAgICAgICAgY2hhcHRlcjI6ICdmaWx0cmUnLFxyXG4gICAgICAgICAgICBjaGFwdGVyMzogJ3RhZycsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBuZXcgQXRUYWdzKCkuYXRUYWdzQ2FsbENsaWNrKEpTT04uc3RyaW5naWZ5KGpzb25BdCksIHRoaXMpO1xyXG4gICAgICAgIHJlbW92ZU9uQ2xpY2tUYWcoZWx0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxpLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gICAgaWYgKGlzVGFnLnF1ZXJ5U2VsZWN0b3IoJ3VsJykpIHtcclxuICAgICAgICBpc1RhZy5xdWVyeVNlbGVjdG9yKCd1bCcpLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIHVsLmNsYXNzTGlzdC5hZGQoJ2ZyLXRhZ3MtZ3JvdXAnLCAnZnItcHQtMXcnLCAnZnItbWItMncnKTtcclxuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgICAgaXNUYWcuYXBwZW5kQ2hpbGQodWwpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVPbkNsaWNrVGFnKGVsdCkge1xyXG4gICAgZGVsZXRlVGFnKGVsdCk7XHJcbiAgICAvLyBGb3IgY2hlY2tib3hlcyBkZWxldGlvblxyXG4gICAgY2hlY2tib3hlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uZGF0YXNldC5kb2N1bWVudCA9PT0gZWx0LmRhdGFzZXQuZG9jdW1lbnQpIHtcclxuICAgICAgICAgICAgaXRlbS5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEZvciB0aGVtYXRpY3MgZGVsZXRpb25cclxuICAgIGlmIChlbHQuaWQpIHtcclxuICAgICAgICBjb25zdCBlID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcclxuICAgICAgICBlbHQudmFsdWUgPSAnJztcclxuICAgICAgICBlbHQuZGlzcGF0Y2hFdmVudChlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBdXRvIGNsaWNrIG9uIG1vYmlsZSBzdWJtaXQgYnV0dG9uIHRvIHJldHJpZXZlIHJlc3VsdHMgd2l0aG91dCBvcGVuIGZpbHRlciBtZW51IC0gb25seSBmb3IgY2xpY2sgb24gdGFnXHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCBTQ1JFRU5fU1dJVENIKSB7XHJcbiAgICAgICAgc3VibWl0QnRuLmNsaWNrKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRhZyhlbHQpIHtcclxuICAgIGlzVGFnLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRvY3VtZW50VHlwZSA9IGVsdC5kYXRhc2V0LmRvY3VtZW50XHJcbiAgICAgICAgICAgID8gZWx0LmRhdGFzZXQuZG9jdW1lbnRcclxuICAgICAgICAgICAgOiBlbHQuaWQ7XHJcbiAgICAgICAgaWYgKGl0ZW0ucXVlcnlTZWxlY3RvcignYnV0dG9uJykuZGF0YXNldC5kb2N1bWVudCA9PT0gZG9jdW1lbnRUeXBlKSB7XHJcbiAgICAgICAgICAgIGl0ZW0ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWlzVGFnLnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsIGxpJykubGVuZ3RoKSB7XHJcbiAgICAgICAgaXNUYWcuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUFsbFRhZ3MoKSB7XHJcbiAgICBpZiAoaXNUYWcucXVlcnlTZWxlY3RvckFsbCgndWwgbGknKS5sZW5ndGgpIHtcclxuICAgICAgICBpc1RhZy5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7Z2VuZXJhdGVTbHVnLCBnZW5lcmF0ZVdvcmRpbmd9IGZyb20gJy4vZ2VuZXJhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdChyZXN1bHQpIHtcclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlTWVkaWFVUkwobWVkaWFVUkwpIHtcclxuICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuVVJMX01FRElBICsgbWVkaWFVUkw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNZWRpYSgpIHtcclxuICAgICAgICBpZiAocmVzdWx0Lm1lZGlhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnItY2FyZF9faW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImZyLXJlc3BvbnNpdmUtaW1nXCIgc3JjPVwiJHtnZW5lcmF0ZU1lZGlhVVJMKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQubWVkaWEudXJsXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cIiBhbHQ9XCIke1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0Lm1lZGlhLmRlc2NyaXB0aW9uID8gcmVzdWx0Lm1lZGlhLmRlc2NyaXB0aW9uIDogJydcclxuICAgICAgICAgICAgfVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc3VsdFR5cGUoKSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5jb250ZW50VHlwZSAhPT0gJ2FydGljbGUnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCJmci1tci0ydlwiPiR7Z2VuZXJhdGVXb3JkaW5nKFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmNvbnRlbnRUeXBlXHJcbiAgICAgICAgICAgICl9PC9zcGFuPmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cInRpbGUgZnItY29sLTEyIGZyLXB5LTAgZnItbWItM3dcIiBkYXRhLW1vZHVsZT1cImNhcmRzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZyLWNhcmQgZnItZW5sYXJnZS1saW5rIGZyLWNhcmQtLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZyLWNhcmRfX2JvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImZyLWNhcmRfX3RpdGxlIGZyLXRleHQtdGl0bGUtLWJsdWUtZnJhbmNlIGZyLW1iLTJ3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7Z2VuZXJhdGVTbHVnKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc2x1Z1xyXG4gICAgICAgICAgICAgICAgICAgICl9XCIgY2xhc3M9XCJmci1jYXJkX19saW5rXCIgdGFyZ2V0PVwiX3NlbGZcIj4ke1xyXG4gICAgICAgIHJlc3VsdC5zaG9ydFRpdGxlIHx8IHJlc3VsdC50aXRsZVxyXG4gICAgfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZyLWNhcmRfX2Rlc2MgZnItbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFB1Ymxpw6kgJHtmb3JtYXREYXRlKHJlc3VsdC5wdWJsaXNoZWRBdCl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZyLWNhcmRfX2RldGFpbCBmci1tYi0xd1wiPlxyXG4gICAgICAgICAgICAgICAgJHtyZXN1bHRUeXBlKCl9ICR7cmVzdWx0Lm1haW5UaGVtYXRpYy5wYXJlbnQubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICR7Z2V0TWVkaWEoKX0gICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxufVxyXG4iLCJpbXBvcnQge2dldFNlYXJjaFBhcmFtc30gZnJvbSAnLi4vLi4vYXBwL2pzL0ZpbHRlcnMnO1xyXG5pbXBvcnQgQXRUYWdzIGZyb20gJy4uLy4uL2FwcC9qcy9BdFRhZ3MnO1xyXG5pbXBvcnQge0xFVkVMX0FUfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5jbGFzcyBQYWdlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdXJyZW50UGFnZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYXJzZUludChcclxuICAgICAgICAgICAgY3VycmVudFBhZ2VbJ2h5ZHJhOnZpZXcnXVsnQGlkJ10uc3BsaXQoJz0nKS5wb3AoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5maXJzdFBhZ2UgPSBwYXJzZUludChcclxuICAgICAgICAgICAgY3VycmVudFBhZ2VbJ2h5ZHJhOnZpZXcnXVsnaHlkcmE6Zmlyc3QnXS5zcGxpdCgnPScpLnBvcCgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmxhc3RQYWdlID0gcGFyc2VJbnQoXHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlWydoeWRyYTp2aWV3J11bJ2h5ZHJhOmxhc3QnXS5zcGxpdCgnPScpLnBvcCgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLm5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgICAgIHRoaXMubmF2LmNsYXNzTGlzdC5hZGQoJ2ZyLXBhZ2luYXRpb24nKTtcclxuICAgICAgICB0aGlzLm5hdi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbmF2aWdhdGlvbicpO1xyXG4gICAgICAgIHRoaXMubmF2LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdQYWdpbmF0aW9uJyk7XHJcbiAgICAgICAgdGhpcy51bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJQYXJhbXMgPSBnZXRTZWFyY2hQYXJhbXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPIHJlZmFjdG8gY29uc3RydWNQYWdlciAmIGNyZWF0ZVBhZ2VyIE1ldGhvZHNcclxuICAgIGNvbnN0cnVjdFBhZ2VyKHBhZ2VyLCBjdXJyZW50UGFnZSwgY3NzLCB3b3JkaW5nKSB7XHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgbGV0IHBhZ2VySW5kZXggPSBjdXJyZW50UGFnZSArIDE7XHJcbiAgICAgICAgYS5pbm5lclRleHQgPSBhLnRpdGxlID0gd29yZGluZztcclxuICAgICAgICBhLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgICAgICdmci1wYWdpbmF0aW9uX19saW5rJyxcclxuICAgICAgICAgICAgJ2ZyLW14LTAnLFxyXG4gICAgICAgICAgICAnZnItcGFnaW5hdGlvbl9fbGluay0tJyArIGNzc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGNzcyA9PT0gJ3ByZXYnKSB7XHJcbiAgICAgICAgICAgIHBhZ2VySW5kZXggPSBjdXJyZW50UGFnZSAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChbJ2ZpcnN0JywgJ2xhc3QnXS5pbmNsdWRlcyhjc3MpKSB7XHJcbiAgICAgICAgICAgIHBhZ2VySW5kZXggPSBwYWdlcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhLmNsYXNzTGlzdC5hZGQoJ2ZyLXBhZ2luYXRpb25fX2xpbmstLWxnLWxhYmVsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSAhPT0gcGFnZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyUGFyYW1zICYmIHRoaXMuZmlsdGVyUGFyYW1zLmhhcygncGFnZScpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclBhcmFtcy5kZWxldGUoJ3BhZ2UnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhLmhyZWYgPSBgP3BhZ2U9JHtwYWdlckluZGV4fSR7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclBhcmFtcy50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgJiR7dGhpcy5maWx0ZXJQYXJhbXMudG9TdHJpbmcoKX1gXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICB9YDtcclxuICAgICAgICAgICAgdGhpcy5BVGNsaWNrKGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICByZXR1cm4gbGk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUGFnZXIoY3VycmVudFBhZ2UsIGluZGV4LCBtYXJrdXApIHtcclxuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBhLmNsYXNzTGlzdC5hZGQoJ2ZyLXBhZ2luYXRpb25fX2xpbmsnKTtcclxuICAgICAgICBpZiAoaW5kZXggPT09ICcuLi4nKSB7XHJcbiAgICAgICAgICAgIGEuY2xhc3NMaXN0LmFkZCgnZnItcHgtMCcsICdmci1teC0wJywgJ2RvdFRleHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYS50aXRsZSA9ICdQYWdlICcgKyBpbmRleDtcclxuICAgICAgICBhLmlubmVyVGV4dCA9IGluZGV4O1xyXG4gICAgICAgIGlmIChtYXJrdXAgJiYgaW5kZXggIT09IGN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlclBhcmFtcyAmJiB0aGlzLmZpbHRlclBhcmFtcy5oYXMoJ3BhZ2UnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJQYXJhbXMuZGVsZXRlKCdwYWdlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYS5ocmVmID0gYD9wYWdlPSR7aW5kZXh9JHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyUGFyYW1zLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICA/IGAmJHt0aGlzLmZpbHRlclBhcmFtcy50b1N0cmluZygpfWBcclxuICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgIH1gO1xyXG4gICAgICAgICAgICB0aGlzLkFUY2xpY2soYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgYS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICdwYWdlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICB0aGlzLnVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgICB0aGlzLm5hdi5hcHBlbmRDaGlsZCh0aGlzLnVsKTtcclxuICAgIH1cclxuXHJcbiAgICBBVGNsaWNrKGEpIHtcclxuICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBqc29uQXQgPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuaW5uZXJUZXh0ICtcclxuICAgICAgICAgICAgICAgICAgICAnX3BhZ2U9JyArXHJcbiAgICAgICAgICAgICAgICAgICAgYS5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICBjaGFwdGVyMjogJ3BhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgbGV2ZWwyOiBMRVZFTF9BVCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbmV3IEF0VGFncygpLmF0VGFnc0NhbGxDbGljayhKU09OLnN0cmluZ2lmeShqc29uQXQpLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGpzb25BdFBhZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgIGNoYXB0ZXIxOlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuaW5uZXJUZXh0ICtcclxuICAgICAgICAgICAgICAgICAgICAnX3BhZ2U9JyArXHJcbiAgICAgICAgICAgICAgICAgICAgYS5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICBsZXZlbDI6IExFVkVMX0FULFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBjdXN0b21WYXJzID0ge1xyXG4gICAgICAgICAgICAgICAgc2l0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIDE6ICdmcicsXHJcbiAgICAgICAgICAgICAgICAgICAgNjogJ3BhZ2UtbGlzdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIDE1OiB3aW5kb3cubG9jYXRpb24uaHJlZixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG5ldyBBdFRhZ3MoKS5hdFRhZ3NDYWxsUGFnZShKU09OLnN0cmluZ2lmeShqc29uQXRQYWdlKSwgY3VzdG9tVmFycyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMudWwuY2xhc3NMaXN0LmFkZCgnZnItcGFnaW5hdGlvbl9fbGlzdCcpO1xyXG5cclxuICAgICAgICBjb25zdCBwcmV2aW91c1BhZ2VyID0gdGhpcy5jb25zdHJ1Y3RQYWdlcihcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSxcclxuICAgICAgICAgICAgJ3ByZXYnLFxyXG4gICAgICAgICAgICAnUHLDqWPDqWRlbnRlJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy51bC5hcHBlbmRDaGlsZChwcmV2aW91c1BhZ2VyKTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVQYWdlcih0aGlzLmN1cnJlbnRQYWdlLCAxLCB0cnVlKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSB0aGlzLmxhc3RQYWdlIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0TWF4ID0gMztcclxuICAgICAgICAgICAgY29uc3QgbGFzdE1heCA9IGZpcnN0TWF4IC0gMjtcclxuICAgICAgICAgICAgLy8gRGlzcGxheSBtYXggNCBwYWdlcyBpbmxpbmVcclxuICAgICAgICAgICAgaWYgKHRoaXMubGFzdFBhZ2UgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVBhZ2VyKHRoaXMuY3VycmVudFBhZ2UsIGksIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRmlyc3QgbnVtYmVyc1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPD0gZmlyc3RNYXggJiYgdGhpcy5jdXJyZW50UGFnZSA8PSBmaXJzdE1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUGFnZXIodGhpcy5jdXJyZW50UGFnZSwgaSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGZpcnN0TWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUGFnZXIodGhpcy5jdXJyZW50UGFnZSwgaSArIDEsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVBhZ2VyKHRoaXMuY3VycmVudFBhZ2UsICcuLi4nLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIExhc3QgbnVtYmVyc1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBpID49IHRoaXMubGFzdFBhZ2UgLSBsYXN0TWF4ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA+PSB0aGlzLmxhc3RQYWdlIC0gbGFzdE1heFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMubGFzdFBhZ2UgLSBsYXN0TWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUGFnZXIodGhpcy5jdXJyZW50UGFnZSwgJy4uLicsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQYWdlcih0aGlzLmN1cnJlbnRQYWdlLCBpIC0gMSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUGFnZXIodGhpcy5jdXJyZW50UGFnZSwgaSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQmV0d2VlbiBudW1iZXJzXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHRoaXMuY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVBhZ2VyKHRoaXMuY3VycmVudFBhZ2UsICcuLi4nLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQYWdlcih0aGlzLmN1cnJlbnRQYWdlLCBpIC0gMSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQYWdlcih0aGlzLmN1cnJlbnRQYWdlLCBpLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQYWdlcih0aGlzLmN1cnJlbnRQYWdlLCBpICsgMSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQYWdlcih0aGlzLmN1cnJlbnRQYWdlLCAnLi4uJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3JlYXRlUGFnZXIodGhpcy5jdXJyZW50UGFnZSwgdGhpcy5sYXN0UGFnZSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5leHRQYWdlciA9IHRoaXMuY29uc3RydWN0UGFnZXIoXHJcbiAgICAgICAgICAgIHRoaXMubGFzdFBhZ2UsXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UsXHJcbiAgICAgICAgICAgICduZXh0JyxcclxuICAgICAgICAgICAgJ1N1aXZhbnRlJ1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMudWwuYXBwZW5kQ2hpbGQobmV4dFBhZ2VyKTtcclxuICAgICAgICB0aGlzLm5hdi5hcHBlbmRDaGlsZCh0aGlzLnVsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmF2O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlcjtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU2x1Zyh0ZXh0KSB7XHJcbiAgICBjb25zdCBhcnJheURhdGFDb250ZW50ID0ge1xyXG4gICAgICAgICcvYXJ0aWNsZSc6ICcvYWN0dWFsaXRlJyxcclxuICAgICAgICAnL3JlcG9ydCc6ICcvcmFwcG9ydCcsXHJcbiAgICAgICAgJy9zcGVlY2gnOiAnL2Rpc2NvdXJzJyxcclxuICAgICAgICAnL3ByZXNzX3JlbGVhc2UnOiAnL2NvbW11bmlxdWUnLFxyXG4gICAgICAgICcvcHJlc3NfcGFjayc6ICcvZG9zc2llci1kZS1wcmVzc2UnLFxyXG4gICAgICAgICcvZWRpdG9yc19ub3RlJzogJy9ub3RlLWF1eC1yZWRhY3Rpb25zJyxcclxuICAgIH07XHJcbiAgICByZXR1cm4gYXJyYXlUZXh0KHRleHQsIGFycmF5RGF0YUNvbnRlbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVXb3JkaW5nKHRleHQpIHtcclxuICAgIGNvbnN0IGFycmF5RGF0YUNvbnRlbnQgPSB7XHJcbiAgICAgICAgcmVwb3J0OiAncmFwcG9ydCcsXHJcbiAgICAgICAgc3BlZWNoOiAnZGlzY291cnMnLFxyXG4gICAgICAgIHByZXNzX3JlbGVhc2U6ICdjb21tdW5pcXXDqScsXHJcbiAgICAgICAgcHJlc3NfcGFjazogJ2Rvc3NpZXIgZGUgcHJlc3NlJyxcclxuICAgICAgICBlZGl0b3JzX25vdGU6ICdub3RlIGF1eCByZWRhY3Rpb25zJyxcclxuICAgIH07XHJcbiAgICByZXR1cm4gYXJyYXlUZXh0KHRleHQsIGFycmF5RGF0YUNvbnRlbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcnJheVRleHQod29yZCwgYXJyYXlEYXRhQ29udGVudCkge1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXJyYXlEYXRhQ29udGVudCkpIHtcclxuICAgICAgICBpZiAod29yZC5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3b3JkLnJlcGxhY2Uoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJBeGlvcyIsIkFwaSIsInBhdGgiLCJvdXRTaXRlIiwiYXBpQ2FsbCIsInByb2Nlc3MiLCJlbnYiLCJBUElfVVJMIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhY3RpdmF0ZVBhcmVudCIsImN1cnJlbnRTZWxlY3RvciIsInBhcmVudFNlbGVjdG9yIiwiYWN0aXZlIiwicGFyZW50IiwiY2xvc2VzdCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFwcGVuZFVSTCIsInVybCIsImtleSIsInZhbHVlIiwiaW5kZXhPZiIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2VVUkwiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZXQiLCJ0b1N0cmluZyIsImdldFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwiaW5zZXJ0VXJsUGFyYW0iLCJuZXd1cmwiLCJwcm90b2NvbCIsImhvc3QiLCJwYXRobmFtZSIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJyZW1vdmVVcmxQYXJhbWV0ZXIiLCJwYXJhbUtleSIsImN1cnJlbnRVcmwiLCJocmVmIiwiVVJMIiwibmV3VXJsIiwiY2hlY2tib3hQYXJhbWV0ZXIiLCJlbHQiLCJyZXN1bHRWYWx1ZSIsInNwbGl0RG9jRGF0YSIsImRhdGFzZXQiLCJkb2N1bWVudCIsInNwbGl0IiwiY2hlY2tlZCIsImFwcGVuZCIsInNoaWZ0IiwicG9wIiwiVFlQRV9MSVNUX0JPT0xFQU4iLCJxdWVyeVNlbGVjdG9yIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJJU19QTV9ORVdTIiwiQ09OVEVOVF9VUkwiLCJDT05URU5UX1RIRU1BVElDU19VUkwiLCJDT05URU5UX1NVQlRIRU1BVElDU19VUkwiLCJBUElfQ09OVEVOVF9VUkwiLCJBUElfUFJFRklYIiwiTEVWRUxfQVQiLCJBdFRhZ3MiLCJMaXN0IiwiUGFnZXIiLCJpbml0aWF0ZVRoZW1hdGljcyIsImluaXRpYXRlU3ViVGhlbWF0aWNzIiwiaW5pdGlhdGVDaGVja2JveCIsInVwZGF0ZVJlc3VsdENvdW50IiwiaXNQbVZhciIsImluaXRpYXRlTGlzdGluZyIsImRhdGFVUkwiLCJzY3JvbGxUb3BQYWdlIiwiZGF0YUNvbnRlbnQiLCJkaXNwbGF5VG90YWxSZXN1bHQiLCJwYWdlcldyYXBwZXIiLCJlbXB0eVJlc3VsdCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJmb3JFYWNoIiwibiIsImlubmVySFRNTCIsIml0ZW0iLCJpbnNlcnRBZGphY2VudEhUTUwiLCJhcHBlbmRDaGlsZCIsInJlbmRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2R1bGVOYW1lIiwianNvbkF0IiwiY2hhcHRlcjIiLCJsZXZlbDIiLCJhdFRhZ3NDYWxsQ2xpY2siLCJKU09OIiwic3RyaW5naWZ5IiwiQXJyYXkiLCJmcm9tIiwiaXNQYXJhbSIsImNvbmNhdCIsImhhcyIsImlzTnVtIiwidGVzdCIsImFwaVVSTCIsIkF0Q2xpY2siLCJtb2R1bGVDaGlsZE5hbWUiLCJtb2R1bGVDb25jYXROYW1lIiwibmFtZSIsImlubmVyVGV4dCIsInRhcnRlYXVjaXRyb24iLCJzdGF0ZSIsImF0aW50ZXJuZXRjbmlsIiwidGFnIiwiY3VzdG9tVmFycyIsInNpdGUiLCJhdFRhZ3NDYWxsUGFnZSIsIlNDUkVFTl9TV0lUQ0giLCJyZXNldEJ0biIsIm9wZW5CdG4iLCJjbG9zZUJ0biIsInN1Ym1pdEJ0biIsInRoZW1hdGljU2VsZWN0Iiwic3VidGhlbWF0aWNTZWxlY3QiLCJ0aGVtYXRpY0NvdW50ZXIiLCJmaWx0ZXJGaWVsZHMiLCJyZXN1bHRDb3VudCIsImNoZWNrYm94ZXMiLCJkb2N1bWVudENvdW50ZXIiLCJpc1RhZyIsInRhZ0ZsYWdDbGlja0FUIiwiaW5pdGlhdGVGaWx0ZXIiLCJjYWxsQmFjayIsInVwZGF0ZUZpbHRlcnMiLCJ1cGRhdGVPcGVuQnRuIiwiZGlzcGxheU1vYmlsZUZpbHRlciIsImRlbGV0ZUFsbFRhZ3MiLCJzdWJtaXRGaWVsZHMiLCJhZGRUYWciLCJwYXJlbnROb2RlIiwidGV4dENvbnRlbnQiLCJkZWxldGVUYWciLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInRleHQiLCJyZXNldEZpbHRlcnMiLCJldmVudCIsInRhcmdldCIsInVwZGF0ZVN1YlRoZW1hdGljRmlsdGVyIiwidXBkYXRlVGhlbWF0aWNDb3VudGVyIiwibGFiZWxUZXh0IiwidHJpbSIsInVwZGF0ZUNoZWNrYm94Q291bnRlciIsImlubmVyV2lkdGgiLCJhdENoZWNrYm94IiwiY2hhcHRlcjMiLCJUSEVNQVRJQ19VUkwiLCJpbml0aWF0ZVNlbGVjdCIsInN1YnRoZW1hdGljIiwidGhlbWF0aWMiLCJTVUJfVEhFTUFUSUNfVVJMIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJmb3JjZVJlbG9hZCIsImNoZWNrYm94IiwicHVzaCIsImRvY0FwaUNhbGwiLCJqb2luIiwidG90YWxJdGVtcyIsInNldEF0dHJpYnV0ZSIsImNoZWNrIiwiaXNMaXN0IiwiY3JlYXRlT3B0aW9uIiwib3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsIm9wZW4iLCJmaWx0ZXJzQ29sIiwiYmxvY2tTY3JvbGwiLCJ1cGRhdGVNb2JpbGVTdWJtaXRDb3VudCIsImZvY3VzIiwiZ2V0RmllbGRzQ291bnQiLCJ2YWxpZEZpZWxkcyIsImZpbHRlciIsIk9iamVjdCIsImtleXMiLCJnZXRDaGVja2JveGVzQ291bnQiLCJjaGVja0ZpZWxkcyIsImlkIiwic2VsZWN0IiwiZGVmYXVsdE9wdGlvbiIsInRhZ1RoZW1hdGljIiwicGFyYW1zIiwiaXNDaGVjayIsIkFMTF9USEVNQVRJQ1NfVVJMIiwidGhlbWF0aWNWYWx1ZSIsInRoZW1hdGljSWQiLCJzdWJzdHJpbmciLCJmaWVsZHNDb3VudCIsImNoZWNrYm94ZXNDb3VudCIsImxpIiwiZG9jdW1lbnRUeXBlIiwiYnV0dG9uIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJyZW1vdmVPbkNsaWNrVGFnIiwidWwiLCJjbGljayIsIkV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIm1vbWVudCIsImdlbmVyYXRlU2x1ZyIsImdlbmVyYXRlV29yZGluZyIsInJlc3VsdCIsImdlbmVyYXRlTWVkaWFVUkwiLCJtZWRpYVVSTCIsIlVSTF9NRURJQSIsImZvcm1hdERhdGUiLCJkYXRlIiwiZm9ybWF0IiwiZ2V0TWVkaWEiLCJtZWRpYSIsImRlc2NyaXB0aW9uIiwicmVzdWx0VHlwZSIsImNvbnRlbnRUeXBlIiwic2x1ZyIsInNob3J0VGl0bGUiLCJ0aXRsZSIsInB1Ymxpc2hlZEF0IiwibWFpblRoZW1hdGljIiwiY3VycmVudFBhZ2UiLCJmaXJzdFBhZ2UiLCJsYXN0UGFnZSIsIm5hdiIsImZpbHRlclBhcmFtcyIsInBhZ2VyIiwiY3NzIiwid29yZGluZyIsImEiLCJwYWdlckluZGV4IiwiaW5jbHVkZXMiLCJBVGNsaWNrIiwiaW5kZXgiLCJtYXJrdXAiLCJqc29uQXRQYWdlIiwiY2hhcHRlcjEiLCJwcmV2aW91c1BhZ2VyIiwiY29uc3RydWN0UGFnZXIiLCJjcmVhdGVQYWdlciIsImkiLCJmaXJzdE1heCIsImxhc3RNYXgiLCJuZXh0UGFnZXIiLCJhcnJheURhdGFDb250ZW50IiwiYXJyYXlUZXh0IiwicmVwb3J0Iiwic3BlZWNoIiwicHJlc3NfcmVsZWFzZSIsInByZXNzX3BhY2siLCJlZGl0b3JzX25vdGUiLCJ3b3JkIiwiZW50cmllcyIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9