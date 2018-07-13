<?php

	include("../connection.php");#incluimos la base de datos

	#hacemos la obtencion de los datos
	$name = $_REQUEST['name'];
	$desc = $_REQUEST['desc'];

	$idData = time();
	$namePicture = "";

	//leemos un archivo de texto para capturar el nombre de la imagen...
	$file = fopen("../../resource/pictureCategory/nameFileRecentUpload.txt", "r");

	while(!feof($file)) {

		$namePicture =  fgets($file);

	}

	fclose($file);

	$query = "insert into categoryReport values ($idData, '$name', '$desc', NOW(), NOW())";
	$query2 = "insert into pictureCategory values ($idData, '$namePicture', NOW(), NOW(), $idData)";

	$resultado = mysqli_query($conexion, $query);
	$resultado2 = mysqli_query($conexion, $query2);

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
