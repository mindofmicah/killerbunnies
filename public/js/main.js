require(['./common'], function () {
    'use strict';
    require([
        'jquery',
        'views/App', 
        'modules/history/main',
        'modules/players/main',
        'views/GameView', 
        'backbone', 
        'views/DeadBunnyPopup', 
        'modules/rules/main', 
        'bootstrap'
    ], function ($, App, History, Player, GameView, Backbone, DBP) {
        var app = new App(),
            history_collection = History.Collection(),
            R = Backbone.Router.extend({
                routes: {
                    '': function () {
                        app.show('pmv');
                    },
                    'game': function () {
                        app.show('game');
                    },
                    rules: function () {
                        app.show('rules');
                    }
                }
            }), popup, r, history_view;

        $('a').click(function (e) {
            e.preventDefault();
            r.navigate('game', {trigger : true});
        });

        $('.go-home').click(function () {
            r.navigate('game', {trigger : true});
        });
        $('.go-to-rules').click(function () {
            r.navigate('rules', {trigger : true});
        });
        popup = new DBP({
            collection: Player.Collection(),
            history_collection: History.Collection()
        });

        r = new R();
        Backbone.history.start();

     
        history_view = History.View({
            collection: history_collection
        });


    });

});
