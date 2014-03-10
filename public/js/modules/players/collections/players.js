define(['backbone', 'modules/players/models/player'], function (Backbone, Player) {
    var PlayerCollection = Backbone.Collection.extend({
        model: Player,
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
