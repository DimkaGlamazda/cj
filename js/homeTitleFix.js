if (typeof $.cj == 'undefined') $.cj = {};

$.cj.homeTitleFix = {

    container : '.home-title',


    onResize : function () {
        var width = $(window).width();
        var height = $(window).height();



        if(width > 400 && height > 500){
            $($.cj.homeTitleFix.container).css('height', $(window).height());
        } else {
            $($.cj.homeTitleFix.container).css('height', 500);
        }
    },

    init : function () {
        var width = $(window).width();
        var height = $(window).height();

        if(width > 400 && height > 500){
            $($.cj.homeTitleFix.container).css('height', $(window).height());
        }  else {
            $($.cj.homeTitleFix.container).css('height', 500);
        }
    }
};

