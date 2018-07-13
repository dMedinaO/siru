<?php

	include("../connection.php");#incluimos la base de datos

	#hacemos la obtencion de los datos
	$categoria = $_REQUEST['categoria'];
	$notificador = $_REQUEST['notificador'];

	$idData = time();

	$query = "insert into notificationEventIncategoryReport values ($notificador, $categoria, NOW(), NOW())";

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
