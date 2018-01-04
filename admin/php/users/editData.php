<?php

	include("../connection.php");#incluimos la base de datos

	$iduser = $_REQUEST['iduser'];
	$name = $_REQUEST['name'];
	$last_name = $_REQUEST['last_name'];
	$dni = $_REQUEST['dni'];
	$rolUser = $_REQUEST['rolUser'];
	$email = $_REQUEST['email'];

	$query = "update user set user.nameUser = '$name', user.last_name='$last_name', user.dni='$dni', user.rol=$rolUser, user.modifiedUser=NOW(), user.emailUser='$email' where user.iduser=$iduser";
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
