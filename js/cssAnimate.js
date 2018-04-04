if (typeof $.cj == 'undefined') $.cj = {};

$.cj.cssAnimate = {

    triggerContainer: '[data-css-animate=trigger]',
    actionType: 'animated fadeInUp',

    init: function () {

        if($(window).width() <= 680){
            return false;
        }

        $.each($(this.triggerContainer), function (i, e) {
            var elem = $(e);
            var w_top = $(window).scrollTop() + $(window).height();
            var e_top = elem.offset().top;

            if (e_top < w_top) {
                elem.addClass($.cj.cssAnimate.actionType);
            }
        });
    }
};