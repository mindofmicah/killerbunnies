<?php
Route::get('/', function()
{
	return View::make('hello');
});

Route::group(['prefix'=>'/admin'], function () {
    Route::resource('rulesets', 'RulesetsController');
});