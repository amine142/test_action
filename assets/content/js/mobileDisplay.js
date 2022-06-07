import {SCREEN_MOBILE_SWITCH} from '../../app/js/Constants';

export default function displayMobileContent() {
    if (window.innerWidth <= SCREEN_MOBILE_SWITCH) {
        // Thematic
        const thematicContent = document.querySelector(
            '.fr-breadcrumb__thematic'
        );
        const mainContent = document.querySelector('.contents__content');
        if (thematicContent && mainContent) {
            mainContent.appendChild(thematicContent);
        }
    }
}
