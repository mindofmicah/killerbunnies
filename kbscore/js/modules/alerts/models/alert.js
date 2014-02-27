define(['backbone'], function (Backbone) {
    return Backbone.Model.extend({
        defaults: {
            message:['a'],
            is_closable : true,
            style:'success'
        }
    });
});
