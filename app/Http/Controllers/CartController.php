<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Cart;

class CartController extends Controller
{
    public function index()
    {
        $carts = Cart::where('user_id', auth()->user()->id)->get();
        $carts->load('product');
        return Inertia::render('Cart/Index', [
            'carts' => $carts
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required',
            'quantity' => 'required',
            'price' => 'required',
        ]);

        Cart::create([
            'user_id' => auth()->user()->id,
            'product_id' => $request->product_id,
            'quantity' => $request->quantity,
            'total' => $request->price * $request->quantity
        ]);

        return redirect()->back();
    }

    public function destroy($id)
    {
        Cart::find($id)->delete();
        return redirect()->back();
    }
}
