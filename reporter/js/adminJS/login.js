$(window).on('load', function() {

	checkLogin();

});


var checkLogin = function(){
  $("#loginData").on("click", function(){
    var userData = $("#frmLogin #username").val();
    var passwd = $("#frmLogin #password").val();

    $.ajax({
      method:"POST",
      url: "../admin/php/login/loginApp.php",
      data: {
          "userData": userData,
          "passwd": passwd
      }
    }).done( function( info ){

			var dataParse = JSON.parse(info);

			console.log(dataParse);

	    var rolUser = dataParse.rolUser;

			if (rolUser == "ADMINISTRADOR"){

				location.href="../admin/";
			}else{

				if (rolUser == "ENCARGADO REPORTES"){

					location.href="../encargado/";
				}else{

					if (rolUser == "REPORTADOR"){
						location.href="../reporter/";
					}else{
						location.reload(true);
					}
				}

			}


    });
  });
}
