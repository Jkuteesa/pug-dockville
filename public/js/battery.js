const Validate=(event )=>{
    let error = 0;
    let firstName = document.registration.fname
    let lastName = document.registration.lname
    let nin = document.registration.nin
    let contact = document.registration.contact
    let battery = document.registration.battery
    let date = document.registration.date
    let time = document.registration.time
    let gender= document.registration.gender
    let amount= document.registration.amount
   

    //finding errors in empty fields
    let fnameError = document.getElementById("fname-error")
    let lnameError = document.getElementById("lname-error")
    let contactError = document.getElementById("contact-error")
    let ninError = document.getElementById("nin-error")
    let batteryError = document.getElementById("battery-error")
    let dateError = document.getElementById("date-error")
    let timeError = document.getElementById("time-error")
    let genderError = document.getElementById("gender-error")
    let amountError = document.getElementById("amount-error")
    
    


    let firstNameRegex = /^[A-Za-z]+$/;
    let firstNameRegex1 = /^[A-Z]/;
    let firstNameRegex2 = /^[A-Za-z]{2,}$/;
    // this regex is for last name
    let lastNameRegex = /^[A-Za-z]+$/;
    let lastNameRegex1 = /^[A-Z]/;
    let lastNameRegex2 = /^[A-Za-z]{2,}$/;

    // this regex is for contact
    let contactRegex = /^\+256\d{9}$/;

    // this is regex for nin
    let ninRegex = /^.{14}$/




    // validating  fields using if statements
    if (firstName.value ==""){
        firstName.style.border = "2px solid red";
        fnameError.textContent = "Please enter first name";
        fnameError.style = "color:red; font-family:serif ";
        firstName.focus();
        error++;
    }else if(!firstName.value.match(firstNameRegex)){
        firstName.style.border = "2px solid red";
        fnameError.textContent = "First name must only contain letters.";
        fnameError.style = "color:red; font-family:serif ";
        firstName.focus();
        error++;
    }else if(!firstName.value.match(firstNameRegex1)){
        firstName.style.border = "2px solid red";
        fnameError.textContent = "First name must start with an uppercase letter.";
        fnameError.style = "color:red; font-family:serif ";
        firstName.focus();
        error++;
    }else if(!firstName.value.match(firstNameRegex2)){
        firstName.style.border = "2px solid red";
        fnameError.textContent = "First name must conain not less than one character";
        fnameError.style = "color:red; font-family:serif "
        firstName.focus();
        error++;
    }
    else{
        firstName.style.border = "2px solid green";
        fnameError.textContent = "";
        lastName.focus();
    }

    if(lastName.value ==""){
        lastName.style.border = "2px solid red";
        lnameError.textContent = "Please enter last name";
        lnameError.style = "color:red; font-family:serif ";
        lastName.focus();
        error++;

    }else if(!lastName.value.match(lastNameRegex)){
        lastName.style.border = "2px solid red";
        lnameError.textContent = "Last name must only contain letters.";
        lnameError.style = "color:red; font-family:serif ";
        lastName.focus();
        error++;
    }else if(!lastName.value.match(lastNameRegex1)){
        lastName.style.border = "2px solid red";
        lnameError.textContent = "Last name must start with an uppercase letter.";
        lnameError.style = "color:red; font-family:serif ";
        lastName.focus();
        error++;
    }else if(!lastName.value.match(lastNameRegex2)){
        lastName.style.border = "2px solid red";
        lnameError.textContent = "Last name must conain not less than one character";
        lnameError.style = "color:red; font-family:serif "
        lastName.focus();
        error++;
    }
    else{
        lastName.style.border = "2px solid green";
        lnameError.textContent = "";
        contact.focus();
    }

    // Validating for NIN
    // regex for nin
    const ninRegex2 = /^CM([a-zA-Z0-9]{12})+$/

    if(gender.value == ""){
        gender.style.border = "2px solid red";
        genderError.textContent = "Please enter gender";
        genderError.style = "color:red; font-family:serif ";
        gender.focus();
          error++;
    } else{
        gender.style.border = "2px solid green";
        genderError.textContent = "";
      nin.focus();
    } 

    if(nin.value == ""){
    nin.style.border = "2px solid red";
    ninError.textContent = "Please enter NIN.";
    ninError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    nin.focus();
    error++;
    }else if(!(ninRegex.test(nin.value)|| ninRegex2.test(nin.value))){
    nin.style.border = "2px solid red";
    ninError.textContent = "NIN should look like CFXXXXXXX or CMXXXXXXX";
    ninError.style = "color:red; font-family:serif;";
    nin.focus();
    error++;
    }
    else{
    nin.style.border = "2px solid green";
    ninError.textContent = "";
    }


    if(contact.value == ""){
        contact.style.border = "2px solid red";
        contactError.textContent = "Please enter contact number";
        contactError.style = "color:red; font-family:serif ";
        contact.focus();
        error++;
    }else if(!contact.value.match(contactRegex)){
        contact.style.border = "2px solid red";
        contactError.textContent = "Contact should start with +256";
        contactError.style = "color:red; font-family:serif ";
        contact.focus();
        error++;    
    }
    else{
            contact.style.border = "2px solid green";
            contactError.textContent = "";
            battery.focus();
        } 
      
    if(battery.value == ""){
        battery.style.border = "2px solid red";
        batteryError.textContent = "Please enter battery size";
        batteryError.style = "color:red; font-family:serif ";
        batteryError.focus();
          error++;
    }else{
            battery.style.border = "2px solid green";
            batteryError.textContent = "";
            amount.focus();
        } 

    if(amount.value == ""){
        amount.style.border = "2px solid red";
        amountError.textContent = "Please enter amount ";
        amountError.style = "color:red; font-family:serif ";
        amountError.focus();
          error++;
    }else{
            time.style.border = "2px solid green";
            timeError.textContent = "";
            date.focus();
        } 
        
    
    
    if(date.value == ""){
        date.style.border = "2px solid red";
        dateError.textContent = "Please enter date";
        dateError.style = "color:red; font-family:serif ";
        date.focus();
          error++;
    }else{
        date.style.border = "2px solid green";
        dateError.textContent = "";
      time.focus();
    }
    if(time.value == ""){
        time.style.border = "2px solid red";
        timeError.textContent = "Please enter time";
        timeError.style = "color:red; font-family:serif ";
        time.focus();
          error++;
    } else{
        time.style.border = "2px solid green";
        timeError.textContent = "";
      time.focus();
    } 

    











    if(error > 0){
        event.preventDefault()
    }




    }

    