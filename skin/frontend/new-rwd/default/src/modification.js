const input = document.querySelector('[data-count]');

if (input) {

    const handleEvent = () => {
        const textLength = input.textLength;
        const textContent = input.value;
        const maxLengt = input.getAttribute('maxlength');
        const selector = input.getAttribute('data-count');
        const textImg = input.getAttribute('data-text-img');
        counter(selector, textLength, maxLengt);
        setTextImage(textImg, textContent);
    };

    const counter = (selector, length, maxLengt) => {
        document.querySelector(selector).textContent = `${length}/${maxLengt}`;
    };

    const setTextImage = (textImg, textContent) => {
        document.querySelector(textImg).textContent = textContent;
    };

    handleEvent();

    input.oncut = input.oncopy = input.onpaste = input.oninput = handleEvent;
}
