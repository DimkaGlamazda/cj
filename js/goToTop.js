if (typeof $.cj == 'undefined') $.cj = {};

$.cj.goToTop = {

    trigger : '[data-go-to-top="btn"]',
    triggerDown : '[data-go-to-top="btn-down"]',
    downDestination : '[data-go-to-top=down-destination]',

    init : function () {
        $(document).on('click', this.trigger, this.go);
        $(document).on('click', this.triggerDown, this.goDown);

        $(window).on('scroll', this.onScroll);
        $.cj.goToTop.onResize();
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

    onResize : function () {
       var elem = $($.cj.goToTop.trigger);
       var parent = elem.parent();
       var right = parent.offset().left;
       elem.css('right', right + 10);

    },

    go : function () {
        $('html, body').animate({scrollTop: 0},500);
        return false;
    },

    goDown : function () {
        var destination = $($.cj.goToTop.downDestination).offset().top;
        $('html, body').animate({scrollTop: destination},500);
        return false;
    }
};

