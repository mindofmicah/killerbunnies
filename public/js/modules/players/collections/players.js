define(['backbone', 'modules/players/models/player'], function (Backbone, Player) {
    var PlayerCollection = Backbone.Collection.extend({
        model: Player,
        comparator: function (model) {
            return -model.get('score');
        },
        calculateRanks: function(){
            this.sort();
            var current_rank = 0;
            var current_score = null;
            for(var i = 0; i<this.models.length; i++) {
                if (this.models[i].get('score') === current_score ) {
                    this.models[i].set('rank', current_rank);
                } else {
                    current_rank++;
                    current_score = this.models[i].get('score');
                    this.models[i].set('rank', current_rank);
                }
            }
            return this;
        },
        getRankedModels: function () {
            var ranked_models = [],
                current_rank = 0,
                current_score,
                ranks = [],
                i;
            ranked_models = this.models.sort(function (a, b) {
                return a.get('score') < b.get('score');
            });

            for (i = 0; i < ranked_models.length; i++) {
                if (ranked_models[i].get('score') === current_score) {
                    ranks.push({
                        name: ranked_models[i].get('name'),
                        rank: current_rank
                    });
                } else {
                    current_rank = i + 1;
                    ranks.push({
                        name: ranked_models[i].get('name'),
                        rank: current_rank
                    });
                    current_score = ranked_models[i].get('score');
                }
            }
            return ranks;
        }
    });
    return PlayerCollection;
});
