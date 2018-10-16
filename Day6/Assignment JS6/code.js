///JQuery Way!!!
// function clickHandler() {
//     console.log('clicked!');
// }
// $('#button').on('click', clickHandler);

// $('button').on('click', function() {
//     console.log('clicked!');
// });

var btn = $('button');
var square = $("#square")
btn.css('color', '');
btn.html('Click!');

$('button').on('click', function(event) {  
    event.preventDefault();
    square.css({'background-color' : randomColor()});
});

