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

$seriesData = [];
$responseFinal = [];

#por cada sector comenzamos a obtener la informacion de la cantidad de reportes segun categoria....
for ($i=0; $i<count($categoryData); $i++){

  $series = [];
  $series['name'] = $categoryData[$i];

  $query = "select count(CAST(reportUser.dateReport as DATE)) as cantidad, CAST(reportUser.dateReport as DATE) as fecha from reportUser join categoryReport on (reportUser.categoryName = categoryReport.idcategoryReport) where categoryReport.nameCategory = '$categoryData[$i]' group by CAST(reportUser.dateReport as DATE)";

  $resultData = mysqli_query($conexion, $query);

  $dataValues = [];

  $cont=0;
  while($data = mysqli_fetch_assoc($resultData)){

    $dataCol = [];
    $fecha = $data['fecha'];
    $cantidad = $data['cantidad'];

    #transformamos la fecha a formato Date.UTC...
    $dataFecha = explode("-", $fecha);
    $fechaReal = "Date.UTC(".$dataFecha[0].",".$dataFecha[1].",".$dataFecha[2].")";


    $dataCol[0] = $fecha;

    $dataCol[1] = (int)$cantidad;

    $dataValues[$cont] = $dataCol;
    $cont++;
  }

  $series['data'] = $dataValues;

  $seriesData[$i] = $series;
}

$responseFinal['valuesData'] = $seriesData;

echo json_encode($responseFinal);
mysqli_free_result($resultado);
mysqli_close($conexion);
?>
