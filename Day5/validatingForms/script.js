// var submitButton = document.getElementById('submitBtn');
// var errorName = document.getElementById('errorName');
// var errorAge = document.getElementById('errorAge');

// submitButton.addEventListener("click", function(event) {  
//     errorName.style.display = "none";  
//     errorAge.style.display = "none";
    
//     var name = form1.name.value;
//     var age = form1.txtAge.value;
    
//     if (!name) {      
//         event.preventDefault();      
//         errorName.style.display = "block";  
//     }
//     if (!age) {      
//         event.preventDefault();      
//         errorAge.style.display = "block";  
//     }
// })


var submitButton = document.getElementById('submitBtn');
var errorAge = document.getElementById('errorAge');
var errorYoung = document.getElementById('errorYoung');

submitButton.addEventListener("click", function(event) {    
    errorAge.style.display = "none";
    errorYoung.style.display = "none";
    
    var age = ageForm.txtAge.value;

    if (!age) {      
        event.preventDefault();      
        errorAge.style.display = "block"; 
    } else if (age < 18) {      
        event.preventDefault();      
        errorYoung.style.display = "block";
    }
});


//regExp constructor
var regEx1 = new RegExp("abc");
// literal value
var regEx2 = /abc/;

console.log(/abc/.test("abcde")); // true
console.log(/abc/.test("abxde")); // false