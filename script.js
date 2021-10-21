function initMap(){
   
    var map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 47.6562, lng: -122.3021},
        zoom: 11,
        fullscreenControl: false,
        scrollwheel: false
    });







/*
    var geocoder = new google.maps.Geocoder();
     var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);*/
/*
    if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(function(position){

alert(position);

      });
    }*/

    
}