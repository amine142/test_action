class ButtonModule {
    static name = 'Buttons';

    render(data) {
        let buttonType = 'fr-btn';
        let icoType = ' fr-fi--md ';
        let targetWindow = '_self';
        let markupBlank = '';
        // Secondary Button - No need Primary case because it's default display in DS
        if (data.type === 'Secondary Button') {
            buttonType += ' fr-btn--secondary';
        }

        // Button size - No need Medium case because it's default display in DS
        if (data.size === 'Large') {
            buttonType += ' fr-btn--lg';
            icoType = ' fr-fi--md ';
        } else if (data.size === 'Small') {
            buttonType += ' fr-btn--sm';
            icoType = ' fr-fi--sm ';
        }

        // Open window Self or Blank
        if (data.openWindow === 'Yes') {
            targetWindow = '_blank';
            markupBlank =
                ' <span class="fr-fi-external-link-line' +
                icoType +
                'fr-ml-1w" aria-hidden="true "></span>';
        }

        return `<div class="fr-grid-row fr-grid-row--gutters fr-my-4w" data-module="${ButtonModule.name}">
                    <div class="fr-col">
                        <a href="${data.link}" class="${buttonType}" target="${targetWindow}">${data.text}${markupBlank}</a>
                    </div>
                </div>`;
    }
}

export default ButtonModule;
