<?php

	include("../connection.php");#incluimos la base de datos

	#hacemos la obtencion de los datos
	$name = $_REQUEST['name'];
	$last_name = $_REQUEST['last_name'];
	$dni = $_REQUEST['dni'];
	$rolUser = $_REQUEST['rolUser'];
	$email = $_REQUEST['email'];

	$idData = time();

	$query = "insert into user values ($idData, '$name', '$last_name', '$dni', '$email', 'ACTIVADO', NOW(), '1.png', NOW(), NOW(), $rolUser, '$idData')";

	$resultado = mysqli_query($conexion, $query);

	verificar_resultado( $resultado, $rolUser, $idData);
	cerrar( $conexion );

	function verificar_resultado($resultado, $rolUser, $idUser){

		if (!$resultado) $informacion["respuesta"] = "ERROR";
		else{
			$informacion["respuesta"] ="BIEN";

			//preguntamos por el rol de usuario...

			$path = "/var/www/html/UnSafe/admin/resource/fileReport/".$idUser;

			if (!file_exists($path)) {
			    mkdir($path, 0777, true);
			}

		}
		echo json_encode($informacion);
	}

	function cerrar($conexion){
		mysqli_close($conexion);
	}


?>
