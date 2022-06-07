(self["webpackChunk"] = self["webpackChunk"] || []).push([["covid-dashboard"],{

/***/ "./assets/covid-dashboard/covid-dashboard.js":
/*!***************************************************!*\
  !*** ./assets/covid-dashboard/covid-dashboard.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./css/main.scss */ "./assets/covid-dashboard/css/main.scss");
/* harmony import */ var _css_skeleton_loaders_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./css/skeleton_loaders.scss */ "./assets/covid-dashboard/css/skeleton_loaders.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }























/* global tarteaucitron, tag */


var pageName = 'info_coronavirus_covid_19___carte_et_donnees_covid_19_en_france';

function fallbackCopyUrlToClipboard(text) {
  var textArea = document.createElement('textarea');
  textArea.value = text; // Avoid scrolling to bottom

  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Fallback: Oups, la copie dans le presse papier a échoué.', err);
  }

  document.body.removeChild(textArea);
}

function copyUrlToClipboard(txt) {
  var url = window.location.protocol + '//' + window.location.hostname + window.location.pathname + '#' + txt;

  if (!navigator.clipboard) {
    fallbackCopyUrlToClipboard(url);
    return;
  }

  navigator.clipboard.writeText(url);
}

function toggleMenuBtnState(element) {
  var active = document.querySelector('.fr-sidemenu__item--active');

  if (active) {
    active.classList.remove('fr-sidemenu__item--active');
  }

  element.closest('.fr-sidemenu__item').classList.add('fr-sidemenu__item--active');
}

function setAtTag() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var chapter1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chapter2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var chapter3 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var type = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var element = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;

  if (tarteaucitron.state.atinternetcnil && typeof tag !== 'undefined') {
    var varjson = {
      level2: '9'
    };

    if (page !== null) {
      var url = new URL(window.location.href);

      if (url.hash.substring(1).split('=').shift() === 'xtor') {
        url.hash = '';
      }

      if (url.searchParams.has('xtor')) {
        url.searchParams["delete"]('xtor');
      }

      var atCustomVars = {
        site: {
          1: 'fr',
          2: '',
          3: '',
          4: '',
          14: '',
          15: url.toString().replace('#', '%23')
        },
        page: {
          1: '',
          2: '',
          3: '',
          4: ''
        }
      };
      varjson.customVars = atCustomVars;
      varjson.name = page;
      tag.page.send(varjson);
      return;
    }

    if (name !== null) {
      varjson.name = name;
    }

    if (chapter1 !== null) {
      varjson.chapter1 = chapter1;
    }

    if (chapter2 !== null) {
      varjson.chapter2 = chapter2;
    }

    if (chapter3 !== null) {
      varjson.chapter3 = chapter3;
    }

    if (type !== null) {
      varjson.type = type;
    }

    if (element !== null && element.href) {
      var customObject = {
        clic_url_brut: element.href
      };
      varjson.customObject = customObject;
    }

    tag.click.send(varjson);
  }
}

function normalize(innerText) {
  return innerText.toLowerCase().replace(/[\s'-]/g, '_').replace(/[éè]/g, 'e').replace(/ô/g, 'o').replace(/î/g, 'i');
}

function getDataLvl(element) {
  var parent = element.closest('.box') || element.closest('.overview') || element.closest('section');
  var lvl = parent.querySelector('a.anchor').getAttribute('id');
  return lvl;
}

function sendAtTag(element) {
  if (element.matches('geo-list button')) {
    var name = 'recherche_reinitialiser';
    setAtTag(null, name, pageName, 'filtre', null, 'action');
  } else if (element.matches('.fr-sidemenu__link')) {
    var _name = "acces_".concat(element.getAttribute('data-name'));

    var chapter2 = 'sidemenu';
    var chapter3 = element.getAttribute('data-section');
    setAtTag(null, _name, pageName, chapter2, chapter3, 'action');
  } else if (element.closest('.submenu .fr-nav__link')) {
    var _name2 = normalize('acces_' + element.closest('.submenu .fr-nav__link').getElementsByClassName('submenu-entry')[0].textContent);

    setAtTag(null, _name2, pageName, 'navigation-secondaire', null, 'navigation', element.closest('.submenu .fr-nav__link'));
  } else if (element.matches('.lvl2-header a[target="_blank"]')) {
    var _name3 = element.innerText;
    var _chapter = 'lien';

    var _chapter2 = getDataLvl(element);

    setAtTag(null, _name3, pageName, _chapter, _chapter2, 'exit', element);
  } else if (element.closest('.oval')) {
    var _name4 = 'ancre';
    var _chapter3 = 'partage';

    var _chapter4 = getDataLvl(element);

    setAtTag(null, _name4, pageName, _chapter3, _chapter4, 'action');
  } else if (element.closest('.fr-breadcrumb__link')) {
    var _name5 = 'acces_' + normalize(element.closest('.fr-breadcrumb__link').innerText);

    var _chapter5 = 'fil-ariane';
    setAtTag(null, _name5, pageName, _chapter5, '', 'navigation', element.closest('.fr-breadcrumb__link'));
  }
}

document.addEventListener('input', function (e) {
  if (e.target.id !== 'select-reg' || e.target.id !== 'select-dep') {
    var name = normalize('recherche_' + normalize(e.target.options[e.target.selectedIndex].textContent));
    var chapter3 = e.target.id === 'select-reg' ? 'region' : 'departement';
    setAtTag(null, name, pageName, 'filtre', chapter3, 'action');
  }
});
document.addEventListener('click', function (e) {
  if (e.target.matches('.fr-alert .fr-link--close')) {
    var alert = e.target.closest('.fr-alert');
    alert.parentNode.removeChild(alert);
    return;
  }

  sendAtTag(e.target);

  if (e.target.matches('.fr-sidemenu__link')) {
    toggleMenuBtnState(e.target);
  } else if (e.target.closest('.sticky-btn')) {
    var subMenu = document.querySelector('.fr-sidemenu');
    var activeSubSection = subMenu.querySelector('.fr-sidemenu__item--active');

    if (activeSubSection) {
      var activeId = activeSubSection.querySelector('.fr-sidemenu__link').getAttribute('data-section');
      var activeSection = subMenu.querySelector(".fr-sidemenu__btn[aria-controls=\"".concat(activeId, "\"]"));
      var active = activeSection.getAttribute('aria-expanded');

      if (active === 'false') {
        activeSection.click();
      }
    }

    var top = window.scrollY + subMenu.getBoundingClientRect().top - 120;
    window.scrollTo({
      top: top,
      behavior: 'auto'
    });
  } else if (e.target.closest('.fr-tabs__tab')) {
    var name = 'graphique';
    var tab = e.target.closest('.fr-tabs__tab');
    var panelId = tab.id + '-panel';
    var widget = document.getElementById(panelId).querySelector('.widget');

    if (widget.getAttribute('data-type') === 'map-chart') {
      name = 'carte';
    }

    var chapter3 = getDataLvl(tab);
    setAtTag(null, name, pageName, 'onglet', chapter3, 'action');

    if (!widget.hasChildNodes()) {
      handleWidgetLoading(widget);
    }
  } else if (e.target.closest('.oval')) {
    e.preventDefault();
    var txt = getDataLvl(e.target);
    copyUrlToClipboard(txt);
  }
});

function handleWidgetLoading(widget) {
  var type = widget.getAttribute('data-type');
  var indicator = widget.getAttribute('data-indicateur');

  if (type === 'new-multiline-chart') {
    widget.innerHTML = "<".concat(type, " indicateurs=\"").concat(indicator, "\"></").concat(type, ">");
  } else if (type === 'bar-line-chart') {
    var _indicator$split = indicator.split(' '),
        _indicator$split2 = _slicedToArray(_indicator$split, 2),
        indicator1 = _indicator$split2[0],
        indicator2 = _indicator$split2[1];

    widget.innerHTML = "<".concat(type, " indicateur1=\"").concat(indicator1, "\" indicateur2=\"").concat(indicator2, "\"></").concat(type, ">");
  } else {
    if (indicator === 'nb_college_lycee_vaccin') {
      widget.innerHTML = "<".concat(type, " indicateur=\"").concat(indicator, "\" constante=\"true\"></").concat(type, ">");
    } else if (indicator === 'vaccins_rappel') {
      widget.innerHTML = "<".concat(type, " indicateur=\"").concat(indicator, "\" periods=\"vaccin_rappel\"></").concat(type, ">");
    } else {
      widget.innerHTML = "<".concat(type, " indicateur=\"").concat(indicator, "\"></").concat(type, ">");
    }
  }
}

function isInViewport(elem, offsetTop) {
  var bounding = elem.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return bounding.top >= 0 - offsetTop && bounding.left >= 0 && bounding.bottom <= windowHeight + windowHeight / 2 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth);
}

window.addEventListener('tarteaucitron_loaded', function () {
  setAtTag(pageName);
});
window.addEventListener('DOMContentLoaded', function (event) {
  var widgets = document.querySelectorAll('.box .widget, .overview .widget');
  var offset = document.querySelectorAll('a.anchor')[0].offsetTop;

  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    var observerOptions = {
      root: null,
      rootMargin: '-46% 0px -54% 0px',
      threshold: 0
    };
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id = entry.target.querySelector('a.anchor').getAttribute('id');
        var btn = document.querySelector(".fr-sidemenu__btn[aria-controls=\"".concat(id, "\"]"));
        var menuBtn = document.querySelector('.fr-sidemenu__btn[aria-controls="fr-sidemenu-wrapper"]');
        var isLargeScreen = window.getComputedStyle(menuBtn).display === 'none';
        var active = btn.getAttribute('aria-expanded');

        if (entry.isIntersecting && active === 'false' && isLargeScreen) {
          btn.click();
        }
      });
    }, observerOptions);
    document.querySelectorAll('section.fr-grid-row').forEach(function (section) {
      sectionObserver.observe(section);
    });
    var boxObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id = entry.target.querySelector('a.anchor').getAttribute('id');
        var link = document.querySelector(".fr-sidemenu__link[href=\"#".concat(id, "\"]"));

        if (entry.isIntersecting && !link.parentNode.classList.contains('fr-sidemenu__item--active')) {
          toggleMenuBtnState(link);
        }
      });
    }, observerOptions);
    document.querySelectorAll('.box, .overview').forEach(function (section) {
      boxObserver.observe(section);
    });
    var widgetObserverOptions = {
      root: null,
      rootMargin: "".concat(offset, "px 0px 50% 0px"),
      threshold: 0
    };
    var widgetObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && (entry.target.getAttribute('data-type') !== 'map-chart' || !entry.target.parentNode.classList.contains('fr-tabs__panel'))) {
          handleWidgetLoading(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, widgetObserverOptions);
    widgets.forEach(function (widget) {
      widgetObserver.observe(widget);
    });
  } else {
    window.addEventListener('scroll', function () {
      widgets.forEach(function (widget) {
        if (isInViewport(widget, offset) && !widget.hasChildNodes()) {
          handleWidgetLoading(widget);
        }
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.is-array.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "./assets/covid-dashboard/css/main.scss":
/*!**********************************************!*\
  !*** ./assets/covid-dashboard/css/main.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/covid-dashboard/css/skeleton_loaders.scss":
/*!**********************************************************!*\
  !*** ./assets/covid-dashboard/css/skeleton_loaders.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--b791ff"], () => (__webpack_exec__("./assets/covid-dashboard/covid-dashboard.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292aWQtZGFzaGJvYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQ1YsaUVBREo7O0FBR0EsU0FBU0MsMEJBQVQsQ0FBb0NDLElBQXBDLEVBQTBDO0FBQ3RDLE1BQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWpCO0FBQ0FGLEVBQUFBLFFBQVEsQ0FBQ0csS0FBVCxHQUFpQkosSUFBakIsQ0FGc0MsQ0FHdEM7O0FBQ0FDLEVBQUFBLFFBQVEsQ0FBQ0ksS0FBVCxDQUFlQyxHQUFmLEdBQXFCLEdBQXJCO0FBQ0FMLEVBQUFBLFFBQVEsQ0FBQ0ksS0FBVCxDQUFlRSxJQUFmLEdBQXNCLEdBQXRCO0FBQ0FOLEVBQUFBLFFBQVEsQ0FBQ0ksS0FBVCxDQUFlRyxRQUFmLEdBQTBCLE9BQTFCO0FBRUFOLEVBQUFBLFFBQVEsQ0FBQ08sSUFBVCxDQUFjQyxXQUFkLENBQTBCVCxRQUExQjtBQUNBQSxFQUFBQSxRQUFRLENBQUNVLEtBQVQ7QUFDQVYsRUFBQUEsUUFBUSxDQUFDVyxNQUFUOztBQUVBLE1BQUk7QUFDQVYsSUFBQUEsUUFBUSxDQUFDVyxXQUFULENBQXFCLE1BQXJCO0FBQ0gsR0FGRCxDQUVFLE9BQU9DLEdBQVAsRUFBWTtBQUNWQyxJQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FDSSwwREFESixFQUVJRixHQUZKO0FBSUg7O0FBQ0RaLEVBQUFBLFFBQVEsQ0FBQ08sSUFBVCxDQUFjUSxXQUFkLENBQTBCaEIsUUFBMUI7QUFDSDs7QUFFRCxTQUFTaUIsa0JBQVQsQ0FBNEJDLEdBQTVCLEVBQWlDO0FBQzdCLE1BQU1DLEdBQUcsR0FDTEMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixHQUNBLElBREEsR0FFQUYsTUFBTSxDQUFDQyxRQUFQLENBQWdCRSxRQUZoQixHQUdBSCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JHLFFBSGhCLEdBSUEsR0FKQSxHQUtBTixHQU5KOztBQU9BLE1BQUksQ0FBQ08sU0FBUyxDQUFDQyxTQUFmLEVBQTBCO0FBQ3RCNUIsSUFBQUEsMEJBQTBCLENBQUNxQixHQUFELENBQTFCO0FBQ0E7QUFDSDs7QUFDRE0sRUFBQUEsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxTQUFwQixDQUE4QlIsR0FBOUI7QUFDSDs7QUFFRCxTQUFTUyxrQkFBVCxDQUE0QkMsT0FBNUIsRUFBcUM7QUFDakMsTUFBTUMsTUFBTSxHQUFHN0IsUUFBUSxDQUFDOEIsYUFBVCxDQUF1Qiw0QkFBdkIsQ0FBZjs7QUFDQSxNQUFJRCxNQUFKLEVBQVk7QUFDUkEsSUFBQUEsTUFBTSxDQUFDRSxTQUFQLENBQWlCQyxNQUFqQixDQUF3QiwyQkFBeEI7QUFDSDs7QUFDREosRUFBQUEsT0FBTyxDQUNGSyxPQURMLENBQ2Esb0JBRGIsRUFFS0YsU0FGTCxDQUVlRyxHQUZmLENBRW1CLDJCQUZuQjtBQUdIOztBQUVELFNBQVNDLFFBQVQsR0FRRTtBQUFBLE1BUEVDLElBT0YsdUVBUFMsSUFPVDtBQUFBLE1BTkVDLElBTUYsdUVBTlMsSUFNVDtBQUFBLE1BTEVDLFFBS0YsdUVBTGEsSUFLYjtBQUFBLE1BSkVDLFFBSUYsdUVBSmEsSUFJYjtBQUFBLE1BSEVDLFFBR0YsdUVBSGEsSUFHYjtBQUFBLE1BRkVDLElBRUYsdUVBRlMsSUFFVDtBQUFBLE1BREViLE9BQ0YsdUVBRFksSUFDWjs7QUFDRSxNQUFJYyxhQUFhLENBQUNDLEtBQWQsQ0FBb0JDLGNBQXBCLElBQXNDLE9BQU9DLEdBQVAsS0FBZSxXQUF6RCxFQUFzRTtBQUNsRSxRQUFNQyxPQUFPLEdBQUc7QUFDWkMsTUFBQUEsTUFBTSxFQUFFO0FBREksS0FBaEI7O0FBR0EsUUFBSVgsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDZixVQUFNbEIsR0FBRyxHQUFHLElBQUk4QixHQUFKLENBQVE3QixNQUFNLENBQUNDLFFBQVAsQ0FBZ0I2QixJQUF4QixDQUFaOztBQUNBLFVBQUkvQixHQUFHLENBQUNnQyxJQUFKLENBQVNDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0JDLEtBQXRCLENBQTRCLEdBQTVCLEVBQWlDQyxLQUFqQyxPQUE2QyxNQUFqRCxFQUF5RDtBQUNyRG5DLFFBQUFBLEdBQUcsQ0FBQ2dDLElBQUosR0FBVyxFQUFYO0FBQ0g7O0FBQ0QsVUFBSWhDLEdBQUcsQ0FBQ29DLFlBQUosQ0FBaUJDLEdBQWpCLENBQXFCLE1BQXJCLENBQUosRUFBa0M7QUFDOUJyQyxRQUFBQSxHQUFHLENBQUNvQyxZQUFKLFdBQXdCLE1BQXhCO0FBQ0g7O0FBQ0QsVUFBTUUsWUFBWSxHQUFHO0FBQ2pCQyxRQUFBQSxJQUFJLEVBQUU7QUFDRixhQUFHLElBREQ7QUFFRixhQUFHLEVBRkQ7QUFHRixhQUFHLEVBSEQ7QUFJRixhQUFHLEVBSkQ7QUFLRixjQUFJLEVBTEY7QUFNRixjQUFJdkMsR0FBRyxDQUFDd0MsUUFBSixHQUFlQyxPQUFmLENBQXVCLEdBQXZCLEVBQTRCLEtBQTVCO0FBTkYsU0FEVztBQVNqQnZCLFFBQUFBLElBQUksRUFBRTtBQUNGLGFBQUcsRUFERDtBQUVGLGFBQUcsRUFGRDtBQUdGLGFBQUcsRUFIRDtBQUlGLGFBQUc7QUFKRDtBQVRXLE9BQXJCO0FBZ0JBVSxNQUFBQSxPQUFPLENBQUNjLFVBQVIsR0FBcUJKLFlBQXJCO0FBQ0FWLE1BQUFBLE9BQU8sQ0FBQ1QsSUFBUixHQUFlRCxJQUFmO0FBQ0FTLE1BQUFBLEdBQUcsQ0FBQ1QsSUFBSixDQUFTeUIsSUFBVCxDQUFjZixPQUFkO0FBQ0E7QUFDSDs7QUFDRCxRQUFJVCxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNmUyxNQUFBQSxPQUFPLENBQUNULElBQVIsR0FBZUEsSUFBZjtBQUNIOztBQUNELFFBQUlDLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNuQlEsTUFBQUEsT0FBTyxDQUFDUixRQUFSLEdBQW1CQSxRQUFuQjtBQUNIOztBQUNELFFBQUlDLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNuQk8sTUFBQUEsT0FBTyxDQUFDUCxRQUFSLEdBQW1CQSxRQUFuQjtBQUNIOztBQUNELFFBQUlDLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNuQk0sTUFBQUEsT0FBTyxDQUFDTixRQUFSLEdBQW1CQSxRQUFuQjtBQUNIOztBQUNELFFBQUlDLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2ZLLE1BQUFBLE9BQU8sQ0FBQ0wsSUFBUixHQUFlQSxJQUFmO0FBQ0g7O0FBQ0QsUUFBSWIsT0FBTyxLQUFLLElBQVosSUFBb0JBLE9BQU8sQ0FBQ3FCLElBQWhDLEVBQXNDO0FBQ2xDLFVBQU1hLFlBQVksR0FBRztBQUNqQkMsUUFBQUEsYUFBYSxFQUFFbkMsT0FBTyxDQUFDcUI7QUFETixPQUFyQjtBQUdBSCxNQUFBQSxPQUFPLENBQUNnQixZQUFSLEdBQXVCQSxZQUF2QjtBQUNIOztBQUNEakIsSUFBQUEsR0FBRyxDQUFDbUIsS0FBSixDQUFVSCxJQUFWLENBQWVmLE9BQWY7QUFDSDtBQUNKOztBQUVELFNBQVNtQixTQUFULENBQW1CQyxTQUFuQixFQUE4QjtBQUMxQixTQUFPQSxTQUFTLENBQ1hDLFdBREUsR0FFRlIsT0FGRSxDQUVNLFNBRk4sRUFFaUIsR0FGakIsRUFHRkEsT0FIRSxDQUdNLE9BSE4sRUFHZSxHQUhmLEVBSUZBLE9BSkUsQ0FJTSxJQUpOLEVBSVksR0FKWixFQUtGQSxPQUxFLENBS00sSUFMTixFQUtZLEdBTFosQ0FBUDtBQU1IOztBQUVELFNBQVNTLFVBQVQsQ0FBb0J4QyxPQUFwQixFQUE2QjtBQUN6QixNQUFNeUMsTUFBTSxHQUNSekMsT0FBTyxDQUFDSyxPQUFSLENBQWdCLE1BQWhCLEtBQ0FMLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQixXQUFoQixDQURBLElBRUFMLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQixTQUFoQixDQUhKO0FBSUEsTUFBTXFDLEdBQUcsR0FBR0QsTUFBTSxDQUFDdkMsYUFBUCxDQUFxQixVQUFyQixFQUFpQ3lDLFlBQWpDLENBQThDLElBQTlDLENBQVo7QUFDQSxTQUFPRCxHQUFQO0FBQ0g7O0FBRUQsU0FBU0UsU0FBVCxDQUFtQjVDLE9BQW5CLEVBQTRCO0FBQ3hCLE1BQUlBLE9BQU8sQ0FBQzZDLE9BQVIsQ0FBZ0IsaUJBQWhCLENBQUosRUFBd0M7QUFDcEMsUUFBTXBDLElBQUksR0FBRyx5QkFBYjtBQUNBRixJQUFBQSxRQUFRLENBQUMsSUFBRCxFQUFPRSxJQUFQLEVBQWF6QyxRQUFiLEVBQXVCLFFBQXZCLEVBQWlDLElBQWpDLEVBQXVDLFFBQXZDLENBQVI7QUFDSCxHQUhELE1BR08sSUFBSWdDLE9BQU8sQ0FBQzZDLE9BQVIsQ0FBZ0Isb0JBQWhCLENBQUosRUFBMkM7QUFDOUMsUUFBTXBDLEtBQUksbUJBQVlULE9BQU8sQ0FBQzJDLFlBQVIsQ0FBcUIsV0FBckIsQ0FBWixDQUFWOztBQUNBLFFBQU1oQyxRQUFRLEdBQUcsVUFBakI7QUFDQSxRQUFNQyxRQUFRLEdBQUdaLE9BQU8sQ0FBQzJDLFlBQVIsQ0FBcUIsY0FBckIsQ0FBakI7QUFDQXBDLElBQUFBLFFBQVEsQ0FBQyxJQUFELEVBQU9FLEtBQVAsRUFBYXpDLFFBQWIsRUFBdUIyQyxRQUF2QixFQUFpQ0MsUUFBakMsRUFBMkMsUUFBM0MsQ0FBUjtBQUNILEdBTE0sTUFLQSxJQUFJWixPQUFPLENBQUNLLE9BQVIsQ0FBZ0Isd0JBQWhCLENBQUosRUFBK0M7QUFDbEQsUUFBTUksTUFBSSxHQUFHNEIsU0FBUyxDQUNsQixXQUNJckMsT0FBTyxDQUNGSyxPQURMLENBQ2Esd0JBRGIsRUFFS3lDLHNCQUZMLENBRTRCLGVBRjVCLEVBRTZDLENBRjdDLEVBRWdEQyxXQUpsQyxDQUF0Qjs7QUFNQXhDLElBQUFBLFFBQVEsQ0FDSixJQURJLEVBRUpFLE1BRkksRUFHSnpDLFFBSEksRUFJSix1QkFKSSxFQUtKLElBTEksRUFNSixZQU5JLEVBT0pnQyxPQUFPLENBQUNLLE9BQVIsQ0FBZ0Isd0JBQWhCLENBUEksQ0FBUjtBQVNILEdBaEJNLE1BZ0JBLElBQUlMLE9BQU8sQ0FBQzZDLE9BQVIsQ0FBZ0IsaUNBQWhCLENBQUosRUFBd0Q7QUFDM0QsUUFBTXBDLE1BQUksR0FBR1QsT0FBTyxDQUFDc0MsU0FBckI7QUFDQSxRQUFNM0IsUUFBUSxHQUFHLE1BQWpCOztBQUNBLFFBQU1DLFNBQVEsR0FBRzRCLFVBQVUsQ0FBQ3hDLE9BQUQsQ0FBM0I7O0FBQ0FPLElBQUFBLFFBQVEsQ0FBQyxJQUFELEVBQU9FLE1BQVAsRUFBYXpDLFFBQWIsRUFBdUIyQyxRQUF2QixFQUFpQ0MsU0FBakMsRUFBMkMsTUFBM0MsRUFBbURaLE9BQW5ELENBQVI7QUFDSCxHQUxNLE1BS0EsSUFBSUEsT0FBTyxDQUFDSyxPQUFSLENBQWdCLE9BQWhCLENBQUosRUFBOEI7QUFDakMsUUFBTUksTUFBSSxHQUFHLE9BQWI7QUFDQSxRQUFNRSxTQUFRLEdBQUcsU0FBakI7O0FBQ0EsUUFBTUMsU0FBUSxHQUFHNEIsVUFBVSxDQUFDeEMsT0FBRCxDQUEzQjs7QUFDQU8sSUFBQUEsUUFBUSxDQUFDLElBQUQsRUFBT0UsTUFBUCxFQUFhekMsUUFBYixFQUF1QjJDLFNBQXZCLEVBQWlDQyxTQUFqQyxFQUEyQyxRQUEzQyxDQUFSO0FBQ0gsR0FMTSxNQUtBLElBQUlaLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQixzQkFBaEIsQ0FBSixFQUE2QztBQUNoRCxRQUFNSSxNQUFJLEdBQ04sV0FDQTRCLFNBQVMsQ0FBQ3JDLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQixzQkFBaEIsRUFBd0NpQyxTQUF6QyxDQUZiOztBQUdBLFFBQU0zQixTQUFRLEdBQUcsWUFBakI7QUFDQUosSUFBQUEsUUFBUSxDQUNKLElBREksRUFFSkUsTUFGSSxFQUdKekMsUUFISSxFQUlKMkMsU0FKSSxFQUtKLEVBTEksRUFNSixZQU5JLEVBT0pYLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQixzQkFBaEIsQ0FQSSxDQUFSO0FBU0g7QUFDSjs7QUFFRGpDLFFBQVEsQ0FBQzRFLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQVVDLENBQVYsRUFBYTtBQUM1QyxNQUFJQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsRUFBVCxLQUFnQixZQUFoQixJQUFnQ0YsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEVBQVQsS0FBZ0IsWUFBcEQsRUFBa0U7QUFDOUQsUUFBTTFDLElBQUksR0FBRzRCLFNBQVMsQ0FDbEIsZUFDSUEsU0FBUyxDQUFDWSxDQUFDLENBQUNDLE1BQUYsQ0FBU0UsT0FBVCxDQUFpQkgsQ0FBQyxDQUFDQyxNQUFGLENBQVNHLGFBQTFCLEVBQXlDTixXQUExQyxDQUZLLENBQXRCO0FBSUEsUUFBTW5DLFFBQVEsR0FDVnFDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxFQUFULEtBQWdCLFlBQWhCLEdBQStCLFFBQS9CLEdBQTBDLGFBRDlDO0FBRUE1QyxJQUFBQSxRQUFRLENBQUMsSUFBRCxFQUFPRSxJQUFQLEVBQWF6QyxRQUFiLEVBQXVCLFFBQXZCLEVBQWlDNEMsUUFBakMsRUFBMkMsUUFBM0MsQ0FBUjtBQUNIO0FBQ0osQ0FWRDtBQVlBeEMsUUFBUSxDQUFDNEUsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBVUMsQ0FBVixFQUFhO0FBQzVDLE1BQUlBLENBQUMsQ0FBQ0MsTUFBRixDQUFTTCxPQUFULENBQWlCLDJCQUFqQixDQUFKLEVBQW1EO0FBQy9DLFFBQU1TLEtBQUssR0FBR0wsQ0FBQyxDQUFDQyxNQUFGLENBQVM3QyxPQUFULENBQWlCLFdBQWpCLENBQWQ7QUFDQWlELElBQUFBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQnBFLFdBQWpCLENBQTZCbUUsS0FBN0I7QUFDQTtBQUNIOztBQUNEVixFQUFBQSxTQUFTLENBQUNLLENBQUMsQ0FBQ0MsTUFBSCxDQUFUOztBQUNBLE1BQUlELENBQUMsQ0FBQ0MsTUFBRixDQUFTTCxPQUFULENBQWlCLG9CQUFqQixDQUFKLEVBQTRDO0FBQ3hDOUMsSUFBQUEsa0JBQWtCLENBQUNrRCxDQUFDLENBQUNDLE1BQUgsQ0FBbEI7QUFDSCxHQUZELE1BRU8sSUFBSUQsQ0FBQyxDQUFDQyxNQUFGLENBQVM3QyxPQUFULENBQWlCLGFBQWpCLENBQUosRUFBcUM7QUFDeEMsUUFBTW1ELE9BQU8sR0FBR3BGLFFBQVEsQ0FBQzhCLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBaEI7QUFDQSxRQUFNdUQsZ0JBQWdCLEdBQUdELE9BQU8sQ0FBQ3RELGFBQVIsQ0FDckIsNEJBRHFCLENBQXpCOztBQUdBLFFBQUl1RCxnQkFBSixFQUFzQjtBQUNsQixVQUFNQyxRQUFRLEdBQUdELGdCQUFnQixDQUM1QnZELGFBRFksQ0FDRSxvQkFERixFQUVaeUMsWUFGWSxDQUVDLGNBRkQsQ0FBakI7QUFHQSxVQUFNZ0IsYUFBYSxHQUFHSCxPQUFPLENBQUN0RCxhQUFSLDZDQUNrQndELFFBRGxCLFNBQXRCO0FBR0EsVUFBTXpELE1BQU0sR0FBRzBELGFBQWEsQ0FBQ2hCLFlBQWQsQ0FBMkIsZUFBM0IsQ0FBZjs7QUFDQSxVQUFJMUMsTUFBTSxLQUFLLE9BQWYsRUFBd0I7QUFDcEIwRCxRQUFBQSxhQUFhLENBQUN2QixLQUFkO0FBQ0g7QUFDSjs7QUFDRCxRQUFNNUQsR0FBRyxHQUFHZSxNQUFNLENBQUNxRSxPQUFQLEdBQWlCSixPQUFPLENBQUNLLHFCQUFSLEdBQWdDckYsR0FBakQsR0FBdUQsR0FBbkU7QUFDQWUsSUFBQUEsTUFBTSxDQUFDdUUsUUFBUCxDQUFnQjtBQUFDdEYsTUFBQUEsR0FBRyxFQUFFQSxHQUFOO0FBQVd1RixNQUFBQSxRQUFRLEVBQUU7QUFBckIsS0FBaEI7QUFDSCxHQW5CTSxNQW1CQSxJQUFJZCxDQUFDLENBQUNDLE1BQUYsQ0FBUzdDLE9BQVQsQ0FBaUIsZUFBakIsQ0FBSixFQUF1QztBQUMxQyxRQUFJSSxJQUFJLEdBQUcsV0FBWDtBQUNBLFFBQU11RCxHQUFHLEdBQUdmLENBQUMsQ0FBQ0MsTUFBRixDQUFTN0MsT0FBVCxDQUFpQixlQUFqQixDQUFaO0FBQ0EsUUFBTTRELE9BQU8sR0FBR0QsR0FBRyxDQUFDYixFQUFKLEdBQVMsUUFBekI7QUFDQSxRQUFNZSxNQUFNLEdBQUc5RixRQUFRLENBQ2xCK0YsY0FEVSxDQUNLRixPQURMLEVBRVYvRCxhQUZVLENBRUksU0FGSixDQUFmOztBQUdBLFFBQUlnRSxNQUFNLENBQUN2QixZQUFQLENBQW9CLFdBQXBCLE1BQXFDLFdBQXpDLEVBQXNEO0FBQ2xEbEMsTUFBQUEsSUFBSSxHQUFHLE9BQVA7QUFDSDs7QUFDRCxRQUFNRyxRQUFRLEdBQUc0QixVQUFVLENBQUN3QixHQUFELENBQTNCO0FBQ0F6RCxJQUFBQSxRQUFRLENBQUMsSUFBRCxFQUFPRSxJQUFQLEVBQWF6QyxRQUFiLEVBQXVCLFFBQXZCLEVBQWlDNEMsUUFBakMsRUFBMkMsUUFBM0MsQ0FBUjs7QUFDQSxRQUFJLENBQUNzRCxNQUFNLENBQUNFLGFBQVAsRUFBTCxFQUE2QjtBQUN6QkMsTUFBQUEsbUJBQW1CLENBQUNILE1BQUQsQ0FBbkI7QUFDSDtBQUNKLEdBZk0sTUFlQSxJQUFJakIsQ0FBQyxDQUFDQyxNQUFGLENBQVM3QyxPQUFULENBQWlCLE9BQWpCLENBQUosRUFBK0I7QUFDbEM0QyxJQUFBQSxDQUFDLENBQUNxQixjQUFGO0FBQ0EsUUFBTWpGLEdBQUcsR0FBR21ELFVBQVUsQ0FBQ1MsQ0FBQyxDQUFDQyxNQUFILENBQXRCO0FBQ0E5RCxJQUFBQSxrQkFBa0IsQ0FBQ0MsR0FBRCxDQUFsQjtBQUNIO0FBQ0osQ0FoREQ7O0FBa0RBLFNBQVNnRixtQkFBVCxDQUE2QkgsTUFBN0IsRUFBcUM7QUFDakMsTUFBTXJELElBQUksR0FBR3FELE1BQU0sQ0FBQ3ZCLFlBQVAsQ0FBb0IsV0FBcEIsQ0FBYjtBQUNBLE1BQU00QixTQUFTLEdBQUdMLE1BQU0sQ0FBQ3ZCLFlBQVAsQ0FBb0IsaUJBQXBCLENBQWxCOztBQUNBLE1BQUk5QixJQUFJLEtBQUsscUJBQWIsRUFBb0M7QUFDaENxRCxJQUFBQSxNQUFNLENBQUNNLFNBQVAsY0FBdUIzRCxJQUF2Qiw0QkFBNEMwRCxTQUE1QyxrQkFBNEQxRCxJQUE1RDtBQUNILEdBRkQsTUFFTyxJQUFJQSxJQUFJLEtBQUssZ0JBQWIsRUFBK0I7QUFDbEMsMkJBQWlDMEQsU0FBUyxDQUFDL0MsS0FBVixDQUFnQixHQUFoQixDQUFqQztBQUFBO0FBQUEsUUFBT2lELFVBQVA7QUFBQSxRQUFtQkMsVUFBbkI7O0FBQ0FSLElBQUFBLE1BQU0sQ0FBQ00sU0FBUCxjQUF1QjNELElBQXZCLDRCQUE0QzRELFVBQTVDLDhCQUF3RUMsVUFBeEUsa0JBQXlGN0QsSUFBekY7QUFDSCxHQUhNLE1BR0E7QUFDSCxRQUFJMEQsU0FBUyxLQUFLLHlCQUFsQixFQUE2QztBQUN6Q0wsTUFBQUEsTUFBTSxDQUFDTSxTQUFQLGNBQXVCM0QsSUFBdkIsMkJBQTJDMEQsU0FBM0MscUNBQTRFMUQsSUFBNUU7QUFDSCxLQUZELE1BRU8sSUFBSTBELFNBQVMsS0FBSyxnQkFBbEIsRUFBb0M7QUFDdkNMLE1BQUFBLE1BQU0sQ0FBQ00sU0FBUCxjQUF1QjNELElBQXZCLDJCQUEyQzBELFNBQTNDLDRDQUFtRjFELElBQW5GO0FBQ0gsS0FGTSxNQUVBO0FBQ0hxRCxNQUFBQSxNQUFNLENBQUNNLFNBQVAsY0FBdUIzRCxJQUF2QiwyQkFBMkMwRCxTQUEzQyxrQkFBMkQxRCxJQUEzRDtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxTQUFTOEQsWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEJDLFNBQTVCLEVBQXVDO0FBQ25DLE1BQU1DLFFBQVEsR0FBR0YsSUFBSSxDQUFDZixxQkFBTCxFQUFqQjtBQUNBLE1BQU1rQixZQUFZLEdBQ2R4RixNQUFNLENBQUN5RixXQUFQLElBQXNCNUcsUUFBUSxDQUFDNkcsZUFBVCxDQUF5QkMsWUFEbkQ7QUFFQSxTQUNJSixRQUFRLENBQUN0RyxHQUFULElBQWdCLElBQUlxRyxTQUFwQixJQUNBQyxRQUFRLENBQUNyRyxJQUFULElBQWlCLENBRGpCLElBRUFxRyxRQUFRLENBQUNLLE1BQVQsSUFBbUJKLFlBQVksR0FBR0EsWUFBWSxHQUFHLENBRmpELElBR0FELFFBQVEsQ0FBQ00sS0FBVCxLQUNLN0YsTUFBTSxDQUFDOEYsVUFBUCxJQUFxQmpILFFBQVEsQ0FBQzZHLGVBQVQsQ0FBeUJLLFdBRG5ELENBSko7QUFPSDs7QUFFRC9GLE1BQU0sQ0FBQ3lELGdCQUFQLENBQXdCLHNCQUF4QixFQUFnRCxZQUFNO0FBQ2xEekMsRUFBQUEsUUFBUSxDQUFDdkMsUUFBRCxDQUFSO0FBQ0gsQ0FGRDtBQUlBdUIsTUFBTSxDQUFDeUQsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFVBQUN1QyxLQUFELEVBQVc7QUFDbkQsTUFBTUMsT0FBTyxHQUFHcEgsUUFBUSxDQUFDcUgsZ0JBQVQsQ0FDWixpQ0FEWSxDQUFoQjtBQUdBLE1BQU1DLE1BQU0sR0FBR3RILFFBQVEsQ0FBQ3FILGdCQUFULENBQTBCLFVBQTFCLEVBQXNDLENBQXRDLEVBQXlDWixTQUF4RDs7QUFDQSxNQUNJLDBCQUEwQnRGLE1BQTFCLElBQ0EsK0JBQStCQSxNQUQvQixJQUVBLHVCQUF1QkEsTUFBTSxDQUFDb0cseUJBQVAsQ0FBaUNDLFNBSDVELEVBSUU7QUFDRSxRQUFNQyxlQUFlLEdBQUc7QUFDcEJDLE1BQUFBLElBQUksRUFBRSxJQURjO0FBRXBCQyxNQUFBQSxVQUFVLEVBQUUsbUJBRlE7QUFHcEJDLE1BQUFBLFNBQVMsRUFBRTtBQUhTLEtBQXhCO0FBTUEsUUFBTUMsZUFBZSxHQUFHLElBQUlDLG9CQUFKLENBQXlCLFVBQUNDLE9BQUQsRUFBYTtBQUMxREEsTUFBQUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCLFVBQUNDLEtBQUQsRUFBVztBQUN2QixZQUFNbEQsRUFBRSxHQUFHa0QsS0FBSyxDQUFDbkQsTUFBTixDQUNOaEQsYUFETSxDQUNRLFVBRFIsRUFFTnlDLFlBRk0sQ0FFTyxJQUZQLENBQVg7QUFHQSxZQUFNMkQsR0FBRyxHQUFHbEksUUFBUSxDQUFDOEIsYUFBVCw2Q0FDNEJpRCxFQUQ1QixTQUFaO0FBR0EsWUFBTW9ELE9BQU8sR0FBR25JLFFBQVEsQ0FBQzhCLGFBQVQsQ0FDWix3REFEWSxDQUFoQjtBQUdBLFlBQU1zRyxhQUFhLEdBQ2ZqSCxNQUFNLENBQUNrSCxnQkFBUCxDQUF3QkYsT0FBeEIsRUFBaUNHLE9BQWpDLEtBQTZDLE1BRGpEO0FBRUEsWUFBTXpHLE1BQU0sR0FBR3FHLEdBQUcsQ0FBQzNELFlBQUosQ0FBaUIsZUFBakIsQ0FBZjs7QUFDQSxZQUNJMEQsS0FBSyxDQUFDTSxjQUFOLElBQ0ExRyxNQUFNLEtBQUssT0FEWCxJQUVBdUcsYUFISixFQUlFO0FBQ0VGLFVBQUFBLEdBQUcsQ0FBQ2xFLEtBQUo7QUFDSDtBQUNKLE9BcEJEO0FBcUJILEtBdEJ1QixFQXNCckJ5RCxlQXRCcUIsQ0FBeEI7QUF3QkF6SCxJQUFBQSxRQUFRLENBQUNxSCxnQkFBVCxDQUEwQixxQkFBMUIsRUFBaURXLE9BQWpELENBQXlELFVBQUNRLE9BQUQsRUFBYTtBQUNsRVgsTUFBQUEsZUFBZSxDQUFDWSxPQUFoQixDQUF3QkQsT0FBeEI7QUFDSCxLQUZEO0FBSUEsUUFBTUUsV0FBVyxHQUFHLElBQUlaLG9CQUFKLENBQXlCLFVBQUNDLE9BQUQsRUFBYTtBQUN0REEsTUFBQUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCLFVBQUNDLEtBQUQsRUFBVztBQUN2QixZQUFNbEQsRUFBRSxHQUFHa0QsS0FBSyxDQUFDbkQsTUFBTixDQUNOaEQsYUFETSxDQUNRLFVBRFIsRUFFTnlDLFlBRk0sQ0FFTyxJQUZQLENBQVg7QUFHQSxZQUFNb0UsSUFBSSxHQUFHM0ksUUFBUSxDQUFDOEIsYUFBVCxzQ0FDb0JpRCxFQURwQixTQUFiOztBQUdBLFlBQ0lrRCxLQUFLLENBQUNNLGNBQU4sSUFDQSxDQUFDSSxJQUFJLENBQUN4RCxVQUFMLENBQWdCcEQsU0FBaEIsQ0FBMEI2RyxRQUExQixDQUNHLDJCQURILENBRkwsRUFLRTtBQUNFakgsVUFBQUEsa0JBQWtCLENBQUNnSCxJQUFELENBQWxCO0FBQ0g7QUFDSixPQWZEO0FBZ0JILEtBakJtQixFQWlCakJsQixlQWpCaUIsQ0FBcEI7QUFtQkF6SCxJQUFBQSxRQUFRLENBQUNxSCxnQkFBVCxDQUEwQixpQkFBMUIsRUFBNkNXLE9BQTdDLENBQXFELFVBQUNRLE9BQUQsRUFBYTtBQUM5REUsTUFBQUEsV0FBVyxDQUFDRCxPQUFaLENBQW9CRCxPQUFwQjtBQUNILEtBRkQ7QUFJQSxRQUFNSyxxQkFBcUIsR0FBRztBQUMxQm5CLE1BQUFBLElBQUksRUFBRSxJQURvQjtBQUUxQkMsTUFBQUEsVUFBVSxZQUFLTCxNQUFMLG1CQUZnQjtBQUcxQk0sTUFBQUEsU0FBUyxFQUFFO0FBSGUsS0FBOUI7QUFLQSxRQUFNa0IsY0FBYyxHQUFHLElBQUloQixvQkFBSixDQUF5QixVQUFDQyxPQUFELEVBQVVnQixRQUFWLEVBQXVCO0FBQ25FaEIsTUFBQUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCLFVBQUNDLEtBQUQsRUFBVztBQUN2QixZQUNJQSxLQUFLLENBQUNNLGNBQU4sS0FDQ04sS0FBSyxDQUFDbkQsTUFBTixDQUFhUCxZQUFiLENBQTBCLFdBQTFCLE1BQTJDLFdBQTNDLElBQ0csQ0FBQzBELEtBQUssQ0FBQ25ELE1BQU4sQ0FBYUssVUFBYixDQUF3QnBELFNBQXhCLENBQWtDNkcsUUFBbEMsQ0FDRyxnQkFESCxDQUZMLENBREosRUFNRTtBQUNFM0MsVUFBQUEsbUJBQW1CLENBQUNnQyxLQUFLLENBQUNuRCxNQUFQLENBQW5CO0FBQ0FpRSxVQUFBQSxRQUFRLENBQUNDLFNBQVQsQ0FBbUJmLEtBQUssQ0FBQ25ELE1BQXpCO0FBQ0g7QUFDSixPQVhEO0FBWUgsS0Fic0IsRUFhcEIrRCxxQkFib0IsQ0FBdkI7QUFlQXpCLElBQUFBLE9BQU8sQ0FBQ1ksT0FBUixDQUFnQixVQUFDbEMsTUFBRCxFQUFZO0FBQ3hCZ0QsTUFBQUEsY0FBYyxDQUFDTCxPQUFmLENBQXVCM0MsTUFBdkI7QUFDSCxLQUZEO0FBR0gsR0FyRkQsTUFxRk87QUFDSDNFLElBQUFBLE1BQU0sQ0FBQ3lELGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQVk7QUFDMUN3QyxNQUFBQSxPQUFPLENBQUNZLE9BQVIsQ0FBZ0IsVUFBQ2xDLE1BQUQsRUFBWTtBQUN4QixZQUFJUyxZQUFZLENBQUNULE1BQUQsRUFBU3dCLE1BQVQsQ0FBWixJQUFnQyxDQUFDeEIsTUFBTSxDQUFDRSxhQUFQLEVBQXJDLEVBQTZEO0FBQ3pEQyxVQUFBQSxtQkFBbUIsQ0FBQ0gsTUFBRCxDQUFuQjtBQUNIO0FBQ0osT0FKRDtBQUtILEtBTkQ7QUFPSDtBQUNKLENBbkdEOzs7Ozs7Ozs7O0FDbFNBLHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQzs7QUFFOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxVQUFVO0FBQ3pELEVBQUUsZ0JBQWdCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnQkFBZ0I7QUFDcEI7QUFDQTs7Ozs7Ozs7Ozs7O0FDckNhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxZQUFZLG1CQUFPLENBQUMscUVBQW9CO0FBQ3hDLGNBQWMsbUJBQU8sQ0FBQywyRUFBdUI7QUFDN0MsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MscUJBQXFCLG1CQUFPLENBQUMseUZBQThCO0FBQzNELHlCQUF5QixtQkFBTyxDQUFDLG1HQUFtQztBQUNwRSxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7QUFDMUYsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELGlCQUFpQixtQkFBTyxDQUFDLDZGQUFnQzs7QUFFekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksOENBQThDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxZQUFZO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUM1REQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxXQUFXLG1CQUFPLENBQUMsK0VBQXlCO0FBQzVDLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE2Qzs7QUFFdkY7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSwwREFBMEQ7QUFDOUQ7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ2JELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsY0FBYyxtQkFBTyxDQUFDLDJFQUF1Qjs7QUFFN0M7QUFDQTtBQUNBLElBQUksNkJBQTZCO0FBQ2pDO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDUFk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsY0FBYyxtQkFBTyxDQUFDLDJFQUF1QjtBQUM3QyxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQscUJBQXFCLG1CQUFPLENBQUMseUZBQThCO0FBQzNELHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUE0RDtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDOUNELGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRCxxQkFBcUIsOEhBQWdEOztBQUVyRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsVUFBVSxtQkFBTyxDQUFDLGlFQUFrQjtBQUNwQyxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLHFCQUFxQiw4SEFBZ0Q7QUFDckUsZ0NBQWdDLG1CQUFPLENBQUMsaUhBQTBDOztBQUVsRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxNQUFNLDRCQUE0QjtBQUNsQztBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7QUNqREEsNEJBQTRCLG1CQUFPLENBQUMsMkdBQXVDOztBQUUzRTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNKQTs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvdmlkLWRhc2hib2FyZC9jb3ZpZC1kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5kZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY292aWQtZGFzaGJvYXJkL2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvdmlkLWRhc2hib2FyZC9jc3Mvc2tlbGV0b25fbG9hZGVycy5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCB0YXJ0ZWF1Y2l0cm9uLCB0YWcgKi9cclxuaW1wb3J0ICcuL2Nzcy9tYWluLnNjc3MnO1xyXG5pbXBvcnQgJy4vY3NzL3NrZWxldG9uX2xvYWRlcnMuc2Nzcyc7XHJcblxyXG5jb25zdCBwYWdlTmFtZSA9XHJcbiAgICAnaW5mb19jb3JvbmF2aXJ1c19jb3ZpZF8xOV9fX2NhcnRlX2V0X2Rvbm5lZXNfY292aWRfMTlfZW5fZnJhbmNlJztcclxuXHJcbmZ1bmN0aW9uIGZhbGxiYWNrQ29weVVybFRvQ2xpcGJvYXJkKHRleHQpIHtcclxuICAgIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIHRleHRBcmVhLnZhbHVlID0gdGV4dDtcclxuICAgIC8vIEF2b2lkIHNjcm9sbGluZyB0byBib3R0b21cclxuICAgIHRleHRBcmVhLnN0eWxlLnRvcCA9ICcwJztcclxuICAgIHRleHRBcmVhLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICB0ZXh0QXJlYS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XHJcbiAgICB0ZXh0QXJlYS5mb2N1cygpO1xyXG4gICAgdGV4dEFyZWEuc2VsZWN0KCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICAgJ0ZhbGxiYWNrOiBPdXBzLCBsYSBjb3BpZSBkYW5zIGxlIHByZXNzZSBwYXBpZXIgYSDDqWNob3XDqS4nLFxyXG4gICAgICAgICAgICBlcnJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXh0QXJlYSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHlVcmxUb0NsaXBib2FyZCh0eHQpIHtcclxuICAgIGNvbnN0IHVybCA9XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnByb3RvY29sICtcclxuICAgICAgICAnLy8nICtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgK1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArXHJcbiAgICAgICAgJyMnICtcclxuICAgICAgICB0eHQ7XHJcbiAgICBpZiAoIW5hdmlnYXRvci5jbGlwYm9hcmQpIHtcclxuICAgICAgICBmYWxsYmFja0NvcHlVcmxUb0NsaXBib2FyZCh1cmwpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHVybCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU1lbnVCdG5TdGF0ZShlbGVtZW50KSB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnItc2lkZW1lbnVfX2l0ZW0tLWFjdGl2ZScpO1xyXG4gICAgaWYgKGFjdGl2ZSkge1xyXG4gICAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdmci1zaWRlbWVudV9faXRlbS0tYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBlbGVtZW50XHJcbiAgICAgICAgLmNsb3Nlc3QoJy5mci1zaWRlbWVudV9faXRlbScpXHJcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2ZyLXNpZGVtZW51X19pdGVtLS1hY3RpdmUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QXRUYWcoXHJcbiAgICBwYWdlID0gbnVsbCxcclxuICAgIG5hbWUgPSBudWxsLFxyXG4gICAgY2hhcHRlcjEgPSBudWxsLFxyXG4gICAgY2hhcHRlcjIgPSBudWxsLFxyXG4gICAgY2hhcHRlcjMgPSBudWxsLFxyXG4gICAgdHlwZSA9IG51bGwsXHJcbiAgICBlbGVtZW50ID0gbnVsbFxyXG4pIHtcclxuICAgIGlmICh0YXJ0ZWF1Y2l0cm9uLnN0YXRlLmF0aW50ZXJuZXRjbmlsICYmIHR5cGVvZiB0YWcgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgY29uc3QgdmFyanNvbiA9IHtcclxuICAgICAgICAgICAgbGV2ZWwyOiAnOScsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocGFnZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgaWYgKHVybC5oYXNoLnN1YnN0cmluZygxKS5zcGxpdCgnPScpLnNoaWZ0KCkgPT09ICd4dG9yJykge1xyXG4gICAgICAgICAgICAgICAgdXJsLmhhc2ggPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMoJ3h0b3InKSkge1xyXG4gICAgICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ3h0b3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBhdEN1c3RvbVZhcnMgPSB7XHJcbiAgICAgICAgICAgICAgICBzaXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgMTogJ2ZyJyxcclxuICAgICAgICAgICAgICAgICAgICAyOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAzOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICA0OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAxNDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgMTU6IHVybC50b1N0cmluZygpLnJlcGxhY2UoJyMnLCAnJTIzJyksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgIDE6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIDI6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIDM6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIDQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyanNvbi5jdXN0b21WYXJzID0gYXRDdXN0b21WYXJzO1xyXG4gICAgICAgICAgICB2YXJqc29uLm5hbWUgPSBwYWdlO1xyXG4gICAgICAgICAgICB0YWcucGFnZS5zZW5kKHZhcmpzb24pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhcmpzb24ubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFwdGVyMSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXJqc29uLmNoYXB0ZXIxID0gY2hhcHRlcjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFwdGVyMiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXJqc29uLmNoYXB0ZXIyID0gY2hhcHRlcjI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFwdGVyMyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXJqc29uLmNoYXB0ZXIzID0gY2hhcHRlcjM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhcmpzb24udHlwZSA9IHR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQuaHJlZikge1xyXG4gICAgICAgICAgICBjb25zdCBjdXN0b21PYmplY3QgPSB7XHJcbiAgICAgICAgICAgICAgICBjbGljX3VybF9icnV0OiBlbGVtZW50LmhyZWYsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhcmpzb24uY3VzdG9tT2JqZWN0ID0gY3VzdG9tT2JqZWN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YWcuY2xpY2suc2VuZCh2YXJqc29uKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplKGlubmVyVGV4dCkge1xyXG4gICAgcmV0dXJuIGlubmVyVGV4dFxyXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgLnJlcGxhY2UoL1tcXHMnLV0vZywgJ18nKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bw6nDqF0vZywgJ2UnKVxyXG4gICAgICAgIC5yZXBsYWNlKC/DtC9nLCAnbycpXHJcbiAgICAgICAgLnJlcGxhY2UoL8OuL2csICdpJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGFMdmwoZWxlbWVudCkge1xyXG4gICAgY29uc3QgcGFyZW50ID1cclxuICAgICAgICBlbGVtZW50LmNsb3Nlc3QoJy5ib3gnKSB8fFxyXG4gICAgICAgIGVsZW1lbnQuY2xvc2VzdCgnLm92ZXJ2aWV3JykgfHxcclxuICAgICAgICBlbGVtZW50LmNsb3Nlc3QoJ3NlY3Rpb24nKTtcclxuICAgIGNvbnN0IGx2bCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhLmFuY2hvcicpLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgIHJldHVybiBsdmw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRBdFRhZyhlbGVtZW50KSB7XHJcbiAgICBpZiAoZWxlbWVudC5tYXRjaGVzKCdnZW8tbGlzdCBidXR0b24nKSkge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSAncmVjaGVyY2hlX3JlaW5pdGlhbGlzZXInO1xyXG4gICAgICAgIHNldEF0VGFnKG51bGwsIG5hbWUsIHBhZ2VOYW1lLCAnZmlsdHJlJywgbnVsbCwgJ2FjdGlvbicpO1xyXG4gICAgfSBlbHNlIGlmIChlbGVtZW50Lm1hdGNoZXMoJy5mci1zaWRlbWVudV9fbGluaycpKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGBhY2Nlc18ke2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKX1gO1xyXG4gICAgICAgIGNvbnN0IGNoYXB0ZXIyID0gJ3NpZGVtZW51JztcclxuICAgICAgICBjb25zdCBjaGFwdGVyMyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNlY3Rpb24nKTtcclxuICAgICAgICBzZXRBdFRhZyhudWxsLCBuYW1lLCBwYWdlTmFtZSwgY2hhcHRlcjIsIGNoYXB0ZXIzLCAnYWN0aW9uJyk7XHJcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuY2xvc2VzdCgnLnN1Ym1lbnUgLmZyLW5hdl9fbGluaycpKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IG5vcm1hbGl6ZShcclxuICAgICAgICAgICAgJ2FjY2VzXycgK1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuc3VibWVudSAuZnItbmF2X19saW5rJylcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3VibWVudS1lbnRyeScpWzBdLnRleHRDb250ZW50XHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRBdFRhZyhcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgcGFnZU5hbWUsXHJcbiAgICAgICAgICAgICduYXZpZ2F0aW9uLXNlY29uZGFpcmUnLFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAnbmF2aWdhdGlvbicsXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xvc2VzdCgnLnN1Ym1lbnUgLmZyLW5hdl9fbGluaycpXHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5tYXRjaGVzKCcubHZsMi1oZWFkZXIgYVt0YXJnZXQ9XCJfYmxhbmtcIl0nKSkge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBlbGVtZW50LmlubmVyVGV4dDtcclxuICAgICAgICBjb25zdCBjaGFwdGVyMiA9ICdsaWVuJztcclxuICAgICAgICBjb25zdCBjaGFwdGVyMyA9IGdldERhdGFMdmwoZWxlbWVudCk7XHJcbiAgICAgICAgc2V0QXRUYWcobnVsbCwgbmFtZSwgcGFnZU5hbWUsIGNoYXB0ZXIyLCBjaGFwdGVyMywgJ2V4aXQnLCBlbGVtZW50KTtcclxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jbG9zZXN0KCcub3ZhbCcpKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9ICdhbmNyZSc7XHJcbiAgICAgICAgY29uc3QgY2hhcHRlcjIgPSAncGFydGFnZSc7XHJcbiAgICAgICAgY29uc3QgY2hhcHRlcjMgPSBnZXREYXRhTHZsKGVsZW1lbnQpO1xyXG4gICAgICAgIHNldEF0VGFnKG51bGwsIG5hbWUsIHBhZ2VOYW1lLCBjaGFwdGVyMiwgY2hhcHRlcjMsICdhY3Rpb24nKTtcclxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jbG9zZXN0KCcuZnItYnJlYWRjcnVtYl9fbGluaycpKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9XHJcbiAgICAgICAgICAgICdhY2Nlc18nICtcclxuICAgICAgICAgICAgbm9ybWFsaXplKGVsZW1lbnQuY2xvc2VzdCgnLmZyLWJyZWFkY3J1bWJfX2xpbmsnKS5pbm5lclRleHQpO1xyXG4gICAgICAgIGNvbnN0IGNoYXB0ZXIyID0gJ2ZpbC1hcmlhbmUnO1xyXG4gICAgICAgIHNldEF0VGFnKFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBwYWdlTmFtZSxcclxuICAgICAgICAgICAgY2hhcHRlcjIsXHJcbiAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICAnbmF2aWdhdGlvbicsXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xvc2VzdCgnLmZyLWJyZWFkY3J1bWJfX2xpbmsnKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC5pZCAhPT0gJ3NlbGVjdC1yZWcnIHx8IGUudGFyZ2V0LmlkICE9PSAnc2VsZWN0LWRlcCcpIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gbm9ybWFsaXplKFxyXG4gICAgICAgICAgICAncmVjaGVyY2hlXycgK1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsaXplKGUudGFyZ2V0Lm9wdGlvbnNbZS50YXJnZXQuc2VsZWN0ZWRJbmRleF0udGV4dENvbnRlbnQpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBjaGFwdGVyMyA9XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmlkID09PSAnc2VsZWN0LXJlZycgPyAncmVnaW9uJyA6ICdkZXBhcnRlbWVudCc7XHJcbiAgICAgICAgc2V0QXRUYWcobnVsbCwgbmFtZSwgcGFnZU5hbWUsICdmaWx0cmUnLCBjaGFwdGVyMywgJ2FjdGlvbicpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuZnItYWxlcnQgLmZyLWxpbmstLWNsb3NlJykpIHtcclxuICAgICAgICBjb25zdCBhbGVydCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5mci1hbGVydCcpO1xyXG4gICAgICAgIGFsZXJ0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYWxlcnQpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNlbmRBdFRhZyhlLnRhcmdldCk7XHJcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmZyLXNpZGVtZW51X19saW5rJykpIHtcclxuICAgICAgICB0b2dnbGVNZW51QnRuU3RhdGUoZS50YXJnZXQpO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuc3RpY2t5LWJ0bicpKSB7XHJcbiAgICAgICAgY29uc3Qgc3ViTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mci1zaWRlbWVudScpO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVN1YlNlY3Rpb24gPSBzdWJNZW51LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICcuZnItc2lkZW1lbnVfX2l0ZW0tLWFjdGl2ZSdcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChhY3RpdmVTdWJTZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUlkID0gYWN0aXZlU3ViU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5mci1zaWRlbWVudV9fbGluaycpXHJcbiAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLXNlY3Rpb24nKTtcclxuICAgICAgICAgICAgY29uc3QgYWN0aXZlU2VjdGlvbiA9IHN1Yk1lbnUucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICAgIGAuZnItc2lkZW1lbnVfX2J0blthcmlhLWNvbnRyb2xzPVwiJHthY3RpdmVJZH1cIl1gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IGFjdGl2ZVNlY3Rpb24uZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgIGlmIChhY3RpdmUgPT09ICdmYWxzZScpIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVNlY3Rpb24uY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b3AgPSB3aW5kb3cuc2Nyb2xsWSArIHN1Yk1lbnUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gMTIwO1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7dG9wOiB0b3AsIGJlaGF2aW9yOiAnYXV0byd9KTtcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLmZyLXRhYnNfX3RhYicpKSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSAnZ3JhcGhpcXVlJztcclxuICAgICAgICBjb25zdCB0YWIgPSBlLnRhcmdldC5jbG9zZXN0KCcuZnItdGFic19fdGFiJyk7XHJcbiAgICAgICAgY29uc3QgcGFuZWxJZCA9IHRhYi5pZCArICctcGFuZWwnO1xyXG4gICAgICAgIGNvbnN0IHdpZGdldCA9IGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChwYW5lbElkKVxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLndpZGdldCcpO1xyXG4gICAgICAgIGlmICh3aWRnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSA9PT0gJ21hcC1jaGFydCcpIHtcclxuICAgICAgICAgICAgbmFtZSA9ICdjYXJ0ZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNoYXB0ZXIzID0gZ2V0RGF0YUx2bCh0YWIpO1xyXG4gICAgICAgIHNldEF0VGFnKG51bGwsIG5hbWUsIHBhZ2VOYW1lLCAnb25nbGV0JywgY2hhcHRlcjMsICdhY3Rpb24nKTtcclxuICAgICAgICBpZiAoIXdpZGdldC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICAgICAgaGFuZGxlV2lkZ2V0TG9hZGluZyh3aWRnZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLm92YWwnKSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB0eHQgPSBnZXREYXRhTHZsKGUudGFyZ2V0KTtcclxuICAgICAgICBjb3B5VXJsVG9DbGlwYm9hcmQodHh0KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVXaWRnZXRMb2FkaW5nKHdpZGdldCkge1xyXG4gICAgY29uc3QgdHlwZSA9IHdpZGdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xyXG4gICAgY29uc3QgaW5kaWNhdG9yID0gd2lkZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRpY2F0ZXVyJyk7XHJcbiAgICBpZiAodHlwZSA9PT0gJ25ldy1tdWx0aWxpbmUtY2hhcnQnKSB7XHJcbiAgICAgICAgd2lkZ2V0LmlubmVySFRNTCA9IGA8JHt0eXBlfSBpbmRpY2F0ZXVycz1cIiR7aW5kaWNhdG9yfVwiPjwvJHt0eXBlfT5gO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnYmFyLWxpbmUtY2hhcnQnKSB7XHJcbiAgICAgICAgY29uc3QgW2luZGljYXRvcjEsIGluZGljYXRvcjJdID0gaW5kaWNhdG9yLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgd2lkZ2V0LmlubmVySFRNTCA9IGA8JHt0eXBlfSBpbmRpY2F0ZXVyMT1cIiR7aW5kaWNhdG9yMX1cIiBpbmRpY2F0ZXVyMj1cIiR7aW5kaWNhdG9yMn1cIj48LyR7dHlwZX0+YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGluZGljYXRvciA9PT0gJ25iX2NvbGxlZ2VfbHljZWVfdmFjY2luJykge1xyXG4gICAgICAgICAgICB3aWRnZXQuaW5uZXJIVE1MID0gYDwke3R5cGV9IGluZGljYXRldXI9XCIke2luZGljYXRvcn1cIiBjb25zdGFudGU9XCJ0cnVlXCI+PC8ke3R5cGV9PmA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRpY2F0b3IgPT09ICd2YWNjaW5zX3JhcHBlbCcpIHtcclxuICAgICAgICAgICAgd2lkZ2V0LmlubmVySFRNTCA9IGA8JHt0eXBlfSBpbmRpY2F0ZXVyPVwiJHtpbmRpY2F0b3J9XCIgcGVyaW9kcz1cInZhY2Npbl9yYXBwZWxcIj48LyR7dHlwZX0+YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aWRnZXQuaW5uZXJIVE1MID0gYDwke3R5cGV9IGluZGljYXRldXI9XCIke2luZGljYXRvcn1cIj48LyR7dHlwZX0+YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzSW5WaWV3cG9ydChlbGVtLCBvZmZzZXRUb3ApIHtcclxuICAgIGNvbnN0IGJvdW5kaW5nID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9XHJcbiAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIGJvdW5kaW5nLnRvcCA+PSAwIC0gb2Zmc2V0VG9wICYmXHJcbiAgICAgICAgYm91bmRpbmcubGVmdCA+PSAwICYmXHJcbiAgICAgICAgYm91bmRpbmcuYm90dG9tIDw9IHdpbmRvd0hlaWdodCArIHdpbmRvd0hlaWdodCAvIDIgJiZcclxuICAgICAgICBib3VuZGluZy5yaWdodCA8PVxyXG4gICAgICAgICAgICAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxyXG4gICAgKTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RhcnRlYXVjaXRyb25fbG9hZGVkJywgKCkgPT4ge1xyXG4gICAgc2V0QXRUYWcocGFnZU5hbWUpO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB3aWRnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAnLmJveCAud2lkZ2V0LCAub3ZlcnZpZXcgLndpZGdldCdcclxuICAgICk7XHJcbiAgICBjb25zdCBvZmZzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhLmFuY2hvcicpWzBdLm9mZnNldFRvcDtcclxuICAgIGlmIChcclxuICAgICAgICAnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyAmJlxyXG4gICAgICAgICdJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5JyBpbiB3aW5kb3cgJiZcclxuICAgICAgICAnaW50ZXJzZWN0aW9uUmF0aW8nIGluIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5LnByb3RvdHlwZVxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXJPcHRpb25zID0ge1xyXG4gICAgICAgICAgICByb290OiBudWxsLFxyXG4gICAgICAgICAgICByb290TWFyZ2luOiAnLTQ2JSAwcHggLTU0JSAwcHgnLFxyXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbk9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZW50cnkudGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2EuYW5jaG9yJylcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICAgICAgICBgLmZyLXNpZGVtZW51X19idG5bYXJpYS1jb250cm9scz1cIiR7aWR9XCJdYFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICcuZnItc2lkZW1lbnVfX2J0blthcmlhLWNvbnRyb2xzPVwiZnItc2lkZW1lbnUtd3JhcHBlclwiXSdcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0xhcmdlU2NyZWVuID1cclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShtZW51QnRuKS5kaXNwbGF5ID09PSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmUgPSBidG4uZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuaXNJbnRlcnNlY3RpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPT09ICdmYWxzZScgJiZcclxuICAgICAgICAgICAgICAgICAgICBpc0xhcmdlU2NyZWVuXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBidG4uY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgb2JzZXJ2ZXJPcHRpb25zKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbi5mci1ncmlkLXJvdycpLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc2VjdGlvbk9ic2VydmVyLm9ic2VydmUoc2VjdGlvbik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJveE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZW50cnkudGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2EuYW5jaG9yJylcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgYC5mci1zaWRlbWVudV9fbGlua1tocmVmPVwiIyR7aWR9XCJdYFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5pc0ludGVyc2VjdGluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFsaW5rLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZnItc2lkZW1lbnVfX2l0ZW0tLWFjdGl2ZSdcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVNZW51QnRuU3RhdGUobGluayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIG9ic2VydmVyT3B0aW9ucyk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3gsIC5vdmVydmlldycpLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgYm94T2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgd2lkZ2V0T2JzZXJ2ZXJPcHRpb25zID0ge1xyXG4gICAgICAgICAgICByb290OiBudWxsLFxyXG4gICAgICAgICAgICByb290TWFyZ2luOiBgJHtvZmZzZXR9cHggMHB4IDUwJSAwcHhgLFxyXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB3aWRnZXRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmlzSW50ZXJzZWN0aW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKGVudHJ5LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpICE9PSAnbWFwLWNoYXJ0JyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhZW50cnkudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyLXRhYnNfX3BhbmVsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlV2lkZ2V0TG9hZGluZyhlbnRyeS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCB3aWRnZXRPYnNlcnZlck9wdGlvbnMpO1xyXG5cclxuICAgICAgICB3aWRnZXRzLmZvckVhY2goKHdpZGdldCkgPT4ge1xyXG4gICAgICAgICAgICB3aWRnZXRPYnNlcnZlci5vYnNlcnZlKHdpZGdldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpZGdldHMuZm9yRWFjaCgod2lkZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNJblZpZXdwb3J0KHdpZGdldCwgb2Zmc2V0KSAmJiAhd2lkZ2V0Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVdpZGdldExvYWRpbmcod2lkZ2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIGNhbGxlZCA9IDA7XG4gIHZhciBpdGVyYXRvcldpdGhSZXR1cm4gPSB7XG4gICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZG9uZTogISFjYWxsZWQrKyB9O1xuICAgIH0sXG4gICAgJ3JldHVybic6IGZ1bmN0aW9uICgpIHtcbiAgICAgIFNBRkVfQ0xPU0lORyA9IHRydWU7XG4gICAgfVxuICB9O1xuICBpdGVyYXRvcldpdGhSZXR1cm5bSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktZnJvbSwgbm8tdGhyb3ctbGl0ZXJhbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICBBcnJheS5mcm9tKGl0ZXJhdG9yV2l0aFJldHVybiwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgU0tJUF9DTE9TSU5HKSB7XG4gIGlmICghU0tJUF9DTE9TSU5HICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIElURVJBVElPTl9TVVBQT1JUID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIG9iamVjdCA9IHt9O1xuICAgIG9iamVjdFtJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogSVRFUkFUSU9OX1NVUFBPUlQgPSB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICBleGVjKG9iamVjdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIElURVJBVElPTl9TVVBQT1JUO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7XG52YXIgTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEID0gJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCc7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIFNQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhU1BFQ0lFU19TVVBQT1JUO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IHRvTGVuZ3RoKEUubGVuZ3RoKTtcbiAgICAgICAgaWYgKG4gKyBsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG4gPj0gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmcm9tID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZyb20nKTtcbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uJyk7XG5cbnZhciBJTkNPUlJFQ1RfSVRFUkFUSU9OID0gIWNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWZyb20gLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgQXJyYXkuZnJvbShpdGVyYWJsZSk7XG59KTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IElOQ09SUkVDVF9JVEVSQVRJT04gfSwge1xuICBmcm9tOiBmcm9tXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxuLy8gYEFycmF5LmlzQXJyYXlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5pc2FycmF5XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBzdGF0OiB0cnVlIH0sIHtcbiAgaXNBcnJheTogaXNBcnJheVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ3NsaWNlJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG52YXIgbmF0aXZlU2xpY2UgPSBbXS5zbGljZTtcbnZhciBtYXggPSBNYXRoLm1heDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5zbGljZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zbGljZVxuLy8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmdzIGFuZCBET00gb2JqZWN0c1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBzbGljZTogZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGsgPSB0b0Fic29sdXRlSW5kZXgoc3RhcnQsIGxlbmd0aCk7XG4gICAgdmFyIGZpbiA9IHRvQWJzb2x1dGVJbmRleChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IGVuZCwgbGVuZ3RoKTtcbiAgICAvLyBpbmxpbmUgYEFycmF5U3BlY2llc0NyZWF0ZWAgZm9yIHVzYWdlIG5hdGl2ZSBgQXJyYXkjc2xpY2VgIHdoZXJlIGl0J3MgcG9zc2libGVcbiAgICB2YXIgQ29uc3RydWN0b3IsIHJlc3VsdCwgbjtcbiAgICBpZiAoaXNBcnJheShPKSkge1xuICAgICAgQ29uc3RydWN0b3IgPSBPLmNvbnN0cnVjdG9yO1xuICAgICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICAgIGlmICh0eXBlb2YgQ29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAoQ29uc3RydWN0b3IgPT09IEFycmF5IHx8IGlzQXJyYXkoQ29uc3RydWN0b3IucHJvdG90eXBlKSkpIHtcbiAgICAgICAgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KENvbnN0cnVjdG9yKSkge1xuICAgICAgICBDb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yW1NQRUNJRVNdO1xuICAgICAgICBpZiAoQ29uc3RydWN0b3IgPT09IG51bGwpIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKENvbnN0cnVjdG9yID09PSBBcnJheSB8fCBDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVTbGljZS5jYWxsKE8sIGssIGZpbik7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdCA9IG5ldyAoQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQ29uc3RydWN0b3IpKG1heChmaW4gLSBrLCAwKSk7XG4gICAgZm9yIChuID0gMDsgayA8IGZpbjsgaysrLCBuKyspIGlmIChrIGluIE8pIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgbiwgT1trXSk7XG4gICAgcmVzdWx0Lmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcgPSBGdW5jdGlvblByb3RvdHlwZS50b1N0cmluZztcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gRnVuY3Rpb24gaW5zdGFuY2VzIGAubmFtZWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhKE5BTUUgaW4gRnVuY3Rpb25Qcm90b3R5cGUpKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcuY2FsbCh0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCIvLyBgU3ltYm9sLnByb3RvdHlwZS5kZXNjcmlwdGlvbmAgZ2V0dGVyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN5bWJvbC5wcm90b3R5cGUuZGVzY3JpcHRpb25cbid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xuXG52YXIgTmF0aXZlU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcblxuaWYgKERFU0NSSVBUT1JTICYmIHR5cGVvZiBOYXRpdmVTeW1ib2wgPT0gJ2Z1bmN0aW9uJyAmJiAoISgnZGVzY3JpcHRpb24nIGluIE5hdGl2ZVN5bWJvbC5wcm90b3R5cGUpIHx8XG4gIC8vIFNhZmFyaSAxMiBidWdcbiAgTmF0aXZlU3ltYm9sKCkuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZFxuKSkge1xuICB2YXIgRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlID0ge307XG4gIC8vIHdyYXAgU3ltYm9sIGNvbnN0cnVjdG9yIGZvciBjb3JyZWN0IHdvcmsgd2l0aCB1bmRlZmluZWQgZGVzY3JpcHRpb25cbiAgdmFyIFN5bWJvbFdyYXBwZXIgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBTdHJpbmcoYXJndW1lbnRzWzBdKTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcyBpbnN0YW5jZW9mIFN5bWJvbFdyYXBwZXJcbiAgICAgID8gbmV3IE5hdGl2ZVN5bWJvbChkZXNjcmlwdGlvbilcbiAgICAgIC8vIGluIEVkZ2UgMTMsIFN0cmluZyhTeW1ib2wodW5kZWZpbmVkKSkgPT09ICdTeW1ib2wodW5kZWZpbmVkKSdcbiAgICAgIDogZGVzY3JpcHRpb24gPT09IHVuZGVmaW5lZCA/IE5hdGl2ZVN5bWJvbCgpIDogTmF0aXZlU3ltYm9sKGRlc2NyaXB0aW9uKTtcbiAgICBpZiAoZGVzY3JpcHRpb24gPT09ICcnKSBFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmVbcmVzdWx0XSA9IHRydWU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhTeW1ib2xXcmFwcGVyLCBOYXRpdmVTeW1ib2wpO1xuICB2YXIgc3ltYm9sUHJvdG90eXBlID0gU3ltYm9sV3JhcHBlci5wcm90b3R5cGUgPSBOYXRpdmVTeW1ib2wucHJvdG90eXBlO1xuICBzeW1ib2xQcm90b3R5cGUuY29uc3RydWN0b3IgPSBTeW1ib2xXcmFwcGVyO1xuXG4gIHZhciBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvdHlwZS50b1N0cmluZztcbiAgdmFyIG5hdGl2ZSA9IFN0cmluZyhOYXRpdmVTeW1ib2woJ3Rlc3QnKSkgPT0gJ1N5bWJvbCh0ZXN0KSc7XG4gIHZhciByZWdleHAgPSAvXlN5bWJvbFxcKCguKilcXClbXildKyQvO1xuICBkZWZpbmVQcm9wZXJ0eShzeW1ib2xQcm90b3R5cGUsICdkZXNjcmlwdGlvbicsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBkZXNjcmlwdGlvbigpIHtcbiAgICAgIHZhciBzeW1ib2wgPSBpc09iamVjdCh0aGlzKSA/IHRoaXMudmFsdWVPZigpIDogdGhpcztcbiAgICAgIHZhciBzdHJpbmcgPSBzeW1ib2xUb1N0cmluZy5jYWxsKHN5bWJvbCk7XG4gICAgICBpZiAoaGFzKEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZSwgc3ltYm9sKSkgcmV0dXJuICcnO1xuICAgICAgdmFyIGRlc2MgPSBuYXRpdmUgPyBzdHJpbmcuc2xpY2UoNywgLTEpIDogc3RyaW5nLnJlcGxhY2UocmVnZXhwLCAnJDEnKTtcbiAgICAgIHJldHVybiBkZXNjID09PSAnJyA/IHVuZGVmaW5lZCA6IGRlc2M7XG4gICAgfVxuICB9KTtcblxuICAkKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuICAgIFN5bWJvbDogU3ltYm9sV3JhcHBlclxuICB9KTtcbn1cbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wuaXRlcmF0b3JgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN5bWJvbC5pdGVyYXRvclxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbInBhZ2VOYW1lIiwiZmFsbGJhY2tDb3B5VXJsVG9DbGlwYm9hcmQiLCJ0ZXh0IiwidGV4dEFyZWEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsInN0eWxlIiwidG9wIiwibGVmdCIsInBvc2l0aW9uIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZm9jdXMiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlbW92ZUNoaWxkIiwiY29weVVybFRvQ2xpcGJvYXJkIiwidHh0IiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicGF0aG5hbWUiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2dnbGVNZW51QnRuU3RhdGUiLCJlbGVtZW50IiwiYWN0aXZlIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImNsb3Nlc3QiLCJhZGQiLCJzZXRBdFRhZyIsInBhZ2UiLCJuYW1lIiwiY2hhcHRlcjEiLCJjaGFwdGVyMiIsImNoYXB0ZXIzIiwidHlwZSIsInRhcnRlYXVjaXRyb24iLCJzdGF0ZSIsImF0aW50ZXJuZXRjbmlsIiwidGFnIiwidmFyanNvbiIsImxldmVsMiIsIlVSTCIsImhyZWYiLCJoYXNoIiwic3Vic3RyaW5nIiwic3BsaXQiLCJzaGlmdCIsInNlYXJjaFBhcmFtcyIsImhhcyIsImF0Q3VzdG9tVmFycyIsInNpdGUiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJjdXN0b21WYXJzIiwic2VuZCIsImN1c3RvbU9iamVjdCIsImNsaWNfdXJsX2JydXQiLCJjbGljayIsIm5vcm1hbGl6ZSIsImlubmVyVGV4dCIsInRvTG93ZXJDYXNlIiwiZ2V0RGF0YUx2bCIsInBhcmVudCIsImx2bCIsImdldEF0dHJpYnV0ZSIsInNlbmRBdFRhZyIsIm1hdGNoZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidGV4dENvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImlkIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJhbGVydCIsInBhcmVudE5vZGUiLCJzdWJNZW51IiwiYWN0aXZlU3ViU2VjdGlvbiIsImFjdGl2ZUlkIiwiYWN0aXZlU2VjdGlvbiIsInNjcm9sbFkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwidGFiIiwicGFuZWxJZCIsIndpZGdldCIsImdldEVsZW1lbnRCeUlkIiwiaGFzQ2hpbGROb2RlcyIsImhhbmRsZVdpZGdldExvYWRpbmciLCJwcmV2ZW50RGVmYXVsdCIsImluZGljYXRvciIsImlubmVySFRNTCIsImluZGljYXRvcjEiLCJpbmRpY2F0b3IyIiwiaXNJblZpZXdwb3J0IiwiZWxlbSIsIm9mZnNldFRvcCIsImJvdW5kaW5nIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJib3R0b20iLCJyaWdodCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImV2ZW50Iiwid2lkZ2V0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvZmZzZXQiLCJJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5IiwicHJvdG90eXBlIiwib2JzZXJ2ZXJPcHRpb25zIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJidG4iLCJtZW51QnRuIiwiaXNMYXJnZVNjcmVlbiIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5IiwiaXNJbnRlcnNlY3RpbmciLCJzZWN0aW9uIiwib2JzZXJ2ZSIsImJveE9ic2VydmVyIiwibGluayIsImNvbnRhaW5zIiwid2lkZ2V0T2JzZXJ2ZXJPcHRpb25zIiwid2lkZ2V0T2JzZXJ2ZXIiLCJvYnNlcnZlciIsInVub2JzZXJ2ZSJdLCJzb3VyY2VSb290IjoiIn0=