import AtTags from '../../app/js/AtTags';
import {
    API_CONTENT_URL,
    CONTENT_THEMATICS_URL,
    CONTENT_SUBTHEMATICS_URL,
    LEVEL_AT,
    IS_PM_NEWS,
    TYPE_LIST_BOOLEAN,
} from '../constants';
import Api from '../../app/js/Api';
import {
    appendURL,
    replaceURL,
    getSearchParams,
    insertUrlParam,
    removeUrlParameter,
    checkboxParameter,
} from '../../app/js/Filters';
import {SCREEN_SWITCH} from '../../app/js/Constants';
import {initiateListing} from '../index-list';

const resetBtn = document.querySelector('.filter-reset');
const openBtn = document.querySelector('.filter-open');
const closeBtn = document.querySelector('.filter-close');
const submitBtn = document.querySelector('.submitFilters');
const thematicSelect = document.querySelector('#select-thematic');
const subthematicSelect = document.querySelector('#select-sub-thematic');
const thematicCounter = document.querySelector('.thematic-counter');
const filterFields = document.querySelectorAll('.content-filter');
const resultCount = document.querySelector('.result-count');
const checkboxes = document.querySelectorAll(
    '#accordion-content-document input'
);
const documentCounter = document.querySelector('.document-counter');
const isTag = document.querySelector('.tags-place');
let tagFlagClickAT = false;

export function initiateFilter(callBack) {
    updateFilters();
    updateOpenBtn();
    openBtn.addEventListener('click', () => {
        displayMobileFilter();
        updateFilters();
    });
    closeBtn.addEventListener('click', () => {
        displayMobileFilter(false);
    });
    submitBtn.addEventListener('click', () => {
        deleteAllTags();
        displayMobileFilter(false);
        submitFields(callBack, true);
        updateOpenBtn();
        checkboxes.forEach((item) => {
            if (item.checked) {
                addTag(
                    item,
                    item.parentNode.querySelector('label').textContent
                );
            }
        });
        deleteTag(thematicSelect);
        if (thematicSelect.value !== '') {
            addTag(
                thematicSelect,
                thematicSelect.options[thematicSelect.selectedIndex].text
            );
        }

        deleteTag(subthematicSelect);
        if (subthematicSelect.value !== '') {
            addTag(
                subthematicSelect,
                subthematicSelect.options[subthematicSelect.selectedIndex].text
            );
        }
        // AT call
        const jsonAt = {
            name: 'recherche_afficher',
            chapter2: submitBtn
                .closest('[data-module]')
                .getAttribute('data-module'),
            level2: LEVEL_AT,
        };
        new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);
    });
    resetBtn.addEventListener('click', () => {
        resetFilters();
        submitFields(callBack);
    });
    thematicSelect.addEventListener('change', (event) => {
        if (event.target.value !== '') {
            initiateSubThematics();
        }
        updateSubThematicFilter();
        updateThematicCounter();
        submitFields(callBack, false, 'thematic');
    });
    subthematicSelect.addEventListener('change', () => {
        updateThematicCounter();
        removeUrlParameter('page');
        submitFields(callBack, false, 'subthematic');
    });
    if (checkboxes.length) {
        const moduleName = document
            .querySelector('#checkboxes-document')
            .closest('[data-module]');
        checkboxes.forEach((item) => {
            item.addEventListener('click', () => {
                const labelText = item.parentNode
                    .querySelector('label')
                    .textContent.trim();
                updateCheckboxCounter();
                removeUrlParameter('page');
                submitFields(callBack);
                if (window.innerWidth > SCREEN_SWITCH) {
                    if (item.checked) {
                        addTag(item, labelText);
                    } else {
                        deleteTag(item, labelText);
                    }
                }
                // AT
                if (!tagFlagClickAT) {
                    const atCheckbox = 'recherche_';
                    const jsonAt = {
                        name: item.checked
                            ? atCheckbox + labelText
                            : atCheckbox + 'decoche_' + labelText,
                        level2: LEVEL_AT,
                        chapter2: moduleName.getAttribute('data-module'),
                        chapter3: 'type_de_publication',
                    };
                    new AtTags().atTagsCallClick(JSON.stringify(jsonAt), item);
                }
                tagFlagClickAT = false;
            });
        });
    }
}

export function initiateThematics() {
    const THEMATIC_URL =
        `${CONTENT_THEMATICS_URL}?exists[parent]=false` +
        isPmVar('&', false) +
        initiateCheckbox('&', true);
    new Api().get(THEMATIC_URL).then((dataContent) => {
        if (dataContent && dataContent['hydra:member'].length > 0) {
            initiateSelect(dataContent, thematicSelect, {
                text: 'Toutes les thématiques',
            });
            initiateFilter(initiateListing);
        }
        if (thematicSelect.value) {
            initiateSubThematics();
        }

        const moduleName = document
            .querySelector('#select-thematic')
            .closest('[data-module]');

        // AT Tag Call
        let jsonAt = {
            chapter2: moduleName.getAttribute('data-module'),
            level2: LEVEL_AT,
        };
        document
            .querySelector('#select-thematic')
            .addEventListener('change', function () {
                jsonAt = {
                    ...jsonAt,
                    name:
                        'recherche_' +
                        this.options[this.selectedIndex].innerText,
                    chapter3: 'thematique',
                };
                new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);
            });
        document
            .querySelector('#select-sub-thematic')
            .addEventListener('change', function () {
                jsonAt = {
                    ...jsonAt,
                    name:
                        'recherche_' +
                        document
                            .querySelector('#select-thematic')
                            .options[
                                document.querySelector('#select-thematic')
                                    .selectedIndex
                            ].innerText.trim() +
                        '_//_' +
                        this.options[this.selectedIndex].innerText.trim(),
                    chapter3: 'thematique',
                };
                new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);
            });
    });
}

export function initiateSubThematics(subthematic) {
    const thematic = thematicSelect.value;
    if (thematic || subthematic) {
        const SUB_THEMATIC_URL =
            `${CONTENT_SUBTHEMATICS_URL}?parent=${thematic}` +
            isPmVar('&', false) +
            initiateCheckbox('&', true);
        new Api().get(SUB_THEMATIC_URL).then((dataContent) => {
            if (dataContent && dataContent['hydra:member'].length > 0) {
                initiateSelect(dataContent, subthematicSelect, {
                    text: 'Toutes les sous-thématiques',
                });
                if (
                    subthematic &&
                    subthematicSelect.getElementsByTagName(subthematic)
                ) {
                    subthematicSelect.value = subthematic;
                    addTag(
                        subthematicSelect,
                        subthematicSelect.options[
                            subthematicSelect.selectedIndex
                        ].text
                    );
                    subthematicSelect.removeAttribute('disabled');
                    updateThematicCounter();
                }
            }
        });
    }
}

export function initiateCheckbox(concat, forceReload) {
    const searchParams = getSearchParams();
    const checkbox = [];
    if (!searchParams.has('content_type[]') || forceReload) {
        checkboxes.forEach((item) => {
            checkbox.push(item.dataset.document);
        });
    }
    const docApiCall = checkbox.length ? concat + checkbox.join('&') : '';
    return docApiCall;
}

export function updateResultCount(totalItems) {
    if (totalItems && totalItems > 0) {
        resultCount.setAttribute('total', totalItems);
        resultCount.innerHTML = `${totalItems} résultat${
            totalItems > 1 ? 's' : ''
        }`;
    } else {
        resultCount.innerHTML = 'Aucun résultat pour les filtres sélectionnés';
        resultCount.setAttribute('total', 0);
        submitBtn.value = 'Aucun résultat';
    }
}

export function isPmVar(concat, check) {
    const isList = concat + IS_PM_NEWS + '=' + TYPE_LIST_BOOLEAN;
    if (check) {
        return TYPE_LIST_BOOLEAN !== null ? isList : '';
    } else {
        return TYPE_LIST_BOOLEAN ? isList : '';
    }
}

function createOption(text, value) {
    const option = document.createElement('option');
    option.innerText = text;
    option.value = value || '';
    option.name = value || '';
    return option;
}

function displayMobileFilter(open = true) {
    const filtersCol = document.querySelector('.col-filters');
    const blockScroll = document.querySelector('html');
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
    const validFields = {};
    filterFields.forEach((filter) => {
        if (filter.value !== '') {
            validFields[filter.name] = filter.value;
        }
    });
    return Object.keys(validFields).length;
}

function getCheckboxesCount() {
    const checkFields = {};
    checkboxes.forEach((item) => {
        if (item.checked) {
            checkFields[item.name] = item.id;
        }
    });
    return Object.keys(checkFields).length;
}

function initiateSelect(dataContent, select, defaultOption) {
    select.innerHTML = '';
    select.appendChild(createOption(defaultOption.text));
    dataContent['hydra:member'].forEach((thematic) => {
        select.appendChild(
            createOption(
                thematic.name,
                `${CONTENT_THEMATICS_URL}/${thematic.id}`
            )
        );
    });
}

function resetFilters() {
    thematicSelect.value = '';
    subthematicSelect.value = '';
    subthematicSelect.setAttribute('disabled', true);
    updateThematicCounter();
    if (checkboxes.length) {
        checkboxes.forEach((item) => {
            if (item.checked) {
                item.checked = false;
            }
        });
        updateCheckboxCounter();
    }
    if (window.innerWidth > SCREEN_SWITCH) {
        deleteAllTags();
    }
}

function submitFields(callBack, forceReload, tagThematic) {
    let params = '';
    let concat = '?';
    filterFields.forEach((filter) => {
        if (filter.value !== '') {
            if (filter.name === 'subthematic') {
                params = replaceURL(params, 'thematic', filter.value);
            } else {
                params = appendURL(params, filter.name, filter.value);
            }
            concat = '&';
        }
    });

    let isCheck = false;
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const splitDocData = checkbox.dataset.document.split('=');
            params = appendURL(
                params,
                splitDocData.shift(),
                splitDocData.pop()
            );
            isCheck = true;
        }
    });
    if (!isCheck) {
        params += initiateCheckbox(params === '' ? '?' : '&', true);
    }

    if (window.innerWidth > SCREEN_SWITCH || forceReload) {
        filterFields.forEach((filter) => {
            if (filter.value !== '') {
                if (filter.name === 'subthematic') {
                    insertUrlParam('thematic', filter.value);
                } else {
                    insertUrlParam(filter.name, filter.value);
                }
            } else {
                removeUrlParameter(filter.name);
                removeUrlParameter('page');
            }
        });
        if (checkboxes.length) {
            checkboxParameter('content_type[]', checkboxes);
        }
        callBack(API_CONTENT_URL + params + isPmVar(concat, true), true);

        // Reinit tags

        if (tagThematic && tagThematic === 'thematic') {
            deleteTag(subthematicSelect);
            deleteTag(thematicSelect);
            if (thematicSelect.value !== '') {
                addTag(
                    thematicSelect,
                    thematicSelect.options[thematicSelect.selectedIndex].text
                );
            }
        }
        if (tagThematic && tagThematic === 'subthematic') {
            deleteTag(subthematicSelect);
            if (subthematicSelect.value !== '') {
                addTag(
                    subthematicSelect,
                    subthematicSelect.options[subthematicSelect.selectedIndex]
                        .text
                );
            }
        }
    } else {
        new Api()
            .get(API_CONTENT_URL + params + isPmVar(concat, true))
            .then((dataContent) => {
                updateMobileSubmitCount(dataContent['hydra:totalItems']);
            });
    }
}

function updateFilters() {
    const searchParams = getSearchParams();
    resetFilters();
    deleteAllTags();
    if (Array.from(searchParams).length && searchParams.has('thematic')) {
        const ALL_THEMATICS_URL =
            `${CONTENT_THEMATICS_URL}?all=true` +
            isPmVar('&', false) +
            initiateCheckbox('&', true);
        new Api().get(ALL_THEMATICS_URL).then((dataContent) => {
            if (dataContent && dataContent['hydra:member'].length > 0) {
                const thematicValue = searchParams.get('thematic');
                const thematicId = thematicValue.substring(
                    CONTENT_THEMATICS_URL.length + 1
                );
                dataContent['hydra:member'].forEach((item) => {
                    if (item.id === parseInt(thematicId) && item.parent) {
                        thematicSelect.value = `${CONTENT_THEMATICS_URL}/${item.parent.id}`;
                        initiateSubThematics(
                            `${CONTENT_THEMATICS_URL}/${item.id}`
                        );
                    }
                });
                addTag(
                    thematicSelect,
                    thematicSelect.options[thematicSelect.selectedIndex].text
                );
            }
        });

        searchParams.forEach(function (value, key) {
            const filter = document.querySelector(`[name="${key}"]`);
            const option =
                filter && filter.querySelector(`option[value="${value}"]`);

            if (filter && option && value) {
                filter.value = value;
                updateSubThematicFilter();
                updateThematicCounter();
            }
        });
    }

    if (Array.from(searchParams).length && searchParams.has('content_type[]')) {
        searchParams.forEach(function (value, key) {
            checkboxes.forEach((item) => {
                const checked = item.dataset.document === key + '=' + value;
                if (checked) {
                    item.checked = true;
                    addTag(
                        item,
                        item.parentNode.querySelector('label').textContent
                    );
                }
            });
        });
        updateCheckboxCounter();
    }
}

function updateMobileSubmitCount(totalItems) {
    if (totalItems > 0) {
        submitBtn.value = `Afficher le${
            totalItems > 1 ? 's ' + totalItems : ''
        } résultat${totalItems > 1 ? 's' : ''}`;
    } else if (totalItems === 0) {
        submitBtn.value = 'Aucun résultat';
    }
}

function updateOpenBtn() {
    const fieldsCount = getFieldsCount();
    const checkboxesCount = getCheckboxesCount();
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
    const fieldsCount = getFieldsCount();
    const checkboxesCount = getCheckboxesCount();
    if (fieldsCount) {
        thematicCounter.innerHTML = `${fieldsCount} sélectionnée${
            fieldsCount > 1 ? 's' : ''
        }`;
        resetBtn.classList.add('active');
    } else {
        thematicCounter.innerHTML = '';
    }
    if (!fieldsCount && !checkboxesCount) {
        resetBtn.classList.remove('active');
    }
}

function updateCheckboxCounter() {
    const checkboxesCount = getCheckboxesCount();
    const fieldsCount = getFieldsCount();
    if (checkboxesCount) {
        documentCounter.innerHTML = `${checkboxesCount} sélectionné${
            checkboxesCount > 1 ? 's' : ''
        }`;
        resetBtn.classList.add('active');
    } else {
        documentCounter.innerHTML = '';
    }
    if (!fieldsCount && !checkboxesCount) {
        resetBtn.classList.remove('active');
    }
}

function addTag(elt, labelText) {
    const li = document.createElement('li');
    const documentType = elt.dataset.document ? elt.dataset.document : elt.id;
    li.classList.add('fr-mb-2w');
    const button = document.createElement('button');
    button.classList.add('fr-tag', 'fr-tag--sm', 'fr-my-0', 'fr-tag--dismiss');
    button.setAttribute('aria-label', 'Retirer ' + labelText.trim());
    button.setAttribute('data-document', documentType);
    button.textContent = labelText.trim();
    button.addEventListener('click', function (e) {
        tagFlagClickAT = true;
        // AT
        const jsonAt = {
            name: 'decoche_' + e.currentTarget.textContent,
            level2: LEVEL_AT,
            chapter2: 'filtre',
            chapter3: 'tag',
        };
        new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);
        removeOnClickTag(elt);
    });

    li.appendChild(button);

    if (isTag.querySelector('ul')) {
        isTag.querySelector('ul').appendChild(li);
    } else {
        const ul = document.createElement('ul');
        ul.classList.add('fr-tags-group', 'fr-pt-1w', 'fr-mb-2w');
        ul.appendChild(li);
        isTag.appendChild(ul);
    }
}

function removeOnClickTag(elt) {
    deleteTag(elt);
    // For checkboxes deletion
    checkboxes.forEach((item) => {
        if (item.dataset.document === elt.dataset.document) {
            item.click();
        }
    });

    // For thematics deletion
    if (elt.id) {
        const e = new Event('change');
        elt.value = '';
        elt.dispatchEvent(e);
    }

    // Auto click on mobile submit button to retrieve results without open filter menu - only for click on tag
    if (window.innerWidth < SCREEN_SWITCH) {
        submitBtn.click();
    }
}

function deleteTag(elt) {
    isTag.querySelectorAll('li').forEach((item) => {
        const documentType = elt.dataset.document
            ? elt.dataset.document
            : elt.id;
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
