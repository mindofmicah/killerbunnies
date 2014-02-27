require.config({
    baseUrl:'js',
    paths: {
        jquery:"http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
        underscore:'vendor/underscore-min',
        backbone:'vendor/backbone-min'
    }
 });


define(['views/App', 'modules/history/main','modules/players/main','views/GameView', 'backbone', 'views/DeadBunnyPopup', 'modules/rules/main'], function (App, History, Player, GameView, Backbone, DBP, Rules) {
    var app = new App;
    var history_collection = History.Collection();


    var players = Player.Collection();
    var pmv = Player.View();
    var game = new GameView({
        collection:players,
        rules:Rules.Collection()
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

$('.go-home').click(function () {
    r.navigate('game', {trigger:true});
});
$('.go-to-rules').click(function () {
    r.navigate('rules', {trigger:true});
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
