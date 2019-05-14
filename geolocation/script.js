window.onload = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            showMap(lat,lon);
        })
    } else {
        document.write('your browser does not support geolocation');
    }
}

function showMap(lat,lon) {
    var myLatLng = new google.maps.LatLng(lat, lon);
    var mapOptions = {
        zoom: 8,
        center: myLatLng,
        maptypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'found you'
    });
}