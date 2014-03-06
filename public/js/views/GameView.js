define(['backbone'], function(Backbone){

var GameView = Backbone.View.extend({
    el : $('#game-view'),
    initialize: function (params) {
        this.standings = this.$el.find('#standings-list-group');
        this.rules = params.rules;
        this.collection = params.collection;
        this.listenTo(this.rules,'change', this.render);
        this.listenTo(this.collection, 'change', this.render);
        this.render();
    },
    events : {
    },
    formatRank: function (i) {
        if (i === 1) {
            return i + 'st Place';
        }
        if (i === 2) {
            return i + 'nd Place';
        }
        if (i === 3) {
            return i + 'rd Place';
        }
        return i +'th Place';
    },
    showSuccess : function() {

    },
    render: function () {
        var standings = this.standings.empty();
        var ranked_models = this.collection.getRankedModels();

var ul =         this.$el.find('#rule-list').empty();

    this.rules.each(function (a,b,c,d) {
        ul.append('<li>'+a.get('label')+' '+a.get('multiplier')+'</li>');    

    });

        for (var i = 0; i < ranked_models.length;i++) {
            
            standings.append('<div class="list-group-item '+(ranked_models[i].rank == 1 ?' list-group-item-success':'')+'"><span class="badge badge-success'+(i===1?'':'')+'">'+this.formatRank(ranked_models[i].rank)+'</span>'+ranked_models[i].name + '</div>');           
        }

            
  
        return this;
    }
});
return GameView;
});

