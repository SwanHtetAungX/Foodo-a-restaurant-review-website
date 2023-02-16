"use strict";
var db=require("../db-connection")
class EmailActivationTokenDB{
    generateUniqueToken(uniqueCode,callback){
        var sql="INSERT INTO mydb.email_activation_code (_id, user_id, unique_activation_code, time, used_status, is_expired) VALUES (?, ?, UUID(), NOW(), ?, ?)";
        db.query(sql,[uniqueCode.getId(),uniqueCode.getUserId(), uniqueCode.getUsedStatus(),uniqueCode.getIsExpired()],callback);
    }
    deleteTheToken(callback){
        var sql="DELETE from email_activation_code WHERE used_status=1 OR is_expired=1;"
        db.query(sql,callback);
    }
    SetTheTokenToExpired(callback){
        var sql="UPDATE email_activation_code SET is_expired='1' WHERE time <= DATE_SUB(NOW(), INTERVAL 1 DAY)";
        db.query(sql,callback);
    }
    GetTheToken(userID,callback){
        var sql="SELECT unique_activation_code from email_activation_code WHERE user_id=?"
        db.query(sql,[userID],callback);
    }
    
}
module.exports=EmailActivationTokenDB;