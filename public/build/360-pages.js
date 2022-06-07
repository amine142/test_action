(self["webpackChunk"] = self["webpackChunk"] || []).push([["360-pages"],{

/***/ "./assets/360-pages/index.js":
/*!***********************************!*\
  !*** ./assets/360-pages/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_css_summary_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/css/summary.scss */ "./assets/app/css/summary.scss");
/* harmony import */ var _app_css_recentsArticles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/css/recentsArticles.scss */ "./assets/app/css/recentsArticles.scss");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/main.scss */ "./assets/360-pages/css/main.scss");
/* harmony import */ var _app_js_Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/js/Constants */ "./assets/app/js/Constants.js");
/* harmony import */ var _app_js_Copy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/js/Copy.js */ "./assets/app/js/Copy.js");
/* harmony import */ var _app_js_AtTags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/js/AtTags */ "./assets/app/js/AtTags.js");
/* harmony import */ var _app_js_summary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/js/summary */ "./assets/app/js/summary.js");





/* global tarteaucitron, tag */






 // Slug defines for AT ID

var slugAT = document.querySelector('main').getAttribute('data-slug');

function generateScroll() {
  // Listener on scroll
  window.addEventListener('scroll', function () {
    /* PROGRESS BAR */
    // Get the height of document
    var heightDoc = document.documentElement.scrollHeight - window.innerHeight; // Get the scroll Y

    var position = window.scrollY; // Get the document width

    var widthDoc = document.documentElement.clientWidth; // Calculation of large bar

    var bar = position / heightDoc * widthDoc; // Apply CSS properties

    document.querySelector('#progress').style.width = bar + 'px';
  });
}

function getTargetLinkAT() {
  var levelHitAT = '52';
  var titlePage = document.querySelector('h1');
  var brandLogo = document.querySelector('.logo-container span').textContent.trim();
  var chapter1 = titlePage.textContent.trim() === brandLogo ? 'accueil_' + titlePage.textContent.trim() : titlePage.textContent.trim();

  if (slugAT) {
    if (slugAT.indexOf('/france-relance') > -1) {
      levelHitAT = '46';
    } else if (slugAT.indexOf('/transformation-numerique') > -1) {
      levelHitAT = '51';
    } else if (slugAT.indexOf('/info-ukraine') > -1) {
      levelHitAT = '53';
    }
  }

  document.querySelectorAll('div[data-module="paragraph"]').forEach(function (item) {
    item.querySelectorAll('a').forEach(function (elt) {
      if (elt && !(elt.getAttribute('target') === '_blank')) {
        elt.setAttribute('target', '_blank');
      }
    });
  });
  document.querySelectorAll('.fr-breadcrumb__list li a').forEach(function (item) {
    var breadcrumbAT = {
      chapter1: chapter1,
      chapter2: 'fil-ariane',
      level2: levelHitAT,
      type: 'navigation'
    };
    item.setAttribute('data-atLink-tag', JSON.stringify(breadcrumbAT));
  });
  var listTarget = document.querySelectorAll('div[data-module=liste] a');

  if (listTarget) {
    listTarget.forEach(function (item) {
      item.setAttribute('target', '_self');
    });
  }

  var underMenu = document.querySelectorAll('.fr-sidemenu__inner .fr-nav__list a');
  var underMenuBtn = document.querySelectorAll('.fr-sidemenu__inner .fr-nav__btn');

  if (underMenu) {
    underMenu.forEach(function (item) {
      var underMenuAT = {
        name: 'acces_' + item.textContent,
        chapter1: chapter1,
        chapter2: 'navigation-secondaire',
        chapter3: brandLogo,
        level2: levelHitAT
      };
      item.setAttribute('data-atLink-tag', JSON.stringify(underMenuAT));
    });
  }

  if (underMenuBtn) {
    underMenuBtn.forEach(function (item) {
      var underMenuATBtn = {
        name: 'acces_' + item.textContent,
        chapter1: chapter1,
        chapter2: 'navigation-secondaire',
        chapter3: brandLogo,
        level2: levelHitAT
      };
      item.addEventListener('click', function () {
        if (item.getAttribute('aria-expanded') === 'false') {
          new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_9__["default"]().atTagsCallClick(JSON.stringify(underMenuATBtn), this);
        }
      });
    });
  }

  document.querySelectorAll('#myContentViewBody a, #myContentViewBody button, #content-summary a, input[type=radio]').forEach(function (item) {
    item.addEventListener('click', function () {
      var chapter3 = '';
      var moduleName = item.closest('[data-module]').getAttribute('data-module');
      var moduleChildName = item.closest('[data-child-module]') ? item.closest('[data-child-module]').getAttribute('data-child-module') : false;

      if (moduleName === 'paragraph') {
        moduleName = 'lien';
      }

      if (moduleName === 'mise-en-avant' || moduleName === 'publications-recentes' || moduleName === 'liens-transverses') {
        if (item.closest('[data-module]').querySelector('h3')) {
          chapter3 = item.closest('[data-module]').querySelector('h3').innerText;
        }
      }

      if (moduleChildName) {
        var moduleChildtext = '';

        if (item.closest('[data-module]').querySelector('h2')) {
          moduleChildtext = item.closest('[data-module]').querySelector('h2').innerText;
        } else {
          moduleChildtext = item.closest('[data-module]').querySelector('p').innerText;
        }

        if (!item.closest('.press') && !item.closest('.infoBlock')) {
          chapter3 = item.closest('[data-module]').getAttribute('data-module') + '_-_' + moduleChildtext;
          moduleName = moduleChildName;
        } else {
          chapter3 = moduleChildtext;
          moduleName = item.closest('[data-child-module]').getAttribute('data-child-module');
        }
      } // AT Tag Call


      var jsonAt = {
        name: item.type === 'radio' ? item.parentNode.querySelector('label').textContent : item.closest('#content-summary') ? 'acces_' + item.textContent : item.textContent,
        chapter1: chapter1,
        chapter2: moduleName,
        level2: levelHitAT,
        chapter3: chapter3
      };
      new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_9__["default"]().atTagsCallClick(JSON.stringify(jsonAt), this);
    });
  });
} // Hardcoded for summary stop stick when meets specific div element.


function getSummaryStop(summaryDom, stopTopDom) {
  var scrollBarPosition = window.pageYOffset | document.body.scrollTop;
  var divTop = document.querySelector('.summary').offsetTop;
  var stopTop = stopTopDom.offsetTop;

  if (scrollBarPosition > divTop && scrollBarPosition < stopTop) {
    summaryDom.style.position = 'sticky';
  } else if (scrollBarPosition > stopTop + 24) {
    // The 24px is equivalent to 1.5rem, it's the placement of summary to make space to the top edge when sticky position.
    summaryDom.style.position = 'relative';
  }
}

var infoBlock = document.querySelector('.infoBlock');
document.addEventListener('DOMContentLoaded', function () {
  var summaryDom = document.querySelector('.summary .fr-sidemenu--sticky');

  if (summaryDom) {
    (0,_app_js_summary__WEBPACK_IMPORTED_MODULE_10__["default"])();
  }

  generateScroll();
  getTargetLinkAT();
  (0,_app_js_Copy_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
  var stopTop = document.querySelector('.press');
  var accordion = document.querySelector('#accordion-checkbox');

  if (window.innerWidth >= _app_js_Constants__WEBPACK_IMPORTED_MODULE_7__.SCREEN_MOBILE_SWITCH && summaryDom && stopTop) {
    window.onscroll = function () {
      getSummaryStop(summaryDom, stopTop);
    };
  }

  if (infoBlock && accordion) {
    resizeWindow(infoBlock, accordion);
    infoBlocAction(infoBlock, accordion);
  }
}); // For height background calculation

function heightBlocCalcul(infoBlock) {
  infoBlock.querySelector('.backgroundAdd').style.height = infoBlock.offsetHeight + 'px';
} // For selecting radio button


function infoBlocAction(infoBlock, accordion) {
  var radioButton = infoBlock.querySelectorAll('.fr-accordion input[type="radio"]');
  radioButton.forEach(function (item) {
    item.addEventListener('click', function () {
      infoBlock.querySelectorAll('ul').forEach(function (elt) {
        elt.classList.remove('visible');
      });
      infoBlock.querySelector('ul[data-list="' + item.id + '"]').classList.add('visible');

      if (window.innerWidth <= _app_js_Constants__WEBPACK_IMPORTED_MODULE_7__.SCREEN_MOBILE_SWITCH) {
        window.dsfr(accordion).collapse.conceal();
      }

      heightBlocCalcul(infoBlock);
    });
  });
}

window.addEventListener('load', function () {
  if (infoBlock) {
    heightBlocCalcul(infoBlock);
  }
}); // Adapt height div in Information bloc to add background - TO DO: depends on case, maybe better switch this function to app folder

function resizeWindow(infoBlock, accordion) {
  window.addEventListener('resize', function () {
    heightBlocCalcul(infoBlock);

    if (window.innerWidth >= _app_js_Constants__WEBPACK_IMPORTED_MODULE_7__.SCREEN_MOBILE_SWITCH) {
      window.dsfr(accordion).collapse.disclose();
    }
  });
} // Load AT + TAC


window.addEventListener('tarteaucitron_loaded', function () {
  if (tarteaucitron.state.atinternetcnil && typeof tag !== 'undefined') {
    var levelHitAT = '52';
    var pageHitAT = '';
    var subThematic = '';
    var chapter1OPE = ''; // Hardcoded for AT analytics get Thematic and Sub-thematic

    if (slugAT) {
      if (slugAT.indexOf('/france-relance') > -1) {
        pageHitAT = 'france_relance';
        levelHitAT = '46';
      } else if (slugAT.indexOf('/transformation-numerique') > -1) {
        levelHitAT = '51';
        pageHitAT = 'transformation-numerique';
      } else if (slugAT.indexOf('/luttons-contre-les-violences-faites-aux-femmes') > -1) {
        pageHitAT = 'securite_et_justice';
      } else if (slugAT.indexOf('/lettre-aux-hommes-de-demain') > -1) {
        pageHitAT = 'affaires_sociales';
        subThematic = 'violences_conjugales';
      } else if (slugAT.indexOf('/info-ukraine') > -1) {
        pageHitAT = 'europe';
        subThematic = 'securite';
        levelHitAT = '53';
        chapter1OPE = 'specialPage';
      }
    }

    var titlePage = document.querySelector('h1').textContent.trim();
    var brandLogo = document.querySelector('.logo-container span').textContent.trim();
    var jsonAt = {
      name: titlePage === brandLogo ? 'accueil_' + titlePage : titlePage,
      chapter1: chapter1OPE === 'specialPage' ? '' : titlePage === brandLogo ? '' : brandLogo,
      level2: levelHitAT
    };
    var customVars = {
      site: {
        1: 'fr',
        2: pageHitAT,
        15: window.location.href,
        17: subThematic
      }
    };
    new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_9__["default"]().atTagsCallPage(JSON.stringify(jsonAt), customVars);
  }
});
/*
Since the submenu is a mix of the Main navigation and of the Sidemenu components, there's some conflict on the buttons
interaction. More precisely, clicking a fr-nav__btn does not make the related accordion properly collapse. The following
js fixed that.
 */

function toggleMenuBtnsState() {
  var activeBtn = document.querySelector(".submenu .fr-nav__btn[aria-expanded='true']");

  if (activeBtn) {
    activeBtn.setAttribute('aria-expanded', 'false');
  }
}

document.addEventListener('click', function (e) {
  if (e.target.matches(".submenu .fr-nav__btn[aria-expanded='false']")) {
    toggleMenuBtnsState(e.target);
  }
});

/***/ }),

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

/***/ "./assets/app/js/Constants.js":
/*!************************************!*\
  !*** ./assets/app/js/Constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./assets/app/js/summary.js":
/*!**********************************!*\
  !*** ./assets/app/js/summary.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./assets/360-pages/css/main.scss":
/*!****************************************!*\
  !*** ./assets/360-pages/css/main.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./assets/app/css/summary.scss":
/*!*************************************!*\
  !*** ./assets/app/css/summary.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--b791ff","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-4575cb"], () => (__webpack_exec__("./assets/360-pages/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWhCOztBQUNBLFFBQUkrTCxvQkFBb0IsSUFBSS9CLE9BQTVCLEVBQXFDO0FBQ2pDK0IsTUFBQUEsb0JBQW9CLENBQUN6QyxXQUFyQixDQUFpQ1UsT0FBakM7QUFDSDtBQUNKO0FBQ0o7Ozs7Ozs7Ozs7QUM3RkQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQsdUJBQXVCLG1CQUFPLENBQUMsMkdBQXVDOztBQUV0RTtBQUNBO0FBQ0EsSUFBSSx3RUFBd0U7QUFDNUU7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ1JELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELGNBQWMsbUJBQU8sQ0FBQywyRUFBdUI7QUFDN0Msc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELHFDQUFxQyxtQkFBTyxDQUFDLCtIQUFpRDtBQUM5RixxQkFBcUIsbUJBQU8sQ0FBQyx5RkFBOEI7O0FBRTNEO0FBQ0E7QUFDQSxJQUFJLGtEQUFrRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzLzM2MC1wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL0F0VGFncy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL0NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9zdW1tYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmRlZmluZS1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzLzM2MC1wYWdlcy9jc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvY3NzL3JlY2VudHNBcnRpY2xlcy5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvY3NzL3N1bW1hcnkuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgdGFydGVhdWNpdHJvbiwgdGFnICovXHJcbmltcG9ydCAnLi4vYXBwL2Nzcy9zdW1tYXJ5LnNjc3MnO1xyXG5pbXBvcnQgJy4uL2FwcC9jc3MvcmVjZW50c0FydGljbGVzLnNjc3MnO1xyXG5pbXBvcnQgJy4vY3NzL21haW4uc2Nzcyc7XHJcbmltcG9ydCB7U0NSRUVOX01PQklMRV9TV0lUQ0h9IGZyb20gJy4uL2FwcC9qcy9Db25zdGFudHMnO1xyXG5pbXBvcnQgQ29weSBmcm9tICcuLi9hcHAvanMvQ29weS5qcyc7XHJcbmltcG9ydCBBdFRhZ3MgZnJvbSAnLi4vYXBwL2pzL0F0VGFncyc7XHJcbmltcG9ydCBTdW1tYXJ5IGZyb20gJy4uL2FwcC9qcy9zdW1tYXJ5JztcclxuXHJcbi8vIFNsdWcgZGVmaW5lcyBmb3IgQVQgSURcclxuY29uc3Qgc2x1Z0FUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmdldEF0dHJpYnV0ZSgnZGF0YS1zbHVnJyk7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVNjcm9sbCgpIHtcclxuICAgIC8vIExpc3RlbmVyIG9uIHNjcm9sbFxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAvKiBQUk9HUkVTUyBCQVIgKi9cclxuICAgICAgICAvLyBHZXQgdGhlIGhlaWdodCBvZiBkb2N1bWVudFxyXG4gICAgICAgIGNvbnN0IGhlaWdodERvYyA9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBzY3JvbGwgWVxyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBkb2N1bWVudCB3aWR0aFxyXG4gICAgICAgIGNvbnN0IHdpZHRoRG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgICAgIC8vIENhbGN1bGF0aW9uIG9mIGxhcmdlIGJhclxyXG4gICAgICAgIGNvbnN0IGJhciA9IChwb3NpdGlvbiAvIGhlaWdodERvYykgKiB3aWR0aERvYztcclxuICAgICAgICAvLyBBcHBseSBDU1MgcHJvcGVydGllc1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9ncmVzcycpLnN0eWxlLndpZHRoID0gYmFyICsgJ3B4JztcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUYXJnZXRMaW5rQVQoKSB7XHJcbiAgICBsZXQgbGV2ZWxIaXRBVCA9ICc1Mic7XHJcbiAgICBjb25zdCB0aXRsZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpO1xyXG4gICAgY29uc3QgYnJhbmRMb2dvID0gZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmxvZ28tY29udGFpbmVyIHNwYW4nKVxyXG4gICAgICAgIC50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICBjb25zdCBjaGFwdGVyMSA9XHJcbiAgICAgICAgdGl0bGVQYWdlLnRleHRDb250ZW50LnRyaW0oKSA9PT0gYnJhbmRMb2dvXHJcbiAgICAgICAgICAgID8gJ2FjY3VlaWxfJyArIHRpdGxlUGFnZS50ZXh0Q29udGVudC50cmltKClcclxuICAgICAgICAgICAgOiB0aXRsZVBhZ2UudGV4dENvbnRlbnQudHJpbSgpO1xyXG4gICAgaWYgKHNsdWdBVCkge1xyXG4gICAgICAgIGlmIChzbHVnQVQuaW5kZXhPZignL2ZyYW5jZS1yZWxhbmNlJykgPiAtMSkge1xyXG4gICAgICAgICAgICBsZXZlbEhpdEFUID0gJzQ2JztcclxuICAgICAgICB9IGVsc2UgaWYgKHNsdWdBVC5pbmRleE9mKCcvdHJhbnNmb3JtYXRpb24tbnVtZXJpcXVlJykgPiAtMSkge1xyXG4gICAgICAgICAgICBsZXZlbEhpdEFUID0gJzUxJztcclxuICAgICAgICB9IGVsc2UgaWYgKHNsdWdBVC5pbmRleE9mKCcvaW5mby11a3JhaW5lJykgPiAtMSkge1xyXG4gICAgICAgICAgICBsZXZlbEhpdEFUID0gJzUzJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbZGF0YS1tb2R1bGU9XCJwYXJhZ3JhcGhcIl0nKVxyXG4gICAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnYScpLmZvckVhY2goKGVsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsdCAmJiAhKGVsdC5nZXRBdHRyaWJ1dGUoJ3RhcmdldCcpID09PSAnX2JsYW5rJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbHQuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZyLWJyZWFkY3J1bWJfX2xpc3QgbGkgYScpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBicmVhZGNydW1iQVQgPSB7XHJcbiAgICAgICAgICAgIGNoYXB0ZXIxOiBjaGFwdGVyMSxcclxuICAgICAgICAgICAgY2hhcHRlcjI6ICdmaWwtYXJpYW5lJyxcclxuICAgICAgICAgICAgbGV2ZWwyOiBsZXZlbEhpdEFULFxyXG4gICAgICAgICAgICB0eXBlOiAnbmF2aWdhdGlvbicsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1hdExpbmstdGFnJywgSlNPTi5zdHJpbmdpZnkoYnJlYWRjcnVtYkFUKSk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGxpc3RUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbZGF0YS1tb2R1bGU9bGlzdGVdIGEnKTtcclxuICAgIGlmIChsaXN0VGFyZ2V0KSB7XHJcbiAgICAgICAgbGlzdFRhcmdldC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX3NlbGYnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1bmRlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICcuZnItc2lkZW1lbnVfX2lubmVyIC5mci1uYXZfX2xpc3QgYSdcclxuICAgICk7XHJcbiAgICBjb25zdCB1bmRlck1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICcuZnItc2lkZW1lbnVfX2lubmVyIC5mci1uYXZfX2J0bidcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHVuZGVyTWVudSkge1xyXG4gICAgICAgIHVuZGVyTWVudS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVuZGVyTWVudUFUID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2FjY2VzXycgKyBpdGVtLnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICAgICAgY2hhcHRlcjE6IGNoYXB0ZXIxLFxyXG4gICAgICAgICAgICAgICAgY2hhcHRlcjI6ICduYXZpZ2F0aW9uLXNlY29uZGFpcmUnLFxyXG4gICAgICAgICAgICAgICAgY2hhcHRlcjM6IGJyYW5kTG9nbyxcclxuICAgICAgICAgICAgICAgIGxldmVsMjogbGV2ZWxIaXRBVCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXRMaW5rLXRhZycsIEpTT04uc3RyaW5naWZ5KHVuZGVyTWVudUFUKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHVuZGVyTWVudUJ0bikge1xyXG4gICAgICAgIHVuZGVyTWVudUJ0bi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVuZGVyTWVudUFUQnRuID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2FjY2VzXycgKyBpdGVtLnRleHRDb250ZW50LFxyXG4gICAgICAgICAgICAgICAgY2hhcHRlcjE6IGNoYXB0ZXIxLFxyXG4gICAgICAgICAgICAgICAgY2hhcHRlcjI6ICduYXZpZ2F0aW9uLXNlY29uZGFpcmUnLFxyXG4gICAgICAgICAgICAgICAgY2hhcHRlcjM6IGJyYW5kTG9nbyxcclxuICAgICAgICAgICAgICAgIGxldmVsMjogbGV2ZWxIaXRBVCxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ2ZhbHNlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBBdFRhZ3MoKS5hdFRhZ3NDYWxsQ2xpY2soXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHVuZGVyTWVudUFUQnRuKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICcjbXlDb250ZW50Vmlld0JvZHkgYSwgI215Q29udGVudFZpZXdCb2R5IGJ1dHRvbiwgI2NvbnRlbnQtc3VtbWFyeSBhLCBpbnB1dFt0eXBlPXJhZGlvXSdcclxuICAgICAgICApXHJcbiAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFwdGVyMyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vZHVsZU5hbWUgPSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ1tkYXRhLW1vZHVsZV0nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kdWxlJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGVDaGlsZE5hbWUgPSBpdGVtLmNsb3Nlc3QoJ1tkYXRhLWNoaWxkLW1vZHVsZV0nKVxyXG4gICAgICAgICAgICAgICAgICAgID8gaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCdbZGF0YS1jaGlsZC1tb2R1bGVdJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLWNoaWxkLW1vZHVsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChtb2R1bGVOYW1lID09PSAncGFyYWdyYXBoJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWUgPSAnbGllbic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZSA9PT0gJ21pc2UtZW4tYXZhbnQnIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZSA9PT0gJ3B1YmxpY2F0aW9ucy1yZWNlbnRlcycgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lID09PSAnbGllbnMtdHJhbnN2ZXJzZXMnXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jbG9zZXN0KCdbZGF0YS1tb2R1bGVdJykucXVlcnlTZWxlY3RvcignaDMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFwdGVyMyA9IGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCdbZGF0YS1tb2R1bGVdJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdoMycpLmlubmVyVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kdWxlQ2hpbGROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vZHVsZUNoaWxkdGV4dCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmNsb3Nlc3QoJ1tkYXRhLW1vZHVsZV0nKS5xdWVyeVNlbGVjdG9yKCdoMicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZUNoaWxkdGV4dCA9IGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCdbZGF0YS1tb2R1bGVdJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdoMicpLmlubmVyVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVDaGlsZHRleHQgPSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnW2RhdGEtbW9kdWxlXScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcigncCcpLmlubmVyVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5jbG9zZXN0KCcucHJlc3MnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5jbG9zZXN0KCcuaW5mb0Jsb2NrJylcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjMgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCdbZGF0YS1tb2R1bGVdJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZHVsZScpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdfLV8nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZUNoaWxkdGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZSA9IG1vZHVsZUNoaWxkTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFwdGVyMyA9IG1vZHVsZUNoaWxkdGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZSA9IGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCdbZGF0YS1jaGlsZC1tb2R1bGVdJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hpbGQtbW9kdWxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQVQgVGFnIENhbGxcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb25BdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnR5cGUgPT09ICdyYWRpbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJykudGV4dENvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS5jbG9zZXN0KCcjY29udGVudC1zdW1tYXJ5JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2FjY2VzXycgKyBpdGVtLnRleHRDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0udGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjE6IGNoYXB0ZXIxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXB0ZXIyOiBtb2R1bGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsMjogbGV2ZWxIaXRBVCxcclxuICAgICAgICAgICAgICAgICAgICBjaGFwdGVyMzogY2hhcHRlcjMsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbmV3IEF0VGFncygpLmF0VGFnc0NhbGxDbGljayhKU09OLnN0cmluZ2lmeShqc29uQXQpLCB0aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbi8vIEhhcmRjb2RlZCBmb3Igc3VtbWFyeSBzdG9wIHN0aWNrIHdoZW4gbWVldHMgc3BlY2lmaWMgZGl2IGVsZW1lbnQuXHJcbmZ1bmN0aW9uIGdldFN1bW1hcnlTdG9wKHN1bW1hcnlEb20sIHN0b3BUb3BEb20pIHtcclxuICAgIGNvbnN0IHNjcm9sbEJhclBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0IHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcbiAgICBjb25zdCBkaXZUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VtbWFyeScpLm9mZnNldFRvcDtcclxuICAgIGNvbnN0IHN0b3BUb3AgPSBzdG9wVG9wRG9tLm9mZnNldFRvcDtcclxuICAgIGlmIChzY3JvbGxCYXJQb3NpdGlvbiA+IGRpdlRvcCAmJiBzY3JvbGxCYXJQb3NpdGlvbiA8IHN0b3BUb3ApIHtcclxuICAgICAgICBzdW1tYXJ5RG9tLnN0eWxlLnBvc2l0aW9uID0gJ3N0aWNreSc7XHJcbiAgICB9IGVsc2UgaWYgKHNjcm9sbEJhclBvc2l0aW9uID4gc3RvcFRvcCArIDI0KSB7XHJcbiAgICAgICAgLy8gVGhlIDI0cHggaXMgZXF1aXZhbGVudCB0byAxLjVyZW0sIGl0J3MgdGhlIHBsYWNlbWVudCBvZiBzdW1tYXJ5IHRvIG1ha2Ugc3BhY2UgdG8gdGhlIHRvcCBlZGdlIHdoZW4gc3RpY2t5IHBvc2l0aW9uLlxyXG4gICAgICAgIHN1bW1hcnlEb20uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBpbmZvQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mb0Jsb2NrJyk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBzdW1tYXJ5RG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bW1hcnkgLmZyLXNpZGVtZW51LS1zdGlja3knKTtcclxuICAgIGlmIChzdW1tYXJ5RG9tKSB7XHJcbiAgICAgICAgU3VtbWFyeSgpO1xyXG4gICAgfVxyXG4gICAgZ2VuZXJhdGVTY3JvbGwoKTtcclxuICAgIGdldFRhcmdldExpbmtBVCgpO1xyXG4gICAgQ29weSgpO1xyXG4gICAgY29uc3Qgc3RvcFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzcycpO1xyXG4gICAgY29uc3QgYWNjb3JkaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjY29yZGlvbi1jaGVja2JveCcpO1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IFNDUkVFTl9NT0JJTEVfU1dJVENIICYmIHN1bW1hcnlEb20gJiYgc3RvcFRvcCkge1xyXG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZ2V0U3VtbWFyeVN0b3Aoc3VtbWFyeURvbSwgc3RvcFRvcCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmIChpbmZvQmxvY2sgJiYgYWNjb3JkaW9uKSB7XHJcbiAgICAgICAgcmVzaXplV2luZG93KGluZm9CbG9jaywgYWNjb3JkaW9uKTtcclxuICAgICAgICBpbmZvQmxvY0FjdGlvbihpbmZvQmxvY2ssIGFjY29yZGlvbik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gRm9yIGhlaWdodCBiYWNrZ3JvdW5kIGNhbGN1bGF0aW9uXHJcbmZ1bmN0aW9uIGhlaWdodEJsb2NDYWxjdWwoaW5mb0Jsb2NrKSB7XHJcbiAgICBpbmZvQmxvY2sucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmRBZGQnKS5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICAgIGluZm9CbG9jay5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG59XHJcblxyXG4vLyBGb3Igc2VsZWN0aW5nIHJhZGlvIGJ1dHRvblxyXG5mdW5jdGlvbiBpbmZvQmxvY0FjdGlvbihpbmZvQmxvY2ssIGFjY29yZGlvbikge1xyXG4gICAgY29uc3QgcmFkaW9CdXR0b24gPSBpbmZvQmxvY2sucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAnLmZyLWFjY29yZGlvbiBpbnB1dFt0eXBlPVwicmFkaW9cIl0nXHJcbiAgICApO1xyXG4gICAgcmFkaW9CdXR0b24uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGluZm9CbG9jay5xdWVyeVNlbGVjdG9yQWxsKCd1bCcpLmZvckVhY2goKGVsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWx0LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGluZm9CbG9ja1xyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ3VsW2RhdGEtbGlzdD1cIicgKyBpdGVtLmlkICsgJ1wiXScpXHJcbiAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gU0NSRUVOX01PQklMRV9TV0lUQ0gpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5kc2ZyKGFjY29yZGlvbikuY29sbGFwc2UuY29uY2VhbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhlaWdodEJsb2NDYWxjdWwoaW5mb0Jsb2NrKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChpbmZvQmxvY2spIHtcclxuICAgICAgICBoZWlnaHRCbG9jQ2FsY3VsKGluZm9CbG9jayk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gQWRhcHQgaGVpZ2h0IGRpdiBpbiBJbmZvcm1hdGlvbiBibG9jIHRvIGFkZCBiYWNrZ3JvdW5kIC0gVE8gRE86IGRlcGVuZHMgb24gY2FzZSwgbWF5YmUgYmV0dGVyIHN3aXRjaCB0aGlzIGZ1bmN0aW9uIHRvIGFwcCBmb2xkZXJcclxuZnVuY3Rpb24gcmVzaXplV2luZG93KGluZm9CbG9jaywgYWNjb3JkaW9uKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGhlaWdodEJsb2NDYWxjdWwoaW5mb0Jsb2NrKTtcclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gU0NSRUVOX01PQklMRV9TV0lUQ0gpIHtcclxuICAgICAgICAgICAgd2luZG93LmRzZnIoYWNjb3JkaW9uKS5jb2xsYXBzZS5kaXNjbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBMb2FkIEFUICsgVEFDXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0YXJ0ZWF1Y2l0cm9uX2xvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0YXJ0ZWF1Y2l0cm9uLnN0YXRlLmF0aW50ZXJuZXRjbmlsICYmIHR5cGVvZiB0YWcgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgbGV0IGxldmVsSGl0QVQgPSAnNTInO1xyXG4gICAgICAgIGxldCBwYWdlSGl0QVQgPSAnJztcclxuICAgICAgICBsZXQgc3ViVGhlbWF0aWMgPSAnJztcclxuICAgICAgICBsZXQgY2hhcHRlcjFPUEUgPSAnJztcclxuICAgICAgICAvLyBIYXJkY29kZWQgZm9yIEFUIGFuYWx5dGljcyBnZXQgVGhlbWF0aWMgYW5kIFN1Yi10aGVtYXRpY1xyXG4gICAgICAgIGlmIChzbHVnQVQpIHtcclxuICAgICAgICAgICAgaWYgKHNsdWdBVC5pbmRleE9mKCcvZnJhbmNlLXJlbGFuY2UnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlSGl0QVQgPSAnZnJhbmNlX3JlbGFuY2UnO1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxIaXRBVCA9ICc0Nic7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2x1Z0FULmluZGV4T2YoJy90cmFuc2Zvcm1hdGlvbi1udW1lcmlxdWUnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBsZXZlbEhpdEFUID0gJzUxJztcclxuICAgICAgICAgICAgICAgIHBhZ2VIaXRBVCA9ICd0cmFuc2Zvcm1hdGlvbi1udW1lcmlxdWUnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgc2x1Z0FULmluZGV4T2YoXHJcbiAgICAgICAgICAgICAgICAgICAgJy9sdXR0b25zLWNvbnRyZS1sZXMtdmlvbGVuY2VzLWZhaXRlcy1hdXgtZmVtbWVzJ1xyXG4gICAgICAgICAgICAgICAgKSA+IC0xXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcGFnZUhpdEFUID0gJ3NlY3VyaXRlX2V0X2p1c3RpY2UnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNsdWdBVC5pbmRleE9mKCcvbGV0dHJlLWF1eC1ob21tZXMtZGUtZGVtYWluJykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgcGFnZUhpdEFUID0gJ2FmZmFpcmVzX3NvY2lhbGVzJztcclxuICAgICAgICAgICAgICAgIHN1YlRoZW1hdGljID0gJ3Zpb2xlbmNlc19jb25qdWdhbGVzJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzbHVnQVQuaW5kZXhPZignL2luZm8tdWtyYWluZScpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHBhZ2VIaXRBVCA9ICdldXJvcGUnO1xyXG4gICAgICAgICAgICAgICAgc3ViVGhlbWF0aWMgPSAnc2VjdXJpdGUnO1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxIaXRBVCA9ICc1Myc7XHJcbiAgICAgICAgICAgICAgICBjaGFwdGVyMU9QRSA9ICdzcGVjaWFsUGFnZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdGl0bGVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICAgICAgY29uc3QgYnJhbmRMb2dvID0gZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5sb2dvLWNvbnRhaW5lciBzcGFuJylcclxuICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKTtcclxuICAgICAgICBjb25zdCBqc29uQXQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IHRpdGxlUGFnZSA9PT0gYnJhbmRMb2dvID8gJ2FjY3VlaWxfJyArIHRpdGxlUGFnZSA6IHRpdGxlUGFnZSxcclxuICAgICAgICAgICAgY2hhcHRlcjE6XHJcbiAgICAgICAgICAgICAgICBjaGFwdGVyMU9QRSA9PT0gJ3NwZWNpYWxQYWdlJ1xyXG4gICAgICAgICAgICAgICAgICAgID8gJydcclxuICAgICAgICAgICAgICAgICAgICA6IHRpdGxlUGFnZSA9PT0gYnJhbmRMb2dvXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogYnJhbmRMb2dvLFxyXG4gICAgICAgICAgICBsZXZlbDI6IGxldmVsSGl0QVQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBjdXN0b21WYXJzID0ge1xyXG4gICAgICAgICAgICBzaXRlOiB7XHJcbiAgICAgICAgICAgICAgICAxOiAnZnInLFxyXG4gICAgICAgICAgICAgICAgMjogcGFnZUhpdEFULFxyXG4gICAgICAgICAgICAgICAgMTU6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxyXG4gICAgICAgICAgICAgICAgMTc6IHN1YlRoZW1hdGljLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbmV3IEF0VGFncygpLmF0VGFnc0NhbGxQYWdlKEpTT04uc3RyaW5naWZ5KGpzb25BdCksIGN1c3RvbVZhcnMpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8qXHJcblNpbmNlIHRoZSBzdWJtZW51IGlzIGEgbWl4IG9mIHRoZSBNYWluIG5hdmlnYXRpb24gYW5kIG9mIHRoZSBTaWRlbWVudSBjb21wb25lbnRzLCB0aGVyZSdzIHNvbWUgY29uZmxpY3Qgb24gdGhlIGJ1dHRvbnNcclxuaW50ZXJhY3Rpb24uIE1vcmUgcHJlY2lzZWx5LCBjbGlja2luZyBhIGZyLW5hdl9fYnRuIGRvZXMgbm90IG1ha2UgdGhlIHJlbGF0ZWQgYWNjb3JkaW9uIHByb3Blcmx5IGNvbGxhcHNlLiBUaGUgZm9sbG93aW5nXHJcbmpzIGZpeGVkIHRoYXQuXHJcbiAqL1xyXG5mdW5jdGlvbiB0b2dnbGVNZW51QnRuc1N0YXRlKCkge1xyXG4gICAgY29uc3QgYWN0aXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5zdWJtZW51IC5mci1uYXZfX2J0blthcmlhLWV4cGFuZGVkPSd0cnVlJ11cIlxyXG4gICAgKTtcclxuICAgIGlmIChhY3RpdmVCdG4pIHtcclxuICAgICAgICBhY3RpdmVCdG4uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnN1Ym1lbnUgLmZyLW5hdl9fYnRuW2FyaWEtZXhwYW5kZWQ9J2ZhbHNlJ11cIikpIHtcclxuICAgICAgICB0b2dnbGVNZW51QnRuc1N0YXRlKGUudGFyZ2V0KTtcclxuICAgIH1cclxufSk7XHJcbiIsIi8qIGdsb2JhbCB0YWcsIHRhcnRlYXVjaXRyb24gKi9cclxuXHJcbmNsYXNzIEF0VGFncyB7XHJcbiAgICAvLyBGdW5jdGlvbiBjbGVhbiBkYXRhIHRvIHN0cmluZ1xyXG4gICAgcmVnZXhQYWdlKHRleHQsIGVsdCwgY3VzdG9tVmFycykge1xyXG4gICAgICAgIGxldCBjbGlja1R5cGUgPSAnJztcclxuICAgICAgICBpZiAoIWN1c3RvbVZhcnMpIHtcclxuICAgICAgICAgICAgaWYgKGVsdCAmJiBlbHQudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZEZpbGVFeHRlbnNpb25zID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICdwZGYnLFxyXG4gICAgICAgICAgICAgICAgICAgICdvZHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdtcDMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpY3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICd6aXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdkb2N4JyxcclxuICAgICAgICAgICAgICAgICAgICAndHh0JyxcclxuICAgICAgICAgICAgICAgICAgICAnY3NzJyxcclxuICAgICAgICAgICAgICAgICAgICAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NzdicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2dpZicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2pwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2pwZWcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdmcnLFxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIHRoZSBlbnZpcm9ubWVudCBzeXN0ZW0gZG9tYWluIHRvIGhyZWYgdGFnIGRvbWFpbiAoU29jaWFsIE5ldHdvcmspXHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgZWx0Lmhvc3RuYW1lID09PSAnd3d3LmZhY2Vib29rLmNvbScgfHxcclxuICAgICAgICAgICAgICAgICAgICBlbHQuaG9zdG5hbWUgPT09ICd0d2l0dGVyLmNvbScgfHxcclxuICAgICAgICAgICAgICAgICAgICBlbHQuaG9zdG5hbWUgPT09ICd3d3cubGlua2VkaW4uY29tJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVsdC5ob3N0bmFtZSA9PT0gJ3d3dy5pbnN0YWdyYW0uY29tJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVsdC5ocmVmLmluZGV4T2YoJ21haWx0bzonKSA+IC0xXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGlja1R5cGUgPSAnYWN0aW9uJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuRU5WX1VSTCAhPT0gZWx0Lm9yaWdpbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrVHlwZSA9ICdleGl0JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tUeXBlID0gJ25hdmlnYXRpb24nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGxpbmsgaXMgZG93bmxvYWRhYmxlIGZpbGVcclxuICAgICAgICAgICAgICAgIHZhbGlkRmlsZUV4dGVuc2lvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9PT0gZWx0LnBhdGhuYW1lLnNwbGl0KCcuJykucG9wKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWx0LmRhdGFzZXQudHlwZSA9PT0gJ2Rvd25sb2FkJ1xyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja1R5cGUgPSAnZG93bmxvYWQnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xpY2tUeXBlID0gJ2FjdGlvbic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBqc29uQVRFbmQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGVsdCA/IGVsdC5pbm5lclRleHQgOiAnJyxcclxuICAgICAgICAgICAgY2hhcHRlcjE6IGN1c3RvbVZhcnNcclxuICAgICAgICAgICAgICAgID8gJydcclxuICAgICAgICAgICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXRMaW5rLXRhZycpXHJcbiAgICAgICAgICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuZ2V0QXR0cmlidXRlKCdkYXRhLWF0TGluay10YWcnKVxyXG4gICAgICAgICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLmlubmVyVGV4dCxcclxuICAgICAgICAgICAgLi4udGV4dCxcclxuICAgICAgICAgICAgdHlwZTogY2xpY2tUeXBlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChlbHQgJiYgZWx0LmNsb3Nlc3QoJ2RpdltkYXRhLW1vZHVsZT1ib3V0b25dJykpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJldlN0b3AgPSB0aGlzLmdldFByZXZpb3VzU2libGluZyhcclxuICAgICAgICAgICAgICAgIGVsdC5jbG9zZXN0KCdkaXZbZGF0YS1tb2R1bGU9Ym91dG9uXScpLFxyXG4gICAgICAgICAgICAgICAgJ2RpdltkYXRhLW1vZHVsZT10aXRyZV0nXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGpzb25BVEVuZCA9IHtcclxuICAgICAgICAgICAgICAgIC4uLmpzb25BVEVuZCxcclxuICAgICAgICAgICAgICAgIGNoYXB0ZXIzOiBwcmV2U3RvcCA/IHByZXZTdG9wLmlubmVyVGV4dCA6ICcnLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYXJyYXlJdGVyYXRlID0gW2pzb25BVEVuZCwgY3VzdG9tVmFycyA/IGN1c3RvbVZhcnMuc2l0ZSA6ICcnXTtcclxuICAgICAgICBhcnJheUl0ZXJhdGUuZm9yRWFjaChmdW5jdGlvbiAoZSwgaSkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gW3ZhbHVlXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vU3BhY2VRdW90ZXNMb3dlcmNhc2UgPSBlW3ZhbHVlXVxyXG4gICAgICAgICAgICAgICAgICAgIC50cmltKClcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJ3wgfFwiL2csICdfJylcclxuICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vQWNjZW50ID0gbm9TcGFjZVF1b3Rlc0xvd2VyY2FzZVxyXG4gICAgICAgICAgICAgICAgICAgIC5ub3JtYWxpemUoJ05GRCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBhcnJheUl0ZXJhdGVbaV1bbm9BY2NlbnRdO1xyXG4gICAgICAgICAgICAgICAgYXJyYXlJdGVyYXRlW2ldW3ZhbF0gPSBlbmNvZGVVUklDb21wb25lbnQobm9BY2NlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZWx0ICYmIGVsdC5ocmVmKSB7XHJcbiAgICAgICAgICAgIGFycmF5SXRlcmF0ZVswXSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLmFycmF5SXRlcmF0ZVswXSxcclxuICAgICAgICAgICAgICAgIGN1c3RvbU9iamVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNfdXJsX2JydXQ6IGVsdC5ocmVmLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsuLi5hcnJheUl0ZXJhdGVbMF0sIGN1c3RvbVZhcnN9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0YXRpYyBTU1IgbGlua3NcclxuICAgIGF0VGFnc0NhbGxTdGF0aWMoKSB7XHJcbiAgICAgICAgY29uc3QgZm5DbGlja0RhdGEgPSB0aGlzLmF0VGFnc0NhbGxDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IGF0QXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAnYm9keSA+IDpub3QoaGVhZGVyKTpub3QoZm9vdGVyKSBhLCBib2R5ID4gOm5vdChoZWFkZXIpOm5vdChmb290ZXIpIGJ1dHRvbidcclxuICAgICAgICApO1xyXG4gICAgICAgIGF0QXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChlbHQuZ2V0QXR0cmlidXRlKCdkYXRhLWF0TGluay10YWcnKSkge1xyXG4gICAgICAgICAgICAgICAgZWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZuQ2xpY2tEYXRhKGVsdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXRMaW5rLXRhZycpLCBlbHQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZW5kIGNsaWNrXHJcbiAgICBhdFRhZ3NDYWxsQ2xpY2soanNvbkFULCBlbHQpIHtcclxuICAgICAgICBpZiAodGFydGVhdWNpdHJvbi5zdGF0ZS5hdGludGVybmV0Y25pbCAmJiB0eXBlb2YgdGFnICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBlbHQgJiZcclxuICAgICAgICAgICAgICAgIGVsdC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSAmJlxyXG4gICAgICAgICAgICAgICAgZWx0LmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZSdcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFnLmNsaWNrLnNlbmQodGhpcy5yZWdleFBhZ2UoSlNPTi5wYXJzZShqc29uQVQpLCBlbHQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2VuZCBQYWdlXHJcbiAgICBhdFRhZ3NDYWxsUGFnZShqc29uQVQsIGpzb25WaXNpdCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoanNvblZpc2l0LnNpdGVbJzE1J10pO1xyXG4gICAgICAgIGlmICh1cmwuaGFzaC5zdWJzdHJpbmcoMSkuc3BsaXQoJz0nKS5zaGlmdCgpID09PSAneHRvcicpIHtcclxuICAgICAgICAgICAgdXJsLmhhc2ggPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuaGFzKCd4dG9yJykpIHtcclxuICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ3h0b3InKTtcclxuICAgICAgICB9XHJcbiAgICAgICAganNvblZpc2l0LnNpdGVbJzE1J10gPSB1cmwudG9TdHJpbmcoKS5yZXBsYWNlKCcjJywgJyUyMycpO1xyXG4gICAgICAgIHRhZy5wYWdlLnNlbmQodGhpcy5yZWdleFBhZ2UoSlNPTi5wYXJzZShqc29uQVQpLCAnJywganNvblZpc2l0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IHByZXZpb3VzIGRvbVxyXG5cclxuICAgIGdldFByZXZpb3VzU2libGluZyhlbGVtLCBzZWxlY3Rvcikge1xyXG4gICAgICAgIC8vIEdldCB0aGUgbmV4dCBzaWJsaW5nIGVsZW1lbnRcclxuICAgICAgICBsZXQgc2libGluZyA9IGVsZW0ucHJldmlvdXNFbGVtZW50U2libGluZztcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBzZWxlY3RvciwgcmV0dXJuIHRoZSBmaXJzdCBzaWJsaW5nXHJcbiAgICAgICAgaWYgKCFzZWxlY3RvcikgcmV0dXJuIHNpYmxpbmc7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBzaWJsaW5nIG1hdGNoZXMgb3VyIHNlbGVjdG9yLCB1c2UgaXRcclxuICAgICAgICAvLyBJZiBub3QsIGp1bXAgdG8gdGhlIG5leHQgc2libGluZyBhbmQgY29udGludWUgdGhlIGxvb3BcclxuICAgICAgICB3aGlsZSAoc2libGluZykge1xyXG4gICAgICAgICAgICBpZiAoc2libGluZy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHNpYmxpbmc7XHJcbiAgICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdFRhZ3M7XHJcbiIsImV4cG9ydCBjb25zdCBTQ1JFRU5fU1dJVENIID0gOTkyO1xyXG5leHBvcnQgY29uc3QgU0NSRUVOX01PQklMRV9TV0lUQ0ggPSA3Njc7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcHkoKSB7XHJcbiAgICAvLyBDb3B5IFVSTCBidXR0b24gZnVuY3Rpb24gOiBjcmVhdGUsIGZvY3VzLCBzZWxlY3QsIGNvcHkgYW5kIGRlc3Ryb3lcclxuICAgIGNvbnN0IGNvcHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29weS11cmwnKTtcclxuICAgIGlmIChjb3B5KSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICAgICAgaW5wdXQuaWQgPSAnY29weUlucHV0JztcclxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGNvcHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvcHkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvcHlJbnB1dCcpO1xyXG4gICAgICAgICAgICBpbnB1dFZhbHVlLnZhbHVlID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgIGlucHV0VmFsdWUuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgICAgICAgIGNvcHkucmVtb3ZlQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHtTQ1JFRU5fTU9CSUxFX1NXSVRDSH0gZnJvbSAnLi9Db25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VtbWFyeSgpIHtcclxuICAgIGNvbnN0IHRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltkYXRhLW1vZHVsZT10aXRyZV0gaDInKTtcclxuICAgIGlmICh0aXRsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgZ2VuZXJhdGVTdW1tYXJ5KHRpdGxlcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU3VtbWFyeSh0aXRsZXMpIHtcclxuICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudHMtc3VtbWFyeScpO1xyXG4gICAgY29uc3Qgc3VtbWFyeUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mci1zaWRlbWVudV9fbGlzdCcpO1xyXG4gICAgbGV0IGh0bWwgPSAnJztcclxuICAgIHRpdGxlcy5mb3JFYWNoKCh0aXRsZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlSWQgPSB0aXRsZS5nZXRBdHRyaWJ1dGUoJ2lkJykgfHwgZ2VuZXJhdGVJZCh0aXRsZSk7XHJcbiAgICAgICAgaHRtbCArPSBgXHJcbiAgICAgIDxsaSBjbGFzcz1cImZyLXNpZGVtZW51X19pdGVtXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJmci1zaWRlbWVudV9fbGluayBmci10ZXh0LXRpdGxlLS1ibHVlLWZyYW5jZVwiIGhyZWY9XCIjJHt0aXRsZUlkfVwiPiR7dGl0bGUuaW5uZXJUZXh0fTwvYT5cclxuICAgICAgPC9saT5cclxuICAgIGA7XHJcbiAgICB9KTtcclxuICAgIHN1bW1hcnlDb250YWluZXIuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgIHN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBpbml0aWF0ZVN1bW1hcnkoc3VtbWFyeSk7XHJcbiAgICBkaXNwbGF5TW9iaWxlQ29udGVudChzdW1tYXJ5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVJZCh0aXRsZSkge1xyXG4gICAgY29uc3Qgc3VtbWFyeVV1aWQgPSBgZnItc2lkZW1lbnVfX2xpbmstJHt1dWlkdjQoKX1gO1xyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsIHN1bW1hcnlVdWlkKTtcclxuICAgIHJldHVybiBzdW1tYXJ5VXVpZDtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhdGVTdW1tYXJ5KHN1bW1hcnkpIHtcclxuICAgIGNvbnN0IHN1bW1hcnlBbmNob3JzID0gc3VtbWFyeS5xdWVyeVNlbGVjdG9yQWxsKCcuZnItc2lkZW1lbnVfX2xpbmsnKTtcclxuXHJcbiAgICBzdW1tYXJ5QW5jaG9ycy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29sbGFwc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudC1zdW1tYXJ5Jyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5kc2ZyKGNvbGxhcHNlKS5jb2xsYXBzZS5jb25jZWFsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIHJvb3RNYXJnaW46ICcwcHggMHB4IC0xMCUgMHB4JyxcclxuICAgICAgICB0aHJlc2hvbGQ6IDEuMCxcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBlbnRyeS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgICAgICAgIGAuZnItc2lkZW1lbnVfX2xpbmtbaHJlZj1cIiMke2lkfVwiXWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51SXRlbSA9IG1lbnVMaW5rLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNldFN1bW1hcnlBY3RpdmF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXN1bW1hcnknKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZW50cnkuaW50ZXJzZWN0aW9uUmVjdC50b3AgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRTdW1tYXJ5QWN0aXZhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzTWVudUl0ZW0gPSBtZW51SXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c01lbnVJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzTWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXN1bW1hcnknKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyBUcmFjayBhbGwgPGgyPiB0aGF0IGhhdmUgYW4gYGlkYCBhcHBsaWVkXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaDJbaWRdJykuZm9yRWFjaCgodGl0bGUpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aXRsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRTdW1tYXJ5QWN0aXZhdGlvbigpIHtcclxuICAgIGNvbnN0IGFjdGl2ZVN1bW1hcnlJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZS1zdW1tYXJ5Jyk7XHJcbiAgICBpZiAoYWN0aXZlU3VtbWFyeUl0ZW0pIGFjdGl2ZVN1bW1hcnlJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1zdW1tYXJ5Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlNb2JpbGVDb250ZW50KCkge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgU0NSRUVOX01PQklMRV9TV0lUQ0ggKyAxKSB7XHJcbiAgICAgICAgLy8gU3VtbWFyeVxyXG4gICAgICAgIGNvbnN0IHN1bW1hcnlNb2JpbGVXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgJy5jb250ZW50cy1zdW1tYXJ5X19tb2JpbGUtd3JhcHBlcidcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudHMtc3VtbWFyeScpO1xyXG4gICAgICAgIGlmIChzdW1tYXJ5TW9iaWxlV3JhcHBlciAmJiBzdW1tYXJ5KSB7XHJcbiAgICAgICAgICAgIHN1bW1hcnlNb2JpbGVXcmFwcGVyLmFwcGVuZENoaWxkKHN1bW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhREVTQ1JJUFRPUlMsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGRlZmluZVByb3BlcnRpZXM6IGRlZmluZVByb3BlcnRpZXNcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvcnNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iamVjdCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gICAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICAgIHZhciBrZXlzID0gb3duS2V5cyhPKTtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIga2V5LCBkZXNjcmlwdG9yO1xuICAgIHdoaWxlIChrZXlzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIGtleSA9IGtleXNbaW5kZXgrK10pO1xuICAgICAgaWYgKGRlc2NyaXB0b3IgIT09IHVuZGVmaW5lZCkgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJTQ1JFRU5fTU9CSUxFX1NXSVRDSCIsIkNvcHkiLCJBdFRhZ3MiLCJTdW1tYXJ5Iiwic2x1Z0FUIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwiZ2VuZXJhdGVTY3JvbGwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGVpZ2h0RG9jIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsInNjcm9sbFkiLCJ3aWR0aERvYyIsImNsaWVudFdpZHRoIiwiYmFyIiwic3R5bGUiLCJ3aWR0aCIsImdldFRhcmdldExpbmtBVCIsImxldmVsSGl0QVQiLCJ0aXRsZVBhZ2UiLCJicmFuZExvZ28iLCJ0ZXh0Q29udGVudCIsInRyaW0iLCJjaGFwdGVyMSIsImluZGV4T2YiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJlbHQiLCJzZXRBdHRyaWJ1dGUiLCJicmVhZGNydW1iQVQiLCJjaGFwdGVyMiIsImxldmVsMiIsInR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwibGlzdFRhcmdldCIsInVuZGVyTWVudSIsInVuZGVyTWVudUJ0biIsInVuZGVyTWVudUFUIiwibmFtZSIsImNoYXB0ZXIzIiwidW5kZXJNZW51QVRCdG4iLCJhdFRhZ3NDYWxsQ2xpY2siLCJtb2R1bGVOYW1lIiwiY2xvc2VzdCIsIm1vZHVsZUNoaWxkTmFtZSIsImlubmVyVGV4dCIsIm1vZHVsZUNoaWxkdGV4dCIsImpzb25BdCIsInBhcmVudE5vZGUiLCJnZXRTdW1tYXJ5U3RvcCIsInN1bW1hcnlEb20iLCJzdG9wVG9wRG9tIiwic2Nyb2xsQmFyUG9zaXRpb24iLCJwYWdlWU9mZnNldCIsImJvZHkiLCJzY3JvbGxUb3AiLCJkaXZUb3AiLCJvZmZzZXRUb3AiLCJzdG9wVG9wIiwiaW5mb0Jsb2NrIiwiYWNjb3JkaW9uIiwiaW5uZXJXaWR0aCIsIm9uc2Nyb2xsIiwicmVzaXplV2luZG93IiwiaW5mb0Jsb2NBY3Rpb24iLCJoZWlnaHRCbG9jQ2FsY3VsIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwicmFkaW9CdXR0b24iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpZCIsImFkZCIsImRzZnIiLCJjb2xsYXBzZSIsImNvbmNlYWwiLCJkaXNjbG9zZSIsInRhcnRlYXVjaXRyb24iLCJzdGF0ZSIsImF0aW50ZXJuZXRjbmlsIiwidGFnIiwicGFnZUhpdEFUIiwic3ViVGhlbWF0aWMiLCJjaGFwdGVyMU9QRSIsImN1c3RvbVZhcnMiLCJzaXRlIiwibG9jYXRpb24iLCJocmVmIiwiYXRUYWdzQ2FsbFBhZ2UiLCJ0b2dnbGVNZW51QnRuc1N0YXRlIiwiYWN0aXZlQnRuIiwiZSIsInRhcmdldCIsIm1hdGNoZXMiLCJ0ZXh0IiwiY2xpY2tUeXBlIiwidmFsaWRGaWxlRXh0ZW5zaW9ucyIsImhvc3RuYW1lIiwicHJvY2VzcyIsImVudiIsIkVOVl9VUkwiLCJvcmlnaW4iLCJwYXRobmFtZSIsInNwbGl0IiwicG9wIiwiZGF0YXNldCIsImpzb25BVEVuZCIsInByZXZTdG9wIiwiZ2V0UHJldmlvdXNTaWJsaW5nIiwiYXJyYXlJdGVyYXRlIiwiaSIsIk9iamVjdCIsImtleXMiLCJ2YWx1ZSIsInZhbCIsIm5vU3BhY2VRdW90ZXNMb3dlcmNhc2UiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJub0FjY2VudCIsIm5vcm1hbGl6ZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImN1c3RvbU9iamVjdCIsImNsaWNfdXJsX2JydXQiLCJmbkNsaWNrRGF0YSIsImJpbmQiLCJhdEFycmF5IiwianNvbkFUIiwiY2xpY2siLCJzZW5kIiwicmVnZXhQYWdlIiwicGFyc2UiLCJqc29uVmlzaXQiLCJ1cmwiLCJVUkwiLCJoYXNoIiwic3Vic3RyaW5nIiwic2hpZnQiLCJzZWFyY2hQYXJhbXMiLCJoYXMiLCJ0b1N0cmluZyIsInBhZ2UiLCJlbGVtIiwic2VsZWN0b3IiLCJzaWJsaW5nIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIlNDUkVFTl9TV0lUQ0giLCJjb3B5IiwiaW5wdXQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJpbnB1dFZhbHVlIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVDaGlsZCIsInY0IiwidXVpZHY0IiwidGl0bGVzIiwibGVuZ3RoIiwiZ2VuZXJhdGVTdW1tYXJ5Iiwic3VtbWFyeSIsInN1bW1hcnlDb250YWluZXIiLCJodG1sIiwidGl0bGUiLCJ0aXRsZUlkIiwiZ2VuZXJhdGVJZCIsImlubmVySFRNTCIsImRpc3BsYXkiLCJpbml0aWF0ZVN1bW1hcnkiLCJkaXNwbGF5TW9iaWxlQ29udGVudCIsInN1bW1hcnlVdWlkIiwic3VtbWFyeUFuY2hvcnMiLCJsaW5rIiwiZ2V0RWxlbWVudEJ5SWQiLCJvcHRpb25zIiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJtZW51TGluayIsIm1lbnVJdGVtIiwicGFyZW50RWxlbWVudCIsImlzSW50ZXJzZWN0aW5nIiwicmVzZXRTdW1tYXJ5QWN0aXZhdGlvbiIsImludGVyc2VjdGlvblJlY3QiLCJ0b3AiLCJwcmV2aW91c01lbnVJdGVtIiwib2JzZXJ2ZSIsImFjdGl2ZVN1bW1hcnlJdGVtIiwic3VtbWFyeU1vYmlsZVdyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9