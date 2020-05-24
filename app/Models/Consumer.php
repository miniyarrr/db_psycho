<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
//use Illuminate\Support\Facades\Auth;

class Consumer extends Model
{
    protected $table = "Consumers";

    protected $primaryKey = "id";

    protected $fillable = [
        'user_id',
        'phone_number',
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

    public function user(){
        return $this->hasOne('App\Models\User','id', 'user_id');
    }

    public function children(){
        return $this->hasMany('App\Models\Children','parent_id', 'id');
    }

}
