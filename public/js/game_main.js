require(['./common'], function () {
    'use strict';
    require([
        'jquery',
        'modules/players/main'
    ], function ($, Player) {
        var scoreboard = Player.View('scoreboard');
        $('body').html(scoreboard.render().$el);
    });
});
