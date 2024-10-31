<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AffiliateLinkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('affiliate_links')->insert([
            'name' => 'Affiliate Link Example',
            'review_id' => 1, // Ensure this review ID exists
            'link' => 'https://affiliate-link.com',
            'platform' => 'Platform Example',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
