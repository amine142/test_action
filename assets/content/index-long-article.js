import './css/main.scss';
import './css/image.scss';
import './css/media.scss';
import '../app/css/summary.scss';
import './css/thematic.scss';
import '../app/css/recentsArticles.scss';
import './css/numberShowcase.scss';
import './css/followUs.scss';
import './css/attachment.scss';
import './css/press.scss';
import './css/page360.scss';
import Summary from '../app/js/summary';
import Copy from '../app/js/Copy';
import displayMobileContent from './js/mobileDisplay';
import AtTagsContent from './js/atContent';

document.addEventListener('DOMContentLoaded', () => {
    displayMobileContent();
    Copy();
    Summary();
    AtTagsContent();
});
