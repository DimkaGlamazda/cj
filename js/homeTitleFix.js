if (typeof $.cj == 'undefined') $.cj = {};

$.cj.homeTitleFix = {

    container : '.home-title',


    onResize : function () {
        var width = $(window).width();
        var height = $(window).height();


        $($.cj.homeTitleFix.container).css('height', $(window).height());
     
    },

    init : function () {
        var width = $(window).width();
        var height = $(window).height();

        $($.cj.homeTitleFix.container).css('height', $(window).height());

    }
};

