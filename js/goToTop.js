if (typeof $.cj == 'undefined') $.cj = {};

$.cj.goToTop = {

    trigger : '[data-go-to-top="btn"]',

    init : function () {
        $(document).on('click', this.trigger, this.go);

        $(window).on('scroll', this.onScroll);
    },

    onScroll : function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var height = $(window).height();

        if(scrollTop >= height){
            $($.cj.goToTop.trigger).slideDown();
        } else {
            $($.cj.goToTop.trigger).slideUp();
        }
    },

    go : function () {
        $('html, body').animate({scrollTop: 0},500);
        return false;
    }
};

