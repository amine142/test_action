class ListModule {
    static name = 'Lists';

    render(data) {
        let listStyle = 'ol';
        let listLengthChild = '';
        if (data.style === 'unordered') {
            listStyle = 'ul';
        }
        data.items.forEach((element) => {
            listLengthChild += '<li>' + element + '</li>';
        });

        return `
                <div class="fr-grid-row fr-grid-row--gutters fr-my-3w">
                    <div class="fr-col">
                        <${listStyle} class="fr-list">
                            ${listLengthChild}
                        </${listStyle}>
                    </div>
                </div>`;
    }
}

export default ListModule;
