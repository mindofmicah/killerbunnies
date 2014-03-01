define(
    ['backbone'], 
    function (Backbone) {
        return HistoryView = Backbone.View.extend({
            el: $('#history'),
            initialize: function () {
                this.listenTo(this.collection, 'add', this.render);
            },

            render : function () {
                if (this.collection.models.length == 0) {
                    this.$el.addClass('hide');
                    return;
                }

                var $el = this.$el.find('ul').empty();
                this.collection.each(function (model) {
                    $el.append('<li>'+model.get('message')+'</li>');
                });
                this.$el.removeClass('hide');
            }
        });
    }
);
