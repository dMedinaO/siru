$(function () {

	$.getJSON('php/statisticsData/loadDataReportesByDateByCategory.php', function(data) {

		var responseInfo = data.valuesData;

		for (i = 0; i < responseInfo.length; i++){
			for (j=0; j<responseInfo[i].data.length; j++){
				var fechaInfo = responseInfo[i].data[j][0].split("-");
				var fechaData = Date.UTC(fechaInfo[0], fechaInfo[1]-1, fechaInfo[2]);
				responseInfo[i].data[j][0] = fechaData;
			}
		}
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
			            text: 'Reportes Cantidad'
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
		    series: responseInfo
		});
	});
})
