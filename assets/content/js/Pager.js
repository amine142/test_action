import {getSearchParams} from '../../app/js/Filters';
import AtTags from '../../app/js/AtTags';
import {LEVEL_AT} from '../constants';
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
        this.nav = document.createElement('nav');
        this.nav.classList.add('fr-pagination');
        this.nav.setAttribute('role', 'navigation');
        this.nav.setAttribute('aria-label', 'Pagination');
        this.ul = document.createElement('ul');
        this.filterParams = getSearchParams();
    }

    // TODO refacto construcPager & createPager Methods
    constructPager(pager, currentPage, css, wording) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        let pagerIndex = currentPage + 1;
        a.innerText = a.title = wording;
        a.classList.add(
            'fr-pagination__link',
            'fr-mx-0',
            'fr-pagination__link--' + css
        );
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
                this.filterParams.delete('page');
            }
            a.href = `?page=${pagerIndex}${
                this.filterParams.toString()
                    ? `&${this.filterParams.toString()}`
                    : ''
            }`;
            this.ATclick(a);
        }
        li.appendChild(a);
        return li;
    }

    createPager(currentPage, index, markup) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.classList.add('fr-pagination__link');
        if (index === '...') {
            a.classList.add('fr-px-0', 'fr-mx-0', 'dotText');
        }
        a.title = 'Page ' + index;
        a.innerText = index;
        if (markup && index !== currentPage) {
            if (this.filterParams && this.filterParams.has('page')) {
                this.filterParams.delete('page');
            }
            a.href = `?page=${index}${
                this.filterParams.toString()
                    ? `&${this.filterParams.toString()}`
                    : ''
            }`;
            this.ATclick(a);
        }
        if (index === currentPage) {
            a.setAttribute('aria-current', 'page');
        }

        li.appendChild(a);
        this.ul.appendChild(li);
        this.nav.appendChild(this.ul);
    }

    ATclick(a) {
        a.addEventListener('click', function () {
            const jsonAt = {
                name:
                    document.querySelector('h1').innerText +
                    '_page=' +
                    a.innerText,
                chapter2: 'pagination',
                level2: LEVEL_AT,
            };
            new AtTags().atTagsCallClick(JSON.stringify(jsonAt), this);

            const jsonAtPage = {
                name: document.querySelector('h1').innerText,
                chapter1:
                    document.querySelector('h1').innerText +
                    '_page=' +
                    a.innerText,
                level2: LEVEL_AT,
            };
            const customVars = {
                site: {
                    1: 'fr',
                    6: 'page-liste',
                    15: window.location.href,
                },
            };
            new AtTags().atTagsCallPage(JSON.stringify(jsonAtPage), customVars);
        });
    }

    render() {
        this.ul.classList.add('fr-pagination__list');

        const previousPager = this.constructPager(
            1,
            this.currentPage,
            'prev',
            'Précédente'
        );
        this.ul.appendChild(previousPager);

        this.createPager(this.currentPage, 1, true);
        for (let i = 2; i <= this.lastPage - 1; i++) {
            const firstMax = 3;
            const lastMax = firstMax - 2;
            // Display max 4 pages inline
            if (this.lastPage < 5) {
                this.createPager(this.currentPage, i, true);
            } else {
                // First numbers
                if (i <= firstMax && this.currentPage <= firstMax) {
                    this.createPager(this.currentPage, i, true);
                    if (i === firstMax) {
                        this.createPager(this.currentPage, i + 1, true);
                        this.createPager(this.currentPage, '...', false);
                    }
                    // Last numbers
                } else if (
                    i >= this.lastPage - lastMax &&
                    this.currentPage >= this.lastPage - lastMax
                ) {
                    if (i === this.lastPage - lastMax) {
                        this.createPager(this.currentPage, '...', false);
                        this.createPager(this.currentPage, i - 1, true);
                    }
                    this.createPager(this.currentPage, i, true);
                    // Between numbers
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

        const nextPager = this.constructPager(
            this.lastPage,
            this.currentPage,
            'next',
            'Suivante'
        );

        this.ul.appendChild(nextPager);
        this.nav.appendChild(this.ul);

        return this.nav;
    }
}

export default Pager;
