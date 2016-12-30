var jPertambangan = jQuery.noConflict();
jPertambangan(function () {
    jPertambangan('#pertambangan').highcharts({
        title: {
            text: 'Grafik Pertambangan Indonesia',
            x: -20 //center
        },
        subtitle: {
            text: 'Badan Statistik Pertambangan Indonesia',
            x: -20
        },
        xAxis: {
            categories: ['Thermal Coal', 'Coking Coal', 'Nickel', 'Copper', 'Gold', 'Tin']
        },
        yAxis: {
            title: {
                text: '%'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Eastern Indonesia',
            data: [30.0, 31.9, 35.5, 29.5, 30.2, 32.5]
        }, {
            name: 'North Western Indonesia',
            data: [20.2, 21.8, 18.7, 20.3, 23.0]
        }, {
            name: 'Western Indonesia',
            data: [15.9, 16.6, 22.5, 20.4, 23.5, 20.0]
        }, {
            name: 'North Central Indonesia',
            data: [25.9, 24.2, 28.7, 27.5, 26.9, 29.2]
        }]
    });
});