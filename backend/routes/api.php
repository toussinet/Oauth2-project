<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class, 'authentificate']);
Route::post('signup', [AuthController::class, 'signup']);
Route::get('dashboard', [AuthController::class, 'dashboard'])->middleware('auth:sanctum');

Route::get('private/informations', [AuthController::class, 'privateInformations'])->middleware('auth:sanctum');


