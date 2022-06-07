class MiseEnAvantModule {
    static name = 'MiseEnAvants';

    render(data) {
        let buttonType = 'fr-btn';
        let targetWindow = '_self';
        let linkExist = '';
        let externalColor = '';
        // If type exist means button is set to display on
        if (data.type) {
            // Secondary Button - No need Primary case because it's default display in DS
            if (data.type === 'Secondary Button') {
                buttonType += ' fr-btn--secondary';
            }
            // Open window Self or Blank
            if (data.openWindow === 'Yes') {
                targetWindow = '_blank';
                buttonType += ' fr-fi-external-link-line fr-btn--icon-right';
                externalColor = 'external';
            }
            linkExist =
                '<a href="' +
                data.link +
                '" target="' +
                targetWindow +
                '" class="' +
                buttonType +
                '">' +
                data.textLink +
                '</a>';
        }
        return `
        <div class="fr-grid-row fr-grid-row--gutters fr-my-4w" data-module="mise-en-avant">
            <div class="fr-col">
                <div class="fr-callout ${externalColor}">
                    <h3 class="fr-callout__title">
                        ${data.subtitle}
                    </h3>
                    <p class="fr-callout__text fr-text">${data.text}</p>
                    ${linkExist}
                </div>
            </div>
        </div>`;
    }
}

export default MiseEnAvantModule;
