let pics = [
    "redintheforest1.jpg",
    "redintheforest2.jpg",
    "redintheforest3.jpg",
    "redintheforest4.jpg",
    "redintheforest5.jpg"
];

let index = 0;
let screen = document.querySelector("#redScreen");

screen.addEventListener("click", function () {
    index = (index + 1) % pics.length;
    screen.src = pics[index];
});

let commentsBtn = document.querySelector("#commentsBtn");

commentsBtn.addEventListener("click", function () {
    window.location.href = "notes.html";  
});