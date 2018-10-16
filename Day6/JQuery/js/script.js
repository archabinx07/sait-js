var newH = $('<h1>Welcome To My Site! <br> Enjoy!</h1>');
newH.css({"background-color": 'grey', "text-align" : "center"});
newH.addClass('special');
$('header').append(newH);

$('#main');
var newp = $('<p>Yeah Boiii<p>');
newp.css({"font-family" : "MS Comic Sans", "font-size" : "30px", "text-align" : "center"})
newp.addClass('special');
$("#main").append(newp);

console.log($('a').html());
console.log($('a').attr('href')); 
console.log($('a').css('color')); 

$(document).ready(function() {
var links = $('a');
links.each(function() {
    var link = $(this);
    link.text(link.text() + '!!');
});
})


///JQuery Way!!!
function clickHandler() {
    console.log('clicked!');
}
$('#button').on('click', clickHandler);

$('#button').on('click', function() {
    console.log('clicked!');
});



$('a').on('keypress', function(event) {
    // outputs event object
    console.log(event);
    // outputs value for key pressed
    console.log(event.which);
    // outputs element clicked
    console.log(event.target);
});


$('form').on('submit', function(event) {  
    event.preventDefault();
    console.log('Not submitting the form!');// Maybe I want to do stuff first.
});


$('#error').toggle(1000);
// $('#error').hide();
$('#error').fadeIn(1000);
$('#error').show(1000, function() {  
    $(this).addClass('alert')
});


var banner = $('#banner');
banner.css('color', 'red');
banner.html('Welcome!');
banner.show();