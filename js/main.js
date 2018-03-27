
var  is_firstview = true;
var  mouse = {x:0, y:0, z:0 };


$(window).on('mousemove', function(){
    var x = event.pageX;
    var y = event.pageY;
    mouse.x = x;
    mouse.y = y;
});

var animateRenderFrame;

function render() {
    animateRenderFrame = window.requestAnimationFrame( render );
    if( is_firstview ){
        $.cj.Particles.onUpdate();
    }
}


var is_mobile_width = false;
var is_pad_width = false;
var is_desktop_width = true;

var windowWidth = $(window).width();
var windowHeight = $(window).height();

if( windowWidth < 680 ){
    is_mobile_width  = true;
    is_pad_width     = false;
    is_desktop_width = false;
} else if( windowWidth < 1024 ){
    is_pad_width     = true;
    is_mobile_width  = false;
    is_desktop_width = false;
} else {
    is_desktop_width = true;
    is_pad_width     = false;
    is_mobile_width  = false;
}

$(window).resize( function () {
    windowWidth = $(window).width();
    windowHeight = $(window).height();

    if( windowWidth < 680 ){
        is_mobile_width  = true;
        is_pad_width     = false;
        is_desktop_width = false;
    } else if( windowWidth < 1024 ){
        is_pad_width     = true;
        is_mobile_width  = false;
        is_desktop_width = false;
    } else {
        is_desktop_width = true;
        is_pad_width     = false;
        is_mobile_width  = false;
    }

    $.cj.homeTitleFix.onResize();
    $.cj.menuHandler.onResize();
    $.cj.Particles.onResize();

});


$(function () {

    $.cj.preloader.init();
	$.cj.Particles.init(120, true);
    render();
    $.cj.owlCarousel.init();
    $.cj.homeTitleFix.init();
    $.cj.menuHandler.init();
    $.cj.goToTop.init();

    $(window).on('scroll', function(){
      $.cj.projectsAutocount.init();
      $.cj.menuHandler.onScroll();
	});

});






