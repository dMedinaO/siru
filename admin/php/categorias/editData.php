<?php

	include("../connection.php");#incluimos la base de datos

	$name = $_REQUEST['name'];
	$description = $_REQUEST['description'];
	$idcategoryReport = $_REQUEST['idcategoryReport'];

	$query = "update categoryReport set categoryReport.nameCategory = '$name', categoryReport.descriptionCategory = '$description', categoryReport.modifiedCategory=NOW() where categoryReport.idcategoryReport= $idcategoryReport";	
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
