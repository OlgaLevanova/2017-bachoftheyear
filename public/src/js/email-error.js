var $ = require('jquery');

function EmailError(){

    var $button = $('.no-email-error--close'),
        $header = $('header'),
        animationTime = 200;

    if( $button.length > 0 ) {
        document.addEventListener('DOMContentLoaded', function loadEmailError(){
            console.log('emailError loaded');
            init();
        }, false);
    }

    var init = function(){
        $button.on('click', function(){
            closeMessage();
        });
    };

    var closeMessage = function(){
        $button.parent().animate({height:0}, animationTime, function(){
            $(this).remove();
        });
        $header.animate({top:0}, animationTime, function(){
            $(this).removeClass('header--no-email-error');
        });

        document.removeEventListener('DOMContentLoaded', loadEmailError, false); //remove listener, no longer needed
    };
}

var emailError = new EmailError();