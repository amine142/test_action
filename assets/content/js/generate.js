export function generateSlug(text) {
    const arrayDataContent = {
        '/article': '/actualite',
        '/report': '/rapport',
        '/speech': '/discours',
        '/press_release': '/communique',
        '/press_pack': '/dossier-de-presse',
        '/editors_note': '/note-aux-redactions',
    };
    return arrayText(text, arrayDataContent);
}

export function generateWording(text) {
    const arrayDataContent = {
        report: 'rapport',
        speech: 'discours',
        press_release: 'communiqué',
        press_pack: 'dossier de presse',
        editors_note: 'note aux redactions',
    };
    return arrayText(text, arrayDataContent);
}

function arrayText(word, arrayDataContent) {
    for (const [key, value] of Object.entries(arrayDataContent)) {
        if (word.includes(key)) {
            return word.replace(key, value);
        }
    }
}
