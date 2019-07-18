var question;
var options = [];
var questionTimer = 30;
var resetTimer = 3;
var correctAnswer;

//reset timer for question
function newTime () {
    questionTimer = 30;
    $("span").text(questionTimer);
}

//create brand new paragraphs for options on page
function createOptions() {
    for (var i = 0; i < options.length; i++) {
        $("div").append("<p>");
        $("div p:last-child").text(options[i].text);
    }
}

//set timer from 30 to 0
function timeDown() {
    questionTimer -= 1;
    $("span").text(questionTimer);
}

//activate timer
function interval() {
    var timerForDisplay = setInterval(timeDown, 1000);
}

question = "What's your name?";
$("h2").text(question);

function Option(str){
    this.text = str;
}

function initOptions() {
    var option1 = new Option ("Artur");
    var option2 = new Option ("Arasdf");
    var option3 = new Option ("asdfar");
    var option4 = new Option ("asdfasur");
    options.push(option1, option2, option3, option4);
}

initOptions();
createOptions();