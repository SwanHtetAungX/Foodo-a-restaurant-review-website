"use strict";
class ReactionForPost{
    constructor(reaction_id, user_id, post_id, is_liked, is_disliked){
        this.reaction_id=reaction_id;
        this.user_id=user_id;
        this.post_id=post_id;
        this.is_liked=is_liked;
        this.is_disliked=is_disliked;
    };
    getReactionId(){
        return this.reaction_id;
    }
    getUserId(){
        return this.user_id;
    }
    getPostId(){
        return this.post_id;
    }
    getIs_liked(){
        return this.is_liked;
    }
    getIs_disliked(){
        return this.is_disliked;
    }
    setReactionId(reaction_id){
         this.reaction_id=reaction_id;
    }
    setUserId(user_id){
        this.user_id=user_id;
    }
    setPostId(post_id){
        this.post_id=post_id;
    }
    setIs_liked(is_liked){
        this.is_liked=is_liked;
    }
    setIs_disliked(is_disliked){
        this.is_disliked=is_disliked;
    }
}
module.exports=ReactionForPost;