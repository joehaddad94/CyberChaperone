<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\EmotionsResultsController;

Route::group(["middleware" => "auth:api"], function () {
    //General user Apis
    Route::group(["middleware" => "auth.general_user"], function () {
        Route::get("logout", [AuthController::class, "logout"]);
        Route::post("save_emotion", [EmotionsResultsController::class, "saveEmotionsData"]);
    });

    Route::post("refresh", [AuthController::class, "refresh"]);
});

Route::post("login", [AuthController::class, "login"]);
Route::post("app_login", [AuthController::class, "electronAppLogin"]);
Route::post("register", [AuthController::class, "register"]);
