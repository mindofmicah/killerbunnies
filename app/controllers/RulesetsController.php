<?php
/**
 * Description of RulesetsController
 *
 * @author micah
 */
class RulesetsController extends BaseController
{
    public function create()
    {
        return View::make('admin.rulesets.create');
    }
}