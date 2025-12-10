let phone = document.querySelector("#phoneontheground");
let popup = document.querySelector(".phone-popup");

phone.addEventListener("click", function() {
    popup.style.display = "block";
});

popup.addEventListener("click", function() {
    popup.style.display = "none";
});

let wolf = document.querySelector(".wolf");
wolf.style.cursor = "pointer"; 
wolf.addEventListener("click", function(){
    window.location.href = "lesson.html"; 
});
