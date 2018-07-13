<?php

	include("../connection.php");#incluimos la base de datos

	$name = $_REQUEST['name'];
	$desc = $_REQUEST['desc'];
	$stageEvent = $_REQUEST['stageEvent'];
	$categoria = $_REQUEST['categoria'];
	$ideventsReport = $_REQUEST['ideventsReport'];

	$query = "update eventsReport set eventsReport.nameEvent='$name', eventsReport.descriptionEvent='$desc', eventsReport.stageEvent='$stageEvent', eventsReport.categoryReport=$categoria, eventsReport.modifiedEvent=NOW() where eventsReport.ideventsReport=$ideventsReport";

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
