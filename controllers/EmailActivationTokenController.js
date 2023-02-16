"use strict";
var EmailActivationTokenDB=require('../models/EmailActivationTokenDB');
var EmailActivationToken=require('../models/EmailActivationToken');
var emailActivationTokenDB=new EmailActivationTokenDB;
function GenerateUniqueToken(request,respond){
    var emailActivationToken= new EmailActivationToken(null,request.body.user_id,null,null,"0","0");
    emailActivationTokenDB.generateUniqueToken(emailActivationToken,function(error,result){
        if(error){
            respond.json(error)
        }
        else{
            respond.json(result);
        }
    });

}
function deleteTheToken(request,respond){
    emailActivationTokenDB.deleteTheToken(function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });}
    function SetTheTokenToExpired(request,respond){
        emailActivationTokenDB.SetTheTokenToExpired(function(error,result){
            if(error){
                respond.json(error);
            }
            else{respond.json(result);}
            
        })
    }
    function GetTheToken(request,respond){
        var userID= request.query.user_id
        emailActivationTokenDB.GetTheToken(userID,function(error,result){
            if(error){
                respond.json(error)
            }
            else{
                respond.json(result)
            }
    
        });
    }
    module.exports={GenerateUniqueToken,deleteTheToken,SetTheTokenToExpired,GetTheToken};
