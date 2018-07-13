$(document).on("ready", function(){
	listar();
	editar();
	asignarReporte();

});

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

	var listar = function(){

		var valor_llave= getQuerystring('data');
		var table = $("#reportes").DataTable({
			"destroy":true,
			"ajax":{
				"method":"POST",
				"url": "../php/reportes/showDataReportInEvent.php?data="+valor_llave
			},

			"columns":[
				{"data":"dni"},
				{"data":"categoryName"},
				{"data":"dateReport"},
				{"data":"status"},
				{"data":"latitud"},
				{"data":"longitud"},
				{"data":"detalle"},
				{"data":"priority"},
				{"defaultContent": "<button type='button' class='asignar btn btn-success' data-toggle='modal' data-target='#myModalAsignar'><i class='fa fa-table'></i></button> <button type='button' class='editar btn btn-primary' data-toggle='modal' data-target='#myModalEditar'><i class='fa fa-pencil-square-o'></i></button>	"}
			],

			"language": idioma_espanol
		});

		obtener_data_editar("#reportes tbody", table);
		obtener_data_Asignar("#reportes tbody", table);

	}

	var obtener_data_Asignar = function(tbody, table){
		$(tbody).on("click", "button.asignar", function(){
			var data = table.row( $(this).parents("tr") ).data();
			var idreportUser = $("#frmAsignar #idreportUser").val( data.idreportUser );
			var eventsReport = $("#frmAsignar #eventsReport").val( data.eventsReport );

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
				listar();
			});
		});
	}

	var asignarReporte = function(){
		$("#asignar-reporte").on("click", function(){

			var eventsReport = $("#frmAsignar #eventsReport").val();
			var idreportUser = $("#frmAsignar #idreportUser").val();
			var categoria = $("#frmAsignar #categoria").val();

			$.ajax({
				method: "POST",
				url: "../php/reportes/reasignarReporte.php",
				data: {

						"eventsReport" : eventsReport,
						"idreportUser" : idreportUser,
						"categoria"   : categoria
					}

			}).done( function( info ){

				var json_info = JSON.parse( info );
				mostrar_mensaje( json_info );
				listar();
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
