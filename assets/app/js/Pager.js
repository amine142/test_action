import checkFields from './CheckFields';
import AtTags from './AtTags';
import {SCREEN_SWITCH} from './Constants';
class Pager {
    constructor(currentPage) {
        this.currentPage = parseInt(
            currentPage['hydra:view']['@id'].split('=').pop()
        );
        this.firstPage = parseInt(
            currentPage['hydra:view']['hydra:first'].split('=').pop()
        );
        this.lastPage = parseInt(
            currentPage['hydra:view']['hydra:last'].split('=').pop()
        );
        this.ul = document.createElement('ul');
    }

    constructPager(pager, currentPage, css, wording, functionCallBack) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        let pagerIndex = currentPage + 1;
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

    clickPager(a, functionCallBack, i) {
        a.addEventListener('click', (event) => {
            event.preventDefault();
            this.updatePageTitle(event.currentTarget.dataset.page);
            const chapter1 = 'galerie_des_portraits';
            let nextPrev = '';
            if (a.classList.contains('fr-pagination__link--next')) {
                nextPrev = '_suivant';
            } else if (a.classList.contains('fr-pagination__link--prev')) {
                nextPrev = '_precedent';
            }
            const name = document
                .querySelector('h1')
                .getAttribute('data-atLink-tag')
                ? document.querySelector('h1').getAttribute('data-atLink-tag')
                : document.querySelector('h1').innerText;
            checkFields(functionCallBack, i);
            // AT Tag Page
            const jsonAt = {
                name: name,
                chapter1: chapter1 + '_page=' + i,
                level2: '50',
            };
            const customVars = {
                site: {
                    1: 'fr',
                    2: 'france_relance',
                    15: document.location.href,
                },
            };
            // AT Tag Click
            const jsonAtClick = {
                name: chapter1 + nextPrev + '_page=' + i,
                chapter1: name,
                chapter2: 'pagination',
                level2: '50',
                type: 'navigation',
            };
            new AtTags().atTagsCallPage(JSON.stringify(jsonAt), customVars);
            new AtTags().atTagsCallClick(JSON.stringify(jsonAtClick));
        });
    }

    updatePageTitle(nextPage) {
        const currentPageTitle = document.title;
        const pageTitlePosition = currentPageTitle.indexOf(' | ');
        const pageLabel = ' - Page ';
        const insertIndex =
            currentPageTitle.indexOf(pageLabel) > -1
                ? pageTitlePosition - pageLabel.length
                : pageTitlePosition;
        const nextPageTitle = [
            currentPageTitle.slice(0, insertIndex),
            pageLabel + nextPage,
            currentPageTitle.slice(pageTitlePosition),
        ].join('');
        document.title = nextPageTitle;
    }

    createPager(currentPage, i, markup, functionCallBack) {
        const li = document.createElement('li');
        const a = document.createElement('a');
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

    render(functionCallBack) {
        this.ul.classList.add('fr-pagination__list');

        const previousPager = this.constructPager(
            1,
            this.currentPage,
            'prev',
            'Page précédente',
            functionCallBack
        );
        this.ul.appendChild(previousPager);

        this.createPager(this.currentPage, 1, true, functionCallBack);
        for (let i = 2; i <= this.lastPage - 1; i++) {
            let firstMax = 3;
            if (window.innerWidth <= SCREEN_SWITCH) {
                firstMax = 2;
            }
            const lastMax = firstMax - 1;
            // Display max 5 pages inline
            if (this.lastPage < 6) {
                this.createPager(this.currentPage, i, true, functionCallBack);
            } else {
                // First numbers
                if (i <= firstMax && this.currentPage <= firstMax) {
                    this.createPager(
                        this.currentPage,
                        i,
                        true,
                        functionCallBack
                    );
                    if (i === firstMax) {
                        this.createPager(this.currentPage, '...', false);
                    }
                    // Last numbers
                } else if (
                    i >= this.lastPage - lastMax &&
                    this.currentPage >= this.lastPage - lastMax
                ) {
                    if (i === this.lastPage - lastMax) {
                        this.createPager(this.currentPage, '...', false);
                    }
                    this.createPager(
                        this.currentPage,
                        i,
                        true,
                        functionCallBack
                    );
                    // Between numbers
                } else if (i === this.currentPage) {
                    this.createPager(this.currentPage, '...', false);
                    this.createPager(this.currentPage, i, false);
                    this.createPager(this.currentPage, '...', false);
                }
            }
        }
        this.createPager(
            this.currentPage,
            this.lastPage,
            true,
            functionCallBack
        );

        const nextPager = this.constructPager(
            this.lastPage,
            this.currentPage,
            'next',
            'Page suivante',
            functionCallBack
        );
        this.ul.appendChild(nextPager);

        return this.ul;
    }
}

export default Pager;
