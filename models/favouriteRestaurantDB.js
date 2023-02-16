"user_restrict"
var db=require('../db-connection');
"use strict"


class FavouriteRestaurantsDB{
    getUserFavouriteRestaurants(userID,callback){
        var sql="SELECT * from mydb.favourite_restaurants WHERE user_id = ? "
        db.query(sql,[userID],callback);
    }
    addFavouriteRestaurants(info,callback){
        var sql="INSERT INTO favourite_restaurants (favourite_restaurant_id, user_id, restaurant_id) VALUES (?, ?, ? )";
        db.query(sql,[info.getFavResId(),info.getUserId(),info.getRestaurantId()],callback);
        
    }
    deleteFavouriteRestaurants(userID,ResID,callback){
        var sql="DELETE from favourite_restaurants WHERE user_id = ? and restaurant_id=?"
        db.query(sql,[userID,ResID],callback);
    }
}
module.exports=FavouriteRestaurantsDB;