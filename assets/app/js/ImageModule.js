class ImageModule {
    static name = 'Image';

    generateImageURL(imageURL) {
        return process.env.URL_MEDIA + imageURL;
    }

    render(data) {
        return `<div class="fr-grid-row fr-grid-row--gutters fr-my-4w">
                    <div class="fr-col">
                            <figure class="fr-content-media" role="group" aria-label="${
                                data.title
                            }">
                                <div class="fr-content-media__img">
                                    <img src="${this.generateImageURL(
                                        data.file.url
                                    )}" alt="${data.title}">
                                </div>
                                <figcaption class="fr-content-media__caption">${
                                    data.legend
                                }</figcaption>
                            </figure>
                    </div>
                </div>`;
    }
}

export default ImageModule;
