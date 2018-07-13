$(document).ready(function () {

	$.ajax({
		type: "POST",
		url: "../php/reportes/showCategorias.php",
		success: function(response){
			$('.selector-categoria select').html(response).fadeIn();
		}
	});
});
