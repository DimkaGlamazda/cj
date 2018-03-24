
if (typeof $.cj == 'undefined') $.cj = {};

$.cj.owlCarousel = {

    init : function () {

        var owl = $('.owl-carousel');

        owl.owlCarousel({
            nav: false,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                720: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: false
                }
            }
        });

        $('.partners-next').on('click', function () {
            owl.trigger('next.owl.carousel');
        });
        $('.partners-prev').on('click', function () {
            owl.trigger('prev.owl.carousel');
        });
    }
};

