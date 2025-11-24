let s = document.querySelector("span");
console.log(s)

function move(eventInfo){
    console.log(eventInfo.target);
    let elementThatwasMouseovered = eventInfo.target;
    elementThatwasMouseovered.style.color ="red";
    let randomX =-50 + Math.random()*100; //random value between -50 and 50
    let randomY =-50 + Math.random()*100;
    //                                         "translate(50px,50px)"
    elementThatwasMouseovered.style.transform ="translate("+ randomX +"px,0px)";
    console.log("mouse over")
}

s.addEventListener("mouseover", move)

function addMover(element){
    element.addEventListener("mouseover", move)
}

//select ALL the spans
let allSpans = document.querySelectorAll("span");

allSpans.forEach(addMover);





