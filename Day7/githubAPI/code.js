var user = {
    username: "wdelgado",
    id: 780
}
//First Method
function getData(url) {
    fetch(url, {
})
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
})
}
getData("https://api.github.com/users/archabinx07/repos", user);



fetch('https://api.github.com/users/archabinx07')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data.avatar_url);
    console.log(data.repos_url);
    console.log(data.gists_url);
    console.log(data.url);
})

