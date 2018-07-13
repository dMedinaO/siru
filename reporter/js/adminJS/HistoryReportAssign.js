$(function () {
	var processed_json = new Array();
	$.getJSON('../php/statisticsData/reportsAssignInFecha.php', function(data) {

		// Populate series
		for (i = 0; i < data.length; i++){
		  var cantidad = parseInt(data[i].cantidad);
      //procesamos para la informacion en UTC...
      var valueDate = data[i].fecha.split("-");
      var ano = parseInt(valueDate[0]);
      var mes = parseInt(valueDate[1]) -1;
      var dia = parseInt(valueDate[2]);

      var dateInfo = Date.UTC(ano,mes,dia);

			processed_json.push([dateInfo, cantidad]);
      console.log(processed_json);
		}

		// draw chart
        $('#historyReport').highcharts({
          chart: {
            type: 'spline'
        },
        title: {
            text: 'Reportes asignados históricamente'
        },

        credits: {

            enabled: false
        },

        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Fecha de Incidencia'
            }
        },
        yAxis: {
            title: {
                text: 'Cantidad de Reportes Registrados'
            },
            min: 0
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%e. %b}: {point.y:f} reportes'
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },

            series: [{
				name: 'Reportes',
                data: processed_json
			}]
		});
	});
})
