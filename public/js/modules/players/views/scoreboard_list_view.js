define(['backbone'], function (Backbone) {
    var ScoreboardListView = Backbone.View.extend({
        className: 'list-group-item',
        initialize: function () {
            this.render();
        },
        getOrdinal : function (index) {
            switch (index) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            }
            return 'th';
        },
        formatRank: function (index) {
            return index + this.getOrdinal(index) + ' Place';
        },
        render: function () {
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