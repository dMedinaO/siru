<?php

	header("content-type: application/json");

	#incluimos la conexion a la base de datos
	include ("../connection.php");

	#consulta para obtener los reportes registrados
	$query = "select COUNT(*) as cantidad from reportUser";
	$resultado = mysqli_query($conexion, $query);

	$registrados = 0;

	if (!$resultado){
		die("Error");
	}else{

		while($data = mysqli_fetch_assoc($resultado)){

			$registrados = $data['cantidad'];

		}
	}

	#consulta para obtener los reportes asignados
	$query = "select COUNT(*) as cantidad from reportAssign";
	$resultadoA= mysqli_query($conexion, $query);

	$asignados = 0;

	if (!$resultadoA){
		die("Error");
	}else{

		while($data = mysqli_fetch_assoc($resultadoA)){

			$asignados = $data['cantidad'];

		}
	}

	$responseData = [];
	$responseData['asignados'] = $asignados;
	$responseData['registrados'] = $registrados;

	echo json_encode($responseData);

	mysqli_free_result($resultado);
	mysqli_close($conexion);

?>
