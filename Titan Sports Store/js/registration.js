"use strict";
var $ = function (id) { return document.getElementById(id); };

var procressEntries = function () {
    var header = "";
    var html = "";
    var required = "<span>Required field</span>";
    var msg = "Please review your entries and complete all required fields";
    var isValid = true;

    // get values for user entries
    var email = $("email_address").value;
    var phone = $("phone").value;
    var address = $("address").value;
    var city = $("city").value;
    var state = $("state").value;
    var zip = $("zip").value;
    var contact = "Call";
    if ($("text").checked) { contact = "Text"; }
    if ($("email").checked) { contact = "Email"; }
    if ($("none").checked) { contact = "None"; }
    var terms = $("terms").checked;

    // check user entries for validity
    if (email == "") {
        $("email_address").nextElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    }
    else {
        $("email_address").nextElementSibling.firstChild.nodeValue = "";
    }

    if (phone == "") {
        $("phone").nextElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    }
    else { $("phone").nextElementSibling.firstChild.nodeValue = ""; }

    if (address == "") {
        $("address").nextElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    }
    else { $("address").nextElementSibling.firstChild.nodeValue = ""; }

    if (city == "") {
        $("city").nextElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    }
    else { $("city").nextElementSibling.firstChild.nodeValue = ""; }

    if (state == "") {
        $("state").nextElementSibling.firstChild.nodeValue = "Please select a state.";
        isValid = false;
    }
    else { $("state").nextElementSibling.firstChild.nodeValue = ""; }

    if (zip == "") {
        $("zip").nextElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    }
    else { $("zip").nextElementSibling.firstChild.nodeValue = ""; }

    if (terms == "") {
        $("terms").nextElementSibling.firstChild.nodeValue = "This box must be checked.";
        isValid = false;
    }
    else { $("terms").nextElementSibling.firstChild.nodeValue = ""; }

    // submit the form if all fields are valid
    if (isValid == true) {
        $("registration_form").submit();
    }

    if (email == "") {
        email = required;
        header = msg;
    }
    if (phone == "") {
        phone = required;
        header = msg;
    }
    if (address == "") {
        address = required;
        header = msg;
    }
    if (city == "") {
        city = required;
        header = msg;
    }
    if (state == "") {
        state = required;
        header = msg;
    }
    if (zip == "") {
        zip = required;
        header = msg;
    }
    if (terms == false) {
        terms = required;
        header = msg;
    }

    $("registration_header").firstChild.nodeValue = header;
    if (header == msg) {
        html = html + "<tr><td>Email:</td><td>" + email + "</td></tr>";
        html = html + "<tr><td>Phone Number:</td><td>" + phone + "</td></tr>";
        html = html + "<tr><td>Street Address:</td><td>" + address + "</td></tr>";
        html = html + "<tr><td>City:</td><td>" + city + "</td></tr>";
        html = html + "<tr><td>State:</td><td>" + state + "</td></tr>";
        html = html + "<tr><td>Zip Code:</td><td>" + zip + "</td></tr>";
        html = html + "<tr><td>Contact me by:</td><td>" + contact + "</td></tr>";
        html = html + "<tr><td>Terms of Service:</td><td>" + terms + "</td></tr>";
        $("registration_info").innerHTML = html;
    } else {
        $("regitration_info").innerHTML = "";
        $("registration_form").submit();
    }
};

var resetForm = function () {
    $("registration_form").reset();
    $("registration_header").firstChild.nodeValue = "";
    $("registration_info").innerHTML = "";
    $("email_address").nextElementSibling.firstChild.nodeValue = "*";
    $("phone").nextElementSibling.firstChild.nodeValue = "*";
    $("address").nextElementSibling.firstChild.nodeValue = "*";
    $("city").nextElementSibling.firstChild.nodeValue = "*";
    $("state").nextElementSibling.firstChild.nodeValue = "*";
    $("zip").nextElementSibling.firstChild.nodeValue = "*";
    $("terms").nextElementSibling.firstChild.nodeValue = "*";
    $("email_address").focus();
};

window.onload = function () {
    $("register").onclick = procressEntries;
    $("reset_form").onclick = resetForm;
    $("email_address").focus();
};