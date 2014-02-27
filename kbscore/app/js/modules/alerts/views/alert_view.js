define(['backbone'], function (Backbone) {
    return Backbone.View.extend({
        template:_.template($('#tpl_alert').html()),
        initialize: function () {
            this.render();
        },
        show: function (message, model_params) {
            model_params = model_params || {};
            model_params.message = message;
            this.model.set(model_params);
            return this.render();
        },
        render : function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
});
