<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = ['user_id', 'title', 'content', 'category_id', 'brand_id', 'image_url'];
}