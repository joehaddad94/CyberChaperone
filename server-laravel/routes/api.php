<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\EmotionsResultsController;

Route::group(["middleware" => "auth:api"], function () {

    // Guardian User Apis
    Route::group(["middleware" => "auth.general_user"], function () {

    });

    //General user Apis
    Route::group(["middleware" => "auth.general_user"], function () {
        Route::get("logout", [AuthController::class, "logout"]);
        Route::post("save_emotions", [EmotionsResultsController::class, "saveEmotions"]);
    });


});

Route::post("login", [AuthController::class, "login"]);
Route::post("app_login", [AuthController::class, "electronAppLogin"]);
Route::post("register", [AuthController::class, "register"]);
