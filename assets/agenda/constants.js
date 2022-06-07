export const AGENDA_URL = '/agenda';
export const AGENDA_CURRENT_URL = '/current';
export const AGENDA_PAGER = '?pagination=false';
export const API_AGENDA_URL = process.env.API_PREFIX + AGENDA_URL;
export const API_AGENDA_CURRENT_URL =
    process.env.API_PREFIX + AGENDA_URL + AGENDA_CURRENT_URL;
export const EVENTS_URL = process.env.API_PREFIX + '/event_types';
export const MEDIA_URL = process.env.URL_MEDIA;
export const CSV_URL = AGENDA_URL + '/csv';
