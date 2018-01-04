<?php

	include ("../connection.php");

	#hacemos la consulta
	$idsubSector = $_REQUEST['idsubSector'];


	$query = "delete from subSector where subSector.idsubSector = $idsubSector";
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
