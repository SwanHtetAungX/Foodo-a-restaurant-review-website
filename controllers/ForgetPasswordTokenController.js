"use strict";
var ForgetPasswordTokenDB=require('../models/ForgetPasswordTokenDB');
var ForgetPasswordToken=require('../models/ForgetPassowordToken');
var forgetPasswordTokenDB=new ForgetPasswordTokenDB;
function GenerateUniqueToken(request,respond){
    var forgetPasswordToken= new ForgetPasswordToken(null,request.body.user_id,null,null,"0","0");
    forgetPasswordTokenDB.generateUniqueToken(forgetPasswordToken,function(error,result){
        if(error){
            respond.json(error)
        }
        else{
            respond.json(result);
        }
    });

}
function deleteTheToken(request,respond){
    forgetPasswordTokenDB.deleteTheToken(function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });}
    function SetTheTokenToExpired(request,respond){
        forgetPasswordTokenDB.SetTheTokenToExpired(function(error,result){
            if(error){
                respond.json(error);
            }
            else{respond.json(result);}
            
        })
    }
function GetTheToken(request,respond){
    var userID= request.query.user_id
    forgetPasswordTokenDB.GetTheToken(userID,function(error,result){
        if(error){
            respond.json(error)
        }
        else{
            respond.json(result)
        }

    });
}
    module.exports={GenerateUniqueToken,deleteTheToken,SetTheTokenToExpired,GetTheToken};
