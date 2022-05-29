<?php

use App\Http\Controllers\DataController;
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

Route::prefix('data')->group(function () {
    Route::get('/', [DataController::class, 'get']);
    Route::get('/audio/{uuid}', [DataController::class, 'audio']);
    Route::post('/create', [DataController::class, 'create']);
    Route::post('/update', [DataController::class, 'update']);
    Route::post('/sync', [DataController::class, 'sync']);
    Route::post('/delete', [DataController::class, 'delete']);
    Route::get('/{id}', [DataController::class, 'item']);
});
