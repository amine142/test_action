export const TYPE_LIST_BOOLEAN = document.querySelector('[data-list]')
    ? !!parseInt(
          document.querySelector('[data-list]').getAttribute('data-list')
      )
    : null;
export const IS_PM_NEWS = 'isPmNews';
export const CONTENT_URL =
    TYPE_LIST_BOOLEAN === null ? '/contents' : '/articles';
export const CONTENT_THEMATICS_URL = '/api/content_thematics';
export const CONTENT_SUBTHEMATICS_URL = '/api/content_subthematics';
export const API_CONTENT_URL = process.env.API_PREFIX + CONTENT_URL;
export const LEVEL_AT = '2';
