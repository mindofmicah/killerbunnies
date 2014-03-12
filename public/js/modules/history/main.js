define([
    'modules/history/models/history',
    'modules/history/views/history_view',
    'modules/history/collections/histories'
], function (M, V, C) {
    var collection = new C;
    return {
        initialize: function () {
            return 'loaded history stuff';
        }
        ,
        Collection : function () {
              return collection; 
        }
        ,
        Model : function () {

            return new M;
        },
        View : function () {
            return new V;
        }
        
    };
});
