<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::group(['middleware'=>'auth:sanctum'],function(){
    Route::get('/currentuser', function (Request $request) {
        return $request->user();
    });

    Route::get('/messages',[\App\Http\Controllers\MessageController::class, 'index'])->name('messages.index');

});

Route::get('/users',[\App\Http\Controllers\UserController::class, 'index'])->name('users.index');


