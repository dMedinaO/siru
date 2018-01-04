<?php

	#script para hacer la carga de informacion desde la base de datos a la tabla
	include ("../connection.php");

	$data = $_REQUEST['data'];

	$query = "select *, user.name as nameUser, categoryReport.name as categoryName, reportUser.message  as detalle from reportUser join geoReferences on (geoReferences.idgeoReferenc = reportUser.geoReferences) join user on (user.iduser = reportUser.user) join categoryReport on (categoryReport.idcategoryReport = reportUser.categoryName) join reportAssign on (reportAssign.reportUser = reportUser.idreportUser ) where reportAssign.eventsReport =$data";
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
