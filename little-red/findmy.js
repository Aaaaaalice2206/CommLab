let mapContainer = document.querySelector(".map-container");
let grandmaPopup = document.querySelector(".grandma-popup");
let directionsBtn = document.querySelector(".directions");
let grandmaTop = 300;
let grandmaLeft = 150;

directionsBtn.classList.add("hidden");
let directionsShown = false;

mapContainer.addEventListener("scroll", function() {
    let scrollTop = mapContainer.scrollTop;
    let scrollLeft = mapContainer.scrollLeft;

    if (Math.abs(scrollTop - grandmaTop) < 60 && Math.abs(scrollLeft - grandmaLeft) < 60) {
        grandmaPopup.classList.remove("hidden");
        
        if (!directionsShown) {
            directionsShown = true;
            setTimeout(function() {
            directionsBtn.classList.remove("hidden");
        }, 1000);
        }

    } else {
        grandmaPopup.classList.add("hidden");
    }
});

//looking for the actual position of grandma's house in scrolling
mapContainer.addEventListener("scroll", function () {
    console.log("scrollTop:", mapContainer.scrollTop, "scrollLeft:", mapContainer.scrollLeft);
});

directionsBtn.addEventListener("click", function () {
    window.location.href = "media.html";  
});


