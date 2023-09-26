<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use OpenAI\Laravel\Facades\OpenAI;
use Illuminate\Support\Facades\Auth;

class OpenAIController extends Controller {

    public function generateText()
    {

        $authUser = Auth::user();

            if (!$authUser) {
                return response()->json(['error' => 'User is not authenticated.'], 401);
            }

        $result = OpenAI::completions()->create([
            'model' => 'text-davinci-003',
            'prompt' => 'PHP is',
        ]);

        $generatedText = $result['choices'][0]['text'];

        return response()->json(['generatedText' => $generatedText]);
        }
}
