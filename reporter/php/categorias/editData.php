<?php

	include("../connection.php");#incluimos la base de datos

	$name = $_REQUEST['name'];
	$description = $_REQUEST['description'];
	$idcategoryReport = $_REQUEST['idcategoryReport'];

	$namePicture = "";
	//leemos un archivo de texto para capturar el nombre de la imagen...
	$file = fopen("../../resource/pictureCategory/nameFileRecentUpload.txt", "r");
	while(!feof($file)) {

		$namePicture =  fgets($file);
	}
	fclose($file);

	$query = "update categoryReport set categoryReport.nameCategory = '$name', categoryReport.descriptionCategory = '$description', categoryReport.modifiedCategory=NOW() where categoryReport.idcategoryReport= $idcategoryReport";
	$resultado = mysqli_query($conexion, $query);

	$query2 = "update pictureCategory set pictureCategory.namePictureCategory = '$namePicture' where pictureCategory.categoryReport = $idcategoryReport";
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
