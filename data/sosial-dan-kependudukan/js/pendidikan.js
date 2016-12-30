var jpendidikan = jQuery.noConflict();
jpendidikan(function () {
    jpendidikan('#pendidikan').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Statistik Pendidikan Di Indonesia'
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
            name: 'Tidak Sekolah',
            data: [6.0, 6.9, 5.6, 5.5, 5.4, 5.1, 4.7, 4.5, 4.3, 3.3, 2.9, ]
        }, {
            name: 'SD',
            data: [8.9, 8.2, 7.7, 6.5, 5.9, 4.2, 4.0, 3.6, 3.2, 2.3, 2.6, null]
        }
        , {
            name: 'SMP',
            data: [5.2, 5.8, 5.9, 5.5, 5.9, 5.2, 5.0, 5.6, 5.2, 5.3, 5.6, ]
        }, {
            name: 'SMA/SMK',
            data: [3.2, 4.8, 3.9, 4.5, 3.9, 4.2, 3.0, 4.6, 3.2, 4.3, 3.6, ]
        }, {
            name: 'Diploma',
            data: [2.2, 3.8, 2.9, 3.5, 3.9, 2.2, 3.0, 2.6, 4.2, 3.3, 2.6, ]
        }, {
            name: 'Sarjana',
            data: [1.2, 1.8, 2.4, 2.5, 3.0, 3.2, 3.5, 4.0, 4.1, 4.3, 5.5, ]
        }, {
            name: 'Pascasarjana',
            data: [0.2, 1.8, 1.9, 2.5, 2.9, 3.2, 3.3, 3.6, 4.2, 4.3, 4.6, ]
        }]
    });
});