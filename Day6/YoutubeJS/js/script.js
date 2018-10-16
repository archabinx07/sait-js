var linkTags = document.querySelectorAll("a");
console.log(linkTags);

for (var i = 0; i < linkTags.length; i++) {
    var href = linkTags[i].getAttribute("href");
    var thumbnail = youtube.generateThumbnailUrl(href);
    var img = document.createElement("img");
    img.setAttribute("src", thumbnail);
    linkTags[i].appendChild(img);
}

// var p = document.createElement('p');
// p.appendChild(document.createTextNode('Welcome!'));
// p.style.cssFloat = 'left';
// p.style.backgroundColor = 'red';
// p.className = 'special';
// document.querySelector('div.header').appendChild(p);

// var newP = $('<p>Welcome!</p>');
// newP.css({'float' : 'left', 'background-color': 'red'});
// newP.addClass('special');
// $('div.header').append(newP);

