

function myFunction() {
    var x = document.getElementById("my-main-header");
    var y = document.getElementById("my-mob-menu")
    if (x.className === "main-header" && y.className === "mob-menu") {
      x.className += " responsive";
      y.className += " change ";
    } else {
      x.className = "main-header";
      y.className = "mob-menu"
    }
  }








