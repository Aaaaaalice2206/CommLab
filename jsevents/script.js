let mybutton = document.querySelector("#mybutton");
let myinput = document.querySelector("#myinput");
let myoutput = document.querySelector("#myoutput");

//define function
function buttonClicked(eventInfo){
    document.body.style.backgroundColor = "green";
    console.log(eventInfo.target)
    //console.log(mybutton)
    eventInfo.target.remove();
}

//reference function 
mybutton.addEventListener("mouseover", buttonClicked);

//mybutton.addEventListener("click", function(){
    //document.body.style.backgroundColor = "green";
//});

function inputChanged(eventInfo){
    console.log(eventInfo.target.value);
    console.log("input changed!");
    myoutput.innerText = eventInfo.target.value;
}
//                       "change"
myinput.addEventListener("input", inputChanged);

//上面这些代码可以让这个滑动器的数字出现在屏幕的下面