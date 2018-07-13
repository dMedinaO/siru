<?php

  include ("../connection.php");

  #recibimos como parametro el nombre del evento y obtenemos la informacion a partir de este....
  $nameEvent = $_REQUEST['data'];

  #procesamos la consulta...
  $query = "select * from eventsReport join categoryReport on (categoryReport.idcategoryReport = eventsReport.categoryReport) where eventsReport.nameEvent like '$nameEvent%'";

  $resultado = mysqli_query($conexion, $query);

	$dataInformation = [];#arreglo para obtener la informacion...

	if (!$resultado){
		die("Error");
	}else{

		while($data = mysqli_fetch_assoc($resultado)){

			$dataInformation['nameEvent'] = $data['nameEvent'];
      $dataInformation['stageEvent'] = $data['stageEvent'];

      $dataInformation['createdEvent'] = $data['createdEvent'];
      $dataInformation['nameCategory'] = $data['nameCategory'];
		}
	}

  echo json_encode($dataInformation);

  mysqli_free_result($resultado);
  mysqli_close($conexion);
?>
