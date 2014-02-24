define(['backbone', 'modules/rules/views/rule_form_view'], function (Backbone,FormView) {
    return Backbone.View.extend({
        el:$('#rules_view'),
        tagName:'div',
        initialize: function () {
            this.render();
        },
        render: function () {
            var $ul = this.$el.empty();
            this.collection.each(function (model) {
                var v = new FormView({model:model});
                $ul.append(v.render().$el);
            });
        }
    });
});
