export default function Paging(dataListMap, dataContent, size, label, css) {
    // Prev button
    createNextPrevButton(
        dataListMap,
        dataContent,
        css,
        label,
        size,
        'left',
        'précédente',
        'previous'
    );

    // Pager
    createPager(dataListMap, dataContent, css);

    // Next button
    createNextPrevButton(
        dataListMap,
        dataContent,
        css,
        label,
        size,
        'right',
        'suivante',
        'next'
    );
}

function createPager(dataListMap, dataContent, css) {
    const lastPager = parseInt(
        dataContent['hydra:view']['hydra:last'].split('=').pop()
    );
    const currentPager = parseInt(
        dataContent['hydra:view']['@id'].split('=').pop()
    );
    const apiCall = dataContent['hydra:view']['@id'].slice(
        0,
        dataContent['hydra:view']['@id'].lastIndexOf('=') + 1
    );
    getPageList(lastPager, currentPager, 5).forEach((item) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
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
    const sideWidth = maxLength < 9 ? 1 : 2;
    const leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    const rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
    if (totalPages <= maxLength) {
        // no breaks in list
        return range(1, totalPages);
    }
    if (page <= maxLength - sideWidth - 1 - rightWidth) {
        // no break on left of page
        return range(1, maxLength - sideWidth - 1).concat(
            0,
            range(totalPages - sideWidth + 1, totalPages)
        );
    }
    if (page >= totalPages - sideWidth - 1 - rightWidth) {
        // no break on right of page
        return range(1, sideWidth).concat(
            0,
            range(
                totalPages - sideWidth - 1 - rightWidth - leftWidth,
                totalPages
            )
        );
    }
    // Breaks on both sides
    return range(1, sideWidth).concat(
        0,
        range(page - leftWidth, page + rightWidth),
        0,
        range(totalPages - sideWidth + 1, totalPages)
    );
}

function range(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
}

function createNextPrevButton(
    dataListMap,
    dataContent,
    css,
    label,
    size,
    arrowDirection,
    wordingDirection,
    dataDirection
) {
    // Button
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.classList.add(
        'fr-pagination__link',
        'fr-text--' + size,
        'fr-pagination__link--lg-label'
    );
    const spanText = document.createElement('span');
    spanText.classList.add('text');
    spanText.innerText = label + ' ' + wordingDirection;
    button.appendChild(spanText);
    if (dataContent['hydra:view']['hydra:' + dataDirection + '']) {
        button.setAttribute(
            'data-week-' + dataDirection,
            dataContent['hydra:view']['hydra:' + dataDirection + '']
        );
        button.addEventListener('click', function () {
            dataListMap(
                dataContent['hydra:view']['hydra:' + dataDirection + ''],
                true
            );
        });
    } else {
        button.disabled = true;
    }
    const spanArrow = document.createElement('span');
    spanArrow.classList.add(
        'fr-fi-arrow-' + arrowDirection + '-s-line',
        size === 'xs' ? 'fr-fi--sm' : 'fr-fi--' + size
    );
    spanArrow.setAttribute('aria-hidden', 'true');
    if (arrowDirection === 'left') {
        button.prepend(spanArrow);
    } else {
        button.appendChild(spanArrow);
    }
    li.appendChild(button);
    document.querySelector(css).appendChild(li);
}
