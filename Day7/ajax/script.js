fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response) {
    // console.log(response);
    return response.json();
})
.then(function(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].username);
        console.log(data[i].id);
    }
})

//create the content that you want
var user = {
    username: "wdelgado",
    id: 780
}


//First Method
function sendData(url) {
    fetch(url, {
    //set your method
    method: "POST",

    //set your headers
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify(user)
})
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
})
}
sendData("https://jsonplaceholder.typicode.com/users", user);


//Second Method
//fetch the url
// fetch("https://jsonplaceholder.typicode.com/users", {
//     //set your method
//     method: "POST",

//     //set your headers
//     headers: {
//         "Content-Type" : "application/json"
//     },
//     body: JSON.stringify(user)
// })
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     console.log(data);
// })


//ERRORS
fetch("https://jsonplaceholder.typicode.com/404")
.then(function(response) {
    if(!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
})
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.log("The error:", error);
})

