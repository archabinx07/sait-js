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
    document.getElementById("img").src = "./img/pic2.jpg";
}

function mouseOutImage() {
    document.getElementById("img").src = "./img/map.JPG";
}

//Box #2
function mouseOverImage2() {
    document.getElementById("img2").src = "./img/pic3.jpg";
}

function mouseOutImage2() {
    document.getElementById("img2").src = "./img/store.JPG";
}


//Box #3
function mouseOverImage3() {
    document.getElementById("img3").src = "./img/pic4.jpg";
}

function mouseOutImage3() {
    document.getElementById("img3").src = "./img/plane.JPG";
}

//*******************************************************
//Flying Airplane
//*******************************************************

var planeFlies = true;
// var direction = 10;
function airplaneFlies() {
    var img = document.getElementById('airplane');
    var currentLeft = parseInt(img.style.left);

    if (planeFlies && (currentLeft > (window.innerWidth-img.width))) {            
        planeFlies = false;        
    }
    if (!planeFlies && (currentLeft <= 0)) {            
        planeFlies = true;        
    }
    if (planeFlies) {            
        img.style.right = (currentLeft + 10) + 'px';   
        img.style.left = (currentLeft + 10) + 'px';  
        img.style.transform = "scaleX(-1)";   
           
        // img.style.bottom = (currentLeft + direction) + 'px';      
    } else {            
        img.style.left = (currentLeft - 10) + 'px';    
        img.style.right = (currentLeft - 10) + 'px';    
        img.style.transform = "scaleY(-1)";         
    }    
}    

setInterval(airplaneFlies, 60);


//*******************************************************
//Validate Forms
//*******************************************************

function validateForm()                                    
{ 
    var name = document.forms["myForm"]["Name"];               
    var email = document.forms["myForm"]["EMail"];    
    var phone = document.forms["myForm"]["Phone"];  
    var what =  document.forms["myForm"]["Provinces"];  
    var city = document.forms["myForm"]["City"];  
    var address = document.forms["myForm"]["Address"];  
    var postalCode = document.forms["myForm"]["postalCode"];  
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
   
    if (address.value == "")                               
    { 
        window.alert("Please enter your address."); 
        name.focus(); 
        return false; 
    } 

    if (city.value == "")                        
    { 
        window.alert("Please enter your city"); 
        city.focus(); 
        return false; 
    } 

    if (what.selectedIndex < 1)                  
    { 
        alert("Please enter your course."); 
        what.focus(); 
        return false; 
    } 

    if (postalCode.value == "")                        
    { 
        window.alert("Please enter your postal code"); 
        postalCode.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    if (phone.value == "")                           
    { 
        window.alert("Please enter your phone number."); 
        phone.focus(); 
        return false; 
    } 

    return true; 
}

//*******************************************************
//Contact Us
//*******************************************************

var contactOne = ["Name: Lavina Halberg"];
document.getElementById("contactNameOne").innerHTML = contactOne[0];

var contactTwo = ["Name: Adriene Faison"];
document.getElementById("contactNameTwo").innerHTML = contactTwo[0];

var contactThree = ["Name: Valentine Enriquez"];
document.getElementById("contactNameThree").innerHTML = contactThree[0];

var contactFour = ["Name: Gale Pesqueiran"];
document.getElementById("contactNameFour").innerHTML = contactFour[0];

var contactFive = ["Name: Tad Morison"];
document.getElementById("contactNameFive").innerHTML = contactFive[0];

var contactOnePara = ["Number: (xxx) 849 0441"];
document.getElementById("contactNumOne").innerHTML = contactOnePara[0];

var contactTwoPara = ["Number: (xxx) 849 0441"];
document.getElementById("contactNumTwo").innerHTML = contactTwoPara[0];

var contactThreePara = ["Number: (xxx) 849 0441"];
document.getElementById("contactNumThree").innerHTML = contactThreePara[0];

var contactFourPara = ["Number: (xxx) 849 0441"];
document.getElementById("contactNumFour").innerHTML = contactFourPara[0];

var contactFivePara = ["Number: (xxx) 849 0441"];
document.getElementById("contactNumFive").innerHTML = contactFivePara[0];




//*******************************************************
//Footer Date
//*******************************************************

var myDate = new Date()
var month = myDate.getMonth() 
var day = myDate.getDate()
var year = myDate. getFullYear()

var fullMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.write(fullMonth[month] + "/" + day + "/" + year)


//**********************
//Mobile-nav
//**********************

function openNav() {
    document.getElementById("nav-mobile").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("nav-mobile").style.width = "0";
}
