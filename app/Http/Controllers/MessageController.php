<?php

namespace App\Http\Controllers;

use App\Http\Resources\MessageCollection;
use App\Http\Resources\MessageResource;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();

        $rid = $request->rid;

        $receiver = User::find($rid);
       
        if(!isset($receiver)){
            return response()->json(['message'=>'No User Found.'],404);
        }

        $messages  = Message::where(function ($query) use ($user, $rid) {
                $query->where('msg_to', $user->id)
                    ->Where('msg_from', $rid)
                    ->where('deleted_from_receiver', 0);
                    
            })
            ->orWhere((function ($query) use ($user, $rid) {
                $query->where('msg_to', $rid)
                    ->Where('msg_from', $user->id)
                    ->where('deleted_from_sender', 0);
            }))
            ->orderBy('created_at', 'desc')
            ->paginate(10);
         
        // return MessageResource::collection($messages);
        return new MessageCollection($messages);
    }

    public function create()
    {
        //
    }

 
    public function store(Request $request)
    {
        //
    }

    public function show(Message $message)
    {
        //
    }

    public function edit(Message $message)
    {
        //
    }

    public function update(Request $request, Message $message)
    {
        //
    }

    public function destroy(Message $message)
    {
        //
    }
}
