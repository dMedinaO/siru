$(window).on('load', function() {

  generarReporte();
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

var generarReporte = function(){

  $("#enviarReporte").on("click", function(){

    //obtenemos la informacion de los datos y vemos por consola...
    //category=ACOSO&idcategory=1512306369&sector=Sector 2&subsector=P&idSubsector=1&date=2017-12-28 1:15 PM
    var category=getQuerystring('category');
    var idcategory=getQuerystring('idcategory');
    var sector=getQuerystring('sector');
    var subsector=getQuerystring('subsector');
    var idSubsector=getQuerystring('idSubsector');
    var dateInput=getQuerystring('date');

    console.log(category+" el id de la categoria");
    console.log(idcategory+" el id de la categoria");
    console.log(sector+" el id de la categoria");
    console.log(subsector+" el id de la categoria");
    console.log(idSubsector+" el id de la categoria");
    console.log(dateInput+" el id de la categoria");


    //obtenemos los datos de los campos...
    var detail = $("#detalleReporte").val();

    var urgente = $("#demo-remember-me").is(":checked");

    if (urgente == false){
      urgente = "NO URGENTE";
    }else{
      urgente = "URGENTE";
    }

    console.log(detail+" el id de la categoria");
    console.log(urgente+" el id de la categoria");

    //por ajax enviamos toda la info necesaria para generar el reporte!
    $.ajax({
      method: "POST",
      url: "../../php/reportes/createNewReport.php",
      data: {
          "dateInput"   : dateInput,
          "urgente" : urgente,
          "detail"   : detail,
          "idcategory" : idcategory,
          "idSubsector" : idSubsector
        }

    }).done( function( info ){

      var json_info = JSON.parse( info );
        
        location.href="../resumen?idReporte="+json_info.respuesta;
      });

  });

}
