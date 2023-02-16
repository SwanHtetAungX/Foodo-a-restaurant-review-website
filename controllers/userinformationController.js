"use strict"
var UserinformationDB=require("../models/userinformationDB");
var UserInformation=require("../models/userinformation")
var userinformationDB=new UserinformationDB;
const bcrypt=require('bcrypt')
var jwt=require('jsonwebtoken')
var secret="somesecretkey"
function getAlluserinformation(request,respond){
    var userID=request.params.id;
    userinformationDB.getAlluserinformation(userID,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function deleteUserAccount(request,respond){
    var userID=request.params.id;
    userinformationDB.deleteUserAccount(userID,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });

}
function AddUserAccount(request,respond){
    var username=request.body.username;
    var email=request.body.user_email;
    var password=request.body.user_password;
    password=bcrypt.hashSync(password,10);
    var userinfo= new UserInformation(null,username,email,password, "0");
    userinformationDB.addUserAccount(userinfo,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });
}
function getLoginUser(request,respond){
    var password=request.body.user_password;
    var email=request.body.user_email;
    userinformationDB.getLoginUser(email,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
         
            const hash=result[0].user_password;
            var flag=bcrypt.compareSync(password,hash);
            if(flag){
                var token=jwt.sign(email,secret);
                respond.json({result:token})
            }
            else{
                respond.json({result:"invalid"});
            }
            
        }
});}
function checkPassword(request,respond){
    var password=request.body.user_password;
    var email=request.body.user_email;
    userinformationDB.checkPassword(email,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
         
            const hash=result[0].user_password;
            var flag=bcrypt.compareSync(password,hash);
            if(flag){
                respond.json({result:"valid"})
            }
            else{
                respond.json({result:"invalid"});
            }
            
        }
});


}
function getUser(request,respond){
    var token=request.body.token;
    try {
        var decoded=jwt.verify(token,secret);

        userinformationDB.getUser(decoded,function(error,result){
            if(error){
                respond.json(error);
            }
            else{respond.json(result);
            }
        })
        
    } catch (error) {
        respond.json({result:"invalid token"})
}
};
function updateUserInformation(request,respond){
    var password=request.body.user_password;
    if(password){password = bcrypt.hashSync(password, 10);}
    
     var userinfo=new UserInformation(parseInt(request.params.id),request.body.username,request.body.user_email,password,"0");
    userinformationDB.updateUserInformation(userinfo,function(error,result){
    if(error){
        respond.json(error)
        }
        else{
            respond.json(result);
            
        }
    });
}
    

        
        
    
    

function getUserInformation(request,respond){
    userinformationDB.getUserInformation(function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });}

module.exports={getUser,getAlluserinformation,deleteUserAccount,AddUserAccount,updateUserInformation,getUserInformation,getLoginUser,checkPassword};