var jIndustri = jQuery.noConflict();
jIndustri(function () {
    jIndustri('#industri').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Industri Besar Dan Industri Kecil'
        },
        subtitle: {
            text: 'Pusat Statistik Indonesia'
        },
        xAxis: {
            categories: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
            title: {
                text: 'Data'
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
            name: 'Industri Besar',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'Industri Kecil',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
});