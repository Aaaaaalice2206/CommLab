let items = document.querySelectorAll(".list li");
let alertBox = document.querySelector("#alert");
let triggered = false;

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

            setTimeout(function () {
                window.location.href = "shutdown.html";
            }, 3500);
        }
    }
});
