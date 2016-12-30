var jeksporImpor = jQuery.noConflict();
jeksporImpor(function () {
    jeksporImpor('#eksporimpor').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Total Ekspor dan Impor Indonesia'
        },
        subtitle: {
            text: 'Badan Pusat Statistik'
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            title: {
                text: 'Value in Million USD'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000 + 'k';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} produced <b>{point.y:,.0f}</b> USD<br/>tahun {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: 1990,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Ekspor',
            data: [5000000, 5210000, 5100000, 4500000, 4258918, 4319381, 4727817, 5511923,
            4620000, 4290000, 4521872, 4328174, 5210000, 5100000, 5500000, 5490000, 
            4290000, 4521872, 4328174, 5100000, 4500000, 4258918, 4319381, 4620000, 
            4290000, 4521872, null]
        }, {
            name: 'Impor',
            data: [5500000, 5490000, 4910000, 4300000, 4620000, 4290000, 4521872, 4328174,
            5100000, 4500000, 4258918, 4319381, 4620000, 4290000, 4521872, 4727817,
            4319381, 4727817, 5511923, 4620000, 4290000, 4521872, 4328174, 5210000, 
            5100000, 5500000, null]
        }]
    });
});