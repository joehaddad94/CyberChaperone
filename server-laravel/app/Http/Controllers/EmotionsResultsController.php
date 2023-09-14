<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DetectionResult;

class emotionsResultsController extends Controller {
    public function store(Request $request) {
        try {

        $authUser = Auth::user();

        if (!$authUser) {
            return response()->json(['error' => 'User is not authenticated.'], 401);
        }

        $request->validate([
            'emotions' => 'required|array',
            'timestamp' => 'required|date',
        ]);

        $emotionData = new EmotionData();
        $emotionData->user_id = $authUser->id;
        $emotionData->emotions_percentage = $request->input('emotions');
        $emotionData->detection_time = $request->input('timestamp');

            $emotionData->save();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to save emotion data.'], 500);
        }

        return response()->json(['message' => 'Emotion data saved successfully']);
    }
}
