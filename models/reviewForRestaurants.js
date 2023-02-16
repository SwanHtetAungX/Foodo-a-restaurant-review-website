"use strict"
class ReviewsForRestaurant{
    constructor(review_id, user_id, restaurant_id, review, rating, datePosted){
        this.review_id=review_id;
        this.user_id=user_id;
        this.restaurant_id=restaurant_id;
        this.review=review;
        this.rating=rating;
        this.datePosted=datePosted;
    }
    getReviewId(){
        return this.review_id;
    }
    getUserId(){
        return this.user_id;
    }
    getRestaurantId(){
        return this.restaurant_id;
    }
    getReview(){
        return this.review;
    }
    getRating(){
        return this.rating;
    }
    getDatePosted(){
        return this.datePosted;
    }
    setReviewId(review_id){
         this.review_id=review_id;
    }
    setUserId(user_id){
        this.user_id=user_id;
    }
    setRestaurantId(restaurant_id){
        this.restaurant_id=restaurant_id;
    }
    setReview(review){
        this.review=review;
    }
    setRating(rating){
        this.rating=rating;
    }
    setDatePosted(datePosted){
        this.datePosted=datePosted;
    }
}
module.exports=ReviewsForRestaurant;