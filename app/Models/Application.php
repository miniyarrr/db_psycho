<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
//use Illuminate\Support\Facades\Auth;

class Application extends Model
{
    protected $table = "Applications";

    protected $primaryKey = "id";

    protected $fillable = [
        'application_type_id',
        'status_id',
        'child_id',
        'comment',
        'created_by',
        'updated_by'
    ];

    protected $dates = [
        'created_at',
        'updated_at'
    ];


    protected $hidden = [
        'remember_token',
    ];


    public function application_type(){
        return $this->hasMany('App\Models\ApplicationType','id', 'application_type_id');
    }

    public function status(){
        return $this->hasMany('App\Models\Status','id', 'status_id');
    }

    public function child(){
        return $this->hasMany('App\Models\Children','id', 'child_id');
    }

}
