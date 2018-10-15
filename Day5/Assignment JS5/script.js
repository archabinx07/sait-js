var submitButton = myForm.submit;
var score = 0;

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    questionOneError.style.display = "none"; 

    var weapon = myForm["weapon"].value;
    // console.log(weapon);

    if (!weapon) {      
        event.preventDefault();      
        questionOneError.style.display = "block"; 
    } 
    if (sword.checked) {
        score = score + 20;  
        event.preventDefault(); 
        qOne.style.display = "none";
        qTwo.style.display = "block";
    } else if (weapon) {
        event.preventDefault(); 
        qOne.style.display = "none";
        qTwo.style.display = "block";
    }
});




var submitTwo = myForm.submitTwo;
submitTwo.addEventListener("click", function(event) {
    event.preventDefault();
    questionTwoError.style.display = "none"; 

    var city = myForm["city"].value;
    // console.log(weapon);

    if (!city) {      
        event.preventDefault();      
        questionTwoError.style.display = "block"; 
    } 
    if (Madrid.checked) {
        score = score + 20;  
        event.preventDefault(); 
        qTwo.style.display = "none";
        qThree.style.display = "block";
    } else if (city) {
        event.preventDefault(); 
        qTwo.style.display = "none";
        qThree.style.display = "block";
    }
});



var submitThree = myForm.submitThree;
submitThree.addEventListener("click", function(event) {
    event.preventDefault();
    questionThreeError.style.display = "none"; 

    var river = myForm["river"].value;
    // console.log(weapon);

    if (!river) {      
        event.preventDefault();      
        questionThreeError.style.display = "block"; 
    } 
    if (Amazon.checked) {
        score = score + 20;  
        event.preventDefault(); 
        qThree.style.display = "none";
        qFour.style.display = "block";
    } else if (river) {
        event.preventDefault(); 
        qThree.style.display = "none";
        qFour.style.display = "block";
    }
});



var submitFour = myForm.submitFour;
submitFour.addEventListener("click", function(event) {
    event.preventDefault();
    questionFourError.style.display = "none"; 

    var province = myForm["province"].value;
    // console.log(weapon);

    if (!province) {      
        event.preventDefault();      
        questionFourError.style.display = "block"; 
    } 
    if (Edmonton.checked && Calgary.checked) {
        score = score + 20;  
        event.preventDefault(); 
        qFour.style.display = "none";
        qFive.style.display = "block";
    } else {
        event.preventDefault(); 
        qFour.style.display = "none";
        qFive.style.display = "block";
    }
});



var submitFive = myForm.submitFive;
submitFive.addEventListener("click", function(event) {
    event.preventDefault();
    questionFiveError.style.display = "none"; 

    var number = myForm["number"].value;
    // console.log(weapon);

    if (!number) {      
        event.preventDefault();      
        questionFiveError.style.display = "block"; 
    } 
    if (7 === true) {
        score = score + 20;  
        event.preventDefault(); 
        qFive.style.display = "none";
        thankYou.style.display = "block";
    } else if (number) {
        event.preventDefault(); 
        qFive.style.display = "none";
        thankYou.style.display = "block";
    }
});