var jperumahan = jQuery.noConflict();
jperumahan(function () {
    // Create the chart
    jperumahan('#perumahan').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Persentasi rumah tangga yang menempati rumah milik sendiri'
        },
        subtitle: {
            text: 'Badan Pusat Statistik'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Persentasi'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: '2011',
                y: 84.68,
                drilldown: '2011'
            }, {
                name: '2012',
                y: 80.61,
                drilldown: '2012'
            }, {
                name: '2013',
                y: 82.38,
                drilldown: '2013'
            }, {
                name: '2014',
                y: 83.77,
                drilldown: '2014'
            }, {
                name: '2015',
                y: 82.91,
                drilldown: '2015'
            }, {
                name: '2016',
                y: 'dalam proses',
                drilldown: '2016'
            }]
        }]
    });
});