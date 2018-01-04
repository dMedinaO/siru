$(window).on('load', function() {

	listar();
	guardar();
	eliminar();

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
				"url": "../php/notifiersCategori/showData.php?data="+dataInfo
			},

			"columns":[
				{"data":"nameNotificador"},
				{"data":"email"},
				{"data":"phone"},
				{"data":"nameCategory"},
				{"data":"createdAssign"},
				{"defaultContent": "<button type='button' class='eliminar btn btn-danger' data-toggle='modal' data-target='#modalEliminar' ><i class='fa fa-trash-o'></i></button>"}
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

	}

	var obtener_id_eliminar = function(tbody, table){
		$(tbody).on("click", "button.eliminar", function(){
			var data = table.row( $(this).parents("tr") ).data();
			var idnotificationEvent = $("#frmEliminar #idnotificationEvent").val( data.idnotificationEvent );
			var idcategoryReport = $("#frmEliminar #idcategoryReport").val( data.idcategoryReport );
		});
	}

	var eliminar = function(){
		$("#eliminar-catNot").on("click", function(){
			var idnotificationEvent = $("#frmEliminar #idnotificationEvent").val();
			var idcategoryReport = $("#frmEliminar #idcategoryReport").val();
			$.ajax({
				method:"POST",
				url: "../php/notifiersCategori/removeData.php",
				data: {
						"idnotificationEvent": idnotificationEvent,
						"idcategoryReport" : idcategoryReport
					  }
			}).done( function( info ){
				var json_info = JSON.parse( info );
				mostrar_mensaje( json_info );
				location.reload(true);
			});
		});
	}

	var guardar = function(){
		$("#agregar-catNot").on("click", function(){

			var categoria = $("#frmAgregar #categoria").val();
			var notificador = getQuerystring('data');

			$.ajax({
				method: "POST",
				url: "../php/notifiersCategori/addData.php",
				data: {
						"categoria"   : categoria,
						"notificador"   : notificador

					}

			}).done( function( info ){

				var json_info = JSON.parse( info );
				mostrar_mensaje( json_info );
				location.reload(true);
			});
		});
	}

	var editar = function(){
		$("#editar-notificador").on("click", function(){

			var name = $("#frmEditar #name").val();
			var email = $("#frmEditar #email").val();
			var idnotificationEvent = $("#frmEditar #idnotificationEvent").val();

			$.ajax({
				method: "POST",
				url: "../php/notifiers/editData.php",
				data: {
						"idnotificationEvent"   : idnotificationEvent,
						"name" : name,
						"email"   : email
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
