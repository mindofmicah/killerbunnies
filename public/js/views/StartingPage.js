/*global define */
define(['backbone', 'modules/players/main'], function (Backbone, Player) {
    'use strict';

    var StartingPage = Backbone.View.extend({
            initialize : function () {
                this.collection = Player.Collection();
                this.player_view = Player.View('form', {el:$('.panel-body')});
                this.render();
            },
            render : function () {
                return this;
            },
            events : {
                'submit #start_game' : 'submitGameInfo'
            },
            submitGameInfo : function (e) {
                // If this was triggered by jquery, continue as normal
                if (!e.originalEvent) {
                    return true;
                }
                // We need to do basic processing
                e.preventDefault();

                var el = this.$el.find('form');
                // Remove any existing hidden elements
                el.find('input[type="hidden"]').remove();
                // Add an input field for each model in the collection
                this.collection.each(function (model) {
                    el.append($('<input type="hidden" name="players[]"/>').val(model.get('name')));
                });
                // Trigger the original form submit
                $(e.target).submit();
            }
        });

    return StartingPage;
});
