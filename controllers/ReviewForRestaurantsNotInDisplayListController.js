var ReviewForRestaurantsNotInDisplayDB=require('../models/ReviewForRestaruantsNotInDisplayDB');
var ReviewForRestaurantsNotInDisplay=require('../models/ReviewForRestaruantsNotInDisplay');


var reviewForRestaurantsNotInDisplayDB=new ReviewForRestaurantsNotInDisplayDB();
function getAllPostReviews(request,respond){
    reviewForRestaurantsNotInDisplayDB.getAllPostReveiws(function(error,result){
        if(error){
            respond.json(error)
        }
        else{
            respond.json(result)
        }

    });


}
function addPost(request,respond){
    var now= new Date();
    var post= new ReviewForRestaurantsNotInDisplay(null, request.body.user_id, now.toString(), request.body.image, request.body.caption,request.body.rating_for_posted_restaurant);
    reviewForRestaurantsNotInDisplayDB.addPost(post, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function editPost(request,respond){
    var now=new Date();
    var post=new ReviewForRestaurantsNotInDisplay(parseInt(request.params.id),request.body.user_id,now.toString(),request.body.image,request.body.caption,request.body.rating_for_posted_restaurant);
    reviewForRestaurantsNotInDisplayDB.editPost(post,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });
    
}
function deletePost(request,respond){
    var postID=request.params.id;
    reviewForRestaurantsNotInDisplayDB.deletePost(postID,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });

}
module.exports={getAllPostReviews,addPost,editPost,deletePost};