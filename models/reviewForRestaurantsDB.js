"use strict";
var db=require('../db-connection');
class ReviewForRestaurantsDB{
    getAllReviewForRestaurantsDB(callback){
        var sql="SELECT * from mydb.review_for_restaurants"
        db.query(sql,callback);
    }
    addReview(review,callback){
        var sql="INSERT INTO review_for_restaurants (user_id, restaurant_id, review, rating, datePosted) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [review.getUserId(),review.getRestaurantId(),review.getReview(),review.getRating(),review.getDatePosted()],callback);
    }
    updateRevieww(review,callback){
        var sql="UPDATE review_for_restaurants SET review = ?, rating = ?, datePosted = ? WHERE review_id=?";
        return db.query(sql, [review.getReview(), review.getRating(), review.getDatePosted(),review.getReviewId()],callback);
    }
    deleteReview(reviewID,callback){
        var sql="DELETE from review_for_restaurants WHERE review_id=?";
        db.query(sql,[reviewID],callback);
    }
    calAVGRating(callback){
        var sql='SELECT restaurant_id, AVG(mydb.review_for_restaurants.rating) as avg_rating FROM mydb.review_for_restaurants GROUP BY mydb.review_for_restaurants.restaurant_id';
        db.query(sql,callback)
    }
}
module.exports=ReviewForRestaurantsDB;