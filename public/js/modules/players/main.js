define([
    'modules/players/models/player',
    'modules/players/views/player_view',
    'modules/players/collections/players',
    'modules/players/views/scoreboard_view'
], function (m,v,c, s) {
    var collection = new c;
    
     var data = [
            {name:'mo',score:1},{name:'flett',score:4},{name:'andy',score:-3}
        ];
        collection = new c(data);
    
    var view = new v({
        collection:collection
    });
    return {
        Collection : function () {
            return collection;
        },
        Model: function () {
            return new m;
        },
        View: function (which_view) {
            if (which_view === 'scoreboard') {
                return new s({collection:collection});
            }
            return view;
        }
    }
});
