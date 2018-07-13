<?php

#header("content-type: application/json");

#incluimos la conexion a la base de datos
include ("../connection.php");

$responseFinal = [];

#con la primera consulta obtenemos todas las categorias asociadas al sistema
$query = "select categoryReport.nameCategory from categoryReport";
$resultado = mysqli_query($conexion, $query);

$categoryData = [];
$cont=0;
if (!$resultado){
  die("Error");
}else{

  while($data = mysqli_fetch_assoc($resultado)){

    $categoryData[$cont] = $data['nameCategory'];
    $cont++;

  }
}

$responseFinal['category'] = $categoryData;

#con la segunda consulta obtenemos todos los sectores en el sistema
$querySector = "select sector.nameSector  from sector";
$resultadoSector = mysqli_query($conexion, $querySector);

$sectorData = [];
$cont=0;
if (!$resultadoSector){
  die("Error");
}else{

  while($data = mysqli_fetch_assoc($resultadoSector)){

    $sectorData[$cont] = $data['nameSector'];
    $cont++;

  }
}

$seriesData = [];

#por cada sector comenzamos a obtener la informacion de la cantidad de reportes segun categoria....
for ($i=0; $i<count($sectorData); $i++){

  $series = [];
  $series['name'] = $sectorData[$i];

  $dataInformation = [];
  for ($j=0; $j<count($categoryData); $j++){

    $queryInfo = "select COUNT(sector.nameSector) as cantidad  from reportUser join reportInSector on (reportUser.idreportUser = reportInSector.reportUser) join subSector on (subSector.idsubSector = reportInSector.subSector) join sector on (sector.idsector = subSector.sector) join categoryReport on (categoryReport.idcategoryReport = reportUser.categoryName) where sector.nameSector = '$sectorData[$i]' AND categoryReport.nameCategory = '$categoryData[$j]' group by sector.nameSector";

    $resultData = mysqli_query($conexion, $queryInfo);

    $response = 0;
    #procesamos la consulta
    while($data = mysqli_fetch_assoc($resultData)){

      $response = $data['cantidad'];
    }

    $dataInformation[$j] = (int)$response;

  }
  $series['data'] = $dataInformation;

  $seriesData[$i] = $series;
}

$responseFinal['valuesData'] = $seriesData;

echo json_encode($responseFinal);
mysqli_free_result($resultado);
mysqli_close($conexion);
?>
