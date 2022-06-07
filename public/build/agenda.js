(self["webpackChunk"] = self["webpackChunk"] || []).push([["agenda"],{

/***/ "./node_modules/@stencil/core/internal/client lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/@stencil/core/internal/client lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ "./assets/agenda/constants.js":
/*!************************************!*\
  !*** ./assets/agenda/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AGENDA_URL": () => (/* binding */ AGENDA_URL),
/* harmony export */   "AGENDA_CURRENT_URL": () => (/* binding */ AGENDA_CURRENT_URL),
/* harmony export */   "AGENDA_PAGER": () => (/* binding */ AGENDA_PAGER),
/* harmony export */   "API_AGENDA_URL": () => (/* binding */ API_AGENDA_URL),
/* harmony export */   "API_AGENDA_CURRENT_URL": () => (/* binding */ API_AGENDA_CURRENT_URL),
/* harmony export */   "EVENTS_URL": () => (/* binding */ EVENTS_URL),
/* harmony export */   "MEDIA_URL": () => (/* binding */ MEDIA_URL),
/* harmony export */   "CSV_URL": () => (/* binding */ CSV_URL)
/* harmony export */ });
var AGENDA_URL = '/agenda';
var AGENDA_CURRENT_URL = '/current';
var AGENDA_PAGER = '?pagination=false';
var API_AGENDA_URL = "/api" + AGENDA_URL;
var API_AGENDA_CURRENT_URL = "/api" + AGENDA_URL + AGENDA_CURRENT_URL;
var EVENTS_URL = "/api" + '/event_types';
var MEDIA_URL = "http://bo-pmv7.docker";
var CSV_URL = AGENDA_URL + '/csv';

/***/ }),

/***/ "./assets/agenda/index-agenda.js":
/*!***************************************!*\
  !*** ./assets/agenda/index-agenda.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./css/main.scss */ "./assets/agenda/css/main.scss");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./constants */ "./assets/agenda/constants.js");
/* harmony import */ var _app_js_Constants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../app/js/Constants */ "./assets/app/js/Constants.js");
/* harmony import */ var _app_js_Api__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../app/js/Api */ "./assets/app/js/Api.js");
/* harmony import */ var _app_js_Paging__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../app/js/Paging */ "./assets/app/js/Paging.js");
/* harmony import */ var _app_js_Copy__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../app/js/Copy */ "./assets/app/js/Copy.js");
/* harmony import */ var _app_js_GroupButtons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../app/js/GroupButtons */ "./assets/app/js/GroupButtons.js");
/* harmony import */ var _js_List__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./js/List */ "./assets/agenda/js/List.js");
/* harmony import */ var _js_Map__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./js/Map */ "./assets/agenda/js/Map.js");
/* harmony import */ var _js_Date__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./js/Date */ "./assets/agenda/js/Date.js");
/* harmony import */ var _js_Send__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./js/Send */ "./assets/agenda/js/Send.js");
/* harmony import */ var _js_Weekly__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./js/Weekly */ "./assets/agenda/js/Weekly.js");
/* harmony import */ var _js_Datepicker__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./js/Datepicker */ "./assets/agenda/js/Datepicker.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var moment_locale_fr__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! moment/locale/fr */ "./node_modules/moment/locale/fr.js");
/* harmony import */ var moment_locale_fr__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(moment_locale_fr__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _app_js_AtTags__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../app/js/AtTags */ "./assets/app/js/AtTags.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






















/* global tag, tarteaucitron */
















var levelAT = '4';
var atSite2 = 'agenda_' + document.querySelector('h1 span').innerText;

function dataList(dataURL, scrollPage, prevWeek, nextWeek) {
  new _app_js_Api__WEBPACK_IMPORTED_MODULE_23__["default"]().get(dataURL).then(function (dataContent) {
    // Not scroll / empty content for first loading page
    if (scrollPage) {
      document.querySelector('.col-content:nth-child(2)').scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      prevWeek = dataContent['hydra:member'].length ? (0,_js_Date__WEBPACK_IMPORTED_MODULE_29__["default"])(dataContent['hydra:member'][0].date) : undefined;
      nextWeek = document.querySelector('#week').dataset.end;
      (0,_js_Datepicker__WEBPACK_IMPORTED_MODULE_32__["default"])();
      ATClick();
    } // Delete DOM function


    var getDomArray = ['.tile-group', '.pager .fr-pagination .event-pager', '.pager .fr-pagination .weekly-pager'];
    destroyDom(getDomArray); // Build List if API return result

    if (dataContent['hydra:totalItems'] > 0) {
      dataContent['hydra:member'].forEach(function (item) {
        document.querySelector('.tile-group').insertAdjacentHTML('beforeend', (0,_js_List__WEBPACK_IMPORTED_MODULE_27__["default"])(item));
      }); // Generate PDF file link (check if it's in the API)

      if (dataContent['hydra:member'][0].weekly.pdfUrl && !scrollPage) {
        var pdfDiv = document.querySelector('.pdf');
        pdfDiv.querySelector('a+span').innerText = 'PDF - ' + formatBytes(dataContent['hydra:member'][0].weekly.pdfSize);
        pdfDiv.querySelector('a').href = _constants__WEBPACK_IMPORTED_MODULE_21__.MEDIA_URL + dataContent['hydra:member'][0].weekly.pdfUrl;
        pdfDiv.classList.add('visible');
      } // Check week after and before to display link (only for 'This week')


      if (document.querySelector('#accordion-predefinie input#week').checked && document.querySelectorAll('.events-tags .fr-tag.active').length === 0) {
        (0,_js_Weekly__WEBPACK_IMPORTED_MODULE_31__["default"])(dataList, prevWeek, nextWeek, '.weekly-pager');
      } else if (dataContent['hydra:view'] && dataContent['hydra:view']['hydra:last']) {
        // Pager
        (0,_app_js_Paging__WEBPACK_IMPORTED_MODULE_24__["default"])(dataList, dataContent, 'sm', 'Page', '.event-pager');
      }

      atListReload();
      dataMap(dataURL);
    } else {
      // No result
      destroyDom(['.map']);
      document.querySelector('.map').insertAdjacentHTML('beforeend', "<p class='fr-p-2w fr-mt-10w fr-mt-md-4w'>Votre recherche n'est associée à aucun résultat, merci d'essayer d'autres critères de recherche.</p>");
    }

    window.addEventListener('resize', mobileScrollToTop);

    if (window.innerWidth <= _app_js_Constants__WEBPACK_IMPORTED_MODULE_22__.SCREEN_SWITCH) {
      mobileScrollToTop();
    } // Generate CSV file link


    var csvDiv = document.querySelector('.csv');
    csvDiv.querySelector('a').href = _constants__WEBPACK_IMPORTED_MODULE_21__.CSV_URL;
    csvDiv.querySelector('a+span').innerText = 'CSV';
  });
}

function destroyDom(arrayDestroy) {
  arrayDestroy.forEach(function (item) {
    if (document.querySelector(item).querySelectorAll('*').length > 0) {
      document.querySelector(item).innerHTML = '';
    }
  });
}

function dataListEvent(dataURL) {
  new _app_js_Api__WEBPACK_IMPORTED_MODULE_23__["default"]().get(dataURL).then(function (dataContent) {
    document.querySelector('#accordion-evenements').appendChild((0,_app_js_GroupButtons__WEBPACK_IMPORTED_MODULE_26__["default"])(dataContent['hydra:member'], 'events-tags', levelAT, 'evenement', atSite2));
  });
} // Return PDF size


function formatBytes(bytes) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  if (bytes === 0) return '0 Octet';
  var k = 1024;
  var dm = decimals < 0 ? 0 : decimals;
  var sizes = ['Octets', 'Ko', 'Mo', 'Go', 'To', 'Po', 'Eo', 'Zo', 'Yo'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function mobileScrollToTop() {
  if (window.innerWidth <= _app_js_Constants__WEBPACK_IMPORTED_MODULE_22__.SCREEN_SWITCH) {
    // Only small devices
    // If scroll up 350px => display scroll to top button
    window.addEventListener('scroll', function () {
      if (document.documentElement.scrollTop > 350) {
        document.querySelector('.pinMapButton').classList.add('visible');
      } else {
        document.querySelector('.pinMapButton').classList.remove('visible');
      }
    }, {
      passive: true
    }); // Click on place => scroll to top

    var clickMapToTop = document.querySelectorAll('.scrollToMap');
    clickMapToTop.forEach(function (item) {
      item.addEventListener('click', function () {
        document.querySelector('.col-content:nth-child(2)').scrollIntoView({
          behavior: 'smooth'
        });
      });
    }); // Observer interact for filter on sticky top detection, sticky CSS position is not enougth

    if ('IntersectionObserver' in window && window.innerWidth <= _app_js_Constants__WEBPACK_IMPORTED_MODULE_22__.SCREEN_SWITCH) {
      var el = document.querySelector('.agenda section .col-content:first-child');
      var observer = new IntersectionObserver(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            e = _ref2[0];

        return e.target.classList.toggle('is-pinned', e.intersectionRatio < 1);
      }, {
        threshold: [1]
      });
      observer.observe(el);
    } // Click filter handle


    var colorTitle = document.querySelectorAll('.colorTitle');
    var closeDiv = document.createElement('span');
    closeDiv.classList.add('fr-text--sm', 'fr-mb-0', 'closeFilter');
    closeDiv.innerHTML = 'Fermer <span class="fr-fi-close-line fr-fi--sm" aria-hidden="true"></span>';
    colorTitle.forEach(function (item) {
      item.addEventListener('click', function (e) {
        var _this = this;

        e.stopImmediatePropagation();

        if (document.documentElement.scrollTop < document.querySelector('header').offsetHeight + document.querySelector('section:first-child').offsetHeight) {
          document.querySelector('.fr-fi-calendar-line').scrollIntoView({
            behavior: 'smooth'
          });
        }

        document.querySelector('section:last-child .col-content:first-child').classList.toggle('filterOpen');
        document.querySelector('html').classList.toggle('blockScroll');

        if (document.querySelector('.filterOpen')) {
          item.appendChild(closeDiv);

          if (item.querySelector('.text').innerText === 'Filtres') {
            item.querySelector('.text').innerText = 'Modifier les filtres';
          }

          document.querySelector('.fr-accordions-group').classList.add('displayFilter');
        } else {
          item.removeChild(closeDiv);

          if (item.querySelector('.text').innerText === 'Modifier les filtres') {
            item.querySelector('.text').innerText = 'Filtres';
          }

          document.querySelector('.fr-accordions-group').classList.remove('displayFilter');
        }

        colorTitle.forEach(function (item) {
          if (_this !== item) {
            item.classList.toggle('displayFilter');
          }
        });
      });
    });
  }
}

function validateButton() {
  // Validate filter button
  document.querySelector('html').classList.remove('blockScroll');
  document.querySelector('.btn-filter-submit button').addEventListener('click', function () {
    if (window.innerWidth <= _app_js_Constants__WEBPACK_IMPORTED_MODULE_22__.SCREEN_SWITCH) {
      if (document.querySelector('.closeFilter')) {
        document.querySelector('.closeFilter').parentElement.click();
      }
    } // Check define input date


    var dateInput = document.querySelectorAll('#accordion-predefinie input');
    var dateRange = '';
    var startDateValid = '';
    var endDateValid = '';
    var inputWeek = document.querySelector('input#week');
    var inputMonth = document.querySelector('input#month');
    var inputLast3Months = document.querySelector('input#last3Months');
    var pickDateStart = document.querySelector('.start');
    var pickDateEnd = document.querySelector('.end');

    if (!inputWeek.checked && !inputMonth.checked && !inputLast3Months.checked && pickDateStart.value === '' && pickDateEnd.value === '') {
      inputWeek.click();
    }

    dateInput.forEach(function (item) {
      if (item.checked) {
        dateRange = moment__WEBPACK_IMPORTED_MODULE_33___default()(item.dataset.start).format('D MMM') + ' - ' + moment__WEBPACK_IMPORTED_MODULE_33___default()(item.dataset.end).format('D MMM');
        startDateValid = moment__WEBPACK_IMPORTED_MODULE_33___default()(item.dataset.start).subtract(1, 'days').format('YYYY-MM-DD');
        endDateValid = item.dataset.end;
      }
    }); // Check datepicker input date

    if (pickDateStart.value !== '' && pickDateEnd.value === '') {
      dateRange = 'À partir du ' + moment__WEBPACK_IMPORTED_MODULE_33___default()(pickDateStart.value).format('D MMM');
    }

    if (pickDateEnd.value !== '' && pickDateStart.value === '') {
      dateRange = "Jusqu'au " + moment__WEBPACK_IMPORTED_MODULE_33___default()(pickDateEnd.value).format('D MMM');
    }

    if (pickDateEnd.value !== '' && pickDateStart.value !== '') {
      dateRange = moment__WEBPACK_IMPORTED_MODULE_33___default()(pickDateStart.value).format('D MMM') + ' - ' + moment__WEBPACK_IMPORTED_MODULE_33___default()(pickDateEnd.value).format('D MMM');
    }

    document.querySelector('.colorTitle:first-child .text').innerText = dateRange;
    (0,_js_Send__WEBPACK_IMPORTED_MODULE_30__["default"])(dataList, true, startDateValid, endDateValid);
  });
}

function ATClick() {
  document.querySelectorAll('.agenda a:not(.leaflet-control-zoom-in):not(.leaflet-control-zoom-out)', '.agenda button:not(.collapseFilter):not(.fr-tag.fr-thematic)', '.agenda .fr-radio-group label').forEach(function (item) {
    item.addEventListener('click', function () {
      if (item.classList.contains('active') || !item.parentElement.classList.contains('fr-accordion__title') && !item.closest('duet-date-picker')) {
        var moduleName = item.closest('[data-module]') ? item.closest('[data-module]').getAttribute('data-module') : false;
        var moduleChildName = item.closest('[data-child-module]') ? item.closest('[data-child-module]').getAttribute('data-child-module') : '';
        var name = this.getAttribute('data-text') ? this.getAttribute('data-text') : this.innerText;

        if (moduleName === 'filtre') {
          name = 'recherche_' + name;
        }

        var type = '';

        if (moduleName === 'bouton') {
          type = 'download';
        }

        if (moduleName === 'partage' || moduleName === 'haut_de_page') {
          type = 'action';
        }

        if (moduleName === 'pagination') {
          type = 'navigation';
        } // AT Tag Call


        var jsonAt = {
          name: name,
          chapter1: atSite2,
          chapter2: moduleName,
          chapter3: moduleChildName,
          level2: levelAT,
          type: type
        };
        new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_35__["default"]().atTagsCallClick(JSON.stringify(jsonAt), this);
      }
    });
  });
}

function atListReload() {
  var name;
  var chapter3;
  document.querySelectorAll('.col-content .tile-group button, .col-content .pager button, .col-content .fr-link--cart').forEach(function (item) {
    item.addEventListener('click', function () {
      var moduleName = item.closest('[data-module]').getAttribute('data-module');

      if (moduleName === 'pagination') {
        name = this.innerText ? this.innerText : this.parentNode.querySelector('.text').innerText;
      } else {
        name = this.innerText;
        chapter3 = this.parentNode.querySelector('.fr-tile__detail .date').innerText.split('/').reverse().join('-') + '_' + this.parentNode.querySelector('.fr-tile__detail .time').innerText;
      } // AT Tag Call


      var jsonAt = {
        name: name,
        chapter1: atSite2,
        chapter2: moduleName,
        chapter3: chapter3,
        level2: levelAT,
        type: 'action'
      };
      new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_35__["default"]().atTagsCallClick(JSON.stringify(jsonAt), this);
    });
  });
} // Generate MAP


function dataMap(dataURL) {
  var a = document.createElement('a');
  a.href = dataURL;

  if (!document.querySelector('#week').checked || document.querySelector('#week').checked && document.querySelectorAll('.events-tags .fr-tag.active').length > 0) {
    var param = a.search ? '&' + a.search.substring(1) : '';
    dataURL = a.pathname + _constants__WEBPACK_IMPORTED_MODULE_21__.AGENDA_PAGER + param;
  }

  new _app_js_Api__WEBPACK_IMPORTED_MODULE_23__["default"]().get(dataURL).then(function (dataContent) {
    destroyDom(['.map']);

    if (dataContent['hydra:totalItems'] > 0) {
      (0,_js_Map__WEBPACK_IMPORTED_MODULE_28__["default"])(dataContent['hydra:member'], levelAT, atSite2);
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  dataListEvent(_constants__WEBPACK_IMPORTED_MODULE_21__.EVENTS_URL);
  dataList(_constants__WEBPACK_IMPORTED_MODULE_21__.API_AGENDA_CURRENT_URL, false);
  validateButton();
  (0,_app_js_Copy__WEBPACK_IMPORTED_MODULE_25__["default"])();
}); // Load AT + TAC

window.addEventListener('tarteaucitron_loaded', function () {
  if (tarteaucitron.state.atinternetcnil && typeof tag !== 'undefined') {
    var jsonAt = {
      name: atSite2,
      level2: levelAT,
      chapter1: 'composition_du_gouvernement',
      chapter2: 'premier_ministre'
    };
    var customVars = {
      site: {
        1: 'fr',
        2: 'agenda',
        15: window.location.href
      }
    };
    new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_35__["default"]().atTagsCallPage(JSON.stringify(jsonAt), customVars);
  }
});

/***/ }),

/***/ "./assets/agenda/js/Date.js":
/*!**********************************!*\
  !*** ./assets/agenda/js/Date.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Date)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_locale_fr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment/locale/fr */ "./node_modules/moment/locale/fr.js");
/* harmony import */ var moment_locale_fr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_locale_fr__WEBPACK_IMPORTED_MODULE_3__);




function Date(startDateInit) {
  var week = document.querySelector('#accordion-predefinie input#week');
  var startDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(startDateInit).startOf('isoweek').format('YYYY-MM-DD');
  var endDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(startDateInit).endOf('isoweek').format('YYYY-MM-DD');
  week.setAttribute('data-start', startDate);
  week.setAttribute('data-end', endDate);
  var month = document.querySelector('#accordion-predefinie input#month');
  month.setAttribute('data-start', moment__WEBPACK_IMPORTED_MODULE_2___default()().startOf('month').format('YYYY-MM-DD'));
  month.setAttribute('data-end', moment__WEBPACK_IMPORTED_MODULE_2___default()().endOf('month').format('YYYY-MM-DD'));
  var last3Months = document.querySelector('#accordion-predefinie input#last3Months');
  last3Months.setAttribute('data-start', moment__WEBPACK_IMPORTED_MODULE_2___default()().startOf('month').subtract(2, 'month').format('YYYY-MM-DD'));
  last3Months.setAttribute('data-end', moment__WEBPACK_IMPORTED_MODULE_2___default()().endOf('month').format('YYYY-MM-DD'));
  var dateLabel = document.querySelectorAll('#accordion-predefinie label');
  dateLabel.forEach(function (item) {
    item.addEventListener('click', function () {
      emptyDateFields();
    });
  });
  document.querySelector('.emptyDatePicker').addEventListener('click', function () {
    document.querySelector('#accordion-predefinie input#week').click();
    emptyDateFields();
  });
  document.querySelector('.colorTitle:first-child .text').innerText = moment__WEBPACK_IMPORTED_MODULE_2___default()(startDate).format('D MMM') + ' - ' + moment__WEBPACK_IMPORTED_MODULE_2___default()(endDate).format('D MMM');
  return moment__WEBPACK_IMPORTED_MODULE_2___default()(startDate).subtract(1, 'days').format('YYYY-MM-DD');
}

function emptyDateFields() {
  var startDateEmpty = document.querySelector('.start');
  var endDateEmpty = document.querySelector('.end'); // reinit calendar for UX

  startDateEmpty.value = '';
  endDateEmpty.value = '';
  startDateEmpty.max = '';
  endDateEmpty.min = '';
  document.querySelector('.emptyDatePicker').setAttribute('disabled', '');
}

/***/ }),

/***/ "./assets/agenda/js/Datepicker.js":
/*!****************************************!*\
  !*** ./assets/agenda/js/Datepicker.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Datepicker)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _duetds_date_picker_custom_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @duetds/date-picker/custom-element */ "./node_modules/@duetds/date-picker/custom-element/index.js");
/* harmony import */ var _app_js_AtTags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app/js/AtTags */ "./assets/app/js/AtTags.js");











function Datepicker() {
  customElements.define('duet-date-picker', _duetds_date_picker_custom_element__WEBPACK_IMPORTED_MODULE_9__.DuetDatePicker);
  var startPicker = document.querySelector('.start');
  var endPicker = document.querySelector('.end');
  var firstDateAvailable = '2021-02-01';
  var lastDateAvailable = document.querySelector('#week').getAttribute('data-end'); // When the start date picker is changed...

  startPicker.addEventListener('duetChange', function (e) {
    endPicker.min = e.detail.value;
    uncheckDefineDate(this, e.detail.value);
  }); // When the end date date picker is changed...

  endPicker.addEventListener('duetChange', function (e) {
    startPicker.max = e.detail.value;
    uncheckDefineDate(this, e.detail.value);
  });
  localizationDate(startPicker, 'début');
  localizationDate(endPicker, 'fin');
  var toggleDate = document.querySelector('button[aria-controls=accordion-personnalisee]');
  toggleDate.addEventListener('click', function () {
    if (document.querySelector('button[aria-controls=accordion-personnalisee][aria-expanded=false]')) {
      document.querySelector('#accordion-personnalisee').classList.remove('overflowVisible');
    }
  });

  function localizationDate(domElt, wording) {
    domElt.localization = {
      buttonLabel: 'Choisir la date de ' + wording,
      placeholder: 'Choisir une date',
      selectedDateMessage: 'La date choisie est : ',
      prevMonthLabel: 'Mois précédent',
      nextMonthLabel: 'Mois suivant',
      monthSelectLabel: 'Mois',
      yearSelectLabel: 'Année',
      closeLabel: 'Fermer la fenêtre',
      calendarHeading: 'Choisir la date de ' + wording,
      dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
      monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],

      get monthNamesShort() {
        return this.monthNames;
      },

      locale: 'fr-FR'
    };
    domElt.min = firstDateAvailable;
    domElt.max = lastDateAvailable;
    domElt.addEventListener('duetOpen', function () {
      document.querySelector('#accordion-personnalisee').classList.add('overflowVisible');
    });
    domElt.addEventListener('duetClose', function () {
      var focusButton = setInterval(function () {
        if (domElt.datePickerButton === document.activeElement) {
          domElt.setFocus();
          clearInterval(focusButton);
        }
      }, 1);
    });
    var dateFormat = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    domElt.dateAdapter = {
      parse: function parse() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var createDate = arguments.length > 1 ? arguments[1] : undefined;
        var matches = value.match(dateFormat);

        if (matches) {
          return createDate(matches[3], matches[2], matches[1]);
        }
      },
      format: function format(date) {
        var d = date.getDate().toString(10);
        var m = (date.getMonth() + 1).toString(10);
        var y = date.getFullYear().toString(10); // days are not zero-indexed, so pad if less than 10

        if (date.getDate() < 10) {
          d = "0".concat(d);
        } // months *are* zero-indexed, pad if less than 9!


        if (date.getMonth() < 9) {
          m = "0".concat(m);
        }

        return "".concat(d, "/").concat(m, "/").concat(y);
      }
    };
  }
}

function uncheckDefineDate(elt, value) {
  var startOrEnd = 'debut';

  if (elt.classList.contains('end')) {
    startOrEnd = 'fin';
  }

  var dateInput = document.querySelectorAll('#accordion-predefinie input');
  dateInput.forEach(function (item) {
    item.checked = false;
  });
  document.querySelector('.emptyDatePicker').removeAttribute('disabled'); // AT

  var jsonAt = '{"name":"recherche_' + startOrEnd + '_' + value + '","chapter1":"agenda_' + document.querySelector('h1 span').innerText + '","chapter2": "filtre","chapter3": "date","level2":"4"}';
  new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_10__["default"]().atTagsCallClick(jsonAt, this);
}

/***/ }),

/***/ "./assets/agenda/js/List.js":
/*!**********************************!*\
  !*** ./assets/agenda/js/List.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_common_map_pin_2_line_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/common/map-pin-2-line.svg */ "./assets/images/common/map-pin-2-line.svg");






function List(result) {
  // Event date
  var eventDate = new Intl.DateTimeFormat('fr-FR').format(new Date(result.date)); // Event period

  function timeEvent() {
    var eventTime = '';

    if (result.period !== null) {
      if (result.period === 'morning') {
        eventTime = 'Matin';
      } else if (result.period === 'afternoon') {
        eventTime = 'Après-midi';
      } else if (result.period === 'evening') {
        eventTime = 'En soirée';
      } else {
        eventTime = 'En journée';
      }
    } else if (result.datetime !== null) {
      eventTime = new Date(result.datetime).toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit'
      });
    }

    return eventTime;
  } // Button Geoloc


  function geolocButton() {
    var isGeoloc = '';

    if (result.latitude && result.longitude) {
      isGeoloc = '<button class="fr-link fr-text--xs fr-p-0 fr-pb-1v scrollToMap" data-click-lat="' + result.latitude + '" data-click-lng="' + result.longitude + '" data-click-api="' + result['@id'] + '"><span><img src="' + _images_common_map_pin_2_line_svg__WEBPACK_IMPORTED_MODULE_5__ + '" alt="" class="fr-mr-1v">' + result.location + '</span></button>';
    }

    return isGeoloc;
  } // Text event


  function textEvent() {
    var isTextEvent = result.linkTitle ? result.linkTitle : false;
    var isLinkEvent = result.linkUrl ? encodeURI(result.linkUrl) : false;
    var isBlock = '';

    if (isTextEvent && isLinkEvent) {
      isBlock = '<a class="fr-text--xs fr-link--cart fr-mt-2w fr-mb-0 fr-p-3v fr-text--bold" href="' + isLinkEvent + '" tabindex="0" target="_blank">' + isTextEvent + ' <span class="fr-fi-arrow-right-line fr-fi--sm" aria-hidden="true"></span></a>';
    }

    return isBlock;
  }

  return "\n    <div class=\"tile fr-grid-row fr-grid-row--gutters\">\n        <div class=\"fr-col-12 fr-mb-2v\">\n            <div class=\"fr-tile fr-tile--horizontal\">\n                <div class=\"fr-tile__body fr-m-3w\">\n                    <p class=\"fr-tile__detail fr-text--xs fr-mb-0 fr-text--alt fr-mb-1v\">\n                        <span class=\"date\">".concat(eventDate, "</span>\n                        <span class=\"time\">").concat(timeEvent(), "</span>\n                    </p>\n                    <h4 class=\"fr-tile__title fr-mb-1v\">\n                        <span class=\"fr-tile__link fr-text--sm fr-m-0\">").concat(result.eventType.name, "</span>\n                    </h4>\n                    <p class=\"fr-tile__desc fr-text--xs fr-mt-0 fr-mb-1v\">").concat(result.description, "</p>\n                    ").concat(geolocButton(), "\n                    ").concat(textEvent(), "\n                </div>\n            </div>  \n        </div>\n    </div>\n        ");
}

/***/ }),

/***/ "./assets/agenda/js/Map.js":
/*!*********************************!*\
  !*** ./assets/agenda/js/Map.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Map)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_js_Map_Osm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/js/Map/Osm */ "./assets/app/js/Map/Osm.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./List */ "./assets/agenda/js/List.js");
/* harmony import */ var _app_js_Slideshow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/js/Slideshow */ "./assets/app/js/Slideshow.js");
/* harmony import */ var _app_js_Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/js/Constants */ "./assets/app/js/Constants.js");








function Map(result, atLevel, atSite2) {
  var domParent = '#infoMapTile';
  var domElt = domParent + ' .slider';
  var mapDom = document.createElement('div');
  mapDom.setAttribute('id', 'map');
  document.querySelector('.map').appendChild(mapDom);
  var infoMapTile = document.createElement('div');
  infoMapTile.setAttribute('id', 'infoMapTile');
  infoMapTile.setAttribute('data-module', 'map-cards');
  document.querySelector('.map').appendChild(infoMapTile);
  var mapAgenda = new _app_js_Map_Osm__WEBPACK_IMPORTED_MODULE_4__["default"](document.querySelector('#map')).renderWithPin(result, 'map', {
    cluster: true,
    zoomControl: true,
    doubleClickZoom: true,
    dragging: true,
    scrollWheelZoom: true,
    customPopin: domElt,
    nodeParent: domParent,
    popinFunction: _List__WEBPACK_IMPORTED_MODULE_5__["default"],
    countPin: true,
    maxClusterRadius: 10
  }, '', atLevel, atSite2).addEventListener('click', function () {
    interactive(domParent);
  }).addEventListener('dragend', function () {
    interactive(domParent);
  });
  document.querySelectorAll('.leaflet-control-zoom a').forEach(function (item) {
    item.addEventListener('click', function () {
      document.querySelectorAll('.groupMarker').forEach(function (item) {
        item.classList.remove('focusOn');
      });
    });
  });
  var arrayGeoClick = document.querySelectorAll('.list .tiles .tile-group button:not(.pinMapButton)');
  arrayGeoClick.forEach(function (item) {
    item.addEventListener('click', function () {
      L.Map.prototype.setViewOffset = function (lat, lng, offset) {
        var targetPoint = this.project([lat, lng], 13).subtract(offset);
        var targetLatLng = this.unproject(targetPoint, 13);
        return this.setView(targetLatLng, 13);
      };

      mapAgenda.setViewOffset(this.getAttribute('data-click-lat'), this.getAttribute('data-click-lng'), [0, -100], 13);
      (0,_app_js_Slideshow__WEBPACK_IMPORTED_MODULE_6__["default"])(_List__WEBPACK_IMPORTED_MODULE_5__["default"], result, domElt, domParent, parseFloat(this.getAttribute('data-click-lat')), parseFloat(this.getAttribute('data-click-lng')), this.getAttribute('data-click-api'), true);
    });
  });

  if (window.innerWidth >= _app_js_Constants__WEBPACK_IMPORTED_MODULE_7__.SCREEN_SWITCH) {
    // To align from the start of top contents column
    var alignTopColumn = 60;
    var heightHeaderMenu = document.querySelector('section:first-child').offsetHeight + document.querySelector('header').offsetHeight;
    var heightPinned = window.innerHeight - heightHeaderMenu - alignTopColumn;
    document.querySelector('.map').style.height = heightPinned + 'px';
    adaptMap(heightPinned, mapAgenda, heightHeaderMenu);
    window.addEventListener('scroll', function () {
      adaptMap(heightPinned, mapAgenda, heightHeaderMenu);
    });
  } // Click filter


  document.querySelector('.collapseFilter').addEventListener('click', function (e) {
    e.stopImmediatePropagation();
    var domElt = document.querySelector('section:nth-child(2)');
    var filterCheck = domElt.classList.toggle('filterHidden');

    if (filterCheck) {
      domElt.classList.add('filterHidden');
      domElt.classList.remove('filterVisible');
      setTimeout(function () {
        mapAgenda.invalidateSize();
      }, 400);
    } else {
      domElt.classList.remove('filterHidden');
      domElt.classList.add('filterVisible');
    }
  });
}

function interactive(domParent) {
  document.querySelector(domParent).innerHTML = '';
  document.querySelectorAll('.groupMarker').forEach(function (item) {
    item.classList.remove('focusOn');
  });
}

function adaptMap(heightPinned, mapAgenda, heightHeaderMenu) {
  // To avoid end of map outside of the screen height when scroll + padding to have space between footer.
  var heightMapLimit = '94vh';

  if (document.documentElement.scrollTop < heightHeaderMenu) {
    document.querySelector('.map').style.height = heightPinned + document.documentElement.scrollTop + 'px';
  } else {
    document.querySelector('.map').style.height = heightMapLimit;
  }

  setTimeout(function () {
    mapAgenda.invalidateSize();
  }, 200);
}

/***/ }),

/***/ "./assets/agenda/js/Send.js":
/*!**********************************!*\
  !*** ./assets/agenda/js/Send.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Send)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./assets/agenda/constants.js");







function Send(callBack, scroll, startDate, endDate) {
  var param = '';
  var apiAgendaCall = _constants__WEBPACK_IMPORTED_MODULE_6__.API_AGENDA_URL;
  var pickDateStart = document.querySelector('.start');
  var pickDateEnd = document.querySelector('.end');
  var event = document.querySelectorAll('.events-tags .fr-tag.active');
  var weekDom = document.querySelector('input#week'); // Check datepicker input date

  if (pickDateStart.value !== '') {
    param = concatWeek(pickDateStart.value, null, param);
  }

  if (pickDateEnd.value !== '') {
    param = concatWeek(null, pickDateEnd.value, param);
  }

  if (pickDateStart.value === '' && pickDateEnd.value === '') {
    // Check define input date
    var dateInput = document.querySelectorAll('#accordion-predefinie input');
    dateInput.forEach(function (item) {
      if (item.checked && !weekDom.checked) {
        param = concatWeek(item.dataset.start, item.dataset.end, param);
      }
    });

    if (weekDom.checked && event.length === 0) {
      apiAgendaCall = _constants__WEBPACK_IMPORTED_MODULE_6__.API_AGENDA_CURRENT_URL;
    } else if (weekDom.checked && event.length > 0) {
      param = concatWeek(weekDom.dataset.start, weekDom.dataset.end, param);
    }
  } // Check Event


  if (event.length > 0) {
    event.forEach(function (child) {
      param = appendURL(param, 'eventType[]', child.dataset.api);
    });
  }

  callBack(apiAgendaCall + param, scroll, startDate, endDate);
}

function concatWeek(afterDate, beforeDate, param) {
  if (afterDate) {
    // substract 1 day for UTC matching
    param = appendURL(param, 'date[after]', moment__WEBPACK_IMPORTED_MODULE_5___default()(afterDate).subtract(1, 'days').format('YYYY/MM/DD'));
  }

  if (beforeDate) {
    var regexSlash = /-/gi;
    param = appendURL(param, 'date[before]', beforeDate.replace(regexSlash, '/'));
  }

  return param;
}

function appendURL(url, key, value) {
  return url + (url.indexOf('?') >= 0 ? '&' : '?') + encodeURIComponent(key) + '=' + encodeURIComponent(value);
}

/***/ }),

/***/ "./assets/agenda/js/Weekly.js":
/*!************************************!*\
  !*** ./assets/agenda/js/Weekly.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Weekly)
/* harmony export */ });
/* harmony import */ var _app_js_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/js/Api */ "./assets/app/js/Api.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./assets/agenda/constants.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_locale_fr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment/locale/fr */ "./node_modules/moment/locale/fr.js");
/* harmony import */ var moment_locale_fr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_locale_fr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_js_AtTags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/js/AtTags */ "./assets/app/js/AtTags.js");





function Weekly(dataList, dateStart, dateEnd, css) {
  // Last week
  // Get monday of the last week in raw format for Moment manipulating
  var previousMonday = moment__WEBPACK_IMPORTED_MODULE_2___default()(dateStart).subtract(1, 'weeks').format('YYYY-MM-DD'); // Formate the date into API pattern

  var previousMondayFormat = moment__WEBPACK_IMPORTED_MODULE_2___default()(previousMonday).format('YYYY/MM/DD'); // Get sunday of the last week (add 6 days from the last monday)

  var previousSunday = moment__WEBPACK_IMPORTED_MODULE_2___default()(previousMonday).add(7, 'days').format('YYYY-MM-DD');
  var previousSundayFormat = moment__WEBPACK_IMPORTED_MODULE_2___default()(previousSunday).format('YYYY/MM/DD'); // API call prev week

  var previousWeek = encodeURI(_constants__WEBPACK_IMPORTED_MODULE_1__.API_AGENDA_URL + '?date[after]=' + previousMondayFormat + '&date[before]=' + previousSundayFormat + '&pagination=false'); // Next week
  // Get monday of the next week in raw format for Moment manipulating

  var nextMonday = moment__WEBPACK_IMPORTED_MODULE_2___default()(dateEnd).format('YYYY-MM-DD'); // Formate the date into API pattern

  var nextMondayFormat = moment__WEBPACK_IMPORTED_MODULE_2___default()(nextMonday).format('YYYY/MM/DD'); // Get sunday of the next week (add 6 days from the next monday)

  var nextSunday = moment__WEBPACK_IMPORTED_MODULE_2___default()(nextMonday).add(7, 'days').format('YYYY-MM-DD');
  var nextSundayFormat = moment__WEBPACK_IMPORTED_MODULE_2___default()(nextSunday).format('YYYY/MM/DD'); // API call next week

  var nextWeek = encodeURI(_constants__WEBPACK_IMPORTED_MODULE_1__.API_AGENDA_URL + '?date[after]=' + nextMondayFormat + '&date[before]=' + nextSundayFormat + '&pagination=false');
  var arrayWeek = [previousWeek, nextWeek];
  apiCall(arrayWeek[0], previousMonday, previousSunday, dataList, 'Semaine précédente', 'left', 'prev', css);
  apiCall(arrayWeek[1], nextMonday, nextSunday, dataList, 'Semaine suivante', 'right', 'next', css);
}

function apiCall(apiURL, prevNextMonday, prevNextSunday, dataList, label, direction, attribute, css) {
  new _app_js_Api__WEBPACK_IMPORTED_MODULE_0__["default"]().get(apiURL).then(function (dataContent) {
    var li = document.createElement('li');
    li.classList.add('week-' + direction);
    var button = document.createElement('button');
    button.classList.add('fr-pagination__link', 'fr-my-2w', 'fr-text--xs');
    button.innerText = label;
    var span = document.createElement('span');
    span.classList.add('fr-fi-arrow-' + direction + '-s-line', 'fr-fi--sm');
    span.setAttribute('aria-hidden', 'true');

    if (dataContent['hydra:totalItems'] > 0) {
      button.setAttribute('data-week-' + attribute, apiURL);
      button.addEventListener('click', function () {
        dataList(apiURL, true, prevNextMonday, prevNextSunday);
        document.querySelector('.colorTitle:first-child .text').innerText = moment__WEBPACK_IMPORTED_MODULE_2___default()(prevNextMonday).add(1, 'days').format('D MMM') + ' - ' + moment__WEBPACK_IMPORTED_MODULE_2___default()(prevNextSunday).format('D MMM');
        var jsonAt = {
          name: this.innerText,
          chapter1: 'agenda_' + document.querySelector('h1 span').innerText,
          chapter2: 'pagination',
          level2: '4'
        };
        new _app_js_AtTags__WEBPACK_IMPORTED_MODULE_4__["default"]().atTagsCallClick(JSON.stringify(jsonAt), this);
      });
    } else {
      button.disabled = true;
    }

    if (attribute === 'prev') {
      button.prepend(span);
      document.querySelector(css).classList.add('weekLeft');
    } else {
      button.appendChild(span);
      document.querySelector(css).classList.add('weekRight');
    }

    li.appendChild(button);
    document.querySelector(css).appendChild(li);
  });
}

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

/***/ "./assets/app/js/Filters.js":
/*!**********************************!*\
  !*** ./assets/app/js/Filters.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./assets/app/js/Paging.js":
/*!*********************************!*\
  !*** ./assets/app/js/Paging.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Paging)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.last-index-of.js */ "./node_modules/core-js/modules/es.array.last-index-of.js");
/* harmony import */ var core_js_modules_es_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);










function Paging(dataListMap, dataContent, size, label, css) {
  // Prev button
  createNextPrevButton(dataListMap, dataContent, css, label, size, 'left', 'précédente', 'previous'); // Pager

  createPager(dataListMap, dataContent, css); // Next button

  createNextPrevButton(dataListMap, dataContent, css, label, size, 'right', 'suivante', 'next');
}

function createPager(dataListMap, dataContent, css) {
  var lastPager = parseInt(dataContent['hydra:view']['hydra:last'].split('=').pop());
  var currentPager = parseInt(dataContent['hydra:view']['@id'].split('=').pop());
  var apiCall = dataContent['hydra:view']['@id'].slice(0, dataContent['hydra:view']['@id'].lastIndexOf('=') + 1);
  getPageList(lastPager, currentPager, 5).forEach(function (item) {
    var li = document.createElement('li');
    var button = document.createElement('button');
    button.classList.add('fr-pagination__link');

    if (item !== 0) {
      button.title = 'Page ' + item;
      button.innerText = item;
      button.dataset.page = apiCall + item;
    } else {
      button.innerText = '...';
      button.disabled = true;
    }

    if (currentPager === item) {
      button.setAttribute('aria-current', 'page');
      button.disabled = true;
    } else {
      button.addEventListener('click', function clickButton() {
        dataListMap(apiCall + item, true);
      });
    }

    li.appendChild(button);
    document.querySelector(css).appendChild(li);
  });
}

function getPageList(totalPages, page, maxLength) {
  var sideWidth = maxLength < 9 ? 1 : 2;
  var leftWidth = maxLength - sideWidth * 2 - 3 >> 1;
  var rightWidth = maxLength - sideWidth * 2 - 2 >> 1;

  if (totalPages <= maxLength) {
    // no breaks in list
    return range(1, totalPages);
  }

  if (page <= maxLength - sideWidth - 1 - rightWidth) {
    // no break on left of page
    return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
  }

  if (page >= totalPages - sideWidth - 1 - rightWidth) {
    // no break on right of page
    return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
  } // Breaks on both sides


  return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
}

function range(start, end) {
  return Array.from(Array(end - start + 1), function (_, i) {
    return i + start;
  });
}

function createNextPrevButton(dataListMap, dataContent, css, label, size, arrowDirection, wordingDirection, dataDirection) {
  // Button
  var li = document.createElement('li');
  var button = document.createElement('button');
  button.classList.add('fr-pagination__link', 'fr-text--' + size, 'fr-pagination__link--lg-label');
  var spanText = document.createElement('span');
  spanText.classList.add('text');
  spanText.innerText = label + ' ' + wordingDirection;
  button.appendChild(spanText);

  if (dataContent['hydra:view']['hydra:' + dataDirection + '']) {
    button.setAttribute('data-week-' + dataDirection, dataContent['hydra:view']['hydra:' + dataDirection + '']);
    button.addEventListener('click', function () {
      dataListMap(dataContent['hydra:view']['hydra:' + dataDirection + ''], true);
    });
  } else {
    button.disabled = true;
  }

  var spanArrow = document.createElement('span');
  spanArrow.classList.add('fr-fi-arrow-' + arrowDirection + '-s-line', size === 'xs' ? 'fr-fi--sm' : 'fr-fi--' + size);
  spanArrow.setAttribute('aria-hidden', 'true');

  if (arrowDirection === 'left') {
    button.prepend(spanArrow);
  } else {
    button.appendChild(spanArrow);
  }

  li.appendChild(button);
  document.querySelector(css).appendChild(li);
}

/***/ }),

/***/ "./assets/agenda/css/main.scss":
/*!*************************************!*\
  !*** ./assets/agenda/css/main.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/images/common/map-pin-2-line.svg":
/*!*************************************************!*\
  !*** ./assets/images/common/map-pin-2-line.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/map-pin-2-line.f2286aa9.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--b791ff","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-60d642","vendors-node_modules_core-js_modules_es_object_define-properties_js-node_modules_core-js_modu-292aad","vendors-node_modules_axios_index_js-node_modules_regenerator-runtime_runtime_js","vendors-node_modules_core-js_modules_es_array_map_js-node_modules_core-js_modules_web_timers_-b460de","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-07ea76","vendors-node_modules_duetds_date-picker_custom-element_index_js-node_modules_core-js_modules_-ff87da","assets_app_js_AtTags_js-assets_app_js_Constants_js-node_modules_moment_locale_sync_recursive_","assets_app_js_Map_Osm_js"], () => (__webpack_exec__("./assets/agenda/index-agenda.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXJELENBRko7QUFJQXJFLElBQUFBLE1BQU0sQ0FBQ2pRLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQVk7QUFDekM2UyxNQUFBQSxXQUFXLENBQ1B4VSxXQUFXLENBQUMsWUFBRCxDQUFYLENBQTBCLFdBQVdpVyxhQUFYLEdBQTJCLEVBQXJELENBRE8sRUFFUCxJQUZPLENBQVg7QUFJSCxLQUxEO0FBTUgsR0FYRCxNQVdPO0FBQ0hyRSxJQUFBQSxNQUFNLENBQUNFLFFBQVAsR0FBa0IsSUFBbEI7QUFDSDs7QUFDRCxNQUFNcUUsU0FBUyxHQUFHN1csUUFBUSxDQUFDeUUsYUFBVCxDQUF1QixNQUF2QixDQUFsQjtBQUNBb1MsRUFBQUEsU0FBUyxDQUFDL1UsU0FBVixDQUFvQkMsR0FBcEIsQ0FDSSxpQkFBaUIwVSxjQUFqQixHQUFrQyxTQUR0QyxFQUVJdEIsSUFBSSxLQUFLLElBQVQsR0FBZ0IsV0FBaEIsR0FBOEIsWUFBWUEsSUFGOUM7QUFJQTBCLEVBQUFBLFNBQVMsQ0FBQzFPLFlBQVYsQ0FBdUIsYUFBdkIsRUFBc0MsTUFBdEM7O0FBQ0EsTUFBSXNPLGNBQWMsS0FBSyxNQUF2QixFQUErQjtBQUMzQm5FLElBQUFBLE1BQU0sQ0FBQ0csT0FBUCxDQUFlb0UsU0FBZjtBQUNILEdBRkQsTUFFTztBQUNIdkUsSUFBQUEsTUFBTSxDQUFDMVAsV0FBUCxDQUFtQmlVLFNBQW5CO0FBQ0g7O0FBQ0R4RSxFQUFBQSxFQUFFLENBQUN6UCxXQUFILENBQWUwUCxNQUFmO0FBQ0F0UyxFQUFBQSxRQUFRLENBQUNDLGFBQVQsQ0FBdUJrUixHQUF2QixFQUE0QnZPLFdBQTVCLENBQXdDeVAsRUFBeEM7QUFDSDs7Ozs7Ozs7Ozs7O0FDeEpEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50fGxhenl8L15cXC5cXC8uKlxcLmVudHJ5XFwuanMuKiQvfGluY2x1ZGU6IC9cXC5lbnRyeVxcLmpzJC98ZXhjbHVkZTogL1xcLnN5c3RlbVxcLmVudHJ5XFwuanMkL3xncm91cE9wdGlvbnM6IHt9fG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FnZW5kYS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FnZW5kYS9pbmRleC1hZ2VuZGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FnZW5kYS9qcy9EYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZ2VuZGEvanMvRGF0ZXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWdlbmRhL2pzL0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FnZW5kYS9qcy9NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FnZW5kYS9qcy9TZW5kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZ2VuZGEvanMvV2Vla2x5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvQ29weS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL0ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9Hcm91cEJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9QYWdpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FnZW5kYS9jc3MvbWFpbi5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudCBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5lbnRyeVxcXFwuanMuKiQgaW5jbHVkZTogXFxcXC5lbnRyeVxcXFwuanMkIGV4Y2x1ZGU6IFxcXFwuc3lzdGVtXFxcXC5lbnRyeVxcXFwuanMkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDsiLCJleHBvcnQgY29uc3QgQUdFTkRBX1VSTCA9ICcvYWdlbmRhJztcclxuZXhwb3J0IGNvbnN0IEFHRU5EQV9DVVJSRU5UX1VSTCA9ICcvY3VycmVudCc7XHJcbmV4cG9ydCBjb25zdCBBR0VOREFfUEFHRVIgPSAnP3BhZ2luYXRpb249ZmFsc2UnO1xyXG5leHBvcnQgY29uc3QgQVBJX0FHRU5EQV9VUkwgPSBwcm9jZXNzLmVudi5BUElfUFJFRklYICsgQUdFTkRBX1VSTDtcclxuZXhwb3J0IGNvbnN0IEFQSV9BR0VOREFfQ1VSUkVOVF9VUkwgPVxyXG4gICAgcHJvY2Vzcy5lbnYuQVBJX1BSRUZJWCArIEFHRU5EQV9VUkwgKyBBR0VOREFfQ1VSUkVOVF9VUkw7XHJcbmV4cG9ydCBjb25zdCBFVkVOVFNfVVJMID0gcHJvY2Vzcy5lbnYuQVBJX1BSRUZJWCArICcvZXZlbnRfdHlwZXMnO1xyXG5leHBvcnQgY29uc3QgTUVESUFfVVJMID0gcHJvY2Vzcy5lbnYuVVJMX01FRElBO1xyXG5leHBvcnQgY29uc3QgQ1NWX1VSTCA9IEFHRU5EQV9VUkwgKyAnL2Nzdic7XHJcbiIsIi8qIGdsb2JhbCB0YWcsIHRhcnRlYXVjaXRyb24gKi9cclxuaW1wb3J0ICcuL2Nzcy9tYWluLnNjc3MnO1xyXG5pbXBvcnQge1xyXG4gICAgQVBJX0FHRU5EQV9DVVJSRU5UX1VSTCxcclxuICAgIEFHRU5EQV9QQUdFUixcclxuICAgIEVWRU5UU19VUkwsXHJcbiAgICBNRURJQV9VUkwsXHJcbiAgICBDU1ZfVVJMLFxyXG59IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHtTQ1JFRU5fU1dJVENIfSBmcm9tICcuLi9hcHAvanMvQ29uc3RhbnRzJztcclxuaW1wb3J0IEFwaSBmcm9tICcuLi9hcHAvanMvQXBpJztcclxuaW1wb3J0IFBhZ2luZyBmcm9tICcuLi9hcHAvanMvUGFnaW5nJztcclxuaW1wb3J0IENvcHkgZnJvbSAnLi4vYXBwL2pzL0NvcHknO1xyXG5pbXBvcnQgR3JvdXBCdXR0b25zIGZyb20gJy4uL2FwcC9qcy9Hcm91cEJ1dHRvbnMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICcuL2pzL0xpc3QnO1xyXG5pbXBvcnQgTWFwIGZyb20gJy4vanMvTWFwJztcclxuaW1wb3J0IERhdGUgZnJvbSAnLi9qcy9EYXRlJztcclxuaW1wb3J0IFNlbmQgZnJvbSAnLi9qcy9TZW5kJztcclxuaW1wb3J0IFdlZWtseSBmcm9tICcuL2pzL1dlZWtseSc7XHJcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJy4vanMvRGF0ZXBpY2tlcic7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2ZyJztcclxuaW1wb3J0IEF0VGFncyBmcm9tICcuLi9hcHAvanMvQXRUYWdzJztcclxuXHJcbmNvbnN0IGxldmVsQVQgPSAnNCc7XHJcbmNvbnN0IGF0U2l0ZTIgPSAnYWdlbmRhXycgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMSBzcGFuJykuaW5uZXJUZXh0O1xyXG5cclxuZnVuY3Rpb24gZGF0YUxpc3QoZGF0YVVSTCwgc2Nyb2xsUGFnZSwgcHJldldlZWssIG5leHRXZWVrKSB7XHJcbiAgICBuZXcgQXBpKCkuZ2V0KGRhdGFVUkwpLnRoZW4oKGRhdGFDb250ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gTm90IHNjcm9sbCAvIGVtcHR5IGNvbnRlbnQgZm9yIGZpcnN0IGxvYWRpbmcgcGFnZVxyXG4gICAgICAgIGlmIChzY3JvbGxQYWdlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2wtY29udGVudDpudGgtY2hpbGQoMiknKS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHByZXZXZWVrID0gZGF0YUNvbnRlbnRbJ2h5ZHJhOm1lbWJlciddLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgPyBEYXRlKGRhdGFDb250ZW50WydoeWRyYTptZW1iZXInXVswXS5kYXRlKVxyXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIG5leHRXZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlZWsnKS5kYXRhc2V0LmVuZDtcclxuICAgICAgICAgICAgRGF0ZXBpY2tlcigpO1xyXG4gICAgICAgICAgICBBVENsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERlbGV0ZSBET00gZnVuY3Rpb25cclxuICAgICAgICBjb25zdCBnZXREb21BcnJheSA9IFtcclxuICAgICAgICAgICAgJy50aWxlLWdyb3VwJyxcclxuICAgICAgICAgICAgJy5wYWdlciAuZnItcGFnaW5hdGlvbiAuZXZlbnQtcGFnZXInLFxyXG4gICAgICAgICAgICAnLnBhZ2VyIC5mci1wYWdpbmF0aW9uIC53ZWVrbHktcGFnZXInLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZGVzdHJveURvbShnZXREb21BcnJheSk7XHJcblxyXG4gICAgICAgIC8vIEJ1aWxkIExpc3QgaWYgQVBJIHJldHVybiByZXN1bHRcclxuICAgICAgICBpZiAoZGF0YUNvbnRlbnRbJ2h5ZHJhOnRvdGFsSXRlbXMnXSA+IDApIHtcclxuICAgICAgICAgICAgZGF0YUNvbnRlbnRbJ2h5ZHJhOm1lbWJlciddLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50aWxlLWdyb3VwJylcclxuICAgICAgICAgICAgICAgICAgICAuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBMaXN0KGl0ZW0pKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBQREYgZmlsZSBsaW5rIChjaGVjayBpZiBpdCdzIGluIHRoZSBBUEkpXHJcbiAgICAgICAgICAgIGlmIChkYXRhQ29udGVudFsnaHlkcmE6bWVtYmVyJ11bMF0ud2Vla2x5LnBkZlVybCAmJiAhc2Nyb2xsUGFnZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGRmRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBkZicpO1xyXG4gICAgICAgICAgICAgICAgcGRmRGl2LnF1ZXJ5U2VsZWN0b3IoJ2Erc3BhbicpLmlubmVyVGV4dCA9XHJcbiAgICAgICAgICAgICAgICAgICAgJ1BERiAtICcgK1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdEJ5dGVzKGRhdGFDb250ZW50WydoeWRyYTptZW1iZXInXVswXS53ZWVrbHkucGRmU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBwZGZEaXYucXVlcnlTZWxlY3RvcignYScpLmhyZWYgPVxyXG4gICAgICAgICAgICAgICAgICAgIE1FRElBX1VSTCArIGRhdGFDb250ZW50WydoeWRyYTptZW1iZXInXVswXS53ZWVrbHkucGRmVXJsO1xyXG4gICAgICAgICAgICAgICAgcGRmRGl2LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2hlY2sgd2VlayBhZnRlciBhbmQgYmVmb3JlIHRvIGRpc3BsYXkgbGluayAob25seSBmb3IgJ1RoaXMgd2VlaycpXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY2NvcmRpb24tcHJlZGVmaW5pZSBpbnB1dCN3ZWVrJylcclxuICAgICAgICAgICAgICAgICAgICAuY2hlY2tlZCAmJlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZW50cy10YWdzIC5mci10YWcuYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICAubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgV2Vla2x5KGRhdGFMaXN0LCBwcmV2V2VlaywgbmV4dFdlZWssICcud2Vla2x5LXBhZ2VyJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICBkYXRhQ29udGVudFsnaHlkcmE6dmlldyddICYmXHJcbiAgICAgICAgICAgICAgICBkYXRhQ29udGVudFsnaHlkcmE6dmlldyddWydoeWRyYTpsYXN0J11cclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBQYWdlclxyXG4gICAgICAgICAgICAgICAgUGFnaW5nKGRhdGFMaXN0LCBkYXRhQ29udGVudCwgJ3NtJywgJ1BhZ2UnLCAnLmV2ZW50LXBhZ2VyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXRMaXN0UmVsb2FkKCk7XHJcbiAgICAgICAgICAgIGRhdGFNYXAoZGF0YVVSTCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gTm8gcmVzdWx0XHJcbiAgICAgICAgICAgIGRlc3Ryb3lEb20oWycubWFwJ10pO1xyXG4gICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5tYXAnKVxyXG4gICAgICAgICAgICAgICAgLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgICAgICAgICAnYmVmb3JlZW5kJyxcclxuICAgICAgICAgICAgICAgICAgICBcIjxwIGNsYXNzPSdmci1wLTJ3IGZyLW10LTEwdyBmci1tdC1tZC00dyc+Vm90cmUgcmVjaGVyY2hlIG4nZXN0IGFzc29jacOpZSDDoCBhdWN1biByw6lzdWx0YXQsIG1lcmNpIGQnZXNzYXllciBkJ2F1dHJlcyBjcml0w6hyZXMgZGUgcmVjaGVyY2hlLjwvcD5cIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG1vYmlsZVNjcm9sbFRvVG9wKTtcclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gU0NSRUVOX1NXSVRDSCkge1xyXG4gICAgICAgICAgICBtb2JpbGVTY3JvbGxUb1RvcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gR2VuZXJhdGUgQ1NWIGZpbGUgbGlua1xyXG4gICAgICAgIGNvbnN0IGNzdkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jc3YnKTtcclxuICAgICAgICBjc3ZEaXYucXVlcnlTZWxlY3RvcignYScpLmhyZWYgPSBDU1ZfVVJMO1xyXG4gICAgICAgIGNzdkRpdi5xdWVyeVNlbGVjdG9yKCdhK3NwYW4nKS5pbm5lclRleHQgPSAnQ1NWJztcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZXN0cm95RG9tKGFycmF5RGVzdHJveSkge1xyXG4gICAgYXJyYXlEZXN0cm95LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpdGVtKS5xdWVyeVNlbGVjdG9yQWxsKCcqJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGl0ZW0pLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkYXRhTGlzdEV2ZW50KGRhdGFVUkwpIHtcclxuICAgIG5ldyBBcGkoKS5nZXQoZGF0YVVSTCkudGhlbigoZGF0YUNvbnRlbnQpID0+IHtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignI2FjY29yZGlvbi1ldmVuZW1lbnRzJylcclxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICAgICAgR3JvdXBCdXR0b25zKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFDb250ZW50WydoeWRyYTptZW1iZXInXSxcclxuICAgICAgICAgICAgICAgICAgICAnZXZlbnRzLXRhZ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsQVQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2V2ZW5lbWVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYXRTaXRlMlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIFJldHVybiBQREYgc2l6ZVxyXG5mdW5jdGlvbiBmb3JtYXRCeXRlcyhieXRlcywgZGVjaW1hbHMgPSAyKSB7XHJcbiAgICBpZiAoYnl0ZXMgPT09IDApIHJldHVybiAnMCBPY3RldCc7XHJcblxyXG4gICAgY29uc3QgayA9IDEwMjQ7XHJcbiAgICBjb25zdCBkbSA9IGRlY2ltYWxzIDwgMCA/IDAgOiBkZWNpbWFscztcclxuICAgIGNvbnN0IHNpemVzID0gWydPY3RldHMnLCAnS28nLCAnTW8nLCAnR28nLCAnVG8nLCAnUG8nLCAnRW8nLCAnWm8nLCAnWW8nXTtcclxuXHJcbiAgICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7XHJcblxyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoKGJ5dGVzIC8gTWF0aC5wb3coaywgaSkpLnRvRml4ZWQoZG0pKSArICcgJyArIHNpemVzW2ldO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2JpbGVTY3JvbGxUb1RvcCgpIHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSBTQ1JFRU5fU1dJVENIKSB7XHJcbiAgICAgICAgLy8gT25seSBzbWFsbCBkZXZpY2VzXHJcbiAgICAgICAgLy8gSWYgc2Nyb2xsIHVwIDM1MHB4ID0+IGRpc3BsYXkgc2Nyb2xsIHRvIHRvcCBidXR0b25cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgJ3Njcm9sbCcsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMzUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5waW5NYXBCdXR0b24nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnBpbk1hcEJ1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtwYXNzaXZlOiB0cnVlfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIENsaWNrIG9uIHBsYWNlID0+IHNjcm9sbCB0byB0b3BcclxuICAgICAgICBjb25zdCBjbGlja01hcFRvVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjcm9sbFRvTWFwJyk7XHJcbiAgICAgICAgY2xpY2tNYXBUb1RvcC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY29sLWNvbnRlbnQ6bnRoLWNoaWxkKDIpJylcclxuICAgICAgICAgICAgICAgICAgICAuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBPYnNlcnZlciBpbnRlcmFjdCBmb3IgZmlsdGVyIG9uIHN0aWNreSB0b3AgZGV0ZWN0aW9uLCBzdGlja3kgQ1NTIHBvc2l0aW9uIGlzIG5vdCBlbm91Z3RoXHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cgJiZcclxuICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggPD0gU0NSRUVOX1NXSVRDSFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAnLmFnZW5kYSBzZWN0aW9uIC5jb2wtY29udGVudDpmaXJzdC1jaGlsZCdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXHJcbiAgICAgICAgICAgICAgICAoW2VdKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpcy1waW5uZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmludGVyc2VjdGlvblJhdGlvIDwgMVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcblxyXG4gICAgICAgICAgICAgICAge3RocmVzaG9sZDogWzFdfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDbGljayBmaWx0ZXIgaGFuZGxlXHJcbiAgICAgICAgY29uc3QgY29sb3JUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xvclRpdGxlJyk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgY2xvc2VEaXYuY2xhc3NMaXN0LmFkZCgnZnItdGV4dC0tc20nLCAnZnItbWItMCcsICdjbG9zZUZpbHRlcicpO1xyXG4gICAgICAgIGNsb3NlRGl2LmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICdGZXJtZXIgPHNwYW4gY2xhc3M9XCJmci1maS1jbG9zZS1saW5lIGZyLWZpLS1zbVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj4nO1xyXG4gICAgICAgIGNvbG9yVGl0bGUuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA8XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbjpmaXJzdC1jaGlsZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmZyLWZpLWNhbGVuZGFyLWxpbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzZWN0aW9uOmxhc3QtY2hpbGQgLmNvbC1jb250ZW50OmZpcnN0LWNoaWxkJ1xyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LnRvZ2dsZSgnZmlsdGVyT3BlbicpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmNsYXNzTGlzdC50b2dnbGUoJ2Jsb2NrU2Nyb2xsJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlck9wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY2xvc2VEaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0JykuaW5uZXJUZXh0ID09PSAnRmlsdHJlcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCcudGV4dCcpLmlubmVyVGV4dCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTW9kaWZpZXIgbGVzIGZpbHRyZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmZyLWFjY29yZGlvbnMtZ3JvdXAnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnZGlzcGxheUZpbHRlcicpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZUNoaWxkKGNsb3NlRGl2KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvcignLnRleHQnKS5pbm5lclRleHQgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdNb2RpZmllciBsZXMgZmlsdHJlcydcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCcudGV4dCcpLmlubmVyVGV4dCA9ICdGaWx0cmVzJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5mci1hY2NvcmRpb25zLWdyb3VwJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXlGaWx0ZXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvclRpdGxlLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcyAhPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc3BsYXlGaWx0ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlQnV0dG9uKCkge1xyXG4gICAgLy8gVmFsaWRhdGUgZmlsdGVyIGJ1dHRvblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2NrU2Nyb2xsJyk7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuYnRuLWZpbHRlci1zdWJtaXQgYnV0dG9uJylcclxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSBTQ1JFRU5fU1dJVENIKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlRmlsdGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmNsb3NlRmlsdGVyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmVudEVsZW1lbnQuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBDaGVjayBkZWZpbmUgaW5wdXQgZGF0ZVxyXG4gICAgICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgJyNhY2NvcmRpb24tcHJlZGVmaW5pZSBpbnB1dCdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGV0IGRhdGVSYW5nZSA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnREYXRlVmFsaWQgPSAnJztcclxuICAgICAgICAgICAgbGV0IGVuZERhdGVWYWxpZCA9ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dFdlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCN3ZWVrJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0TW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNtb250aCcpO1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dExhc3QzTW9udGhzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICAgICdpbnB1dCNsYXN0M01vbnRocydcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgcGlja0RhdGVTdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xyXG4gICAgICAgICAgICBjb25zdCBwaWNrRGF0ZUVuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmQnKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgIWlucHV0V2Vlay5jaGVja2VkICYmXHJcbiAgICAgICAgICAgICAgICAhaW5wdXRNb250aC5jaGVja2VkICYmXHJcbiAgICAgICAgICAgICAgICAhaW5wdXRMYXN0M01vbnRocy5jaGVja2VkICYmXHJcbiAgICAgICAgICAgICAgICBwaWNrRGF0ZVN0YXJ0LnZhbHVlID09PSAnJyAmJlxyXG4gICAgICAgICAgICAgICAgcGlja0RhdGVFbmQudmFsdWUgPT09ICcnXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRXZWVrLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRhdGVJbnB1dC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVJhbmdlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9tZW50KGl0ZW0uZGF0YXNldC5zdGFydCkuZm9ybWF0KCdEIE1NTScpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyAtICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb21lbnQoaXRlbS5kYXRhc2V0LmVuZCkuZm9ybWF0KCdEIE1NTScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZVZhbGlkID0gbW9tZW50KGl0ZW0uZGF0YXNldC5zdGFydClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnRyYWN0KDEsICdkYXlzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZERhdGVWYWxpZCA9IGl0ZW0uZGF0YXNldC5lbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBDaGVjayBkYXRlcGlja2VyIGlucHV0IGRhdGVcclxuICAgICAgICAgICAgaWYgKHBpY2tEYXRlU3RhcnQudmFsdWUgIT09ICcnICYmIHBpY2tEYXRlRW5kLnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgZGF0ZVJhbmdlID1cclxuICAgICAgICAgICAgICAgICAgICAnw4AgcGFydGlyIGR1ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbWVudChwaWNrRGF0ZVN0YXJ0LnZhbHVlKS5mb3JtYXQoJ0QgTU1NJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBpY2tEYXRlRW5kLnZhbHVlICE9PSAnJyAmJiBwaWNrRGF0ZVN0YXJ0LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgZGF0ZVJhbmdlID1cclxuICAgICAgICAgICAgICAgICAgICBcIkp1c3F1J2F1IFwiICsgbW9tZW50KHBpY2tEYXRlRW5kLnZhbHVlKS5mb3JtYXQoJ0QgTU1NJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBpY2tEYXRlRW5kLnZhbHVlICE9PSAnJyAmJiBwaWNrRGF0ZVN0YXJ0LnZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgZGF0ZVJhbmdlID1cclxuICAgICAgICAgICAgICAgICAgICBtb21lbnQocGlja0RhdGVTdGFydC52YWx1ZSkuZm9ybWF0KCdEIE1NTScpICtcclxuICAgICAgICAgICAgICAgICAgICAnIC0gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgbW9tZW50KHBpY2tEYXRlRW5kLnZhbHVlKS5mb3JtYXQoJ0QgTU1NJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAnLmNvbG9yVGl0bGU6Zmlyc3QtY2hpbGQgLnRleHQnXHJcbiAgICAgICAgICAgICkuaW5uZXJUZXh0ID0gZGF0ZVJhbmdlO1xyXG4gICAgICAgICAgICBTZW5kKGRhdGFMaXN0LCB0cnVlLCBzdGFydERhdGVWYWxpZCwgZW5kRGF0ZVZhbGlkKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gQVRDbGljaygpIHtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICcuYWdlbmRhIGE6bm90KC5sZWFmbGV0LWNvbnRyb2wtem9vbS1pbik6bm90KC5sZWFmbGV0LWNvbnRyb2wtem9vbS1vdXQpJyxcclxuICAgICAgICAgICAgJy5hZ2VuZGEgYnV0dG9uOm5vdCguY29sbGFwc2VGaWx0ZXIpOm5vdCguZnItdGFnLmZyLXRoZW1hdGljKScsXHJcbiAgICAgICAgICAgICcuYWdlbmRhIC5mci1yYWRpby1ncm91cCBsYWJlbCdcclxuICAgICAgICApXHJcbiAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgfHxcclxuICAgICAgICAgICAgICAgICAgICAoIWl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmci1hY2NvcmRpb25fX3RpdGxlJ1xyXG4gICAgICAgICAgICAgICAgICAgICkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uY2xvc2VzdCgnZHVldC1kYXRlLXBpY2tlcicpKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kdWxlTmFtZSA9IGl0ZW0uY2xvc2VzdCgnW2RhdGEtbW9kdWxlXScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnW2RhdGEtbW9kdWxlXScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kdWxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGVDaGlsZE5hbWUgPSBpdGVtLmNsb3Nlc3QoJ1tkYXRhLWNoaWxkLW1vZHVsZV0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ1tkYXRhLWNoaWxkLW1vZHVsZV0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLWNoaWxkLW1vZHVsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmlubmVyVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kdWxlTmFtZSA9PT0gJ2ZpbHRyZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9ICdyZWNoZXJjaGVfJyArIG5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZHVsZU5hbWUgPT09ICdib3V0b24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnZG93bmxvYWQnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWUgPT09ICdwYXJ0YWdlJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lID09PSAnaGF1dF9kZV9wYWdlJ1xyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2FjdGlvbic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2R1bGVOYW1lID09PSAncGFnaW5hdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICduYXZpZ2F0aW9uJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQVQgVGFnIENhbGxcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBqc29uQXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXB0ZXIxOiBhdFNpdGUyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFwdGVyMjogbW9kdWxlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjM6IG1vZHVsZUNoaWxkTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWwyOiBsZXZlbEFULFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEF0VGFncygpLmF0VGFnc0NhbGxDbGljayhKU09OLnN0cmluZ2lmeShqc29uQXQpLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0TGlzdFJlbG9hZCgpIHtcclxuICAgIGxldCBuYW1lO1xyXG4gICAgbGV0IGNoYXB0ZXIzO1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgJy5jb2wtY29udGVudCAudGlsZS1ncm91cCBidXR0b24sIC5jb2wtY29udGVudCAucGFnZXIgYnV0dG9uLCAuY29sLWNvbnRlbnQgLmZyLWxpbmstLWNhcnQnXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGVOYW1lID0gaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCdbZGF0YS1tb2R1bGVdJylcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZHVsZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vZHVsZU5hbWUgPT09ICdwYWdpbmF0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSB0aGlzLmlubmVyVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuaW5uZXJUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0JykuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gdGhpcy5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjMgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZnItdGlsZV9fZGV0YWlsIC5kYXRlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbm5lclRleHQuc3BsaXQoJy8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJy0nKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdfJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZnItdGlsZV9fZGV0YWlsIC50aW1lJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBBVCBUYWcgQ2FsbFxyXG4gICAgICAgICAgICAgICAgY29uc3QganNvbkF0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjE6IGF0U2l0ZTIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjI6IG1vZHVsZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcHRlcjM6IGNoYXB0ZXIzLFxyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsMjogbGV2ZWxBVCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYWN0aW9uJyxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBuZXcgQXRUYWdzKCkuYXRUYWdzQ2FsbENsaWNrKEpTT04uc3RyaW5naWZ5KGpzb25BdCksIHRoaXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuLy8gR2VuZXJhdGUgTUFQXHJcbmZ1bmN0aW9uIGRhdGFNYXAoZGF0YVVSTCkge1xyXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGEuaHJlZiA9IGRhdGFVUkw7XHJcbiAgICBpZiAoXHJcbiAgICAgICAgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWVrJykuY2hlY2tlZCB8fFxyXG4gICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VlaycpLmNoZWNrZWQgJiZcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZW50cy10YWdzIC5mci10YWcuYWN0aXZlJykubGVuZ3RoID4gMClcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtID0gYS5zZWFyY2ggPyAnJicgKyBhLnNlYXJjaC5zdWJzdHJpbmcoMSkgOiAnJztcclxuICAgICAgICBkYXRhVVJMID0gYS5wYXRobmFtZSArIEFHRU5EQV9QQUdFUiArIHBhcmFtO1xyXG4gICAgfVxyXG4gICAgbmV3IEFwaSgpLmdldChkYXRhVVJMKS50aGVuKChkYXRhQ29udGVudCkgPT4ge1xyXG4gICAgICAgIGRlc3Ryb3lEb20oWycubWFwJ10pO1xyXG4gICAgICAgIGlmIChkYXRhQ29udGVudFsnaHlkcmE6dG90YWxJdGVtcyddID4gMCkge1xyXG4gICAgICAgICAgICBNYXAoZGF0YUNvbnRlbnRbJ2h5ZHJhOm1lbWJlciddLCBsZXZlbEFULCBhdFNpdGUyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGRhdGFMaXN0RXZlbnQoRVZFTlRTX1VSTCk7XHJcbiAgICBkYXRhTGlzdChBUElfQUdFTkRBX0NVUlJFTlRfVVJMLCBmYWxzZSk7XHJcbiAgICB2YWxpZGF0ZUJ1dHRvbigpO1xyXG4gICAgQ29weSgpO1xyXG59KTtcclxuXHJcbi8vIExvYWQgQVQgKyBUQUNcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RhcnRlYXVjaXRyb25fbG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRhcnRlYXVjaXRyb24uc3RhdGUuYXRpbnRlcm5ldGNuaWwgJiYgdHlwZW9mIHRhZyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBjb25zdCBqc29uQXQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGF0U2l0ZTIsXHJcbiAgICAgICAgICAgIGxldmVsMjogbGV2ZWxBVCxcclxuICAgICAgICAgICAgY2hhcHRlcjE6ICdjb21wb3NpdGlvbl9kdV9nb3V2ZXJuZW1lbnQnLFxyXG4gICAgICAgICAgICBjaGFwdGVyMjogJ3ByZW1pZXJfbWluaXN0cmUnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgY3VzdG9tVmFycyA9IHtcclxuICAgICAgICAgICAgc2l0ZToge1xyXG4gICAgICAgICAgICAgICAgMTogJ2ZyJyxcclxuICAgICAgICAgICAgICAgIDI6ICdhZ2VuZGEnLFxyXG4gICAgICAgICAgICAgICAgMTU6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbmV3IEF0VGFncygpLmF0VGFnc0NhbGxQYWdlKEpTT04uc3RyaW5naWZ5KGpzb25BdCksIGN1c3RvbVZhcnMpO1xyXG4gICAgfVxyXG59KTtcclxuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZnInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZShzdGFydERhdGVJbml0KSB7XHJcbiAgICBjb25zdCB3ZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjY29yZGlvbi1wcmVkZWZpbmllIGlucHV0I3dlZWsnKTtcclxuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG1vbWVudChzdGFydERhdGVJbml0KVxyXG4gICAgICAgIC5zdGFydE9mKCdpc293ZWVrJylcclxuICAgICAgICAuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICBjb25zdCBlbmREYXRlID0gbW9tZW50KHN0YXJ0RGF0ZUluaXQpLmVuZE9mKCdpc293ZWVrJykuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICB3ZWVrLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGFydCcsIHN0YXJ0RGF0ZSk7XHJcbiAgICB3ZWVrLnNldEF0dHJpYnV0ZSgnZGF0YS1lbmQnLCBlbmREYXRlKTtcclxuICAgIGNvbnN0IG1vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjY29yZGlvbi1wcmVkZWZpbmllIGlucHV0I21vbnRoJyk7XHJcbiAgICBtb250aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgJ2RhdGEtc3RhcnQnLFxyXG4gICAgICAgIG1vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJykuZm9ybWF0KCdZWVlZLU1NLUREJylcclxuICAgICk7XHJcbiAgICBtb250aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgJ2RhdGEtZW5kJyxcclxuICAgICAgICBtb21lbnQoKS5lbmRPZignbW9udGgnKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBsYXN0M01vbnRocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgJyNhY2NvcmRpb24tcHJlZGVmaW5pZSBpbnB1dCNsYXN0M01vbnRocydcclxuICAgICk7XHJcbiAgICBsYXN0M01vbnRocy5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgJ2RhdGEtc3RhcnQnLFxyXG4gICAgICAgIG1vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJykuc3VidHJhY3QoMiwgJ21vbnRoJykuZm9ybWF0KCdZWVlZLU1NLUREJylcclxuICAgICk7XHJcbiAgICBsYXN0M01vbnRocy5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgJ2RhdGEtZW5kJyxcclxuICAgICAgICBtb21lbnQoKS5lbmRPZignbW9udGgnKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYWNjb3JkaW9uLXByZWRlZmluaWUgbGFiZWwnKTtcclxuICAgIGRhdGVMYWJlbC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZW1wdHlEYXRlRmllbGRzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZW1wdHlEYXRlUGlja2VyJylcclxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY2NvcmRpb24tcHJlZGVmaW5pZSBpbnB1dCN3ZWVrJykuY2xpY2soKTtcclxuICAgICAgICAgICAgZW1wdHlEYXRlRmllbGRzKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbG9yVGl0bGU6Zmlyc3QtY2hpbGQgLnRleHQnKS5pbm5lclRleHQgPVxyXG4gICAgICAgIG1vbWVudChzdGFydERhdGUpLmZvcm1hdCgnRCBNTU0nKSArXHJcbiAgICAgICAgJyAtICcgK1xyXG4gICAgICAgIG1vbWVudChlbmREYXRlKS5mb3JtYXQoJ0QgTU1NJyk7XHJcbiAgICByZXR1cm4gbW9tZW50KHN0YXJ0RGF0ZSkuc3VidHJhY3QoMSwgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZW1wdHlEYXRlRmllbGRzKCkge1xyXG4gICAgY29uc3Qgc3RhcnREYXRlRW1wdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuICAgIGNvbnN0IGVuZERhdGVFbXB0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmQnKTtcclxuICAgIC8vIHJlaW5pdCBjYWxlbmRhciBmb3IgVVhcclxuICAgIHN0YXJ0RGF0ZUVtcHR5LnZhbHVlID0gJyc7XHJcbiAgICBlbmREYXRlRW1wdHkudmFsdWUgPSAnJztcclxuICAgIHN0YXJ0RGF0ZUVtcHR5Lm1heCA9ICcnO1xyXG4gICAgZW5kRGF0ZUVtcHR5Lm1pbiA9ICcnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtcHR5RGF0ZVBpY2tlcicpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XHJcbn1cclxuIiwiaW1wb3J0IHtEdWV0RGF0ZVBpY2tlcn0gZnJvbSAnQGR1ZXRkcy9kYXRlLXBpY2tlci9jdXN0b20tZWxlbWVudCc7XHJcbmltcG9ydCBBdFRhZ3MgZnJvbSAnLi4vLi4vYXBwL2pzL0F0VGFncyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlcGlja2VyKCkge1xyXG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdkdWV0LWRhdGUtcGlja2VyJywgRHVldERhdGVQaWNrZXIpO1xyXG4gICAgY29uc3Qgc3RhcnRQaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuICAgIGNvbnN0IGVuZFBpY2tlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmQnKTtcclxuICAgIGNvbnN0IGZpcnN0RGF0ZUF2YWlsYWJsZSA9ICcyMDIxLTAyLTAxJztcclxuICAgIGNvbnN0IGxhc3REYXRlQXZhaWxhYmxlID0gZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcignI3dlZWsnKVxyXG4gICAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZW5kJyk7XHJcblxyXG4gICAgLy8gV2hlbiB0aGUgc3RhcnQgZGF0ZSBwaWNrZXIgaXMgY2hhbmdlZC4uLlxyXG4gICAgc3RhcnRQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignZHVldENoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZW5kUGlja2VyLm1pbiA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgIHVuY2hlY2tEZWZpbmVEYXRlKHRoaXMsIGUuZGV0YWlsLnZhbHVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFdoZW4gdGhlIGVuZCBkYXRlIGRhdGUgcGlja2VyIGlzIGNoYW5nZWQuLi5cclxuICAgIGVuZFBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdkdWV0Q2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBzdGFydFBpY2tlci5tYXggPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICB1bmNoZWNrRGVmaW5lRGF0ZSh0aGlzLCBlLmRldGFpbC52YWx1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2NhbGl6YXRpb25EYXRlKHN0YXJ0UGlja2VyLCAnZMOpYnV0Jyk7XHJcbiAgICBsb2NhbGl6YXRpb25EYXRlKGVuZFBpY2tlciwgJ2ZpbicpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICdidXR0b25bYXJpYS1jb250cm9scz1hY2NvcmRpb24tcGVyc29ubmFsaXNlZV0nXHJcbiAgICApO1xyXG4gICAgdG9nZ2xlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAnYnV0dG9uW2FyaWEtY29udHJvbHM9YWNjb3JkaW9uLXBlcnNvbm5hbGlzZWVdW2FyaWEtZXhwYW5kZWQ9ZmFsc2VdJ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignI2FjY29yZGlvbi1wZXJzb25uYWxpc2VlJylcclxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvd1Zpc2libGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2NhbGl6YXRpb25EYXRlKGRvbUVsdCwgd29yZGluZykge1xyXG4gICAgICAgIGRvbUVsdC5sb2NhbGl6YXRpb24gPSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbkxhYmVsOiAnQ2hvaXNpciBsYSBkYXRlIGRlICcgKyB3b3JkaW5nLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0Nob2lzaXIgdW5lIGRhdGUnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZERhdGVNZXNzYWdlOiAnTGEgZGF0ZSBjaG9pc2llIGVzdCA6ICcsXHJcbiAgICAgICAgICAgIHByZXZNb250aExhYmVsOiAnTW9pcyBwcsOpY8OpZGVudCcsXHJcbiAgICAgICAgICAgIG5leHRNb250aExhYmVsOiAnTW9pcyBzdWl2YW50JyxcclxuICAgICAgICAgICAgbW9udGhTZWxlY3RMYWJlbDogJ01vaXMnLFxyXG4gICAgICAgICAgICB5ZWFyU2VsZWN0TGFiZWw6ICdBbm7DqWUnLFxyXG4gICAgICAgICAgICBjbG9zZUxhYmVsOiAnRmVybWVyIGxhIGZlbsOqdHJlJyxcclxuICAgICAgICAgICAgY2FsZW5kYXJIZWFkaW5nOiAnQ2hvaXNpciBsYSBkYXRlIGRlICcgKyB3b3JkaW5nLFxyXG4gICAgICAgICAgICBkYXlOYW1lczogW1xyXG4gICAgICAgICAgICAgICAgJ0RpbWFuY2hlJyxcclxuICAgICAgICAgICAgICAgICdMdW5kaScsXHJcbiAgICAgICAgICAgICAgICAnTWFyZGknLFxyXG4gICAgICAgICAgICAgICAgJ01lcmNyZWRpJyxcclxuICAgICAgICAgICAgICAgICdKZXVkaScsXHJcbiAgICAgICAgICAgICAgICAnVmVuZHJlZGknLFxyXG4gICAgICAgICAgICAgICAgJ1NhbWVkaScsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIG1vbnRoTmFtZXM6IFtcclxuICAgICAgICAgICAgICAgICdKYW52aWVyJyxcclxuICAgICAgICAgICAgICAgICdGw6l2cmllcicsXHJcbiAgICAgICAgICAgICAgICAnTWFycycsXHJcbiAgICAgICAgICAgICAgICAnQXZyaWwnLFxyXG4gICAgICAgICAgICAgICAgJ01haScsXHJcbiAgICAgICAgICAgICAgICAnSnVpbicsXHJcbiAgICAgICAgICAgICAgICAnSnVpbGxldCcsXHJcbiAgICAgICAgICAgICAgICAnQW/Du3QnLFxyXG4gICAgICAgICAgICAgICAgJ1NlcHRlbWJyZScsXHJcbiAgICAgICAgICAgICAgICAnT2N0b2JyZScsXHJcbiAgICAgICAgICAgICAgICAnTm92ZW1icmUnLFxyXG4gICAgICAgICAgICAgICAgJ0TDqWNlbWJyZScsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGdldCBtb250aE5hbWVzU2hvcnQoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tb250aE5hbWVzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2NhbGU6ICdmci1GUicsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZG9tRWx0Lm1pbiA9IGZpcnN0RGF0ZUF2YWlsYWJsZTtcclxuICAgICAgICBkb21FbHQubWF4ID0gbGFzdERhdGVBdmFpbGFibGU7XHJcblxyXG4gICAgICAgIGRvbUVsdC5hZGRFdmVudExpc3RlbmVyKCdkdWV0T3BlbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjYWNjb3JkaW9uLXBlcnNvbm5hbGlzZWUnKVxyXG4gICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93VmlzaWJsZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb21FbHQuYWRkRXZlbnRMaXN0ZW5lcignZHVldENsb3NlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBmb2N1c0J1dHRvbiA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkb21FbHQuZGF0ZVBpY2tlckJ1dHRvbiA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbUVsdC5zZXRGb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZm9jdXNCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZUZvcm1hdCA9IC9eKFxcZHsyfSlcXC8oXFxkezJ9KVxcLyhcXGR7NH0pJC87XHJcblxyXG4gICAgICAgIGRvbUVsdC5kYXRlQWRhcHRlciA9IHtcclxuICAgICAgICAgICAgcGFyc2UodmFsdWUgPSAnJywgY3JlYXRlRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKGRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlRGF0ZShtYXRjaGVzWzNdLCBtYXRjaGVzWzJdLCBtYXRjaGVzWzFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZm9ybWF0KGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoMTApO1xyXG4gICAgICAgICAgICAgICAgbGV0IG0gPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoMTApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygxMCk7XHJcbiAgICAgICAgICAgICAgICAvLyBkYXlzIGFyZSBub3QgemVyby1pbmRleGVkLCBzbyBwYWQgaWYgbGVzcyB0aGFuIDEwXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZS5nZXREYXRlKCkgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGQgPSBgMCR7ZH1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gbW9udGhzICphcmUqIHplcm8taW5kZXhlZCwgcGFkIGlmIGxlc3MgdGhhbiA5IVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSA8IDkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtID0gYDAke219YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtkfS8ke219LyR7eX1gO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuY2hlY2tEZWZpbmVEYXRlKGVsdCwgdmFsdWUpIHtcclxuICAgIGxldCBzdGFydE9yRW5kID0gJ2RlYnV0JztcclxuICAgIGlmIChlbHQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbmQnKSkge1xyXG4gICAgICAgIHN0YXJ0T3JFbmQgPSAnZmluJztcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNhY2NvcmRpb24tcHJlZGVmaW5pZSBpbnB1dCcpO1xyXG4gICAgZGF0ZUlucHV0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtcHR5RGF0ZVBpY2tlcicpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuXHJcbiAgICAvLyBBVFxyXG4gICAgY29uc3QganNvbkF0ID1cclxuICAgICAgICAne1wibmFtZVwiOlwicmVjaGVyY2hlXycgK1xyXG4gICAgICAgIHN0YXJ0T3JFbmQgK1xyXG4gICAgICAgICdfJyArXHJcbiAgICAgICAgdmFsdWUgK1xyXG4gICAgICAgICdcIixcImNoYXB0ZXIxXCI6XCJhZ2VuZGFfJyArXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEgc3BhbicpLmlubmVyVGV4dCArXHJcbiAgICAgICAgJ1wiLFwiY2hhcHRlcjJcIjogXCJmaWx0cmVcIixcImNoYXB0ZXIzXCI6IFwiZGF0ZVwiLFwibGV2ZWwyXCI6XCI0XCJ9JztcclxuICAgIG5ldyBBdFRhZ3MoKS5hdFRhZ3NDYWxsQ2xpY2soanNvbkF0LCB0aGlzKTtcclxufVxyXG4iLCJpbXBvcnQgZ2VvIGZyb20gJy4uLy4uL2ltYWdlcy9jb21tb24vbWFwLXBpbi0yLWxpbmUuc3ZnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QocmVzdWx0KSB7XHJcbiAgICAvLyBFdmVudCBkYXRlXHJcbiAgICBjb25zdCBldmVudERhdGUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZnItRlInKS5mb3JtYXQoXHJcbiAgICAgICAgbmV3IERhdGUocmVzdWx0LmRhdGUpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIEV2ZW50IHBlcmlvZFxyXG4gICAgZnVuY3Rpb24gdGltZUV2ZW50KCkge1xyXG4gICAgICAgIGxldCBldmVudFRpbWUgPSAnJztcclxuICAgICAgICBpZiAocmVzdWx0LnBlcmlvZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnBlcmlvZCA9PT0gJ21vcm5pbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudFRpbWUgPSAnTWF0aW4nO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5wZXJpb2QgPT09ICdhZnRlcm5vb24nKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudFRpbWUgPSAnQXByw6hzLW1pZGknO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5wZXJpb2QgPT09ICdldmVuaW5nJykge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRUaW1lID0gJ0VuIHNvaXLDqWUnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRUaW1lID0gJ0VuIGpvdXJuw6llJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRhdGV0aW1lICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGV2ZW50VGltZSA9IG5ldyBEYXRlKHJlc3VsdC5kYXRldGltZSkudG9Mb2NhbGVUaW1lU3RyaW5nKCdmci1GUicsIHtcclxuICAgICAgICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV2ZW50VGltZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCdXR0b24gR2VvbG9jXHJcbiAgICBmdW5jdGlvbiBnZW9sb2NCdXR0b24oKSB7XHJcbiAgICAgICAgbGV0IGlzR2VvbG9jID0gJyc7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5sYXRpdHVkZSAmJiByZXN1bHQubG9uZ2l0dWRlKSB7XHJcbiAgICAgICAgICAgIGlzR2VvbG9jID1cclxuICAgICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwiZnItbGluayBmci10ZXh0LS14cyBmci1wLTAgZnItcGItMXYgc2Nyb2xsVG9NYXBcIiBkYXRhLWNsaWNrLWxhdD1cIicgK1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmxhdGl0dWRlICtcclxuICAgICAgICAgICAgICAgICdcIiBkYXRhLWNsaWNrLWxuZz1cIicgK1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmxvbmdpdHVkZSArXHJcbiAgICAgICAgICAgICAgICAnXCIgZGF0YS1jbGljay1hcGk9XCInICtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFsnQGlkJ10gK1xyXG4gICAgICAgICAgICAgICAgJ1wiPjxzcGFuPjxpbWcgc3JjPVwiJyArXHJcbiAgICAgICAgICAgICAgICBnZW8gK1xyXG4gICAgICAgICAgICAgICAgJ1wiIGFsdD1cIlwiIGNsYXNzPVwiZnItbXItMXZcIj4nICtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5sb2NhdGlvbiArXHJcbiAgICAgICAgICAgICAgICAnPC9zcGFuPjwvYnV0dG9uPic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc0dlb2xvYztcclxuICAgIH1cclxuXHJcbiAgICAvLyBUZXh0IGV2ZW50XHJcbiAgICBmdW5jdGlvbiB0ZXh0RXZlbnQoKSB7XHJcbiAgICAgICAgY29uc3QgaXNUZXh0RXZlbnQgPSByZXN1bHQubGlua1RpdGxlID8gcmVzdWx0LmxpbmtUaXRsZSA6IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGlzTGlua0V2ZW50ID0gcmVzdWx0LmxpbmtVcmwgPyBlbmNvZGVVUkkocmVzdWx0LmxpbmtVcmwpIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzQmxvY2sgPSAnJztcclxuICAgICAgICBpZiAoaXNUZXh0RXZlbnQgJiYgaXNMaW5rRXZlbnQpIHtcclxuICAgICAgICAgICAgaXNCbG9jayA9XHJcbiAgICAgICAgICAgICAgICAnPGEgY2xhc3M9XCJmci10ZXh0LS14cyBmci1saW5rLS1jYXJ0IGZyLW10LTJ3IGZyLW1iLTAgZnItcC0zdiBmci10ZXh0LS1ib2xkXCIgaHJlZj1cIicgK1xyXG4gICAgICAgICAgICAgICAgaXNMaW5rRXZlbnQgK1xyXG4gICAgICAgICAgICAgICAgJ1wiIHRhYmluZGV4PVwiMFwiIHRhcmdldD1cIl9ibGFua1wiPicgK1xyXG4gICAgICAgICAgICAgICAgaXNUZXh0RXZlbnQgK1xyXG4gICAgICAgICAgICAgICAgJyA8c3BhbiBjbGFzcz1cImZyLWZpLWFycm93LXJpZ2h0LWxpbmUgZnItZmktLXNtXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPjwvYT4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNCbG9jaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cInRpbGUgZnItZ3JpZC1yb3cgZnItZ3JpZC1yb3ctLWd1dHRlcnNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZnItY29sLTEyIGZyLW1iLTJ2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmci10aWxlIGZyLXRpbGUtLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmci10aWxlX19ib2R5IGZyLW0tM3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZyLXRpbGVfX2RldGFpbCBmci10ZXh0LS14cyBmci1tYi0wIGZyLXRleHQtLWFsdCBmci1tYi0xdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGVcIj4ke2V2ZW50RGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGltZVwiPiR7dGltZUV2ZW50KCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJmci10aWxlX190aXRsZSBmci1tYi0xdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZyLXRpbGVfX2xpbmsgZnItdGV4dC0tc20gZnItbS0wXCI+JHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5ldmVudFR5cGUubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmci10aWxlX19kZXNjIGZyLXRleHQtLXhzIGZyLW10LTAgZnItbWItMXZcIj4ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICR7Z2VvbG9jQnV0dG9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgJHt0ZXh0RXZlbnQoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxufVxyXG4iLCJpbXBvcnQgT3NtIGZyb20gJy4uLy4uL2FwcC9qcy9NYXAvT3NtJztcclxuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcclxuaW1wb3J0IFNsaWRlc2hvdyBmcm9tICcuLi8uLi9hcHAvanMvU2xpZGVzaG93JztcclxuaW1wb3J0IHtTQ1JFRU5fU1dJVENIfSBmcm9tICcuLi8uLi9hcHAvanMvQ29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcChyZXN1bHQsIGF0TGV2ZWwsIGF0U2l0ZTIpIHtcclxuICAgIGNvbnN0IGRvbVBhcmVudCA9ICcjaW5mb01hcFRpbGUnO1xyXG4gICAgY29uc3QgZG9tRWx0ID0gZG9tUGFyZW50ICsgJyAuc2xpZGVyJztcclxuICAgIGNvbnN0IG1hcERvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFwRG9tLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFwJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFwJykuYXBwZW5kQ2hpbGQobWFwRG9tKTtcclxuICAgIGNvbnN0IGluZm9NYXBUaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbmZvTWFwVGlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZm9NYXBUaWxlJyk7XHJcbiAgICBpbmZvTWFwVGlsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kdWxlJywgJ21hcC1jYXJkcycpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hcCcpLmFwcGVuZENoaWxkKGluZm9NYXBUaWxlKTtcclxuICAgIGNvbnN0IG1hcEFnZW5kYSA9IG5ldyBPc20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcCcpKVxyXG4gICAgICAgIC5yZW5kZXJXaXRoUGluKFxyXG4gICAgICAgICAgICByZXN1bHQsXHJcbiAgICAgICAgICAgICdtYXAnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjbHVzdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkb3VibGVDbGlja1pvb206IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkcmFnZ2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNjcm9sbFdoZWVsWm9vbTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGN1c3RvbVBvcGluOiBkb21FbHQsXHJcbiAgICAgICAgICAgICAgICBub2RlUGFyZW50OiBkb21QYXJlbnQsXHJcbiAgICAgICAgICAgICAgICBwb3BpbkZ1bmN0aW9uOiBMaXN0LFxyXG4gICAgICAgICAgICAgICAgY291bnRQaW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtYXhDbHVzdGVyUmFkaXVzOiAxMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgIGF0TGV2ZWwsXHJcbiAgICAgICAgICAgIGF0U2l0ZTJcclxuICAgICAgICApXHJcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZShkb21QYXJlbnQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGludGVyYWN0aXZlKGRvbVBhcmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGVhZmxldC1jb250cm9sLXpvb20gYScpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JvdXBNYXJrZXInKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzT24nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBhcnJheUdlb0NsaWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAnLmxpc3QgLnRpbGVzIC50aWxlLWdyb3VwIGJ1dHRvbjpub3QoLnBpbk1hcEJ1dHRvbiknXHJcbiAgICApO1xyXG4gICAgYXJyYXlHZW9DbGljay5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgTC5NYXAucHJvdG90eXBlLnNldFZpZXdPZmZzZXQgPSBmdW5jdGlvbiAobGF0LCBsbmcsIG9mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9pbnQgPSB0aGlzLnByb2plY3QoW2xhdCwgbG5nXSwgMTMpLnN1YnRyYWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldExhdExuZyA9IHRoaXMudW5wcm9qZWN0KHRhcmdldFBvaW50LCAxMyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRWaWV3KHRhcmdldExhdExuZywgMTMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBtYXBBZ2VuZGEuc2V0Vmlld09mZnNldChcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrLWxhdCcpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2stbG5nJyksXHJcbiAgICAgICAgICAgICAgICBbMCwgLTEwMF0sXHJcbiAgICAgICAgICAgICAgICAxM1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBTbGlkZXNob3coXHJcbiAgICAgICAgICAgICAgICBMaXN0LFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgZG9tRWx0LFxyXG4gICAgICAgICAgICAgICAgZG9tUGFyZW50LFxyXG4gICAgICAgICAgICAgICAgcGFyc2VGbG9hdCh0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1jbGljay1sYXQnKSksXHJcbiAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrLWxuZycpKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrLWFwaScpLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gU0NSRUVOX1NXSVRDSCkge1xyXG4gICAgICAgIC8vIFRvIGFsaWduIGZyb20gdGhlIHN0YXJ0IG9mIHRvcCBjb250ZW50cyBjb2x1bW5cclxuICAgICAgICBjb25zdCBhbGlnblRvcENvbHVtbiA9IDYwO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodEhlYWRlck1lbnUgPVxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uOmZpcnN0LWNoaWxkJykub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGhlaWdodFBpbm5lZCA9XHJcbiAgICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCAtIGhlaWdodEhlYWRlck1lbnUgLSBhbGlnblRvcENvbHVtbjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFwJykuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0UGlubmVkICsgJ3B4JztcclxuICAgICAgICBhZGFwdE1hcChoZWlnaHRQaW5uZWQsIG1hcEFnZW5kYSwgaGVpZ2h0SGVhZGVyTWVudSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYWRhcHRNYXAoaGVpZ2h0UGlubmVkLCBtYXBBZ2VuZGEsIGhlaWdodEhlYWRlck1lbnUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gQ2xpY2sgZmlsdGVyXHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY29sbGFwc2VGaWx0ZXInKVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvbUVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb246bnRoLWNoaWxkKDIpJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlckNoZWNrID0gZG9tRWx0LmNsYXNzTGlzdC50b2dnbGUoJ2ZpbHRlckhpZGRlbicpO1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyQ2hlY2spIHtcclxuICAgICAgICAgICAgICAgIGRvbUVsdC5jbGFzc0xpc3QuYWRkKCdmaWx0ZXJIaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgIGRvbUVsdC5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXJWaXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXBBZ2VuZGEuaW52YWxpZGF0ZVNpemUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb21FbHQuY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVySGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICBkb21FbHQuY2xhc3NMaXN0LmFkZCgnZmlsdGVyVmlzaWJsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludGVyYWN0aXZlKGRvbVBhcmVudCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihkb21QYXJlbnQpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyb3VwTWFya2VyJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNPbicpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkYXB0TWFwKGhlaWdodFBpbm5lZCwgbWFwQWdlbmRhLCBoZWlnaHRIZWFkZXJNZW51KSB7XHJcbiAgICAvLyBUbyBhdm9pZCBlbmQgb2YgbWFwIG91dHNpZGUgb2YgdGhlIHNjcmVlbiBoZWlnaHQgd2hlbiBzY3JvbGwgKyBwYWRkaW5nIHRvIGhhdmUgc3BhY2UgYmV0d2VlbiBmb290ZXIuXHJcbiAgICBjb25zdCBoZWlnaHRNYXBMaW1pdCA9ICc5NHZoJztcclxuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIDwgaGVpZ2h0SGVhZGVyTWVudSkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXAnKS5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICAgICAgICBoZWlnaHRQaW5uZWQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICsgJ3B4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hcCcpLnN0eWxlLmhlaWdodCA9IGhlaWdodE1hcExpbWl0O1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWFwQWdlbmRhLmludmFsaWRhdGVTaXplKCk7XHJcbiAgICB9LCAyMDApO1xyXG59XHJcbiIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHtBUElfQUdFTkRBX1VSTCwgQVBJX0FHRU5EQV9DVVJSRU5UX1VSTH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbmQoY2FsbEJhY2ssIHNjcm9sbCwgc3RhcnREYXRlLCBlbmREYXRlKSB7XHJcbiAgICBsZXQgcGFyYW0gPSAnJztcclxuICAgIGxldCBhcGlBZ2VuZGFDYWxsID0gQVBJX0FHRU5EQV9VUkw7XHJcbiAgICBjb25zdCBwaWNrRGF0ZVN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XHJcbiAgICBjb25zdCBwaWNrRGF0ZUVuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmQnKTtcclxuICAgIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZW50cy10YWdzIC5mci10YWcuYWN0aXZlJyk7XHJcbiAgICBjb25zdCB3ZWVrRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjd2VlaycpO1xyXG5cclxuICAgIC8vIENoZWNrIGRhdGVwaWNrZXIgaW5wdXQgZGF0ZVxyXG4gICAgaWYgKHBpY2tEYXRlU3RhcnQudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgcGFyYW0gPSBjb25jYXRXZWVrKHBpY2tEYXRlU3RhcnQudmFsdWUsIG51bGwsIHBhcmFtKTtcclxuICAgIH1cclxuICAgIGlmIChwaWNrRGF0ZUVuZC52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgICBwYXJhbSA9IGNvbmNhdFdlZWsobnVsbCwgcGlja0RhdGVFbmQudmFsdWUsIHBhcmFtKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGlja0RhdGVTdGFydC52YWx1ZSA9PT0gJycgJiYgcGlja0RhdGVFbmQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgZGVmaW5lIGlucHV0IGRhdGVcclxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAnI2FjY29yZGlvbi1wcmVkZWZpbmllIGlucHV0J1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgZGF0ZUlucHV0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uY2hlY2tlZCAmJiAhd2Vla0RvbS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbSA9IGNvbmNhdFdlZWsoaXRlbS5kYXRhc2V0LnN0YXJ0LCBpdGVtLmRhdGFzZXQuZW5kLCBwYXJhbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAod2Vla0RvbS5jaGVja2VkICYmIGV2ZW50Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBhcGlBZ2VuZGFDYWxsID0gQVBJX0FHRU5EQV9DVVJSRU5UX1VSTDtcclxuICAgICAgICB9IGVsc2UgaWYgKHdlZWtEb20uY2hlY2tlZCAmJiBldmVudC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHBhcmFtID0gY29uY2F0V2VlayhcclxuICAgICAgICAgICAgICAgIHdlZWtEb20uZGF0YXNldC5zdGFydCxcclxuICAgICAgICAgICAgICAgIHdlZWtEb20uZGF0YXNldC5lbmQsXHJcbiAgICAgICAgICAgICAgICBwYXJhbVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBFdmVudFxyXG4gICAgaWYgKGV2ZW50Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBldmVudC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBwYXJhbSA9IGFwcGVuZFVSTChwYXJhbSwgJ2V2ZW50VHlwZVtdJywgY2hpbGQuZGF0YXNldC5hcGkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2FsbEJhY2soYXBpQWdlbmRhQ2FsbCArIHBhcmFtLCBzY3JvbGwsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbmNhdFdlZWsoYWZ0ZXJEYXRlLCBiZWZvcmVEYXRlLCBwYXJhbSkge1xyXG4gICAgaWYgKGFmdGVyRGF0ZSkge1xyXG4gICAgICAgIC8vIHN1YnN0cmFjdCAxIGRheSBmb3IgVVRDIG1hdGNoaW5nXHJcbiAgICAgICAgcGFyYW0gPSBhcHBlbmRVUkwoXHJcbiAgICAgICAgICAgIHBhcmFtLFxyXG4gICAgICAgICAgICAnZGF0ZVthZnRlcl0nLFxyXG4gICAgICAgICAgICBtb21lbnQoYWZ0ZXJEYXRlKS5zdWJ0cmFjdCgxLCAnZGF5cycpLmZvcm1hdCgnWVlZWS9NTS9ERCcpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmIChiZWZvcmVEYXRlKSB7XHJcbiAgICAgICAgY29uc3QgcmVnZXhTbGFzaCA9IC8tL2dpO1xyXG4gICAgICAgIHBhcmFtID0gYXBwZW5kVVJMKFxyXG4gICAgICAgICAgICBwYXJhbSxcclxuICAgICAgICAgICAgJ2RhdGVbYmVmb3JlXScsXHJcbiAgICAgICAgICAgIGJlZm9yZURhdGUucmVwbGFjZShyZWdleFNsYXNoLCAnLycpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJhbTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kVVJMKHVybCwga2V5LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB1cmwgK1xyXG4gICAgICAgICh1cmwuaW5kZXhPZignPycpID49IDAgPyAnJicgOiAnPycpICtcclxuICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArXHJcbiAgICAgICAgJz0nICtcclxuICAgICAgICBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpXHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBBcGkgZnJvbSAnLi4vLi4vYXBwL2pzL0FwaSc7XHJcbmltcG9ydCB7QVBJX0FHRU5EQV9VUkx9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2ZyJztcclxuaW1wb3J0IEF0VGFncyBmcm9tICcuLi8uLi9hcHAvanMvQXRUYWdzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlZWtseShkYXRhTGlzdCwgZGF0ZVN0YXJ0LCBkYXRlRW5kLCBjc3MpIHtcclxuICAgIC8vIExhc3Qgd2Vla1xyXG4gICAgLy8gR2V0IG1vbmRheSBvZiB0aGUgbGFzdCB3ZWVrIGluIHJhdyBmb3JtYXQgZm9yIE1vbWVudCBtYW5pcHVsYXRpbmdcclxuICAgIGNvbnN0IHByZXZpb3VzTW9uZGF5ID0gbW9tZW50KGRhdGVTdGFydClcclxuICAgICAgICAuc3VidHJhY3QoMSwgJ3dlZWtzJylcclxuICAgICAgICAuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAvLyBGb3JtYXRlIHRoZSBkYXRlIGludG8gQVBJIHBhdHRlcm5cclxuICAgIGNvbnN0IHByZXZpb3VzTW9uZGF5Rm9ybWF0ID0gbW9tZW50KHByZXZpb3VzTW9uZGF5KS5mb3JtYXQoJ1lZWVkvTU0vREQnKTtcclxuICAgIC8vIEdldCBzdW5kYXkgb2YgdGhlIGxhc3Qgd2VlayAoYWRkIDYgZGF5cyBmcm9tIHRoZSBsYXN0IG1vbmRheSlcclxuICAgIGNvbnN0IHByZXZpb3VzU3VuZGF5ID0gbW9tZW50KHByZXZpb3VzTW9uZGF5KVxyXG4gICAgICAgIC5hZGQoNywgJ2RheXMnKVxyXG4gICAgICAgIC5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgIGNvbnN0IHByZXZpb3VzU3VuZGF5Rm9ybWF0ID0gbW9tZW50KHByZXZpb3VzU3VuZGF5KS5mb3JtYXQoJ1lZWVkvTU0vREQnKTtcclxuXHJcbiAgICAvLyBBUEkgY2FsbCBwcmV2IHdlZWtcclxuICAgIGNvbnN0IHByZXZpb3VzV2VlayA9IGVuY29kZVVSSShcclxuICAgICAgICBBUElfQUdFTkRBX1VSTCArXHJcbiAgICAgICAgICAgICc/ZGF0ZVthZnRlcl09JyArXHJcbiAgICAgICAgICAgIHByZXZpb3VzTW9uZGF5Rm9ybWF0ICtcclxuICAgICAgICAgICAgJyZkYXRlW2JlZm9yZV09JyArXHJcbiAgICAgICAgICAgIHByZXZpb3VzU3VuZGF5Rm9ybWF0ICtcclxuICAgICAgICAgICAgJyZwYWdpbmF0aW9uPWZhbHNlJ1xyXG4gICAgKTtcclxuXHJcbiAgICAvLyBOZXh0IHdlZWtcclxuICAgIC8vIEdldCBtb25kYXkgb2YgdGhlIG5leHQgd2VlayBpbiByYXcgZm9ybWF0IGZvciBNb21lbnQgbWFuaXB1bGF0aW5nXHJcbiAgICBjb25zdCBuZXh0TW9uZGF5ID0gbW9tZW50KGRhdGVFbmQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgLy8gRm9ybWF0ZSB0aGUgZGF0ZSBpbnRvIEFQSSBwYXR0ZXJuXHJcbiAgICBjb25zdCBuZXh0TW9uZGF5Rm9ybWF0ID0gbW9tZW50KG5leHRNb25kYXkpLmZvcm1hdCgnWVlZWS9NTS9ERCcpO1xyXG4gICAgLy8gR2V0IHN1bmRheSBvZiB0aGUgbmV4dCB3ZWVrIChhZGQgNiBkYXlzIGZyb20gdGhlIG5leHQgbW9uZGF5KVxyXG4gICAgY29uc3QgbmV4dFN1bmRheSA9IG1vbWVudChuZXh0TW9uZGF5KS5hZGQoNywgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgIGNvbnN0IG5leHRTdW5kYXlGb3JtYXQgPSBtb21lbnQobmV4dFN1bmRheSkuZm9ybWF0KCdZWVlZL01NL0REJyk7XHJcblxyXG4gICAgLy8gQVBJIGNhbGwgbmV4dCB3ZWVrXHJcbiAgICBjb25zdCBuZXh0V2VlayA9IGVuY29kZVVSSShcclxuICAgICAgICBBUElfQUdFTkRBX1VSTCArXHJcbiAgICAgICAgICAgICc/ZGF0ZVthZnRlcl09JyArXHJcbiAgICAgICAgICAgIG5leHRNb25kYXlGb3JtYXQgK1xyXG4gICAgICAgICAgICAnJmRhdGVbYmVmb3JlXT0nICtcclxuICAgICAgICAgICAgbmV4dFN1bmRheUZvcm1hdCArXHJcbiAgICAgICAgICAgICcmcGFnaW5hdGlvbj1mYWxzZSdcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYXJyYXlXZWVrID0gW3ByZXZpb3VzV2VlaywgbmV4dFdlZWtdO1xyXG4gICAgYXBpQ2FsbChcclxuICAgICAgICBhcnJheVdlZWtbMF0sXHJcbiAgICAgICAgcHJldmlvdXNNb25kYXksXHJcbiAgICAgICAgcHJldmlvdXNTdW5kYXksXHJcbiAgICAgICAgZGF0YUxpc3QsXHJcbiAgICAgICAgJ1NlbWFpbmUgcHLDqWPDqWRlbnRlJyxcclxuICAgICAgICAnbGVmdCcsXHJcbiAgICAgICAgJ3ByZXYnLFxyXG4gICAgICAgIGNzc1xyXG4gICAgKTtcclxuICAgIGFwaUNhbGwoXHJcbiAgICAgICAgYXJyYXlXZWVrWzFdLFxyXG4gICAgICAgIG5leHRNb25kYXksXHJcbiAgICAgICAgbmV4dFN1bmRheSxcclxuICAgICAgICBkYXRhTGlzdCxcclxuICAgICAgICAnU2VtYWluZSBzdWl2YW50ZScsXHJcbiAgICAgICAgJ3JpZ2h0JyxcclxuICAgICAgICAnbmV4dCcsXHJcbiAgICAgICAgY3NzXHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcGlDYWxsKFxyXG4gICAgYXBpVVJMLFxyXG4gICAgcHJldk5leHRNb25kYXksXHJcbiAgICBwcmV2TmV4dFN1bmRheSxcclxuICAgIGRhdGFMaXN0LFxyXG4gICAgbGFiZWwsXHJcbiAgICBkaXJlY3Rpb24sXHJcbiAgICBhdHRyaWJ1dGUsXHJcbiAgICBjc3NcclxuKSB7XHJcbiAgICBuZXcgQXBpKCkuZ2V0KGFwaVVSTCkudGhlbigoZGF0YUNvbnRlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnd2Vlay0nICsgZGlyZWN0aW9uKTtcclxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZnItcGFnaW5hdGlvbl9fbGluaycsICdmci1teS0ydycsICdmci10ZXh0LS14cycpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBsYWJlbDtcclxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnZnItZmktYXJyb3ctJyArIGRpcmVjdGlvbiArICctcy1saW5lJywgJ2ZyLWZpLS1zbScpO1xyXG4gICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICAgICAgaWYgKGRhdGFDb250ZW50WydoeWRyYTp0b3RhbEl0ZW1zJ10gPiAwKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtd2Vlay0nICsgYXR0cmlidXRlLCBhcGlVUkwpO1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhTGlzdChhcGlVUkwsIHRydWUsIHByZXZOZXh0TW9uZGF5LCBwcmV2TmV4dFN1bmRheSk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICcuY29sb3JUaXRsZTpmaXJzdC1jaGlsZCAudGV4dCdcclxuICAgICAgICAgICAgICAgICkuaW5uZXJUZXh0ID1cclxuICAgICAgICAgICAgICAgICAgICBtb21lbnQocHJldk5leHRNb25kYXkpLmFkZCgxLCAnZGF5cycpLmZvcm1hdCgnRCBNTU0nKSArXHJcbiAgICAgICAgICAgICAgICAgICAgJyAtICcgK1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbWVudChwcmV2TmV4dFN1bmRheSkuZm9ybWF0KCdEIE1NTScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QganNvbkF0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXB0ZXIxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYWdlbmRhXycgKyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMSBzcGFuJykuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXB0ZXIyOiAncGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwyOiAnNCcsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbmV3IEF0VGFncygpLmF0VGFnc0NhbGxDbGljayhKU09OLnN0cmluZ2lmeShqc29uQXQpLCB0aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ3ByZXYnKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5wcmVwZW5kKHNwYW4pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNzcykuY2xhc3NMaXN0LmFkZCgnd2Vla0xlZnQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY3NzKS5jbGFzc0xpc3QuYWRkKCd3ZWVrUmlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNzcykuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29weSgpIHtcclxuICAgIC8vIENvcHkgVVJMIGJ1dHRvbiBmdW5jdGlvbiA6IGNyZWF0ZSwgZm9jdXMsIHNlbGVjdCwgY29weSBhbmQgZGVzdHJveVxyXG4gICAgY29uc3QgY29weSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3B5LXVybCcpO1xyXG4gICAgaWYgKGNvcHkpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgICAgICBpbnB1dC5pZCA9ICdjb3B5SW5wdXQnO1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgY29weS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29weS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29weUlucHV0Jyk7XHJcbiAgICAgICAgICAgIGlucHV0VmFsdWUudmFsdWUgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICAgICAgaW5wdXRWYWx1ZS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuICAgICAgICAgICAgY29weS5yZW1vdmVDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlUGFyZW50KGN1cnJlbnRTZWxlY3RvciwgcGFyZW50U2VsZWN0b3IsIGFjdGl2ZSA9IHRydWUpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnRTZWxlY3Rvci5jbG9zZXN0KHBhcmVudFNlbGVjdG9yKTtcclxuICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICBhY3RpdmVcclxuICAgICAgICAgICAgPyBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICAgICAgOiBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRVUkwodXJsLCBrZXksIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHVybCArXHJcbiAgICAgICAgKHVybC5pbmRleE9mKCc/JykgPj0gMCA/ICcmJyA6ICc/JykgK1xyXG4gICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICtcclxuICAgICAgICAnPScgK1xyXG4gICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSlcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlVVJMKHVybCwga2V5LCB2YWx1ZSkge1xyXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwpO1xyXG4gICAgc2VhcmNoUGFyYW1zLmRlbGV0ZShrZXkpO1xyXG4gICAgc2VhcmNoUGFyYW1zLnNldChrZXksIHZhbHVlKTtcclxuICAgIHJldHVybiBgPyR7c2VhcmNoUGFyYW1zLnRvU3RyaW5nKCl9YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlYXJjaFBhcmFtcygpIHtcclxuICAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0VXJsUGFyYW0oa2V5LCB2YWx1ZSkge1xyXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gZ2V0U2VhcmNoUGFyYW1zKCk7XHJcbiAgICBzZWFyY2hQYXJhbXMuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgY29uc3QgbmV3dXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaG9zdCArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxyXG4gICAgfT8ke3NlYXJjaFBhcmFtcy50b1N0cmluZygpfWA7XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe3BhdGg6IG5ld3VybH0sICcnLCBuZXd1cmwpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVXJsUGFyYW1ldGVyKHBhcmFtS2V5KSB7XHJcbiAgICBjb25zdCBjdXJyZW50VXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGN1cnJlbnRVcmwpO1xyXG4gICAgdXJsLnNlYXJjaFBhcmFtcy5kZWxldGUocGFyYW1LZXkpO1xyXG4gICAgY29uc3QgbmV3VXJsID0gdXJsLmhyZWY7XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe3BhdGg6IG5ld1VybH0sICcnLCBuZXdVcmwpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tib3hQYXJhbWV0ZXIocGFyYW1LZXksIGVsdCkge1xyXG4gICAgY29uc3QgY3VycmVudFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChjdXJyZW50VXJsKTtcclxuICAgIC8vIEVtcHR5IGFsbCB0aGUga2V5cyBzZXQgYmVmb3JlIGFwcGx5IG5ldyBvbmVzXHJcbiAgICB1cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZShwYXJhbUtleSk7XHJcbiAgICBmb3IgKGNvbnN0IHJlc3VsdFZhbHVlIG9mIGVsdCkge1xyXG4gICAgICAgIGNvbnN0IHNwbGl0RG9jRGF0YSA9IHJlc3VsdFZhbHVlLmRhdGFzZXQuZG9jdW1lbnQuc3BsaXQoJz0nKTtcclxuICAgICAgICBpZiAocmVzdWx0VmFsdWUuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChzcGxpdERvY0RhdGEuc2hpZnQoKSwgc3BsaXREb2NEYXRhLnBvcCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdVcmwgPSB1cmwuaHJlZjtcclxuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7cGF0aDogbmV3VXJsfSwgJycsIG5ld1VybCk7XHJcbn1cclxuIiwiaW1wb3J0IHthY3RpdmF0ZVBhcmVudH0gZnJvbSAnLi9GaWx0ZXJzJztcclxuaW1wb3J0IEF0VGFncyBmcm9tICcuL0F0VGFncyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcm91cEJ1dHRvbnMocmVzdWx0LCB0YWcsIGxldmVsQVQsIHR5cGVBVCwgYXRTaXRlMikge1xyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgdWwuY2xhc3NMaXN0LmFkZCgnZnItdGFncy1ncm91cCcsIHRhZyk7XHJcbiAgICByZXN1bHQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcclxuICAgICAgICAgICAgJ2ZyLXRhZycsXHJcbiAgICAgICAgICAgICdmci10YWctLXNtJyxcclxuICAgICAgICAgICAgJ2ZyLXRoZW1hdGljJyxcclxuICAgICAgICAgICAgJ2ZyLW1yLTJ3JyxcclxuICAgICAgICAgICAgJ2ZyLW1iLTJ3JyxcclxuICAgICAgICAgICAgJ2ZyLXB4LTN2J1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1hcGknLCBpdGVtWydAaWQnXSk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IGl0ZW0ubmFtZTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGFnICsgJyAuYWN0aXZlJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uRXJhc2UucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZhdGVQYXJlbnQoZXZlbnQuY3VycmVudFRhcmdldCwgJy5mci1hY2NvcmRpb24nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkVyYXNlLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZVBhcmVudChldmVudC5jdXJyZW50VGFyZ2V0LCAnLmZyLWFjY29yZGlvbicsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBVCBUYWcgQ2FsbFxyXG4gICAgICAgICAgICAgICAgY29uc3QganNvbkF0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZWNoZXJjaGVfJyArIGV2ZW50LmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXB0ZXIxOiBhdFNpdGUyLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXB0ZXIyOiAnZmlsdHJlJyxcclxuICAgICAgICAgICAgICAgICAgICBjaGFwdGVyMzogdHlwZUFULFxyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsMjogbGV2ZWxBVCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBuZXcgQXRUYWdzKCkuYXRUYWdzQ2FsbENsaWNrKEpTT04uc3RyaW5naWZ5KGpzb25BdCksIHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBsaUVyYXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IGJ1dHRvbkVyYXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25FcmFzZS5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICdmci1idG4nLFxyXG4gICAgICAgICdmci1idG4tLXNtJyxcclxuICAgICAgICAnZnItZmktY2xvc2UtY2lyY2xlLWxpbmUnLFxyXG4gICAgICAgICdmci1idG4tLWljb24tcmlnaHQnLFxyXG4gICAgICAgICdmci1idG4tLXRlcnRpYXJ5JyxcclxuICAgICAgICAnZnItdGhlbWF0aWMnLFxyXG4gICAgICAgICdmci1teS0zdicsXHJcbiAgICAgICAgJ3Jlc2V0QnV0dG9uJ1xyXG4gICAgKTtcclxuICAgIGJ1dHRvbkVyYXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0YWcgKyAnIC5hY3RpdmUnKTtcclxuICAgICAgICBpZiAoYnV0dG9uQWN0aXZlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYnV0dG9uQWN0aXZlLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlUGFyZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQsICcuZnItYWNjb3JkaW9uJywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBVCBUYWcgQ2FsbFxyXG4gICAgICAgIGNvbnN0IGpzb25BdCA9IHtcclxuICAgICAgICAgICAgbmFtZTogJ3JlY2hlcmNoZV9yZWluaXRpYWxpc2VyJyxcclxuICAgICAgICAgICAgY2hhcHRlcjE6IGF0U2l0ZTIsXHJcbiAgICAgICAgICAgIGNoYXB0ZXIyOiAnZmlsdHJlJyxcclxuICAgICAgICAgICAgY2hhcHRlcjM6IHR5cGVBVCxcclxuICAgICAgICAgICAgbGV2ZWwyOiBsZXZlbEFULFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbmV3IEF0VGFncygpLmF0VGFnc0NhbGxDbGljayhKU09OLnN0cmluZ2lmeShqc29uQXQpLCB0aGlzKTtcclxuICAgIH0pO1xyXG4gICAgYnV0dG9uRXJhc2Uuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcclxuICAgIGJ1dHRvbkVyYXNlLmlubmVyVGV4dCA9ICdSw6lpbml0aWFsaXNlcic7XHJcbiAgICBsaUVyYXNlLmFwcGVuZENoaWxkKGJ1dHRvbkVyYXNlKTtcclxuICAgIHVsLmFwcGVuZENoaWxkKGxpRXJhc2UpO1xyXG5cclxuICAgIHJldHVybiB1bDtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmcoZGF0YUxpc3RNYXAsIGRhdGFDb250ZW50LCBzaXplLCBsYWJlbCwgY3NzKSB7XHJcbiAgICAvLyBQcmV2IGJ1dHRvblxyXG4gICAgY3JlYXRlTmV4dFByZXZCdXR0b24oXHJcbiAgICAgICAgZGF0YUxpc3RNYXAsXHJcbiAgICAgICAgZGF0YUNvbnRlbnQsXHJcbiAgICAgICAgY3NzLFxyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHNpemUsXHJcbiAgICAgICAgJ2xlZnQnLFxyXG4gICAgICAgICdwcsOpY8OpZGVudGUnLFxyXG4gICAgICAgICdwcmV2aW91cydcclxuICAgICk7XHJcblxyXG4gICAgLy8gUGFnZXJcclxuICAgIGNyZWF0ZVBhZ2VyKGRhdGFMaXN0TWFwLCBkYXRhQ29udGVudCwgY3NzKTtcclxuXHJcbiAgICAvLyBOZXh0IGJ1dHRvblxyXG4gICAgY3JlYXRlTmV4dFByZXZCdXR0b24oXHJcbiAgICAgICAgZGF0YUxpc3RNYXAsXHJcbiAgICAgICAgZGF0YUNvbnRlbnQsXHJcbiAgICAgICAgY3NzLFxyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHNpemUsXHJcbiAgICAgICAgJ3JpZ2h0JyxcclxuICAgICAgICAnc3VpdmFudGUnLFxyXG4gICAgICAgICduZXh0J1xyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGFnZXIoZGF0YUxpc3RNYXAsIGRhdGFDb250ZW50LCBjc3MpIHtcclxuICAgIGNvbnN0IGxhc3RQYWdlciA9IHBhcnNlSW50KFxyXG4gICAgICAgIGRhdGFDb250ZW50WydoeWRyYTp2aWV3J11bJ2h5ZHJhOmxhc3QnXS5zcGxpdCgnPScpLnBvcCgpXHJcbiAgICApO1xyXG4gICAgY29uc3QgY3VycmVudFBhZ2VyID0gcGFyc2VJbnQoXHJcbiAgICAgICAgZGF0YUNvbnRlbnRbJ2h5ZHJhOnZpZXcnXVsnQGlkJ10uc3BsaXQoJz0nKS5wb3AoKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGFwaUNhbGwgPSBkYXRhQ29udGVudFsnaHlkcmE6dmlldyddWydAaWQnXS5zbGljZShcclxuICAgICAgICAwLFxyXG4gICAgICAgIGRhdGFDb250ZW50WydoeWRyYTp2aWV3J11bJ0BpZCddLmxhc3RJbmRleE9mKCc9JykgKyAxXHJcbiAgICApO1xyXG4gICAgZ2V0UGFnZUxpc3QobGFzdFBhZ2VyLCBjdXJyZW50UGFnZXIsIDUpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZyLXBhZ2luYXRpb25fX2xpbmsnKTtcclxuICAgICAgICBpZiAoaXRlbSAhPT0gMCkge1xyXG4gICAgICAgICAgICBidXR0b24udGl0bGUgPSAnUGFnZSAnICsgaXRlbTtcclxuICAgICAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IGl0ZW07XHJcbiAgICAgICAgICAgIGJ1dHRvbi5kYXRhc2V0LnBhZ2UgPSBhcGlDYWxsICsgaXRlbTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gJy4uLic7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZXIgPT09IGl0ZW0pIHtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JywgJ3BhZ2UnKTtcclxuICAgICAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBjbGlja0J1dHRvbigpIHtcclxuICAgICAgICAgICAgICAgIGRhdGFMaXN0TWFwKGFwaUNhbGwgKyBpdGVtLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjc3MpLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYWdlTGlzdCh0b3RhbFBhZ2VzLCBwYWdlLCBtYXhMZW5ndGgpIHtcclxuICAgIGNvbnN0IHNpZGVXaWR0aCA9IG1heExlbmd0aCA8IDkgPyAxIDogMjtcclxuICAgIGNvbnN0IGxlZnRXaWR0aCA9IChtYXhMZW5ndGggLSBzaWRlV2lkdGggKiAyIC0gMykgPj4gMTtcclxuICAgIGNvbnN0IHJpZ2h0V2lkdGggPSAobWF4TGVuZ3RoIC0gc2lkZVdpZHRoICogMiAtIDIpID4+IDE7XHJcbiAgICBpZiAodG90YWxQYWdlcyA8PSBtYXhMZW5ndGgpIHtcclxuICAgICAgICAvLyBubyBicmVha3MgaW4gbGlzdFxyXG4gICAgICAgIHJldHVybiByYW5nZSgxLCB0b3RhbFBhZ2VzKTtcclxuICAgIH1cclxuICAgIGlmIChwYWdlIDw9IG1heExlbmd0aCAtIHNpZGVXaWR0aCAtIDEgLSByaWdodFdpZHRoKSB7XHJcbiAgICAgICAgLy8gbm8gYnJlYWsgb24gbGVmdCBvZiBwYWdlXHJcbiAgICAgICAgcmV0dXJuIHJhbmdlKDEsIG1heExlbmd0aCAtIHNpZGVXaWR0aCAtIDEpLmNvbmNhdChcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgcmFuZ2UodG90YWxQYWdlcyAtIHNpZGVXaWR0aCArIDEsIHRvdGFsUGFnZXMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmIChwYWdlID49IHRvdGFsUGFnZXMgLSBzaWRlV2lkdGggLSAxIC0gcmlnaHRXaWR0aCkge1xyXG4gICAgICAgIC8vIG5vIGJyZWFrIG9uIHJpZ2h0IG9mIHBhZ2VcclxuICAgICAgICByZXR1cm4gcmFuZ2UoMSwgc2lkZVdpZHRoKS5jb25jYXQoXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIHJhbmdlKFxyXG4gICAgICAgICAgICAgICAgdG90YWxQYWdlcyAtIHNpZGVXaWR0aCAtIDEgLSByaWdodFdpZHRoIC0gbGVmdFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgdG90YWxQYWdlc1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIC8vIEJyZWFrcyBvbiBib3RoIHNpZGVzXHJcbiAgICByZXR1cm4gcmFuZ2UoMSwgc2lkZVdpZHRoKS5jb25jYXQoXHJcbiAgICAgICAgMCxcclxuICAgICAgICByYW5nZShwYWdlIC0gbGVmdFdpZHRoLCBwYWdlICsgcmlnaHRXaWR0aCksXHJcbiAgICAgICAgMCxcclxuICAgICAgICByYW5nZSh0b3RhbFBhZ2VzIC0gc2lkZVdpZHRoICsgMSwgdG90YWxQYWdlcylcclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBlbmQpIHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKEFycmF5KGVuZCAtIHN0YXJ0ICsgMSksIChfLCBpKSA9PiBpICsgc3RhcnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXh0UHJldkJ1dHRvbihcclxuICAgIGRhdGFMaXN0TWFwLFxyXG4gICAgZGF0YUNvbnRlbnQsXHJcbiAgICBjc3MsXHJcbiAgICBsYWJlbCxcclxuICAgIHNpemUsXHJcbiAgICBhcnJvd0RpcmVjdGlvbixcclxuICAgIHdvcmRpbmdEaXJlY3Rpb24sXHJcbiAgICBkYXRhRGlyZWN0aW9uXHJcbikge1xyXG4gICAgLy8gQnV0dG9uXHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICdmci1wYWdpbmF0aW9uX19saW5rJyxcclxuICAgICAgICAnZnItdGV4dC0tJyArIHNpemUsXHJcbiAgICAgICAgJ2ZyLXBhZ2luYXRpb25fX2xpbmstLWxnLWxhYmVsJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHNwYW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgc3BhblRleHQuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xyXG4gICAgc3BhblRleHQuaW5uZXJUZXh0ID0gbGFiZWwgKyAnICcgKyB3b3JkaW5nRGlyZWN0aW9uO1xyXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW5UZXh0KTtcclxuICAgIGlmIChkYXRhQ29udGVudFsnaHlkcmE6dmlldyddWydoeWRyYTonICsgZGF0YURpcmVjdGlvbiArICcnXSkge1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICdkYXRhLXdlZWstJyArIGRhdGFEaXJlY3Rpb24sXHJcbiAgICAgICAgICAgIGRhdGFDb250ZW50WydoeWRyYTp2aWV3J11bJ2h5ZHJhOicgKyBkYXRhRGlyZWN0aW9uICsgJyddXHJcbiAgICAgICAgKTtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRhdGFMaXN0TWFwKFxyXG4gICAgICAgICAgICAgICAgZGF0YUNvbnRlbnRbJ2h5ZHJhOnZpZXcnXVsnaHlkcmE6JyArIGRhdGFEaXJlY3Rpb24gKyAnJ10sXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzcGFuQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBzcGFuQXJyb3cuY2xhc3NMaXN0LmFkZChcclxuICAgICAgICAnZnItZmktYXJyb3ctJyArIGFycm93RGlyZWN0aW9uICsgJy1zLWxpbmUnLFxyXG4gICAgICAgIHNpemUgPT09ICd4cycgPyAnZnItZmktLXNtJyA6ICdmci1maS0tJyArIHNpemVcclxuICAgICk7XHJcbiAgICBzcGFuQXJyb3cuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICBpZiAoYXJyb3dEaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xyXG4gICAgICAgIGJ1dHRvbi5wcmVwZW5kKHNwYW5BcnJvdyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuQXJyb3cpO1xyXG4gICAgfVxyXG4gICAgbGkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY3NzKS5hcHBlbmRDaGlsZChsaSk7XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkFHRU5EQV9VUkwiLCJBR0VOREFfQ1VSUkVOVF9VUkwiLCJBR0VOREFfUEFHRVIiLCJBUElfQUdFTkRBX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJBUElfUFJFRklYIiwiQVBJX0FHRU5EQV9DVVJSRU5UX1VSTCIsIkVWRU5UU19VUkwiLCJNRURJQV9VUkwiLCJVUkxfTUVESUEiLCJDU1ZfVVJMIiwiU0NSRUVOX1NXSVRDSCIsIkFwaSIsIlBhZ2luZyIsIkNvcHkiLCJHcm91cEJ1dHRvbnMiLCJMaXN0IiwiTWFwIiwiRGF0ZSIsIlNlbmQiLCJXZWVrbHkiLCJEYXRlcGlja2VyIiwibW9tZW50IiwiQXRUYWdzIiwibGV2ZWxBVCIsImF0U2l0ZTIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lclRleHQiLCJkYXRhTGlzdCIsImRhdGFVUkwiLCJzY3JvbGxQYWdlIiwicHJldldlZWsiLCJuZXh0V2VlayIsImdldCIsInRoZW4iLCJkYXRhQ29udGVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJsZW5ndGgiLCJkYXRlIiwidW5kZWZpbmVkIiwiZGF0YXNldCIsImVuZCIsIkFUQ2xpY2siLCJnZXREb21BcnJheSIsImRlc3Ryb3lEb20iLCJmb3JFYWNoIiwiaXRlbSIsImluc2VydEFkamFjZW50SFRNTCIsIndlZWtseSIsInBkZlVybCIsInBkZkRpdiIsImZvcm1hdEJ5dGVzIiwicGRmU2l6ZSIsImhyZWYiLCJjbGFzc0xpc3QiLCJhZGQiLCJjaGVja2VkIiwicXVlcnlTZWxlY3RvckFsbCIsImF0TGlzdFJlbG9hZCIsImRhdGFNYXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibW9iaWxlU2Nyb2xsVG9Ub3AiLCJpbm5lcldpZHRoIiwiY3N2RGl2IiwiYXJyYXlEZXN0cm95IiwiaW5uZXJIVE1MIiwiZGF0YUxpc3RFdmVudCIsImFwcGVuZENoaWxkIiwiYnl0ZXMiLCJkZWNpbWFscyIsImsiLCJkbSIsInNpemVzIiwiaSIsIk1hdGgiLCJmbG9vciIsImxvZyIsInBhcnNlRmxvYXQiLCJwb3ciLCJ0b0ZpeGVkIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwicmVtb3ZlIiwicGFzc2l2ZSIsImNsaWNrTWFwVG9Ub3AiLCJlbCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlIiwidGFyZ2V0IiwidG9nZ2xlIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIiwiY29sb3JUaXRsZSIsImNsb3NlRGl2IiwiY3JlYXRlRWxlbWVudCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsIm9mZnNldEhlaWdodCIsInJlbW92ZUNoaWxkIiwidmFsaWRhdGVCdXR0b24iLCJwYXJlbnRFbGVtZW50IiwiY2xpY2siLCJkYXRlSW5wdXQiLCJkYXRlUmFuZ2UiLCJzdGFydERhdGVWYWxpZCIsImVuZERhdGVWYWxpZCIsImlucHV0V2VlayIsImlucHV0TW9udGgiLCJpbnB1dExhc3QzTW9udGhzIiwicGlja0RhdGVTdGFydCIsInBpY2tEYXRlRW5kIiwidmFsdWUiLCJzdGFydCIsImZvcm1hdCIsInN1YnRyYWN0IiwiY29udGFpbnMiLCJjbG9zZXN0IiwibW9kdWxlTmFtZSIsImdldEF0dHJpYnV0ZSIsIm1vZHVsZUNoaWxkTmFtZSIsIm5hbWUiLCJ0eXBlIiwianNvbkF0IiwiY2hhcHRlcjEiLCJjaGFwdGVyMiIsImNoYXB0ZXIzIiwibGV2ZWwyIiwiYXRUYWdzQ2FsbENsaWNrIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcmVudE5vZGUiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwiYSIsInBhcmFtIiwic2VhcmNoIiwic3Vic3RyaW5nIiwicGF0aG5hbWUiLCJ0YXJ0ZWF1Y2l0cm9uIiwic3RhdGUiLCJhdGludGVybmV0Y25pbCIsInRhZyIsImN1c3RvbVZhcnMiLCJzaXRlIiwibG9jYXRpb24iLCJhdFRhZ3NDYWxsUGFnZSIsInN0YXJ0RGF0ZUluaXQiLCJ3ZWVrIiwic3RhcnREYXRlIiwic3RhcnRPZiIsImVuZERhdGUiLCJlbmRPZiIsInNldEF0dHJpYnV0ZSIsIm1vbnRoIiwibGFzdDNNb250aHMiLCJkYXRlTGFiZWwiLCJlbXB0eURhdGVGaWVsZHMiLCJzdGFydERhdGVFbXB0eSIsImVuZERhdGVFbXB0eSIsIm1heCIsIm1pbiIsIkR1ZXREYXRlUGlja2VyIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJzdGFydFBpY2tlciIsImVuZFBpY2tlciIsImZpcnN0RGF0ZUF2YWlsYWJsZSIsImxhc3REYXRlQXZhaWxhYmxlIiwiZGV0YWlsIiwidW5jaGVja0RlZmluZURhdGUiLCJsb2NhbGl6YXRpb25EYXRlIiwidG9nZ2xlRGF0ZSIsImRvbUVsdCIsIndvcmRpbmciLCJsb2NhbGl6YXRpb24iLCJidXR0b25MYWJlbCIsInBsYWNlaG9sZGVyIiwic2VsZWN0ZWREYXRlTWVzc2FnZSIsInByZXZNb250aExhYmVsIiwibmV4dE1vbnRoTGFiZWwiLCJtb250aFNlbGVjdExhYmVsIiwieWVhclNlbGVjdExhYmVsIiwiY2xvc2VMYWJlbCIsImNhbGVuZGFySGVhZGluZyIsImRheU5hbWVzIiwibW9udGhOYW1lcyIsIm1vbnRoTmFtZXNTaG9ydCIsImxvY2FsZSIsImZvY3VzQnV0dG9uIiwic2V0SW50ZXJ2YWwiLCJkYXRlUGlja2VyQnV0dG9uIiwiYWN0aXZlRWxlbWVudCIsInNldEZvY3VzIiwiY2xlYXJJbnRlcnZhbCIsImRhdGVGb3JtYXQiLCJkYXRlQWRhcHRlciIsInBhcnNlIiwiY3JlYXRlRGF0ZSIsIm1hdGNoZXMiLCJtYXRjaCIsImQiLCJnZXREYXRlIiwidG9TdHJpbmciLCJtIiwiZ2V0TW9udGgiLCJ5IiwiZ2V0RnVsbFllYXIiLCJlbHQiLCJzdGFydE9yRW5kIiwicmVtb3ZlQXR0cmlidXRlIiwiZ2VvIiwicmVzdWx0IiwiZXZlbnREYXRlIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwidGltZUV2ZW50IiwiZXZlbnRUaW1lIiwicGVyaW9kIiwiZGF0ZXRpbWUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJob3VyIiwibWludXRlIiwiZ2VvbG9jQnV0dG9uIiwiaXNHZW9sb2MiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInRleHRFdmVudCIsImlzVGV4dEV2ZW50IiwibGlua1RpdGxlIiwiaXNMaW5rRXZlbnQiLCJsaW5rVXJsIiwiZW5jb2RlVVJJIiwiaXNCbG9jayIsImV2ZW50VHlwZSIsImRlc2NyaXB0aW9uIiwiT3NtIiwiU2xpZGVzaG93IiwiYXRMZXZlbCIsImRvbVBhcmVudCIsIm1hcERvbSIsImluZm9NYXBUaWxlIiwibWFwQWdlbmRhIiwicmVuZGVyV2l0aFBpbiIsImNsdXN0ZXIiLCJ6b29tQ29udHJvbCIsImRvdWJsZUNsaWNrWm9vbSIsImRyYWdnaW5nIiwic2Nyb2xsV2hlZWxab29tIiwiY3VzdG9tUG9waW4iLCJub2RlUGFyZW50IiwicG9waW5GdW5jdGlvbiIsImNvdW50UGluIiwibWF4Q2x1c3RlclJhZGl1cyIsImludGVyYWN0aXZlIiwiYXJyYXlHZW9DbGljayIsIkwiLCJwcm90b3R5cGUiLCJzZXRWaWV3T2Zmc2V0IiwibGF0IiwibG5nIiwib2Zmc2V0IiwidGFyZ2V0UG9pbnQiLCJwcm9qZWN0IiwidGFyZ2V0TGF0TG5nIiwidW5wcm9qZWN0Iiwic2V0VmlldyIsImFsaWduVG9wQ29sdW1uIiwiaGVpZ2h0SGVhZGVyTWVudSIsImhlaWdodFBpbm5lZCIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJoZWlnaHQiLCJhZGFwdE1hcCIsImZpbHRlckNoZWNrIiwic2V0VGltZW91dCIsImludmFsaWRhdGVTaXplIiwiaGVpZ2h0TWFwTGltaXQiLCJjYWxsQmFjayIsInNjcm9sbCIsImFwaUFnZW5kYUNhbGwiLCJldmVudCIsIndlZWtEb20iLCJjb25jYXRXZWVrIiwiY2hpbGQiLCJhcHBlbmRVUkwiLCJhcGkiLCJhZnRlckRhdGUiLCJiZWZvcmVEYXRlIiwicmVnZXhTbGFzaCIsInJlcGxhY2UiLCJ1cmwiLCJrZXkiLCJpbmRleE9mIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGF0ZVN0YXJ0IiwiZGF0ZUVuZCIsImNzcyIsInByZXZpb3VzTW9uZGF5IiwicHJldmlvdXNNb25kYXlGb3JtYXQiLCJwcmV2aW91c1N1bmRheSIsInByZXZpb3VzU3VuZGF5Rm9ybWF0IiwicHJldmlvdXNXZWVrIiwibmV4dE1vbmRheSIsIm5leHRNb25kYXlGb3JtYXQiLCJuZXh0U3VuZGF5IiwibmV4dFN1bmRheUZvcm1hdCIsImFycmF5V2VlayIsImFwaUNhbGwiLCJhcGlVUkwiLCJwcmV2TmV4dE1vbmRheSIsInByZXZOZXh0U3VuZGF5IiwibGFiZWwiLCJkaXJlY3Rpb24iLCJhdHRyaWJ1dGUiLCJsaSIsImJ1dHRvbiIsInNwYW4iLCJkaXNhYmxlZCIsInByZXBlbmQiLCJjb3B5IiwiaW5wdXQiLCJpZCIsImlucHV0VmFsdWUiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsImFjdGl2YXRlUGFyZW50IiwiY3VycmVudFNlbGVjdG9yIiwicGFyZW50U2VsZWN0b3IiLCJhY3RpdmUiLCJwYXJlbnQiLCJyZXBsYWNlVVJMIiwic2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2V0IiwiZ2V0U2VhcmNoUGFyYW1zIiwiaW5zZXJ0VXJsUGFyYW0iLCJuZXd1cmwiLCJwcm90b2NvbCIsImhvc3QiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwicGF0aCIsInJlbW92ZVVybFBhcmFtZXRlciIsInBhcmFtS2V5IiwiY3VycmVudFVybCIsIlVSTCIsIm5ld1VybCIsImNoZWNrYm94UGFyYW1ldGVyIiwicmVzdWx0VmFsdWUiLCJzcGxpdERvY0RhdGEiLCJhcHBlbmQiLCJzaGlmdCIsInBvcCIsInR5cGVBVCIsInVsIiwiYnV0dG9uRXJhc2UiLCJjdXJyZW50VGFyZ2V0IiwibGlFcmFzZSIsImJ1dHRvbkFjdGl2ZSIsImRhdGFMaXN0TWFwIiwic2l6ZSIsImNyZWF0ZU5leHRQcmV2QnV0dG9uIiwiY3JlYXRlUGFnZXIiLCJsYXN0UGFnZXIiLCJwYXJzZUludCIsImN1cnJlbnRQYWdlciIsInNsaWNlIiwibGFzdEluZGV4T2YiLCJnZXRQYWdlTGlzdCIsInRpdGxlIiwicGFnZSIsImNsaWNrQnV0dG9uIiwidG90YWxQYWdlcyIsIm1heExlbmd0aCIsInNpZGVXaWR0aCIsImxlZnRXaWR0aCIsInJpZ2h0V2lkdGgiLCJyYW5nZSIsImNvbmNhdCIsIkFycmF5IiwiZnJvbSIsIl8iLCJhcnJvd0RpcmVjdGlvbiIsIndvcmRpbmdEaXJlY3Rpb24iLCJkYXRhRGlyZWN0aW9uIiwic3BhblRleHQiLCJzcGFuQXJyb3ciXSwic291cmNlUm9vdCI6IiJ9