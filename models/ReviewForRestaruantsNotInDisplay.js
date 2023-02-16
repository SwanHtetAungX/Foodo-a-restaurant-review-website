"use strict"
class ReviewsPostForRestaurants{
    constructor(post_id, user_id, posted_datetime, image, caption, rating_for_posted_restaruant){
        this.post_id=post_id;
        this.user_id=user_id;
        this.posted_datetime=posted_datetime;
        this.image=image;
        this.caption=caption;
        this.rating_for_posted_restaruant=rating_for_posted_restaruant;
    }
    getPostId(){
        return this.post_id;
    }
    getUserId(){
        return this.user_id;
    }
    getPostedDateTime(){
        return this.posted_datetime;
    }
    getImage(){
        return this.image;
    }
    getCaption(){
        return this.caption;
    }
    getRating(){
        return this.rating_for_posted_restaruant;
    }
    setPostId(post_id){
         this.post_id=post_id;
    }
    setUserId(user_id){
        this.user_id=user_id;
    }
    setPostedDateTime(posted_datetime){
        this.posted_datetime=posted_datetime;
    }
    setImage(image){
        this.image=image;
    }
    setCaption(caption){
        this.caption=caption;
    }
    setRating(rating_for_posted_restaruant){
        this.rating=rating_for_posted_restaruant;
    }
}
module.exports=ReviewsPostForRestaurants;