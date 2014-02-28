

define(['backbone'], function (Backbone) {


    var m = Backbone.Model.extend({
        defaults : {
            message:''
        }
    });
    return m;
});
