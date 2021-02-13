<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

use function GuzzleHttp\Promise\all;

class UserController extends Controller
{
    public function index(){
        return UserResource::collection(User::all());
    }
}