let sendBtn = document.querySelector("#sendBtn");
let input = document.querySelector("#userInput");
let red1 = document.querySelector("#red1");
let momReply = document.querySelector("#momReply");
let red2 = document.querySelector("#red2");
let chatTitle = document.querySelector("#chatTitle");
let chatMessages = document.querySelector("#chatMessages");
let unknownNotif = document.querySelector("#unknownNotification");
let sendSound = document.querySelector("#sendSound"); 

let red1Shown = false;
let momReplyShown = false;
let red2Shown = false;
let unknownReplyShown = false;

sendBtn.addEventListener("click", function () {

    // click send the first time and show Red's first message
     if (red1Shown == false){
        red1.classList.remove("hidden");
        sendSound.play();
        red1Shown = true;
        chatTitle.textContent = "Mom typing...";
        chatTitle.classList.add("typing");
        input.value = "";
        // show mom's reply after 5 seconds 
        setTimeout(function(){
            if(momReplyShown == false){
                momReply.classList.remove("hidden");
                sendSound.play();
                momReplyShown = true;
                chatTitle.textContent = "Mom 🩷";
                chatTitle.classList.remove("typing");
                currentMessage = "But the forest is faster!"
                counter = 1;
            }
        }, 3000);
    }

    // click send the second time and show Red's second message
    else if (red1Shown == true && momReplyShown == true && red2Shown === false){
        red2.classList.remove("hidden");
        sendSound.play();
        red2Shown = true;
        input.value = "";

        let phone = document.querySelector(".phone");
        setTimeout(function () {
             phone.classList.add("shake");
             function shakeDone() {
                 window.location.href = "findmy.html";
                 phone.removeEventListener("animationend", shakeDone);
             }
             phone.addEventListener("animationend", shakeDone);
    }, 3000); 
}
});

let currentMessage = "I won't, I promise!";
let counter = 1;
input.addEventListener("input",function(e){
    if(counter <= currentMessage.length){    
        console.log("input event fired", counter);
         input.value = currentMessage.substring(0, counter);
    }else{
        input.value = currentMessage;
        console.log("reached end")
    }
    counter++;
})