var square = document.getElementById("myDiv");
myDiv.style.position = "absolute";
myDiv.style.top = "200px";
myDiv.style.left = "800px";


// var  timerId = setTimeout(yourFunction, millisecondsDelay);


//SETTIMEOUT

// function doThisLater() {
//     alert("Time's up");
// }
// setTimeout(doThisLater, 3000);


//STOP A TIMER
function doThisLater() {
    alert("Time's up");
}
var timerId = setTimeout(doThisLater, 1000);
clearTimeout(timerId);


//INTERVALS
// var myTimerID = setInterval(myFunction, 5000);
// clearInterval(myTimerID);


//ACTIVITY: MAKE A CLOCK
function updateTime() {
    document.getElementById("output").innerHTML = new Date();
}

setInterval(updateTime, 1000);


// var walkForwards = true;
// function gokuWalk() {
//     var img = document.getElementById('goku');
//     var currentLeft = parseInt(img.style.left);

//     if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {            
//         walkForwards = false;        
//     }
//     if (!walkForwards && (currentLeft <= 0)) {            
//         walkForwards = true;        
//     }
//     if (walkForwards) {            
//         img.style.left = (currentLeft + 10) + 'px';        
//     } else {            
//         img.style.left = (currentLeft - 10) + 'px';        
//     }    
// }    

// setInterval(gokuWalk, 10);

var walkForwards = true;
var direction = 10;
function gokuWalk() {
    var img = document.getElementById('goku');
    var currentLeft = parseInt(img.style.left);

    if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {            
        walkForwards = false;        
    }
    if (!walkForwards && (currentLeft <= 0)) {            
        walkForwards = true;        
    }
    if (walkForwards) {            
        img.style.left = (currentLeft + direction) + 'px';   
        img.style.transform = "scaleY(-1)";   
           
        // img.style.bottom = (currentLeft + direction) + 'px';      
    } else {            
        img.style.left = (currentLeft - direction) + 'px';    
        img.style.transform = "scaleX(-1)"; 
        // img.style.bottom = (currentLeft - direction) + 'px';             
    }    
}    

setInterval(gokuWalk, 10);

//CALLING FUNCTIONS FROM HTML
function sayHi (event) {  
    alert('Hi!');
};

//CALLING FUNCTIONS FROM JS #addEventListener
var button = document.getElementById("secondBtn");
button.addEventListener("mouseover", function (event) {  
    button.style.backgroundColor = "yellow";
});


var button = document.getElementById("secondBtn");
button.addEventListener("mouseout", function (event) {  
    button.style.backgroundColor = "";
});

//CALLING FUNCTIONS FROM JS SECOND METHOOD #addEventListener
var button2 = document.getElementById("thirdBtn");
var sayHi = function (event) {  
    alert("Wazaaaaaaap!");
};
button2.addEventListener("click", sayHi);


myButton = document.getElementById("fourthBtn");
myButton.addEventListener("click", function(event) {  
    btn = event.currentTarget;  
    btn.style.backgroundColor = 'red';  
    // btn.innerHTML = 'Clicked!';
    alert("Clicked!");
});


var link = document.getElementById("myLink");
link.addEventListener("click", function(event) {  
    event.preventDefault();
    alert("Error! 404");
});