<?php

	#script para hacer la carga de informacion desde la base de datos a la tabla
	include ("../connection.php");

	$query = "select categoryReport.nameCategory from categoryReport";

	$resultado = mysqli_query($conexion, $query);

	$cont=0;
	$nameCategory = [];#creamos un arreglo con la informacion de los nombres de las categorias

	if (!$resultado){
		die("Error");
	}else{

		while($data = mysqli_fetch_assoc($resultado)){

			$nameCategory[$cont] = $data["nameCategory"];
			$cont++;
		}
	}

	$arrayResponse = [];

	#por cada categoria obtenemos la fecha...
	for ($i=0; $i<count($nameCategory); $i++){

			$arrayData = [];#creamos un arreglo para contener el arbol...

			$arrayData['text'] = $nameCategory[$i];#creamos el atributo texto

			$stage = [];#el estado es un atributo compuesto...
			$stage['opened'] = false;

			$arrayData['state'] = $stage;

			#comenzamos a generar las fechas, estos son los children de cada rama...
			$fechasByCategory= [];

			//creamos la query...
			$query = "select eventsReport.nameEvent from eventsReport join categoryReport on (eventsReport.categoryReport = categoryReport.idcategoryReport) where categoryReport.nameCategory = '$nameCategory[$i]'";
			$resultadoValue = mysqli_query($conexion, $query);

			$cont=0;

			while($dataValue = mysqli_fetch_assoc($resultadoValue)){

				$arrayDataFecha = [];
				$arrayDataFecha['text'] = $dataValue['nameEvent'];
				$nameEvent = $dataValue['nameEvent'];
				$stage = [];#el estado es un atributo compuesto...
				$stage['opened'] = false;

				$arrayDataFecha['state'] = $stage;

				#ahora por cada evento obtenemos los reportes asociados...
				$queryReport = "select reportUser.dateReport from reportUser join reportAssign on (reportUser.idreportUser = reportAssign.reportUser) join eventsReport on (eventsReport.ideventsReport = reportAssign.eventsReport) where eventsReport.nameEvent = '$nameEvent'";

				#procesamos la consulta...
				$resultadoValueReport = mysqli_query($conexion, $queryReport);

				$childrenEvents= [];
				$contData =0;
				#obtenemos toda la informacion....
				while($dataValueReport = mysqli_fetch_assoc($resultadoValueReport)){

					$arrayDataReport = [];
					$arrayDataReport['text'] = $dataValueReport['dateReport'];
					$arrayDataReport['icon'] = 'jstree-file';
					$stage = [];#el estado es un atributo compuesto...
					$stage['opened'] = false;

					$arrayDataReport['state'] = $stage;

					$childrenEvents[$contData] = $arrayDataReport;
					$contData++;
				}

				$arrayDataFecha['children'] = $childrenEvents;
				$fechasByCategory[$cont] = $arrayDataFecha;


				$cont++;
			}

			//agreamos los children de las fechas
			$arrayData['children'] = $fechasByCategory;

			//agregamos la data completa al arreglo de elementos
			$arrayResponse[$i] = $arrayData;
	}

	$dataFinal = [];
	$dataFinal['result'] = $arrayResponse;

	echo json_encode($dataFinal);

	mysqli_free_result($resultado);
	mysqli_close($conexion);
?>
