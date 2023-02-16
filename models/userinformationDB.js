"use strict";
var db=require("../db-connection");
class UserinformationDB{
    getUserInformation(callback){
            var sql="SELECT * from mydb.user_information"
            db.query(sql,callback);
    }
    
    getLoginUser(user_email,callback){
        var sql="SELECT user_id,user_password from mydb.user_information WHERE user_email= ?"
        db.query(sql,[user_email],callback);}
    
    checkPassword(user_email,callback){
        var sql="SELECT user_password from mydb.user_information WHERE user_email= ?"
        db.query(sql,[user_email],callback);}    
    getUser(user_email,callback){
            var sql="SELECT user_id,username,user_email,user_password from mydb.user_information WHERE user_email= ?"
            db.query(sql,[user_email],callback)}

    getAlluserinformation(userID,callback){
        var sql="SELECT * from mydb.user_information WHERE user_id=?";
        db.query(sql,[userID],callback);

    }
    deleteUserAccount(userID,callback){
        var sql="DELETE from user_information WHERE user_id=?";
        db.query(sql,[userID],callback);
    }
    addUserAccount(userinfo,callback){
        var sql="INSERT INTO user_information (user_id, username, user_email, user_password, is_email_confirmed) VALUES (?, ?, ?, ?, ?)";
        db.query(sql,[userinfo.getUserId(),userinfo.getUsername(),userinfo.getUserEmail(),userinfo.getUserPassword(),userinfo.getIsEmailConfirmed()],callback);
    }
    updateUserInformation(userinfo,callback){
        var sql="UPDATE user_information SET username = COALESCE(NULLIF(?,''),username), user_email= COALESCE(NULLIF(?,''),user_email), user_password=COALESCE(NULLIF(?,''),user_password) WHERE user_id=?";
        return db.query(sql,[userinfo.getUsername(),userinfo.getUserEmail(),userinfo.getUserPassword(),userinfo.getUserId()],callback);
    }
}
module.exports=UserinformationDB;