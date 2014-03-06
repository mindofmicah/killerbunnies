require(['./common'], function (Common) {
    require([
        'modules/players/main',
        'backbone', 
        'bootstrap'
    ], function (Player, Backbone, Bootstrap) { 


        var players = Player.Collection();
        var pmv = Player.View();
     });
});
