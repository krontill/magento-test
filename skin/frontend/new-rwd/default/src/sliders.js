import {tns} from "../node_modules/tiny-slider/src/tiny-slider";

const related = document.querySelector('.related-slider');

if (related) {
    const slider = tns({
        container: '.related-slider',
        nav: false,
        items: 1,
        responsive: {
            640: {
                edgePadding: 20,
                gutter: 20,
                items: 2
            },
            700: {
                gutter: 30
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
}
