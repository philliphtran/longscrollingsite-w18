// document.getElementById('counter').innerHTML = "hello";



// intialized - set-up variables
var counter = document.getElementById('counter');
var fromTop = window.pageYOffset;
var a = document.getElementById('a');
var b = document.getElementById('b');



counter.innerHTML = "Sinning";

//pseudo code - when the user is scrolling update the variable fromTop and make decisions to change stuff on the page
//window.onscroll is a boolean (yes/no)

window.onscroll = function(){
  //when the user scrolls do all of this ...


var  y  = window.pageYOffset;
  //test if it works
  console.log(y);

  counter.style.top = 100 + y + "px";
  counter.innerHTML = y + "px";
  a.style.top = 50 + y + "px";
  a.innerHTML = y + "px";
//   if (fromTop > 5000){
//     counter.innerHTML ="why me?";
//     counter.style.backgroundColor= "red";
//     // counter.style.backgroundImage= "url(img/yellowsubmarine.png)";
//   }
//     else{
//       counter.innerHTML ="ahhhhh";
//       counter.style.backgroundColor= "clear";
//       // counter.style.backgroundImage= "url(img/yellowsubmarine.png)";
//     }
// }


  if (y < 1000) {
    console.log("y < 1000");
    counter.style.backgroundColor = "clear";
    a.style.backgroundColor = "white";
    a.innerHTML ="<h1> 7 Deadly Sins </h1>";
    counter.innerHTML = "Sinning";
    // pride.style.backgroundImage= "url()";

  }else if (y > 1000 && y < 2000) {
    console.log("y > 1000 && y < 2000 ");
    a.innerHTML ="<h1> 1. Pride </h1>";
    a.style.backgroundColor = "white";
    counter.style.backgroundColor = "purple";
    counter.innerHTML = "Ahhhh";
  }

  else if (y > 2000 && y < 3000 ) {
    console.log("y > 2000 && y < 3000 ");
    counter.style.backgroundColor = "red";
    a.innerHTML ="<h1> 2. Gluttony </h1>";
    a.style.backgroundColor = "white";
    counter.innerHTML = "Ahhhh";
  }

    else if (y > 3000 && y < 4000 ) {
      console.log("y > 3000 && y < 4000 ");
      counter.style.backgroundColor = "yellow";
      a.innerHTML ="<h1> 3. Sloth </h1>";
      a.style.backgroundColor = "white";
      counter.innerHTML = "Ahhhh";
    // a.innerHTML = " " //to change text
    // a.src = "alternate picture"; to change src for image file
    // a.style.display="none" // hide the object
  }
  else if (y > 4000 && y < 5000 ) {
    console.log("y > 4000 && y < 5000 ");
    counter.style.backgroundColor = "red";
    a.innerHTML ="<h1> 4. Greed </h1>";
    a.style.backgroundColor = "white";
    counter.innerHTML = "Ahhhh";
  }
  else if (y > 5000 && y < 6000 ) {
    console.log("y > 5000 && y < 6000 ");
    counter.style.backgroundColor = "white";
    a.innerHTML ="<h1> 5. Envy </h1>";
    a.style.backgroundColor = "white";
    counter.innerHTML = "Ahhhh";
  }
  else if (y > 6000 && y < 7000 ) {
    console.log("y > 6000 && y < 7000 ");
    counter.style.backgroundColor = "cyan";
    a.innerHTML ="<h1> 6. Anger </h1>";
    a.style.backgroundColor = "white";
    counter.innerHTML = "Ahhhh";
  }
  else if (y > 7000 && y < 8000 ) {
    console.log("y > 7000 && y < 8000 ");
    counter.style.backgroundColor = "orange";
    a.innerHTML ="<h1> 7. Envy </h1>";
    a.style.backgroundColor = "white";
    counter.innerHTML = "Ahhhh";
  }
  else {
    console.log("else");
    console.log("y > 8000");
    counter.style.backgroundColor = "green";
  }
}
