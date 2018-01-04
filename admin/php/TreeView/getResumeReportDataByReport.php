<?php

  include ("../connection.php");

  #recibimos como parametro el nombre del evento y obtenemos la informacion a partir de este....
  $data = $_REQUEST['data'];

  #procesamos la consulta...
  $query = "select * from reportUser join categoryReport on (reportUser.categoryName = categoryReport.idcategoryReport) where reportUser.dateReport = '$data'";

  $resultado = mysqli_query($conexion, $query);

	$dataInformation = [];#arreglo para obtener la informacion...

	if (!$resultado){
		die("Error");
	}else{

		while($data = mysqli_fetch_assoc($resultado)){

			$dataInformation['dateReport'] = $data['dateReport'];
      $dataInformation['priority'] = $data['priority'];

      $dataInformation['stageReport'] = $data['stageReport'];
      $dataInformation['nameCategory'] = $data['nameCategory'];
      $dataInformation['message'] = $data['message'];
		}
	}

  echo json_encode($dataInformation);

  mysqli_free_result($resultado);
  mysqli_close($conexion);
?>
