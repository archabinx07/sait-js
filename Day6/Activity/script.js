var btn = $('#btn');
var body = $("body")
btn.css('color', 'blue');
btn.html('Click!');
// btn.show();

$('form').on('submit', function(event) {  
    event.preventDefault();
    body.css('background-color', 'black');
});