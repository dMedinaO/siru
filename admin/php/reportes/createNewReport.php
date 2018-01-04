<?php

	session_start();

	include("../connection.php");#incluimos la base de datos

	#hacemos la obtencion de los datos
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

		$hora = $hora+12;
	}

	//formamos la fecha nuevamente...
	$fecha = $fecha." ".$hora.":".$minuto.":00";

	$idData = time();

	$idUSer = $_SESSION['userName'];

	//recordar que el id del usuario lo obtenedre por los datos de manejos de sesiones...
	$query = "insert into reportUser values ($idData, '$fecha', '$urgente', '$detail', 'ENVIADO', NOW(), NOW(), $idUSer, $idcategory)";

	$query2 = "insert into reportInSector values ($idData, $idSubsector, NOW(), NOW())";
	
	$resultado = mysqli_query($conexion, $query);
	$resultado2 = mysqli_query($conexion, $query2);

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
