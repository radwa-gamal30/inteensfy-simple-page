navigator.geolocation.getCurrentPosition(success,fail);
function success(position){
    position.coords.latitude;
    position.coords.longitude;
    initMap( position.coords.latitude,position.coords.longitude);

}

function fail(e){
console.log(e)
}
function initMap(l1,l2) {
    var myLatLng = { lat: l1, lng: l2 };


    var map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 8,
    });
  
   var marker= new google.maps.Marker({
    map:map,
    position: myLatLng,
    title: "My Current Location!",
    });
  }
  
  window.initMap = initMap;