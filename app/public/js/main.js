// $(document).ready(function(){
//    var scroll_start = 0;
//    var startchange = $('#about-container');
//    var offset = startchange.offset();
//
//    $(document).scroll(function() {
//       scroll_start = $(this).scrollTop();
//
//       if(scroll_start > offset.top) {
//           $('.navbar').css('background-color', '#d72a45');
//           $('.nav-links').css('color', '#FDF9FD');
//           $('.my-name').css('color', '#FDF9FD');
//           $('.social-links').css('color', '#FDF9FD');
//           $('.navbar').css('visibility', 'visible');
//        } else {
//           $('.navbar').css('visibility', 'hidden');
//        }
//    });
// });

// GOOGLE MAP INTEGRATION
function initMap() {
  var mapDiv = document.getElementById('map');
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
var aboutLink = document.getElementById('aboutLink');
var menuLink = document.getElementById('menuLink');
var contactLink = document.getElementById('contactLink');

var fixedAboutLink = document.getElementById('fixedAboutLink');
var fixedMenuLink = document.getElementById('fixedMenuLink');
var fixedContactLink = document.getElementById('fixedContactLink');

var about = document.getElementById('about-container');
var menu = document.getElementById('menu-container');
var find = document.getElementById('map-container');

// scroll.animateScroll(about, aboutLink, options);

function scrollAbout() {
  var scroll = new SmoothScroll();
  var options = { speed: 1000, easing: 'easeOutCubic' }

  var aboutLink = document.querySelector('aboutLink');
  var about = document.getElementById('about-container');

  scroll.animateScroll(about, aboutLink, options);
}

function scrollMenu() {
  var scroll = new SmoothScroll();
  var options = { speed: 1500, easing: 'easeOutCubic' }

  var aboutLink = document.querySelector('menuLink');
  var about = document.getElementById('menu-container');

  scroll.animateScroll(about, aboutLink, options);
}

function scrollContact() {
  var scroll = new SmoothScroll();
  var options = { speed: 2000, easing: 'easeOutCubic' }

  var aboutLink = document.querySelector('contactLink');
  var about = document.getElementById('contact-container');

  scroll.animateScroll(about, aboutLink, options);
}

aboutLink.addEventListener('click', scrollAbout);
menuLink.addEventListener('click', scrollMenu);
contactLink.addEventListener('click', scrollContact);

fixedAboutLink.addEventListener('click', scrollAbout);
fixedMenuLink.addEventListener('click', scrollMenu);
fixedContactLink.addEventListener('click', scrollContact);

// SCROLL REVEAL
window.sr = ScrollReveal();

sr.reveal('#about-container', { duration: 300 });
sr.reveal('#menu-container', { duration: 300 });
sr.reveal('#gallery-row', { duration: 300 });
sr.reveal('#contact-row', { duration: 300 });
