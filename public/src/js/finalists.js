var $ = require('jquery');
require("./../../../node_modules/velocity-animate/velocity.min.js");
require("./../../../node_modules/velocity-animate/velocity.ui.min.js");
/*require('velocity-animate');
require('velocity-animate/velocity.ui');*/

function Finalists() {

    var $html_body = $('html, body'),
        $body = $('body'),
        $blocks = $('.finalist-block'),
        $menu = $('.header__menu-list'),
        $homepageContentMenu = $('.homepage-content--menu'),
        $categoryBlocks = $('.finalist-block.category'),
        $bachBlocks = $('.finalist-block.bach'),
        categorySelectedClass = 'category-selected',
        categoryAnimationDuration = 250,
        menuActiveClass = 'header__menu-category--active',
        categoryActive = null,
        blockNumbers = 7;

    document.addEventListener('DOMContentLoaded', function loadFinalists(){

        console.log('finalists loaded');
        document.removeEventListener('DOMContentLoaded', loadFinalists, false); //remove listener, no longer needed
        init();
    }, false);


    var init = function(){
        var category = getHash();

        if( category !== undefined && category != '_=_' ){

            toggleCategoryActiveHeader( null, category );

        }
    };

   $categoryBlocks.on('click touch', function(){

        if( $(this).hasClass(categorySelectedClass) ){

            setCategoryActive(null);

            hideCategory( $(this), false );
        } else {

            setCategoryActive( $(this).data('category') );

            if( $blocks.hasClass(categorySelectedClass) ) hideCategory( $blocks.filter('.' + categorySelectedClass), $(this) );

            else /*showCategoryR( $(this), 0 );*/ scrollToCategory();
        }

        toggleCategoryActiveMenu();
    });

    $bachBlocks.on('click touch', function(e){

        //e.preventDefault();
        //$(this).addClass('hover');
        $(this).blur();
    });

   $menu.find('a').on('click touch', function () {

        if( isHomepage() ){

            var $menuLi = $(this).parent();

            if( !$menuLi.hasClass( menuActiveClass ) ) {

                toggleCategoryActiveHeader( $menuLi, null );
            }

            return false;
        }
    });

    $homepageContentMenu.find('li').on('click touch', function(){

        var $contentLi = $(this);

        toggleCategoryActiveHeader( $contentLi, null );
    });

    var isHomepage = function(){

        return $body.hasClass('homepage');
    };

    var getHash = function(){

        return window.location.hash.substr(1);
    };

    // Show category blocks one by one
    var showCategoryR = function ($categoryBlock, n) {

        if(n == 0) $categoryBlock.addClass(categorySelectedClass);

        $categoryBlock.nextAll().slice(n, (n + 1)).stop().velocity({
            width: $categoryBlock.width(),
            opacity: 1
        }, categoryAnimationDuration, function(){
            if(n < blockNumbers - 1) showCategoryR($categoryBlock, n + 1);
        });
    };

    // Hide each category blocks parallel
    var hideCategory = function( $categoryBlock, $categoryShow ){

        $categoryBlock.removeClass(categorySelectedClass);

        if( $categoryShow ) {

            $categoryBlock.nextAll().slice(0, blockNumbers).css({
                width: 0,
                opacity: 0
            });

            setTimeout(function(){
                /*showCategoryR( $categoryShow, 0 );*/
                scrollToCategory();
            }, 500);

        } else {

            $categoryBlock.nextAll().slice(0, blockNumbers).stop().velocity({
                width: 0,
                opacity: 0
            }, categoryAnimationDuration);
        }
    };

    // Hide category's blocks
    var hideCategoryS = function(){

        var $categoryBlock = $blocks.filter('.' + categorySelectedClass);

        $categoryBlock.removeClass(categorySelectedClass);

        $categoryBlock.nextAll().slice(0, blockNumbers).css({
            width: 0,
            opacity: 0
        });
    };

    var setCategoryActive = function(category){
        categoryActive = category;
    };

    var toggleCategoryActiveMenu = function(){
        $menu.find('.' + menuActiveClass).removeClass(menuActiveClass);
        if( categoryActive !== null ) $menu.find('[data-category="' + categoryActive + '"]').addClass(menuActiveClass);
    };

    var toggleCategoryActiveHeader = function( $eventTarget, hashCategory ){

        var category = hashCategory;
        if( $eventTarget !== null ) category = $eventTarget.attr('data-category');

        if( category != '' ) {

            setCategoryActive( category );

            toggleCategoryActiveMenu();

            hideCategoryS();

            scrollToCategory();

        }
    };

    var scrollToCategory = function(){

        setTimeout(function(){
            var $element = $blocks.filter('[data-category="' + categoryActive + '"]');
            var offset = $element.offset().top;
            var t = Math.round(offset / 3);

            $html_body.animate({scrollTop: offset}, t);

            setTimeout(function(){
                showCategoryR($element, 0);
            }, 300);

        },100);
    };

}

var finalists = new Finalists();
