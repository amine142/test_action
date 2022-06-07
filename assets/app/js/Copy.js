export default function Copy() {
    // Copy URL button function : create, focus, select, copy and destroy
    const copy = document.querySelector('.copy-url');
    if (copy) {
        const input = document.createElement('input');
        input.type = 'text';
        input.setAttribute('aria-hidden', 'true');
        input.id = 'copyInput';
        input.value = '';
        copy.addEventListener('click', function () {
            copy.appendChild(input);
            const inputValue = document.querySelector('#copyInput');
            inputValue.value = window.location.href;
            inputValue.select();
            document.execCommand('copy');
            copy.removeChild(input);
        });
    }
}
