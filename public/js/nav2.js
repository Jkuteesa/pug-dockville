function myFunction() {
    var x = document.getElementById("navcontainer");
    if (x.className === "navcontainer") {
      x.className += " responsive";
    } else {
      x.className = "navcontainer";
    }
  }