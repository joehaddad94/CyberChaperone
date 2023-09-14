<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class emotionsResultsController extends Controller {
    public function store(Request $request) {

        $token = $request->header('Authorization');

        $request->validate([
            'emotions' => 'required|array',
            'timestamp' => 'required|date',
        ]);

        $emotionData = new EmotionData();
        $emotionData->emotions = json_encode($request->input('emotions'));
        $emotionData->timestamp = $request->input('timestamp');
        $emotionData->user_token = $token;

        return response()->json(['message' => 'Emotion data saved successfully']);
    }
}
