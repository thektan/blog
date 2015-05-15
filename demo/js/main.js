$(document).ready(function ()
{
    // Remove parenthesis tags around images.
    $("p:has(img)").contents().unwrap();

    $(".post-container").animate({
        opacity: 1
    }, 1000 );
    

    // Initialize lazy image loading.
    $(".lazy").lazyload({
        effect : "fadeIn"
    });
    
    // When window gets resized.
    $(window).resize(function() {
        // Get the height of the image.
        headerImageHeight = $('.post-header-container img').height();
        
        // Set the same height to the post header title container.
        $('.post-header-title-container').css('height', headerImageHeight);
    });
    
});