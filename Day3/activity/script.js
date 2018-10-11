var header = document.getElementById("header");
console.log(header)



var listItems= document.getElementsByTagName("li");
for (var i = 0; i < listItems.length; i++) {
    var listItems = listItems[i];
}

var listItems = document.querySelectorAll(".nav-item");
console.log(listItems)

var firstItem = document.querySelector("li");
console.log(firstItem)

console.log(listItems[0].classList);

// document.getElementById("uniqueID");
var specificParagraph = document.getElementsByTagName("p") [1];
console.log(specificParagraph);

var imgVenom = document.getElementById("randomPic");
imgVenom.src = 'https://i.gifer.com/1VUM.gif';


//Changing atributess
var heading = document.getElementsByTagName("h1")[0]
heading.style.color = "blue";


//Creating some more trough JS
var pageBody = document.getElementsByClassName("footer")[0];
pageBody.innerHTML = "<h1>Oh Yeee</h1><p>I changed the whole page</p>"


//Creating a paragraph trough JS
var newParagraph = document.createElement("p");
var paragraphText = document.createTextNode("Wzaaaaap Venom");
newParagraph.appendChild(paragraphText);
main.appendChild(newParagraph);