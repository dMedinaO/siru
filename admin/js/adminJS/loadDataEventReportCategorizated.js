$(window).on('load', function() {

	cargarInfo();
	listarReportes();
	editarStageReport();


});

var listarReportes = function(){

	var data = getQuerystring('data');
	var table = $("#reportes").DataTable({
		"responsive": true,
		"dom": '<"newtoolbar">frtip',
		"destroy":true,
		"ajax":{
			"method":"POST",
			"url": "../php/TreeView/showDataReportByEvent.php?data="+data
		},

		"columns":[
			{"data":"nameSector"},
			{"data":"nombreSubSector"},
			{"data":"dni"},
			{"data":"dateReport"},
			{"data":"stageReport"},
			{"data":"priority"},
			{"data":"message"},
			{"defaultContent": "<button type='button' class='editar btn btn-primary' data-toggle='modal' data-target='#myModalEditar'><i class='fa fa-pencil-square-o'></i></button>	"}
		],

		"language": idioma_espanol
	});

	$('#demo-custom-toolbar2').appendTo($("div.newtoolbar"));
	obtener_data_editar("#reportes tbody", table);

}

var getDataEditarName = function(){
	$('#editName').on("click", function(){
		
	});
}

var obtener_data_editar = function(tbody, table){
	$(tbody).on("click", "button.editar", function(){
		var data = table.row( $(this).parents("tr") ).data();
		var ideventsReport = $("#frmEditar #idreportUser").val( data.idreportUser );
	});
}

var editarStageReport = function(){
	$("#editar-reporte").on("click", function(){

		var stage = $("#frmEditar #stage").val();
		var idreportUser = $("#frmEditar #idreportUser").val();

		$.ajax({
			method: "POST",
			url: "../php/TreeView/editStageReport.php",
			data: {

					"stage" : stage,
					"idreportUser"   : idreportUser
				}

		}).done( function( info ){

			var json_info = JSON.parse( info );
			location.reload(true);
		});
	});
}

var cargarInfo = function(){

  var data = getQuerystring('data');
	$.ajax({
			method:"POST",
			url: "../php/TreeView/getInformationEvent.php?data="+data,

		}).done( function( info ){
      var response = JSON.parse(info);

			$(".nombreEvento").html( response.nameEvent );
      $(".categoryEvent").html( response.nameCategory );
      $(".stageEvent").html( response.stageEvent );

		});
}

var idioma_espanol = {
		"sProcessing":     "Procesando...",
		"sLengthMenu":     "Mostrar _MENU_ registros",
		"sZeroRecords":    "No se encontraron resultados",
		"sEmptyTable":     "Ningún dato disponible en esta tabla",
		"sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
		"sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
		"sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
		"sInfoPostFix":    "",
		"sSearch":         "Buscar:",
		"sUrl":            "",
		"sInfoThousands":  ",",
		"sLoadingRecords": "Cargando...",
		"oPaginate": {
				"sFirst":    "Primero",
				"sLast":     "Último",
				"sNext":     "Siguiente",
				"sPrevious": "Anterior"
		},
		"oAria": {
				"sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
				"sSortDescending": ": Activar para ordenar la columna de manera descendente"
		}
}

//funcion para recuperar la clave del valor obtenido por paso de referencia
function getQuerystring(key, default_) {
  if (default_ == null)
    default_ = "";
  key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regex = new RegExp("[\\?&amp;]"+key+"=([^&amp;#]*)");
  var qs = regex.exec(window.location.href);
  if(qs == null)
    return default_;
  else
    return qs[1];
};
