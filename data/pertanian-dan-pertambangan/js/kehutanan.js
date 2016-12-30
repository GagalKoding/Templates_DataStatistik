var jkehutanan = jQuery.noConflict();
jkehutanan(function () {
    // Create the chart
    jkehutanan('#kehutanan').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Grafik Kehutanan Indonesia'
        },
        subtitle: {
            text: 'Badan Pusat Statistik'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Total percent'
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
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Perencanaan Hutan',
                y: 33.33,
                drilldown: 'Perencanaan Hutan'
            }, {
                name: 'PHKA',
                y: 41.03,
                drilldown: 'PHKA'
            }, {
                name: 'PDAS PS',
                y: 33.38,
                drilldown: 'PDAS PS'
            }, {
                name: 'Pemanfaatan Hutan',
                y: 40.77,
                drilldown: 'Pemanfaatan Hutan'
            }, {
                name: 'Rata Rata',
                y: 37.91,
                drilldown: 'Rata Rata'
            }]
        }]
    });
});