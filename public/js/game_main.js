require(['./common'], function () {
    
    console.log('afs');

    define('asfd');
    require([
        'jquery',
        'modules/players/main'
    ], function ($, Player) {
        var scoreboard = Player.View('scoreboard');
        $('body').html(scoreboard.render().$el);
    });
});
