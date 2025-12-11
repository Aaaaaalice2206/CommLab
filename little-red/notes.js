let items = document.querySelectorAll(".list li");
let alertBox = document.querySelector("#alert");
let triggered = false;

function showBloodSplashes() {
    let container = document.querySelector(".blood-container");
    let count = 6; 

    for (let i = 0; i < count; i++) {
        let splash = document.createElement("img");
        splash.src = "blood.png";   
        splash.classList.add("blood-splash");

        splash.style.top = (Math.random() * 100) + "px";
        splash.style.left = (Math.random() * 500) + "px";

        container.appendChild(splash);

        (function (index, element) {
            setTimeout(function () {
                element.style.opacity = "1";
                element.style.transform = "scale(1)";
            }, index * 300);
        })(i, splash);
    }
}

document.querySelector(".screen").addEventListener("scroll", function () {
    for (let i = 0; i < items.length; i++) {

        let item = items[i];
        let rect = item.getBoundingClientRect();
        let screenRect = document.querySelector(".screen").getBoundingClientRect();

        if (rect.top < screenRect.bottom - 40) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }

        if (i == items.length - 1 && rect.top < screenRect.bottom - 60 && !triggered) {

            triggered = true;

            alertBox.style.opacity = "1";

            let sound = document.querySelector("#alertSound");
            sound.play();

            showBloodSplashes();

            setTimeout(function () {
                window.location.href = "shutdown.html";
            }, 10500);
        }
    }
});
