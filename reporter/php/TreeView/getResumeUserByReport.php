<?php

  include ("../connection.php");

  #recibimos como parametro el nombre del evento y obtenemos la informacion a partir de este....
  $data = $_REQUEST['data'];

  #procesamos la consulta...
  $query = "select * from user join reportUser on (reportUser.user = user.iduser ) where reportUser.dateReport = '$data'";

  $resultado = mysqli_query($conexion, $query);

	$dataInformation = [];#arreglo para obtener la informacion...

	if (!$resultado){
		die("Error");
	}else{

		while($data = mysqli_fetch_assoc($resultado)){

			$dataInformation['nameUser'] = $data['nameUser'];
      $dataInformation['last_name'] = $data['last_name'];

      $dataInformation['dni'] = $data['dni'];
      $dataInformation['emailUser'] = $data['emailUser'];
		}
	}

  echo json_encode($dataInformation);

  mysqli_free_result($resultado);
  mysqli_close($conexion);
?>
