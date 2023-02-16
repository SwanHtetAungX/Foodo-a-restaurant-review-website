"use strict";
var db=require('../db-connection');
class ReactionForPostDB{
    getReaction(postID,callback){
        var sql="SELECT post_id, SUM(is_liked) as likes, SUM(is_disliked) as dislikes FROM mydb.reaction_for_reviewpost WHERE post_id=?"
        db.query(sql,[postID],callback);
    }
    addReaction(reaction,callback){
        var sql="INSERT INTO reaction_for_reviewpost(reaction_id, user_id , post_id, is_liked, is_disliked) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [reaction.getReactionId(),reaction.getUserId(),reaction.getPostId(),reaction.getIs_liked(),reaction.getIs_disliked()],callback);
    }
    deleteReaction(reactionID,callback){
        var sql="DELETE from reaction_for_reviewpost WHERE reaction_id =?";
        db.query(sql,[reactionID],callback);
    }
}
module.exports=ReactionForPostDB;