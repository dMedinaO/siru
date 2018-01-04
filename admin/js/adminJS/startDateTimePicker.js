$(document).ready(function() {

  initData();
  guardar();

});

var initData = function(){

  var dataAc = new Date();
  var fechaActual = dataAc.getDate() + "/" + (dataAc.getMonth() +1) + "/" + dataAc.getFullYear()
  $('#dateValue .input-group.date').datepicker({

    autoclose:true,
    dateFormat: 'yyyy-mm-dd',
    firstDay: 1,
    maxDate:fechaActual

  }).datepicker("setDate", "today");
  $('#timeValue').timepicker();
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

var guardar = function(){
  $("#continueButton").on("click", function(){

    //obtenemos la informacion de los datos y vemos por consola...
    var categoria=getQuerystring('category');
    var idcategory=getQuerystring('idcategory');
    var sector=getQuerystring('sector');
    var subsector=getQuerystring('subsector');
    var idSubsector=getQuerystring('idSubsector');

    var dateTime = new Date($('#dateValue').datepicker( "getDate", "dateFormat" ));
    var hourTime = $('#timeValue').val();

    var strDateTime =  dateTime.getFullYear() + "-" + (dateTime.getMonth()+1) + "-"+ dateTime.getDate();

    var fechaData = strDateTime+" "+hourTime;

    //hacemos el redireccionamiento
    urlData = "../detalles/?category="+categoria+"&idcategory="+idcategory+"&sector="+sector+"&subsector="+subsector+"&idSubsector="+idSubsector+"&date="+fechaData;

    location.href=urlData;

  });
}
