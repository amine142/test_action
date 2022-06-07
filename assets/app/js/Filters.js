export function activateParent(currentSelector, parentSelector, active = true) {
    const parent = currentSelector.closest(parentSelector);
    if (parent) {
        active
            ? parent.classList.add('active')
            : parent.classList.remove('active');
    }
}

export function appendURL(url, key, value) {
    return (
        url +
        (url.indexOf('?') >= 0 ? '&' : '?') +
        encodeURIComponent(key) +
        '=' +
        encodeURIComponent(value)
    );
}

export function replaceURL(url, key, value) {
    const searchParams = new URLSearchParams(url);
    searchParams.delete(key);
    searchParams.set(key, value);
    return `?${searchParams.toString()}`;
}

export function getSearchParams() {
    return new URLSearchParams(window.location.search);
}

export function insertUrlParam(key, value) {
    const searchParams = getSearchParams();
    searchParams.set(key, value);
    const newurl = `${window.location.protocol}//${
        window.location.host + window.location.pathname
    }?${searchParams.toString()}`;
    window.history.pushState({path: newurl}, '', newurl);
}

export function removeUrlParameter(paramKey) {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    url.searchParams.delete(paramKey);
    const newUrl = url.href;
    window.history.pushState({path: newUrl}, '', newUrl);
}

export function checkboxParameter(paramKey, elt) {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    // Empty all the keys set before apply new ones
    url.searchParams.delete(paramKey);
    for (const resultValue of elt) {
        const splitDocData = resultValue.dataset.document.split('=');
        if (resultValue.checked) {
            url.searchParams.append(splitDocData.shift(), splitDocData.pop());
        }
    }
    const newUrl = url.href;
    window.history.pushState({path: newUrl}, '', newUrl);
}
