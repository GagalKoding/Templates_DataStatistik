var jenergi = jQuery.noConflict();
jenergi(function () {
    jenergi('#energi').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Total Suplai Energi Primer'
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
                text: 'mgs'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000 + 'k';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>tahun {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: 1940,
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
            name: 'Mixed',
            data: [6, 11, 32, 110, 235, 369, 640,
                1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                
                ]
        }, {
            name: 'Gas',
            data: [33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                21000, 20000, 19000, 18000, 18000, 17000, 16000]
        }, {
            name: 'Oil',
            data: [4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                21000, 20000, 19000, 18000, 18000, 17000, 16000, 35000, 33000, 
                31000, 29000, 27000, 25000, 24000, 23000, 22000]
        }, {
            name: 'Coal',
            data: [24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                21000, 20000, 19000, 18000, 18000, 17000, 16000, 35000, 33000, 
                4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                31000, 29000, 27000, 25000, 24000, 23000, 22000,
                27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662
                ]
        }]
    });
});