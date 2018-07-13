<?php

  include ("../connection.php");

  #recibimos como parametro el nombre del evento y obtenemos la informacion a partir de este....
  $data = $_REQUEST['data'];

  #procesamos la consulta...
  $query = "select reportUser.user  from reportUser where reportUser.idreportUser = $data";
  $query2 = "select pictureReport.namePictureReport from pictureReport where pictureReport.reportUser = $data";

  $resultado = mysqli_query($conexion, $query);
  $resultado2 = mysqli_query($conexion, $query2);

	$dataInformation = [];#arreglo para obtener la informacion...

	if (!$resultado){
		die("Error");
	}else{

		while($data = mysqli_fetch_assoc($resultado)){

			$dataInformation['user'] = $data['user'];
		}
	}

  if (!$resultado2){
		die("Error");
	}else{

		while($data = mysqli_fetch_assoc($resultado2)){

			$dataInformation['imageName'] = $data['namePictureReport'];      
		}
	}

  echo json_encode($dataInformation);

  mysqli_free_result($resultado);
  mysqli_close($conexion);
?>
