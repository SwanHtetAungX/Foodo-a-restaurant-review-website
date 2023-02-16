"user strict";
const FavouriteFnbItemsDB=require("../models/favouriteFnbItemsDB");
var FavouriteFnbItems=require("../models/FavouriteFnbItems");
var favouriteFnBItemsDB=new FavouriteFnbItemsDB;

function getUserFavouriteFnBItems(request,respond){
    var userID=request.query.user_id  
    favouriteFnBItemsDB.getUserFavouriteFnbItems(userID,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
  
    
}
function addFavouriteFnbItems(request,respond){
    var info=new FavouriteFnbItems(null,request.body.user_id,request.body.Food_Beverage_id);
    favouriteFnBItemsDB.addFavouriteFnBItems(info,function(error,result){
        if(error){
            respond.json(error);
        }
        else{respond.json(result);
            
        }
    });
}
function deleteFavouriteFnbItems(request,respond){
    var userID=request.query.user_id;
    var FavFnB=request.query.Food_Beverage_id;
    favouriteFnBItemsDB.deleteFavouriteFnBItems(userID,FavFnB,function(error,result){
        if(error){
            respond.json(error)
        }
        else{
            respond.json(result)
        }
    });
}  
module.exports={getUserFavouriteFnBItems,addFavouriteFnbItems,deleteFavouriteFnbItems};