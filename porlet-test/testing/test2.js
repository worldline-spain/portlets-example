var page = require('webpage').create();

page.open('http://localhost:3000', function() {


  Liferay.on('allPortletsReady', function() {
    page.render('test.png');
  });
  phantom.exit();

});
