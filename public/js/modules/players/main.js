define([
    'modules/players/models/player',
    'modules/players/views/player_view',
    'modules/players/collections/players',
    'modules/players/views/scoreboard_view',
    'modules/players/views/player_form'
], function (M, V, C, S, FormView) {
    var collection = new C;
/*    
     var data = [
            {name:'mo',score:1},{name:'flett',score:4},{name:'andy',score:-3}
        ];
        collection = new C(data);
  */  
    var view = new V({
        collection:collection
    });
    return {
        Collection : function () {
            return collection;
        },
        Model: function () {
            return new M;
        },
        View: function (which_view, params) {
            if (which_view === 'scoreboard') {
                return new S({collection:collection});
            }
            if (which_view === 'form') {
                params.collection = collection;
                return new FormView(params);
            }
            which_view.collection=collection;
            return new V(which_view);
            return view;
        }
    }
});
