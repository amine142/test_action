class HeaderModule {
    static name = 'Headers';

    render(data) {
        let levelHeader = '';
        let classHeader = 'fr-';
        if (data.level === 2) {
            levelHeader = 'h2';
            classHeader += levelHeader;
        } else if (data.level === 3) {
            levelHeader = 'h3';
            classHeader += levelHeader;
        } else {
            levelHeader = 'h4';
            classHeader += levelHeader;
        }

        return `<div class="fr-grid-row fr-grid-row--gutters">
                    <div class="fr-col fr-pb-0">
                        <${levelHeader} class="${classHeader} fr-mt-2w fr-mb-1w">${data.text}</${levelHeader}>
                    </div>
                </div>`;
    }
}

export default HeaderModule;
