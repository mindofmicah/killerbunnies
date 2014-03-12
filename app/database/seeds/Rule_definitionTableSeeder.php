<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class Rule_definitionTableSeeder extends Seeder {

    public function run()
    {
        $faker = Faker::create();

        foreach(range(1, 10) as $index)
        {
            Rule_definition::create([
                'label'=>$faker->sentence(),
                'default_multiplier'=>$faker->randomDigit()
            ]);
        }
    }

}