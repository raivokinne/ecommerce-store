<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Stripe\Stripe;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Models\Order;
use App\Models\Product;
use App\Models\Cart;
use Illuminate\Support\Facades\DB;

class PaymentController extends Controller
{
    public function index()
    {
        $carts = Cart::where('user_id', auth()->id())->get();
        $carts->load('product');
        return Inertia::render('Payment/Checkout', [
            'carts' => $carts
        ]);
    }
    public function checkout(Request $request)
    {
        DB::beginTransaction();
        try {
            $request->validate(
                [
                    'address' => 'required|string|max:255',
                    'shipping_method' => 'required|string|max:255',
                    'country' => 'required|string|max:255',
                    'city' => 'required|string|max:255',
                    'postal_code' => 'required|string|max:255',
                    'phone' => 'required|string|max:255',
                    'stripeToken' => 'required|string',
                ]
            );
            $carts = Cart::where('user_id', auth()->id())->get();

            Stripe::setApiKey(env('STRIPE_SECRET'));

            $totalPrice = 0;
            foreach ($carts as $cart) {
                $totalPrice += $cart->product->price * $cart->quantity;
            }

            $order = new Order();
            $order->status = 'pending';
            $order->name = auth()->user()->name;
            $order->email = auth()->user()->email;
            $order->payment_status = 'paid';
            $order->address = $request->address;
            $order->country = $request->country;
            $order->city = $request->city;
            $order->postal_code = $request->postal_code;
            $order->phone = $request->phone;
            $order->user_id = auth()->id();
            $order->shipping_method = $request->shipping_method;
            $order->shipping_status = 'pending';
            $order->tracking_id = 'nr-' . rand(100000, 999999);
            $order->total_price = $cart->product->id;
            $order->save();

            \Stripe\Charge::create(
                [
                    'amount' => $totalPrice * 100,
                    'currency' => 'eur',
                    'source' => $request->stripeToken,
                    'description' => 'Order from ' . auth()->user()->email,
                    'receipt_email' => auth()->user()->email,
                ]
            );

            $order->payment_status = 'paid';

            Cart::where('user_id', auth()->id())->delete();

            DB::commit();

            return redirect()->route('cart.index')->with('success', 'Order placed successfully.');
        } catch (\Exception $e) {
            DB::rollback();
            return back()->withErrors(['error' => 'Error processing payment.']);
        }
    }
}
