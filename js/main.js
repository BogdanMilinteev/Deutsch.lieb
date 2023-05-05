$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        dots: false,
        loop: true,
        margin: 20,
        items: 4,
        // center: true
        nav: true,
        slideBy: 1,
        navText: [
            '<img src="./img/icons/arrow-left.svg" alt="arrow-left">',
            '<img src="./img/icons/arrow-right.svg" alt="arrow-right"></img>'
        ],

    });
});