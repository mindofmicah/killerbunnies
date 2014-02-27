define(['backbone', 'modules/alerts/main'], function (Backbone, Alert) {
    return Backbone.View.extend({
        className:'col-xs-3',
        tagName:'div',
        template : _.template($('#tpl_rule_form').html()),
        initialize: function (params) {
            this.render();
            this.$input = this.$el.find('[type=text]').eq(0);
            this.listenTo(this.model, 'change', this.render);
        },
        render : function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$input = this.$el.find('[type=text]').eq(0);
            
            return this;
        },
        events : {
            'click .increase' : 'increaseCounter',
            'click .decrease' : 'decreaseCounter',
            'submit' : 'updateRule'
        }, 
        increaseCounter : function (e) {
            var cur_val = parseInt(this.$input.val(),10);
            this.$input.val(cur_val + 1);
        },
        decreaseCounter: function () {
            var cur_val = parseInt(this.$input.val(),10);
            this.$input.val(cur_val - 1);
        },
        updateRule: function (e) {
            e.preventDefault();

            this.model.set('multiplier', parseInt(this.$input.val(), 10));
            this.$el.prepend(
                Alert.create({})
                    .show([
                        'Success',
                        'You have modified a rule.',
                        'Change will be reflected throughout the app'
                    ], {
                        style:'success'
                    }
                ).$el
            );
        }
    });
});
