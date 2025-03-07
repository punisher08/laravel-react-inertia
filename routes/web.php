<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;

Route::get('/',[ProductController::class,'index']);
Route::resource('/post',ProductController::class)->except('index');

