/*globals define*/
define(['backbone'], function (Backbone) {
    'use strict';

    var DeadBunnyPopup = Backbone.View.extend({

            el : $('#dead-bunny-popup'),
            initialize : function (params) {
                this.render();
                this.history_collection = params.history_collection;
                this.collection = params.collection;
                this.listenTo(this.collection, 'add', this.render);
                this.selects = {
                    killer : this.$el.find('#killer'),
                    owner : this.$el.find('#owner')
                };
            },
            events : {
                'submit #dead-bunny' : 'markAsKilled'
            },
            markAsKilled : function (evt) {
                evt.preventDefault();
                var killer = this.selects.killer.val();
                var owner = this.selects.owner.val();

                this.history_collection.createNewHistory(
                    this.collection._byId[killer],
                    this.collection._byId[owner]
                );
                this.$el.modal('hide');
            },
            fillSelectFromCollection : function ($select, collection) {
                $select.empty();
                collection.each(function (model) {
                    $select.append('<option value="' + model.cid + '">' + model.get('name') + '</option>');
                });
          
            },
            render : function () {
                for(var key in this.selects) {
                    this.fillSelectFromCollection(this.selects[key], this.collection);
                }
            }
        });

    return DeadBunnyPopup;
});
