let Name = "Alice";
let temperature = 26;

let headline = document.querySelector("h1");

//document.querySelector("h1").innerText="tried it, didnt like it";

//below is a function call:
alert("Hello" + Name +"!It's " + temperature + " degrees outside.");

temperature = 20;

// alert("Now it's " + temperature + " degrees outside.");
console.log("The page has loaded and the temperature is " + temperature + " degrees.");

function doManyThing(){
    console.log("Doing many things...");
    alert("Hello" + Name +"!It's " + temperature + " degrees outside.");
}

function greet(greeting){
    console.log("received:"+greeting);
    alert(greeting);
    headline.innerText= "tried it, didnt like it";
}

let myText = document.querySelector(".myText");

function changeText(){
    console.log("click the button");
    myText.innerHTML = "click <a href='#'>here</a> to go somewhere!";
    headline.style.textDecoration="underline";
    myText.style.backgroundColor="lightblue";
}