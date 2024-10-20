<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Http\Requests\StoreBrandRequest;
use App\Http\Requests\UpdateBrandRequest;
use Illuminate\Http\Request;


class BrandController extends Controller
{

    public function index()
    {
        return Brand::all(); // Returns all brands
    }

    public function store(Request $request)
    {
        $request->validate(['name' => 'required|string|unique:brands,name']);
        $brand = Brand::create($request->all());
        return response()->json($brand, 201);
    }

    public function update(Request $request, $id)
    {
        $brand = Brand::findOrFail($id);
        $request->validate(['name' => 'sometimes|string|unique:brands,name']);
        $brand->update($request->all());
        return response()->json($brand);
    }

    public function destroy($id)
    {
        $brand = Brand::findOrFail($id);
        $brand->delete();
        return response()->json(null, 204);
    }
}
