$(function () {
	var processed_json = new Array();
	$.getJSON('php/statisticsData/loadDataReportesByZoneByCategory.php', function(data) {



		// draw chart
        $('#reportByCategoryByZone').highcharts({

					credits:{
						enabled:false
					},

					chart: {
		        type: 'column'
		    },
		    title: {
		        text: 'Reportes Registrados en zonas según categoría'
		    },

		    xAxis: {
		        categories: data.category,
		        crosshair: true
		    },
		    yAxis: {
		        min: 0,
		        title: {
		            text: 'Rainfall (mm)'
		        }
		    },
		    tooltip: {
		        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
		            '<td style="padding:0"><b>{point.y:f} Reportes</b></td></tr>',
		        footerFormat: '</table>',
		        shared: true,
		        useHTML: true
		    },
		    plotOptions: {
		        column: {
		            pointPadding: 0.2,
		            borderWidth: 0
		        }
		    },
		    series: data.valuesData
		});
	});
})
