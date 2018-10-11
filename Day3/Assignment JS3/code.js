var kitty = document.createElement("img");
var puppy = document.createElement("img");
kitty.src="https://placekitten.com/408/287";
puppy.src="http://www.placepuppy.net/400/250";

if (Modernizr.geolocation ) {
    document.getElementById("main").append(kitty);
} else {
    document.getElementById("main").append(puppy);
}


if (history.length < 1) {
    var pageBody = document.getElementsByTagName("body")[0]
    pageBody.style.backgroundColor = "lightblue";
} else {
    var pageBody = document.getElementsByTagName("body")[0]
    pageBody.style.backgroundColor = "orange";
}

var myHeading = document.getElementById("myHeading");
myHeading.style.color = "darkred";


var listItems = document.querySelectorAll(".nav-item");
console.log(listItems)

for (var i = 0; i < listItems.length; i++) {
    if (i % 2 === 0) {
        listItems[i].style.backgroundColor = "white";
    } else {
        listItems[i].style.backgroundColor = "darkgreen";
    }
}
