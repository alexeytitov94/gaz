//Parallax

$('.parallax').parallax("50%", 0.3);
$('.parallax-1').parallax("50%", 0.3);

/* Work Carousel */

$("#owl-work").owlCarousel({
    items : 3,
    itemsDesktop : [1350,2],
    itemsDesktopSmall : [1000,2],
    itemsTablet: [768,1],
    itemsMobile : false,
    pagination : true,
    autoPlay : 8000,
    slideSpeed : 300
});


/* Testimonials Carousel */

$("#owl-testimonials").owlCarousel({
    items : 2,
    itemsDesktop : [1000,2],
    itemsDesktopSmall : [900,1],
    itemsTablet: [600,1],
    itemsMobile : false,
    pagination : false,
    autoPlay : 3000,
    slideSpeed : 300
});
(function ($) {
    var owl = $("#owl-testimonials");
    owl.owlCarousel();

    // Custom Navigation Events
    $(".next-testimonials").click(function(){
        owl.trigger('owl.next');
    })
    $(".prev-testimonials").click(function(){
        owl.trigger('owl.prev');
    })
} )(jQuery);


/* Blog Carousel */

$("#owl-blog").owlCarousel({
    items : 3,
    itemsDesktop : [1140,2],
    itemsDesktopSmall : [900,1],
    itemsTablet: [600,1],
    itemsMobile : false,
    pagination : false,
    autoPlay : 7000,
    slideSpeed : 300
});
(function ($) {
    var owl = $("#owl-blog");
    owl.owlCarousel();

    // Custom Navigation Events
    $(".next-blog").click(function(){
        owl.trigger('owl.next');
    })
    $(".prev-blog").click(function(){
        owl.trigger('owl.prev');
    })
} )(jQuery);


/* Video */

$(".container").fitVids();

$('.vimeo a,.youtube a').on('click', function (e) {
    e.preventDefault();
    var videoLink = $(this).attr('href');
    var classeV = $(this).parent();
    var PlaceV = $(this).parent();
    if ($(this).parent().hasClass('youtube')) {
        $(this).parent().wrapAll('<div class="video-wrapper">');
        $(PlaceV).html('<iframe frameborder="0" height="333" src="' + videoLink + '?autoplay=1&showinfo=0" title="YouTube video player" width="547"></iframe>');
    } else {
        $(this).parent().wrapAll('<div class="video-wrapper">');
        $(PlaceV).html('<iframe src="' + videoLink + '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=6dc234" width="500" height="281" frameborder="0"></iframe>');
    }
});

//Stik block xyek
function fixDiv() {
    var scroll = $('.grey-fade-over').height() - $('#menu-wrap').height() + 40;
    var height_bottom = $('body').height() - $('.footer-1').height() - $('.gaz_pasport').height() - $('.list-group').height();
    var bottom_scroll = $('body').height() - $('.footer-1').height() - 100;

    if ($(window).scrollTop() > scroll) {
        if (bottom_scroll > $(window).scrollTop() + $(window).height()) {
            $('.menu_service').css({
                'position': 'relative',
                'top': $(window).scrollTop() - $('.grey-fade-over').height() + $('#menu-wrap').height() - 40 + 'px',
            });
        }
    } else {
        $('.menu_service').css({
            'position': 'relative',
            'top': 0
        });
    }

}

console.log($(window).width());

if ($(window).width() > 976) {
    
    $(window).scroll(fixDiv);
    fixDiv();

}
