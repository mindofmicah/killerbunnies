define(['backbone'], function (Backbone) {
    return Backbone.View.extend({
        tagName: 'div',
        template : _.template($('#tpl_rule_form').html()),
        initialize: function () {},
        render : function () {
        this.$el.append(this.template(this.model.toJSON()));
        return this;
        }
    });
});
