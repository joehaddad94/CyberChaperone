<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;

Route::group(["middleware" => "auth:api"], function () {
    Route::post("logout", [AuthController::class, "logout"]);
    Route::post("refresh", [AuthController::class, "refresh"]);
});

Route::post("login", [AuthController::class, "login"]);
Route::post("register", [AuthController::class, "register"]);
