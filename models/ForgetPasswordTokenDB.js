"use strict";
var db=require("../db-connection")
class ForgetPasswordTokenDB{
    generateUniqueToken(uniqueCode,callback){
        var sql="INSERT INTO mydb.forget_password_reset_token (_id, user_id, unique_reset_token, date, used_status, is_expired) VALUES (?, ?, UUID(), NOW(), ?, ?)";
        db.query(sql,[uniqueCode.getId(),uniqueCode.getUserId(), uniqueCode.getUsedStatus(),uniqueCode.getIsExpired()],callback);
    }
    deleteTheToken(callback){
        var sql="DELETE from forget_password_reset_token WHERE used_status=1 OR is_expired=1;"
        db.query(sql,callback);
    }
    SetTheTokenToExpired(callback){
        var sql="UPDATE forget_password_reset_token SET is_expired='1' WHERE date <= DATE_SUB(NOW(), INTERVAL 1 DAY)";
        db.query(sql,callback);
    }
    GetTheToken(userID,callback){
        var sql="SELECT unique_reset_token from forget_password_reset_token WHERE user_id=?"
        db.query(sql,[userID],callback);
    }
    
}
module.exports=ForgetPasswordTokenDB;