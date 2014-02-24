define(['backbone', 'modules/rules/models/rule'], function (Backbone, Rule) {
    return Backbone.Collection.extend({
        model:Rule
    });
});
