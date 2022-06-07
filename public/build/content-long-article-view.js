"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["content-long-article-view"],{

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

/***/ "./assets/app/js/summary.js":
/*!**********************************!*\
  !*** ./assets/app/js/summary.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Summary)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Constants */ "./assets/app/js/Constants.js");





function Summary() {
  var titles = document.querySelectorAll('div[data-module=titre] h2');

  if (titles.length) {
    generateSummary(titles);
  }
}

function generateSummary(titles) {
  var summary = document.querySelector('.contents-summary');
  var summaryContainer = document.querySelector('.fr-sidemenu__list');
  var html = '';
  titles.forEach(function (title) {
    var titleId = title.getAttribute('id') || generateId(title);
    html += "\n      <li class=\"fr-sidemenu__item\">\n        <a class=\"fr-sidemenu__link fr-text-title--blue-france\" href=\"#".concat(titleId, "\">").concat(title.innerText, "</a>\n      </li>\n    ");
  });
  summaryContainer.innerHTML = html;
  summary.style.display = 'block';
  initiateSummary(summary);
  displayMobileContent(summary);
}

function generateId(title) {
  var summaryUuid = "fr-sidemenu__link-".concat((0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])());
  title.setAttribute('id', summaryUuid);
  return summaryUuid;
}

function initiateSummary(summary) {
  var summaryAnchors = summary.querySelectorAll('.fr-sidemenu__link');
  summaryAnchors.forEach(function (link) {
    link.addEventListener('click', function () {
      var collapse = document.getElementById('content-summary');
      window.dsfr(collapse).collapse.conceal();
    });
  });
  var options = {
    rootMargin: '0px 0px -10% 0px',
    threshold: 1.0
  };
  window.addEventListener('DOMContentLoaded', function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id = entry.target.getAttribute('id');
        var menuLink = document.querySelector(".fr-sidemenu__link[href=\"#".concat(id, "\"]"));
        var menuItem = menuLink.parentElement;

        if (entry.isIntersecting) {
          resetSummaryActivation();
          menuItem.classList.add('active-summary');
        } else if (entry.intersectionRect.top > 0) {
          resetSummaryActivation();
          var previousMenuItem = menuItem.previousElementSibling;

          if (previousMenuItem) {
            previousMenuItem.classList.add('active-summary');
          }
        }
      });
    }, options); // Track all <h2> that have an `id` applied

    document.querySelectorAll('h2[id]').forEach(function (title) {
      observer.observe(title);
    });
  });
}

function resetSummaryActivation() {
  var activeSummaryItem = document.querySelector('.active-summary');
  if (activeSummaryItem) activeSummaryItem.classList.remove('active-summary');
}

function displayMobileContent() {
  if (window.innerWidth < _Constants__WEBPACK_IMPORTED_MODULE_3__.SCREEN_MOBILE_SWITCH + 1) {
    // Summary
    var summaryMobileWrapper = document.querySelector('.contents-summary__mobile-wrapper');
    var summary = document.querySelector('.contents-summary');

    if (summaryMobileWrapper && summary) {
      summaryMobileWrapper.appendChild(summary);
    }
  }
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

/***/ "./assets/content/index-long-article.js":
/*!**********************************************!*\
  !*** ./assets/content/index-long-article.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.scss */ "./assets/content/css/main.scss");
/* harmony import */ var _css_image_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/image.scss */ "./assets/content/css/image.scss");
/* harmony import */ var _css_media_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/media.scss */ "./assets/content/css/media.scss");
/* harmony import */ var _app_css_summary_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/css/summary.scss */ "./assets/app/css/summary.scss");
/* harmony import */ var _css_thematic_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/thematic.scss */ "./assets/content/css/thematic.scss");
/* harmony import */ var _app_css_recentsArticles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/css/recentsArticles.scss */ "./assets/app/css/recentsArticles.scss");
/* harmony import */ var _css_numberShowcase_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/numberShowcase.scss */ "./assets/content/css/numberShowcase.scss");
/* harmony import */ var _css_followUs_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/followUs.scss */ "./assets/content/css/followUs.scss");
/* harmony import */ var _css_attachment_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/attachment.scss */ "./assets/content/css/attachment.scss");
/* harmony import */ var _css_press_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/press.scss */ "./assets/content/css/press.scss");
/* harmony import */ var _css_page360_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./css/page360.scss */ "./assets/content/css/page360.scss");
/* harmony import */ var _app_js_summary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/js/summary */ "./assets/app/js/summary.js");
/* harmony import */ var _app_js_Copy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/js/Copy */ "./assets/app/js/Copy.js");
/* harmony import */ var _js_mobileDisplay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/mobileDisplay */ "./assets/content/js/mobileDisplay.js");
/* harmony import */ var _js_atContent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./js/atContent */ "./assets/content/js/atContent.js");















document.addEventListener('DOMContentLoaded', function () {
  (0,_js_mobileDisplay__WEBPACK_IMPORTED_MODULE_13__["default"])();
  (0,_app_js_Copy__WEBPACK_IMPORTED_MODULE_12__["default"])();
  (0,_app_js_summary__WEBPACK_IMPORTED_MODULE_11__["default"])();
  (0,_js_atContent__WEBPACK_IMPORTED_MODULE_14__["default"])();
});

/***/ }),

/***/ "./assets/content/js/VimeoTac.js":
/*!***************************************!*\
  !*** ./assets/content/js/VimeoTac.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VimeoTac)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);


function VimeoTac() {
  // Add / remove class on video player to apply style by clicking on Allow consent button
  var vimeoVideo = document.querySelectorAll('.vimeo-wrapper button');
  var tacAllowVid = document.querySelector('#tarteaucitronPersonalize2');

  if (vimeoVideo) {
    vimeoVideo.forEach(function (item) {
      item.closest('.vimeo-wrapper').classList.add('consentTrue');
      item.addEventListener('click', function () {
        document.querySelectorAll('.consentTrue').forEach(function (vimeo) {
          vimeo.classList.remove('consentTrue');
        });
      });
    });
  }

  if (tacAllowVid && vimeoVideo) {
    tacAllowVid.addEventListener('click', function () {
      vimeoVideo.forEach(function (item) {
        item.click();
      });
    });
  }
}

/***/ }),

/***/ "./assets/content/js/atContent.js":
/*!****************************************!*\
  !*** ./assets/content/js/atContent.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AtTagsContent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_js_AtTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/js/AtTags */ "./assets/app/js/AtTags.js");
/* harmony import */ var _VimeoTac__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VimeoTac */ "./assets/content/js/VimeoTac.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./assets/content/constants.js");




/* global tarteaucitron */




function AtTagsContent() {
  document.querySelectorAll('#contents__main a, #contents__main button').forEach(function (item) {
    item.addEventListener('click', function () {
      var moduleName = item.closest('[data-module]');
      var moduleChildName = item.closest('[data-child-module]');
      var moduleConcatName = item.closest('[data-concat-module]');
      var aMarkup = item.closest('a');

      if (aMarkup && !aMarkup.target && !aMarkup.closest('#content-summary')) {
        aMarkup.setAttribute('target', '_self');
      } // AT Tag Call


      var jsonAt = {
        // For name, check if it needs to concat specific wording with data
        name: moduleConcatName ? moduleConcatName.getAttribute('data-concat-module') + '_' + item.innerText : item.innerText,
        // For chapter2, use data from Child Module if exists otherwise use Module wording else empty (no set chapter2)
        chapter2: moduleChildName ? moduleChildName.getAttribute('data-child-module') : moduleName ? moduleName.getAttribute('data-module') : '',
        // For chapter3, use title data if main Module and h3 markup exist otherwise use Module data only if Child Module exist else empty (no set chapter3)
        chapter3: moduleName && moduleName.querySelector('h3') && moduleName.querySelector('h3').innerText !== 'Afficher la transcription' ? moduleName.querySelector('h3').innerText : moduleChildName ? moduleName.getAttribute('data-module') : '',
        level2: _constants__WEBPACK_IMPORTED_MODULE_6__.LEVEL_AT
      };
      new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_3__["default"]().atTagsCallClick(JSON.stringify(jsonAt), this);
    });
  });
} // Load TAC

window.addEventListener('tarteaucitron_loaded', function () {
  if (tarteaucitron.state.atinternetcnil && typeof tag !== 'undefined') {
    (0,_VimeoTac__WEBPACK_IMPORTED_MODULE_4__["default"])();
    var contentType = document.querySelector('.content--type').innerText;
    var jsonAt = {
      name: document.querySelector('h1').innerText,
      chapter1: document.querySelector('#breadcrumb-contents a[data-concat-module="acces"]').textContent,
      chapter2: document.querySelector('.mainParentThematicTarget').innerText,
      chapter3: document.querySelector('.mainThematicTarget').innerText,
      level2: _constants__WEBPACK_IMPORTED_MODULE_6__.LEVEL_AT
    };
    var customVars = {
      site: {
        1: 'fr',
        2: getAllThematics('[data-child-module="thematiques"]'),
        3: moment__WEBPACK_IMPORTED_MODULE_5___default()(document.querySelector('[data-published-date]').getAttribute('data-published-date'), 'DD-MM-YYYY').format('yyyyMMDD'),
        4: document.querySelector('[data-modified-date]') ? moment__WEBPACK_IMPORTED_MODULE_5___default()(document.querySelector('[data-modified-date]').getAttribute('data-modified-date'), 'DD-MM-YYYY').format('yyyyMMDD') : '',
        6: contentType === 'Article' ? contentType + '_' + document.querySelector('[data-format]').getAttribute('data-format') : contentType,
        15: window.location.href,
        17: getAllThematics('[data-child-module="sous-thematiques"]'),
        18: document.querySelector('[data-uuid]').getAttribute('data-uuid')
      }
    };
    new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_3__["default"]().atTagsCallPage(JSON.stringify(jsonAt), customVars);
  }
});

function getAllThematics(thematics) {
  var getAllThematics = document.querySelectorAll(thematics);
  var getThematicArray = [];
  getAllThematics.forEach(function (thematic) {
    getThematicArray.push(thematic.innerText);
  });
  var concatSep = getThematicArray.join('_/_');
  return concatSep;
}

/***/ }),

/***/ "./assets/content/js/mobileDisplay.js":
/*!********************************************!*\
  !*** ./assets/content/js/mobileDisplay.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayMobileContent)
/* harmony export */ });
/* harmony import */ var _app_js_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/js/Constants */ "./assets/app/js/Constants.js");

function displayMobileContent() {
  if (window.innerWidth <= _app_js_Constants__WEBPACK_IMPORTED_MODULE_0__.SCREEN_MOBILE_SWITCH) {
    // Thematic
    var thematicContent = document.querySelector('.fr-breadcrumb__thematic');
    var mainContent = document.querySelector('.contents__content');

    if (thematicContent && mainContent) {
      mainContent.appendChild(thematicContent);
    }
  }
}

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./assets/app/css/recentsArticles.scss":
/*!*********************************************!*\
  !*** ./assets/app/css/recentsArticles.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/app/css/summary.scss":
/*!*************************************!*\
  !*** ./assets/app/css/summary.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/content/css/attachment.scss":
/*!********************************************!*\
  !*** ./assets/content/css/attachment.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/content/css/followUs.scss":
/*!******************************************!*\
  !*** ./assets/content/css/followUs.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/content/css/image.scss":
/*!***************************************!*\
  !*** ./assets/content/css/image.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/content/css/main.scss":
/*!**************************************!*\
  !*** ./assets/content/css/main.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/content/css/media.scss":
/*!***************************************!*\
  !*** ./assets/content/css/media.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/content/css/numberShowcase.scss":
/*!************************************************!*\
  !*** ./assets/content/css/numberShowcase.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/content/css/page360.scss":
/*!*****************************************!*\
  !*** ./assets/content/css/page360.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/content/css/press.scss":
/*!***************************************!*\
  !*** ./assets/content/css/press.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/content/css/thematic.scss":
/*!******************************************!*\
  !*** ./assets/content/css/thematic.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--b791ff","vendors-node_modules_core-js_modules_es_object_define-properties_js-node_modules_core-js_modu-292aad","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-4575cb","assets_app_js_AtTags_js-assets_app_js_Constants_js-node_modules_moment_locale_sync_recursive_"], () => (__webpack_exec__("./assets/content/index-long-article.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDekQsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELDBCQUEwQixtQkFBTyxDQUFDLHVHQUFxQzs7QUFFdkU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxxRUFBcUU7QUFDekU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDakJEOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvQ29weS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3N1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRlbnQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250ZW50L2luZGV4LWxvbmctYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udGVudC9qcy9WaW1lb1RhYy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udGVudC9qcy9hdENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRlbnQvanMvbW9iaWxlRGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmpvaW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9jc3MvcmVjZW50c0FydGljbGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9jc3Mvc3VtbWFyeS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250ZW50L2Nzcy9hdHRhY2htZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRlbnQvY3NzL2ZvbGxvd1VzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRlbnQvY3NzL2ltYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRlbnQvY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udGVudC9jc3MvbWVkaWEuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udGVudC9jc3MvbnVtYmVyU2hvd2Nhc2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udGVudC9jc3MvcGFnZTM2MC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250ZW50L2Nzcy9wcmVzcy5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250ZW50L2Nzcy90aGVtYXRpYy5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcHkoKSB7XHJcbiAgICAvLyBDb3B5IFVSTCBidXR0b24gZnVuY3Rpb24gOiBjcmVhdGUsIGZvY3VzLCBzZWxlY3QsIGNvcHkgYW5kIGRlc3Ryb3lcclxuICAgIGNvbnN0IGNvcHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29weS11cmwnKTtcclxuICAgIGlmIChjb3B5KSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICAgICAgaW5wdXQuaWQgPSAnY29weUlucHV0JztcclxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGNvcHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvcHkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvcHlJbnB1dCcpO1xyXG4gICAgICAgICAgICBpbnB1dFZhbHVlLnZhbHVlID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgIGlucHV0VmFsdWUuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgICAgICAgIGNvcHkucmVtb3ZlQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHtTQ1JFRU5fTU9CSUxFX1NXSVRDSH0gZnJvbSAnLi9Db25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VtbWFyeSgpIHtcclxuICAgIGNvbnN0IHRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltkYXRhLW1vZHVsZT10aXRyZV0gaDInKTtcclxuICAgIGlmICh0aXRsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgZ2VuZXJhdGVTdW1tYXJ5KHRpdGxlcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU3VtbWFyeSh0aXRsZXMpIHtcclxuICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudHMtc3VtbWFyeScpO1xyXG4gICAgY29uc3Qgc3VtbWFyeUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mci1zaWRlbWVudV9fbGlzdCcpO1xyXG4gICAgbGV0IGh0bWwgPSAnJztcclxuICAgIHRpdGxlcy5mb3JFYWNoKCh0aXRsZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlSWQgPSB0aXRsZS5nZXRBdHRyaWJ1dGUoJ2lkJykgfHwgZ2VuZXJhdGVJZCh0aXRsZSk7XHJcbiAgICAgICAgaHRtbCArPSBgXHJcbiAgICAgIDxsaSBjbGFzcz1cImZyLXNpZGVtZW51X19pdGVtXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJmci1zaWRlbWVudV9fbGluayBmci10ZXh0LXRpdGxlLS1ibHVlLWZyYW5jZVwiIGhyZWY9XCIjJHt0aXRsZUlkfVwiPiR7dGl0bGUuaW5uZXJUZXh0fTwvYT5cclxuICAgICAgPC9saT5cclxuICAgIGA7XHJcbiAgICB9KTtcclxuICAgIHN1bW1hcnlDb250YWluZXIuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgIHN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBpbml0aWF0ZVN1bW1hcnkoc3VtbWFyeSk7XHJcbiAgICBkaXNwbGF5TW9iaWxlQ29udGVudChzdW1tYXJ5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVJZCh0aXRsZSkge1xyXG4gICAgY29uc3Qgc3VtbWFyeVV1aWQgPSBgZnItc2lkZW1lbnVfX2xpbmstJHt1dWlkdjQoKX1gO1xyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsIHN1bW1hcnlVdWlkKTtcclxuICAgIHJldHVybiBzdW1tYXJ5VXVpZDtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhdGVTdW1tYXJ5KHN1bW1hcnkpIHtcclxuICAgIGNvbnN0IHN1bW1hcnlBbmNob3JzID0gc3VtbWFyeS5xdWVyeVNlbGVjdG9yQWxsKCcuZnItc2lkZW1lbnVfX2xpbmsnKTtcclxuXHJcbiAgICBzdW1tYXJ5QW5jaG9ycy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29sbGFwc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudC1zdW1tYXJ5Jyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5kc2ZyKGNvbGxhcHNlKS5jb2xsYXBzZS5jb25jZWFsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIHJvb3RNYXJnaW46ICcwcHggMHB4IC0xMCUgMHB4JyxcclxuICAgICAgICB0aHJlc2hvbGQ6IDEuMCxcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBlbnRyeS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgICAgICAgIGAuZnItc2lkZW1lbnVfX2xpbmtbaHJlZj1cIiMke2lkfVwiXWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51SXRlbSA9IG1lbnVMaW5rLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNldFN1bW1hcnlBY3RpdmF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXN1bW1hcnknKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZW50cnkuaW50ZXJzZWN0aW9uUmVjdC50b3AgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRTdW1tYXJ5QWN0aXZhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzTWVudUl0ZW0gPSBtZW51SXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c01lbnVJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzTWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXN1bW1hcnknKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyBUcmFjayBhbGwgPGgyPiB0aGF0IGhhdmUgYW4gYGlkYCBhcHBsaWVkXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaDJbaWRdJykuZm9yRWFjaCgodGl0bGUpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aXRsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRTdW1tYXJ5QWN0aXZhdGlvbigpIHtcclxuICAgIGNvbnN0IGFjdGl2ZVN1bW1hcnlJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZS1zdW1tYXJ5Jyk7XHJcbiAgICBpZiAoYWN0aXZlU3VtbWFyeUl0ZW0pIGFjdGl2ZVN1bW1hcnlJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1zdW1tYXJ5Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlNb2JpbGVDb250ZW50KCkge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgU0NSRUVOX01PQklMRV9TV0lUQ0ggKyAxKSB7XHJcbiAgICAgICAgLy8gU3VtbWFyeVxyXG4gICAgICAgIGNvbnN0IHN1bW1hcnlNb2JpbGVXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgJy5jb250ZW50cy1zdW1tYXJ5X19tb2JpbGUtd3JhcHBlcidcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudHMtc3VtbWFyeScpO1xyXG4gICAgICAgIGlmIChzdW1tYXJ5TW9iaWxlV3JhcHBlciAmJiBzdW1tYXJ5KSB7XHJcbiAgICAgICAgICAgIHN1bW1hcnlNb2JpbGVXcmFwcGVyLmFwcGVuZENoaWxkKHN1bW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgVFlQRV9MSVNUX0JPT0xFQU4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1saXN0XScpXHJcbiAgICA/ICEhcGFyc2VJbnQoXHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1saXN0XScpLmdldEF0dHJpYnV0ZSgnZGF0YS1saXN0JylcclxuICAgICAgKVxyXG4gICAgOiBudWxsO1xyXG5leHBvcnQgY29uc3QgSVNfUE1fTkVXUyA9ICdpc1BtTmV3cyc7XHJcbmV4cG9ydCBjb25zdCBDT05URU5UX1VSTCA9XHJcbiAgICBUWVBFX0xJU1RfQk9PTEVBTiA9PT0gbnVsbCA/ICcvY29udGVudHMnIDogJy9hcnRpY2xlcyc7XHJcbmV4cG9ydCBjb25zdCBDT05URU5UX1RIRU1BVElDU19VUkwgPSAnL2FwaS9jb250ZW50X3RoZW1hdGljcyc7XHJcbmV4cG9ydCBjb25zdCBDT05URU5UX1NVQlRIRU1BVElDU19VUkwgPSAnL2FwaS9jb250ZW50X3N1YnRoZW1hdGljcyc7XHJcbmV4cG9ydCBjb25zdCBBUElfQ09OVEVOVF9VUkwgPSBwcm9jZXNzLmVudi5BUElfUFJFRklYICsgQ09OVEVOVF9VUkw7XHJcbmV4cG9ydCBjb25zdCBMRVZFTF9BVCA9ICcyJztcclxuIiwiaW1wb3J0ICcuL2Nzcy9tYWluLnNjc3MnO1xyXG5pbXBvcnQgJy4vY3NzL2ltYWdlLnNjc3MnO1xyXG5pbXBvcnQgJy4vY3NzL21lZGlhLnNjc3MnO1xyXG5pbXBvcnQgJy4uL2FwcC9jc3Mvc3VtbWFyeS5zY3NzJztcclxuaW1wb3J0ICcuL2Nzcy90aGVtYXRpYy5zY3NzJztcclxuaW1wb3J0ICcuLi9hcHAvY3NzL3JlY2VudHNBcnRpY2xlcy5zY3NzJztcclxuaW1wb3J0ICcuL2Nzcy9udW1iZXJTaG93Y2FzZS5zY3NzJztcclxuaW1wb3J0ICcuL2Nzcy9mb2xsb3dVcy5zY3NzJztcclxuaW1wb3J0ICcuL2Nzcy9hdHRhY2htZW50LnNjc3MnO1xyXG5pbXBvcnQgJy4vY3NzL3ByZXNzLnNjc3MnO1xyXG5pbXBvcnQgJy4vY3NzL3BhZ2UzNjAuc2Nzcyc7XHJcbmltcG9ydCBTdW1tYXJ5IGZyb20gJy4uL2FwcC9qcy9zdW1tYXJ5JztcclxuaW1wb3J0IENvcHkgZnJvbSAnLi4vYXBwL2pzL0NvcHknO1xyXG5pbXBvcnQgZGlzcGxheU1vYmlsZUNvbnRlbnQgZnJvbSAnLi9qcy9tb2JpbGVEaXNwbGF5JztcclxuaW1wb3J0IEF0VGFnc0NvbnRlbnQgZnJvbSAnLi9qcy9hdENvbnRlbnQnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGRpc3BsYXlNb2JpbGVDb250ZW50KCk7XHJcbiAgICBDb3B5KCk7XHJcbiAgICBTdW1tYXJ5KCk7XHJcbiAgICBBdFRhZ3NDb250ZW50KCk7XHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaW1lb1RhYygpIHtcclxuICAgIC8vIEFkZCAvIHJlbW92ZSBjbGFzcyBvbiB2aWRlbyBwbGF5ZXIgdG8gYXBwbHkgc3R5bGUgYnkgY2xpY2tpbmcgb24gQWxsb3cgY29uc2VudCBidXR0b25cclxuICAgIGNvbnN0IHZpbWVvVmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmltZW8td3JhcHBlciBidXR0b24nKTtcclxuICAgIGNvbnN0IHRhY0FsbG93VmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhcnRlYXVjaXRyb25QZXJzb25hbGl6ZTInKTtcclxuICAgIGlmICh2aW1lb1ZpZGVvKSB7XHJcbiAgICAgICAgdmltZW9WaWRlby5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xvc2VzdCgnLnZpbWVvLXdyYXBwZXInKS5jbGFzc0xpc3QuYWRkKCdjb25zZW50VHJ1ZScpO1xyXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnNlbnRUcnVlJykuZm9yRWFjaCgodmltZW8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2aW1lby5jbGFzc0xpc3QucmVtb3ZlKCdjb25zZW50VHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRhY0FsbG93VmlkICYmIHZpbWVvVmlkZW8pIHtcclxuICAgICAgICB0YWNBbGxvd1ZpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmltZW9WaWRlby5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qIGdsb2JhbCB0YXJ0ZWF1Y2l0cm9uICovXHJcblxyXG5pbXBvcnQgQXRUYWdzIGZyb20gJy4uLy4uL2FwcC9qcy9BdFRhZ3MnO1xyXG5pbXBvcnQgVmltZW9UYWMgZnJvbSAnLi9WaW1lb1RhYyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmltcG9ydCB7TEVWRUxfQVR9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdFRhZ3NDb250ZW50KCkge1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRlbnRzX19tYWluIGEsICNjb250ZW50c19fbWFpbiBidXR0b24nKVxyXG4gICAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGVOYW1lID0gaXRlbS5jbG9zZXN0KCdbZGF0YS1tb2R1bGVdJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGVDaGlsZE5hbWUgPSBpdGVtLmNsb3Nlc3QoJ1tkYXRhLWNoaWxkLW1vZHVsZV0nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZHVsZUNvbmNhdE5hbWUgPSBpdGVtLmNsb3Nlc3QoJ1tkYXRhLWNvbmNhdC1tb2R1bGVdJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhTWFya3VwID0gaXRlbS5jbG9zZXN0KCdhJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgYU1hcmt1cCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFhTWFya3VwLnRhcmdldCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFhTWFya3VwLmNsb3Nlc3QoJyNjb250ZW50LXN1bW1hcnknKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYU1hcmt1cC5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfc2VsZicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQVQgVGFnIENhbGxcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb25BdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgbmFtZSwgY2hlY2sgaWYgaXQgbmVlZHMgdG8gY29uY2F0IHNwZWNpZmljIHdvcmRpbmcgd2l0aCBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbW9kdWxlQ29uY2F0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG1vZHVsZUNvbmNhdE5hbWUuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbmNhdC1tb2R1bGUnKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ18nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlubmVyVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0uaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBjaGFwdGVyMiwgdXNlIGRhdGEgZnJvbSBDaGlsZCBNb2R1bGUgaWYgZXhpc3RzIG90aGVyd2lzZSB1c2UgTW9kdWxlIHdvcmRpbmcgZWxzZSBlbXB0eSAobm8gc2V0IGNoYXB0ZXIyKVxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXB0ZXIyOiBtb2R1bGVDaGlsZE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBtb2R1bGVDaGlsZE5hbWUuZ2V0QXR0cmlidXRlKCdkYXRhLWNoaWxkLW1vZHVsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbW9kdWxlTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG1vZHVsZU5hbWUuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZHVsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGNoYXB0ZXIzLCB1c2UgdGl0bGUgZGF0YSBpZiBtYWluIE1vZHVsZSBhbmQgaDMgbWFya3VwIGV4aXN0IG90aGVyd2lzZSB1c2UgTW9kdWxlIGRhdGEgb25seSBpZiBDaGlsZCBNb2R1bGUgZXhpc3QgZWxzZSBlbXB0eSAobm8gc2V0IGNoYXB0ZXIzKVxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXB0ZXIzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWUucXVlcnlTZWxlY3RvcignaDMnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lLnF1ZXJ5U2VsZWN0b3IoJ2gzJykuaW5uZXJUZXh0ICE9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FmZmljaGVyIGxhIHRyYW5zY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1vZHVsZU5hbWUucXVlcnlTZWxlY3RvcignaDMnKS5pbm5lclRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbW9kdWxlQ2hpbGROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1vZHVsZU5hbWUuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZHVsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsMjogTEVWRUxfQVQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbmV3IEF0VGFncygpLmF0VGFnc0NhbGxDbGljayhKU09OLnN0cmluZ2lmeShqc29uQXQpLCB0aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbi8vIExvYWQgVEFDXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0YXJ0ZWF1Y2l0cm9uX2xvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0YXJ0ZWF1Y2l0cm9uLnN0YXRlLmF0aW50ZXJuZXRjbmlsICYmIHR5cGVvZiB0YWcgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgVmltZW9UYWMoKTtcclxuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LS10eXBlJykuaW5uZXJUZXh0O1xyXG4gICAgICAgIGNvbnN0IGpzb25BdCA9IHtcclxuICAgICAgICAgICAgbmFtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5pbm5lclRleHQsXHJcbiAgICAgICAgICAgIGNoYXB0ZXIxOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgICAgJyNicmVhZGNydW1iLWNvbnRlbnRzIGFbZGF0YS1jb25jYXQtbW9kdWxlPVwiYWNjZXNcIl0nXHJcbiAgICAgICAgICAgICkudGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgIGNoYXB0ZXIyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpblBhcmVudFRoZW1hdGljVGFyZ2V0JylcclxuICAgICAgICAgICAgICAgIC5pbm5lclRleHQsXHJcbiAgICAgICAgICAgIGNoYXB0ZXIzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpblRoZW1hdGljVGFyZ2V0JykuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICBsZXZlbDI6IExFVkVMX0FULFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgY3VzdG9tVmFycyA9IHtcclxuICAgICAgICAgICAgc2l0ZToge1xyXG4gICAgICAgICAgICAgICAgMTogJ2ZyJyxcclxuICAgICAgICAgICAgICAgIDI6IGdldEFsbFRoZW1hdGljcygnW2RhdGEtY2hpbGQtbW9kdWxlPVwidGhlbWF0aXF1ZXNcIl0nKSxcclxuICAgICAgICAgICAgICAgIDM6IG1vbWVudChcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignW2RhdGEtcHVibGlzaGVkLWRhdGVdJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS1wdWJsaXNoZWQtZGF0ZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICdERC1NTS1ZWVlZJ1xyXG4gICAgICAgICAgICAgICAgKS5mb3JtYXQoJ3l5eXlNTUREJyksXHJcbiAgICAgICAgICAgICAgICA0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tb2RpZmllZC1kYXRlXScpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBtb21lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1vZGlmaWVkLWRhdGVdJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RpZmllZC1kYXRlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ0RELU1NLVlZWVknXHJcbiAgICAgICAgICAgICAgICAgICAgICApLmZvcm1hdCgneXl5eU1NREQnKVxyXG4gICAgICAgICAgICAgICAgICAgIDogJycsXHJcbiAgICAgICAgICAgICAgICA2OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID09PSAnQXJ0aWNsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjb250ZW50VHlwZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ18nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignW2RhdGEtZm9ybWF0XScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZm9ybWF0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBjb250ZW50VHlwZSxcclxuICAgICAgICAgICAgICAgIDE1OiB3aW5kb3cubG9jYXRpb24uaHJlZixcclxuICAgICAgICAgICAgICAgIDE3OiBnZXRBbGxUaGVtYXRpY3MoJ1tkYXRhLWNoaWxkLW1vZHVsZT1cInNvdXMtdGhlbWF0aXF1ZXNcIl0nKSxcclxuICAgICAgICAgICAgICAgIDE4OiBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdbZGF0YS11dWlkXScpXHJcbiAgICAgICAgICAgICAgICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS11dWlkJyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBuZXcgQXRUYWdzKCkuYXRUYWdzQ2FsbFBhZ2UoSlNPTi5zdHJpbmdpZnkoanNvbkF0KSwgY3VzdG9tVmFycyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZ2V0QWxsVGhlbWF0aWNzKHRoZW1hdGljcykge1xyXG4gICAgY29uc3QgZ2V0QWxsVGhlbWF0aWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGVtYXRpY3MpO1xyXG4gICAgY29uc3QgZ2V0VGhlbWF0aWNBcnJheSA9IFtdO1xyXG4gICAgZ2V0QWxsVGhlbWF0aWNzLmZvckVhY2goKHRoZW1hdGljKSA9PiB7XHJcbiAgICAgICAgZ2V0VGhlbWF0aWNBcnJheS5wdXNoKHRoZW1hdGljLmlubmVyVGV4dCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNvbmNhdFNlcCA9IGdldFRoZW1hdGljQXJyYXkuam9pbignXy9fJyk7XHJcbiAgICByZXR1cm4gY29uY2F0U2VwO1xyXG59XHJcbiIsImltcG9ydCB7U0NSRUVOX01PQklMRV9TV0lUQ0h9IGZyb20gJy4uLy4uL2FwcC9qcy9Db25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheU1vYmlsZUNvbnRlbnQoKSB7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gU0NSRUVOX01PQklMRV9TV0lUQ0gpIHtcclxuICAgICAgICAvLyBUaGVtYXRpY1xyXG4gICAgICAgIGNvbnN0IHRoZW1hdGljQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICcuZnItYnJlYWRjcnVtYl9fdGhlbWF0aWMnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50c19fY29udGVudCcpO1xyXG4gICAgICAgIGlmICh0aGVtYXRpY0NvbnRlbnQgJiYgbWFpbkNvbnRlbnQpIHtcclxuICAgICAgICAgICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodGhlbWF0aWNDb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgbmF0aXZlSm9pbiA9IFtdLmpvaW47XG5cbnZhciBFUzNfU1RSSU5HUyA9IEluZGV4ZWRPYmplY3QgIT0gT2JqZWN0O1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdqb2luJywgJywnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5qb2luYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmpvaW5cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEVTM19TVFJJTkdTIHx8ICFTVFJJQ1RfTUVUSE9EIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbi5jYWxsKHRvSW5kZXhlZE9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb3B5IiwiY29weSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlucHV0IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsInZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZENoaWxkIiwiaW5wdXRWYWx1ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlQ2hpbGQiLCJ2NCIsInV1aWR2NCIsIlNDUkVFTl9NT0JJTEVfU1dJVENIIiwiU3VtbWFyeSIsInRpdGxlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJnZW5lcmF0ZVN1bW1hcnkiLCJzdW1tYXJ5Iiwic3VtbWFyeUNvbnRhaW5lciIsImh0bWwiLCJmb3JFYWNoIiwidGl0bGUiLCJ0aXRsZUlkIiwiZ2V0QXR0cmlidXRlIiwiZ2VuZXJhdGVJZCIsImlubmVyVGV4dCIsImlubmVySFRNTCIsInN0eWxlIiwiZGlzcGxheSIsImluaXRpYXRlU3VtbWFyeSIsImRpc3BsYXlNb2JpbGVDb250ZW50Iiwic3VtbWFyeVV1aWQiLCJzdW1tYXJ5QW5jaG9ycyIsImxpbmsiLCJjb2xsYXBzZSIsImdldEVsZW1lbnRCeUlkIiwiZHNmciIsImNvbmNlYWwiLCJvcHRpb25zIiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJ0YXJnZXQiLCJtZW51TGluayIsIm1lbnVJdGVtIiwicGFyZW50RWxlbWVudCIsImlzSW50ZXJzZWN0aW5nIiwicmVzZXRTdW1tYXJ5QWN0aXZhdGlvbiIsImNsYXNzTGlzdCIsImFkZCIsImludGVyc2VjdGlvblJlY3QiLCJ0b3AiLCJwcmV2aW91c01lbnVJdGVtIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm9ic2VydmUiLCJhY3RpdmVTdW1tYXJ5SXRlbSIsInJlbW92ZSIsImlubmVyV2lkdGgiLCJzdW1tYXJ5TW9iaWxlV3JhcHBlciIsIlRZUEVfTElTVF9CT09MRUFOIiwicGFyc2VJbnQiLCJJU19QTV9ORVdTIiwiQ09OVEVOVF9VUkwiLCJDT05URU5UX1RIRU1BVElDU19VUkwiLCJDT05URU5UX1NVQlRIRU1BVElDU19VUkwiLCJBUElfQ09OVEVOVF9VUkwiLCJwcm9jZXNzIiwiZW52IiwiQVBJX1BSRUZJWCIsIkxFVkVMX0FUIiwiQXRUYWdzQ29udGVudCIsIlZpbWVvVGFjIiwidmltZW9WaWRlbyIsInRhY0FsbG93VmlkIiwiaXRlbSIsImNsb3Nlc3QiLCJ2aW1lbyIsImNsaWNrIiwiQXRUYWdzIiwibW9tZW50IiwibW9kdWxlTmFtZSIsIm1vZHVsZUNoaWxkTmFtZSIsIm1vZHVsZUNvbmNhdE5hbWUiLCJhTWFya3VwIiwianNvbkF0IiwibmFtZSIsImNoYXB0ZXIyIiwiY2hhcHRlcjMiLCJsZXZlbDIiLCJhdFRhZ3NDYWxsQ2xpY2siLCJKU09OIiwic3RyaW5naWZ5IiwidGFydGVhdWNpdHJvbiIsInN0YXRlIiwiYXRpbnRlcm5ldGNuaWwiLCJ0YWciLCJjb250ZW50VHlwZSIsImNoYXB0ZXIxIiwidGV4dENvbnRlbnQiLCJjdXN0b21WYXJzIiwic2l0ZSIsImdldEFsbFRoZW1hdGljcyIsImZvcm1hdCIsImF0VGFnc0NhbGxQYWdlIiwidGhlbWF0aWNzIiwiZ2V0VGhlbWF0aWNBcnJheSIsInRoZW1hdGljIiwicHVzaCIsImNvbmNhdFNlcCIsImpvaW4iLCJ0aGVtYXRpY0NvbnRlbnQiLCJtYWluQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=