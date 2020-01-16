// SLICK SLIDER

$('.single-item').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    cssEase: 'linear'

});

$(document).ready(function() {
    $(".menu li").hover(
        function() {
            $(this).children('ul').hide();
            $(this).children('ul').slideDown('fast');
        },
        function() {
            $('ul', this).slideUp('fast');
        });
});