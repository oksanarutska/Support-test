$(document).ready(function() {
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
    $(".menu li").click(
        function(e) {
            const $item = $(this);
            const isOpened = $item.data().opened;

            if (isOpened) {
                $(this).children('ul').slideUp('fast');
            } else {
                $(".menu li").data('opened', false)
                $(".menu li").children('ul').slideUp('fast');

                $(this).children('ul').hide();
                $(this).children('ul').slideDown('fast');
            }

            $item.data('opened', !isOpened);
        });

    $('.navbar-toggler')
        .click(function(e) {
            let $btn = $(this);
            let $target = $($btn.data().target);

            $target.toggleClass('show-m')
        })
});