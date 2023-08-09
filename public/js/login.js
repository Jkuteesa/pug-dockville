const Validate=()=>{
    let email = document.login.email
    let password = document.login.password
 
    let emailError = document.getElementById("password")
    let passwordError = document.getElementById("email")

    // now validating
    if (email.value ==""){
        email.style.border = "2px solid red"
        emailError.textContent = "Email is required"
        emailError.style = "color:red; font-family:serif";
        email.focus();
        return false;
    }

}