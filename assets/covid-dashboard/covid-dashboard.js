/* global tarteaucitron, tag */
import './css/main.scss';
import './css/skeleton_loaders.scss';

const pageName =
    'info_coronavirus_covid_19___carte_et_donnees_covid_19_en_france';

function fallbackCopyUrlToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
    } catch (err) {
        console.error(
            'Fallback: Oups, la copie dans le presse papier a échoué.',
            err
        );
    }
    document.body.removeChild(textArea);
}

function copyUrlToClipboard(txt) {
    const url =
        window.location.protocol +
        '//' +
        window.location.hostname +
        window.location.pathname +
        '#' +
        txt;
    if (!navigator.clipboard) {
        fallbackCopyUrlToClipboard(url);
        return;
    }
    navigator.clipboard.writeText(url);
}

function toggleMenuBtnState(element) {
    const active = document.querySelector('.fr-sidemenu__item--active');
    if (active) {
        active.classList.remove('fr-sidemenu__item--active');
    }
    element
        .closest('.fr-sidemenu__item')
        .classList.add('fr-sidemenu__item--active');
}

function setAtTag(
    page = null,
    name = null,
    chapter1 = null,
    chapter2 = null,
    chapter3 = null,
    type = null,
    element = null
) {
    if (tarteaucitron.state.atinternetcnil && typeof tag !== 'undefined') {
        const varjson = {
            level2: '9',
        };
        if (page !== null) {
            const url = new URL(window.location.href);
            if (url.hash.substring(1).split('=').shift() === 'xtor') {
                url.hash = '';
            }
            if (url.searchParams.has('xtor')) {
                url.searchParams.delete('xtor');
            }
            const atCustomVars = {
                site: {
                    1: 'fr',
                    2: '',
                    3: '',
                    4: '',
                    14: '',
                    15: url.toString().replace('#', '%23'),
                },
                page: {
                    1: '',
                    2: '',
                    3: '',
                    4: '',
                },
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
            const customObject = {
                clic_url_brut: element.href,
            };
            varjson.customObject = customObject;
        }
        tag.click.send(varjson);
    }
}

function normalize(innerText) {
    return innerText
        .toLowerCase()
        .replace(/[\s'-]/g, '_')
        .replace(/[éè]/g, 'e')
        .replace(/ô/g, 'o')
        .replace(/î/g, 'i');
}

function getDataLvl(element) {
    const parent =
        element.closest('.box') ||
        element.closest('.overview') ||
        element.closest('section');
    const lvl = parent.querySelector('a.anchor').getAttribute('id');
    return lvl;
}

function sendAtTag(element) {
    if (element.matches('geo-list button')) {
        const name = 'recherche_reinitialiser';
        setAtTag(null, name, pageName, 'filtre', null, 'action');
    } else if (element.matches('.fr-sidemenu__link')) {
        const name = `acces_${element.getAttribute('data-name')}`;
        const chapter2 = 'sidemenu';
        const chapter3 = element.getAttribute('data-section');
        setAtTag(null, name, pageName, chapter2, chapter3, 'action');
    } else if (element.closest('.submenu .fr-nav__link')) {
        const name = normalize(
            'acces_' +
                element
                    .closest('.submenu .fr-nav__link')
                    .getElementsByClassName('submenu-entry')[0].textContent
        );
        setAtTag(
            null,
            name,
            pageName,
            'navigation-secondaire',
            null,
            'navigation',
            element.closest('.submenu .fr-nav__link')
        );
    } else if (element.matches('.lvl2-header a[target="_blank"]')) {
        const name = element.innerText;
        const chapter2 = 'lien';
        const chapter3 = getDataLvl(element);
        setAtTag(null, name, pageName, chapter2, chapter3, 'exit', element);
    } else if (element.closest('.oval')) {
        const name = 'ancre';
        const chapter2 = 'partage';
        const chapter3 = getDataLvl(element);
        setAtTag(null, name, pageName, chapter2, chapter3, 'action');
    } else if (element.closest('.fr-breadcrumb__link')) {
        const name =
            'acces_' +
            normalize(element.closest('.fr-breadcrumb__link').innerText);
        const chapter2 = 'fil-ariane';
        setAtTag(
            null,
            name,
            pageName,
            chapter2,
            '',
            'navigation',
            element.closest('.fr-breadcrumb__link')
        );
    }
}

document.addEventListener('input', function (e) {
    if (e.target.id !== 'select-reg' || e.target.id !== 'select-dep') {
        const name = normalize(
            'recherche_' +
                normalize(e.target.options[e.target.selectedIndex].textContent)
        );
        const chapter3 =
            e.target.id === 'select-reg' ? 'region' : 'departement';
        setAtTag(null, name, pageName, 'filtre', chapter3, 'action');
    }
});

document.addEventListener('click', function (e) {
    if (e.target.matches('.fr-alert .fr-link--close')) {
        const alert = e.target.closest('.fr-alert');
        alert.parentNode.removeChild(alert);
        return;
    }
    sendAtTag(e.target);
    if (e.target.matches('.fr-sidemenu__link')) {
        toggleMenuBtnState(e.target);
    } else if (e.target.closest('.sticky-btn')) {
        const subMenu = document.querySelector('.fr-sidemenu');
        const activeSubSection = subMenu.querySelector(
            '.fr-sidemenu__item--active'
        );
        if (activeSubSection) {
            const activeId = activeSubSection
                .querySelector('.fr-sidemenu__link')
                .getAttribute('data-section');
            const activeSection = subMenu.querySelector(
                `.fr-sidemenu__btn[aria-controls="${activeId}"]`
            );
            const active = activeSection.getAttribute('aria-expanded');
            if (active === 'false') {
                activeSection.click();
            }
        }
        const top = window.scrollY + subMenu.getBoundingClientRect().top - 120;
        window.scrollTo({top: top, behavior: 'auto'});
    } else if (e.target.closest('.fr-tabs__tab')) {
        let name = 'graphique';
        const tab = e.target.closest('.fr-tabs__tab');
        const panelId = tab.id + '-panel';
        const widget = document
            .getElementById(panelId)
            .querySelector('.widget');
        if (widget.getAttribute('data-type') === 'map-chart') {
            name = 'carte';
        }
        const chapter3 = getDataLvl(tab);
        setAtTag(null, name, pageName, 'onglet', chapter3, 'action');
        if (!widget.hasChildNodes()) {
            handleWidgetLoading(widget);
        }
    } else if (e.target.closest('.oval')) {
        e.preventDefault();
        const txt = getDataLvl(e.target);
        copyUrlToClipboard(txt);
    }
});

function handleWidgetLoading(widget) {
    const type = widget.getAttribute('data-type');
    const indicator = widget.getAttribute('data-indicateur');
    if (type === 'new-multiline-chart') {
        widget.innerHTML = `<${type} indicateurs="${indicator}"></${type}>`;
    } else if (type === 'bar-line-chart') {
        const [indicator1, indicator2] = indicator.split(' ');
        widget.innerHTML = `<${type} indicateur1="${indicator1}" indicateur2="${indicator2}"></${type}>`;
    } else {
        if (indicator === 'nb_college_lycee_vaccin') {
            widget.innerHTML = `<${type} indicateur="${indicator}" constante="true"></${type}>`;
        } else if (indicator === 'vaccins_rappel') {
            widget.innerHTML = `<${type} indicateur="${indicator}" periods="vaccin_rappel"></${type}>`;
        } else {
            widget.innerHTML = `<${type} indicateur="${indicator}"></${type}>`;
        }
    }
}

function isInViewport(elem, offsetTop) {
    const bounding = elem.getBoundingClientRect();
    const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
    return (
        bounding.top >= 0 - offsetTop &&
        bounding.left >= 0 &&
        bounding.bottom <= windowHeight + windowHeight / 2 &&
        bounding.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('tarteaucitron_loaded', () => {
    setAtTag(pageName);
});

window.addEventListener('DOMContentLoaded', (event) => {
    const widgets = document.querySelectorAll(
        '.box .widget, .overview .widget'
    );
    const offset = document.querySelectorAll('a.anchor')[0].offsetTop;
    if (
        'IntersectionObserver' in window &&
        'IntersectionObserverEntry' in window &&
        'intersectionRatio' in window.IntersectionObserverEntry.prototype
    ) {
        const observerOptions = {
            root: null,
            rootMargin: '-46% 0px -54% 0px',
            threshold: 0,
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const id = entry.target
                    .querySelector('a.anchor')
                    .getAttribute('id');
                const btn = document.querySelector(
                    `.fr-sidemenu__btn[aria-controls="${id}"]`
                );
                const menuBtn = document.querySelector(
                    '.fr-sidemenu__btn[aria-controls="fr-sidemenu-wrapper"]'
                );
                const isLargeScreen =
                    window.getComputedStyle(menuBtn).display === 'none';
                const active = btn.getAttribute('aria-expanded');
                if (
                    entry.isIntersecting &&
                    active === 'false' &&
                    isLargeScreen
                ) {
                    btn.click();
                }
            });
        }, observerOptions);

        document.querySelectorAll('section.fr-grid-row').forEach((section) => {
            sectionObserver.observe(section);
        });

        const boxObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const id = entry.target
                    .querySelector('a.anchor')
                    .getAttribute('id');
                const link = document.querySelector(
                    `.fr-sidemenu__link[href="#${id}"]`
                );
                if (
                    entry.isIntersecting &&
                    !link.parentNode.classList.contains(
                        'fr-sidemenu__item--active'
                    )
                ) {
                    toggleMenuBtnState(link);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.box, .overview').forEach((section) => {
            boxObserver.observe(section);
        });

        const widgetObserverOptions = {
            root: null,
            rootMargin: `${offset}px 0px 50% 0px`,
            threshold: 0,
        };
        const widgetObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (
                    entry.isIntersecting &&
                    (entry.target.getAttribute('data-type') !== 'map-chart' ||
                        !entry.target.parentNode.classList.contains(
                            'fr-tabs__panel'
                        ))
                ) {
                    handleWidgetLoading(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, widgetObserverOptions);

        widgets.forEach((widget) => {
            widgetObserver.observe(widget);
        });
    } else {
        window.addEventListener('scroll', function () {
            widgets.forEach((widget) => {
                if (isInViewport(widget, offset) && !widget.hasChildNodes()) {
                    handleWidgetLoading(widget);
                }
            });
        });
    }
});
