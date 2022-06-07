export default function Share(data) {
    const descriptionMeta = data.description
        ? data.description.substring(0, 150)
        : '';
    const metaDataTwitter = {
        'twitter:card': 'summary',
        'twitter:site': '@gouvernementfr',
        'twitter:image': data.image,
    };
    const metaDataBasic = {
        'og:url': data.url,
        'og:type': 'website',
        'og:title': data.title,
        'og:description': descriptionMeta,
        'og:image': data.image,
    };

    arrayParse('name', metaDataTwitter);
    arrayParse('property', metaDataBasic);

    function arrayParse(type, json) {
        Object.keys(json).forEach(function (key) {
            const meta = document.createElement('meta');
            meta.setAttribute(type, key);
            meta.content = json[key];
            document.getElementsByTagName('head')[0].appendChild(meta);
        });
    }

    return `
        <div class="fr-grid-row">
            <div class="fr-col fr-p-2w">
                <p class="fr-mt-0 fr-mb-1w">${
                    data.text1
                }<br><span class="fr-mt-0 fr-text--sm">${data.text2}</span></p>
                
                <a target="_blank" href="#" class="fr-link fr-text--sm" onclick="window.print();return false;"><span class="fr-fi-printer-line fr-fi--sm fr-mr-2v" aria-hidden="true"></span> Imprimer</a>
                <a target="_blank" title="ouverture nouvelle fenêtre" class="fr-link fr-text--sm" href="mailto:?subject=Je%20vous%20recommande%20un%20contenu%20sur%20www.gouvernement.fr&body=Bonjour,%0D%0A%0D%0AJe%20vous%20recommande%20le%20contenu%20suivant%20:%0D%0A%0D%0A${encodeURIComponent(
                    data.title
                )}%0D%0A%0D%0A${
        data.description ? data.description + '%0D%0A%0D%0A' : ''
    }${encodeURIComponent(
        data.url
    )}%0D%0A%0D%0A%C3%80%20bient%C3%B4t"><span class="fr-fi-mail-line fr-fi--sm fr-mr-2v" aria-hidden="true"></span> Envoyer</a>
            </div>
        </div>
    `;
}
