<?php
namespace App\Services;



use Symfony\Component\HttpFoundation\Response as HttpResponse;

use Illuminate\Support\Facades\App;

use Illuminate\Support\Facades\Auth;

use App\Member;

use Response;


/**
 * The Response handled in this class along with status
 * @author sachinvias
 *
 */

class ApiService
{
    /*
     * The default value for the statu code
     *
     * */

    protected $statusCode = HttpResponse::HTTP_OK;

    /**
     * @return string
     */
    public function getStatusCode()
    {
        return $this->statusCode;
    }

    /**
     * @param string $statusCode
     * @return object
     */
    public function setStatusCode($statusCode)
    {
        $this->statusCode = $statusCode;

        return $this;
    }

    /**
     * Function to return the response
     * @return json
     * */

    public function respond($data,$headers = []){
        return Response::Json($data,$this->getStatusCode(),$headers);

    }

    /**
     * Function to return the response with error
     * @return Json
     * */


    public function respondWithError($message){

        return $this->respond([
            "error" => [
                "message" => $message,
                "status_code" => $this->getStatusCode(),
            ]
        ]);

    }

    //check this
    public function respondWithErrors($message){

        return $this->respond([
            "errors" => $message
            ]);

    }

    /**
     * Function to return the response with pagination
     * @return Json
     * */


    public function respondWithPagination($items,$data){

        return $this->respond($this->buildRecordWithPagination($items,$data));

    }

    public function buildRecordWithPagination($items,$data){

        $records = array_merge($data, [

            'paginator' => [
                'total_count' => $items->total(),
                'total_pages' => ceil($items->total() / $items->perPage()),
                'current_page' => $items->currentPage(),
                'limit' => $items->perPage()
            ],

        ]);

        return $records;
    }



    /**
     * Function to respond if there is no records or content
     * @return Json
     */

    public function respondNotFound($message = 'No content!'){

        return $this->setStatusCode(HttpResponse::HTTP_PARTIAL_CONTENT)->respondWithError($message);

    }

    /**
     * Function to respond if there is any internal server error
     * @return Json
     */


    public function respondInternalError($message = 'Internal Error!'){

        return $this->setStatusCode(HttpResponse::HTTP_INTERNAL_SERVER_ERROR)->respondWithError($message);

    }

    public function getLanguageCode(){
        return $locale = (session()->get('locale'))?session()->get('locale'):App::getLocale();

    }


    public function getUserMemberDetails(){

        $user = null;

        $member_id = (Auth::user())?Auth::user()->member_id:null;

        if($member_id)
        $user = Member::with('membership','state')->find($member_id);

        return $user;

    }

}

