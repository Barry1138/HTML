function myFunction() {
    var username = prompt("Please enter your username", "barry_l_calligan@yahoo.com");
    var password = prompt("Please enter your password", "GoGalt2016");
    var new_password = prompt("Please enter your new password", "HowardGalt");
    if (username != null)
        (password! = null && new_password != null) {
        document.getElementById("reset_password").innerHTML =
            "Congradulations " + username + "! you have changed your password.";
    }
};