"use strict";
class FavouriteRestaurants{
    constructor(favourite_restaurant_id,user_id,restaurant_id){
        this.favourite_restaurant_id=favourite_restaurant_id;
        this.user_id=user_id;
        this.restaurant_id=restaurant_id;
        
    }
    getFavResId(){
        return this.favourite_restaurant_id;
    }
    getUserId(){
        return this.user_id;
    }
    getRestaurantId(){
        return this.restaurant_id;
    }
   
    setFavResId(favourite_restaurant_id){
         this.favourite_restaurant_id=favourite_restaurant_id;
    }
    setUserId(user_id){
        this.user_id=user_id;
    }
    setRestaurantId(restaurant_id){
        this.restaurant_id=restaurant_id;
    }
    
}
module.exports=FavouriteRestaurants;