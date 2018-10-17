//Define Variables
var submit = $('#submit');
var colorAmount = $('#number');
var square = $('#square');
var square2 = $('#square2');
var square3 = $('#square3');
var square4 = $('#square4');

// var hueApply = $('#hueApply');
var hue = $('#hue')

var luminosityApply = $('#addLuminosity');
var luminosity = $('#luminosity')



// Submit Hue Colors

submit.on('click', function () {
     console.log(colorAmount.val())
     console.log(hue.val())
    if (colorAmount.val() == 1 && hue.val() === 'random') {
        square.css({'display': 'block', 'background-color': randomColor()})
        square2.css({'display': 'none', 'background-color': randomColor()})
        square3.css({'display': 'none', 'background-color': randomColor()})
        square4.css({'display': 'none', 'background-color': randomColor()})
    }

    if (colorAmount.val() == 2 && hue.val() === 'random') {
        square.css({'display': 'block', 'background-color': randomColor()})
        square2.css({'display': 'block', 'background-color': randomColor()})
        square3.css({'display': 'none', 'background-color': randomColor()})
        square4.css({'display': 'none', 'background-color': randomColor()})
    }

    if (colorAmount.val() == 3 && hue.val() === 'random') {
        square.css({'display': 'block', 'background-color': randomColor()})
        square2.css({'display': 'block', 'background-color': randomColor()})
        square3.css({'display': 'block', 'background-color': randomColor()})
        square4.css({'display': 'none', 'background-color': randomColor()})
    }

    if (colorAmount.val() == 4 && hue.val() === 'random') {
        square.css({'display': 'block', 'background-color': randomColor()})
        square2.css({'display': 'block', 'background-color': randomColor()})
        square3.css({'display': 'block', 'background-color': randomColor()})
        square4.css({'display': 'block', 'background-color': randomColor()})
    }

    if (colorAmount.val() == 1 && hue.val() !== 'random') {
        square.css({'display': 'block', 'background-color': randomColor({
            hue: hue.val()
        })})
        square2.css({'display': 'none', 'background-color': randomColor({
            hue: hue.val()
        })})
        square3.css({'display': 'none', 'background-color': randomColor({
            hue: hue.val()
        })})
        square4.css({'display': 'none', 'background-color': randomColor({
            hue: hue.val()
        })})
    }

    if (colorAmount.val() == 2) {
        square.css({'display': 'block', 'background-color': randomColor({
            hue: hue.val()
        })})
        square2.css({'display': 'block', 'background-color': randomColor({
            hue: hue.val()
        })})
        square3.css({'display': 'none', 'background-color': randomColor({
            hue: hue.val()
        })})
        square4.css({'display': 'none', 'background-color': randomColor({
            hue: hue.val()
        })})
    }

    if (colorAmount.val() == 3) {
        square.css({'display': 'block', 'background-color': randomColor({
            hue: hue.val()
        })})
        square2.css({'display': 'block', 'background-color': randomColor({
            hue: hue.val()
        })})
        square3.css({'display': 'block', 'background-color': randomColor({
            hue: hue.val()
        })})
        square4.css({'display': 'none', 'background-color': randomColor({
            hue: hue.val()
        })})
    }

    if (colorAmount.val() == 4) {
        square.css({'display': 'block', 'background-color': randomColor({
            hue: hue.val()
        })})
        square2.css({'display': 'block', 'background-color': randomColor({
            hue: hue.val()
        })})
        square3.css({'display': 'block', 'background-color': randomColor({
            hue: hue.val()
        })})
        square4.css({'display': 'block', 'background-color': randomColor({
            hue: hue.val()
        })})
    }
})


// LUMINOSITY SECTION

luminosityApply.on('click', function () {
    console.log(luminosity.val());
    square.css({'background-color': randomColor({
        hue: hue.val(),
        luminosity: luminosity.val()
    })})
    square2.css({'background-color': randomColor({
        hue: hue.val(),
        luminosity: luminosity.val()
    })})
    square3.css({'background-color': randomColor({
        hue: hue.val(),
        luminosity: luminosity.val()
    })})
    square4.css({'background-color': randomColor({
        hue: hue.val(),
        luminosity: luminosity.val()
    })})
})