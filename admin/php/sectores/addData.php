<?php

	include("../connection.php");#incluimos la base de datos

	#hacemos la obtencion de los datos
	$name = $_REQUEST['name'];

	$idData = time();
	$namePicture = "";

	//leemos un archivo de texto para capturar el nombre de la imagen...
	$file = fopen("../../resource/pictureSector/nameFileRecentUpload.txt", "r");

	while(!feof($file)) {

		$namePicture =  fgets($file);

	}

	fclose($file);

	$query = "insert into sector values ($idData, '$name', '$namePicture', NOW(), NOW())";

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
