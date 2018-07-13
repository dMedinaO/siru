$(document).ready(function () {

	var map;
	var markers = [];

	var lat=-33.4575204;
	var lng=-70.6643962;

	var myLatLng = {lat: -33.4575204, lng: -70.6643962};

	initMap(myLatLng, markers);

	console.log(lat);
	console.log(lng);

	//funcion que permite procesar la data del formulario
	guardar();
});

var guardar = function(){

	$("#agregar-reporte").on("click", function(){

		//obtenemos la informacion del mapa....
		var latitud = lat;
		var longitud = lng;

		//obtenemos la informacion de la fecha y hora...
		var fecha = $("#frmAgregar #myDatepicker2").val();
		var hora = $("#frmAgregar #myDatepicker3").val();

		//obtenemos la informacion sobre el detalle
		var categoria = $("#frmAgregar #categoria").val();
		var priority = $("#frmAgregar #priority").val();
		var detalle = $("#frmAgregar #detalle").val();

		//obtenemos la informacion sobre el archivo...
		var nameFile = $("#frmAgregar #nameFile").val();

		$.ajax({
			method: "POST",
			url: "../php/reportes/addData.php",
			data: {
				"latitud"   : latitud,
				"longitud"  : longitud,
				"fecha": fecha,
				"hora" : hora,
				"categoria" : categoria,
				"priority"  : priority,
				"detalle" : detalle,
				"nameFile" : nameFile
			}

		}).done( function( info ){

			var json_info = JSON.parse( info );
			//mostrar_mensaje( json_info );
			location.reload("../reportesInput/");
		});
	});
}

function initMap(myLatLng, markers) {

	var haightAshbury = myLatLng;

	map = new google.maps.Map(document.getElementById('map'), {

		zoom: 17,
        center: haightAshbury,
        mapTypeId: 'terrain'
	});

	// This event listener will call addMarker() when the map is clicked.
    map.addListener('click', function(event) {

		addMarker(event.latLng, markers);
    });

	// Adds a marker at the center of the map.
    //addMarker(haightAshbury, markers);
}

// Sets the map on all markers in the array.
function setMapOnAll(map, markers) {
	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(map);
	}
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers(markers) {
	setMapOnAll(null, markers);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers(markers) {
	clearMarkers(markers);
    markers = [];
}

// Adds a marker to the map and push to the array.
function addMarker(location, markers) {

	deleteMarkers(markers);

	var marker = new google.maps.Marker({
		position: location,
        map: map
	});


	lat = location.lat();
	lng = location.lng();

	console.log(lat);
	console.log(lng);

	markers.push(marker);

}
