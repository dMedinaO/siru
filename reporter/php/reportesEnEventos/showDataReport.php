<?php

	#script para hacer la carga de informacion desde la base de datos a la tabla
	include ("../connection.php");

	$idEvent = $_REQUEST['idEvent'];
	$query = "select * from reportUser join reportAssign on (reportAssign.reportUser = reportUser.idreportUser) join eventsReport on (eventsReport.ideventsReport = reportAssign.eventsReport) join user on (user.iduser = reportUser.user) join reportInSector on (reportInSector.reportUser = reportUser.idreportUser) join subSector on (subSector.idsubSector = reportInSector.subSector) join sector on (sector.idsector = subSector.sector) join categoryReport on (categoryReport.idcategoryReport = reportUser.categoryName) where eventsReport.ideventsReport = $idEvent";
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
