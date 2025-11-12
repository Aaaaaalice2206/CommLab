//let firstButton = document.querySelector("#firstbutton");
//changeInnerText(firstButton)

// we give an element to this function and the element will turn red and change text
function changeInnerText(elm){
    elm.innerText = "STARTED";
    elm.style.color = "red";
}

function colorize(elm){
    elm.style.backgroundColor = "red";
}

function clickedButton(){
    // // select boxes
    let b =document.querySelector(".box");

    console.log(b);
    let bs = document.querySelectorAll(".box");
    console.log(bs);

    //call function for each element in a list bs
    bs.forEach(colorize);
}


//function clickedButton(){
    //create a button
    //let b = document.createElement("button");
    //b.innerText="Start the Engine";
    //b.onclick = alert();
    //document.body.append(b);
//}

