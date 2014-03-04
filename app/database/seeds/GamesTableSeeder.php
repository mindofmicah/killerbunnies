<?php
use Faker\Factory as Faker;

class GamesTableSeeder extends Seeder {

    public function run()
    {
        $faker = Faker::create();

        foreach(range(1, 10) as $index)
        {
            Game::create([
                'slug' => strtoupper($faker->lexify('??????'))
            ]);
        }
    }

}
