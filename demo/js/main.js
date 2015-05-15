$(document).ready(function ()
{
    // Intro animations.
    $('.post-container').css('margin-top', '150px')
                        .css('opacity', '1');
    $('.fade-in').css('opacity', '1');

    var elementPosition = $('.post-container').offset();

    // Remove parenthesis tags around images.
    //$("p:has(img)").contents().unwrap();

    // Initialize lazy image loading.
    //$(".lazy").lazyload({
    //    effect : "fadeIn"
    //});

    $(window).scroll(function () 
    {
        // Show currently reading section.
        if ($(window).scrollTop() - 50 > elementPosition.top) {
            $('.currently').css('padding-top', '0')
                           .css('opacity', '1');
            $('#navigation-bar-container').css('box-shadow', '0px 0px 8px 0px rgba(0,0,0,0.12)')
        }
        else {
            $('.currently').css('padding-top', '20px')
                           .css('opacity', '0');;
           $('#navigation-bar-container').css('box-shadow', '0px 0px 8px 0px rgba(0,0,0,0)')
        }
    });

});