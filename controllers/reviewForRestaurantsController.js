var ReviewForRestaurantsDB=require('../models/reviewForRestaurantsDB');
var ReviewForRestaurants=require('../models/reviewForRestaurants');


var reviewForRestaurantsDB=new ReviewForRestaurantsDB();
function getAllReviewForRestaurantsDB(request,respond){
    reviewForRestaurantsDB.getAllReviewForRestaurantsDB(function(error,result){
        if(error){
            respond.json(error)
        }
        else{
            respond.json(result)
        }

    });


}
function addReview(request,respond){
    var now= new Date();
    var review= new ReviewForRestaurants(null, request.body.user_id, request.body.restaurant_id, request.body.review, request.body.rating,now.toString());
    reviewForRestaurantsDB.addReview(review, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function updateReview(request,respond){
    var now=new Date();
    var review=new ReviewForRestaurants(parseInt(request.params.id),request.body.user_id,request.body.restaurant_id,request.body.review,request.body.rating,now.toString());
    reviewForRestaurantsDB.updateRevieww(review,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });
    
}
function deleteReview(request,respond){
    var reviewID=request.params.id;
    reviewForRestaurantsDB.deleteReview(reviewID,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });

}
function calAVGRating(request,respond){
    reviewForRestaurantsDB.calAVGRating(function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })

}


module.exports={getAllReviewForRestaurantsDB,addReview,updateReview,deleteReview,calAVGRating};