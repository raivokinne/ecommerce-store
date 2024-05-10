<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\PaymentController;
use App\Http\Middleware\IsAdmin;
use App\Models\Order;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'orders' => Order::all(),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/shop', [ProductController::class, 'index'])->name('shop');
Route::get('/shop/{product}', [ProductController::class, 'show'])->name('shop.show');
Route::get('/shop/product/create', [ProductController::class, 'create'])->name('shop.create')->middleware(IsAdmin::class);
Route::post('/shop/product', [ProductController::class, 'store'])->name('shop.store')->middleware(IsAdmin::class);
Route::put('/shop/product/{product}', [ProductController::class, 'update'])->name('shop.update')->middleware(IsAdmin::class);
Route::get('/shop/product/{product}/edit', [ProductController::class, 'edit'])->name('shop.edit')->middleware(IsAdmin::class);
Route::delete('/shop/product/{product}', [ProductController::class, 'destroy'])->name('shop.destroy')->middleware(IsAdmin::class);

Route::get('/cart', [CartController::class, 'index'])->name('cart');
Route::post('/cart', [CartController::class, 'store'])->name('cart.store');
Route::delete('/cart/{id}', [CartController::class, 'destroy'])->name('cart.destroy');

Route::get('/checkout', [PaymentController::class, 'checkout'])->name('checkout');
Route::get('/success', [ProductController::class, 'success'])->name('checkout.success');
Route::get('/cancel', [ProductController::class, 'cancel'])->name('checkout.cancel');

require __DIR__ . '/auth.php';
