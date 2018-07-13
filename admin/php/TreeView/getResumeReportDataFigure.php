<?php

  session_start();
  include ("../connection.php");

  #recibimos como parametro el nombre del evento y obtenemos la informacion a partir de este....
  $data = $_REQUEST['data'];

  #procesamos la consulta...
  $query = "select reportUser.idreportUser from reportUser where reportUser.dateReport = '$data'";#obtenemos el id del reporte
  $idReporte = '';

  $resultado = mysqli_query($conexion, $query);
	$dataInformation = [];#arreglo para obtener la informacion...
  $dataInformation['user'] = $_SESSION['userName'];

  #obtenemos la informacion del id del reporte...
  if (!$resultado){
    die("Error");
  }else{

    while($data = mysqli_fetch_assoc($resultado)){

      $idReporte= $data['idreportUser'];
    }
  }

  $cont=0;
  #ahora obtenemos la informacion de la imagen....
  $query2 = "select pictureReport.namePictureReport from pictureReport where pictureReport.reportUser = $idReporte";#obtenemos el id del reporte  
  $resultado2 = mysqli_query($conexion, $query2);

  if (!$resultado2){
    die("Error");
  }else{

    while($data = mysqli_fetch_assoc($resultado2)){

      $dataInformation['imageName'] = $data['namePictureReport'];
      $cont++;
    }
  }

  if ($cont==0){
    $dataInformation['imageName'] = "-";
  }
  echo json_encode($dataInformation);

  mysqli_free_result($resultado);
  mysqli_close($conexion);


?>
