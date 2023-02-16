"user strict";
const { request } = require("express");
const FavouriteRestaurantsDB=require("../models/favouriteRestaurantDB");
var FavouriteRestaurants=require("../models/favouriteRestaurants")
var favouriteRestaurantsDB=new FavouriteRestaurantsDB;

function getUserFavouriteRestaurants(request,respond){
    var userID=request.query.user_id  
    favouriteRestaurantsDB.getUserFavouriteRestaurants(userID,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
  
    
}
function addFavouriteRestaurants(request,respond){
    var info=new FavouriteRestaurants(null,request.body.user_id,request.body.restaurant_id);
    favouriteRestaurantsDB.addFavouriteRestaurants(info,function(error,result){
        if(error){
            respond.json(error);
        }
        else{respond.json(result);
            
        }
    });
}
function deleteFavouriteRestaurants(request,respond){
    var userID=request.query.user_id;
    var ResID=request.query.restaurant_id;
    favouriteRestaurantsDB.deleteFavouriteRestaurants(userID,ResID,function(error,result){
        if(error){
            respond.json(error)
        }
        else{
            respond.json(result)
        }
    })
}  
module.exports={getUserFavouriteRestaurants,addFavouriteRestaurants,deleteFavouriteRestaurants};