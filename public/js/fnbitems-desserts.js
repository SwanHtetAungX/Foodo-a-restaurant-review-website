function getFnbItemsDessert(){
    var request=new XMLHttpRequest();
    request.open('GET',fnbItems_url,true);
    request.onload=function(){
        fnbItems_array=JSON.parse(request.responseText);
        fetchReviews();
        fetchUserInfo();
        console.log(fnbItems_array)//output to console
        displayFnbItemsDessert();
        loadUser();
        
    };
    request.send();

}
function displayFnbItemsDessert(){
    var dessert=document.getElementById("dessert-table");
    dessert.innerHTML="";
    totalFnbItems=fnbItems_array.length;
 
    for (var count=0;count<totalFnbItems;count++){
        if(fnbItems_array[count].category=="dessert"){
            var thumbnail=fnbItems_array[count].photo;
            var items_name=fnbItems_array[count].item_name;
            var cell='<div style="background-color:#1D1C1C;color:white" class="card col-md-3"><img style="width:150px;margin-left:50px;margin-top:20px" class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                     <div class="card-body">\
                     <img id="comment-icon" src="images/comment-icon.png" alt="" style="width:18px;float:left;padding-top:5px;cursor:pointer;transition: all 0.3s ;margin-right:10px;" data-toggle="modal" data-target="#comment-food-Modal-1" item="'+count+'" onClick="showFoodComments(this)">\
                     <h5 style="padding-left:30px;cursor:pointer;color:white" data-toggle="modal" data-target="#fnbitems-modal-2" class="card-title" item="' +
                     count + '" onClick="showFnbItemsDetails(this)">' + items_name + '</h5></div>\
                     <span class="card-icon">\
                     <i class="fa fa-heart" id="fav-btn'+count+'" style="cursor:pointer;" item="' +
                     count + '" onClick="addToFavFnb(this)"></i>\
                    </span>\
                     </div>';
            dessert.insertAdjacentHTML('beforeend',cell);
            
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