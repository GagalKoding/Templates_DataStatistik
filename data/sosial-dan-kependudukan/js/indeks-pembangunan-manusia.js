var jipm = jQuery.noConflict();
jipm(function () {
    jipm('#ipm').highcharts({
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Indeks Pembangunan Manusia'
        },
        subtitle: {
            text: 'Pusat Data Statistik Republik Indonesia'
        },
        xAxis: [{
            categories: ['2004', '2005', '2006', '2007', '2008', '2009',
                '2010', '2011', '2012', '2013', '2014', '2015'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'IPM',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'IPM',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value}',
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
            name: 'World',
            type: 'column',
            yAxis: 1,
            data: [71.25, 71.30, 71.31, 71.60, 71.80, 71.85, 71.88, 72.00, 72.15, 72.25, 72.35, 72.42],
            tooltip: {
                valueSuffix: ''
            }

        }, {
            name: 'Indonesia',
            type: 'spline',
            data: [71.17, 71.29, 71.50, 71.56, 71.77, 71.81, 71.81, 71.96, 72.12, 72.23, 72.31, 72.39],
            tooltip: {
                valueSuffix: ''
            }
        }]
    });
});
var jipmcircle = jQuery.noConflict();
jipmcircle(function () {
    // Create the chart
    jipmcircle('#ipm-circle').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Publik Indeks Pembangunan Manusia'
        },
        subtitle: {
            text: 'Pusat Data Statistik.'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Amerika Serikat',
                y: 56.33,
                drilldown: 'Amerika Serikat'
            }, {
                name: 'Jerman',
                y: 24.03,
                drilldown: 'Jerman'
            }, {
                name: 'Jepang',
                y: 10.38,
                drilldown: 'Jepang'
            }, {
                name: 'Indonesia',
                y: 4.77,
                drilldown: 'Indonesia'
            }, {
                name: 'Iran',
                y: 0.91,
                drilldown: 'Iran'
            }, {
                name: 'Other Country',
                y: 0.2,
                drilldown: null
            }]
        }],
        drilldown: {
            series: [{
                name: 'Microsoft Internet Explorer',
                id: 'Microsoft Internet Explorer',
                data: [
                    ['v11.0', 24.13],
                    ['v8.0', 17.2],
                    ['v9.0', 8.11],
                    ['v10.0', 5.33],
                    ['v6.0', 1.06],
                    ['v7.0', 0.5]
                ]
            }, {
                name: 'Chrome',
                id: 'Chrome',
                data: [
                    ['v40.0', 5],
                    ['v41.0', 4.32],
                    ['v42.0', 3.68],
                    ['v39.0', 2.96],
                    ['v36.0', 2.53],
                    ['v43.0', 1.45],
                    ['v31.0', 1.24],
                    ['v35.0', 0.85],
                    ['v38.0', 0.6],
                    ['v32.0', 0.55],
                    ['v37.0', 0.38],
                    ['v33.0', 0.19],
                    ['v34.0', 0.14],
                    ['v30.0', 0.14]
                ]
            }, {
                name: 'Firefox',
                id: 'Firefox',
                data: [
                    ['v35', 2.76],
                    ['v36', 2.32],
                    ['v37', 2.31],
                    ['v34', 1.27],
                    ['v38', 1.02],
                    ['v31', 0.33],
                    ['v33', 0.22],
                    ['v32', 0.15]
                ]
            }, {
                name: 'Safari',
                id: 'Safari',
                data: [
                    ['v8.0', 2.56],
                    ['v7.1', 0.77],
                    ['v5.1', 0.42],
                    ['v5.0', 0.3],
                    ['v6.1', 0.29],
                    ['v7.0', 0.26],
                    ['v6.2', 0.17]
                ]
            }, {
                name: 'Opera',
                id: 'Opera',
                data: [
                    ['v12.x', 0.34],
                    ['v28', 0.24],
                    ['v27', 0.17],
                    ['v29', 0.16]
                ]
            }]
        }
    });
});