
if (typeof $.cj == 'undefined') $.cj = {};

$.cj.owlCarousel = {

    init : function () {

        var owl = $('.owl-carousel');

        if(owl.length != 0) {
            owl.owlCarousel({
                nav: false,
                loop: true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    720: {
                        items: 2,
                        nav: false
                    },
                    1000: {
                        items: 3,
                        nav: true
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

        var sliderClients = $('#slider-clients');

        if(sliderClients.length != 0)
        {
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
        }
    }
};

