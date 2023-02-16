$(document).ready(function(){
    token=sessionStorage.getItem("token")
    var getProfile=new XMLHttpRequest();
    getProfile.open("POST","/getUser",true);
    getProfile.setRequestHeader("Content-Type","application/json")
    getProfile.onload=function(){
    var currrent_user=JSON.parse(getProfile.responseText);
    userID=currrent_user[0].user_id;
    userName=currrent_user[0].username;
    getFnbItemsFood();
    displayFavFnb(userID)
   
    console.log(currrent_user)}
    
    var payload={token:token};
    getProfile.send(JSON.stringify(payload));
})
function displayFavFnb(userID){
    console.log("leeeee",fnbItems_array)
    var favourite_fnb_url="/favfnbitems?user_id="+userID
    var getFavFnb=new XMLHttpRequest();
    getFavFnb.open("GET",favourite_fnb_url,true)
    getFavFnb.onload=function(){
        var fav_fnb_array=JSON.parse(getFavFnb.responseText)
        var favouriteFnb=document.getElementById("favourite")
        console.log(fav_fnb_array)
        
        favouriteFnb.innerHTML="";
        for(var i=0;i<fnbItems_array.length;i++){
            for(var j=0;j<fav_fnb_array.length;j++){
                if(fnbItems_array[i].food_and_beverage_Items_id==fav_fnb_array[j].Food_Beverage_id){
                    console.log("good")
                    var thumbnail=fnbItems_array[i].photo;
                    var items_name=fnbItems_array[i].item_name;
                    var cell='<div style="background-color:#1D1C1C;color:white" class="card col-md-3"><img style="width:150px;margin-left:30px;margin-top:20px" class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                             <div class="card-body">\
                             <img id="comment-icon" src="images/comment-icon.png" alt="" style="width:18px;float:left;padding-top:5px;cursor:pointer;transition: all 0.3s ;margin-right:10px;" data-toggle="modal" data-target="#comment-food-Modal" item="'+i+'" onClick="showFoodComments(this)">\
                             <h5 style="cursor:pointer;color:white" data-toggle="modal" data-target="#fnbitems-modal" class="card-title" item="' +
                             i + '" onClick="showFnbItemsDetails(this)">' + items_name + '</h5></div>\
                             <span class="card-icon-1">\
                            <i syle="color:"#1D1C1C" " class="fa fa-heart" item="' +
                            i + '" onClick="deleteFavFnb(this)"></i>\
                            </span>\
                             </div>'
                   favouriteFnb.insertAdjacentHTML('beforeend',cell);
                }
            }
            
        }
        
    }
    getFavFnb.send();
    
 
}
function deleteFavFnb(element) {
        var favourite_fnb_url="/favfnbitems?user_id="+userID
        var getFavFnb=new XMLHttpRequest();
        getFavFnb.open("GET",favourite_fnb_url,true)
        getFavFnb.onload=function(){
        var fav_fnb_array=JSON.parse(getFavFnb.responseText)
        console.log("leepl",fav_fnb_array)
            var response = confirm("Are you sure you want to Remove this from your favourite list?");
            if (response == true) {
                console.log(fav_fnb_array)
            var item = element.getAttribute("item");
            var food_and_beverage_Items_id = fnbItems_array[item].food_and_beverage_Items_id;
        for(var j=0;j<fav_fnb_array.length;j++){
        if(food_and_beverage_Items_id==fav_fnb_array[j].Food_Beverage_id){
            var Food_Beverage_id = fav_fnb_array[j].Food_Beverage_id;}}
            console.log(Food_Beverage_id)//get the current item
            console.log(userID)
            var deleteFavFnb_url = "/removeFromFavFnb" + "?user_id=" + userID +"&Food_Beverage_id=" +Food_Beverage_id 
            var eraseFavFnb = new XMLHttpRequest();
            eraseFavFnb.open("DELETE", deleteFavFnb_url, true);
            eraseFavFnb.onload = function() {
                console.log("deleted")
                displayFavFnb(userID);
            };
            eraseFavFnb.send();
            }
            }
            getFavFnb.send()}

