<?php

class DatabaseSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Eloquent::unguard();
        $this->call('GamesTableSeeder');
        $this->call('Rule_definitionTableSeeder');
        // $this->call('UserTableSeeder');
    }

}
