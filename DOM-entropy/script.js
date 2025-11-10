let container = document.querySelector("#container");
let body = document.querySelector("body");

function Playwithcat() {
    let ball = document.createElement("div");
    let ballSize = 20 + Math.floor(Math.random() * 80);
    ball.style.width = ballSize + "px";
    ball.style.height = ballSize + "px";
    
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    ball.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    
    ball.style.position = "absolute";
    ball.style.borderRadius = "50%";
    ball.style.left = Math.random() * (1400 - ballSize) + "px";
    ball.style.top = Math.random() * (800 - ballSize) + "px";
    
    body.append(ball);
    container.classList.toggle("move");
}

function moveBox() {
    container.classList.toggle("move");
    let r1 = Math.random();
    console.log(r1);

    let r2 = Math.random() * 100;
    console.log(r2);

    let r3 = 10 + Math.random() * 10;
    console.log(r3);

    let r4 = Math.floor(r3);
    console.log(r4);
}