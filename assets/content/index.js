import './css/main.scss';
import './css/media.scss';
import './css/thematic.scss';
import '../app/css/recentsArticles.scss';
import './css/numberShowcase.scss';
import './css/followUs.scss';
import './css/attachment.scss';
import './css/press.scss';
import './css/page360.scss';
import Copy from '../app/js/Copy';
import displayMobileContent from './js/mobileDisplay';
import AtTagsContent from './js/atContent';

document.addEventListener('DOMContentLoaded', () => {
    displayMobileContent();
    Copy();
    AtTagsContent();
});
