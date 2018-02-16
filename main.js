// document.getElementById('counter').innerHTML = "hello";



// intialized - set-up variables
var counter = document.getElementById('counter');
var fromTop = window.pageYOffset;



counter.innerHTML = "counter text";

//pseudo code - when the user is scrolling update the variable fromTop and make decisions to change stuff on the page
//window.onscroll is a boolean (yes/no)

window.onscroll = function(){
  //when the user scrolls do all of this ...


  fromTop = window.pageYOffset;
  //test if it works
  console.log(fromTop);

  counter.style.top = 100 + fromTop + "px";

  if (fromTop > 1000){
    counter.innerHTML ="more than 1000 leagues";
    counter.style.backgroundColor= "red";
    counter.style.backgroundImage= "url(img/yellowsubmarine.png)";
  }
    else{
      counter.innerHTML ="counter text";
      counter.style.backgroundColor= "green";
      counter.style.backgroundImage= "url(img/yellowsubmarine.png)";
    }
}
