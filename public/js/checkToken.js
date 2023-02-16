document.addEventListener("DOMContentLoaded", function() {
    var token = sessionStorage.getItem("token");
    if (token !== null) {
        document.getElementById('logout-button').style.display="block";
        document.getElementById('myaccount-button').style.display="block";
        document.getElementById('favourite-button').style.display="block";
        document.getElementById('login-button').style.display="none";
        document.getElementById('sign-up-button').style.display="none";


    }

    
});