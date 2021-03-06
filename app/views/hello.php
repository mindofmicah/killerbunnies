<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <title>Killer Bunnies Alternate Scoring</title>



<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">
<link rel="stylesheet" href="/css/main.css" />
<style type="text/css">

#rules-editor{
    position:relative;
}
#rules-editor .alert {

position:absolute;
top:0;
margin:10px auto;
width:80%;
height:80%;
z-index:30;
left:0;
right:0;

}
</style>
     <meta name="viewport" content="width=device-width, initial-scale=1">
   <script type="text/javascript" data-main="/js/start" src="/js/vendor/requirejs/require.js"></script>
</head>
<body>
<div class="container">
    <div id="landing-page">
            <div class="panel panel-default">
                <div class="panel-heading"><h2 class="text-center">Who is playing?</h2></div>
                <div class="panel-body">
                    <form action="#" id="add-player-form">
                        <div class="form-group">
                            <label class="control-label" for="">Player Name</label>
                            <input class="form-control" type="text" value="" placeholder="Little Flett"/>
                        </div>
                        <div class="text-right">
                            <input class="btn btn-primary" type="submit" value="Add Player"/>
                        </div>         
                    </form>
                </div>
                <ul class="list-group" id="player-list-group">
                </ul>
            </div>
            <div class="text-center">
                <form id="start_game" method="post" action="/games/start">
                <input type="hidden" name="players" id="Aaaaaa" />
                <button type="submit" class="btn btn-lg btn-primary" >Start Game</button>
                </form>
            </div>

    
    
    </div>
    <div id="content" style="margin-top:20px;">
        <div id="rules_view" style="display:none;">
            <div id="rules-editor" class="row"></div> 
            <button class="btn btn-default btn-block go-home">Home</button>
        </div>
        <div id="player-management" style="display:none;">
            <div class="panel panel-default">
                <div class="panel-heading"><h2 class="text-center">Who is playing?</h2></div>
                <div class="panel-body">
                    <form action="#" id="add-player-form">
                        <div class="form-group">
                            <label class="control-label" for="">Player Name</label>
                            <input class="form-control" type="text" value="" placeholder="Little Flett"/>
                        </div>
                        <div class="text-right">
                            <input class="btn btn-primary" type="submit" value="Add Player"/>
                        </div>         
                    </form>
                </div>
                <ul class="list-group" id="player-list-group">
                </ul>
            </div>
            <div class="text-center">
                <a class="btn btn-lg btn-primary" href="#">Start Game</a>
            </div>
        </div>
        <div id="game-view" style="display:none;">
            <div class="panel panel-default">
                    <div class="panel-heading">
                            <h2 class="text-center">Current Standings</h2>
                    </div>
                    <div class="panel-body">
                        <p>Points are given for each bunny you kill, unless it is one of your own; if you kill your own bunny, you lose a point</p>
                        <ul id="rule-list"></ul>
                        <button class="btn-default btn go-to-rules">Edit Rules</button>
                    </div>
                    <div id="standings-list-group" class="list-group" style="margin-top:20px;">
                    </div>
            </div>


                          <div class="panel-body">
                    <a class="btn btn-lg btn-block btn-danger" data-toggle="modal" data-target="#dead-bunny-popup" id="bunny-died" href="#">A Bunny Died!</a>
                    </div>
                    <div id="history" class="hide">
                    <h4 >History</h4>
            <ul class="list-unstyled">
            </ul>
</div>

    </div>
</div>
</div>



        <div class="modal fade" id="dead-bunny-popup">
                <div class="modal-dialog">
                        <div class="modal-content">
                        <form action="#" id="dead-bunny">
                                <div class="modal-header">
                                    <button class="close" data-dismiss="modal" type="button">&times;</button>
                                    <h4>Somebody killed a bunny!</h4>
                                </div>
                                <div class="modal-body">
                                        <div class="form-group">
                                                <label class="control-label" for=""></label>
            <select class="form-control" id="killer" name=""><option value=""></option></select>                                        </div>
                                        <p class="text-center">killed a bunny that belonged to</p>
                                        <div class="form-group">
                                                <label class="control-label" for=""></label>
                                                <select class="form-control" id="owner" name=""><option value=""></option></select>
                                        </div>
                                </div>
                                <div class="modal-footer">
                                        <button class="btn btn-default" data-dismiss="modal">Close</button>
                                        <button class="btn btn-primary" type="submit">Mark as Killed</button>
                                </div>
                                </form>
                        </div>

                </div>
        </div>
        <script id="tpl_alert" type="text/template">
                <div class="alert alert-<%=style%>">
                    <%if(is_closable) {%>
                    <button class="close" data-dismiss="alert">&times;</button>
                    <%}%>
                    <%if(message.length == 1){%>
                        <p><%=message[0]%></p>
                    <%}else{%>
                        <h4><%=message[0]%></h4>
                        <% for(var i =1; i < message.length; i++) {%>
                        <p><%=message[i]%></p>
                        <% }%>
                    <%}%>

                </div>
        </script>

<script type="text/template" id="tpl_player_form">
                    <form action="#" id="add-player-form">
                        <div class="form-group">
                            <label class="control-label" for="">Player Name</label>
                            <input class="form-control" type="text" value="" placeholder="Little Flett"/>
                        </div>
                        <div class="text-right">
                            <input class="btn btn-primary" type="submit" value="Add Player"/>
                        </div>         
                    </form>
</script>

<script type="text/template" id="tpl_rule_form">

<div class="well">
<form>
    <div class="alert-box"></div>
    <p class="text-center" style="margin:0px 0 10px;"><%=label%></p>
    <div class="input-group" style="margin-bottom:10px;">
        <div class="input-group-addon">
            Points
        </div>
        <input class="text-center form-control" type="text" value="<%=multiplier%>" />
        <div class="input-group-btn">
            <button type="button" class="btn btn-default increase">&plus;</button>
            <button type="button" class="btn btn-default decrease">&minus;</button>
        </div>
    </div>

    
    <button type="submit" class="btn btn-block btn-primary">Save!</button>
    </form>
    </div>

</script>


</body>
</html>

