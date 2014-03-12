define(['jquery', 'backbone', 'modules/players/models/player', 'modules/players/views/player_listing_view'], function ($, Backbone, Player, PlayerListingView) {
    var PlayerManagementView = Backbone.View.extend({
        el: $('#player-management'),
        events: {
            'submit form': 'addPlayer',
            'focus input': 'removeErrors'
        },
        initialize: function () {
            this.input = $('input[type="text"]');
            this.listenTo(this.collection, 'add', this.render);
            this.panel = $('#player-list-group');
        },
        render: function () {
            var panel = this.panel,
                listing_view;

            panel.empty();
            this.collection.each(function (model) {
                listing_view = new PlayerListingView({model: model});
                panel.append(listing_view.el);
            });
            return this;
        },
        addPlayer: function (e) {
            e.preventDefault();
            if (this.input.val() !== '') {
                this.collection.add(new Player({name: this.input.val()}));
                this.input.val('').trigger('focus');
            } else {
                this.input.closest('.form-group').addClass('has-error');
            }
        },
        removeErrors: function () {
            this.input.closest('.form-group').removeClass('has-error');
        }
    });
    return PlayerManagementView;
});
