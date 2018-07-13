<?php

	include ("../connection.php");

	#hacemos la consulta
	$ideventsReport = $_REQUEST['ideventsReport'];


	$query = "delete from eventsReport where eventsReport.ideventsReport = $ideventsReport";
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
