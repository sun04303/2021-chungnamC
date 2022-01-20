<?php
    use App\Route;

    Route::get('/', 'ViewController@main');
    Route::get('/basket', 'ViewController@basket');
    Route::get('/view', 'ViewController@view_view');
    Route::get('/register', 'ViewController@register');
    Route::get('/storelist', 'ViewController@storelist');

    Route::post('/id_chk', 'ActionController@id_chk');
    Route::post('/register_ok', 'ActionController@register_ok');

    Route::start();