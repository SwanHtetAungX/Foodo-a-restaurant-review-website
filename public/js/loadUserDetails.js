$(document).ready(function(){
var getProfile=new XMLHttpRequest();
getProfile.open("POST","/getUser",true);
getProfile.setRequestHeader("Content-Type","application/json")
getProfile.onload=function(){
var currrent_user=JSON.parse(getProfile.responseText);
userID=currrent_user[0].user_id;
userName=currrent_user[0].username;
email=currrent_user[0].user_email;
userPassword=currrent_user[0].user_password;
console.log(currrent_user)
document.getElementById("username-update").value=userName;
document.getElementById("email-update").value=email;

};
var payload={token:token};
getProfile.send(JSON.stringify(payload)); ;


})
function update(){
    loadUser();
    updatedUsername=document.getElementById("username-update").value;
    updatedemail=document.getElementById("email-update").value;
    var updateProfile=new XMLHttpRequest();
    var updateUrl="/updateUserInfo"+"/"+userID
updateProfile.open("PUT",updateUrl,true);
updateProfile.setRequestHeader("Content-Type","application/json")
updateProfile.onload=function(){
console.log("goodJob")
console.log(JSON.parse(updateProfile.responseText))
alert("updated successfully")


};
var payload={username:updatedUsername,user_email:updatedemail};
updateProfile.send(JSON.stringify(payload)); ;
    
     
 }
 function deleteAccount() {
    var response = confirm("Are you sure you want to delete your account?");
    if (response == true) {
    var delete_account_url = "/deleteUser" + "/" + userID;
    var eraseAccount = new XMLHttpRequest();
    eraseAccount.open("DELETE", delete_account_url, true);
    eraseAccount.onload = function() {
        console.log("successful")
        sessionStorage.removeItem("token");
        window.location.replace("index.html");
        alert("Deleted Successfully")
        
    };
    eraseAccount.send();
    }
    }    
function changePwd(){
    var oldPassword=document.getElementById('old-password').value;
    loadUser();
    var checkPassword=new XMLHttpRequest();
   checkPassword.open("POST","/checkPassword",true);
   checkPassword.setRequestHeader("Content-Type","application/json");
   checkPassword.onload=function(){
        var token=JSON.parse(checkPassword.responseText);
        console.log()
        console.log(token.result);
        if(token.result!="invalid"){
            var updateProfile=new XMLHttpRequest();
            var new_password_1=document.getElementById('new-password-1').value;
            var new_password_2=document.getElementById('new-password-2').value;
            if(new_password_1==new_password_2){
                var updateUrl="/updateUserInfo"+"/"+userID
                updateProfile.open("PUT",updateUrl,true);
                updateProfile.setRequestHeader("Content-Type","application/json")
                updateProfile.onload=function(){
                console.log("goodJob")
                console.log(JSON.parse(updateProfile.responseText))};
                var payload={user_password:new_password_1};
                updateProfile.send(JSON.stringify(payload))
            alert("updated successfully")
        }
        else{
            alert('Please the same password for new password')
        }
        
            
        }
        else{
            alert('Please enter the old password correctly')
        }
        

   }
   var payload={user_email:email,user_password:oldPassword}
   checkPassword.send(JSON.stringify(payload))
    
    
}
function hidePassword(field){
            const passwordField = document.getElementById(field);
              if (passwordField.type === "password") {
                passwordField.type = "text";
              } else {
                passwordField.type = "password";
              }
            ; 
}


        
        


  
