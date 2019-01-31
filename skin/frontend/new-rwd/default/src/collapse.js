const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

window.addEventListener('click', (ev) => {
    const elm = ev.target;
    if (triggers.includes(elm)) {
        const selector = elm.getAttribute('data-target');
        collapse(selector, elm);
    }
}, false);

const collapse = (selector, el) => {
    el.classList.toggle('open');
    const targets = Array.from(document.querySelectorAll(selector));
    targets.forEach(target => {
        target.classList.toggle('show');
    });
};