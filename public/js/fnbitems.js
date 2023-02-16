function getFnbItemsFood(){
    var request=new XMLHttpRequest();
    request.open('GET',fnbItems_url,true);
    request.onload=function(){
        fnbItems_array=JSON.parse(request.responseText);
        fetchReviews();
        fetchUserInfo();
        loadUser();
        console.log(fnbItems_array)//output to console
        displayFnbItems(typeOfItems)
       
        
    };
    request.send();

}
function loadUser(){
var token=sessionStorage.getItem("token")
var getProfile=new XMLHttpRequest();
getProfile.open("POST","/getUser",true);
getProfile.setRequestHeader("Content-Type","application/json")
getProfile.onload=function(){
var currrent_user=JSON.parse(getProfile.responseText);
userID=currrent_user[0].user_id;
userName=currrent_user[0].username;
console.log(currrent_user)} 
var payload={token:token}
getProfile.send(JSON.stringify(payload));;

}



function displayFnbItems(typeOfItems){
    var asian_food=document.getElementById("asian-food-table");
    var western_food=document.getElementById("western-food-table")
    var fast_food=document.getElementById("fast-food-table")
    //var cold_drink=document.getElementById("cold-drink-table");
    //var hot_drink=document.getElementById("hot-drink-table");
    asian_food.innerHTML="";
    western_food.innerHTML="";
    fast_food.innerHTML="";
     //cold_drink.innerHTML="";
     //hot_drink.innerHTML="";
    totalFnbItems=fnbItems_array.length;
    for (var count=0;count<totalFnbItems;count++){
        if(fnbItems_array[count].category==typeOfItems){
            var thumbnail=fnbItems_array[count].photo;
            var items_name=fnbItems_array[count].item_name;
            var cell='<div style="background-color:#1D1C1C;color:white" class="card col-md-3"><img style="width:150px;margin-left:50px;margin-top:20px" class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                     <div class="card-body">\
                     <img id="comment-icon" src="images/comment-icon.png" alt="" style="width:18px;float:left;padding-top:5px;cursor:pointer;transition: all 0.3s ;margin-right:10px;" data-toggle="modal" data-target="#comment-food-Modal" item="'+count+'" onClick="showFoodComments(this)">\
                     <h5 style="cursor:pointer;color:white" data-toggle="modal" data-target="#fnbitems-modal" class="card-title" item="' +
                     count + '" onClick="showFnbItemsDetails(this)">' + items_name + '</h5></div>\
                     <span class="card-icon">\
                    <i class="fa fa-heart" id="fav-btn'+count+'" style="cursor:pointer;" item="' +
                    count + '" onClick="addToFavFnb(this)"></i>\
                    </span>\
                     </div>'
            fast_food.insertAdjacentHTML('beforeend',cell);
            
        }
        if(fnbItems_array[count].category=="western"){
            var thumbnail=fnbItems_array[count].photo;
            var items_name=fnbItems_array[count].item_name;
            var cell='<div style="background-color:#1D1C1C;color:white" class="card col-md-3"><img style="width:150px;margin-left:50px;margin-top:20px" class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                     <div class="card-body">\
                     <img id="comment-icon" src="images/comment-icon.png" alt="" style="width:18px;float:left;padding-top:5px;cursor:pointer;transition: all 0.3s ;margin-right:10px;" data-toggle="modal" data-target="#comment-food-Modal" item="'+count+'" onClick="showFoodComments(this)">\
                     <h5 style="cursor:pointer;color:white; " data-toggle="modal" data-target="#fnbitems-modal" class="card-title" item="' +
                     count + '" onClick="showFnbItemsDetails(this)">' + items_name + '</h5></div>\
                     <span class="card-icon">\
                    <i class="fa fa-heart" id="fav-btn'+count+'" style="cursor:pointer;"  item="' +
                    count + '" onClick="addToFavFnb(this)"></i>\
                    </span>\
                     </div>'
            western_food.insertAdjacentHTML('beforeend',cell);
            
        }
        if(fnbItems_array[count].category=="asian"){
            var thumbnail=fnbItems_array[count].photo;
            var items_name=fnbItems_array[count].item_name;
            var cell='<div style="background-color:#1D1C1C;color:white" class="card col-md-3"><img style="width:150px;margin-left:50px;margin-top:20px" class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                     <div class="card-body">\
                     <img id="comment-icon" src="images/comment-icon.png" alt="" style="width:18px;float:left;padding-top:5px;cursor:pointer;transition: all 0.3s ;margin-right:10px;" data-toggle="modal" data-target="#comment-food-Modal" item="'+count+'" onClick="showFoodComments(this)">\
                     <h5 style="cursor:pointer;color:white" data-toggle="modal" data-target="#fnbitems-modal" class="card-title" item="' +
                     count + '" onClick="showFnbItemsDetails(this)">' + items_name + '</h5></div>\
                     <span class="card-icon">\
                    <i class="fa fa-heart" id="fav-btn'+count+'" style="cursor:pointer;" item="' +
                    count + '" onClick="addToFavFnb(this)"></i>\
                    </span>\
                     </div>'
            asian_food.insertAdjacentHTML('beforeend',cell);
            
        }
      
        
    }
}
function showFnbItemsDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("itemName").textContent = fnbItems_array[item].item_name;
    document.getElementById("itemPhoto").src = fnbItems_array[item].photo;
    document.getElementById("type").textContent = fnbItems_array[item].category;
    document.getElementById("restaurant").textContent=fnbItems_array[item].restaurant_name;
    document.getElementById("price").textContent=fnbItems_array[item].Price;

    
}
function addToFavFnb(element){
            loadUser();
            var item=element.getAttribute("item");
            currentIndex=item;
            currentBtn="fav-btn"+item
            console.log(currentBtn)
            document.getElementById(currentBtn).style.color="#F8B525"
            var fav_fnb=new Object();
            fav_fnb.user_id=userID;
            fav_fnb.Food_Beverage_id=fnbItems_array[item].food_and_beverage_Items_id;
            var addFavFnb=new XMLHttpRequest();
            addFavFnb.open("POST","/addToFavFnb",true);
            addFavFnb.setRequestHeader("Content-Type","application/json")
            addFavFnb.onload=function(){
                alert("Added "+fnbItems_array[item].item_name+" to favourite list")
                console.log("Added Successfully")
         
            }
            addFavFnb.send(JSON.stringify(fav_fnb))
            
          
    }



    
    

    
 


 
    
 


