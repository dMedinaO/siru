<?php
	session_start();

  if (!$_SESSION){
	   echo '<script language = javascript>
	    alert("Usuario no autenticado")
	    self.location = "../"
	    </script>';
  }
?>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="refresh" content="0">
<title>Sistema de Control de Acceso</title>
<script language="javascript">
    window.location.href = "sector/"
</script>
</head>
<body>
Go to <a href="sector/">sector/</a>
</body>
</html>
