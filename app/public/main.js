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