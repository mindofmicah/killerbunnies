define(['backbone', 'modules/players/views/scoreboard_list_view'], function (Backbone, ScoreboardListView) {
    var ScoreboardView = Backbone.View.extend({
        className: 'list-group',
        initialize: function () {
            this.listenTo(this.collection, 'change', this.render);
            this.render();
        },
        render: function () {
            var standings = this.$el.empty(),
                scoreboard_list_view;

            this.collection.calculateRanks().each(function (model) {
                scoreboard_list_view = new ScoreboardListView({model : model});
                standings.append(scoreboard_list_view.render().$el);
            });

            return this;
        }

    });

    return ScoreboardView;
});