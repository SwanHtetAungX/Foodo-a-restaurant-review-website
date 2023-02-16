var ReviewForFnbItemDB=require('../models/reviewForFnbItemsDB');
var ReviewForFnbItem=require('../models/reviewForFnbItems');


var reviewForFnbItemDB=new ReviewForFnbItemDB();
function getAllReviewForFnbItemDB(request,respond){
    reviewForFnbItemDB.getAllReviewForFnbItemDB(function(error,result){
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
    var review= new ReviewForFnbItem(null, request.body.user_id, request.body.food_n_beverage_id, request.body.review, request.body.rating,now.toString());
    reviewForFnbItemDB.addReview(review, function(error,result){
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
    var review=new ReviewForFnbItem(parseInt(request.params.id),request.body.user_id,request.body.restaurant_id,request.body.review,request.body.rating,now.toString());
    reviewForFnbItemDB.updateRevieww(review,function(error,result){
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
    reviewForFnbItemDB.deleteReview(reviewID,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });

}
module.exports={getAllReviewForFnbItemDB,addReview,updateReview,deleteReview};