//create the content that you want
var artist = document.getElementById("name");
var title = document.getElementById("title");
var lyricsContainer = document.getElementById("lyricsContainer");
var submit = document.getElementById('submit');


submit.addEventListener('click', function(event){
    event.preventDefault();
    var url = ('https://api.lyrics.ovh/v1/' + (artist.value) + '/' + (title.value));
    console.log(url);

fetch(url, {
method: 'GET',
headers: {
    'Content-Type': 'application/json'
}
})
.then(function(response) {
return response.json();
})
.then(function(data) {
    if (data.error == 'No lyrics found'){
        lyricsContainer.innerHTML = 'No artist/song found'
    }
    else {
        lyricsContainer.innerHTML = data.lyrics
        lyricsContainer.style.padding = '20px'
        lyricsContainer.style.lineHeight = '175%'
    }
})
})
