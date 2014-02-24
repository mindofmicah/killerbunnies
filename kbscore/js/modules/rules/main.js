define(['modules/rules/models/rule','modules/rules/views/rule_view','modules/rules/collections/rules'], function (m,v,c){ 
//    var view = new v;
    var collection = new c;

    collection.add(new m({label:'Killed another player\'s bunny', multiplier:1}));
    collection.add(new m({label:'Killer your own bunny',multiplier:-1}));
    

    var view = new v({
            collection:collection});


    return {
        View: function () {
            return view;
        }
    }
});
