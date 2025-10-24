const orangePart = 'MCKNZ';
const greyPart = '.DEV';
const typedTextElement = document.getElementById('typed-text');

let buffer = '';
let i = 0;
let phase = 0;

function type() {
    if (phase === 0) {
        if (i < orangePart.length) {
            buffer += orangePart[i];
            typedTextElement.innerHTML = `<span class="mcknz">${buffer}</span>`;
            i++;
            setTimeout(type, 120);
        } else {
            phase = 1;
            i = 0;
            buffer = '';
            setTimeout(type, 150);
        }
    } else if (phase === 1) {
        if (i < greyPart.length) {
            buffer += greyPart[i];
            typedTextElement.innerHTML =
                `<span class="mcknz">${orangePart}</span><span class="dev">${buffer}</span>`;
            i++;
            setTimeout(type, 120);
        }
    }
}
window.onload = type;
