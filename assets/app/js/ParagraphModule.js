class ParagraphModule {
    static name = 'paragraph';

    render(data) {
        return `
            <div class="fr-grid-row fr-grid-row--gutters fr-py-1w" data-module="${ParagraphModule.name}">
                <div class="fr-col">
                    ${data.text}
                </div>
            </div>`;
    }
}

export default ParagraphModule;
