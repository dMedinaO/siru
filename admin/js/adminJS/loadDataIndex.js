$(window).on('load', function() {

	cargarInfo();

});

var cargarInfo = function(){
	$.ajax({
			method:"POST",
			url: "php/statisticsData/loadDataIndex.php",

		}).done( function( info ){
			console.log(info.asignados);
			$(".reportesAsignados").html( info.asignados );
			$(".reportesRegistrados").html( info.registrados )

		});
}
