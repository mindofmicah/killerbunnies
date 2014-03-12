
define(['backbone','modules/players/main','views/GameView', 'modules/rules/main'], function (Backbone, Player, GameView, Rules) {
//var pmv = Player.View();
var App = Backbone.View.extend({
    el:$('#content'),
        show : function (path) {
            if (path === 'pmv') {
                this.$el.find('.show').removeClass('show');;
                Player.View().$el.addClass('show');
            } else if (path === 'game') {
                var player_collection = Player.Collection();
                if (player_collection.length == 0) {
                    window.location.hash = '#';
                    this.$el.find('.show').removeClass('show');
                    Player.View().$el.addClass('show');
                    
                    return;
                }
                this.$el.find('.show').removeClass('show');;
                v = new GameView({collection:player_collection, rules:Rules.Collection()});
                v.$el.addClass('show');
            } else if(path === 'rules') {
                this.$el.find('.show').removeClass('show');
                Rules.View().$el.addClass('show');
            }
                                                      }
                                                        });

return App;
});

