$(document).ready(function () {

	$.ajax({
		type: "POST",
		url: "../php/eventsReports/showEventsForReport.php",
		success: function(response){
			$('.selector-evento select').html(response).fadeIn();
		}
	});
});
