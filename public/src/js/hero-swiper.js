
const Swiper = require('swiper');
const objectFitImages = require('object-fit-images');

function HeroSwiper(){

    if (document.readyState === 'complete') {
        onDocumentReady()
    } else {
        window.addEventListener('DOMContentLoaded', onDocumentReady)
    }

    function onDocumentReady() {
        objectFitImages();

        if( $('.hero__img').length > 1 ) {
            // REQUIRED FOR FINALIST PAGE
            const swiperInstance = new Swiper('.swiper-hero', {
                autoplay: 4000,
                loop: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
            });
        }
    }
}

var heroSwiper = new HeroSwiper();
