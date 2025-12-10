let trigger = document.querySelector(".phoneontheground");
let popup = document.querySelector(".phone-popup");

trigger.addEventListener("click", function() {
    popup.style.display = "flex";
});

popup.addEventListener("click", function() {
    popup.style.display = "none";
});
