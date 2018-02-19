(function () {
    function initMap() {
        let map;
        let mapContainer = document.querySelector('#map');
        let mapCoordinates = {lat: 41.157944, lng: -8.629105};
        let mapOptions = {
            center: mapCoordinates,
            zoom: 15,
            disableDefaultUI: true,
            scrollwheel:  false
        };


        map = new google.maps.Map(mapContainer, mapOptions);

        let marker = new google.maps.Marker({
            position: {lat: 41.165944, lng: -8.620105},
            map: map,
            icon: "img/pin.png"
        });


        google.maps.event.addDomListener(window, "resize", function() {
            let center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });

    }

    document.addEventListener('DOMContentLoaded', initMap);
})();



