define(['backbone', 'modules/history/models/history'], function (Backbone, History) {
    'use strict';

    var HistoryCollection = Backbone.Collection.extend({
        model:History,
        createNewHistory : function (p1, p2) {
            if (p1 === p2) {
                return this.createForFriendlyFire(p1, this.collection);
            }
            return this.createForEnemy(p1, p2, this.collection);
        },
        createForEnemy: function (p1, p2, c) {
            var message  = [
                    p1.get('name'),
                    ' killed one of ',
                    p2.get('name'),
                    '\'s bunnies. +1 point for ',
                    + p1.get('name')
                ].join('');

            this.add(new History({message:message}));
            p1.incrementScoreBy(1);
        },
        createForFriendlyFire : function (p1,c) {
            var message = p1.get('name') + ' killed one of their own bunnies. -1 point';

            this.add(new History({
                message: message
            }));
            p1.decrementScoreBy(1);
        }
    });
    return HistoryCollection;
});
