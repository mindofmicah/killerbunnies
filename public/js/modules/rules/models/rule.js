define(['backbone'], function (Backbone) {
    return Backbone.Model.extend({
        defaults:{
            label      : '',
            multiplier : 1
        }
    });
});
