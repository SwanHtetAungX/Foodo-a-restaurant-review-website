function signUp() {
    var user_information = new Object();
    
    user_information.username = document.getElementById("username-sign-up").value;
    user_information.user_email= document.getElementById("email-sign-up").value;
    user_information.user_password = document.getElementById("password-sign-up").value;
    user_information.is_email_confirmed="0";
  
    if (!user_information.username || !user_information.user_email || !user_information.user_password) {
      alert("Please fill in all required fields");
      return;
    }
  
    var signUpUser = new XMLHttpRequest();
    signUpUser.open("POST","/addUser", true);
    signUpUser.setRequestHeader("Content-Type", "application/json");
    signUpUser.onload = function() {
      console.log("new user created");
      window.location.replace("login.html");
  }
  signUpUser.send(JSON.stringify(user_information));
  alert("Sign up successful!");
    };
  
    
  
