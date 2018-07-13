<?php

	include("../connection.php");#incluimos la base de datos

	#hacemos la obtencion de los datos
	$name = $_REQUEST['name'];
	$desc = $_REQUEST['desc'];
	$stageEvent = $_REQUEST['stageEvent'];
	$categoria = $_REQUEST['categoria'];

	$idData = time();

	$query = "insert into eventsReport values ($idData, '$name', '$desc', '$stageEvent', NOW(), NOW(), $categoria)";

	$resultado = mysqli_query($conexion, $query);
	verificar_resultado( $resultado );
	cerrar( $conexion );

	function verificar_resultado($resultado){

		if (!$resultado) $informacion["respuesta"] = "ERROR";
		else $informacion["respuesta"] ="BIEN";
		echo json_encode($informacion);
	}

	function cerrar($conexion){
		mysqli_close($conexion);
	}


?>
