var siberia = new google.maps.LatLng(37.625364,-122.423905);

function initialize() {
  var myOptions = {
    zoom:19,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"), myOptions);
  var infowindow = new google.maps.InfoWindow({
          map: map,
          position: siberia,
          content: 'Location found using HTML5.'
        });

  var marker =  new google.maps.Marker({
    position: siberia,
    map: map,
    title: "omt"
  });
  map.setCenter(siberia);

}
  google.maps.event.addDomListener(window, 'load', initialize);

var x = document.getElementById("current-location"),
currentLocation;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 

  currentLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
  google.maps.event.addDomListener(window, 'load', initialize);
}

function initialize() {
  var myOptions = {
    zoom:19,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"), myOptions);
  var infowindow = new google.maps.InfoWindow({
          map: map,
          position: currentLocation,
          content: 'this should show the adds'
        });

  var marker =  new google.maps.Marker({
    position: currentLocation,
    map: map,
    title: "omt"
  });
  map.setCenter(currentLocation);

}
