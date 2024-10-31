<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('reviews')->insert([
            'user_id' => 1,
            'category_id' => 1,
            'brand_id' => 1,
            'title' => 'Sample Review',
            'content' => 'This is a sample review content.',
            'image_url' => 'https://example.com/review.jpg',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
