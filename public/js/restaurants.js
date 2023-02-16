function getRestaurants(){
    var request=new XMLHttpRequest();
    request.open('GET',restaurant_url,true);
    request.onload=function(){
        restaurant_array=JSON.parse(request.responseText);
        fetchRestanurantReviews();
        fetchUserInfo();
        loadUser();
        console.log(restaurant_array)//output to console
        displayRestaurant()
        
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
function displayRestaurant(){
    
    var restaurant_table=document.getElementById("all-restaurant-table")
    var western_restaurant_table=document.getElementById("western-restaurant-table");
    var asian_restaurant_table=document.getElementById("asian-restaurant-table");
    var fast_food_restaurant_table=document.getElementById("fast-food-restaurant-table");
    var cafe_table=document.getElementById("cafe-table")
    restaurant_table.innerHTML="";
    western_restaurant_table.innerHTML="";
    asian_restaurant_table.innerHTML="";
    fast_food_restaurant_table.innerHTML="";
    cafe_table.innerHTML="";
    totalRestaurants=restaurant_array.length;
    for (var count=0;count<totalRestaurants;count++){
            var thumbnail=restaurant_array[count].restaurant_image;
            var restaurant_name=restaurant_array[count].name;
            var cell='<div style="background-color:#1D1C1C;color:white" class="card col-md-3"><img style="width:150px;margin-left:50px;margin-top:20px" class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                     <div class="card-body">\
                     <img id="comment-icon" src="images/comment-icon.png" alt="" style="width:18px;float:left;padding-top:5px;cursor:pointer;transition: all 0.3s ;margin-right:10px;"data-toggle="modal" data-target="#comment-restaurant-Modal" item="'+count+'" onClick="showRestaurantComments(this)">\
                     <h5 style="cursor:pointer;color:white" data-toggle="modal" data-target="#restaurant-modal" class="card-title" item="' +
                     count + '" onClick="showRestaurantDetails(this)">' + restaurant_name + '</h5></div>\
                     <span class="card-icon">\
                     <i class="fa fa-heart" id="fav-res-btn'+count+'" style="cursor:pointer;" item="' +
                     count + '" onClick="addToFavRes(this)"></i>\
                    </span>\
                     </div>'
            restaurant_table.insertAdjacentHTML('beforeend',cell);
            
            if(restaurant_array[count].restaurant_type=="Western"){
                var thumbnail=restaurant_array[count].restaurant_image;
                var restaurant_name=restaurant_array[count].name;
                var cell='<div style="background-color:#1D1C1C;color:white" class="card col-md-3"><img style="width:150px;margin-left:50px;margin-top:20px" class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                        <div class="card-body">\
                        <img id="comment-icon" src="images/comment-icon.png" alt="" style="width:18px;float:left;padding-top:5px;cursor:pointer;transition: all 0.3s ;margin-right:10px;" data-toggle="modal" data-target="#comment-restaurant-Modal" item="'+count+'" onClick="showRestaurantComments(this)">\
                        <h5 style="cursor:pointer;color:white" data-toggle="modal" data-target="#restaurant-modal" class="card-title" item="' +
                        count + '" onClick="showRestaurantDetails(this)">' + restaurant_name + '</h5></div>\
                        <span class="card-icon">\
                        <i class="fa fa-heart" id="fav-res-btn'+count+'" style="cursor:pointer;" item="' +
                     count + '" onClick="addToFavRes(this)"></i>\
                        </span>\
                        </div>'
            western_restaurant_table.insertAdjacentHTML('beforeend',cell);
      
        
    }       if(restaurant_array[count].restaurant_type=="Asian"){
                var thumbnail=restaurant_array[count].restaurant_image;
                var restaurant_name=restaurant_array[count].name;
                var cell='<div style="background-color:#1D1C1C;color:white" class="card col-md-3"><img style="width:150px;margin-left:50px;margin-top:20px" class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                    <div class="card-body">\
                    <img id="comment-icon" src="images/comment-icon.png" alt="" style="width:18px;float:left;padding-top:5px;cursor:pointer;transition: all 0.3s ;margin-right:10px;" data-toggle="modal" data-target="#comment-restaurant-Modal" item="'+count+'" onClick="showRestaurantComments(this)">\
                    <h5 style="cursor:pointer;color:white" data-toggle="modal" data-target="#restaurant-modal" class="card-title" item="' +
                    count + '" onClick="showRestaurantDetails(this)">' + restaurant_name + '</h5></div>\
                    <span class="card-icon">\
                    <i class="fa fa-heart" id="fav-res-btn'+count+'" style="cursor:pointer;" item="' +
                     count + '" onClick="addToFavRes(this)"></i>\
                    </span>\
                    </div>'
                asian_restaurant_table.insertAdjacentHTML('beforeend',cell);


}
            if(restaurant_array[count].restaurant_type=="Fast Food"){
                var thumbnail=restaurant_array[count].restaurant_image;
                var restaurant_name=restaurant_array[count].name;
                 var cell='<div style="background-color:#1D1C1C;color:white" class="card col-md-3"><img style="width:150px;margin-left:50px;margin-top:20px" class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                <div class="card-body">\
                <img id="comment-icon" src="images/comment-icon.png" alt="" style="width:18px;float:left;padding-top:5px;cursor:pointer;transition: all 0.3s ;margin-right:10px;" data-toggle="modal"  data-target="#comment-restaurant-Modal" item="'+count+'" onClick="showRestaurantComments(this)">\
                <h5 style="cursor:pointer;color:white" data-toggle="modal" data-target="#restaurant-modal" class="card-title" item="' +
                count + '" onClick="showRestaurantDetails(this)">' + restaurant_name + '</h5></div>\
                <span class="card-icon">\
                <i class="fa fa-heart"></i>\
                </span>\
                </div>'
                fast_food_restaurant_table.insertAdjacentHTML('beforeend',cell);


}
            if(restaurant_array[count].restaurant_type=="Cafe"){
                var thumbnail=restaurant_array[count].restaurant_image;
                var restaurant_name=restaurant_array[count].name;
                var cell='<div style="background-color:#1D1C1C;color:white" class="card col-md-3"><img style="width:150px;margin-left:50px;margin-top:20px" class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                <div class="card-body">\
                <img id="comment-icon" src="images/comment-icon.png" alt="" style="width:18px;float:left;padding-top:5px;cursor:pointer;transition: all 0.3s ;margin-right:10px;" data-toggle="modal"  data-target="#comment-restaurant-Modal" item="'+count+'" onClick="showRestaurantComments(this)">\
                <h5 style="cursor:pointer;color:white" data-toggle="modal" data-target="#restaurant-modal" class="card-title" item="' +
                count + '" onClick="showRestaurantDetails(this)">' + restaurant_name + '</h5></div>\
                <span class="card-icon">\
                <i class="fa fa-heart"></i>\
                </span>\
                </div>'
                cafe_table.insertAdjacentHTML('beforeend',cell);


}
      
        
    }
        
}
function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("restaurantName").textContent = restaurant_array[item].name;
    document.getElementById("restaurantPhoto").src = restaurant_array[item].restaurant_image;
    document.getElementById("typeofRestaurant").textContent = restaurant_array[item].restaurant_type;
    document.getElementById("opHours").textContent=restaurant_array[item].opening_hours;
    document.getElementById("website").textContent=restaurant_array[item].website;
    document.getElementById("website").href=restaurant_array[item].website;
    document.getElementById("phone").textContent=restaurant_array[item].phone_number;
    document.getElementById("email").textContent=restaurant_array[item].email;
    document.getElementById("address").textContent=restaurant_array[item].Address;

    
}
function addToFavRes(element){
    loadUser();
    var item=element.getAttribute("item");
    currentIndex=item;
    currentBtn="fav-res-btn"+item
    console.log(currentBtn)
    document.getElementById(currentBtn).style.color="#F8B525"
    var fav_res=new Object();
    fav_res.user_id=userID;
    fav_res.restaurant_id=restaurant_array[item].restaurant_id;
    var addFavRes=new XMLHttpRequest();
    addFavRes.open("POST","/addToFavRes",true);
    addFavRes.setRequestHeader("Content-Type","application/json")
    addFavRes.onload=function(){
        alert("Added "+restaurant_array[item].name+" to favourite list")
        console.log("Added Successfully")
 
    }
    addFavRes.send(JSON.stringify(fav_res))
    
  
}

