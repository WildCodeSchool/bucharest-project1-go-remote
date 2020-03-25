

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








// function myFunction() {
//     const x = document.getElementsByClass("nav-link");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }


// x.addEventListener('click', function navFunction(){
//     if (x.style.display === "block"){x.style.display = 'none';} 
//     else {x.style.display = 'block';}
// } )


// function myFunction() {
//     var x = document.getElementsByClassName("nav-link");
//     x.style.display = 'block';}