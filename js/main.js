
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
    $.cj.goToTop.onResize();


});


$(function () {

    $.cj.preloader.init();
	$.cj.Particles.init(120, true);
    render();
    $.cj.owlCarousel.init();
    $.cj.homeTitleFix.init();
    $.cj.menuHandler.init();
    $.cj.goToTop.init();
    $.cj.projectsAutocount.init();


    $(window).on('scroll', function(){
      $.cj.projectsAutocount.init();
      $.cj.cssAnimate.init();
      $.cj.menuHandler.onScroll();
	});




    /* scroll animation */

    var latestKnownScrollY = $('html').scrollTop() || $('body').scrollTop();

    $(window).on("scroll", function () {
        latestKnownScrollY = $('html').scrollTop() || $('body').scrollTop();
    });

    $(window).on("mousewheel DOMMouseScroll", function(event) {
        var scrollTo,
              scrollDistance  = 400,
              delta;
        if (event.type == 'mousewheel') {
              delta = event.originalEvent.wheelDelta / 100;
        } else if (event.type == 'DOMMouseScroll') {
              delta = - event.originalEvent.detail / 3;
        }
        scrollTo = latestKnownScrollY - delta * scrollDistance;
        if (scrollTo) {
            event.preventDefault(); 
            event.stopPropagation(); 
            $('body,html').stop().animate( { 
                scrollTop : scrollTo
             } , 500);
         }  
    } );


    var isIE = ((navigator.appName == 'Microsoft Internet Explorer') || (navigator.userAgent.indexOf('Trident/7.0') != -1) || (navigator.userAgent.indexOf('Edge/') != -1));

    if(isIE){
        $('.services-call-to-action .cj-container h3').css('background', '#fff');
        $('.active-nav-item').css('background', 'transparent');
        $('.success-ico-color').css('background', '#fff');
    }


});






