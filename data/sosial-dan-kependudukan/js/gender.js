var gender = jQuery.noConflict();
gender.getScript('http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js',function(){
gender.getScript('http://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.0/morris.min.js',function(){

  Morris.Area({
    element: 'area-example',
    data: [
    { y: '2009', a: 128281000, b: 138218928 },
    { y: '2010', a: 130121201,  b: 139123821 },
    { y: '2011', a: 132421910,  b: 142912901 },
    { y: '2012', a: 132502190,  b: 143284919 },
    { y: '2013', a: 132591209,  b: 143292019 },
    { y: '2014', a: 132912940,  b: 143502391 },
    { y: '2015', a: 135912390, b: 145192312 }
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Laki-laki/jiwa', 'Perempuan/jiwa']
  });
  
});
});