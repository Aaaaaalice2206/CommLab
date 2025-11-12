    let container =document.querySelector("#container");

    function welcome(){
    //create element in "JS space"
    let headline = document.createElement("h5");
    headline.innerText = "Welcome to my page";

    // put it on the page
    //document.append(headline);
    container.append(headline);
    document.querySelector(".notWanted").remove()
    }

    function moveBox(){
        container.classList.toggle("move");
        let r1 = Math.random();
        console.log(r1);

        //custom number size
        let r2 = Math.random() * 100;
        console.log(r2);

        //custom min and max
        let r3 = 10 + Math.random() *10;
        console.log(r3);

        //custom integer 
        let r4 = Math.floor(r3);
        console.log(r4);

        document.querySelector(".notWanted").style.fontSize = r2+"px";
    }