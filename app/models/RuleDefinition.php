<?php

class RuleDefinition extends \Eloquent
{
    protected $fillable = ['label', 'default_multiplier'];
    protected $table = 'rule_definitions';
    public $timestamps = false;
    protected $attributes = [
        'default_multiplier' => 1
    ];

}
