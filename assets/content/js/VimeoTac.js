export default function VimeoTac() {
    // Add / remove class on video player to apply style by clicking on Allow consent button
    const vimeoVideo = document.querySelectorAll('.vimeo-wrapper button');
    const tacAllowVid = document.querySelector('#tarteaucitronPersonalize2');
    if (vimeoVideo) {
        vimeoVideo.forEach((item) => {
            item.closest('.vimeo-wrapper').classList.add('consentTrue');
            item.addEventListener('click', function () {
                document.querySelectorAll('.consentTrue').forEach((vimeo) => {
                    vimeo.classList.remove('consentTrue');
                });
            });
        });
    }
    if (tacAllowVid && vimeoVideo) {
        tacAllowVid.addEventListener('click', function () {
            vimeoVideo.forEach((item) => {
                item.click();
            });
        });
    }
}
