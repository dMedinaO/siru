<?php

  session_start();

  //liberamos todas las variables de sesion registradas...
  $_SESSION = array();
  session_destroy();
  echo '<script language = javascript>
			alert("Exit system OK")
			self.location = "../../view/"
			</script>';
?>
