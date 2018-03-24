if (typeof $.cj == 'undefined') $.cj = {};

$.cj.menuHandler = {

    onResize : function () {
        $(".menu-control").removeClass('active')
            .removeClass('internal')
            .addClass('external');

        $('.header-controls')
            .css('display', 'none')
            .removeAttr('style');
    },

    init : function () {

        $(".menu-control").on('click', function () {

            if ($(this).hasClass('active')) {

                $(this)
                    .removeClass('active')
                    .removeClass('internal')
                    .addClass('external');

                $('.header-controls').animate({opacity: 0}, 400, function () {
                    $(this).css('display', 'none');
                });
                return;
            }

            $(this)
                .addClass('active')
                .removeClass('external')
                .addClass('internal');

            $('.header-controls')
                .css('display', 'flex')
                .animate({opacity: 1}, 400);

        });
    }
};
