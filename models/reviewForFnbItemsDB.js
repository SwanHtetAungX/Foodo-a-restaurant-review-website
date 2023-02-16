"use strict";
var db=require('../db-connection');
class ReviewForFnbItemDB{
    getAllReviewForFnbItemDB(callback){
        var sql="SELECT * from mydb.review_for_foodnbeverage_items"
        db.query(sql,callback);
    }
    addReview(review,callback){
        var sql="INSERT INTO review_for_foodnbeverage_items (user_id, food_n_beverage_id, review, rating, datePosted) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [review.getUserId(),review.getFnbId(),review.getReview(),review.getRating(),review.getDatePosted()],callback);
    }
    updateRevieww(review,callback){
        var sql="UPDATE review_for_foodnbeverage_items SET review = ?, rating = ?, datePosted = ? WHERE review_id=?";
        return db.query(sql, [review.getReview(), review.getRating(), review.getDatePosted(),review.getReviewId()],callback);
    }
    deleteReview(reviewID,callback){
        var sql="DELETE from review_for_foodnbeverage_items WHERE review_id=?";
        db.query(sql,[reviewID],callback);
    }
}
module.exports=ReviewForFnbItemDB;
