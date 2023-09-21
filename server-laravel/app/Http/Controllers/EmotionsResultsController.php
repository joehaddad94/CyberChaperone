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

        // $validateData = $request->validate([
        //     'emotionAverages' => 'required|array',
        //     'timestamp' => 'required|date',
        // ]);

        $data = [
            // "emotions_percentage" => '{"Neutral":45.2,"Happy":7.53,"Sad":45.5,"Angry":0.89,"Fearful":0,"Disgusted":0.14,"Surprised":0.73}',
            "emotions_percentage" => 'joe',
            "detection_time" => "2023-09-20 11:37:27",
        ];

        //     // dd($validateData);
            $emotionData = new DetectionResult();
            $emotionData->user_id = $authUser->id;
        //     // $emotionData->emotions_percentage = json_encode($validateData['emotionAverages']);
        //     // $emotionData->detection_time = date('Y-m-d H:i:s', strtotime($validateData['timestamp']));

            $emotionData->emotions_percentage = $data["emotions_percentage"];
            $emotionData->detection_time = $data["detection_time"];
            // dd($emotionData);

        $emotionData->save();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to save emotion data.'], 500);
        }

        return response()->json(['message' => 'Emotion data saved successfully']);
    }
}
