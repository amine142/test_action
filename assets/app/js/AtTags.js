/* global tag, tarteaucitron */

class AtTags {
    // Function clean data to string
    regexPage(text, elt, customVars) {
        let clickType = '';
        if (!customVars) {
            if (elt && elt.target) {
                const validFileExtensions = [
                    'pdf',
                    'odt',
                    'mp3',
                    'ics',
                    'zip',
                    'svg',
                    'docx',
                    'txt',
                    'css',
                    'json',
                    'csv',
                    'png',
                    'gif',
                    'jpg',
                    'jpeg',
                    'svg',
                ];
                // Check the environment system domain to href tag domain (Social Network)
                if (
                    elt.hostname === 'www.facebook.com' ||
                    elt.hostname === 'twitter.com' ||
                    elt.hostname === 'www.linkedin.com' ||
                    elt.hostname === 'www.instagram.com' ||
                    elt.href.indexOf('mailto:') > -1
                ) {
                    clickType = 'action';
                } else if (process.env.ENV_URL !== elt.origin) {
                    clickType = 'exit';
                } else {
                    clickType = 'navigation';
                }
                // Check if the link is downloadable file
                validFileExtensions.forEach((item) => {
                    if (
                        item === elt.pathname.split('.').pop() ||
                        elt.dataset.type === 'download'
                    ) {
                        clickType = 'download';
                    }
                });
            } else {
                clickType = 'action';
            }
        }

        let jsonATEnd = {
            name: elt ? elt.innerText : '',
            chapter1: customVars
                ? ''
                : document.querySelector('h1').getAttribute('data-atLink-tag')
                ? document.querySelector('h1').getAttribute('data-atLink-tag')
                : document.querySelector('h1').innerText,
            ...text,
            type: clickType,
        };

        if (elt && elt.closest('div[data-module=bouton]')) {
            const prevStop = this.getPreviousSibling(
                elt.closest('div[data-module=bouton]'),
                'div[data-module=titre]'
            );
            jsonATEnd = {
                ...jsonATEnd,
                chapter3: prevStop ? prevStop.innerText : '',
            };
        }

        const arrayIterate = [jsonATEnd, customVars ? customVars.site : ''];
        arrayIterate.forEach(function (e, i) {
            Object.keys(e).forEach(function (value) {
                const val = [value];
                const noSpaceQuotesLowercase = e[value]
                    .trim()
                    .replace(/'| |"/g, '_')
                    .toLowerCase();
                const noAccent = noSpaceQuotesLowercase
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '');
                delete arrayIterate[i][noAccent];
                arrayIterate[i][val] = encodeURIComponent(noAccent);
            });
        });
        if (elt && elt.href) {
            arrayIterate[0] = {
                ...arrayIterate[0],
                customObject: {
                    clic_url_brut: elt.href,
                },
            };
        }
        return {...arrayIterate[0], customVars};
    }

    // Static SSR links
    atTagsCallStatic() {
        const fnClickData = this.atTagsCallClick.bind(this);
        const atArray = document.querySelectorAll(
            'body > :not(header):not(footer) a, body > :not(header):not(footer) button'
        );
        atArray.forEach(function (elt) {
            if (elt.getAttribute('data-atLink-tag')) {
                elt.addEventListener('click', function () {
                    fnClickData(elt.getAttribute('data-atLink-tag'), elt);
                });
            }
        });
    }

    // Send click
    atTagsCallClick(jsonAT, elt) {
        if (tarteaucitron.state.atinternetcnil && typeof tag !== 'undefined') {
            if (
                elt &&
                elt.getAttribute('aria-expanded') &&
                elt.getAttribute('aria-expanded') === 'true'
            ) {
                return false;
            }
            tag.click.send(this.regexPage(JSON.parse(jsonAT), elt));
        }
    }

    // Send Page
    atTagsCallPage(jsonAT, jsonVisit) {
        const url = new URL(jsonVisit.site['15']);
        if (url.hash.substring(1).split('=').shift() === 'xtor') {
            url.hash = '';
        }
        if (url.searchParams.has('xtor')) {
            url.searchParams.delete('xtor');
        }
        jsonVisit.site['15'] = url.toString().replace('#', '%23');
        tag.page.send(this.regexPage(JSON.parse(jsonAT), '', jsonVisit));
    }

    // Get previous dom

    getPreviousSibling(elem, selector) {
        // Get the next sibling element
        let sibling = elem.previousElementSibling;

        // If there's no selector, return the first sibling
        if (!selector) return sibling;

        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
            if (sibling.matches(selector)) return sibling;
            sibling = sibling.previousElementSibling;
        }
    }
}

export default AtTags;
