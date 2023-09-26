<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ProfilesController extends Controller
{
    public function editProfile(Request $request) {
        $authUser = Auth::user();

        if (!$authUser) {
            return response()->json(['error' => 'User is not authenticated.'], 401);
        }

        $firstName = $request->input('first_name');
        $lastName = $request->input('last_name');

        if ($firstName === $authUser->profile->first_name && $lastName === $authUser->profile->last_name) {
            return response()->json(['message' => 'First name and last name match. No changes made.']);
        }

        $authUser->profile->update([
            'user_id' => Auth::id(),
            'first_name' => $firstName,
            'last_name' => $lastName,
        ]);

        return response()->json(['message' => 'Profile updated successfully']);
    }
}
