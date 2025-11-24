let clockBox = document.querySelector("#clock");
let popsound = document.querySelector("#popsound");
let bgm = document.querySelector("#bgm");
let musicBtn = document.querySelector("#music-btn");

function getTheTime(){
    let now = new Date(); // return the "current moment" / current time
    console.log(now);
    let h = now.getHours();      // 0–23
    let m = now.getMinutes();    // 0–59
    let s = now.getSeconds();    // 0–59
    
    createBubble(h, m, s);
}

function createBubble(h, m, s) {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");

    let size = 20 + m * 2;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    let hue = (h * 15) % 360;
    bubble.style.backgroundColor = `hsla(${hue}, 80%, 60%, 0.7)`;

    
    bubble.style.left = Math.random() * 780 + "px"; 
    bubble.style.bottom = "0px";

    clockBox.append(bubble);


    let xVel = (Math.random() - 0.5) * 3;   
    let yVel = 1 + Math.random() * 3;     

    let floatInterval = setInterval(function() {
    let x = parseFloat(bubble.style.left);
    let y = parseFloat(bubble.style.bottom);
    bubble.style.left = x + xVel + "px";
    bubble.style.bottom = y + yVel + "px";
}, 20);

        setTimeout(function() {
        bubble.style.transition = "transform 0.3s, opacity 0.3s";
        bubble.style.transform = "scale(4)";
        bubble.style.opacity = 0;

        popsound.currentTime = 0;
        popsound.play();

    }, 10000);

    setTimeout(function() {
        clearInterval(floatInterval);
        bubble.remove();
    }, 11000);
}

setInterval(getTheTime, 1000);4

musicBtn.addEventListener("click", function() {
    if (bgm.paused) {
        bgm.play();
    } else {
        bgm.pause();
    }
});


// Leon's Helper function:
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}