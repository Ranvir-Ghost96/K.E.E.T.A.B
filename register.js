window.onload = function () {
    document.querySelector("#confirm-password").addEventListener("keyup", validatePassword);
}

function reset(){
    firstname.value = " " 
    lastname.value = " "
     DOB.value = " " 
     instituename.value = " " 
      state.value = " "
      email.value = " " 
      studentid.value = " " 
      educationalrole.value = " "
        year.value = " " 
        department.value = " "
        mytext.value = " " 
    }
    
    function resetRadio() {
        var radioButtons = document.querySelectorAll('input[name="mygender"]');
        radioButtons.forEach(function(radioButton) {
        radioButton.checked = false;
    });
}

function next() {
    const firstName = document.getElementById("firstname").value;
    const dob = document.getElementById("DOB").value;
    const gender = document.querySelector("input[name='mygender']:checked");
    const instituteName = document.getElementById("instituename").value;
    const state = document.getElementById("state").value;
    const email = document.getElementById("email").value;
    const studentId = document.getElementById("studentid").value;
    const eduRole = document.getElementById("educationalrole").value;
    const year = document.getElementById("year").value;
    const department = document.getElementById("department").value;
    
    if (firstName === "" || dob === "" || gender === null ||
    instituteName === "" || state === "" || email === "" || studentId === "" ||
    eduRole === "" || year === "" || department === "") {
        alert("Please fill all the fields")
    }
    else if (email.includes(".ac.in")) {
        window.open("login.html")
    } else {
        alert("Please Enter Valid Email")
    }
}

function validatePassword() {
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirm-password").value;
    const passwordMismatchMessage = document.querySelector("#password-mismatch-message");
    
    if (password === confirmPassword) {
        passwordMismatchMessage.style.display = "none";
    }
    else {
        passwordMismatchMessage.style.display = "block";
    }
}

const mobileNumberField = document.getElementById("mobile-number");
mobileNumberField.addEventListener("input", function () {
    if (mobileNumberField.value.length !== 10) {
        mobileNumberField.setCustomValidity("Mobile number must be 10 digits");
    } else {
        mobileNumberField.setCustomValidity("");
    }
});


