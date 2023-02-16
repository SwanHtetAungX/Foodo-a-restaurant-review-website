var ReactionForPostDB=require('../models/ReactionDB');
var Reaction=require('../models/Reaction');


var reactionForPostDB=new ReactionForPostDB();
function getReaction(request,respond){
    var postID=request.query.post_id
    reactionForPostDB.getReaction(postID,function(error,result){
        if(error){
            respond.json(error)
        }
        else{
            respond.json(result)
        }

    });


}
function addReaction(request,respond){
    var reaction= new Reaction(null, request.body.user_id, request.body.post_id, request.body.is_liked, request.body.is_disliked);
    reactionForPostDB.addReaction(reaction, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteReaction(request,respond){
    var reactionID=request.params.id;
    reactionForPostDB.deleteReaction(reactionID,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });

}
module.exports={getReaction,addReaction,deleteReaction};