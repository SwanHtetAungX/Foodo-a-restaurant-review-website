var express=require("express");
var restaurantsController=require("./controllers/restaurantsController");
var fnbController=require("./controllers/fnbitemsController");
var userinfomationController=require("./controllers/userinformationController");
var reviewForRestaurantsController=require("./controllers/reviewForRestaurantsController");
var reviewForFnbItemsController=require("./controllers/reviewForFnbItemsController");
var emailActivationTokenController=require("./controllers/EmailActivationTokenController");
var forgetPasswordTokenController=require("./controllers/ForgetPasswordTokenController");
var favouriteRestaurantController=require("./controllers/FavouriteRestaurantsController");
var favouriteFnbItemsController=require("./controllers/FavouriteFnbItemsController");
var postreviewForRestaurantNotInDisplayController=require('./controllers/ReviewForRestaurantsNotInDisplayListController');
var reviewPostCommentController=require('./controllers/ReviewPostCommetController');
var reactionForPost=require('./controllers/ReactionController');
var app=new express();
app.use(express.static("./public"))
app.use(express.json())
app.route('/restaurants').get(restaurantsController.getAllRestaurants);
app.route('/fnbitems').get(fnbController.getAllFnBitems);
app.route('/searchFnbitems').post(fnbController.searchFnbItems);
app.route('/userinfo').get(userinfomationController.getUserInformation)
app.route('/userinfo/:id').get(userinfomationController.getAlluserinformation);
app.route('/deleteUser/:id').delete(userinfomationController.deleteUserAccount);
app.route('/addUser').post(userinfomationController.AddUserAccount);
app.route('/login').post(userinfomationController.getLoginUser);
app.route('/checkPassword').post(userinfomationController.checkPassword);
app.route('/getUser').post(userinfomationController.getUser);
app.route('/updateUserinfo/:id').put(userinfomationController.updateUserInformation);
app.route('/restaurantreviews').get(reviewForRestaurantsController.getAllReviewForRestaurantsDB);
app.route('/searchNearestRestaurant').post(restaurantsController.searchNearestRestaurant);
app.route('/searchRestaurant').post(restaurantsController.searchRestaurant);
app.route('/Addrestaurantreviews').post(reviewForRestaurantsController.addReview);
app.route('/Editrestaurantreviews/:id').put(reviewForRestaurantsController.updateReview);
app.route('/Deleterestaurantreviews/:id').delete(reviewForRestaurantsController.deleteReview);
app.route('/fnbitemreviews').get(reviewForFnbItemsController.getAllReviewForFnbItemDB);
app.route('/addFnbitemreviews').post(reviewForFnbItemsController.addReview);
app.route('/editFnbitemreviews/:id').put(reviewForFnbItemsController.updateReview);
app.route('/deleteFnbitemreviews/:id').delete(reviewForFnbItemsController.deleteReview);
app.route('/GenerateAndInsertToken').post(emailActivationTokenController.GenerateUniqueToken);
app.route('/deleteToken').delete(emailActivationTokenController.deleteTheToken);
app.route('/setTheToken').put(emailActivationTokenController.SetTheTokenToExpired);
app.route('/getTheToken').get(emailActivationTokenController.GetTheToken);
app.route('/favrestaurant').get(favouriteRestaurantController.getUserFavouriteRestaurants);
app.route('/addToFavRes').post(favouriteRestaurantController.addFavouriteRestaurants);
app.route('/removeFromFavRes').delete(favouriteRestaurantController.deleteFavouriteRestaurants);
app.route('/favfnbitems').get(favouriteFnbItemsController.getUserFavouriteFnBItems);
app.route('/addToFavFnb').post(favouriteFnbItemsController.addFavouriteFnbItems);
app.route('/removeFromFavFnb').delete(favouriteFnbItemsController.deleteFavouriteFnbItems);
app.route('/post').get(postreviewForRestaurantNotInDisplayController.getAllPostReviews);
app.route('/editPost/:id').put(postreviewForRestaurantNotInDisplayController.editPost);
app.route('/uploadPost').post(postreviewForRestaurantNotInDisplayController.addPost);
app.route('/deletePost/:id').delete(postreviewForRestaurantNotInDisplayController.deletePost);
app.route('/comment').get(reviewPostCommentController.getAllComments);
app.route('/postComment').post(reviewPostCommentController.addComment);
app.route('/editComment/:id').put(reviewPostCommentController.editComment);
app.route('/deleteComment/:id').delete(reviewPostCommentController.deleteComment);
app.route('/GenerateAndInsertResetToken').post(forgetPasswordTokenController.GenerateUniqueToken);
app.route('/deleteResetToken').delete(forgetPasswordTokenController.deleteTheToken);
app.route('/setTheResetToken').put(forgetPasswordTokenController.SetTheTokenToExpired);
app.route('/getTheResetToken').get(forgetPasswordTokenController.GetTheToken);
app.route('/showReaction').get(reactionForPost.getReaction);
app.route('/giveReaction').post(reactionForPost.addReaction);
app.route('/deleteReaction/:id').delete(reactionForPost.deleteReaction);
app.route('/avgrating').get(reviewForRestaurantsController.calAVGRating);
app.listen(8080,"127.0.0.2");
console.log("web server running @ http://127.0.0.2:8080");