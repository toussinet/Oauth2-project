<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

   

    public function  signup(Request $request)
    {
        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        return response()->json($user, 201);


       
    }

    public function authentificate(Request $request): JsonResponse
    {

        $user = User::where('email', $request->email)->first();
        if (Hash::check($request->password, $user->password)) {
            return response()->json([
                'token' => $user->createToken(time())->plainTextToken
            ]);
        }
    }

    public function dashboard(): JsonResponse
    {
        return response()->json([
            "Success" => 'Bienvenue!'
        ]);
    }

    public function privateInformations(): JsonResponse
    {
        return response()->json([
            "information" => 'Hello world!'
        ]);
    }

    
}
