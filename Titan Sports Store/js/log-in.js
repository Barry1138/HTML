function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == null || username == "" && password == null || password == "") {
        alert('Logged in!');
        return true;
    } else {
        alert('The username or the password does not match. Please try again.');
        return false;
    }
};
