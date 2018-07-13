<?php

	include("../connection.php");#incluimos la base de datos

	#hacemos la obtencion de los datos
	$idreportUser = $_REQUEST['idreportUser'];
	$categoria = $_REQUEST['categoria'];

	$query = "insert into reportAssign values ($categoria, $idreportUser, NOW(), NOW())";
	$query2 = "update reportUser set reportUser.stageReport='RECIBIDO', reportUser.modifiedReport=NOW() where reportUser.idreportUser = $idreportUser";
	$resultado = mysqli_query($conexion, $query);

	$resultado2 = mysqli_query($conexion, $query2);

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
