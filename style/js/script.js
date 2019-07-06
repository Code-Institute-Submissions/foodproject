function initMap() {
    var bristol = {lat: 51.458166, lng: -2.575212};
    var bristolmap = new google.maps.Map(
        document.getElementById('bristolmap'), {zoom: 15, center: bristol});
    var marker = new google.maps.Marker({
        position: bristol, 
        map: bristolmap
    });
}


