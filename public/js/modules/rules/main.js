define([
    'modules/rules/models/rule',
    'modules/rules/views/rule_view',
    'modules/rules/collections/rules'
], function (M, V, C){ 
//    var view = new v;
    var collection = new C;

    collection.add(new M({label:'Killed another player\'s bunny', multiplier:1}));
    collection.add(new M({label:'Killer your own bunny',multiplier:-1}));
    

    var view = new V({
            collection:collection});


    return {
        View: function () {
            return view;
        },
        Collection : function () {
        return collection;}
    }
});
