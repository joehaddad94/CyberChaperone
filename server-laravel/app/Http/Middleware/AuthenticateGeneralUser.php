<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

use Illuminate\Support\Facades\Auth;

class AuthenticateGeneralUser
{
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();

        if ($user->type_id == 2) {
            return $next($request);
        }

        return redirect()->route("unauthorized");
    }
}
