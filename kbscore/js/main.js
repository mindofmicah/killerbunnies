require.config({
    baseUrl:'js',
    paths: {
        underscore:'vendor/underscore-min',
        backbone:'vendor/backbone-min'
    },
    shim: {
        backbone : {
            exports: 'Backbone',
            deps: ['underscore']
        }
    }
});


define(['views/App', 'modules/history/main','modules/players/main','views/GameView', 'backbone', 'views/DeadBunnyPopup'], function (App, History, Player, GameView, Backbone, DBP) {
    var app = new App;
    var history_collection = History.Collection();


    var players = Player.Collection();
    var pmv = Player.View();
    var game = new GameView({
        collection:players
    });
 
     R = Backbone.Router.extend({
    routes: {
        '': function () {
            app.show('pmv');
        },
        'game':function () {
            app.show('game');
        },
        rules: function () {
            app.show('rules')
        }
    }
});

 $('a').click(function (e) {
    e.preventDefault();
    r.navigate('game',{trigger:true});
});

popup = new DBP({
    collection:Player.Collection(),
    history_collection:History.Collection()
});

 r =new R;
Backbone.history.start();

// Make sure we start on the home page
//r.navigate('', {trigger:true});
 
 history_view = new HistoryView({
    collection:history_collection
});


/*








popup = new DeadBunnyPopup({
    collection:players,
    history_collection:history_collection
});
history_view = new HistoryView({
    collection:history_collection
});

r =new R;
Backbone.history.start();

// Make sure we start on the home page
r.navigate('', {trigger:true});

*/
});