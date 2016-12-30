var jInflasi = jQuery.noConflict();
jInflasi(function () {
    jInflasi('#inflasi').highcharts({
        title: {
            text: 'Perkembangan IHK',
            x: -20 //center
        },
        subtitle: {
            text: 'Pusat Data Statistik',
            x: -20
        },
        xAxis: {
            categories: ['2004', '2005', '2006', '2007', '2008', '2009',
                '2010', '2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
            title: {
                text: 'IHK'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ' IHK'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Umum',
            data: [7.0, 6.9, 4.5, 5.5, 4.2, 10.5, 7.2, 9.5, 6.3, 4.3, 9.9, 10.6]
        }, {
            name: 'Sandang',
            data: [0.2, 0.8, 5.7, 6.3, 14.0, 20.0, 23.8, 23.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Bahan Makanan',
            data: [0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'Kesehatan',
            data: [2.9, 4.2, 4.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }, {
            name: 'Pendidikan',
            data: [3.9, 3.2, 2.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }, {
            name: 'Perumahan',
            data: [1.9, 5.2, 4.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }, {
            name: 'Transport',
            data: [5.9, 2.2, 3.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
});