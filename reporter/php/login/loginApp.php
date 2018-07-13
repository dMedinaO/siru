<?php

  #obtenemos los datos del formulario
  $userData = $_REQUEST['userData']; #es el correo
  $passwd = $_REQUEST['passwd'];#es el dni

  #establecemos la conexion a la base de datos...
  include("../connection.php");#incluimos la base de datos

  #formamos la consulta
  $query = "select * from user join rol on (user.rol = rol.idrol ) where user.dni = '$userData' AND user.passwd = '$passwd'";
  $resultado = mysqli_query($conexion, $query);

  $response = 'SN';#contiene la respuesta...

	if (!$resultado){
		die("Error");

	}else{

		while($data = mysqli_fetch_assoc($resultado)){
			$response = $data['nameRol'];
      #iniciamos la variable sesion y guardamos el nameUser...
      session_start();
      $_SESSION['userName'] = $data["iduser"];      

		}
	}

  $responseFinal = [];
  $responseFinal['rolUser'] = $response;

  echo json_encode($responseFinal);

?>
