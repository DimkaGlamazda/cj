$(function () {

    $.cj.preloader.init();
	$.cj.partiacles.init();
    $.cj.owlCarousel.init();
    $.cj.homeTitleFix.init();
    $.cj.menuHandler.init();



	$(window).on('scroll', function(){
		$.cj.projectsAutocount.init();
		$.cj.cssAnimate.init();
	});

	$(window).resize( function () {
        $.cj.homeTitleFix.onResize();
        $.cj.menuHandler.onResize();
    });
});