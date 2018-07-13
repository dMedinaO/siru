<?php

	include("../connection.php");#incluimos la base de datos

	#hacemos la obtencion de los datos
	$latitud = $_REQUEST['latitud'];
	$longitud = $_REQUEST['longitud'];
	$fecha = $_REQUEST['fecha'];
	$hora = $_REQUEST['hora'];
	$categoria = $_REQUEST['categoria'];
	$priority = $_REQUEST['priority'];
	$detalle = $_REQUEST['detalle'];
	$nameFile = $_REQUEST['nameFile'];

	$idData = time();

	$idUSer = 1511042046;
	//recordar que el id del usuario lo obtenedre por los datos de manejos de sesiones...
	$query = "insert into geoReferences values ($idData, '$latitud', '$longitud', NOW(), NOW())";
	$query2 = "insert into reportUser values ($idData, NOW(), NOW(), '$priority', '$detalle', 'RECIBIDO', NOW(), NOW(), $idUSer, $idData, $categoria)";

	$query3 = "insert into pictureReport values ($idData, '$nameFile', NOW(), NOW(), $idData)";

	$resultado = mysqli_query($conexion, $query);
	$resultado2 = mysqli_query($conexion, $query2);
	$resultado3 = mysqli_query($conexion, $query3);

	verificar_resultado( $resultado2, $categoria);
	cerrar( $conexion );

	function verificar_resultado($resultado, $categoria){

		if (!$resultado) $informacion["respuesta"] = "ERROR";
		else{

			$informacion["respuesta"] ="BIEN";

			//ejecutamos el comando de la categoria
			$command = "python /var/www/html/U-Safe-Dashboard/Admin/scriptPython/processCorreoAvisoReporte.py ".$categoria;
			exec($command);
		}
		echo json_encode($informacion);
	}

	function cerrar($conexion){
		mysqli_close($conexion);
	}


?>
