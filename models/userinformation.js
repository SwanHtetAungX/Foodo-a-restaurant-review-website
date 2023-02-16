"use strict"
class UserInformation{
    constructor(user_id, username, user_email, user_password,is_email_confirmed){
        this.user_id=user_id;
        this.username=username;
        this.user_email=user_email
        this.user_password=user_password
        this.is_email_confirmed=is_email_confirmed
        
    }
    getUserId(){
        return this.user_id;
    }
    getUsername(){
        return this.username;
    }
    getUserEmail(){
        return this.user_email;
    }
    getUserPassword(){
        return this.user_password;
    }
    getIsEmailConfirmed(){
        return this.is_email_confirmed;
    }
    setUserId(user_id){
         this.user_id=user_id;
    }
    setUsername(username){
        this.username=username;
    }

    setUserEmail(user_email){
        this.user_email=user_email;
    }
    setUserPassword(user_password){
        this.user_password=user_password;
    }
    setIsEmailConfirmed(is_email_confirmed){
        this.is_email_confirmed=is_email_confirmed;
    }

    
}
module.exports=UserInformation;