$(window).on('load', function() {

	cargarInfo();
	cargarInfoReporte();
	cargarInfoReportePicture();

});

var cargarInfo = function(){

  var data = getQuerystring('data');
	$.ajax({
			method:"POST",
			url: "../php/TreeView/getResumeUserByReport.php?data="+data,

		}).done( function( info ){
      var response = JSON.parse(info);

			$(".nombreData").html( response.nameUser );
      $(".apellidoData").html( response.last_name );
      $(".dniData").html( response.dni );
			$(".correoData").html( response.emailUser );

		});
}

var cargarInfoReportePicture = function(){

  var data = getQuerystring('data');
	$.ajax({
			method:"POST",
			url: "../php/TreeView/getResumeReportDataFigure.php?data="+data,

		}).done( function( info ){
      var response = JSON.parse(info);
			var usuario = response.user;
			var name = response.imageName;

			if (name != "1q2w3e"){
				var image = new Image();

	    	var src = "../resource/fileReport/"+usuario+"/"+name;
	    	image.src = src;

	    	$('#imageReport').append(image);
			}else{
				$('#imageReport').html("Este reporte no presenta Imagen asociada");
			}
		});
}

var cargarInfoReporte = function(){

  var data = getQuerystring('data');
	$.ajax({
			method:"POST",
			url: "../php/TreeView/getResumeReportDataByReport.php?data="+data,

		}).done( function( info ){
      var response = JSON.parse(info);

			$(".fechaData").html( response.dateReport );
      $(".prioridad").html( response.priority );
      $(".stageData").html( response.stageReport );
			$(".categoryData").html( response.nameCategory );
			$(".detalleReporte").html( response.message );

		});
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
