<?php
	
	include ("../connection.php");
	
	#obtenemos el id del formulario
	
	$informacion = [];	
	
	#hacemos la consulta
	$iduser = $_REQUEST['iduser'];
	
	
	$query = "delete from user where user.iduser = '$iduser'";
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

