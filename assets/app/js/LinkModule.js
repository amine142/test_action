class LinkModule {
    static name = 'Links';

    render(data) {
        let linkType = 'fr-link';
        let icoType = ' fr-fi--md ';
        let targetWindow = '_self';
        let markupBlank = '';
        // Add picto link Button - No picto default display in DS
        if (data.picto === 'left') {
            linkType += ' fr-fi-arrow-left-line fr-link--icon-left';
        } else if (data.picto === 'right') {
            linkType += ' fr-fi-arrow-right-line fr-link--icon-right';
        }

        // Link size - No need Medium case because it's default display in DS
        if (data.size === 'Large') {
            linkType += ' fr-link--lg';
            icoType = ' fr-fi--md ';
        } else if (data.size === 'Small') {
            linkType += ' fr-link--sm';
            icoType = ' fr-fi--sm ';
        }

        // Open window Self or Blank
        if (data.openWindow === 'Yes') {
            targetWindow = '_blank';
            markupBlank =
                ' <span class="fr-fi-external-link-line  ' +
                icoType +
                ' fr-ml-1w" aria-hidden="true"></span>';
        }

        return `<div class="fr-grid-row fr-grid-row--gutters fr-my-4w" data-module="${LinkModule.name}">
                    <div class="fr-col">
                        <a href="${data.link}" target="${targetWindow}" class="${linkType}">${data.text}${markupBlank}</a>
                    </div>
                </div>`;
    }
}

export default LinkModule;
