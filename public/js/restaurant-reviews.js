function fetchRestanurantReviews() {
    var request = new XMLHttpRequest();
    request.open('GET',restaurant_review_url, true);
    //This command starts the calling of the comments api
    request.onload = function() {
    loadUser();
    restaurant_review_array = JSON.parse(request.responseText);
    console.log(restaurant_review_array);
    };
    request.send();
    }

    function newRestaurantComment() {
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
    function addRestaurantComment() {
        var reviewsForRestaurant = new Object();
        reviewsForRestaurant.restaurant_id = restaurant_array[currentIndex].restaurant_id; 
        reviewsForRestaurant.name = restaurant_array[currentIndex].name;
        reviewsForRestaurant.user_id = userID; // Value from HTML input text
        reviewsForRestaurant.review = document.getElementById("userComments").value; // Value from HTML input text
        reviewsForRestaurant.datePosted = null; // Change the datePosted to null instead of taking the timestamp on the client side;
        reviewsForRestaurant.rating = rating;
        var postRestaurantComment = new XMLHttpRequest(); // new HttpRequest instance to send comment
        postRestaurantComment.open("POST",'/Addrestaurantreviews', true); //Use the HTTP POST method to send data to server
        postRestaurantComment.setRequestHeader("Content-Type", "application/json");
        postRestaurantComment.onload = function() {
        console.log("new comment sent");
        fetchRestanurantReviews(); // fetch all comments again so that the web page can have updated comments.
        };
                // Convert the data in Comment object to JSON format before sending to the server.
                postRestaurantComment.send(JSON.stringify(reviewsForRestaurant));
            alert("uploaded successfully")}
   
function showRestaurantComments(element) {
   
    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("review").textContent = "Review for " + restaurant_array[item].name;
    document.getElementById("commentBody").textContent = "";
    for (var i = 0; i < restaurant_review_array.length; i++) {
     
    if (restaurant_review_array[i].restaurant_id===restaurant_array[item].restaurant_id) {
        var username = "Unknown User";
        if (user_information_array && user_information_array.length > 0) {
            for (var j = 0; j < user_information_array.length; j++) {
                if (restaurant_review_array[i].user_id === user_information_array[j].user_id) {
                    username = user_information_array[j].username;
                            
                        }}
    document.getElementById("emptyComment").innerHTML = "";
    selectedRestaurantId = restaurant_array[item].restaurant_id;
    star = "";
    var html = '<div class="text-center" style="width:100%;"> \
    <div class="card"> \
    <div class="card-body"> \
    <p class="card-text" id="rating' + i + '" >' + restaurant_review_array[i].review + "</p> \
    <small style='margin-right:100px'>by " + username + " @ " + restaurant_review_array[i].datePosted + "</small> \
    </div> \
    </div> \
    </div>";
    document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);
    var star = "";
    for (var j = 0; j < restaurant_review_array[i].rating; j++) {
    console.log(i);
    star += "<img src='images/star.png' style='width:40px' />";
    }
    if(restaurant_review_array[i].user_id==userID){
     star += "<i  id='delete-icon' style='padding-left:30px;cursor:pointer;' class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteRestaurantComment(this)' ></i>";
     star += "<i id='edit-icon' style='padding-left:10px;cursor:pointer;' class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editRestaurantCommentModal' data-dismiss='modal' item='" + i + "' onClick='editRestaurantComment(this)' ></i>";}
    document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
    }
}}}
function editRestaurantComment(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("editnickname").value = userName;
    document.getElementById("edituserComments").value = restaurant_review_array[item].review;
    console.log(restaurant_review_array[item].rating);
    displayColorStar('editpop', restaurant_review_array[item].rating);
    };
function displayColorStar(classname, num) {
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of pop) {
    p.setAttribute("src", starBWImage);
    }
    changeStarImage(num, classTarget);
        };
function updateRestaurantComment() {
    var response = confirm("Are you sure you want to update this comment?");
    if (response == true) {
    var edit_restaurant_comment_url = "/Editrestaurantreviews" + "/" + restaurant_review_array[currentIndex].review_id;
    var updateRestaurantComment = new XMLHttpRequest(); // new HttpRequest instance to send request to server
    updateRestaurantComment.open("PUT", edit_restaurant_comment_url, true); //The HTTP method called 'PUT' is used here as we are updating data
    updateRestaurantComment.setRequestHeader("Content-Type", "application/json");
    restaurant_review_array[currentIndex].user_id = document.getElementById("editnickname").value;
    restaurant_review_array[currentIndex].review = document.getElementById("edituserComments").value;
    restaurant_review_array[currentIndex].rating = rating;
    updateRestaurantComment.onload = function() {
    fetchRestanurantReviews();};
    updateRestaurantComment.send(JSON.stringify(restaurant_review_array[currentIndex]));
            }
            }
function deleteRestaurantComment(element) {
    var response = confirm("Are you sure you want to delete this comment?");
    if (response == true) {
    var item = element.getAttribute("item"); //get the current item
    var delete_restaurant_comment_url = "/Deleterestaurantreviews" + "/" + restaurant_review_array[item].review_id;
    var eraseRestaurantComment = new XMLHttpRequest();
    eraseRestaurantComment.open("DELETE", delete_restaurant_comment_url, true);
    eraseRestaurantComment.onload = function() {
    fetchRestanurantReviews();
    };
    eraseRestaurantComment.send();
    }
    }                