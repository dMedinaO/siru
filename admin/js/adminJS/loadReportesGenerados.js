$(window).on('load', function() {
	listar();
	editar();
	asignarReporte();

});

	var listar = function(){

		var table = $("#reportes").DataTable({
			"order": [[ 2, "desc" ]],
			"responsive": true,
			"dom": '<"newtoolbar">frtip',
			"destroy":true,
			"ajax":{
				"method":"POST",
				"url": "../php/reportes/showDataReport.php"
			},

			"columns":[
				{"data":"dni"},
				{"data":"nameCategory"},
				{"data":"dateReport"},
				{"data":"stageReport"},
				{"data":"nameSector"},
				{"data":"nombreSubSector"},
				{"data":"priority"},
				{"defaultContent": "<button type='button' class='detalle btn btn-default'><i class='fa fa-user'></i></button> <button type='button' class='asignar btn btn-success' data-toggle='modal' data-target='#myModalAsignar'><i class='fa fa-table'></i></button> <button type='button' class='editar btn btn-primary' data-toggle='modal' data-target='#myModalEditar'><i class='fa fa-pencil-square-o'></i></button>	"}
			],

			"language": idioma_espanol
		});

		$('#demo-custom-toolbar2').appendTo($("div.newtoolbar"));
		obtener_data_editar("#reportes tbody", table);
		obtener_data_Asignar("#reportes tbody", table);
		obtener_data_Detalle("#reportes tbody", table);

	}

	var obtener_data_Asignar = function(tbody, table){
		$(tbody).on("click", "button.asignar", function(){
			var data = table.row( $(this).parents("tr") ).data();
			var idreportUser = $("#frmAsignar #idreportUser").val( data.idreportUser );

		});
	}

	var obtener_data_Detalle = function(tbody, table){
		$(tbody).on("click", "button.detalle", function(){
			var data = table.row( $(this).parents("tr") ).data();
			var idreportUser = data.idreportUser;
			location.href="reportSelectedView.php?data="+data.dateReport;
		});
	}

	var obtener_data_editar = function(tbody, table){
		$(tbody).on("click", "button.editar", function(){
			var data = table.row( $(this).parents("tr") ).data();
			var idcategoryReport = $("#frmEditar #idreportUser").val( data.idreportUser );

		});
	}

	var editar = function(){
		$("#editar-reporte").on("click", function(){

			var priority = $("#frmEditar #priority").val();
			var categoria = $("#frmEditar #categoria").val();
			var idreportUser = $("#frmEditar #idreportUser").val();

			$.ajax({
				method: "POST",
				url: "../php/reportes/editReportNoCategorizado.php",
				data: {

						"priority" : priority,
						"categoria"   : categoria,
						"idreportUser" : idreportUser
					}

			}).done( function( info ){

				var json_info = JSON.parse( info );
				mostrar_mensaje( json_info );
				location.reload(true);
			});
		});
	}

	var asignarReporte = function(){
		$("#asignar-reporte").on("click", function(){

			var idreportUser = $("#frmAsignar #idreportUser").val();
			var categoria = $("#frmAsignar #categoria").val();

			$.ajax({
				method: "POST",
				url: "../php/reportes/asignarReporte.php",
				data: {

						"idreportUser" : idreportUser,
						"categoria"   : categoria
					}

			}).done( function( info ){

				var json_info = JSON.parse( info );
				mostrar_mensaje( json_info );
				location.reload(true);
			});
		});
	}

	var mostrar_mensaje = function( informacion ){

		var texto = "", color = "";
		if( informacion.respuesta == "BIEN" ){
			texto = "<strong>Bien!</strong> Se han guardado los cambios correctamente.";
			color = "#379911";
		}else if( informacion.respuesta == "ERROR"){
			texto = "<strong>Error</strong>, no se ejecutó la consulta.";
			color = "#C9302C";
		}else if( informacion.respuesta == "EXISTE" ){
			texto = "<strong>Información!</strong> el usuario ya existe.";
			color = "#5b94c5";
		}else if( informacion.respuesta == "VACIO" ){
			texto = "<strong>Advertencia!</strong> debe llenar todos los campos solicitados.";
			color = "#ddb11d";
		}else if( informacion.respuesta == "OPCION_VACIA" ){
			texto = "<strong>Advertencia!</strong> la opción no existe o esta vacia, recargar la página.";
			color = "#ddb11d";
		}

		$(".mensaje").html( texto ).css({"color": color });
		$(".mensaje").fadeOut(5000, function(){
			$(this).html("");
			$(this).fadeIn(3000);
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
