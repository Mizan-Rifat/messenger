<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use function GuzzleHttp\Promise\all;

class UserController extends Controller
{
    public function index(){
        return UserResource::collection(User::all());
    }

    public function getCurrentUser(){
        return new UserResource(Auth::user());
    }
}
