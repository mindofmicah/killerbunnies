define([
    'modules/history/models/history',
    'modules/history/views/history_view',
    'modules/history/collections/histories'
], function (M, V, C) {
    var history_collection = new C;
    return {
        Collection : function () {
            return history_collection; 
        },
        View : function () {
            return new V; 
        },
        Model: function () {
            return new M;
        }
    };
});
