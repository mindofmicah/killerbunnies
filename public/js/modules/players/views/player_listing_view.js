define(['backbone'], function (Backbone) {
    var PlayerListingView = Backbone.View.extend({
        tagName: 'li',
        className: 'list-group-item',
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.model.get('name'));
            return this;
        }
    });

    return PlayerListingView;
});