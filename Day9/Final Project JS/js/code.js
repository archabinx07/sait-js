// Fri Oct 20
// Javascript Final Project (Tavel Agency)
// By Wilmar Delgado

//*******************************************************
//Mobile-Nav
//*******************************************************

function openNav() {
    document.getElementById("nav-mobile").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("nav-mobile").style.width = "0";
}


//*******************************************************
//Slider
//*******************************************************

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 5000); // Change image every 3 seconds
}


//*******************************************************
//Mouseover Packages
//*******************************************************

//Box #1
function mouseOverImage() {
    document.getElementById("img").src = "./img/pickwhere.jpg";
}
function mouseOutImage() {
    document.getElementById("img").src = "./img/map.JPG";
}
//Box #2
function mouseOverImage2() {
    document.getElementById("img2").src = "./img/travelstore.jpg";
}
function mouseOutImage2() {
    document.getElementById("img2").src = "./img/store.JPG";
}
//Box #3
function mouseOverImage3() {
    document.getElementById("img3").src = "./img/flycheap.jpg";
}
function mouseOutImage3() {
    document.getElementById("img3").src = "./img/plane.JPG";
}
//Box #4
function mouseOverImage4() {
    document.getElementById("img4").src = "./img/famfun.jpg";
}
function mouseOutImage4() {
    document.getElementById("img4").src = "./img/family.JPG";
}
//Box #5
function mouseOverImage5() {
    document.getElementById("img5").src = "./img/lux.jpg";
}
function mouseOutImage5() {
    document.getElementById("img5").src = "./img/luxury.JPG";
}
//Box #6
function mouseOverImage6() {
    document.getElementById("img6").src = "./img/hotdeals.jpg";
}

function mouseOutImage6() {
    document.getElementById("img6").src = "./img/hot.JPG";
}


//*******************************************************
//Flying Airplane
//*******************************************************

var planeFlies = true;
// var direction = 10;
function airplaneFlies() {
    var img = document.getElementById("airplane");
    var currentLeft = parseInt(img.style.left);

    if (planeFlies && (currentLeft > (window.innerWidth-img.width))) {            
        planeFlies = false;        
    }
    if (!planeFlies && (currentLeft <= 0)) {            
        planeFlies = true;        
    }
    if (planeFlies) {            
        img.style.right = (currentLeft + 10) + "px";   
        img.style.left = (currentLeft + 10) + "px";  
        img.style.transform = "scaleX(-1)";   
           
        // img.style.bottom = (currentLeft + direction) + 'px';      
    } else {            
        img.style.left = (currentLeft - 10) + "px";    
        img.style.right = (currentLeft - 10) + "px";    
        img.style.transform = "scaleY(-1)";         
    }    
}    

setInterval(airplaneFlies, 60);


//*******************************************************
//Validate Forms
//*******************************************************

var form = document.querySelector("form");
if (form.className === "myForm") {
    var pCode = document.getElementById("postalCode");
    var submit = document.getElementById("submit");

    submit.addEventListener("click", function(event) {
        if ((/[A-Z][0-9][A-Z][0-9][A-Z][0-9]/.test(pCode.value.toUpperCase()) != true)){
        event.preventDefault();
        alert("Please Enter A Valid Postal Code")
    }})}


//*******************************************************
//Contact Us
//*******************************************************

//Names Array
var contact = document.querySelector("section");

if (contact.className === "contact-section") {
    var contactOne = ["Name: Lavina Halberg"];
    var contactTwo = ["Name: Adriene Faison"];
    var contactThree = ["Name: Vally Enriquez"];
    var contactFour = ["Name: Gale Pesqueran"];
    var contactFive = ["Name: Tad Morisson"];

    document.getElementById("contactNameOne").innerHTML = contactOne;
    document.getElementById("contactNameTwo").innerHTML = contactTwo;
    document.getElementById("contactNameThree").innerHTML = contactThree;
    document.getElementById("contactNameFour").innerHTML = contactFour;
    document.getElementById("contactNameFive").innerHTML = contactFive;
}


//Numbers Array
var contactPara = document.querySelector("section");

if (contactPara.className === "contact-section") {
    var contactOnePara = ["Number: (xxx) 849 0441"];
    var contactTwoPara = ["Number: (xxx) 849 0441"];
    var contactThreePara = ["Number: (xxx) 849 0441"];
    var contactFourPara = ["Number: (xxx) 849 0441"];
    var contactFivePara = ["Number: (xxx) 849 0441"];

    document.getElementById("contactNumOne").innerHTML = contactOnePara;
    document.getElementById("contactNumTwo").innerHTML = contactTwoPara;
    document.getElementById("contactNumThree").innerHTML = contactThreePara;
    document.getElementById("contactNumFour").innerHTML = contactFourPara;
    document.getElementById("contactNumFive").innerHTML = contactFivePara;
}


//*******************************************************
//Footer Date
//*******************************************************

var myDate = new Date()
var month = myDate.getMonth() 
var day = myDate.getDate()
var year = myDate. getFullYear()

var fullMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

myDate = fullMonth[month] + "/" + day + "/" + year;
document.getElementById("todaysDate").innerHTML = myDate


