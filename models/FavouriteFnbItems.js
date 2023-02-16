"use strict";
class FavouriteFnbItems{
    constructor(favourite_fnbitems_id,user_id,Food_Beverage_id){
        this.favourite_fnbitems_id=favourite_fnbitems_id;
        this.user_id=user_id;
        this.Food_Beverage_id=Food_Beverage_id;
        
    }
    getFavFnbItemsId(){
        return this.favourite_fnbitems_id;
    }
    getUserId(){
        return this.user_id;
    }
    getFnbItemsId(){
        return this.Food_Beverage_id;
    }
    setFavFnbItemsId(favourite_fnb_items_id){
        this.favourite_fnbitems_id=favourite_fnb_items_id;
   }

    setUserId(user_id){
        this.user_id=user_id;
    }
    
    setFnbItemsId(Food_Beverage_id){
        this.Food_Beverage_id=Food_Beverage_id;
    }
   
    
    
    
}
module.exports=FavouriteFnbItems;