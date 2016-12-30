var jTransportasi = jQuery.noConflict();
jTransportasi(function () {
    jTransportasi('#transportasi').highcharts({
        title: {
            text: 'Data Kecelakaan Transportasi',
            x: -20 //center
        },
        subtitle: {
            text: 'Data Statistik Transportasi Indonesia',
            x: -20
        },
        xAxis: {
            categories: ['2004', '2005', '2006', '2007', '2008', '2009',
                '2010', '2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ''
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Jumlah Kecelakaan',
            data: [120.0, 92.9, 99.5, 111.5, 140.2, 102.5, 92.2, 87.5, 91.3, 88.3, 102.9, 109.6]
        }, {
            name: 'Korban Luka',
            data: [80, 50.5, 44.7, 63.3, 82.0, 89.0, 72.8, 39.1, 37.1, 40.1, 40.6, 32.5]
        }, {
            name: 'Korban Meninggal',
            data: [40, 42.4, 44, 82.4, 72.5, 60.0, 20.6, 40.9, 50.3, 46.0, 40.9, 84.0]
        }]
    });
});

var jperbandingan = jQuery.noConflict();
jperbandingan(function () {
    jperbandingan('#perbandingan').highcharts({
        data: {
            table: 'datatable'
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Perbandingan Sepeda Motor dan Mobil'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Percent'
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.point.y + ' ' + this.point.name.toLowerCase();
            }
        }
    });
});
