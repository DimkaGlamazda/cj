
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


  // $('.clients-reviews').parallax();


  /* scroll animation */

    // var latestKnownScrollY = $('html').scrollTop() || $('body').scrollTop();

    // $(window).on("scroll", function () {
    //     latestKnownScrollY = $('html').scrollTop() || $('body').scrollTop();
    // });

    // $(window).on("mousewheel DOMMouseScroll", function(event) {
    //     var scrollTo,
    //           scrollDistance  = 400,
    //           delta;
    //     if (event.type == 'mousewheel') {
    //           delta = event.originalEvent.wheelDelta / 100;
    //     } else if (event.type == 'DOMMouseScroll') {
    //           delta = - event.originalEvent.detail / 3;
    //     }
    //     scrollTo = latestKnownScrollY - delta * scrollDistance;
    //     if (scrollTo) {
    //         event.preventDefault(); 
    //         event.stopPropagation(); 
    //         $('body,html').stop().animate( { 
    //             scrollTop : scrollTo
    //          } , 500);
    //      }  
    // } );

    var isIE = ((navigator.appName == 'Microsoft Internet Explorer') || (navigator.userAgent.indexOf('Trident/7.0') != -1) || (navigator.userAgent.indexOf('Edge/') != -1));

    if(isIE){
      $('.services-call-to-action .cj-container h3').css('background', '#fff');
      $('.active-nav-item').css('background', 'transparent');
      $('.success-ico-color').css('background', '#fff');
    }







    
    

    // function initMap() {
    //   var map = new google.maps.Map(document.getElementById('map'), {
    //     center: {lat: 50.419836, lng: 30.521884},
    //     zoom: 12,
    //     styles: [
    //     {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    //     {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    //     {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    //     {
    //       featureType: 'administrative.locality',
    //       elementType: 'labels.text.fill',
    //       stylers: [{color: '#d59563'}]
    //     },
    //     {
    //       featureType: 'poi',
    //       elementType: 'labels.text.fill',
    //       stylers: [{color: '#d59563'}]
    //     },
    //     {
    //       featureType: 'poi.park',
    //       elementType: 'geometry',
    //       stylers: [{color: '#263c3f'}]
    //     },
    //     {
    //       featureType: 'poi.park',
    //       elementType: 'labels.text.fill',
    //       stylers: [{color: '#6b9a76'}]
    //     },
    //     {
    //       featureType: 'road',
    //       elementType: 'geometry',
    //       stylers: [{color: '#38414e'}]
    //     },
    //     {
    //       featureType: 'road',
    //       elementType: 'geometry.stroke',
    //       stylers: [{color: '#212a37'}]
    //     },
    //     {
    //       featureType: 'road',
    //       elementType: 'labels.text.fill',
    //       stylers: [{color: '#9ca5b3'}]
    //     },
    //     {
    //       featureType: 'road.highway',
    //       elementType: 'geometry',
    //       stylers: [{color: '#746855'}]
    //     },
    //     {
    //       featureType: 'road.highway',
    //       elementType: 'geometry.stroke',
    //       stylers: [{color: '#1f2835'}]
    //     },
    //     {
    //       featureType: 'road.highway',
    //       elementType: 'labels.text.fill',
    //       stylers: [{color: '#f3d19c'}]
    //     },
    //     {
    //       featureType: 'transit',
    //       elementType: 'geometry',
    //       stylers: [{color: '#2f3948'}]
    //     },
    //     {
    //       featureType: 'transit.station',
    //       elementType: 'labels.text.fill',
    //       stylers: [{color: '#d59563'}]
    //     },
    //     {
    //       featureType: 'water',
    //       elementType: 'geometry',
    //       stylers: [{color: '#17263c'}]
    //     },
    //     {
    //       featureType: 'water',
    //       elementType: 'labels.text.fill',
    //       stylers: [{color: '#515c6d'}]
    //     },
    //     {
    //       featureType: 'water',
    //       elementType: 'labels.text.stroke',
    //       stylers: [{color: '#17263c'}]
    //     }
    //     ]
    //   });
    // }



    var geocoder;
    var map;
    var query = new Array('Челябинск, ул. Кирова, д. 149', 'Челябинск, ул. Кирова, д. 86', 'Челябинск, ул. Кирова, д. 112');
    var idArr = new Array('mp0','mp1','mp2');



    function initialize() {
      geocoder = new google.maps.Geocoder();
      var mapOptions = {
        styles: [{
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#e30808"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#e30808"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": 17
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    }]
      }
      
      map = new google.maps.Map(document.getElementById('map'), mapOptions);
      codeAddress();
    }

    function codeAddress() {
        for (var i = 0; i < query.length; i++) {
            var address = query[i];
            geocoder.geocode({
                    'address': address
                }, function(k) {
                    return function(results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            var a = document.getElementById(idArr[k]);
                            a.onclick = function() {
                                map.setZoom(17);
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

    if($('#map').length) {
      initialize();  
    }


    $('[data-team-member="detail"]').on('click', function () {

      var duration = 300;

      var currentElem = $(this).find('.team-member-photo article');

      $('[data-team-member="detail"]').each(function (i, e) {

        var elem = $(e).find('.team-member-photo article');

        if(elem.css('opacity') != 0 && currentElem.get(0) !== elem.get(0)) {
            elem.animate({ opacity : 0 }, duration);
        }
      

      });

      if(currentElem.css('opacity') == 0) {
        currentElem.animate({ opacity : 0.7 }, duration);
        return false;
      }

      currentElem.animate({ opacity : 0 }, duration);
    });
  });






