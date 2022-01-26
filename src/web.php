<?php
    use App\Route;

    Route::get('/', 'ViewController@main');
    Route::get('/order', 'ViewController@order');
    Route::get('/refer', 'ViewController@refer');
    Route::get('/basket', 'ViewController@basket');
    Route::get('/view', 'ViewController@view_view');
    Route::get('/register', 'ViewController@register');
    Route::get('/storelist', 'ViewController@storelist');

    Route::get('/logout', 'ActionController@logout');
    Route::post('/search', 'ActionController@search');
    Route::post('/id_chk', 'ActionController@id_chk');
    Route::post('/order_ok', 'ActionController@order_ok');
    Route::post('/updatecnt', 'ActionController@updatecnt');
    Route::post('/register_ok', 'ActionController@register_ok');
    Route::post('/member_login', 'ActionController@member_login');
    Route::post('/nomember_login', 'ActionController@nomember_login');

    Route::start();