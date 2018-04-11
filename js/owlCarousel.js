
if (typeof $.cj == 'undefined') $.cj = {};

$.cj.owlCarousel = {

    init : function () {

        var owl = $('.owl-carousel.index-partners-slider');

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

        var sliderClients = $('.owl-carousel.owl-carousel-2');

        if(sliderClients.length != 0)
        {
            sliderClients.owlCarousel({
                nav: false,
                loop: true,
                responsiveClass: true,
                items: 3,
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

        var reviews_slider = $('.owl-carousel.review-clients-slider')

        if(reviews_slider.length != 0){
            sliderClients.owlCarousel({
                nav: false,
                loop: true,
                // items : 1,
                responsiveClass: true,
            });
        }
    }
};

