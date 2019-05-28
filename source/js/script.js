var nav = document.querySelector(".navigation");
var navToggle = document.querySelector(".navigation__toggle");

nav.classList.remove("navigation--nojs");

navToggle.addEventListener("click", function () {
  if (nav.classList.contains("navigation--closed")) {
    nav.classList.remove("navigation--closed");
    nav.classList.add("navigation--opened");
  } else {
    nav.classList.add("navigation--closed");
    nav.classList.remove("navigation--opened");
  }
});

function initMap() {
  var spot = { lat: 59.9387165, lng: 30.3208587 };
  var map = new google.maps.Map(
    document.getElementById("map"), { zoom: 14, center: spot });
  var image = "./img/map-pin.png";
  var marker = new google.maps.Marker({

    position: spot,
    map: map,
    icon: image
  });
}
