var App = Backbone.View.extend({
    el:$('#content'),
    show : function (path) {
        if (!window[path]) {
            throw new Error('Could not load ' + path);
        }

        this.$el.find('.show').removeClass('show');
        window[path].$el.addClass('show');
    }
});
var app = new App;


var Player = Backbone.Model.extend({
        defaults : {
            name:'',
            score:0
        },
        incrementScoreBy : function(num) {
            this.set('score', this.get('score') + 1);
        },
        decrementScoreBy: function(num) {
            this.set('score', this.get('score') -  1);
        },
        killedABunnyBelongingTo : function (player) {
            if (this === player) {
                
            } else {

            }

        }
    }),
    PlayerCollection = Backbone.Collection.extend({
        model:Player,
        getRankedModels : function () {
//        console.log(this.models);

            var m = this.models.sort(function (a,b) {
                return a.get('score') < b.get('score');
            });

            var current_rank = 0;
            var current_score;;
            var ranks = [];
            for (var i = 0; i < m.length; i++) {

                if (m[i].get('score') == current_score) {
                    ranks.push({
                        name:m[i].get('name'),
                        rank:current_rank
                    });                
                } else {
                    current_rank = i+1;
                    ranks.push({
                        name:m[i].get('name'),
                        rank:current_rank
                    });
                    current_score = m[i].get('score');
                }

            }

            return ranks;
        }
    }),
    PlayerManagementView = Backbone.View.extend({
    el:$('#player-management'), 
    events: {
        'submit form' : 'addPlayer',
        'focus input' : 'removeErrors'

    },
    initialize : function () {
        this.input = $('input[type="text"]');

        this.listenTo(this.collection, 'add', this.render);
        this.panel = $('#player-list-group');
    },
    render: function () {
        var panel = this.panel;
    
        panel.empty();
        this.collection.each(function(a,b,c) {
        panel.append('<li class="list-group-item">'+a.get('name')+'</li>');
        });
    },

    addPlayer : function () {
        if (this.input.val() != '') {
            this.collection.add(new Player({name:this.input.val()}));
            this.input.val('').trigger('focus');
        } else {
            this.input.closest('.form-group').addClass('has-error');
        }
    },
    removeErrors : function () {
        this.input.closest('.form-group').removeClass('has-error');
    }
});
var GameView = Backbone.View.extend({
    el : $('#game-view'),
    initialize: function () {
        this.standings = this.$el.find('#standings-list-group');
        this.listenTo(this.collection, 'change', this.render);
        this.render();
    },
    events : {
    },
    render: function () {
        var standings = this.standings.empty();
        var ranked_models = this.collection.getRankedModels();
        for (var i = 0; i < ranked_models.length;i++) {
            
            standings.append('<div class="list-group-item '+(ranked_models[i].rank == 1 ?' list-group-item-success':'')+'"><span class="badge badge-success'+(i==1?'':'')+'">'+formatRank(ranked_models[i].rank)+'</span>'+ranked_models[i].name + '</div>');           
        }

            
  
        return this;
    }
});
var History = Backbone.Model.extend({defaults:{message:''}});
var HistoryCollection = Backbone.Collection.extend({
    model:History,
    createNewHistory : function (p1, p2) {
        if (p1 === p2) {
            return this.createForFriendlyFire(p1, this.collection);
        }
        return this.createForEnemy(p1, p2, this.collection);
    },
    createForEnemy: function (p1, p2, c) {
        this.add(new History({message:p1.get('name')+ ' killed one of ' + p2.get('name')+'\'s bunnies. +1 point for ' + p1.get('name')}));
        p1.incrementScoreBy(1);
    },
    createForFriendlyFire : function (p1,c) {
        this.add(new History({
            message:p1.get('name') + ' killed one of their own bunnies. -1 point'
        }));
        p1.decrementScoreBy(1);
    }
});
var history_collection = new HistoryCollection;


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

function formatRank(i) {
    if (i == 1) {
        return i + 'st Place';
    }
    if (i == 2) {
        return i + 'nd Place';
    }
    if (i == 3) {
        return i + 'rd Place';
    }
    return i +'th Place';
}

$('a').click(function (e) {
    e.preventDefault();
    r.navigate('game',{trigger:true});
});
var players = new PlayerCollection;

app = new App;

pmv = new PlayerManagementView({
    collection: players
});
game = new GameView({
    collection: players
});
popup = new DeadBunnyPopup({
    collection:players,
    history_collection:history_collection
});
R = Backbone.Router.extend({
    routes: {
        '': function () {
            app.show('pmv');
        },
        'game':function () {
            app.show('game');
        }
    }
});

var HistoryView = Backbone.View.extend({
    el: $('#history'),
    initialize: function () {
        this.listenTo(this.collection, 'add', this.render);
    },

    render : function () {
        if (this.collection.models.length == 0) {
            this.$el.addClass('hide');
            return;
        }

//        this.$el.empty();
        var $el = this.$el.find('ul').empty();
        this.collection.each(function (model) {
            $el.append('<li>'+model.get('message')+'</li>');
        });
        this.$el.removeClass('hide');
    }
});
history_view = new HistoryView({
    collection:history_collection
});

r =new R;
Backbone.history.start();
