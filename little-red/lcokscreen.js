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
// how to make the numbers two digit? now if it's 1:00, it will show 1:0.
//ans: search js pad number to two dogots leading 0，need to use string()把这些number不足两位数的用两位数补齐
// eg: String(n).padStart(4, '0'); // '0009'

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
  //added trim() to remove extra spaces before or after the answer,before adding this enterBtn always showed try again even the answer was correct but with extra spaces
  //reference:https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-spacing-trim
  if(answer == "Little Red Riding Hood") {
    unlockSound.play();
    setTimeout(function() {
      window.location.href = "messages.html";
    }, 150);
    //added the settimeout because initially the sound was cut off when redirecting immediately
  } else {
    errorMsg.textContent = "Try again!";
  }
  answerInput.value = "";
});




