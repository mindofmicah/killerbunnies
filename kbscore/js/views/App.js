var App = Backbone.View.extend({
    el:$('#content'),
        show : function (path) {
                if (!window[path]) {
                            throw new Error('Could not load ' + path);
                                    }

                                            this.$el.find('.show').removeClass('show');
                                                    window[path].$el.addClass('show');
                                                        }
                                                        });

