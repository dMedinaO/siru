$(window).on('load', function() {

	listar();
	guardar();
	eliminar();
	editar();

});
	var listar = function(){

		var table = $("#users").DataTable({
			"responsive": true,
			"dom": '<"newtoolbar">frtip',
			"destroy":true,
			"ajax":{
				"method":"POST",
				"url": "../php/sectores/showData.php"
			},

			"columns":[
				{"data":"nameSector"},
				{"data":"createdSector"},
				{"data":"modifiedSector"},
				{"defaultContent": "<button type='button' class='viewImage btn btn-default'><i class='fa fa-file-picture-o'></i></button> <button type='button' class='detalle btn btn-success'><i class='fa fa-list-alt'></i></button> <button type='button' class='editar btn btn-primary' data-toggle='modal' data-target='#myModalEditar'><i class='fa fa-pencil-square-o'></i></button>	<button type='button' class='eliminar btn btn-danger' data-toggle='modal' data-target='#modalEliminar' ><i class='fa fa-trash-o'></i></button>"}
			],

			"language": idioma_espanol
		});

		$('#demo-custom-toolbar2').appendTo($("div.newtoolbar"));

		$('#demo-dt-addrow-btn').on( 'click', function () {
				t.row.add( [
						'Adam Doe',
						'New Row',
						'New Row',
						nifty.randomInt(1,100),
						'2015/10/15',
						'$' + nifty.randomInt(1,100) +',000'
				] ).draw();
		} );

		obtener_id_eliminar("#users tbody", table);
		obtener_data_editar("#users tbody", table);
		verDetalles("#users tbody", table);
		verImage("#users tbody", table);


	}

	var verDetalles = function(tbody, table){
		$(tbody).on("click", "button.detalle", function(){
			var data = table.row( $(this).parents("tr") ).data();
			location.href="subSectoresInSector.php?data="+data.idsector;

		});
	}

	var verImage = function(tbody, table){
		$(tbody).on("click", "button.viewImage", function(){
			var data = table.row( $(this).parents("tr") ).data();
			location.href="../resource/pictureSector/"+data.namePictureSector;

		});
	}

	var obtener_id_eliminar = function(tbody, table){
		$(tbody).on("click", "button.eliminar", function(){
			var data = table.row( $(this).parents("tr") ).data();
			var idsector = $("#frmEliminar #idsector").val( data.idsector );
		});
	}

	var obtener_data_editar = function(tbody, table){
		$(tbody).on("click", "button.editar", function(){
			var data = table.row( $(this).parents("tr") ).data();
			var name = $("#frmEditar #name").val(data.nameSector);
			var idsector = $("#frmEditar #idsector").val(data.idsector);

		});
	}

	var eliminar = function(){
		$("#eliminar-sector").on("click", function(){
			var idsector = $("#frmEliminar #idsector").val();
			$.ajax({
				method:"POST",
				url: "../php/sectores/removeData.php",
				data: {
						"idsector": idsector
					  }
			}).done( function( info ){
				var json_info = JSON.parse( info );
				mostrar_mensaje( json_info );
				location.reload(true);
			});
		});
	}

	var guardar = function(){
		$("#agregar-sector").on("click", function(){

			var name = $("#frmAgregar #name").val();

			$.ajax({
				method: "POST",
				url: "../php/sectores/addData.php",
				data: {
						"name"   : name
					}

			}).done( function( info ){

				var json_info = JSON.parse( info );
				mostrar_mensaje( json_info );
				location.reload(true);
			});
		});
	}

	var editar = function(){
		$("#editar-sector").on("click", function(){

			var name = $("#frmEditar #name").val();
			var idsector = $("#frmEditar #idsector").val();

			$.ajax({
				method: "POST",
				url: "../php/sectores/editData.php",
				data: {
						"idsector"   : idsector,
						"name" : name
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
