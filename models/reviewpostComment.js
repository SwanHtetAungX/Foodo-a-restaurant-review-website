"use strict";
class ReviewPostComments{
    constructor(comment_id, user_id, post_id, comment, datePosted){
        this.comment_id=comment_id;
        this.user_id=user_id;
        this.post_id=post_id;
        this.comment=comment;
        this.datePosted=datePosted;
    };
    getCommentId(){
        return this.comment_id;
    }
    getUserId(){
        return this.user_id;
    }
    getPostId(){
        return this.post_id;
    }
    getComment(){
        return this.comment;
    }
    getDatePosted(){
        return this.datePosted;
    }
    setCommentId(comment_id){
         this.comment_id=comment_id;
    }
    setUserId(user_id){
        this.user_id=user_id;
    }
    setPostId(post_id){
        this.post_id=post_id;
    }
    setComment(comment){
        this.comment=comment;
    }
    setDatePosted(datePosted){
        this.datePosted=datePosted;
    }
}
module.exports=ReviewPostComments;