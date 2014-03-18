define(['backbone', 'modules/history/main'], function (Backbone, History) {
    'use strict';
    describe('HistoryModule', function () {
        it('should exist', function () {
            expect(History).toBeDefined();
        });
        describe('Collection Method', function () {
            it('should exist', function () {
                expect(History.Collection).toBeDefined();    
            });
            it('should return a collection', function () {
                expect(History.Collection() instanceof Backbone.Collection).toEqual(true);
            });
            it('should return the same collection by default', function () {
                var collection_1 = History.Collection(),
                    collection_2 = History.Collection();

                expect(collection_1).toEqual(collection_2);
            });
            it('should return the same collection by default even if I change a variable', function () {
                var collection_1 = History.Collection();
                collection_1.add({});

                expect(History.Collection()).toEqual(collection_1);
            });
        });
        describe('Model Method', function () {
            it('should exist', function () {
                expect(History.Model).toBeDefined();    
            });
            it('should return a Backbone Model', function () {
                expect(History.Model() instanceof Backbone.Model).toEqual(true);
            });
            it('should return different models each time', function () {
                var model_1 = History.Model(),
                    model_2 = History.Model();

                expect(model_1).not.toEqual(model_2);
            });
        });
        describe('View Method', function () {
            it('should exist', function () {
                expect(History.View).toBeDefined();    
            });

            it('should return a Backbone View', function () {
                expect(History.View() instanceof Backbone.View).toBe(true);
            });
        });
    });    
});
