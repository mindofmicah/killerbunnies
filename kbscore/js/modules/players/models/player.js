define(['backbone'], function (Backbone) {
var Player = Backbone.Model.extend({
        defaults : {
            name:'',
            score:0
        },
        incrementScoreBy : function(num) {
            this.set('score', this.get('score') + 1);
        },
        decrementScoreBy: function(num) {
            this.set('score', this.get('score') -  1);
        },
        killedABunnyBelongingTo : function (player) {
            if (this === player) {
                
            } else {

            }

        }
    });
    return Player;
});   
