define(['modules/players/models/player','modules/players/views/player_view','modules/players/collections/players'], function (m,v,c) {
    var collection = new c;
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
        View: function () {
            return view;
        }
    }
});
