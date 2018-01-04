<?php

	#script para hacer la carga de informacion desde la base de datos a la tabla
	include ("../connection.php");

	$eventName = $_REQUEST['data'];
	$query = "select * from reportUser join user on (user.iduser = reportUser.user) join categoryReport on (categoryReport.idcategoryReport = reportUser.categoryName) join reportInSector on (reportInSector.reportUser = reportUser.idreportUser) join subSector on (subSector.idsubSector = reportInSector.subSector) join sector on (sector.idsector = subSector.sector ) join reportAssign on (reportUser.idreportUser = reportAssign.reportUser ) join eventsReport on (reportAssign.eventsReport = eventsReport.ideventsReport ) where eventsReport.nameEvent = '$eventName'";
	$resultado = mysqli_query($conexion, $query);

	if (!$resultado){
		die("Error");
	}else{

		while($data = mysqli_fetch_assoc($resultado)){

			$arreglo["data"][] = $data;
		}

		echo json_encode($arreglo);

	}

	mysqli_free_result($resultado);
	mysqli_close($conexion);
?>
