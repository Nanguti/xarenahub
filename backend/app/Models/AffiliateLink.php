<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AffiliateLink extends Model
{
    protected $fillable = [
        'name',
        'review_id',
        'link',
        'platform'
    ];
}
