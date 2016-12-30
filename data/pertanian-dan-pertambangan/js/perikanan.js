var jPerikanan = jQuery.noConflict();
jPerikanan(function () {
    jPerikanan('#perikanan').highcharts({
        data: {
            table: 'datatable'
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'PDB Sub Sektor Perikanan'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Miliar Rupiah'
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
var jikan = jQuery.noConflict();
jikan(function () {
    jikan('#ikan').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Grafik Segmen Penjualan Ikan'
        },
        xAxis: {
            categories: ['Nelayan', 'Bakul', 'Pengolah']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Harga jual (Rp)'
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: 'Minimum',
            data: [5000, 5000, 3000]
        }, {
            name: 'Maksimum',
            data: [9000, 10000, 15000]
        }]
    });
});