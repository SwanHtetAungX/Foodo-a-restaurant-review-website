document.addEventListener('DOMContentLoaded',function(){
    const searchInput=document.getElementById("search-query");
    const filterSelect=document.getElementById("search-filter")
    searchInput.addEventListener('keyup',function(){
    const searchTerm=this.value;
    const postalCode=this.value;
    const selectedFilter=filterSelect.value;
    if (selectedFilter=="food"){

        var payload={searchTerm:searchTerm}
    var searchFnb = new XMLHttpRequest();
    searchFnb.open("POST","/searchFnbitems", true);
    searchFnb.setRequestHeader("Content-Type", "application/json");
    searchFnb.onload = function() {
        result=JSON.parse(searchFnb.responseText);
        getFnbItemsFood();
        console.log(result);
        DisplayResults();
    };
  
    searchFnb.send(JSON.stringify(payload));
    }
    if (selectedFilter=="restaurant"){

        var payload={searchTerm:searchTerm}
    var searchRestaurant = new XMLHttpRequest();
    searchRestaurant.open("POST","/searchRestaurant", true);
    searchRestaurant.setRequestHeader("Content-Type", "application/json");
    searchRestaurant.onload = function() {
        console.log(searchRestaurant.responseText)
        result_restaurants=JSON.parse(searchRestaurant.responseText);
        getRestaurants();
        console.log(result_restaurants);
        DisplayRestaurantResults();
    };
  
    searchRestaurant.send(JSON.stringify(payload));
    }
    if (selectedFilter=="location"){

        var payload={postalCode:postalCode}
    var nearestLocation = new XMLHttpRequest();
    nearestLocation.open("POST","/searchNearestRestaurant", true);
    nearestLocation.setRequestHeader("Content-Type", "application/json");
    nearestLocation.onload = function() {
        result_restaurants=JSON.parse(nearestLocation.responseText);
        getRestaurants();
        console.log(result_restaurants);
        DisplayRestaurantResults();
    };
  
    nearestLocation.send(JSON.stringify(payload));
    }

    
});


});
function ShowFnbItemsDetail(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("itemName").textContent = result[item].item_name;
    document.getElementById("itemPhoto").src = result[item].photo;
    document.getElementById("type").textContent = result[item].category;
    document.getElementById("restaurant").textContent=result[item].restaurant_name;
    document.getElementById("price").textContent=result[item].Price;

    
};
function DisplayResults(){
    
    var show_result=document.getElementById("searchResult");
    if (show_result) {
        totalResult=result.length;
        show_result.innerHTML="";
        for (var count=0;count<totalResult;count++){
            var thumbnail=result[count].photo;
                var items_name=result[count].item_name;
                var cell='<div style="background-color:#1D1C1C;color:white" class="card col-md-3">\
                          <img style="width:80%;margin-left:40px;margin-top:20px" class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                          <div class="card-body">\
                          <img id="comment-icon" src="images/comment-icon.png" alt="" style="width:18px;float:left;padding-top:5px;cursor:pointer;transition: all 0.3s ;margin-right:10px;" data-toggle="modal" data-target="#comment-food-Modal" item="'+count+'" onClick="showFoodComments(this)">\
                          <h5 style="cursor:pointer;color:white" data-toggle="modal" data-target="#fnbitems-modal" class="card-title" item="' + count + '" onClick="ShowFnbItemsDetail(this)">' + items_name + '</h5>\
                          </div>\
                          <span class="card-icon">\
                          <i class="fa fa-heart"></i>\
                          </span>\
                          </div>';
                show_result.insertAdjacentHTML('beforeend',cell);
               
        
        }
    }
}
function DisplayRestaurantResults(){
    var show_result=document.getElementById("searchResult");
    if (show_result) {
        totalResult=result_restaurants.length;
        show_result.innerHTML="";
        for (var count=0;count<totalResult;count++){
            var thumbnail=result_restaurants[count].restaurant_image;
            var restaurant_name=result_restaurants[count].name;
            var cell='<div style="background-color:#1D1C1C;color:white" class="card col-md-3"><img style="width:150px;margin-left:50px;margin-top:20px" class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                     <div class="card-body">\
                     <img id="comment-icon" src="images/comment-icon.png" alt="" style="width:18px;float:left;padding-top:5px;cursor:pointer;transition: all 0.3s ;margin-right:10px;"data-toggle="modal" data-target="#comment-restaurant-Modal" item="'+count+'" onClick="showRestaurantComments(this)">\
                     <h5 style="cursor:pointer;color:white" data-toggle="modal" data-target="#restaurant-modal" class="card-title" item="' +
                     count + '" onClick="showRestaurantDetails(this)">' + restaurant_name + '</h5></div>\
                     <span class="card-icon">\
                    <i class="fa fa-heart"></i>\
                    </span>\
                     </div>'
                show_result.insertAdjacentHTML('beforeend',cell);
}}};

function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("restaurantName").textContent = result_restaurants[item].name;
    document.getElementById("restaurantPhoto").src = result_restaurants[item].restaurant_image;
    document.getElementById("typeofRestaurant").textContent = result_restaurants[item].restaurant_type;
    document.getElementById("opHours").textContent=result_restaurants[item].opening_hours;
    document.getElementById("website").textContent=result_restaurants[item].website;
    document.getElementById("phone").textContent=result_restaurants[item].phone_number;
    document.getElementById("email").textContent=result_restaurants[item].email;
    document.getElementById("address").textContent=result_restaurants[item].Address;

    
}
function showFoodComments(element) {
   
    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("review").textContent = "Review for " + result[item].item_name;
    document.getElementById("commentBody").textContent = "";
    for (var i = 0; i < fnb_review_array.length; i++) {
     
    if (fnb_review_array[i].food_n_beverage_id===result[item].food_and_beverage_Items_id) {
        var username = "Unknown User";
        if (user_information_array && user_information_array.length > 0) {
            for (var j = 0; j < user_information_array.length; j++) {
                if (fnb_review_array[i].user_id === user_information_array[j].user_id) {
                    username = user_information_array[j].username;
                            
                        }}
    document.getElementById("emptyComment").innerHTML = "";
    selectedFnbId = result[item].food_and_beverage_Items_id;
    star = "";
    var html = '<div class="text-center" style="width:100%;"> \
    <div class="card"> \
    <div class="card-body"> \
    <p class="card-text" id="rating' + i + '"  style="margin-right:100px">' + fnb_review_array[i].review + "</p> \
    <small style='margin-right:100px'>by " + username + " @ " + fnb_review_array[i].datePosted + "</small> \
    </div> \
    </div> \
    </div>";
    document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);
    var star = "";
    for (var j = 0; j < fnb_review_array[i].rating; j++) {
    console.log(i);
    star += "<img src='images/star.png' style='width:50px' />";
    }
     star += "<i  id='delete-icon' style='padding-left:30px;cursor:pointer;' class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' ></i>";
     star += "<i id='edit-icon' style='padding-left:10px;cursor:pointer;' class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='" + i + "' onClick='editComment(this)' ></i>";
    document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
    }
}}};
function showRestaurantComments(element) {
   
    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("review").textContent = "Review for " + result_restaurants[item].name;
    document.getElementById("commentBody").textContent = "";
    for (var i = 0; i < restaurant_review_array.length; i++) {
     
    if (restaurant_review_array[i].restaurant_id===result_restaurants[item].restaurant_id) {
        var username = "Unknown User";
        if (user_information_array && user_information_array.length > 0) {
            for (var j = 0; j < user_information_array.length; j++) {
                if (restaurant_review_array[i].user_id === user_information_array[j].user_id) {
                    username = user_information_array[j].username;
                            
                        }}
    document.getElementById("emptyComment").innerHTML = "";
    selectedRestaurantId = result_restaurants[item].restaurant_id;
    star = "";
    var html = '<div class="text-center" style="width:100%;"> \
    <div class="card"> \
    <div class="card-body"> \
    <p class="card-text" id="rating' + i + '" >' + restaurant_review_array[i].review + "</p> \
    <small>by " + username + " @ " + restaurant_review_array[i].datePosted + "</small> \
    </div> \
    </div> \
    </div>";
    document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);
    var star = "";
    for (var j = 0; j < restaurant_review_array[i].rating; j++) {
    console.log(i);
    star += "<img src='images/star.png' style='width:40px' />";
    }
     star += "<i  id='delete-icon' style='padding-left:60px;cursor:pointer;' class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteRestaurantComment(this)' ></i>";
     star += "<i id='edit-icon' style='padding-left:10px;cursor:pointer;' class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editRestaurantCommentModal' data-dismiss='modal' item='" + i + "' onClick='editRestaurantComment(this)' ></i>";
    document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
    }
}}}
