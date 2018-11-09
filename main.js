var btn = document.getElementById('btn');
var text = document.getElementById('text');
var i = 0;
btn.addEventListener('click', function () {

    if (i == 0) {
        text.style.color = "lime";
        text.style.fontSize = "1rem";
        i = 1;
    }
    else if (i == 1) {
        text.style.color = "orange";
        text.style.fontSize = "1.5rem";
        i += 1;
    }
    else{
        text.style.color = "aliceblue";
        text.style.fontSize = "1rem";
        i = 0
    }
})