if (typeof $.cj == 'undefined') $.cj = {};

$.cj.homeTitleFix = {

    container : '.home-title',

    is_mobile_size_set : false,


    doResize : function () {
        if(is_mobile_width && this.is_mobile_size_set)
            return false;

        var height = $(window).height();

        $($.cj.homeTitleFix.container).css('height', height);

        if(is_mobile_width)
            this.is_mobile_size_set = true;
        else
            this.is_mobile_size_set = true;
    },

    onResize : function () {
        this.doResize();
    },

    init : function () {
        this.doResize();
    }
};

