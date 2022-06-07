class VideoModule {
    static name = 'Embeds';

    render(data) {
        return `
                <div class="fr-grid-row fr-grid-row--gutters fr-my-4w">
                    <div class="fr-col">
                        <div class="fr-content-media videoCall" aria-label="${data.caption}">
                            <div class="youtube-wrapper fr-responsive-vid" data-src="${data.embed}"></div>
                            <div class="fr-content-media__caption">${data.caption}</div>
                        </div>
                    </div>
                </div>
            `;
    }
}

export default VideoModule;
