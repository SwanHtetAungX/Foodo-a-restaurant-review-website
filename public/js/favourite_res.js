$(document).ready(function(){
    
    var getProfile=new XMLHttpRequest();
    getProfile.open("POST","/getUser",true);
    getProfile.setRequestHeader("Content-Type","application/json")
    getProfile.onload=function(){
    var currrent_user=JSON.parse(getProfile.responseText);
    userID=currrent_user[0].user_id;
    userName=currrent_user[0].username;
    getFnbItemsFood();
    getRestaurants();
    displayFavRes(userID)
   
    console.log(currrent_user)}
    
    var payload={token:token};
    getProfile.send(JSON.stringify(payload));
})
function displayFavRes(userID){
    var favourite_res_url="/favrestaurant?user_id="+userID
    var getFavRes=new XMLHttpRequest();
    getFavRes.open("GET",favourite_res_url,true)
    getFavRes.onload=function(){
        var fav_res_array=JSON.parse(getFavRes.responseText)
        var favouriteRes=document.getElementById("favourite-res")
        console.log("yolo",fav_res_array)
        
        favouriteRes.innerHTML="";
        for(var i=0;i<restaurant_array.length;i++){
            for(var j=0;j<fav_res_array.length;j++){
                if(restaurant_array[i].restaurant_id==fav_res_array[j].restaurant_id){
                    console.log("good")
                    var thumbnail=restaurant_array[i].restaurant_image;
                    var items_name=restaurant_array[i].name;
                    var cell='<div style="background-color:#1D1C1C;color:white" class="card col-md-3"><img style="width:150px;margin-left:30px;margin-top:20px" class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                             <div class="card-body">\
                             <img id="comment-icon" src="images/comment-icon.png" alt="" style="width:18px;float:left;padding-top:5px;cursor:pointer;transition: all 0.3s ;margin-right:10px;" data-toggle="modal" data-target="#comment-food-Modal" item="'+i+'" onClick="showFoodComments(this)">\
                             <h5 style="cursor:pointer;color:white" data-toggle="modal" data-target="#fnbitems-modal" class="card-title" item="' +
                             i + '" onClick="showFnbItemsDetails(this)">' + items_name + '</h5></div>\
                             <span class="card-icon-1">\
                            <i syle="color:"#1D1C1C" " class="fa fa-heart" item="' +
                            i + '" onClick="deleteFavRes(this)"></i>\
                            </span>\
                             </div>'
                   favouriteRes.insertAdjacentHTML('beforeend',cell);
                }
            }
            
        }
        
    }
    getFavRes.send();
    
 
}
function deleteFavRes(element) {
        var favourite_res_url="/favrestaurant?user_id="+userID
        var getFavRes=new XMLHttpRequest();
        getFavRes.open("GET",favourite_res_url,true)
        getFavRes.onload=function(){
        var fav_res_array=JSON.parse(getFavRes.responseText)
        console.log("leepl",fav_res_array)
            var response = confirm("Are you sure you want to Remove this from your favourite list?");
            if (response == true) {
                console.log(fav_res_array)
            var item = element.getAttribute("item");
            var restaurant_id = restaurant_array[item].restaurant_id;
        for(var j=0;j<fav_res_array.length;j++){
        if(restaurant_id==fav_res_array[j].restaurant_id){
            var restaurant_id = fav_res_array[j].restaurant_id;}}
            console.log(restaurant_id)//get the current item
            console.log(userID)
            var deleteFavRes_url = "/removeFromFavRes" + "?user_id=" + userID +"&restaurant_id=" +restaurant_id;
            var eraseFavRes = new XMLHttpRequest();
            eraseFavRes.open("DELETE", deleteFavRes_url, true);
            eraseFavRes.onload = function() {
                console.log("deleted")
                displayFavRes(userID);
            };
            eraseFavRes.send();
            }
            }
            getFavRes.send()}

