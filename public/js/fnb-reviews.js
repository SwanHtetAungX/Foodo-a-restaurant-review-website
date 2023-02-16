
function fetchReviews() {
    var request = new XMLHttpRequest();
    request.open('GET',fnb_review_url, true);
    request.onload = function() {
    loadUser();
    fnb_review_array = JSON.parse(request.responseText);
    console.log(fnb_review_array);
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
    

function newComment() {
    //Initialise each HTML input elements in the modal window with default value.
    rating = 0;
    document.getElementById("userComments").value = "";
    document.getElementById("nickname").value = userName;
        }
function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var stars = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    // This is another way of writing 'for' loop, which initialises the
    // popcorn images to use black and white.
    for (let star of stars){
        star.setAttribute("src", starBWImage);}
            changeStarImage(num, classTarget);
            }
function changeStarImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
        document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
        rating = 1;
        break;
        case 2:
        document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
        document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
        rating = 2;
        break;
        case 3:
        document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
        document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
        document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
        rating = 3;
        break;
        case 4:
        document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
        document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
        document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
        document.querySelector(classTarget + "[value='4']").setAttribute("src", starImage);
        rating = 4;
        break;
        case 5:
        document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
        document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
        document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
        document.querySelector(classTarget + "[value='4']").setAttribute("src", starImage);
        document.querySelector(classTarget + "[value='5']").setAttribute("src", starImage);
        rating = 5;
        break;
        }
                }
function addComment() {
    var reviewsForFnbItems = new Object();
    reviewsForFnbItems.food_n_beverage_id = fnbItems_array[currentIndex].food_and_beverage_Items_id; // Movie ID is required by server to create new comment
    //reviewsForFnbItems.movie = movie_array[currentIndex].title; // Movie title is required by server to create new comment
    reviewsForFnbItems.user_id = userID// Value from HTML input text
    reviewsForFnbItems.review = document.getElementById("userComments").value; // Value from HTML input text
    reviewsForFnbItems.datePosted = null; // Change the datePosted to null instead of taking the timestamp on the client side;
    reviewsForFnbItems.rating = rating;
    var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment
    postComment.open("POST","/addFnbitemreviews", true); //Use the HTTP POST method to send data to server
    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload = function() {
    console.log("new comment sent");
    fetchReviews(); // fetch all comments again so that the web page can have updated comments.
    };
            // Convert the data in Comment object to JSON format before sending to the server.
            postComment.send(JSON.stringify(reviewsForFnbItems));
            }
   
function showFoodComments(element) {

    

    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("review").textContent = "Review for " + fnbItems_array[item].item_name;
    document.getElementById("commentBody").textContent = "";
    for (var i = 0; i < fnb_review_array.length; i++) {
        
        
    if (fnb_review_array[i].food_n_beverage_id===fnbItems_array[item].food_and_beverage_Items_id) {
        var username = "Unknown User";
        if (user_information_array && user_information_array.length > 0) {
            for (var j = 0; j < user_information_array.length; j++) {
                if (fnb_review_array[i].user_id === user_information_array[j].user_id) {
                    username = user_information_array[j].username;
                            
                        }}
    document.getElementById("emptyComment").innerHTML = "";
    selectedFnbId = fnbItems_array[item].food_and_beverage_Items_id;
    star = "";
    var html = '<div class="text-center" style="width:100%;"> \
    <div class="card"> \
    <div class="card-body"> \
    <p class="card-text" id="rating' + i + '"  >' + fnb_review_array[i].review + "</p> \
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
    if(fnb_review_array[i].user_id==userID){
        star += "<i  id='delete-icon' style='padding-left:30px;cursor:pointer;display=block' class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' ></i>";
        star += "<i id='edit-icon' style='padding-left:10px;cursor:pointer;display=block' class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='" + i + "' onClick='editComment(this)' ></i>";
        
    }
     
    document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
    }
}}};
function editComment(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("editnickname").value = userName;
    document.getElementById("edituserComments").value = fnb_review_array[item].review;
    console.log(fnb_review_array[item].rating);
    displayColorStar('editpop', fnb_review_array[item].rating);
    };
function displayColorStar(classname, num) {
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of pop) {
    p.setAttribute("src", starBWImage);
    }
    changeStarImage(num, classTarget);
        };
function updateComment() {
    var response = confirm("Are you sure you want to update this comment?");
    if (response == true) {
    var edit_comment_url = "/editFnbitemreviews" + "/" + fnb_review_array[currentIndex].Review_id;
    var updateComment = new XMLHttpRequest(); // new HttpRequest instance to send request to server
    updateComment.open("PUT", edit_comment_url, true); //The HTTP method called 'PUT' is used here as we are updating data
    updateComment.setRequestHeader("Content-Type", "application/json");
    fnb_review_array[currentIndex].user_id = document.getElementById("editnickname").value;
    fnb_review_array[currentIndex].review = document.getElementById("edituserComments").value;
    fnb_review_array[currentIndex].rating = rating;
    updateComment.onload = function() {
    fetchReviews();};
    updateComment.send(JSON.stringify(fnb_review_array[currentIndex]));
            }
            }
function deleteComment(element) {
    var response = confirm("Are you sure you want to delete this comment?");
    if (response == true) {
    var item = element.getAttribute("item"); //get the current item
    var delete_comment_url = "/deleteFnbitemreviews" + "/" + fnb_review_array[item].Review_id;
    var eraseComment = new XMLHttpRequest();
    eraseComment.open("DELETE", delete_comment_url, true);
    eraseComment.onload = function() {
    fetchReviews();
    };
    eraseComment.send();
    }
    } 
             