<?php

	session_start();

	include("../connection.php");#incluimos la base de datos

	$idUSer = $_SESSION['userName'];	#hacemos la obtencion de los datos

	$dateInput = $_REQUEST['dateInput'];
	$urgente = $_REQUEST['urgente'];
	$detail = $_REQUEST['detail'];
	$idcategory = $_REQUEST['idcategory'];
	$idSubsector = $_REQUEST['idSubsector'];

	//jugamos con la fecha...
	$dateValue = str_replace("%20", ";", $dateInput);

	$dataSplit = explode(";", $dateValue);

	$fecha = $dataSplit[0];

	//el manejo de la hora es AM o PM
	$hora = $dataSplit[1];
	$formato = $dataSplit[2];

	$horaSplit = explode(":", $hora);
	$hora = $horaSplit[0];
	$minuto = $horaSplit[1];

	if ($formato == "PM"){

			if ($hora < 12){
				$hora = $hora+12;
			}
	}else{
		if ($hora == 12){
			$hora = 0;
		}
	}

	//formamos la fecha nuevamente...
	$fecha = $fecha." ".$hora.":".$minuto.":00";

	$idData = time();

	$idUSer = $_SESSION['userName'];

	$namePicture = "";

	//leemos un archivo de texto para capturar el nombre de la imagen...
	$pathData = "../../../admin/resource/fileReport/".$idUSer."/nameFileRecentUpload.txt";
	$file = fopen($pathData, "r");

	while(!feof($file)) {

		$namePicture =  fgets($file);

	}

	fclose($file);

	//cambiamos el nombre existente en el archivo...
	//finalmente escribimos un archivo de texto con el nombre de la imagen...
	$file = fopen($pathData, "w");

	fwrite($file, "1q2w3e");

	fclose($file);

	//recordar que el id del usuario lo obtenedre por los datos de manejos de sesiones...
	$query = "insert into reportUser values ($idData, '$fecha', '$urgente', '$detail', 'ENVIADO', NOW(), NOW(), $idUSer, $idcategory)";
	$query2 = "insert into reportInSector values ($idData, $idSubsector, NOW(), NOW())";
	$query3 = "insert into pictureReport values ($idData, '$namePicture', NOW(), NOW(), $idData)";
	$resultado = mysqli_query($conexion, $query);
	$resultado2 = mysqli_query($conexion, $query2);
	$resultado3 = mysqli_query($conexion, $query3);

	verificar_resultado( $resultado2, $idData);
	cerrar( $conexion );

	function verificar_resultado($resultado, $idData){

		if (!$resultado) $informacion["respuesta"] = "ERROR";
		else{

			$informacion["respuesta"] =$idData;

			//ejecutamos el comando de la categoria
			#$command = "python /var/www/html/U-Safe-Dashboard/Admin/scriptPython/processCorreoAvisoReporte.py ".$categoria;
			#exec($command);
		}
		echo json_encode($informacion);
	}

	function cerrar($conexion){
		mysqli_close($conexion);
	}


?>
