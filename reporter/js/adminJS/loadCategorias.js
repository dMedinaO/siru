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
				"url": "../php/categorias/showData.php"
			},

			"columns":[
				{"data":"nameCategory"},
				{"data":"descriptionCategory"},
				{"data":"createdCategory"},
				{"data":"modifiedCategory"},
				{"defaultContent": " <button type='button' class='verDetalle btn btn-success'><i class='fa fa-picture-o'></i></button> <button type='button' class='editar btn btn-primary' data-toggle='modal' data-target='#myModalEditar'><i class='fa fa-pencil-square-o'></i></button>	<button type='button' class='eliminar btn btn-danger' data-toggle='modal' data-target='#modalEliminar' ><i class='fa fa-trash-o'></i></button>"}
			],

			"language": idioma_espanol
		});

		$('#demo-custom-toolbar2').appendTo($("div.newtoolbar"));

		obtener_id_eliminar("#users tbody", table);
		obtener_data_editar("#users tbody", table);
		viewPicture("#users tbody", table);

	}

	var viewPicture = function(tbody, table){
		$(tbody).on("click", "button.verDetalle", function(){
			var data = table.row( $(this).parents("tr") ).data();
			location.href="../resource/pictureCategory/"+data.namePictureCategory;
		});
	}

	var obtener_id_eliminar = function(tbody, table){
		$(tbody).on("click", "button.eliminar", function(){
			var data = table.row( $(this).parents("tr") ).data();
			var idcategoryReport = $("#frmEliminar #idcategoryReport").val( data.idcategoryReport );
		});
	}


	var obtener_data_editar = function(tbody, table){
		$(tbody).on("click", "button.editar", function(){
			var data = table.row( $(this).parents("tr") ).data();
			var name = $("#frmEditar #name").val(data.nameCategory);
			var description = $("#frmEditar #desc").val(data.descriptionCategory);
			var idcategoryReport = $("#frmEditar #idcategoryReport").val( data.idcategoryReport );

		});
	}

	var eliminar = function(){
		$("#eliminar-categoria").on("click", function(){
			var idcategoryReport = $("#frmEliminar #idcategoryReport").val();
			$.ajax({
				method:"POST",
				url: "../php/categorias/removeData.php",
				data: {
						"idcategoryReport": idcategoryReport
					  }
			}).done( function( info ){
				var json_info = JSON.parse( info );
				mostrar_mensaje( json_info );
				location.reload(true);
			});
		});
	}

	var guardar = function(){
		$("#agregar-categoria").on("click", function(){

			var name = $("#frmAgregar #name").val();
			var desc = $("#frmAgregar #desc").val();

			$.ajax({
				method: "POST",
				url: "../php/categorias/addData.php",
				data: {
						"name"   : name,
						"desc"   : desc,
					}

			}).done( function( info ){

				var json_info = JSON.parse( info );
				mostrar_mensaje( json_info );
				location.reload(true);
			});
		});
	}

	var editar = function(){
		$("#editar-categoria").on("click", function(){

			var name = $("#frmEditar #name").val();
			var description = $("#frmEditar #desc").val();
			var idcategoryReport = $("#frmEditar #idcategoryReport").val();

			$.ajax({
				method: "POST",
				url: "../php/categorias/editData.php",
				data: {

						"name" : name,
						"description"   : description,
						"idcategoryReport" : idcategoryReport
					}

			}).done( function( info ){

				var json_info = JSON.parse( info );
				mostrar_mensaje( json_info );
				location.reload(true);
			});
		});
	}

	var editarImagen = function(){
		$("#editImage").on("click", function(){

			var idasociado = $("#frmEditarImage #idasociado").val();
			var nameDocumento = $("#frmEditarImage #nameDocumento").val();

			$.ajax({
				method: "POST",
				url: "../php/asociados/editDataDocumento.php",
				data: {
						"idasociado"   : idasociado,
						"nameDocumento" : nameDocumento
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
