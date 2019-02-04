const input = document.querySelector('[data-count]');
const textImg = document.querySelector('.text-image');
const radioColor = document.querySelector('[data-radio="color"]');
const radioFont = document.querySelector('[data-radio="font"]');

if (input && textImg) {
    const handleInput = () => {
        const textLength = input.textLength;
        const textContent = input.value;
        const maxLengt = input.getAttribute('maxlength');
        const selector = input.getAttribute('data-count');
        counter(selector, textLength, maxLengt);
        setTextImage(textContent);
    };

    const counter = (selector, length, maxLengt) => {
        document.querySelector(selector).textContent = `${length}/${maxLengt}`;
    };

    const setTextImage = (textContent) => {
        textImg.textContent = textContent;
    };

    handleInput();

    input.oncut = input.oncopy = input.onpaste = input.oninput = handleInput;
}

if (radioColor && textImg) {
    const changeColor = (color) => {
        textImg.className = 'text-image';
        textImg.classList.add(`text-image--${color}`);
    };

    const colors = Array.from(radioColor.querySelectorAll('input[name="color"]'));

    radioColor.addEventListener('change', (ev) => {
        const elm = ev.target;
        if (colors.includes(elm)) {
            changeColor(elm.id);
        }
    }, false);
}

if (radioFont && textImg) {
    const changeFont = (font) => {
        textImg.setAttribute('data-font', font);
    };

    const fonts = Array.from(radioFont.querySelectorAll('input[name="font"]'));

    radioFont.addEventListener('change', (ev) => {
        const elm = ev.target;
        if (fonts.includes(elm)) {
            changeFont(elm.id);
        }
    }, false);
}