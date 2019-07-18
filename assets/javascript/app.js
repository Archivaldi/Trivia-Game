var question;
var options = [];
var questionTimer = 30;
var resetTimer = 3;

function newTime () {
    questionTimer = 30;
    $("span").text(questionTimer);
}

function createOptions() {
    for (var i = 0; i < options.length; i++) {
        $("div").append("<p>").text(options[i]);
    }
}

function timeDown() {
    questionTimer -= 1;
    $("span").text(questionTimer);
}

var timerForDisplay = setInterval(timeDown, 1000);s