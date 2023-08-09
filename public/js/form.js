// const Validate=( )=>{
//     let firstName = document.registration.fname
//     let lastName = document.registration.lname
//     let nin = document.registration.nin
//     let contact = document.registration.contact
//     let model = document.registration.carmodel

//     //finding errors in empty fields
//     let fnameError = document.getElementById("fname-error")
//     let lnameError = document.getElementById("lname-error")
//     let contactError = document.getElementById("contact-error")
//     let modelError = document.getElementById("model-error")
//     let ninError = document.getElementById("nin-error")
//     let carModelError = document.getElementById("carmodel")
//     let numberPlateError = document.getElementById("nplate")
//     let period = document.getElementById("period")



//     let firstNameRegex = /^[A-Za-z]+$/

//     // validating empty  fields using if statements
//     if (firstName.value ==""){
//         firstName.style.border = "2px solid red";
//         fnameError.textContent = "Please enter first name";
//         fnameError.style = "color:red; font-family:serif ";
//         firstName.focus();
//         return false;
//     }else if(!firstName.value.match(firstNameRegex)){
//         firstName.style.border = "2px solid red";
//         fnameError.textContent = "First name must only contain letters.";
//         fnameError.style = "color:red; font-family:serif ";
//         firstName.focus();
//         return false;
//     }else{
//         firstName.style.border = "2px solid green";
//         fnameError.textContent = "";
//         lastName.focus();
//     }

//     if(lastName.value ==""){
//         lastName.style.border = "2px solid red";
//         lnameError.textContent = "Please enter last name";
//         lnameError.style = "color:red; font-family:serif ";
//         lastName.focus();
//         return false;

//     }

//     if(contact.value == ""){
//         contact.style.border = "2px solid red";
//         contactError.textContent = "Please enter contact number";
//         contactError.style = "color:red; font-family:serif ";
//         contact.focus();
//         return false;
//     }

//     if(model.value == ""){
//         model.style.border = "2px solid red";
//         modelError.textContent = "Please enter car model";
//         modelError.style = "color:red; font-family:serif ";
//         model.focus();
//         return false;

//     }
//     if(nin.value == ""){
//         nin.style.border = "2px solid red";
//         ninError.textContent = "Please enter NIN";
//         ninError.style = "color:red; font-family:serif ";
//         nin.focus();
//         return false;
//     }
    

// //   // generating unique numbers
// //   const token = /^BB-([0-9]){3}+$/
// //   const pCarRegex = /^BB-([0-9]){3}+$/
// //   const truckCarRegex = /^BB-([0-9]){3}+$/
// //   const taxiCarRegex =  /^BB-([0-9]){3}+$/
// //   const coasterRegex =  /^BB-([0-9]){3}+$/
// //   // eg BB-001, 
// //  //   we go to let and say 
// //  //  if(!(cartype.value.match)






















//     }

//     // js for log in form
    