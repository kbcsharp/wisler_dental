var map;
var location;
  function initMap() {
    location = {lat: 40.560, lng: -85.689};
    map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 4,
    });
  }
