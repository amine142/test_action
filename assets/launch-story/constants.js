export const LAUNCH_STORIES_URL = '/portraits-de-la-relance';
export const LAUNCH_STORIES_PIN = '/pins';
export const LAUNCH_STORIES_PAGER = '?pagination=false';
export const API_LAUNCH_STORIES_URL =
    process.env.API_PREFIX + LAUNCH_STORIES_URL;
export const API_LAUNCH_STORIES_MAP =
    process.env.API_PREFIX +
    LAUNCH_STORIES_URL +
    LAUNCH_STORIES_PIN +
    LAUNCH_STORIES_PAGER;
export const API_LAUNCH_STORIES_PIN =
    process.env.API_PREFIX + LAUNCH_STORIES_URL + LAUNCH_STORIES_PAGER;
export const THEMATICS_URL = process.env.API_PREFIX + '/thematics';
export const MEASURE_URL = process.env.API_PREFIX + '/measures';
