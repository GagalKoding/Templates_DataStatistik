var jkultura = jQuery.noConflict();
jkultura(function () {
    jkultura('#holtikultura').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'NTP Tanaman Perkebunan Rakyat'
        },
        subtitle: {
            text: 'Pusat Badan Statistik'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'NTP Perkebunan',
            data: [101.0, 100.9, 101.55, 101.95, 102.64, 102.35, 102.48, 102.05, 101.32, 100.98, 101.9, 100.82]
        }]
    });
});

var jhultura = jQuery.noConflict();
jhultura(function () {
    jhultura('#hultura').highcharts({
        title: {
            text: 'Perkembangan Harga Cabe',
            x: -20 //center
        },
        subtitle: {
            text: 'Badan Data Statistik',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Harga (Rp/kg)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '/kg'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Harga Cabe Rawit',
            data: [15000, 15200, 15150, 15000, 15200, 15900, 15800, 15500, 14900, 15000, 15100, 15250]
        }, {
            name: 'Harga Cabe Merah',
            data: [15200, 14900, 15000, 15100, 15250, 15900, 15200, 15700, 15200, 15150, 15000, 15580]
        }]
    });
});