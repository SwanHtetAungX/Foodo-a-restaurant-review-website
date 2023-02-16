"use_restrict";
var db=require("../db-connection");
class RestaurantsDB{
    getAllRestaurants(callback){
        var sql="SELECT * from mydb.restaurants";
        db.query(sql,callback);
    }
    searchRestaurant(searchTerm,callback){
        var sql="SELECT * FROM mydb.restaurants WHERE name LIKE '%" + searchTerm + "%'";
        db.query(sql,[searchTerm],callback);

    }
    searchNearestRestaurant(postalCode,callback){
        var sql="SELECT * FROM mydb.restaurants WHERE LEFT(postal_code,2) LIKE '%" + postalCode + "%'";
        db.query(sql,[postalCode],callback);

    }
}
module.exports=RestaurantsDB;