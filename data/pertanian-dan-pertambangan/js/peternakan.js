var jPeternakan = jQuery.noConflict();
jPeternakan(function () {
    jPeternakan('#daging').highcharts({
        data: {
            table: 'datatable'
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Produksi Daging'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Berat Daging (Kg)'
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
var jPermintaan = jQuery.noConflict();
jPermintaan(function () {
    jPermintaan('#permintaan').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Grafik Permintaan Daging Indonesia'
        },
        subtitle: {
            text: 'Badan Pusat Statistik'
        },
        xAxis: {
            categories: [
                '2011',
                '2012',
                '2013',
                '2014',
                '2015'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'ton'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} ton</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Permintaan Daging',
            data: [49.9, 71.5, 106.4, 129.2, 144.0]

        }, {
            name: 'Penyediaan Daging',
            data: [83.6, 78.8, 98.5, 93.4, 106.0]

        }, {
            name: 'Impor Bakalan Setara Daging',
            data: [48.9, 38.8, 39.3, 41.4, 47.0]

        }, {
            name: 'Impor Daging',
            data: [42.4, 33.2, 34.5, 39.7, 52.6]

        }]
    });
});