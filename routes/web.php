<?php

use Illuminate\Support\Facades\Route;



Route::get('/dashboard/{any?}', function () {
    return view('dashboard.layout.dashApp');
})->where('any', '.*');

Route::get('/{any?}', function () {
    return view('dashboard.auth.layout');
})->where('any', '.*');

require __DIR__.'/auth.php';
