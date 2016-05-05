// GOOGLE MAP INTEGRATION
function initMap() {
  var mapDiv  = document.getElementById('map');
  var latLong = { lat: 33.835755, lng: -117.916293 }

  var map = new google.maps.Map(mapDiv, {
    center: latLong,    
    zoom: 12
  });

  var marker = new google.maps.Marker({
    position: latLong,
    map: map,
    title: 'KooKoo Grill'
  });
}

// ON SCROLL REDUCE LOGO SIZE
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 450) {
        $('#logo').addClass('smaller');

    } else {
        $('#logo').removeClass('smaller');
    }
});

var scroll = document.getElementById('scroll');
var locate = document.getElementById('location');

scroll.addEventListener('click', scrollDown);
locate.addEventListener('click', scrollLocation);

function scrollDown(e) {
  e.preventDefault;

  $('html, body').animate({
      scrollTop: $('#content-container').offset().top
  }, 750);
}

function scrollLocation(e) {
  e.preventDefault;
  
  $('html, body').animate({
      scrollTop: $('#map').offset().top
  }, 1000);
}