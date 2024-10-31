<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('ads')->insert([
            'title' => 'Sample Ad',
            'link' => 'https://example.com',
            'image_url' => 'https://example.com/image.jpg',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
