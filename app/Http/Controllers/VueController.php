<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;

class VueController
{
    public function indexPage(): Factory|View|Application
    {
        return view('welcome');
    }
}
