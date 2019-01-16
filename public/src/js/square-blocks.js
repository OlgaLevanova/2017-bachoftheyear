var $ = require('jquery');

function SquareBlocks(){

    /*var block = $('.finalist-block');

     var $grid = $('.finalists').isotope({
     percentPosition: true,
     itemSelector: '.finalist-block'
     });*/

    // This doesn't work good. Try to find another way
    /*$grid.one('layoutComplete', setHeight);

     function setHeight(){
     block.height(block.first().width());
     $grid.isotope('layout');

     console.log('1');

     setTimeout(function(){
     $grid.one('layoutComplete', setHeight);
     },1000);
     }*/

    var $blocks = $('.finalist-block'),
        $blockFirst = $blocks.first();
        isHomePage = $('body').hasClass('homepage');

    document.addEventListener('DOMContentLoaded', function loadSquareBlocks(){
        console.log('square loaded');
        document.removeEventListener('DOMContentLoaded', loadSquareBlocks, false); //remove listener, no longer needed

        setHeight();
    },false);

    window.addEventListener('resize', function(){
        changeHeight();
    });

    var changeHeight = function(){
        waitForFinalEvent(function(){
            setHeight();
            if( isHomePage ) setWidth();
        }, 500, "some unique string");
    };

    function setHeight(){
        $blocks.height($blockFirst.width());
    }

    function setWidth(){
        $blocks.each(function(){
            if( $(this).data('block') == 'bach' && $(this).width() > 0 ){
                $(this).width( $blockFirst.width() );
            }
        });
    }

    // Do only after event is finished
    var waitForFinalEvent = (function () {
        var timers = {};
        return function (callback, ms, uniqueId) {
            if (!uniqueId) {
                uniqueId = "Don't call this twice without a uniqueId";
            }
            if (timers[uniqueId]) {
                clearTimeout (timers[uniqueId]);
            }
            timers[uniqueId] = setTimeout(callback, ms);
        };
    })();
}

var squareBlocks = new SquareBlocks();