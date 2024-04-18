

// zar stanga 


var randomNumber1 = Math.floor(Math.random()*6) +1;

var randomImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

//zar dreapta 



var randomNumber2 = Math.floor(Math.random() * 6) + 1;  // numar random

var randomImage2  = "dice" + randomNumber2 + ".png";   // poza random

var randomImageSource2 = "images/" + randomImage2 ; // sursa pozei random

var image2 = document.querySelectorAll("img")[1]; // selectam a doua <img>

image2.setAttribute("src" , randomImageSource2);  // schimbam sursa 


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🏆 Jucatorul 1 a castigat!!! 🎉";
}  else if(randomNumber2 > randomNumber1){document.querySelector("h1").innerHTML = "🎉 Jucatorul 2 a castigat!!! 🏆";
}  else {
    document.querySelector("h1").innerHTML = "Egal";
}