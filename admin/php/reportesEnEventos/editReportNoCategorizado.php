<?php

	include("../connection.php");#incluimos la base de datos

	#hacemos la obtencion de los datos
	$priority = $_REQUEST['priority'];
	$categoria = $_REQUEST['categoria'];
	$idreportUser = $_REQUEST['idreportUser'];

	$query = "update reportUser set reportUser.priority = '$priority', reportUser.categoryName= $categoria where reportUser.idreportUser = $idreportUser";

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
