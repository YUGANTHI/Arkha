<?php
namespace App\Services;

use Illuminate\Support\Facades\DB;

use App\User;

class UserServices
{
    /**
     * login api
     *
     * @return \Illuminate\Http\Response
     */
    public function create($data){
        try{

            $processing = DB::transaction(function () use($data) {

                    $user = new User();

                    $user->first_name = $data['first_name'];
                    if(isset($data['last_name'])){
                        $user->last_name = $data['last_name'];
                    }
                    if(isset($data['mobile'])){
                        $user->mobile = $data['mobile'];
                    }
                    if(isset($data['alt_mobile'])){
                        $user->alt_mobile = $data['alt_mobile'];
                    }
                    $user->email = $data['email'];
                    $user->password = $data['password'];

                    if(isset($data['city'])){
                        $user->city = $data['city'];
                    }
                    if(isset($data['village'])){
                        $user->village = $data['village'];
                    }
                    if(isset($data['village'])){
                        $user->gst_num = $data['gst_num'];
                    }
                    if(isset($data['village'])){
                        $user->gst_picture_path = $data['gst_picture_path'];
                    }
                    if(isset($data['village'])){
                        $user->pan_number = $data['pan_number'];
                    }
                    if(isset($data['village'])){
                        $user->address_line_1 = $data['address_line_1'];
                    }
                    if(isset($data['village'])){
                        $user->address_line_2 = $data['address_line_2'];
                    }

                    $user->save();

                    return $user;

            });


            return $processing;

        }catch(\Exception $e){
            return $e;
        }

    }
}
