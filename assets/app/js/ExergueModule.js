class ExergueModule {
    static name = 'Exergues';

    render(data) {
        // Exergue size - No need Medium case because it's default display in DS
        const sizeExergue = 'fr-highlight';
        let sizeText = 'fr-text--md';
        if (data.size === 'Large') {
            sizeText = 'fr-text--lg';
        } else if (data.size === 'Small') {
            sizeText = 'fr-text--sm';
        }

        return `
            <div class="fr-grid-row fr-grid-row--gutters fr-my-4w">
                <div class="fr-col">
                    <div class="${sizeExergue}">
                        <p class="${sizeText}">${data.text}</p>
                    </div>
                </div>
            </div>`;
    }
}

export default ExergueModule;
