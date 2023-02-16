"user_restrict"
var db=require('../db-connection');
class FnbitemsDB{
    getAllFnBitems(callback){
        var sql="SELECT * from mydb.food_and_beverage_items"
        db.query(sql,callback);
    }
    searchFnbItems(searchTerm,callback){
        var sql="SELECT * FROM mydb.food_and_beverage_items WHERE item_name LIKE '%" + searchTerm + "%'";
        db.query(sql,[searchTerm],callback);

    }
}


module.exports=FnbitemsDB;

