"use strict"
class EmailActivationToken{
    constructor(_id, user_id, unique_activation_token, time, used_status, is_expired){
        this._id=_id;
        this.user_id=user_id;
        this.unique_activation_token=unique_activation_token;
        this.time=time
        this.used_status=used_status
        this.is_expired=is_expired
        
    }
    getId(){
        return this._id;
    }
    getUserId(){
        return this.user_id;
    }
   
    
    getUniqueToken(){
        return this.unique_activation_token;
    }
    getTime(){
        return this.time;
    }
    getUsedStatus(){
        return this.used_status;
    }
    getIsExpired(){
        return this.is_expired;
    }

    setId(_id){
        this._id=_id;
    }
    setUserId(user_id){
        this.user_id=user_id;
    }
    setUniqueToken(unique_activation_token){
        this.unique_activation_token=unique_activation_token;
    }
    setTime(time){
        this.time=time;
    }
    setUsedStatus(used_status){
        this.used_status=used_status;
    }
    setIsExpired(is_expired){
        this.is_expired=is_expired
    }

    
}
module.exports=EmailActivationToken;