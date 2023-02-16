"use strict";
const RestaurantsDB=require("../models/RestaurantsDB");

var restaurantsDB=new RestaurantsDB();
function getAllRestaurants(request,respond){
    restaurantsDB.getAllRestaurants(function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function searchRestaurant(request,respond){
    var search=request.body.searchTerm;
    restaurantsDB.searchRestaurant(search,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    })
}
function searchNearestRestaurant(request,respond){
    var postalCode=request.body.postalCode;
    restaurantsDB.searchNearestRestaurant(postalCode,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    })
}
module.exports={getAllRestaurants,searchRestaurant,searchNearestRestaurant};
