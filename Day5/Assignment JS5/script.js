
//Question 1
var submitButton = myForm.submit;
var score = 0;

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    questionOneError.style.display = "none"; 

    var weapon = myForm["weapon"].value;

    if (!weapon) {    
        questionOneError.style.display = "block"; 
    } 
    if (sword.checked) {
        score = score + 20;  
        console.log(score);
        qOne.style.display = "none";
        qTwo.style.display = "block";
    } else if (weapon) { 
        qOne.style.display = "none";
        qTwo.style.display = "block";
    }
});



//Question 2
var submitTwo = myForm.submitTwo;
submitTwo.addEventListener("click", function(event) {
    event.preventDefault();
    questionTwoError.style.display = "none"; 

    var city = document.getElementById('Madrid');

    if (city.value =='') {           
        questionTwoError.style.display = "block"; 
    } 
    if (city.value === 'madrid' || city.value === 'Madrid') {
        score = score + 20;
        console.log(score);
        qTwo.style.display = "none";
        qThree.style.display = "block";
    } else if (city.value !=='') {
        qTwo.style.display = "none";
        qThree.style.display = "block";
    }
});


//Question 3
var submitThree = myForm.submitThree;
submitThree.addEventListener("click", function(event) {
    event.preventDefault();
    questionThreeError.style.display = "none"; 

    var city = document.getElementById('Amazon');

    if (city.value =='') {    
        questionThreeError.style.display = "block"; 
    } 
    if (city.value === 'amazon' || city.value === 'Amazon') {
        score = score + 20;
        console.log(score);  
        qThree.style.display = "none";
        qFour.style.display = "block";
    } else if (city.value !=='') {
        qThree.style.display = "none";
        qFour.style.display = "block";
    }
});


//Question 4
var submitFour = myForm.submitFour;
submitFour.addEventListener("click", function(event) {
    event.preventDefault();
    questionFourError.style.display = "none";

    var province = myForm["province"].value;

    if (!province) {           
        questionFourError.style.display = "block"; 
    } 
    if (edmonton.checked && calgary.checked) {
        score = score + 20;  
        console.log(score);
        qFour.style.display = "none";
        questionFourError.style.display = "none";
        qFive.style.display = "block";
    } else if (toronto.checked || vancouver.checked || montreal.checked) {
        qFive.style.display = "block";
        qFour.style.display = "none";
        questionFourError.style.display = "none";
        
    }
});


//Question 5
var submitFive = myForm.submitFive;
submitFive.addEventListener("click", function(event) {
    event.preventDefault();
    questionFiveError.style.display = "none"; 
    questionFourError.style.display = "none";

    var correctNum = document.getElementById('number');

    if (correctNum.value =='') {            
        questionFiveError.style.display = "block"; 
    } 
    if (correctNum.value == 7) {
        score = score + 20;
        console.log(score); 
        //Displays Result
        document.getElementById("result").innerHTML = score;
        qFive.style.display = "none";
        scoreMessage.style.display = "block";
    } else if (correctNum.value !== 7) {
        //Displays Result
        document.getElementById("result").innerHTML = score;
        qFive.style.display = "none";
        scoreMessage.style.display = "block";
        document.querySelectorAll("score").innerHTML = "";
    }
});


