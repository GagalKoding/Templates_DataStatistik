var jlingkungan = jQuery.noConflict();
jlingkungan(function () {
    jlingkungan('#lingkungan').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Perkembangan Kasus Pencemaran Lingkungan'
        },
        subtitle: {
            text: 'Badan Pusat Statistik'
        },
        xAxis: {
            categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
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
            name: 'Tanah',
            data: [5.0, 6.9, 8.5, 7.5, 10.4, 12.5, 14.2, 15.5, 16.3, 18.3, 13.9, ]
        }, {
            name: 'Air',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 14.3, 12.6, null]
        }
        , {
            name: 'Udara',
            data: [4.2, 5.8, 7.9, 6.5, 12.9, 17.2, 19.0, 17.6, 17.2, 19.3, 20.6, ]
        }]
    });
});