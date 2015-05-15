$(document).ready(function ()
{
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
        }
        else {
            $('.currently').css('padding-top', '20px')
                           .css('opacity', '0');;
        }
    });

});