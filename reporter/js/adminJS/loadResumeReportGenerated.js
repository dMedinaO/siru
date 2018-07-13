$(window).on('load', function() {

	cargarInfoReporte();
	cargarInfoReportePicture();

});

var cargarInfoReporte = function(){

  var data = getQuerystring('idReporte');
	$.ajax({
			method:"POST",
			url: "../../php/TreeView/getResumeReportDataByReport2.php?data="+data,

		}).done( function( info ){
      var response = JSON.parse(info);

			$(".fechaData").html( response.dateReport );
      $(".prioridad").html( response.priority );
      $(".stageData").html( response.stageReport );
			$(".categoryData").html( response.nameCategory );
			$(".detalleReporte").html( response.message );

		});
}

var cargarInfoReportePicture = function(){

  var data = getQuerystring('idReporte');
	$.ajax({
			method:"POST",
			url: "../../php/TreeView/getResumeReportDataByReportFigure.php?data="+data,

		}).done( function( info ){
      var response = JSON.parse(info);
			var usuario = response.user;
			var name = response.imageName;

			if (name == "1q2w3e"){

				$('#imageReport').html("-");
			}
			else{
				var image = new Image();

	    	var src = "../../../admin/resource/fileReport/"+usuario+"/"+name;
	    	image.src = src;

	    	$('#imageReport').append(image);
			}

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
