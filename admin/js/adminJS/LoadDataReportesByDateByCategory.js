$(function () {
	var processed_json = new Array();
	$.getJSON('../php/statisticsData/loadDataReportesByDateByCategory.php', function(data) {



		// draw chart
        $('#historyReportCategory').highcharts({

					credits:{
						enabled:false
					},
					chart: {
        		type: 'spline'
			    },
			    title: {
			        text: 'Reportes generados por fecha según categoría'
			    },

			    xAxis: {
			        type: 'datetime',
			        dateTimeLabelFormats: { // don't display the dummy year
			            month: '%e. %b',
			            year: '%b'
			        },
			        title: {
			            text: 'Date'
			        }
			    },
			    yAxis: {
			        title: {
			            text: 'Snow depth (m)'
			        },
			        min: 0
			    },
			    tooltip: {
			        headerFormat: '<b>{series.name}</b><br>',
			        pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
			    },

			    plotOptions: {
			        spline: {
			            marker: {
			                enabled: true
			            }
			        }
			    },
		    series: data.valuesData
		});
	});
})
