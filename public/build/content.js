(self["webpackChunk"] = self["webpackChunk"] || []).push([["content"],{

/***/ "./assets/app/js/Copy.js":
/*!*******************************!*\
  !*** ./assets/app/js/Copy.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./assets/content/constants.js":
/*!*************************************!*\
  !*** ./assets/content/constants.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./assets/content/index.js":
/*!*********************************!*\
  !*** ./assets/content/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.scss */ "./assets/content/css/main.scss");
/* harmony import */ var _css_media_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/media.scss */ "./assets/content/css/media.scss");
/* harmony import */ var _css_thematic_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/thematic.scss */ "./assets/content/css/thematic.scss");
/* harmony import */ var _app_css_recentsArticles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/css/recentsArticles.scss */ "./assets/app/css/recentsArticles.scss");
/* harmony import */ var _css_numberShowcase_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/numberShowcase.scss */ "./assets/content/css/numberShowcase.scss");
/* harmony import */ var _css_followUs_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/followUs.scss */ "./assets/content/css/followUs.scss");
/* harmony import */ var _css_attachment_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/attachment.scss */ "./assets/content/css/attachment.scss");
/* harmony import */ var _css_press_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/press.scss */ "./assets/content/css/press.scss");
/* harmony import */ var _css_page360_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/page360.scss */ "./assets/content/css/page360.scss");
/* harmony import */ var _app_js_Copy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/js/Copy */ "./assets/app/js/Copy.js");
/* harmony import */ var _js_mobileDisplay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/mobileDisplay */ "./assets/content/js/mobileDisplay.js");
/* harmony import */ var _js_atContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/atContent */ "./assets/content/js/atContent.js");












document.addEventListener('DOMContentLoaded', function () {
  (0,_js_mobileDisplay__WEBPACK_IMPORTED_MODULE_10__["default"])();
  (0,_app_js_Copy__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_js_atContent__WEBPACK_IMPORTED_MODULE_11__["default"])();
});

/***/ }),

/***/ "./assets/content/js/VimeoTac.js":
/*!***************************************!*\
  !*** ./assets/content/js/VimeoTac.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ ((module) => {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-property.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.keys.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "./assets/app/css/recentsArticles.scss":
/*!*********************************************!*\
  !*** ./assets/app/css/recentsArticles.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/content/css/attachment.scss":
/*!********************************************!*\
  !*** ./assets/content/css/attachment.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/content/css/followUs.scss":
/*!******************************************!*\
  !*** ./assets/content/css/followUs.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/content/css/main.scss":
/*!**************************************!*\
  !*** ./assets/content/css/main.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/content/css/media.scss":
/*!***************************************!*\
  !*** ./assets/content/css/media.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/content/css/numberShowcase.scss":
/*!************************************************!*\
  !*** ./assets/content/css/numberShowcase.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/content/css/page360.scss":
/*!*****************************************!*\
  !*** ./assets/content/css/page360.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/content/css/press.scss":
/*!***************************************!*\
  !*** ./assets/content/css/press.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/content/css/thematic.scss":
/*!******************************************!*\
  !*** ./assets/content/css/thematic.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--b791ff","vendors-node_modules_core-js_modules_es_object_define-properties_js-node_modules_core-js_modu-292aad","assets_app_js_AtTags_js-assets_app_js_Constants_js-node_modules_moment_locale_sync_recursive_"], () => (__webpack_exec__("./assets/content/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDJHQUF3QztBQUNwRCw2QkFBNkIsbUJBQU8sQ0FBQywrRkFBaUM7O0FBRXRFO0FBQ0E7QUFDQSxJQUFJLHVFQUF1RTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDWEQ7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9Db3B5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250ZW50L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udGVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udGVudC9qcy9WaW1lb1RhYy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udGVudC9qcy9hdENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRlbnQvanMvbW9iaWxlRGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmpvaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy50cmltLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvY3NzL3JlY2VudHNBcnRpY2xlcy5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250ZW50L2Nzcy9hdHRhY2htZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRlbnQvY3NzL2ZvbGxvd1VzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRlbnQvY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udGVudC9jc3MvbWVkaWEuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udGVudC9jc3MvbnVtYmVyU2hvd2Nhc2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udGVudC9jc3MvcGFnZTM2MC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250ZW50L2Nzcy9wcmVzcy5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250ZW50L2Nzcy90aGVtYXRpYy5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcHkoKSB7XHJcbiAgICAvLyBDb3B5IFVSTCBidXR0b24gZnVuY3Rpb24gOiBjcmVhdGUsIGZvY3VzLCBzZWxlY3QsIGNvcHkgYW5kIGRlc3Ryb3lcclxuICAgIGNvbnN0IGNvcHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29weS11cmwnKTtcclxuICAgIGlmIChjb3B5KSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICAgICAgaW5wdXQuaWQgPSAnY29weUlucHV0JztcclxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGNvcHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvcHkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvcHlJbnB1dCcpO1xyXG4gICAgICAgICAgICBpbnB1dFZhbHVlLnZhbHVlID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgIGlucHV0VmFsdWUuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgICAgICAgIGNvcHkucmVtb3ZlQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBUWVBFX0xJU1RfQk9PTEVBTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxpc3RdJylcclxuICAgID8gISFwYXJzZUludChcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxpc3RdJykuZ2V0QXR0cmlidXRlKCdkYXRhLWxpc3QnKVxyXG4gICAgICApXHJcbiAgICA6IG51bGw7XHJcbmV4cG9ydCBjb25zdCBJU19QTV9ORVdTID0gJ2lzUG1OZXdzJztcclxuZXhwb3J0IGNvbnN0IENPTlRFTlRfVVJMID1cclxuICAgIFRZUEVfTElTVF9CT09MRUFOID09PSBudWxsID8gJy9jb250ZW50cycgOiAnL2FydGljbGVzJztcclxuZXhwb3J0IGNvbnN0IENPTlRFTlRfVEhFTUFUSUNTX1VSTCA9ICcvYXBpL2NvbnRlbnRfdGhlbWF0aWNzJztcclxuZXhwb3J0IGNvbnN0IENPTlRFTlRfU1VCVEhFTUFUSUNTX1VSTCA9ICcvYXBpL2NvbnRlbnRfc3VidGhlbWF0aWNzJztcclxuZXhwb3J0IGNvbnN0IEFQSV9DT05URU5UX1VSTCA9IHByb2Nlc3MuZW52LkFQSV9QUkVGSVggKyBDT05URU5UX1VSTDtcclxuZXhwb3J0IGNvbnN0IExFVkVMX0FUID0gJzInO1xyXG4iLCJpbXBvcnQgJy4vY3NzL21haW4uc2Nzcyc7XHJcbmltcG9ydCAnLi9jc3MvbWVkaWEuc2Nzcyc7XHJcbmltcG9ydCAnLi9jc3MvdGhlbWF0aWMuc2Nzcyc7XHJcbmltcG9ydCAnLi4vYXBwL2Nzcy9yZWNlbnRzQXJ0aWNsZXMuc2Nzcyc7XHJcbmltcG9ydCAnLi9jc3MvbnVtYmVyU2hvd2Nhc2Uuc2Nzcyc7XHJcbmltcG9ydCAnLi9jc3MvZm9sbG93VXMuc2Nzcyc7XHJcbmltcG9ydCAnLi9jc3MvYXR0YWNobWVudC5zY3NzJztcclxuaW1wb3J0ICcuL2Nzcy9wcmVzcy5zY3NzJztcclxuaW1wb3J0ICcuL2Nzcy9wYWdlMzYwLnNjc3MnO1xyXG5pbXBvcnQgQ29weSBmcm9tICcuLi9hcHAvanMvQ29weSc7XHJcbmltcG9ydCBkaXNwbGF5TW9iaWxlQ29udGVudCBmcm9tICcuL2pzL21vYmlsZURpc3BsYXknO1xyXG5pbXBvcnQgQXRUYWdzQ29udGVudCBmcm9tICcuL2pzL2F0Q29udGVudCc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgZGlzcGxheU1vYmlsZUNvbnRlbnQoKTtcclxuICAgIENvcHkoKTtcclxuICAgIEF0VGFnc0NvbnRlbnQoKTtcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpbWVvVGFjKCkge1xyXG4gICAgLy8gQWRkIC8gcmVtb3ZlIGNsYXNzIG9uIHZpZGVvIHBsYXllciB0byBhcHBseSBzdHlsZSBieSBjbGlja2luZyBvbiBBbGxvdyBjb25zZW50IGJ1dHRvblxyXG4gICAgY29uc3QgdmltZW9WaWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52aW1lby13cmFwcGVyIGJ1dHRvbicpO1xyXG4gICAgY29uc3QgdGFjQWxsb3dWaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFydGVhdWNpdHJvblBlcnNvbmFsaXplMicpO1xyXG4gICAgaWYgKHZpbWVvVmlkZW8pIHtcclxuICAgICAgICB2aW1lb1ZpZGVvLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5jbG9zZXN0KCcudmltZW8td3JhcHBlcicpLmNsYXNzTGlzdC5hZGQoJ2NvbnNlbnRUcnVlJyk7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29uc2VudFRydWUnKS5mb3JFYWNoKCh2aW1lbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpbWVvLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnNlbnRUcnVlJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGFjQWxsb3dWaWQgJiYgdmltZW9WaWRlbykge1xyXG4gICAgICAgIHRhY0FsbG93VmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2aW1lb1ZpZGVvLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xpY2soKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyogZ2xvYmFsIHRhcnRlYXVjaXRyb24gKi9cclxuXHJcbmltcG9ydCBBdFRhZ3MgZnJvbSAnLi4vLi4vYXBwL2pzL0F0VGFncyc7XHJcbmltcG9ydCBWaW1lb1RhYyBmcm9tICcuL1ZpbWVvVGFjJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuaW1wb3J0IHtMRVZFTF9BVH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF0VGFnc0NvbnRlbnQoKSB7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcjY29udGVudHNfX21haW4gYSwgI2NvbnRlbnRzX19tYWluIGJ1dHRvbicpXHJcbiAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZHVsZU5hbWUgPSBpdGVtLmNsb3Nlc3QoJ1tkYXRhLW1vZHVsZV0nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZHVsZUNoaWxkTmFtZSA9IGl0ZW0uY2xvc2VzdCgnW2RhdGEtY2hpbGQtbW9kdWxlXScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kdWxlQ29uY2F0TmFtZSA9IGl0ZW0uY2xvc2VzdCgnW2RhdGEtY29uY2F0LW1vZHVsZV0nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFNYXJrdXAgPSBpdGVtLmNsb3Nlc3QoJ2EnKTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBhTWFya3VwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIWFNYXJrdXAudGFyZ2V0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIWFNYXJrdXAuY2xvc2VzdCgnI2NvbnRlbnQtc3VtbWFyeScpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBhTWFya3VwLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19zZWxmJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBBVCBUYWcgQ2FsbFxyXG4gICAgICAgICAgICAgICAgY29uc3QganNvbkF0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBuYW1lLCBjaGVjayBpZiBpdCBuZWVkcyB0byBjb25jYXQgc3BlY2lmaWMgd29yZGluZyB3aXRoIGRhdGFcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBtb2R1bGVDb25jYXROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbW9kdWxlQ29uY2F0TmFtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29uY2F0LW1vZHVsZScpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnXycgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5uZXJUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGNoYXB0ZXIyLCB1c2UgZGF0YSBmcm9tIENoaWxkIE1vZHVsZSBpZiBleGlzdHMgb3RoZXJ3aXNlIHVzZSBNb2R1bGUgd29yZGluZyBlbHNlIGVtcHR5IChubyBzZXQgY2hhcHRlcjIpXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjI6IG1vZHVsZUNoaWxkTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG1vZHVsZUNoaWxkTmFtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hpbGQtbW9kdWxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBtb2R1bGVOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbW9kdWxlTmFtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kdWxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgY2hhcHRlcjMsIHVzZSB0aXRsZSBkYXRhIGlmIG1haW4gTW9kdWxlIGFuZCBoMyBtYXJrdXAgZXhpc3Qgb3RoZXJ3aXNlIHVzZSBNb2R1bGUgZGF0YSBvbmx5IGlmIENoaWxkIE1vZHVsZSBleGlzdCBlbHNlIGVtcHR5IChubyBzZXQgY2hhcHRlcjMpXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZS5xdWVyeVNlbGVjdG9yKCdoMycpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWUucXVlcnlTZWxlY3RvcignaDMnKS5pbm5lclRleHQgIT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWZmaWNoZXIgbGEgdHJhbnNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbW9kdWxlTmFtZS5xdWVyeVNlbGVjdG9yKCdoMycpLmlubmVyVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtb2R1bGVDaGlsZE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbW9kdWxlTmFtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kdWxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwyOiBMRVZFTF9BVCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBuZXcgQXRUYWdzKCkuYXRUYWdzQ2FsbENsaWNrKEpTT04uc3RyaW5naWZ5KGpzb25BdCksIHRoaXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuLy8gTG9hZCBUQUNcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RhcnRlYXVjaXRyb25fbG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRhcnRlYXVjaXRyb24uc3RhdGUuYXRpbnRlcm5ldGNuaWwgJiYgdHlwZW9mIHRhZyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBWaW1lb1RhYygpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtLXR5cGUnKS5pbm5lclRleHQ7XHJcbiAgICAgICAgY29uc3QganNvbkF0ID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgY2hhcHRlcjE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAnI2JyZWFkY3J1bWItY29udGVudHMgYVtkYXRhLWNvbmNhdC1tb2R1bGU9XCJhY2Nlc1wiXSdcclxuICAgICAgICAgICAgKS50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgY2hhcHRlcjI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluUGFyZW50VGhlbWF0aWNUYXJnZXQnKVxyXG4gICAgICAgICAgICAgICAgLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgY2hhcHRlcjM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluVGhlbWF0aWNUYXJnZXQnKS5pbm5lclRleHQsXHJcbiAgICAgICAgICAgIGxldmVsMjogTEVWRUxfQVQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBjdXN0b21WYXJzID0ge1xyXG4gICAgICAgICAgICBzaXRlOiB7XHJcbiAgICAgICAgICAgICAgICAxOiAnZnInLFxyXG4gICAgICAgICAgICAgICAgMjogZ2V0QWxsVGhlbWF0aWNzKCdbZGF0YS1jaGlsZC1tb2R1bGU9XCJ0aGVtYXRpcXVlc1wiXScpLFxyXG4gICAgICAgICAgICAgICAgMzogbW9tZW50KFxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wdWJsaXNoZWQtZGF0ZV0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLXB1Ymxpc2hlZC1kYXRlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RELU1NLVlZWVknXHJcbiAgICAgICAgICAgICAgICApLmZvcm1hdCgneXl5eU1NREQnKSxcclxuICAgICAgICAgICAgICAgIDQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1vZGlmaWVkLWRhdGVdJylcclxuICAgICAgICAgICAgICAgICAgICA/IG1vbWVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignW2RhdGEtbW9kaWZpZWQtZGF0ZV0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZGlmaWVkLWRhdGUnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnREQtTU0tWVlZWSdcclxuICAgICAgICAgICAgICAgICAgICAgICkuZm9ybWF0KCd5eXl5TU1ERCcpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJyxcclxuICAgICAgICAgICAgICAgIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGUgPT09ICdBcnRpY2xlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNvbnRlbnRUeXBlICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnXycgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mb3JtYXRdJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS1mb3JtYXQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNvbnRlbnRUeXBlLFxyXG4gICAgICAgICAgICAgICAgMTU6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxyXG4gICAgICAgICAgICAgICAgMTc6IGdldEFsbFRoZW1hdGljcygnW2RhdGEtY2hpbGQtbW9kdWxlPVwic291cy10aGVtYXRpcXVlc1wiXScpLFxyXG4gICAgICAgICAgICAgICAgMTg6IGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXV1aWRdJylcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLXV1aWQnKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIG5ldyBBdFRhZ3MoKS5hdFRhZ3NDYWxsUGFnZShKU09OLnN0cmluZ2lmeShqc29uQXQpLCBjdXN0b21WYXJzKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBnZXRBbGxUaGVtYXRpY3ModGhlbWF0aWNzKSB7XHJcbiAgICBjb25zdCBnZXRBbGxUaGVtYXRpY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoZW1hdGljcyk7XHJcbiAgICBjb25zdCBnZXRUaGVtYXRpY0FycmF5ID0gW107XHJcbiAgICBnZXRBbGxUaGVtYXRpY3MuZm9yRWFjaCgodGhlbWF0aWMpID0+IHtcclxuICAgICAgICBnZXRUaGVtYXRpY0FycmF5LnB1c2godGhlbWF0aWMuaW5uZXJUZXh0KTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY29uY2F0U2VwID0gZ2V0VGhlbWF0aWNBcnJheS5qb2luKCdfL18nKTtcclxuICAgIHJldHVybiBjb25jYXRTZXA7XHJcbn1cclxuIiwiaW1wb3J0IHtTQ1JFRU5fTU9CSUxFX1NXSVRDSH0gZnJvbSAnLi4vLi4vYXBwL2pzL0NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5TW9iaWxlQ29udGVudCgpIHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSBTQ1JFRU5fTU9CSUxFX1NXSVRDSCkge1xyXG4gICAgICAgIC8vIFRoZW1hdGljXHJcbiAgICAgICAgY29uc3QgdGhlbWF0aWNDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgJy5mci1icmVhZGNydW1iX190aGVtYXRpYydcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRzX19jb250ZW50Jyk7XHJcbiAgICAgICAgaWYgKHRoZW1hdGljQ29udGVudCAmJiBtYWluQ29udGVudCkge1xyXG4gICAgICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZCh0aGVtYXRpY0NvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG52YXIgZmFjdG9yaWVzID0ge307XG5cbnZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoQywgYXJnc0xlbmd0aCwgYXJncykge1xuICBpZiAoIShhcmdzTGVuZ3RoIGluIGZhY3RvcmllcykpIHtcbiAgICBmb3IgKHZhciBsaXN0ID0gW10sIGkgPSAwOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSBsaXN0W2ldID0gJ2FbJyArIGkgKyAnXSc7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIHdlIGhhdmUgbm8gcHJvcGVyIGFsdGVybmF0aXZlcywgSUU4LSBvbmx5XG4gICAgZmFjdG9yaWVzW2FyZ3NMZW5ndGhdID0gRnVuY3Rpb24oJ0MsYScsICdyZXR1cm4gbmV3IEMoJyArIGxpc3Quam9pbignLCcpICsgJyknKTtcbiAgfSByZXR1cm4gZmFjdG9yaWVzW2FyZ3NMZW5ndGhdKEMsIGFyZ3MpO1xufTtcblxuLy8gYEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24uYmluZCB8fCBmdW5jdGlvbiBiaW5kKHRoYXQgLyogLCAuLi5hcmdzICovKSB7XG4gIHZhciBmbiA9IGFGdW5jdGlvbih0aGlzKTtcbiAgdmFyIHBhcnRBcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICB2YXIgYm91bmRGdW5jdGlvbiA9IGZ1bmN0aW9uIGJvdW5kKC8qIGFyZ3MuLi4gKi8pIHtcbiAgICB2YXIgYXJncyA9IHBhcnRBcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgYm91bmRGdW5jdGlvbiA/IGNvbnN0cnVjdChmbiwgYXJncy5sZW5ndGgsIGFyZ3MpIDogZm4uYXBwbHkodGhhdCwgYXJncyk7XG4gIH07XG4gIGlmIChpc09iamVjdChmbi5wcm90b3R5cGUpKSBib3VuZEZ1bmN0aW9uLnByb3RvdHlwZSA9IGZuLnByb3RvdHlwZTtcbiAgcmV0dXJuIGJvdW5kRnVuY3Rpb247XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIG5vbiA9ICdcXHUyMDBCXFx1MDA4NVxcdTE4MEUnO1xuXG4vLyBjaGVjayB0aGF0IGEgbWV0aG9kIHdvcmtzIHdpdGggdGhlIGNvcnJlY3QgbGlzdFxuLy8gb2Ygd2hpdGVzcGFjZXMgYW5kIGhhcyBhIGNvcnJlY3QgbmFtZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgcmV0dXJuIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISF3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0oKSB8fCBub25bTUVUSE9EX05BTUVdKCkgIT0gbm9uIHx8IHdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXS5uYW1lICE9PSBNRVRIT0RfTkFNRTtcbiAgfSk7XG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1zdGFydFxuICBzdGFydDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1SaWdodCwgdHJpbUVuZCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwiLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbm1vZHVsZS5leHBvcnRzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyJyArXG4gICdcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmlsdGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbHRlcjtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnZmlsdGVyJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbHRlclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJGZpbHRlcih0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWluZGV4b2YgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUluZGV4T2YgPSBbXS5pbmRleE9mO1xuXG52YXIgTkVHQVRJVkVfWkVSTyA9ICEhbmF0aXZlSW5kZXhPZiAmJiAxIC8gWzFdLmluZGV4T2YoMSwgLTApIDwgMDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnaW5kZXhPZicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogTkVHQVRJVkVfWkVSTyB8fCAhU1RSSUNUX01FVEhPRCB9LCB7XG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyBuYXRpdmVJbmRleE9mLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgbmF0aXZlSm9pbiA9IFtdLmpvaW47XG5cbnZhciBFUzNfU1RSSU5HUyA9IEluZGV4ZWRPYmplY3QgIT0gT2JqZWN0O1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdqb2luJywgJywnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5qb2luYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmpvaW5cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEVTM19TVFJJTkdTIHx8ICFTVFJJQ1RfTUVUSE9EIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbi5jYWxsKHRvSW5kZXhlZE9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZCcpO1xuXG4vLyBgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuJCh7IHRhcmdldDogJ0Z1bmN0aW9uJywgcHJvdG86IHRydWUgfSwge1xuICBiaW5kOiBiaW5kXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgb2JqZWN0RGVmaW5lUHJvcGVydHlNb2RpbGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhREVTQ1JJUFRPUlMsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGRlZmluZVByb3BlcnR5OiBvYmplY3REZWZpbmVQcm9wZXJ0eU1vZGlsZS5mXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG5cbnZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoMSk7IH0pO1xudmFyIEZPUkNFRCA9ICFERVNDUklQVE9SUyB8fCBGQUlMU19PTl9QUklNSVRJVkVTO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCwgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JbmRleGVkT2JqZWN0KGl0KSwga2V5KTtcbiAgfVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIEZBSUxTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IG5hdGl2ZUtleXMoMSk7IH0pO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogRkFJTFNfT05fUFJJTUlUSVZFUyB9LCB7XG4gIGtleXM6IGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyh0b09iamVjdChpdCkpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICR0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciBmb3JjZWRTdHJpbmdUcmltTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltLWZvcmNlZCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCgndHJpbScpIH0sIHtcbiAgdHJpbTogZnVuY3Rpb24gdHJpbSgpIHtcbiAgICByZXR1cm4gJHRyaW0odGhpcyk7XG4gIH1cbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvcHkiLCJjb3B5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInNldEF0dHJpYnV0ZSIsImlkIiwidmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwZW5kQ2hpbGQiLCJpbnB1dFZhbHVlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVDaGlsZCIsIlRZUEVfTElTVF9CT09MRUFOIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJJU19QTV9ORVdTIiwiQ09OVEVOVF9VUkwiLCJDT05URU5UX1RIRU1BVElDU19VUkwiLCJDT05URU5UX1NVQlRIRU1BVElDU19VUkwiLCJBUElfQ09OVEVOVF9VUkwiLCJwcm9jZXNzIiwiZW52IiwiQVBJX1BSRUZJWCIsIkxFVkVMX0FUIiwiZGlzcGxheU1vYmlsZUNvbnRlbnQiLCJBdFRhZ3NDb250ZW50IiwiVmltZW9UYWMiLCJ2aW1lb1ZpZGVvIiwicXVlcnlTZWxlY3RvckFsbCIsInRhY0FsbG93VmlkIiwiZm9yRWFjaCIsIml0ZW0iLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwiYWRkIiwidmltZW8iLCJyZW1vdmUiLCJjbGljayIsIkF0VGFncyIsIm1vbWVudCIsIm1vZHVsZU5hbWUiLCJtb2R1bGVDaGlsZE5hbWUiLCJtb2R1bGVDb25jYXROYW1lIiwiYU1hcmt1cCIsInRhcmdldCIsImpzb25BdCIsIm5hbWUiLCJpbm5lclRleHQiLCJjaGFwdGVyMiIsImNoYXB0ZXIzIiwibGV2ZWwyIiwiYXRUYWdzQ2FsbENsaWNrIiwiSlNPTiIsInN0cmluZ2lmeSIsInRhcnRlYXVjaXRyb24iLCJzdGF0ZSIsImF0aW50ZXJuZXRjbmlsIiwidGFnIiwiY29udGVudFR5cGUiLCJjaGFwdGVyMSIsInRleHRDb250ZW50IiwiY3VzdG9tVmFycyIsInNpdGUiLCJnZXRBbGxUaGVtYXRpY3MiLCJmb3JtYXQiLCJhdFRhZ3NDYWxsUGFnZSIsInRoZW1hdGljcyIsImdldFRoZW1hdGljQXJyYXkiLCJ0aGVtYXRpYyIsInB1c2giLCJjb25jYXRTZXAiLCJqb2luIiwiU0NSRUVOX01PQklMRV9TV0lUQ0giLCJpbm5lcldpZHRoIiwidGhlbWF0aWNDb250ZW50IiwibWFpbkNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9