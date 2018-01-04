$(document).on('nifty.ready', function () {

      $.getJSON('../php/TreeView/showData.php', function(data) {


  			// JSON Example
  			// =================================================================
  			// Require JSTree
  			// =================================================================
  			$('#demo-jstree-json').jstree({
  			    'core' : {
  			    'data' : data['result']
  			     }
        });
        $('#demo-jstree-json').on("select_node.jstree", function (e, data) {

          //obtenemos el texto
          var dataSelected = data.node.text;

          var infoSplit = dataSelected.split(" ");

          var sTmp = String(infoSplit[0]);
          arrfch = sTmp.split("-");
          var valor = new Date(arrfch[2], arrfch[1], arrfch[0]);

          //preguntamos por el valor de la fecha asociada...
          if (valor == "Invalid Date"){

            location.href="eventoSelected.php?data="+dataSelected;
          }else{
            location.href="reportSelectedView.php?data="+dataSelected;
          }

        });
    });
});
