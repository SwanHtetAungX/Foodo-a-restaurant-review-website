"use strict"
class ReviewsForFnbItems{
    constructor(review_id, user_id, food_n_beverage_id, review, rating, datePosted){
        this.review_id=review_id;
        this.user_id=user_id;
        this.food_n_beverage_id=food_n_beverage_id;
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
    getFnbId(){
        return this.food_n_beverage_id;
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
    setFnbId(food_n_beverage_id){
        this.food_n_beverage_id=food_n_beverage_id;
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
module.exports=ReviewsForFnbItems;