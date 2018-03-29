var page = require('webpage').create();
page.onConsoleMessage = function(str) {
   console.log("1: ",str);
}
page.open('http://localhost:8080', function(status) {


  page.render('beforeclick.png');


  console.log("2: ",page.url);
  console.log("Estatus: ",status);

  var element = page.evaluate(function() {
      // return document.querySelector('img[src = "/o/busqueda/js/assets/images/Audi.png"]');
       return document.querySelector('input[name="inputTest"]');

   });
   page.sendEvent('click', element.offsetLeft, element.offsetTop, 'left');

   window.setTimeout(function () {
      console.log(page.url);
      page.render('afterclick.png');
      phantom.exit();
   }, 50000);
   console.log('element is ' + element);
});
