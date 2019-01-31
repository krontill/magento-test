import { tns } from "../node_modules/tiny-slider/src/tiny-slider";

const related = document.querySelector('.related-slider');

if(related) {
    const slider = tns({
        container: '.related-slider',
        slideBy: 'page',
        nav: false
    });
}
