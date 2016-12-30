var jkeuangan = jQuery.noConflict();
jkeuangan(function () {
    jkeuangan('#keuangan').highcharts({
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Investor Obligasi Pemerintah Indonesia'
        },
        subtitle: {
            text: 'Data Statistik Keuangan Indonesia'
        },
        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value} %',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Saham Indonesia',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Inversor',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} Triliun USD',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: 'Investor',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 220.6, 250.4],
            tooltip: {
                valueSuffix: ' Triliun USD'
            }

        }, {
            name: 'Saham Indonesia',
            type: 'spline',
            data: [10.0, 20.9, 85.5, 92.5, 102.2, 129.5, 130.2, 134.5, 152.3, 156.3, 168.9, 249.9],
            tooltip: {
                valueSuffix: '%'
            }
        }]
    });
});