<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DetectionResult;
use Illuminate\Support\Facades\Auth;

class emotionsResultsController extends Controller {
    public function saveEmotions(Request $request) {
        try {

            $authUser = Auth::user();

            if (!$authUser) {
                return response()->json(['error' => 'User is not authenticated.'], 401);
            }

            $validateData = $request->validate([
                'emotionAverages' => 'required|array',
                'timestamp' => 'required|date',
            ]);

            $emotionData = new DetectionResult();
            $emotionData->user_id = Auth::id();
            $emotionData->emotions_percentage = json_encode($validateData['emotionAverages']);
            $emotionData->detection_time = date('Y-m-d H:i:s', strtotime($validateData['timestamp']));
            // $emotionData->detection_time = $validateData['timestamp'];

            $emotionData->save();
        } catch (\Exception $e) {
            return response()->json(['error' => $e], 500);
        }

        return response()->json(['message' => 'Emotion data saved successfully']);
    }

}
