var jkesehatan = jQuery.noConflict();
jkesehatan(function () {
    jkesehatan('#kesehatan1').highcharts({
        data: {
            table: 'datatable'
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Data extracted from a HTML table in the page'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Jiwa'
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
var jkesehatanCircle = jQuery.noConflict();
jkesehatanCircle(function () {
    // Create the chart
    jkesehatanCircle('#kesehatan2').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Data Kesehatan'
        },
        subtitle: {
            text: 'Badan Statistik Indonesia'
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
                name: 'Penyakit Saluran Pernafasan, 302012',
                y: 20.00,
                drilldown: 'Penyakit Saluran Pernafasan, 302012'
            }, {
                name: 'Penyakit Tekanan Darah Tinggi, 131943',
                y: 16.0,
                drilldown: 'Penyakit Tekanan Darah Tinggi, 131943'
            }, {
                name: 'Penyakit Rongga Mulut, 113323',
                y: 14.00,
                drilldown: 'Penyakit Rongga Mulut, 113323'
            }, {
                name: 'Organ Otot dan Jaringan, 112514',
                y: 13.00,
                drilldown: 'Organ Otot dan Jaringan, 112514'
            }, {
                name: 'Penyakit Infeksi Pada Usus, 87786',
                y: 12.00,
                drilldown: 'Penyakit Infeksi Pada Usus, 87786'
            }, {
                name: 'Kelainan Kulit, 75690',
                y: 8.00,
                drilldown: 'Kelainan Kulit, 75690'
            }, {
                name: 'Endokrin dan Metabolik, 57824',
                y: 7.00,
                drilldown: 'Endokrin dan Metabolik, 57824'
            }, {
                name: 'Sistem Pencernaan, 54899',
                y: 4.00,
                drilldown: 'Sistem Pencernaan, 54899'
            }, {
                name: 'Penyakt Tuberculosa, 17758',
                y: 3.00,
                drilldown: 'Penyakt Tuberculosa, 17758'
            }, {
                name: 'Penyakit Mata dan Adneksia, 16609',
                y: 3.00,
                drilldown: 'Penyakit Mata dan Adneksia, 16609'
            }]
        }]
    });
});