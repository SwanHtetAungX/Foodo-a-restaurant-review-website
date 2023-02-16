"use strict";
var db=require('../db-connection');
class ReviewForRestaurantNotInDisplayDB{
    getAllPostReveiws(callback){
        var sql="SELECT * from mydb.post_review_for_restaurants_not_in_displaylist"
        db.query(sql,callback);
    }
    addPost(post,callback){
        var sql="INSERT INTO post_review_for_restaurants_not_in_displaylist (post_id, user_id, posted_datetime, image, caption, rating_for_posted_restaurant) VALUES (?, ?, ?, ?, ?, ?)";
        db.query(sql, [post.getPostId(),post.getUserId(),post.getPostedDateTime(),post.getImage(),post.getCaption(),post.getRating()],callback);
    }
    editPost(post,callback){
        var sql="UPDATE post_review_for_restaurants_not_in_displaylist SET posted_datetime = ?, image = ?, caption = ? , rating_for_posted_restaurant = ? WHERE post_id= ?";
        return db.query(sql, [post.getPostedDateTime(),post.getImage(),post.getCaption(),post.getRating(),post.getPostId()],callback);
    }
    deletePost(postID,callback){
        var sql="DELETE from post_review_for_restaurants_not_in_displaylist WHERE post_id=?";
        db.query(sql,[postID],callback);
    }
}
module.exports=ReviewForRestaurantNotInDisplayDB;