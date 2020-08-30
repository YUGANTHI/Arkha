<?php
namespace App\Services\staff;
use Illuminate\Support\Facades\Redis;
use App\Services\ApiService;
use App\ResourceCategory;
use App\Services\admin\LanguageService;

use App\Resource;
use App\Ackme\staff\ResourceTransformer;
use App\Ackme\staff\ResourceCategoryTransformer;
use Illuminate\Support\Facades\Storage;

use App\ResourceDetail;
use App\MemberStaffChallenge;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Lang;

use App\Challenge;
/**
 *
 * @author sachinvias
 *        
 */
class ResourceServices extends ApiService
{    
    private static $tObj;  
    
    public function getResourceCategory($year_id){
        
        $member_details = $this->getUserMemberDetails();
        
        $language_id = LanguageService::getLanguageIdByCode($this->getLanguageCode());
        
        
      // if(!Redis::get("resources.{$member_details->state_id}.{$year_id}.{$language_id}.categories")){             
            
            $records = ResourceCategory::with(['resourceCategoryDetail' => function($q) use($language_id){
                
                $q->select('id','resource_category_id','name')
                ->where('language_id',$language_id);
                
            }])
            ->whereHas('resourceCategoryDetail',function($q) use ($language_id){
                $q->where('language_id',$language_id);
            })
            ->whereHas('resourceCategoryYearMapping',function($q) use ($year_id){
                $q->where('year_id',$year_id);
            })
            ->where('state_id', $member_details->state_id)
            ->where('status',config('constants.status.active'))->get();

            $categories = array();
            
            if(count($records))                
                return  $this->respond([
                    'data' =>$this::getResourceCategoryTranformObject()->transformCollection($records->toArray()),
                    ]
                );
            else
                return $this->respondNotFound(Lang::get('resources.no_category_records'));                  
                      
          //  Redis::set("resources.{$member_details->state_id}.{$year_id}.{$language_id}.categories", json_encode($categories));
        
        //}
        
        // $rv = json_decode(Redis::get("resources.{$member_details->state_id}.{$year_id}.{$language_id}.categories"),true);
       // return $rv;
       
            
        
    }
    
    public function getResourceBy($year_id,$category_id,$search_text =null){
        
        $member_details = $this->getUserMemberDetails();
        
        $hide_subject_resource = false;
        
        $hide_challenge_resource = false;
        
        $language_id = LanguageService::getLanguageIdByCode($this->getLanguageCode());
        
       // if($member_details->membership->code == config('constants.membership.trial') || !Redis::get("resources.{$member_details->state_id}.{$member_details->membership->id}.{$category_id}.{$year_id}.{$language_id}.resources")){
                
                $query = Resource::with(['resourceDetail' => function($q) use($language_id){
                    
                    $q->select('id','resource_id','name','file_url')->where('language_id',$language_id);
                    
                }])
                ->whereHas('resourceDetail',function($q) use ($language_id){
                    $q->where('language_id',$language_id);
                })
                ->whereHas('resourceYearMapping',function($q) use ($year_id){
                    $q->where('year_id',$year_id);
                })
                ->where('state_id', $member_details->state_id)
                ->where('resource_category_id', $category_id)
                ->where('status',config('constants.status.active'));
                
                if(!is_null($search_text)){
                    
                    $query->whereHas('resourceDetail', function($q) use($search_text,$language_id) {
                        $q->Where('name','like','%'.$search_text.'%')
                        ->where('language_id', $language_id);
                            });
                }
                
                
                
                $challenges = array();
             
                switch($member_details->membership->code){
                    
                    case config('constants.membership.portal'):

                        $hide_challenge_resource = true;

                        //$query->where('type',config('constants.resources.types.subject'));
                        break;
                        
                    case config('constants.membership.trial'):
                        
                        $challenges = MemberStaffChallenge::select('challenge_id')
                        ->where('staff_id',Auth::user()->id)->where('member_id',$member_details->id)->get();
                        
                        if(count($challenges)){
                            
                            $challenge_ids = array();
                            
                            foreach($challenges as $challenge_id){
                                
                                $challenge_ids[] = $challenge_id;
                                
                            }
                            
                            $query->whereHas('resourceChallengeMapping',function($q)use($challenge_ids){
                                
                                $q->whereIn('challenge_id',$challenge_ids);
                                
                            });  
                            
                            $hide_subject_resource = true;
                           //$query->where('type',config('constants.resources.types.challenge'));
                                
                        }else{
                            
                            return $this->respondNotFound(Lang::get('resources.nochallengeresource'));
                        }
                        
                        
                        break;
                        
                }
                
                $records = $query->get();
                
                $resources = array();
                
                
                if(count($records)) {
                    
                    $data = $records->toArray();
                    
                 
                    
                    $records = $this::getResourceTranformObject()->transformCollection($data);
                                
                    
                    foreach($records as $key => $record){
                        
                        if($hide_subject_resource){
                            
                            if($record['type'] == config('constants.resources.types.subject')){
                                
                                $record['hide_links'] = true;
                                
                                $record['file_url'] ="#";
                                
                                $records[$key]= $record;
                            }
                        }
                        
                        if($hide_challenge_resource){
                            
                               if($record['type'] == config('constants.resources.types.challenge')){
                                   
                                $record['hide_links'] = true;
                                
                                $record['file_url'] ="#";
                                
                                $records[$key]= $record;
                                
                            }
                            
                        }
                        
                    }
                     
                    return  $this->respond([
                        
                            'data' => $records,
                            
                        
                        ]);
                    
                  /*  if($member_details->membership->code == config('constants.membership.trial')){ 
                        
                        return $resources;
                    }
                    
                    change while adding reddis
                    
                    */  
                    
                   // Redis::set("resources.{$member_details->state_id}.{$member_details->membership->id}.{$category_id}.{$year_id}.{$language_id}.resources", json_encode($resources));
                    
                }else{
                    
                    return $this->respondNotFound(Lang::get('resources.nochallengeresource'));
                    
                }
        
       // }
                
        //$rv = json_decode(Redis::get("resources.{$member_details->state_id}.{$member_details->membership->id}.{$category_id}.{$year_id}.{$language_id}.resources"),true);
              //  return $rv;
                
               
        
    }

    public function getResourceForPreDefineChallenges($challenge_id){        
        
        
        $challenge = Challenge::find($challenge_id);

        
        $member_details = $this->getUserMemberDetails();
        
        $language_id = LanguageService::getLanguageIdByCode($this->getLanguageCode());        
        
        $query = Resource::with(['resourceDetail' => function($q) use($language_id){ 
            
            $q->select('id','resource_id','name','file_url')->where('language_id',$language_id);            
        },'resourceCategory' => function($q){
            
            $q->select('id');
            
        },'resourceCategory.resourceCategoryDetail' =>function($q) use($language_id){
            
            $q->select('id','name','resource_category_id');
            
        }])
        
        ->whereHas('resourceDetail',function($q) use ($language_id){
            $q->where('language_id',$language_id);
        })
        
        ->whereHas('resourceChallengeMapping',function($q) use ($challenge_id){
            $q->where('challenge_id',$challenge_id);
        })
        ->where('state_id', $member_details->state_id)
        ->where('status',config('constants.status.active'));
        
        
         switch($member_details->membership->code){
                    
            case config('constants.membership.portal'): 
                $query->where('type',config('constants.resources.types.subject'));
                break;
                
            case config('constants.membership.trial'):                        
                $query->where('type',config('constants.resources.types.challenge'));                        
                break;
                        
        }
        
        
        $records = $query->get();
        
        
        $resources = array();
        
        
        if(count($records)) {
            
            
            
            $resources =  self::getResourceTranformObject()->transformChallengeResourceCollection($records->toArray());

            
           return  $this->respond([
                'data' => $resources,
                
            ]);

            
            /*  if($member_details->membership->code == config('constants.membership.trial')){
            
            return $resources;
            }
            
            change while adding reddis
            
            */
            
            // Redis::set("resources.{$member_details->state_id}.{$member_details->membership->id}.{$category_id}.{$year_id}.{$language_id}.resources", json_encode($resources));
            
        }else{
            
            return $this->respondNotFound(Lang::get('resources.nochallengeresource'));
            
        }
        
     
        
        
    }
    
    
    public function getResourceForChallenges($challenge_id,$year_id=null){        
        

         $challenge = MemberStaffChallenge::with(['staffPlan'])->find($challenge_id);

         $challenge_view = false;

         if(is_null($year_id)){
             $challenge_view = true;
             $year_id = $challenge->staffPlan->year_id;

         }
        
        // print_r($challenge_id);exit;
        
        $member_details = $this->getUserMemberDetails();
        
        $language_id = LanguageService::getLanguageIdByCode($this->getLanguageCode());        
        
        $query = Resource::with(['resourceDetail' => function($q) use($language_id){ 
            
            $q->select('id','resource_id','name','file_url')->where('language_id',$language_id);            
        },'resourceCategory' => function($q){
            
            $q->select('id');
            
        },'resourceCategory.resourceCategoryDetail' =>function($q) use($language_id){
            
            $q->select('id','name','resource_category_id');
            
        }])
        
        ->whereHas('resourceDetail',function($q) use ($language_id){
            $q->where('language_id',$language_id);
        })
        
        ->whereHas('resourceYearMapping',function($q) use ($year_id){
            $q->where('year_id',$year_id);
        })
        ->where('state_id', $member_details->state_id)
        ->where('status',config('constants.status.active'));
        
        
         switch($member_details->membership->code){
                    
            case config('constants.membership.portal'): 
                $query->where('type',config('constants.resources.types.subject'));
                break;
                
            case config('constants.membership.trial'):                        
                $query->where('type',config('constants.resources.types.challenge'));                        
                break;

            case config('constants.membership.full'):  
            
            if(isset($challenge) && !empty($challenge)){
            
                if($challenge->custom_challenges == config('constants.boolean.yes')){
                    $query->where('type',config('constants.resources.types.subject'));
                }
                
            }
          
                        
        }
                

        if(isset($challenge) && !empty($challenge)){
            
            if(($challenge->custom_challenges != config('constants.boolean.yes')) || $challenge_view){
               
                $query->whereHas('memberChallengeResourceMapping',function($q)use($challenge_id){
                    
                    $q->where('member_staff_challenge_id',$challenge_id);
                    
                }); 
                
            }

           
        } 
        
        
        $records = $query->get();
        
        
        $resources = array();
        
        
        if(count($records)) {
            
            
            
            $resources =  self::getResourceTranformObject()->transformChallengeResourceCollection($records->toArray());

            $selected_ids = $this->getSelectedResources($challenge_id);
            
            
            if(isset($challenge) && !empty($challenge)){
                
                if($challenge->custom_challenges == config('constants.boolean.yes') && isset($selected_ids->getData()->data)){
                  
                    foreach($resources as $key => $resource){
                    
                        foreach($selected_ids->getData()->data as $data){
                            if($data->id == $resource['id']){
                                $resources[$key]['checked'] = true;
                            }
                        }
                    
                    }

                }
            }
          
           return  $this->respond([
                'data' => $resources,
                'custom_challenge' => isset($challenge)?$challenge->custom_challenges:config('constants.boolean.no')
            ]);

            
            /*  if($member_details->membership->code == config('constants.membership.trial')){
            
            return $resources;
            }
            
            change while adding reddis
            
            */
            
            // Redis::set("resources.{$member_details->state_id}.{$member_details->membership->id}.{$category_id}.{$year_id}.{$language_id}.resources", json_encode($resources));
            
        }else{
            
            return $this->respondNotFound(Lang::get('resources.nochallengeresource'));
            
        }
        
     
        
        
    }
    
    public function getResourceForYear($year_id){

        $resources = array();
        

         if(\Gate::allows(config('constants.membership.trial'))){         
            return  $this->respond([
                'data' => $resources,
                'show_trial_msg' => Lang::get('resources.aclModalData'),   
            ]);
         }

        
        $member_details = $this->getUserMemberDetails();
        
        $language_id = LanguageService::getLanguageIdByCode($this->getLanguageCode());
        
        $query = Resource::with(['resourceDetail' => function($q) use($language_id){
            
            $q->select('id','resource_id','name','file_url')->where('language_id',$language_id);
        },'resourceCategory' => function($q){
            
            $q->select('id');
            
        },'resourceCategory.resourceCategoryDetail' =>function($q) use($language_id){
            
            $q->select('id','name','resource_category_id');
            
        }])
        
        ->whereHas('resourceDetail',function($q) use ($language_id){
            $q->where('language_id',$language_id);
        })
        
        ->whereHas('resourceYearMapping',function($q) use ($year_id){
            $q->where('year_id',$year_id);
        })
        ->where('state_id', $member_details->state_id)
        ->where('status',config('constants.status.active'));
            
        $query->where('type',config('constants.resources.types.subject'));

        $records = $query->get();        
        
        
        
        if(count($records)) {
                        
            
            $resources =  self::getResourceTranformObject()->transformChallengeResourceCollection($records->toArray());
       
            
        }else{
            
            return $this->respondNotFound(Lang::get('resources.nochallengeresource'));
            
        }
        return  $this->respond([
            'data' => $resources,         
            'custom_challenge' => config('constants.boolean.yes')  
        ]);

        
    }
    
    public function getSelectedResources($challenge_id){
        
        $member_details = $this->getUserMemberDetails();
        
        $query = Resource::select('id')->where('state_id', $member_details->state_id)
        ->where('status',config('constants.status.active'))->whereHas('memberChallengeResourceMapping',function($q)use($challenge_id){
            
            $q->where('member_staff_challenge_id',$challenge_id);
            
        });
        
        
        $records = $query->get();
        
        $resources = array();
        
        if(count($records)) {
            
            
            foreach($records as $record){
            
                $resources[] = $record;
                
            }
            
            
            
            
        }else{
            
            return $this->respondNotFound(Lang::get('resources.nochallengeresource'));
            
        }
       
        return $this->respond([
            
            'data' => $resources, 
        ]);
       
    }
    
    
    
    
    
    
    
   
    
    public function getFileUrl($id){
        
        $record = ResourceDetail::find($id);
        
        if($record) {
            $url= Storage::disk('s3')->url($record->file_url); 
            
            return $this->respond([
                
                'url' => $url,
            ]);
        } else {
            return $this->respondNotFound('No record found');
        }
    }
    
    
    public function download($id)
    {
        
        $record = ResourceDetail::find($id);
 
 if($record->file_url){
 header("Cache-Control: public");
 header("Content-Description: File Transfer");
 header("Content-Disposition: attachment; filename=" . basename($record->file_url));
 header("Content-Type:pdf" );
 
 return readfile($record->file_url);
 }
 
 return back();

    }
    
        
    /**
     * @return ResourceCategoryTransformer
     */
    public static function getResourceCategoryTranformObject(){
        
        if(empty(self::$tObj)){
            
            self::$tObj = new ResourceCategoryTransformer();
            
        }
        
        return self::$tObj;
    }
    
    /**
     * @return ResourceTransformer
     */
    public static function getResourceTranformObject(){
        
        if(empty(self::$tObj)){
            
            self::$tObj = new ResourceTransformer();
            
        }
        
        return self::$tObj;
    }
    
}

