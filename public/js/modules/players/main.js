define([
    'modules/players/models/player',
    'modules/players/views/player_view',
    'modules/players/collections/players',
    'modules/players/views/scoreboard_view'
], function (M, V, C, S) {
    var collection = new C;
    
     var data = [
            {name:'mo',score:1},{name:'flett',score:4},{name:'andy',score:-3}
        ];
        collection = new C(data);
    
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
        View: function (which_view) {
            if (which_view === 'scoreboard') {
                return new S({collection:collection});
            }
            return view;
        }
    }
});
