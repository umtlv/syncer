<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @mixin IdeHelperData
 */
class Data extends Model
{
    protected $fillable = [
        'title',
        'text',
        'sync',
        'visible'
    ];

    protected $casts = [
        'sync' => 'array'
    ];
}
