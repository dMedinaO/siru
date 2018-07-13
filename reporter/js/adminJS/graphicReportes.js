Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    
    credits:{
		
		enabled: false
	},
	
    title: {
        text: 'Reportes Generados por Categoría'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Reportes',
        colorByPoint: true,
        data: [{
            name: 'Categoría 01',
            y: 56.33
        }, {
            name: 'Categoría 02',
            y: 24.03,
            sliced: true,
            selected: true
        }, {
            name: 'Categoría 03',
            y: 10.38
        }, {
            name: 'Categoría 04',
            y: 4.77
        }, {
            name: 'Categoría 05',
            y: 0.91
        }, {
            name: 'Categoría 06',
            y: 0.2
        }]
    }]
});
