class ButtonEditorialModule {
    static name = 'ButtonEditorials';

    render(data) {
        let targetWindow = '_self';
        let externalMarkup = '';
        // Open window Self or Blank
        if (data.openWindow === 'Yes') {
            targetWindow = '_blank';
            externalMarkup =
                "<span class='fr-fi-external-link-line fr-fi--sm'></span>";
        }

        return `<div class="fr-grid-row fr-grid-row--gutters fr-my-4w" data-module="bouton">
                     <div class="fr-col">
                            <div class="fr-card fr-enlarge-link fr-card--no-arrow fr-p-2w">
                                <div class="fr-card__body fr-py-1v fr-px-3v">
                                    <h3 class="fr-card__title">
                                        ${externalMarkup}
                                        <a href="${data.link}" class="fr-card__link fr-text fr-mb-0" target="${targetWindow}">${data.subtitle}</a>
                                    </h3>
                                    <p class="fr-card__desc fr-text--xs fr-mb-1v">${data.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    }
}

export default ButtonEditorialModule;
