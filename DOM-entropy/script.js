let container = document.querySelector("#container");
let body = document.querySelector("body");

function Playwithcat() {
    let ball = document.createElement("div");
    //ball size
    let ballSize = 40 + Math.floor(Math.random() * 80);
    ball.style.width = ballSize + "px";
    ball.style.height = ballSize + "px";
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    //ball color
    ball.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    ball.style.position = "absolute";
    ball.style.borderRadius = "50%";
    ball.style.left = Math.random() * (1400 - ballSize) + "px";
    ball.style.top = Math.random() * (800 - ballSize) + "px";
    ball.classList.add("ball");
    body.append(ball);
    //move container
    container.classList.toggle("move");
}
