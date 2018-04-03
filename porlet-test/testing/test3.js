var page = require('webpage').create();


page.open('http://localhost:8080', function (status) {
    if (status !== 'success') {
        console.log('Unable to access page');
    } else {
        // var p = page.evaluate(function () {
        //     if(!self.loading){
        //       console.log("ha ido mal");
        //       return document.documentElement.outerHTML;
        //     }
        //     else{
        //       console.log("ha ido bien");
        //     }
        //});

        var title = page.evaluate(function() {
          return document.title;
        });

        console.log(title);
        page.render('test.png');
        Liferay.on(
          'allPortletsReady',
          function() {
            page.render('test-allPortletsReady.png');
          }
        );
        phantom.exit();
    }
    phantom.exit();
});
