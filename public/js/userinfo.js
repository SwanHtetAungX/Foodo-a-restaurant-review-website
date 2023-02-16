function fetchUserInfo() {
    var request = new XMLHttpRequest();
    request.open('GET',user_information_url, true);

    request.onload = function() {
    user_information_array = JSON.parse(request.responseText);
    console.log(user_information_array);
    };
    request.send();
    }