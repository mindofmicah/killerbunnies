
define(['backbone','modules/players/main','views/GameView'], function (Backbone, Player, GameView) {
//var pmv = Player.View();
var App = Backbone.View.extend({
    el:$('#content'),
        show : function (path) {

            if (path === 'pmv') {
                this.$el.find('.show').removeClass('show');;
                Player.View().$el.addClass('show');
            } else if (path === 'game') {
                this.$el.find('.show').removeClass('show');;
                v = new GameView({collection:Player.Collection()});
                v.$el.addClass('show');
            }
                                                      }
                                                        });

return App;
});

