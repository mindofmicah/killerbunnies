require(['./common'], function (Common) {
    require([
        'modules/players/main',
        'views/StartingPage',
        'backbone', 
        'bootstrap'
    ], function (Player, StartingPage, Backbone, Bootstrap) { 
        var starting_page = new StartingPage({
                el:$('#landing-page')
            });

//        var players = Player.Collection();
  //      var pmv = Player.View();
     });
});
