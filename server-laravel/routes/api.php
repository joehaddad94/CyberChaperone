<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\EmotionsResultsController;
use App\Http\Controllers\UsersController;

Route::group(["middleware" => "auth:api"], function () {

    // Guardian User Apis
    Route::group(["middleware" => "auth.guardian_user"], function () {
        Route::post("create_general_user", [UsersController::class, "createGeneralUser"]);
        Route::get("fetch_all_users", [UsersController::class, "fetchAllUsers"]);
        Route::delete("delete_user/{id}", [UsersController::class, "deleteUser"]);
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
