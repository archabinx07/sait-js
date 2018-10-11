// function locationHref() {
//     loacation.href = "#top";
// }
// function locationReplace() {
//     loacation.replace = "#top";
// }



console.log(navigator.userAgent);
console.log(navigator.vendor);
console.log(navigator.platform);



function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    var speed = position.coords.speed;
    document.write(latitude + ", " + longitude);
}
// navigator.geolocation.getCurrentPosition(success);

function geoError(errorObj) {
    alert("Uh oh, something went wrong");
}
// navigator.geolocation.getCurrentPosition(success, geoError);
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, geoError);
} 


console.log(screen.height);
console.log(screen.width);
console.log(screen.colorDepth);
console.log(screen.orientation);


document.bgColor = "gray";


