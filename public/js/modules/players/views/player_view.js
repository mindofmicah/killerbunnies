define(['backbone','modules/players/models/player'], function(Backbone, Player){
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

    addPlayer : function (e) {
        e.preventDefault();
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
return PlayerManagementView;
});
