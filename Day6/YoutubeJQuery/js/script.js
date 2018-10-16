
//Youtube JQuery!!!
var links = $('a');
links.each(function() {
    var link = $(this);
    var href = link.attr("href");
    var thumbnail = youtube.generateThumbnailUrl(href);
    var img = $("<img src=" + thumbnail + ">")
    link.append(img);
});
