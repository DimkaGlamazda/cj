if (typeof $.cj == 'undefined') $.cj = {};

$.cj.menuHandler = {

    header : '.header',

    langMenuTrigger : '.header-lang-btn',
    langMenuList : '.header-languages',



    onResize : function () {

        var width = $(window).width();

        if(width < 1099){
            $($.cj.menuHandler.header).css('position', 'fixed')
        } else{
            $($.cj.menuHandler.header).css('position', 'absolute')
        }

        $(".menu-control").removeClass('active')
            .removeClass('internal')
            .addClass('external');

        $('.header-controls')
            .css('display', 'none')
            .removeAttr('style');


        var langBlock = $($.cj.menuHandler.langMenuList);

        if(langBlock.css('display') == 'block'){
            langBlock.slideUp('medium');
        }

    },

    onScroll : function () {
        var langBlock = $($.cj.menuHandler.langMenuList);

        if(langBlock.css('display') == 'block'){
            langBlock.slideUp('medium');
        }
    },

    init : function () {


        var width = $(window).width();

        if(width < 1099){
            $($.cj.menuHandler.header).css('position', 'fixed')
        } else{
            $($.cj.menuHandler.header).css('position', 'absolute')
        }


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


        $(document).on('click', this.langMenuTrigger, this.langToggle);
    },
    
    langToggle : function () {
        var langBlock = $($.cj.menuHandler.langMenuList);
        langBlock.slideToggle('medium');
        return false;
    }
};
