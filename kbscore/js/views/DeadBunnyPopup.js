define(['backbone'], function (Backbone) {


var DeadBunnyPopup = Backbone.View.extend({

    el : $('#dead-bunny-popup'), 
    initialize : function (params) {
        this.render();
        this.history_collection = params.history_collection;
        this.collection = params.collection;
        this.listenTo(this.collection, 'add', this.render);
        this.selects = {
            killer : this.$el.find('#killer'),
            owner : this.$el.find('#owner')
        }
        


    },
    events : {
        'submit #dead-bunny' : 'markAsKilled'
    },
    markAsKilled : function (a,b,c,d) {
        a.preventDefault();
        var killer = this.selects.killer.val();
        var owner = this.selects.owner.val();


        this.history_collection.createNewHistory(
            this.collection._byId[killer],
            this.collection._byId[owner]
        );
        this.$el.modal('hide');
    },
    render : function () {
        for(var key in this.selects) {
            var $select = this.selects[key].empty();

            this.collection.each(function (model,a,b,c) {
//            console.log(model.cid);
                $select.append('<option value="' + model.cid + '">' + model.get('name') + '</option>');
            });
        } 
    }
});


return DeadBunnyPopup;
});
