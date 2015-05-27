$(document).ready(function ()
{
    // Intro animations.
    $('.post-container').css('margin-top', '80px')
                        .css('opacity', '1');
    $('.fade-in').css('opacity', '1');

    var elementPosition = $('.post-container').offset();

    // Remove parenthesis tags around images.
    $("p:has(img)").contents().unwrap();

    // Initialize lazy image loading.
    $(".lazy").lazyload({
        effect : "fadeIn"
    });
    
    $('.hamburger-icon').click(function() {
        $('#navigation-bar-container').toggleClass('menu-toggle');
        $('.menu-items').toggleClass('menu-display-on');
    });

    $(window).scroll(function () 
    {
        // Show currently reading section.
        if ($(window).scrollTop() - 50 > elementPosition.top) {
            $('.currently').css('padding-top', '0')
                           .css('opacity', '1');
            $('#navigation-bar-container').addClass('box-shadow');
        }
        else {
            $('.currently').css('padding-top', '20px')
                           .css('opacity', '0');
           $('#navigation-bar-container').removeClass('box-shadow');
        }
    });

    $(window).resize(function() {
        $('#navigation-bar-container').removeClass('menu-toggle');
        $('.menu-items').removeClass('menu-display-on');
    });
});