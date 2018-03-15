// document.getElementById('counter').innerHTML = "hello";



// intialized - set-up variables
var counter = document.getElementById('counter');
var canvas = document.getElementById('canvas');
var fromTop = window.pageYOffset;
var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var txt = "Phillip's Porfolio";
// var d = document.getElementById('d');
var myWindow;

function openWin() {
    myWindow = window.open("index.html", "", "width=2560, height=1600");
}


counter.innerHTML = "Do you Sin?";
// document.body.style.backgroundImage = "url('img/geek.jpg')";

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
  b.style.top = 150 + y + "px";
  b.innerHTML = y + "px";
  c.style.top = 150 + y + "px";
  c.innerHTML = y + "px";
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
    counter.innerHTML = "<h3>Se7en</h3>";
    counter.style.backgroundImage = "";
    a.style.backgroundColor = "white";
    a.innerHTML ="<h1> 7 Deadly Sins </h1>";
    b.style.backgroundColor = "white";
    b.style.backgroundImage = "url(http://via.placeholder.com/500x300)";
    c.style.backgroundColor = "rgba(255,255,255,0.5)";
    c.innerHTML = "<p> The Seven Deadly Sins was orignally a list in which was used in the early Christian teachings to instruct and educate their followers about the regards of an immoral man's proneness to sin. There is a misconception about the list of seven “deadly” sins that they are sins that God will not forgive. According to the Bible, it is clear that the only sin God will not forgive is that of continued unbelief, because it rejects the only means to obtain forgiveness for Jesus Christ and His exchange from the death on the cross. <h5> Do Not Sin For Thou Shall Fall</h5></p>";
    // c.innerHTML ="<h1> </h1>";
    c.style.backgroundImage = "";
    // pride.style.backgroundImage= "url()";

  }else if (y > 1000 && y < 2000) {
    console.log("y > 1000 && y < 2000 ");
    counter.innerHTML = "<h3>Power</h3>";
    counter.style.backgroundImage = "url(http://via.placeholder.com/200x300)";
    a.innerHTML ="<h2> 1. Pride </h2>";
    a.style.backgroundColor = "white";
    b.innerHTML = " <p>Pride is excessive state of view of one's self without regards of others<br/> <br/> According to the Bible, it says the following in Jeremiah 9:23-24, “...Let not the mighty man boast of his might...but let him who boasts boast of this, that he understands and knows Me...”   <br/> <br/>“Pride goes before destruction, a haughty spirit before a fall” (Proverbs 16:18).<h5>I am so powerful that no one can stop me!</h5></p>";
    b.style.backgroundColor = "rgba(255,255,255,0.5)";
    b.style.backgroundImage = "";
    c.style.backgroundColor = "white";
    // b.innerHTML ="<h1> 7 Deadly Sins </h1>";
    c.style.backgroundImage = "url(img/p1.jpg)";
    // counter.style.backgroundColor = "purple";
  }

  else if (y > 2000 && y < 3000 ) {
    console.log("y > 2000 && y < 3000 ");
    counter.style.backgroundColor = "clear";
    counter.innerHTML = "<h3>Consume ALL</h3>";
    counter.style.backgroundImage = "url(http://via.placeholder.com/200x300)";
    a.innerHTML ="<h2> 2. Gluttony </h2>";
    a.style.backgroundColor = "white";
    b.style.backgroundColor = "white";
    b.style.backgroundImage = "url(http://via.placeholder.com/500x300)";
    c.style.backgroundColor = "rgba(255,255,255,0.5)";
    c.innerHTML = "<p> Gluttony is the excessive desire to consume more food and drink than which one requires. <br/> <br/> According to the Corinthians 10:31 says, “Therefore, whether you eat or drink, or whatever you do, do all to the glory of God.”<br/> <br/> “for drunkards and gluttons become poor, and drowsiness clothes them in rags” (Proverbs 23:21).<h5>All the food is mine to EAT!</h5> </p>";
    c.style.backgroundImage = "";
  }

    else if (y > 3000 && y < 4000 ) {
      console.log("y > 3000 && y < 4000 ");
      counter.style.backgroundColor = "clear";
      counter.innerHTML = "<h3>Lazy</h3>";
      counter.style.backgroundImage = "url(http://via.placeholder.com/200x300)";
      a.innerHTML ="<h2> 3. Sloth </h2>";
      a.style.backgroundColor = "white";
      b.style.backgroundColor = "rgba(255,255,255,0.5)";
      b.innerHTML ="<p>Sloth is an excessive laziness or the failure to act and utilize one’s talents by doing what is need to be done. <br/> <br/>Solomon spoke of sloth in Proverbs 6:6 saying, “Go to the ant, you sluggard! Consider her ways and be wise.”<br/><br/>  “The way of the sluggard is blocked with thorns, but the path of the upright is a highway” (Proverbs 15:19).<h5>I don't need to do anything.</h5></p>";
      b.style.backgroundImage = "";
      c.style.backgroundColor = "white";
      c.innerHTML = "";
      c.style.backgroundImage = "url(http://via.placeholder.com/500x300)";
    // a.innerHTML = " " //to change text
    // a.src = "alternate picture"; to change src for image file
    // a.style.display="none" // hide the object
  }
  else if (y > 4000 && y < 5000 ) {
    console.log("y > 4000 && y < 5000 ");
    counter.style.backgroundColor = "clear";
    counter.innerHTML = "<h3>Money</h3>";
    counter.style.backgroundImage = "url(http://via.placeholder.com/200x300)";
    a.style.backgroundColor = "white";
    a.innerHTML ="<h2> 4. Greed </h2>";
    b.style.backgroundColor = "white";
    b.style.backgroundImage = "url(http://via.placeholder.com/500x300)";
    c.style.backgroundColor = "rgba(255,255,255,0.5)";
    c.style.backgroundImage = "";
    c.innerHTML = "<p> Greed is an excessive pursuit of material possession. <br/><br/> According to the Bible, it says the following in Hebrews 13:5, 'Let your conduct be without covetousness; be content with such things as you have. For He Himself has said, I will never leave you nor forsake you.' <br/><br/>“Having lost all sensitivity, they have given themselves over to sensuality so as to indulge in every kind of impurity, with a continual lust for more” (Ephesians 4:19). <h5>All the money is for ME!</h5></p>";
  }
  else if (y > 5000 && y < 6000 ) {
    console.log("y > 5000 && y < 6000 ");
    counter.style.backgroundColor = "clear";
    counter.innerHTML = "<h3>Pleasure</h3>";
    counter.style.backgroundImage = "url(http://via.placeholder.com/200x300)";
    a.innerHTML ="<h2> 5. Lust </h2>";
    a.style.backgroundColor = "white";
    b.style.backgroundColor = "rgba(255,255,255,0.5)";
    b.innerHTML ="<p> Lust is having intense desire or need that is uncontrollable passion or longing, such as sex, money, or fame. <br/> <br/> According to the Bible, it speaks about lust in 2 Timpthy 2:22, “Flee also youthful lusts; but pursue righteousness, faith, love [and] peace...”<br/> <br/> “But I tell you that anyone who looks at a woman lustfully has already committed adultery with her in his heart” (Matthew 5:28). <h5>I desire all the pleausure!</h5></p>";
    b.style.backgroundImage = "";
    c.style.backgroundColor = "white";
    c.innerHTML = "";
    c.style.backgroundImage = "url(http://via.placeholder.com/500x300)";
  }
  else if (y > 6000 && y < 7000 ) {
    console.log("y > 6000 && y < 7000 ");
    counter.style.backgroundColor = "clear";
    counter.innerHTML = "<h3>Anger</h3>";
    counter.style.backgroundImage = "url(http://via.placeholder.com/200x300)";
    a.innerHTML ="<h2> 6. Wrath </h2>";
    a.style.backgroundColor = "white";
    b.style.backgroundColor = "white";
    b.style.backgroundImage = "url(http://via.placeholder.com/500x300)";
    c.style.backgroundColor = "rgba(255,255,255,0.5)";
    c.innerHTML = "<p>  Wrath is manifested by uncontrollable anger and hate towards another person.<br/><br/> According to the Bible speaks about wrath in Romans 12:19, “Beloved, never avenge yourselves, but leave it to the wrath of God, for it is written, 'Vengeance is mine, I will repay, says the Lord.'” <br/><br/>  “A gentle answer turns away wrath, but a harsh word stirs up anger” (Proverbs 15:1) <h5>Who dares upset my mood?</h5></p>";
    c.style.backgroundImage = "";
  }
  else if (y > 7000 && y < 8000 ) {
    console.log("y > 7000 && y < 8000 ");
    counter.style.backgroundColor = "clear";
    counter.innerHTML = "<h3>Possess</h3>";
    counter.style.backgroundImage = "url(http://via.placeholder.com/200x300)";
    a.innerHTML ="<h2> 7. Envy </h2>";
    a.style.backgroundColor = "white";
    b.style.backgroundColor = "rgba(255,255,255,0.5)";
    b.innerHTML ="<p> Envy is the intensity to desire to have an item or experience that someone else possesses. <br/><br/> According to the Bible, it says that the following in Proverbs 14:30, “A sound heart is life to the body, But envy is rottenness to the bones.” <br/><br/>  “Therefore, rid yourselves of all malice and all deceit, hypocrisy, envy, and slander of every kind. Like newborn babies, crave pure spiritual milk, so that by it you may grow up in your salvation” (1 Peter 2:1-2). <h5>I want your wondourous features!</h5></p>";
    b.style.backgroundImage = "";
    c.style.backgroundColor = "rgba(255,255,255,0.5)";
    c.style.backgroundImage = "url(http://via.placeholder.com/500x300)";

  }
  else {
    console.log("else");
    console.log("y > 8000");
    counter.style.backgroundColor = "clear";
    counter.innerHTML = "<h3>Click here to see more of my work<br/>   ---></h3>";
    counter.style.backgroundImage = "";
    a.innerHTML ="<h4> © 2018 by Phillip Tran. All Rights Reserved. </h4>";
    a.style.backgroundColor = "white";
    // a.style.backgroundImage = "url(http://via.placeholder.com/900x100)";
    b.style.backgroundColor = "rgba(0,0,0,0.9)";
    b.style.backgroundImage = "url(http://via.placeholder.com/500x300)";
    c.style.backgroundColor = "rgba(255,255,255,0.5)";
    c.innerHTML = "<p> Hello my name is Phillip Tran. I am an Asian American from Milpitas, California. I am currently a student at California State University of East Bay, studying Graphic Design. My inspiration of creating this project about the 7 deadly sins is an act of God of what part I believe in. I am showing this because I believe that these sins don't make up the horrible things people do, but a reminder of what these sins come from. Hopefully we can all feel the same way that no matter the difficulties, there is hope in everything and even in God.<br/><br/><br/><a href= https://philliphtran.github.io/portfolio/>Phillip's portfolio</a></p>";
    c.style.backgroundImage = "";
    // d.style.backgroundColor = "white";
  }
}
