// Google maps pin tooltip	
	var markers = [
    	{
       		"lat": '-22.9222972',
           "lng": '-43.185657',
		  
			"description": 'PARADA<br/><a href="http://www.themezinho.net/parada" style="color:#ef3c3c; font-weight:600;">Get it now</a>'
        }
	];
	
	
	// Google maps main api
	window.onload = function () {
		var mapOptions = {
			center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
        	zoom: 15,
			flat: true,
			scrollwheel:false,
			panControl:false,
			zoomControl:true,
			streetViewControl: false,
			mapTypeControl: false,
		
	// Google maps style	
           	styles: [{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"},{"color":"#e1e2e4"}]},{"featureType":"landscape","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"visibility":"off"},{"color":"#dddddd"}]},{"featureType":"landscape.man_made","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#e1e2e3"}]},{"featureType":"landscape.natural","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#e1e2e3"}]},{"featureType":"landscape.natural.landcover","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#b5aaaa"}]},{"featureType":"landscape.natural.terrain","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#a9bb9d"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"transit.line","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"transit.station","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.airport","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.bus","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.bus","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.rail","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#a6b9d6"}]}],
           	mapTypeId: google.maps.MapTypeId.ROADMAP
        };
			var infoWindow = new google.maps.InfoWindow();
			var map = new google.maps.Map(document.getElementById("map"), mapOptions);
			for (i = 0; i < markers.length; i++) {
			var data = markers[i]
           	var myLatlng = new google.maps.LatLng(data.lat, data.lng);
			var marker = new google.maps.Marker({
           	position: myLatlng,
           	map: map,
        	icon: 'images/map-pin.png',
           	title: data.title
           	});
			(function (marker, data) {
           	google.maps.event.addListener(marker, "click", function (e) {
              	infoWindow.setContent(data.description);
              	infoWindow.open(map, marker);
              });
            })(marker, data);
        }
    };