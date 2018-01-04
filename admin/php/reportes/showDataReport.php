<?php

	#script para hacer la carga de informacion desde la base de datos a la tabla
	include ("../connection.php");

	$query = "select * from reportUser join user on (user.iduser = reportUser.user) join categoryReport on (categoryReport.idcategoryReport = reportUser.categoryName) join reportInSector on (reportInSector.reportUser = reportUser.idreportUser) join subSector on (subSector.idsubSector = reportInSector.subSector) join sector on (sector.idsector = subSector.sector ) where reportUser.idreportUser not in (select reportAssign.reportUser from reportAssign)";
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
