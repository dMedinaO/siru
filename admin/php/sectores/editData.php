<?php

	include("../connection.php");#incluimos la base de datos

	$name = $_REQUEST['name'];
	$idsector = $_REQUEST['idsector'];

	$query = "update sector set sector.nameSector = '$name', sector.modifiedSector= NOW() where sector.idsector = $idsector";
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
