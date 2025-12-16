//P1 lockscreen
function getTheTime(){
    let now = new Date(); // return the "current moment" / current time
    // console.log(now)
    let h = now.getHours();      // 0–23
    let m = now.getMinutes();    // 0–59
    console.log(h, m);   

    document.querySelector("#hour").textContent = String(h).padStart(2, '0');
    document.querySelector("#minute").textContent = String(m).padStart(2, '0');
}

setInterval(getTheTime, 1000);

let phone = document.querySelector(".phone img");
let notification = document.querySelector(".notification");
let unlock = document.querySelector(".unlock");
let messageinSound = document.querySelector("#message-sound");

     phone.addEventListener("click", function() {
         notification.classList.remove("hidden");
         unlock.classList.remove("hidden");
         messageinSound.play();
    });


let unlockLink = document.querySelector("#unlockBtn");
let authPopup = document.querySelector("#authorization-popup");
let phoneDiv = document.querySelector(".phone");
let enterBtn = document.querySelector("#enterBtn");
let answerInput = document.querySelector("#answer");
let errorMsg = document.querySelector("#error-message");
let unlockSound = document.querySelector("#unlock-sound");


  unlockLink.addEventListener("click", function() {
    phoneDiv.classList.add("blur");
    authPopup.classList.remove("hidden");
    });

  enterBtn.addEventListener("click", function() {
  let answer = answerInput.value.trim();
  if(answer == "Little Red Riding Hood") {
    unlockSound.play();
    setTimeout(function() {
      window.location.href = "mainpage.html";
    }, 150);
    //added the settimeout because initially the sound was cut off when redirecting immediately
  } else {
    errorMsg.textContent = "Try again!";
  }
  answerInput.value = "";
});




