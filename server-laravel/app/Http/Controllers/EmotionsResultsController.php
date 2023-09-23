<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DetectionResult;
use Illuminate\Support\Facades\Auth;

class emotionsResultsController extends Controller {
    public function saveEmotions(Request $request) {
        try {

            // $authUser = Auth::user();

            // if (!$authUser) {
            //     return response()->json(['error' => 'User is not authenticated.'], 401);
            // }

            $validateData = $request->validate([
                'emotionAverages' => 'required|array',
                'timestamp' => 'required|date',
            ]);

            $emotionData = new DetectionResult();
            // $emotionData->user_id = Auth::id();
            $emotionData->user_id = 1 ;
            $emotionData->emotions_percentage = json_encode($validateData['emotionAverages']);
            $emotionData->detection_time = date('Y-m-d H:i:s', strtotime($validateData['timestamp']));
            // $emotionData->detection_time = $validateData['timestamp'];

            $emotionData->save();
        } catch (\Exception $e) {
            return response()->json(['error' => $e], 500);
        }

        return response()->json(['message' => 'Emotion data saved successfully']);
    }

    public function fetchDailyDataAnalysis(Request $request) {

    try {
        $authUser = Auth::user();

        if (!$authUser) {
            return response()->json(['error' => 'User is not authenticated.'], 401);
        }

        $validateData = $request->validate([
            'userId' => 'required|numeric',
            'timestamp' => 'required|date',
        ]);

        $Date = $validateData['timestamp'];

        $adjustedDate = date('Y-m-d', strtotime($Date . ' +1 day'));

        $userId = $validateData['userId'];
        $detectionResults = DetectionResult::where('user_id', $userId)
            ->whereDate('detection_time', '=', $adjustedDate)
            ->get();

        $results = [];
        $totalEmotions = count($detectionResults);

        foreach ($detectionResults as $result) {
            $detectionTime = $result->detection_time;
            $emotionsPercentage = json_decode($result->emotions_percentage, true);

            $results[] = [
                'detection time' => $detectionTime,
                'emotionPercentage' => $emotionsPercentage,
            ];
        }

        $averageEmotions = [];

        if ($totalEmotions > 0) {
            $sumEmotions = array_fill_keys(array_keys($results[0]['emotionPercentage']), 0);

            foreach ($results as $result) {
                foreach ($result['emotionPercentage'] as $emotion => $percentage) {
                    $sumEmotions[$emotion] += $percentage;
                }
            }

            foreach ($sumEmotions as $emotion => $sum) {
                $averageEmotions[$emotion] = round($sum / $totalEmotions, 2);
            }
        }

        $responseData = [
            'message' => 'Data retrieved successfully',
            'averageEmotions' => $averageEmotions,
            // 'results' => $results,
        ];

        return response()->json($responseData, 200);
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
}

}
