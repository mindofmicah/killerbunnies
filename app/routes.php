<?php
Route::get('/', function()
{
	return View::make('hello');
});

Route::controller('games', 'GamesController');
Route::group(['prefix'=>'/admin'], function () {
    Route::resource('rulesets', 'RulesetsController');
});