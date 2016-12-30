var j = jQuery.noConflict();
j(function () {
    j('#chart-circle').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Persentasi Gender Penduduk Indonesia'
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
            name: 'Perbandingan',
            colorByPoint: true,
            data: [{
                name: 'Laki-laki',
                y: 46.33
            }, {
                name: 'Perempuan',
                y: 53.67,
                sliced: true,
                selected: true
            }]
        }]
    });
});