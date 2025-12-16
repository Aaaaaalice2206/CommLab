let pics = [
    "redintheforest1.jpg",
    "redintheforest2.jpg",
    "redintheforest3.jpg",
    "redintheforest4.jpg",
    "redintheforest5.jpg"
];

let index = 0;
let screen = document.querySelector("#redScreen");

let nextPic = function(event) {
    index = index + 1;
    if(index > pics.length - 1) {
        index = 0;
    }
    screen.src = pics[index];
};
screen.addEventListener("click", nextPic);

let commentsBtn = document.querySelector("#commentsBtn");

commentsBtn.addEventListener("click", function () {
    window.location.href = "notes.html";  
});


