// GOOGLE MAP INTEGRATION
function initMap() {
  var mapDiv  = document.getElementById('map');
  var latLong = { lat: 33.835755, lng: -117.916293 }

  var map = new google.maps.Map(mapDiv, {
    center: latLong,
    zoom: 12,
    scrollwheel: false
  });

  var marker = new google.maps.Marker({
    position: latLong,
    map: map,
    title: 'KooKoo Grill'
  });
}

// NAV LINKS
var aboutLink = document.getElementById('about');
var menuLink  = document.getElementById('menu');
var findLink  = document.getElementById('findUs');

var about = document.getElementById('aboutContainer');
var menu  = document.getElementById('menuContainer');
var find  = document.getElementById('mapContainer');

aboutLink.addEventListener('click', scrollAbout);
menuLink.addEventListener('click', scrollMenu);
findLink.addEventListener('click', scrollFind);

function scrollAbout(e) {
  e.preventDefault;

  $('html, body').animate({
      scrollTop: $(about).offset().top
  }, 750);
}

function scrollMenu(e) {
  e.preventDefault;

  $('html, body').animate({
      scrollTop: $(menu).offset().top
  }, 750);
}

function scrollFind(e) {
  e.preventDefault;

  $('html, body').animate({
      scrollTop: $(find).offset().top
  }, 750);
}
