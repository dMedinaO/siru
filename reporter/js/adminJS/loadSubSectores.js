$(window).on('load', function() {

	listar();
	guardar();
	eliminar();
	editar();

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

		var dataInfo = getQuerystring('data');

		var table = $("#users").DataTable({
			"responsive": true,
			"dom": '<"newtoolbar">frtip',
			"destroy":true,
			"ajax":{
				"method":"POST",
				"url": "../php/subSectores/showData.php?data="+dataInfo
			},

			"columns":[
				{"data":"nombreSubSector"},
				{"data":"createdSubSector"},
				{"data":"modifiedSubSector"},
				{"defaultContent": "<button type='button' class='viewImage btn btn-success'><i class='fa fa-file-picture-o'></i></button> <button type='button' class='editar btn btn-primary' data-toggle='modal' data-target='#myModalEditar'><i class='fa fa-pencil-square-o'></i></button>	<button type='button' class='eliminar btn btn-danger' data-toggle='modal' data-target='#modalEliminar' ><i class='fa fa-trash-o'></i></button>"}
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
		verImage("#users tbody", table);


	}

	var verImage = function(tbody, table){
		$(tbody).on("click", "button.viewImage", function(){
			var data = table.row( $(this).parents("tr") ).data();
			location.href="../resource/pictureSubSector/"+data.nombreImagen;

		});
	}

	var obtener_id_eliminar = function(tbody, table){
		$(tbody).on("click", "button.eliminar", function(){
			var data = table.row( $(this).parents("tr") ).data();
			var idsubSector = $("#frmEliminar #idsubSector").val( data.idsubSector );
		});
	}

	var obtener_data_editar = function(tbody, table){
		$(tbody).on("click", "button.editar", function(){
			var data = table.row( $(this).parents("tr") ).data();
			var name = $("#frmEditar #name").val(data.nombreSubSector);
			var modifiedSubSector = $("#frmEditar #idsubSector").val(data.idsubSector);

		});
	}

	var eliminar = function(){
		$("#eliminar-subsector").on("click", function(){
			var idsubSector = $("#frmEliminar #idsubSector").val();
			$.ajax({
				method:"POST",
				url: "../php/subSectores/removeData.php",
				data: {
						"idsubSector": idsubSector
					  }
			}).done( function( info ){
				var json_info = JSON.parse( info );
				mostrar_mensaje( json_info );
				location.reload(true);
			});
		});
	}

	var guardar = function(){
		$("#agregar-subsector").on("click", function(){

			var name = $("#frmAgregar #name").val();
			var data = getQuerystring('data');

			$.ajax({
				method: "POST",
				url: "../php/subSectores/addData.php",
				data: {
						"name"   : name,
						"data" : data
					}

			}).done( function( info ){

				var json_info = JSON.parse( info );
				mostrar_mensaje( json_info );
				location.reload(true);
			});
		});
	}

	var editar = function(){
		$("#editar-subsector").on("click", function(){

			var name = $("#frmEditar #name").val();
			var idsubSector = $("#frmEditar #idsubSector").val();

			$.ajax({
				method: "POST",
				url: "../php/subSectores/editData.php",
				data: {
						"idsubSector"   : idsubSector,
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
