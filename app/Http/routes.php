<?php

Route::get('/', function () {
    return view('welcome');
});
Route::group(['middleware' => ['web']], function () {
    Route::get('/test', 'TestController@index');
    Route::get('/auth/login', 'Auth\WebController@getLogin');
    Route::post('/auth/login', 'Auth\WebController@postLogin');
    Route::get('/auth/register', 'Auth\WebController@getRegister');
    Route::post('/auth/register', 'Auth\WebController@postRegister');
    Route::get('logout', 'Auth\WebController@logout');
});
Route::get('/home', 'HomeController@index');
