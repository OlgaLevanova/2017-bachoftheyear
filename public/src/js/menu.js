var $ = require('jquery');

function Menu(){

    var $header = $('.header'),
        $menu = $('.header__menu'),
        $menuDots = $('.outer-dots');
        $button = $('.header__menu-toggle'),
        headerActiveClass = 'header__menu--opened',
        duration = 400;

    $button.on('click', function(){
        menuToggle();
    });

    $button.on('mouseover', function() {
        $menuDots.addClass('is-closed');
    });

    $button.on('mouseout', function() {
        $menuDots.removeClass('is-closed');
    });

    var menuToggle = function(){
        if( $header.hasClass(headerActiveClass) ) closeMenu();
        else openMenu();
    };

    var openMenu = function(){

        var autoHeight = $menu.css('height', 'auto').height();
        $menu.height(0);
        $('.hero__text').addClass('goBehind');
        $menu.stop().animate({
            'height':autoHeight
        }, duration, function(){
            $menu.height('auto');
            $menu.css('overflow', 'visible');
            $header.addClass(headerActiveClass);
        });
    };

    var closeMenu = function(){

        $menuDots.removeClass('is-closed');

        $menu.stop().animate({
            'height':0
        }, duration, function(){
            $menu.css('overflow', 'hidden').removeAttr('style');
            $header.removeClass(headerActiveClass);
            $('.hero__text').removeClass('goBehind');
        });

    };

    // header active category -- zoom disable
    $('.header__category-active').click(function(){
        e.preventDefault();
        return false;
    });
}

var menu = new Menu();
