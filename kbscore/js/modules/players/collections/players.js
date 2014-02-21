define(['backbone', 'modules/players/models/player'], function (Backbone, Player) {

PlayerCollection = Backbone.Collection.extend({
        model:Player,
        getRankedModels : function () {
//        console.log(this.models);

            var m = this.models.sort(function (a,b) {
                return a.get('score') < b.get('score');
            });

            var current_rank = 0;
            var current_score;;
            var ranks = [];
            for (var i = 0; i < m.length; i++) {

                if (m[i].get('score') == current_score) {
                    ranks.push({
                        name:m[i].get('name'),
                        rank:current_rank
                    });                
                } else {
                    current_rank = i+1;
                    ranks.push({
                        name:m[i].get('name'),
                        rank:current_rank
                    });
                    current_score = m[i].get('score');
                }

            }

            return ranks;
        }
    })
    return PlayerCollection;
});
