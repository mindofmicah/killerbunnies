define(['backbone'], function (Backbone) {
    var ScoreboardView = Backbone.View.extend({
        tagName: 'ul',
        className: 'list-group',
        initialize: function () {
            this.listenTo(this.collection, 'change', this.render);
            this.render();
        },
        formatRank: function (i) {
            if (i == 1) {
                return i + 'st Place';
            }
            if (i == 2) {
                return i + 'nd Place';
            }
            if (i == 3) {
                return i + 'rd Place';
            }
            return i + 'th Place';
        },
        render: function () {
            var standings = this.$el.empty();
            var ranked_models = this.collection.getRankedModels();
            for (var i = 0; i < ranked_models.length; i++) {
                standings.append('<div class="list-group-item ' + (ranked_models[i].rank == 1 ? ' list-group-item-success' : '') + '"><span class="badge badge-success' + (i == 1 ? '' : '') + '">' + this.formatRank(ranked_models[i].rank) + '</span>' + ranked_models[i].name + '</div>');
            }

            return this;
        },
        events: {
        }

    });

    return ScoreboardView;
});