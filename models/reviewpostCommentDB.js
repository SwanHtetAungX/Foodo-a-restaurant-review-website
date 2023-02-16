"use strict";
var db=require('../db-connection');
class ReviewPostCommentsDB{
    getAllComments(callback){
        var sql="SELECT * from mydb.reviewpost_comment"
        db.query(sql,callback);
    }
    addComment(comment,callback){
        var sql="INSERT INTO reviewpost_comment (comment_id, user_id , post_id, comment, datePosted) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [comment.getCommentId(),comment.getUserId(),comment.getPostId(),comment.getComment(),comment.getDatePosted()],callback);
    }
    editComment(comment,callback){
        var sql="UPDATE reviewpost_comment SET comment = ?, datePosted = ? WHERE comment_id=?";
        return db.query(sql, [comment.getComment(), comment.getDatePosted(), comment.getCommentId()],callback);
    }
    deleteComment(commentID,callback){
        var sql="DELETE from reviewpost_comment WHERE comment_id=?";
        db.query(sql,[commentID],callback);
    }
}
module.exports=ReviewPostCommentsDB;