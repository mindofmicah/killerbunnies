define([
    'modules/history/models/history',
    'modules/history/views/history_view',
    'modules/history/collections/histories'
], function (m,v,c) {
    var collection = new c;
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

            return new m;
        },
        View : function () {
            return new v;
        }
        
    };
});
