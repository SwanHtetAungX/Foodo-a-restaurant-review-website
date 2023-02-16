"use strict"
class ForgetPassworkToken{
    constructor(_id, user_id, unique_reset_token, date, used_status, is_expired){
        this._id=_id;
        this.user_id=user_id;
        this.unique_reset_token=unique_reset_token;
        this.date=date
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
        return this.unique_reset_token;
    }
    getDate(){
        return this.date;
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
    setUniqueToken(unique_reset_token){
        this.unique_reset_token=unique_reset_token;
    }
    setDate(date){
        this.date=date;
    }
    setUsedStatus(used_status){
        this.used_status=used_status;
    }
    setIsExpired(is_expired){
        this.is_expired=is_expired
    }

    
}
module.exports=ForgetPassworkToken;