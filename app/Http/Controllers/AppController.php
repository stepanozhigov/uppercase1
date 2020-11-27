<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class AppController extends Controller
{
    public function index($lang = 'en') {

    $locale = [
        'ru' => 'ru',
        'en' => 'en'
    ];

        App::setLocale($locale[$lang]);
        // dd(app()->getLocale());
        return view('app');
    }

}
