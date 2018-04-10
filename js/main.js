var is_firstview = true;
var mouse = {x: 0, y: 0, z: 0};


$(window).on('mousemove', function () {
    var x = event.pageX;
    var y = event.pageY;
    mouse.x = x;
    mouse.y = y;
});

var animateRenderFrame;

function render() {
    animateRenderFrame = window.requestAnimationFrame(render);
    if (is_firstview) {
        $.cj.Particles.onUpdate();
    }
}


var is_mobile_width = false;
var is_pad_width = false;
var is_desktop_width = true;

var windowWidth = $(window).width();
var windowHeight = $(window).height();

if (windowWidth < 680) {
    is_mobile_width = true;
    is_pad_width = false;
    is_desktop_width = false;
} else if (windowWidth < 1024) {
    is_pad_width = true;
    is_mobile_width = false;
    is_desktop_width = false;
} else {
    is_desktop_width = true;
    is_pad_width = false;
    is_mobile_width = false;
}

$(window).resize(function () {
    windowWidth = $(window).width();
    windowHeight = $(window).height();

    if (windowWidth < 680) {
        is_mobile_width = true;
        is_pad_width = false;
        is_desktop_width = false;
    } else if (windowWidth < 1024) {
        is_pad_width = true;
        is_mobile_width = false;
        is_desktop_width = false;
    } else {
        is_desktop_width = true;
        is_pad_width = false;
        is_mobile_width = false;
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


    $(window).on('scroll', function () {
        $.cj.projectsAutocount.init();
        $.cj.cssAnimate.init();
        $.cj.menuHandler.onScroll();
    });


    var isIE = ((navigator.appName == 'Microsoft Internet Explorer') || (navigator.userAgent.indexOf('Trident/7.0') != -1) || (navigator.userAgent.indexOf('Edge/') != -1));

    if (isIE) {
        $('.services-call-to-action .cj-container h3').css('background', '#fff');
        $('.active-nav-item').css('background', 'transparent');
        $('.success-ico-color').css('background', '#fff');
    }


    var geocoder;
    var map;
    var query = new Array('г. Минск, улица Гамарника, 30', 'бульвар Вацлава Гавела, 4, Киев, 02000');
    var idArr = new Array('mp1', 'mp0');


    function initialize() {
        geocoder = new google.maps.Geocoder();
        var mapOptions = {
            center: {'lat': 50.448087, 'lng': 30.425054},
            zoom: 4,
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "color": "#ff0000"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#444444"
                        }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "invert_lightness": true
                        }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "color": "#e30808"
                        },
                        {
                            "visibility": "simplified"
                        },
                        {
                            "invert_lightness": true
                        },
                        {
                            "gamma": "1.00"
                        }
                    ]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "color": "#e30808"
                        },
                        {
                            "visibility": "simplified"
                        },
                        {
                            "invert_lightness": true
                        }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "color": "#e30808"
                        },
                        {
                            "visibility": "simplified"
                        },
                        {
                            "invert_lightness": true
                        }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "color": "#e30808"
                        },
                        {
                            "invert_lightness": true
                        }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "color": "#e30808"
                        },
                        {
                            "visibility": "simplified"
                        },
                        {
                            "invert_lightness": true
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#e30808"
                        },
                        {
                            "invert_lightness": true
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.attraction",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.business",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.government",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.medical",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                }
            ]
        }

        map = new google.maps.Map(document.getElementById('map'), mapOptions);
        codeAddress();
    }

    function codeAddress() {
        for (var i = 0; i < query.length; i++) {
            var address = query[i];
            geocoder.geocode({
                    'address': address
                }, function (k) {
                    return function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            var a = document.getElementById(idArr[k]);
                            a.onclick = function () {
                                map.setZoom(10);
                                map.setCenter(results[0].geometry.location);
                            }
                            map.setCenter(results[0].geometry.location);
                            var marker = new google.maps.Marker({
                                map: map,
                                position: results[0].geometry.location
                            });
                        } else {
                            alert('Geocode was not successful for the following reason: ' + status);
                        }
                    }
                }(i)
            );
        }
    }

    if ($('#map').length) {
        initialize();
    }


    $('[data-team-member="detail"]').on('click', function () {

        var duration = 300;

        var currentElem = $(this).find('.team-member-photo article');

        $('[data-team-member="detail"]').each(function (i, e) {

            var elem = $(e).find('.team-member-photo article');

            if (elem.css('opacity') != 0 && currentElem.get(0) !== elem.get(0)) {
                elem.animate({opacity: 0}, duration);
            }


        });

        if (currentElem.css('opacity') == 0) {
            currentElem.animate({opacity: 0.7}, duration);
            return false;
        }

        currentElem.animate({opacity: 0}, duration);
    });

    $(document).on('mouseover', '.sevice-wrapper', function () {
        var current = $(this);
        $.each($('.sevice-wrapper'), function (i, e) {
            if (current.get(0) !== $(e).get(0)) {
                $(e).find('.sevice-wrapper-overlay').css('opacity', '0.7');
            }
        });
    });

    $(document).on('mouseout', '.sevice-wrapper', function () {
        $.each($('.sevice-wrapper'), function (i, e) {
            $(e).find('.sevice-wrapper-overlay').css('opacity', '0');
        });
    });

});






