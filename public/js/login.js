function loginUser() {
   var loginInformation=new Object();

   loginInformation.user_email=document.getElementById("email-login").value;
   loginInformation.user_password=document.getElementById("password-login").value;
   
   var loginUserInfo=new XMLHttpRequest();
   loginUserInfo.open("POST","/login",true);
   loginUserInfo.setRequestHeader("Content-Type","application/json");
   loginUserInfo.onload=function(){
        var token=JSON.parse(loginUserInfo.responseText);
        console.log(token.result);
        if(token.result!="invalid"){
            alert("Login successfully")
            sessionStorage.setItem("token",token.result);
            window.location.replace("index.html");
        
            
        }
        else{
            alert("Email or Password is wrong")
            
        }

   }
loginUserInfo.send(JSON.stringify(loginInformation));
   
  
   
  }
