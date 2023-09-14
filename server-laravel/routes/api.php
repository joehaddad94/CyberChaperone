<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;

Route::group(["middleware" => "auth:api"], function () {
    //General user Apis
    Route::group(["middleware" => "auth.general_user"], function () {
        Route::post("logout", [AuthController::class, "logout"]);
    });

    Route::post("refresh", [AuthController::class, "refresh"]);
});

Route::post("login", [AuthController::class, "login"]);
Route::post("app_login", [AuthController::class, "electronAppLogin"]);
Route::post("register", [AuthController::class, "register"]);
