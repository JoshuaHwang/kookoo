function initMap() {
  var mapDiv  = document.getElementById('map');
  var latLong = { lat: 33.835755, lng: -117.916293 }

  var map = new google.maps.Map(mapDiv, {
    center: latLong,    
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: latLong,
    map: map,
    title: 'KooKoo Grill'
  });
}

var scroll   = document.getElementById('scroll');
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