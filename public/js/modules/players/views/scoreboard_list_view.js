define(['backbone'], function (Backbone) {
    var ScoreboardListView = Backbone.View.extend({
        className: 'list-group-item',
        initialize: function () {
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
            //                standings.append('') + '"><span cla'">' + this.formatRank(ranked_models[i].rank) + '</span>' + ranked_models[i].name + '</div>');
            var badge = $('<span class="badge">' + this.formatRank(this.model.get('rank')) + '</span>');
            if (this.model.get('rank') === 1) {
                this.$el.addClass('list-group-item-success');
                badge.addClass('badge-success');
            }
            this.$el.html(badge).append(this.model.get('name'));
            return this;
        },
        events: {
        }

    });

    return ScoreboardListView;
});