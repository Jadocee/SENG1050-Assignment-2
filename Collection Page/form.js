/*  Filename:   form.js
    Author:     Jaydon Cameron
    Validator:  https://beautifytools.com/javascript-validator.php (Ignore errors: "'[function]' is defined but never used.")
    Created:    10/10/2021  */

function billDiff(isSame) {
    if (isSame) {
        document.getElementById("billing").style.display = "none";
        document.getElementById("billAddress").value = '';
        document.getElementById("bcity").value = '';
        document.getElementById("bstate").value = document.getElementById("state")[0];
        document.getElementById("bpost").value = '';
    } else if (!isSame) {
        document.getElementById("billing").style.display = "block";
    }
}

/*  Not sure if it would be better to have separate functions to validate each input in the form, with each function
 *   returning a boolean. And have the next() function call each of those functions.*/
function checkPersonInfo() {
    const regName = /^[A-Za-z]+$/; // https://www.w3resource.com/javascript/form/all-letters-field.php
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // https://www.w3resource.com/javascript/form/email-validation.php
    const regPh = /^[0-9]{10}$/; // Made this one myself :)
    const regPost = /^[0-9]{4}$/; // Made this one too (Think I now understand how to come up with these).
    const regStreet = /^[0-9]{1,3}[\s][A-Za-z]+[\s][A-Za-z]+$/; // Come up with this one myself, also.
    if (document.getElementById("firstName").value.length === 0) { // Check if filled.
        alert("Please enter your first name"); // If not: alert.
        return false;
    } else if (document.getElementById("lastName").value.length === 0) { // Check if filled.
        alert("Please enter your last name"); // If not: alert.
        return false;
    } else if (!regName.test(document.getElementById("firstName").value) || !regName.test(document.getElementById("lastName").value)) { // Validate first name and last name.
        alert("First and Last names cannot contain symbols or numbers."); // If not: alert.
        return false;
    } else if (document.getElementById("email").value.length === 0) { // Check if filled.
        alert("Please enter your email address"); // If not: alert.
        return false;
    } else if (!regEmail.test(document.getElementById("email").value)) { // Validate email.
        alert("Invalid email address"); // If not valid: alert.
        return false;
    } else if (document.getElementById("phNum").value.length === 0) { // Check if filled.
        alert("Please enter a phone number"); // If not filled: alert.
        return false;
    } else if (!regPh.test(document.getElementById("phNum").value)) { // Validate.
        alert("Invalid phone number"); // If not valid: alert.
        return false;
    } else if (document.getElementById("resAddress").value.length === 0 || document.getElementById("city").value.length === 0 || document.getElementById("state").value === document.getElementById("state")[0].value || document.getElementById("post").value.length === 0) {
        alert("Please enter a residential address");
        return false;
    } else if (!regStreet.test(document.getElementById("resAddress").value)) {
        alert("Invalid street address in residential address");
        return false;
    } else if (!document.getElementsByName("isRes")[0].checked && !document.getElementsByName("isRes")[1].checked) {
        alert("Please pick a response for the question " +
            "\"Is your billing address the same as your residential address?\"");
        return false;
    } else if (!regPost.test(document.getElementById("post").value)) { // Check if valid.
        alert("Invalid post code for residential address"); // If not valid: alert.
        return false;
    } else if (!document.getElementsByName("carSubmission")[0].checked && !document.getElementsByName("carSubmission")[1].checked) { // Check if filled.
        alert("Please pick a response to the question " + // If not filled: alert.
            "\"Have you previously submitted a car?\"");
        return false;
    } else if (document.getElementById("numOfSubmissions").value < 1 && document.getElementsByName("carSubmission")[0].checked) { // Check if filled.
        alert("Please enter the number of previous car submissions"); // If not filled: alert.
        return false;
    } else if (document.getElementsByName("isRes")[1].checked && (document.getElementById("billAddress").value.length === 0 || document.getElementById("bcity").value.length === 0 || document.getElementById("bstate").value === document.getElementById("bstate")[0].value || document.getElementById("bpost").value.length === 0)) {
        alert("Please enter a billing address");
        return false;
    } else if (document.getElementsByName("isRes")[1].checked && !regStreet.test(document.getElementById("billAddress").value)) {
        alert("Invalid street address in billing address");
        return false;
    } else if (document.getElementsByName("isRes")[1].checked && !regPost.test(document.getElementById("bpost").value)) {
        alert("Invalid post code for billing address");
        return false;
    } else {
        return true; // Is valid.
    }
}

function checkCarInfo() {
    const regModel = /^[0-9a-zA-Z]+$/; // https://www.w3resource.com/javascript/form/letters-numbers-field.php
    if (document.getElementById("Model").value.length === 0) {
        alert("Please enter the model of the car");
        return false;
    } else if (!regModel.test(document.getElementById("Model").value)) {
        alert("Car model can only contain letters and numbers");
        return false;
    } else if (document.getElementById("Make").value.length === 0) {
        alert("Please enter the make of the car");
        return false;
    } else if (!/^[A-Za-z]+$/.test(document.getElementById("Make").value)) {
        alert("Invalid car make");
        return false;
    } else if (document.getElementById("Category").value === document.getElementById("Category")[0].value) {
        alert("Please pick a category for the car");
        return false;
    } else if (document.getElementById("Description").value.length === 0) {
        alert("Please enter a description of the car");
        return false;
    } else {
        return true;
    }
}

function restart() {
    if (confirm("Are you sure you want to restart?\n" +
        "You will be returned to the start and everything will be cleared.")) {
        document.getElementById("firstName").value = '';
        document.getElementById("lastName").value = '';
        document.getElementById("email").value = '';
        document.getElementById("phNum").value = '';
        document.getElementById("resAddress").value = '';
        document.getElementById("city").value = '';
        document.getElementById("state").value = document.getElementById("state")[0];
        document.getElementById("post").value = '';
        document.getElementsByName("carSubmission")[0].checked = false;
        document.getElementsByName("carSubmission")[1].checked = false;
        showHideNumOfPrevSubmissions();
        document.getElementById("numOfSubmissions").value = '';
        document.getElementsByName("carPastFiveYrs")[0].checked = false;
        document.getElementsByName("carPastFiveYrs")[1].checked = false;
        document.getElementsByName("carPastFiveYrs")[2].checked = true;
        billDiff(true);
        document.getElementsByName("isRes")[0].checked = false;
        document.getElementsByName("isRes")[1].checked = false;

        document.getElementById("Make").value = '';
        document.getElementById("Model").value = '';
        document.getElementById("Category").value = document.getElementById("Category")[0].value;
        document.getElementById("Description").value = '';
        document.getElementsByName("Additional")[0].checked = false;
        document.getElementsByName("Additional")[1].checked = false;

        document.getElementById("personInfo").scrollIntoView({
            block: 'center',
            behavior: 'smooth'
        });
    }
}

function clrForm(n) {
    if (n === 0) {
        if (confirm("Are you sure you want to clear this section?\n" +
            "All inputs for this section will be removed.")) {
            document.getElementById("firstName").value = '';
            document.getElementById("lastName").value = '';
            document.getElementById("email").value = '';
            document.getElementById("phNum").value = '';
            document.getElementById("resAddress").value = '';
            document.getElementById("city").value = '';
            document.getElementById("state").value = document.getElementById("state")[0];
            document.getElementById("post").value = '';
            document.getElementsByName("carSubmission")[0].checked = false;
            document.getElementsByName("carSubmission")[1].checked = false;
            showHideNumOfPrevSubmissions();
            document.getElementById("numOfSubmissions").value = '';
            document.getElementsByName("carPastFiveYrs")[0].checked = false;
            document.getElementsByName("carPastFiveYrs")[1].checked = false;
            document.getElementsByName("carPastFiveYrs")[2].checked = true;
            billDiff(true);
            document.getElementsByName("isRes")[0].checked = false;
            document.getElementsByName("isRes")[1].checked = false;

        }
    } else if (n === 1) {
        if (confirm("Are you sure you want to clear this section?\n" +
            "All inputs for this section will be removed.")) {
            document.getElementById("Make").value = '';
            document.getElementById("Model").value = '';
            document.getElementById("Category").value = document.getElementById("Category")[0].value;
            document.getElementById("Description").value = '';
            document.getElementsByName("Additional")[0].checked = false;
            document.getElementsByName("Additional")[1].checked = false;
        }
    }
}

function showHideNumOfPrevSubmissions() {
    if (document.getElementsByName("carSubmission")[0].checked) {
        document.getElementById("numOfSubmissions").disabled = false;
        document.getElementById("numOfPrevSubmissions").style.display = "block";
    } else {
        document.getElementById("numOfSubmissions").disabled = true;
        document.getElementById("numOfPrevSubmissions").style.display = "none";
    }
}

function next(n) {
    if (n === 0 && checkPersonInfo()) {
        document.getElementsByClassName("topText")[1].style.display = "block";
        document.getElementById("greet").innerHTML = document.getElementById("firstName").value;
        document.getElementById("carInfo").style.filter = "none";
        document.getElementById("Make").disabled = false;
        document.getElementById("Model").disabled = false;
        document.getElementById("Category").disabled = false;
        document.getElementById("Description").disabled = false;
        document.getElementById("Extras?").disabled = false;
        document.getElementById("AllowCoupon?").disabled = false;
        document.getElementsByClassName("formNavigation")[1].style.display = "inline-block";
        document.getElementById("carInfo").scrollIntoView({
            block: 'center',
            behavior: 'smooth'
        }); // Scroll to next part.
        document.getElementById("Description").addEventListener("input", function(text) { // Listen and update char counter.
            const l_max = text.target.getAttribute("maxlength");
            const l_curr = text.target.value.length;
            document.getElementById("DescriptionTextLimit").innerHTML = l_curr + "/" + l_max;
        });
    } else if (n === 1 && checkCarInfo()) {

    }
}

function prev() {
    document.getElementById("personInfo").scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    });
}