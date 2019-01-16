var $ = require('jquery');

function WinnersSwiper(){
    var mySwiper = new Swiper ('.winners-swiper', {
        slidesPerView: 10,
        breakpoints: {
            // when window width is <= breakpoint
            600: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 8
            },
            1300: {
                slidesPerView: 6
            }
        }
    })
}

$(function(){

    var winnersSwiper = new WinnersSwiper();
});