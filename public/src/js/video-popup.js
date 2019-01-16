var $ = require('jquery');
var magnificPopup = require("magnific-popup");

function VideoPopup(){
    $(document).ready(function() {
        /*$('.test-popup-link').magnificPopup({
            type: 'image'
        });*/
        $('.mgp-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });

};

var videoPopup = new VideoPopup();