const ValidateSignup = (event) => {
  let error = 0;
  let manager = document.signup.manager;
  let email = document.signup.email;
  let password = document.signup.password;

  let managerError = document.getElementById("manager-error");
  let emailError = document.getElementById("email-error");
  let passwordError = document.getElementById("password-error");

  if (manager.value == "") {
    manager.style.border = "2px solid red";
    managerError.textContent = "manager is required";
    managerError.style = "color:red; font-family:serif";
    manager.focus();
    error++;
  } else {
    manager.style.border = "2px solid green";
    managerError.textContent = "";
    email.focus();
  }

  if (email.value == "") {
    email.style.border = "2px solid red";
    emailError.textContent = "Email is required";
    emailError.style = "color:red; font-family:serif";
    email.focus();
    error++;
  } else {
    email.style.border = "2px solid green";
    emailError.textContent = "";
    password.focus();
  }

  if (password.value == "") {
    password.style.border = "2px solid red";
    passwordError.textContent = "password is required";
    passwordError.style = "color:red; font-family:serif";
    password.focus();
    error++;
  } else {
    password.style.border = "2px solid green";
    passwordError.textContent = "";
    password.focus();
  }

  if (error > 0) {
    event.preventDefault();
  }
};

// validations for the signin form.
const ValidateSignin = (event) => {
  let error = 0;
  let email = document.login.emailSignin;
  let password = document.login.passwordSignin;

  let emailError = document.getElementById("emailSignin-error");
  let passwordError = document.getElementById("passwordSignin-error");

  if (email.value == "") {
    email.style.border = "2px solid red";
    emailError.textContent = "Email is required";
    emailError.style = "color:red; font-family:serif";
    email.focus();
    error++;
  } else {
    email.style.border = "2px solid green";
    emailError.textContent = "";
    password.focus();
  }

  if (password.value == "") {
    password.style.border = "2px solid red";
    passwordError.textContent = "password is required";
    passwordError.style = "color:red; font-family:serif";
    password.focus();
    error++;
  } else {
    password.style.border = "2px solid green";
    passwordError.textContent = "";
    password.focus();
  }

  if (error > 0) {
    event.preventDefault();
  }
};
