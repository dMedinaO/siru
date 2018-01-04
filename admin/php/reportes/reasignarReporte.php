<?php

	include("../connection.php");#incluimos la base de datos

	#hacemos la obtencion de los datos
	$eventsReport = $_REQUEST['eventsReport'];
	$idreportUser = $_REQUEST['idreportUser'];
	$categoria = $_REQUEST['categoria'];

	$query = "update reportAssign set reportAssign.eventsReport = $categoria where reportAssign.eventsReport=$eventsReport AND reportAssign.reportUser=$idreportUser";
	$resultado = mysqli_query($conexion, $query);

	verificar_resultado( $resultado);
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
