define(['backbone'], function (Backbone) {
    var PlayerForm = Backbone.View.extend({
            template:_.template($('#tpl_player_form').html()),
            initialize: function () {
                this.render();
                this.field_name = this.$el.find('input[type="text"]');
            },
            events: {
                'submit': 'addPlayer'
            } ,
            addPlayer : function (e) {
                e.preventDefault();
                if (this.field_name.val() === '') {
                    return;
                }
                this.collection.add({name:this.field_name.val()});
                this.field_name.val('');
            },
            render:function () {
               this.$el.html(this.template());
               return this;
            }
        });
    return PlayerForm;
});
