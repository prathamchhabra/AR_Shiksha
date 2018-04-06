function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 28.649306799999998, lng: 77.1889431}
    });
    directionsDisplay.setMap(map);
    var searchBtn = document.querySelector('#searchBtn');
    searchBtn.addEventListener('click', function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    });
        
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    navigator.geolocation.getCurrentPosition(function (res) {
        directionsService.route({
            origin: '28.7365647,77.111763',
            destination: res.coords.latitude + .0001+ ',' + (res.coords.longitude + .0001),
            travelMode: 'WALKING'
        }, function(response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
                console.log(response.routes[0].legs);
                var m = document.querySelector('#floating-panel');
                m.textContent = response.routes[0].legs[0].distance.text;
                if(response.routes[0].legs[0].distance.value < 400) {
                    console.log("Ayush Jain");
                }
            } else {
                console.log(status);
            }
        });
    });

}