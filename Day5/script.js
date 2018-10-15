var myForm = document.getElementById("myForm");
console.log(myForm);


var email = myForm.email;
console.log(email);

var firstName = myForm["firstName"];
console.log(firstName);

//Place an email add in the input email.
// Do this in browser console log!!!
// console.log(myForm.email.value);
// console.log(myForm.firstName.value);

myForm.firstName.focus();
console.log(myForm.firstName.focus);

//Blur Gets rid of focus
// myForm.firstName.blur();
// console.log(myForm.firstName.blur);

var checkBoxlist = form2.feature;

for (var i = 0; i < checkBoxlist.length; i++) {
    if (checkBoxlist[i].checked) {
        console.log(checkBoxlist[i].value);
    }
}

var submitButton = myForm.submit;

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Welcome! Enjoy The Site.");

    var name = myForm["firstName"].value;
    console.log(name);
})
