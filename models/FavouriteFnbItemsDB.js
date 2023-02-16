"user_restrict"
var db=require('../db-connection');
"use strict"


class FavouriteFnbItems{
    getUserFavouriteFnbItems(userID,callback){
        var sql="SELECT DISTINCT Food_Beverage_id,favourite_fnb_items_id from mydb.favourite_fnb_items WHERE user_id = ? "
        db.query(sql,[userID],callback);
    }
    addFavouriteFnBItems(info,callback){
        var sql="INSERT INTO favourite_fnb_items (favourite_fnb_items_id, user_id, Food_Beverage_id) VALUES (?, ?, ? )";
        db.query(sql,[info.getFavFnbItemsId(),info.getUserId(),info.getFnbItemsId()],callback);
        
    }
    deleteFavouriteFnBItems(userID,FavFnB,callback){
        var sql="DELETE from favourite_fnb_items where user_id = ? and Food_Beverage_id = ?"
        db.query(sql,[userID,FavFnB],callback);
    }
}
module.exports=FavouriteFnbItems;