import {
    API_LAUNCH_STORIES_URL,
    MEASURE_URL,
} from '../../launch-story/constants';

export default function CheckFields(functionCallBack, page) {
    let param = '';
    let scroll = false;
    if (page) {
        param = appendURL(param, 'page', page);
        scroll = true;
    }
    if (document.querySelector('#select').value) {
        param = appendURL(
            param,
            'measure[]',
            MEASURE_URL + '/' + document.querySelector('#select').value
        );
    }
    if (document.querySelector('#search-input').value !== '') {
        param = appendURL(
            param,
            'regionCode[]',
            document.querySelector('#search-input').dataset.regionCode
        );
    }
    if (document.querySelectorAll('.thematics .fr-tag.active').length > 0) {
        let thematic = '';
        let thematicEntry = '';
        thematic = document.querySelectorAll('.thematics .fr-tag.active');
        thematic.forEach(function (child) {
            thematicEntry = child.dataset.api;
            param = appendURL(param, 'thematics[]', thematicEntry);
        });
    }
    functionCallBack(API_LAUNCH_STORIES_URL + param, scroll);
}

function appendURL(url, key, value) {
    return (
        url +
        (url.indexOf('?') >= 0 ? '&' : '?') +
        encodeURIComponent(key) +
        '=' +
        encodeURIComponent(value)
    );
}
