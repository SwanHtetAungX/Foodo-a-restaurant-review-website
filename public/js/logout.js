function logOut(){
    document.getElementById('logout-button').style.display="none";
    document.getElementById('myaccount-button').style.display="none";
    document.getElementById('favourite-button').style.display="none";
    document.getElementById('login-button').style.display="block";
    document.getElementById('sign-up-button').style.display="block";
    //document.getElementById('newCommentFnb').style.display="none";
    //document.getElementById('newCommentDrink').style.display="none";
    //document.getElementById('newCommentDessert').style.display="none";
    //document.getElementById('newReview').style.display="none";
    sessionStorage.removeItem("token");
    alert("Logout successfully")
    window.location.replace("index.html");
}