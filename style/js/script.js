function initMap() {
/* MAP LOCATION */
    var bristol = { lat: 51.458166, lng: -2.575212 };
/* MAP POSITIONING */
    var bristolmap = new google.maps.Map(
        document.getElementById('bristolmap'), { zoom: 15, center: bristol });
/* MAP MARKER */
    var marker = new google.maps.Marker({
        position: bristol,
        map: bristolmap
    });
}