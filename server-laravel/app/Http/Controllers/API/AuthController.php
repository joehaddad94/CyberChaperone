<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

    public function login(Request $request) {

        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

            $credentials = $request->only('username', 'password');

            if (!Auth::attempt($credentials)) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Wrong Username or Password',
                ], 401);
            }

            $user = Auth::user();
            $token = Auth::attempt($credentials);

        if (!$token) {
            return response()->json([
                'message' => 'Unauthorized',
            ], 401);
        }

        return response()->json([
            'user' => $user,
            'authorization' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function electronAppLogin(Request $request)
{
    $request->validate([
        'username' => 'required|string',
        'password' => 'required|string',
    ]);

    $credentials = $request->only('username', 'password');

    if (!Auth::attempt($credentials)) {
        return response()->json([
            'status' => 'error',
            'message' => 'Wrong Username or Password',
        ], 401);
    }

    $user = Auth::user();


    if ($user->type_id !== 3) {
        Auth::logout();
        return response()->json([
            'status' => 'Error Unauthorized User Type',
            'message' => 'Unauthorized Access',
        ], 401);
    }

    $token = Auth::attempt($credentials);

    if (!$token) {
        return response()->json([
            'message' => 'Unauthorized',
        ], 401);
    }

    return response()->json([
        'user' => $user,
        'authorization' => [
            'token' => $token,
            'type' => 'bearer',
        ]
    ]);
}

    public function register(Request $request) {

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
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = Auth::login($user);

        return response()->json([
            'message' => 'User created successfully',
            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }
}
