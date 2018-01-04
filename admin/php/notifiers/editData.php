<?php

	include("../connection.php");#incluimos la base de datos

	$idnotificationEvent = $_REQUEST['idnotificationEvent'];
	$name = $_REQUEST['name'];
	$email = $_REQUEST['email'];
	$phone = $_REQUEST['phone'];

	$query = "update notificationEvent set notificationEvent.nameNotificador = '$name', notificationEvent.email = '$email', notificationEvent.phone= '$phone' where notificationEvent.idnotificationEvent=$idnotificationEvent";
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
