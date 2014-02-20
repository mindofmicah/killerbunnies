var app = new App;


var history_collection = new HistoryCollection;



$('a').click(function (e) {
    e.preventDefault();
    r.navigate('game',{trigger:true});
});
var players = new PlayerCollection;

app = new App;

pmv = new PlayerManagementView({
    collection: players
});
game = new GameView({
    collection: players
});
popup = new DeadBunnyPopup({
    collection:players,
    history_collection:history_collection
});
R = Backbone.Router.extend({
    routes: {
        '': function () {
            app.show('pmv');
        },
        'game':function () {
            app.show('game');
        }
    }
});

history_view = new HistoryView({
    collection:history_collection
});

r =new R;
Backbone.history.start();

// Make sure we start on the home page
r.navigate('', {trigger:true});
