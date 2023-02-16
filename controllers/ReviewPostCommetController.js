var ReviewPostCommentDB=require('../models/reviewpostCommentDB');
var ReviewPostComment=require('../models/reviewpostComment');


var reviewPostCommentDB=new ReviewPostCommentDB();
function getAllComments(request,respond){
    reviewPostCommentDB.getAllComments(function(error,result){
        if(error){
            respond.json(error)
        }
        else{
            respond.json(result)
        }

    });


}
function addComment(request,respond){
    var now= new Date();
    var comment= new ReviewPostComment(null, request.body.user_id, request.body.post_id, request.body.comment, now.toString());
    reviewPostCommentDB.addComment(comment, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function editComment(request,respond){
    var now=new Date();
    var comment=new ReviewPostComment(parseInt(request.params.id),request.body.user_id,request.body.post_id,request.body.comment,now.toString());
    reviewPostCommentDB.editComment(comment,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });
    
}
function deleteComment(request,respond){
    var commentID=request.params.id;
    reviewPostCommentDB.deleteComment(commentID,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });

}
module.exports={getAllComments,addComment,editComment,deleteComment};