<?php

namespace App\Http\Controllers;

use App\Models\Ad;
use App\Http\Requests\StoreAdsRequest;
use App\Http\Requests\UpdateAdsRequest;
use Illuminate\Http\Request;


class AdController extends Controller
{
    public function index()
    {
        return Ad::all(); // Returns all ads
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'link' => 'required|url',
            'image_url' => 'required|string',
        ]);

        $ad = Ad::create($request->all());

        return response()->json($ad, 201);
    }

    public function update(Request $request, $id)
    {
        $ad = Ad::findOrFail($id);

        $request->validate([
            'title' => 'sometimes|string|max:255',
            'link' => 'sometimes|url',
            'image_url' => 'sometimes|string',
        ]);

        $ad->update($request->all());

        return response()->json($ad);
    }

    public function destroy($id)
    {
        $ad = Ad::findOrFail($id);
        $ad->delete();

        return response()->json(null, 204);
    }
}
