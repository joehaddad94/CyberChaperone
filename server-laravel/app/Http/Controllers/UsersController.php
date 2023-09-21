<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
    public function createGeneralUser (Request $request) {

        $authUser = Auth::user();

            if (!$authUser) {
                return response()->json(['error' => 'User is not authenticated.'], 401);
            }

        $validator = Validator::make($request->all(), [
            'username' => 'required|string|max:255|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            ]);

            if ($validator->fails()) {
                if ($validator->errors()->has('username')) {
                    return response()->json([
                        'message' => 'Username is already taken.',
                    ], 400);
                }
                return response()->json($validator->errors(), 400);
            }

            $user = User::create([
                'type_id' => 2,
                'guardian_id' => Auth::id(),
                'username' => $request->username,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            return response()->json([
                'message' => 'User created successfully',
                'user' => $user,
            ]);
    }

    public function fetchAllUsers (Request $request) {

        $authUser = Auth::user();

            if (!$authUser) {
                return response()->json(['error' => 'User is not authenticated.'], 401);
            }

        $users = User::where('gaurdian_id', $authUser->id)-get();

        return response()->json(['users' => $users]);
    }
}
