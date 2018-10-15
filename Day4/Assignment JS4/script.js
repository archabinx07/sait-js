var quotes = [
      '"If you think nobody cares if youre alive, try missing a couple of payments." - John Doe',
      '"Maybe you should eat some makeup so you can be pretty on the inside too." - Unknown User',
      '"A bank is a place that will lend you money if you can prove that you dont need it." - Clown IT',
      '"Doing nothing is hard, you never know when youre done." - Lizzy Luzzy',
      '"An apple a day keeps anyone away if you throw it hard enough." -Spider Man'
    ]
    // .sort(function() {
    //     return 0.8 - Math.random();
    // })
    // displayQuotes = "";
  
    var paragraph = document.getElementById("quotesDiv");
    paragraph.innerHTML = "";
    var qPlace = 0;

    var timerId = function() {
        qPlace++;
        if (qPlace === 5) { 
        qPlace = 0;
    }

    paragraph.innerHTML=quotes[qPlace];
    // for (var i = 0; i < quotes.length; i++) {
        // displayQuotes = '<p>"' + quotes[i][0] + '" - <em>' + quotes[i][1] + '</em></p>';
    // }
    // document.getElementById("quotes").innerHTML = displayQuotes;

  
  };
  setInterval(timerId, 3000);



var x = 0;
function nextItem() {
    x = x + 1; 
    x = x % quotes.length; 
    return quotes[x]; 
}

function prevItem() {
    if (x === 0) { 
        x = quotes.length;
    }
    x = x - 1;
    return quotes[x];
}


var backButton = document.getElementById("backBtn");
    backButton.addEventListener("click", function (event) {  
    document.getElementById('quotesDiv').textContent = prevItem();
});

var forwButton = document.getElementById("nextBtn");
    forwButton.addEventListener("click", function (event) {  
    document.getElementById('quotesDiv').textContent = nextItem();
});
