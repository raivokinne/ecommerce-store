<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Product/Index', [
            'products' => Product::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Product/Create', [
            'categories' => Category::all(),
        ]);
    }

    public function edit(Product $product)
    {
        $product->load('category');
        return Inertia::render('Product/Edit', [
            'product' => $product,
        ]);
    }

    public function show(Product $product)
    {
        $product->load('category');
        return Inertia::render('Product/Show', [
            'product' => $product,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|min:3|max:255',
            'description' => 'required|min:3',
            'price' => 'required|decimal:2,2',
            'image' => 'required|image:jpeg,png,jpg,gif,svg,webp|max:2048',
            'category_id' => 'required',
            'stock' => 'required',
            'brand' => 'required',
        ]);

        $product = new Product();

        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        if ($request->hasFile('image')) {
            $file = Storage::putFileAs('public/products', $request->file('image'), $request->file('image')->getClientOriginalName());
            $product->image = Storage::url($file);
        }
        $product->category_id = $request->category_id;
        $product->stock = $request->stock;
        $product->status = 'active';
        $product->brand = $request->brand;

        $product->save();

        return redirect()->route('shop');
    }

    public function update(Request $request, Product $product)
    {

        $request->validate([
            'name' => 'required|min:3|max:255',
            'description' => 'required|min:3',
            'price' => 'required|decimal:2,2',
            'image' => 'required|image:jpeg,png,jpg,gif,svg,webp|max:2048',
            'category_id' => 'required',
            'stock' => 'required',
            'brand' => 'required',
        ]);

        $product = new Product();

        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        if ($request->hasFile('image')) {
            $file = Storage::putFileAs('public/products', $request->file('image'), $request->file('image')->getClientOriginalName());
            $product->image = $file;
        }
        $product->category_id = $request->category_id;
        $product->stock = $request->stock;
        $product->status = 'active';
        $product->brand = $request->brand;

        $product->update();

        return redirect()->route('shop');
    }

    public function destroy(Product $product)
    {
        $product->delete();

        return redirect()->route('shop');
    }
}
