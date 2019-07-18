var question;
var options = [];
var questionTimer = 30;
var resetTimer = 3;
var answer;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;

//reset timer for question
function newTime() {
    questionTimer = 30;
    $("span").text(questionTimer + " Seconds");
}

//create brand new paragraphs for options on page
function createOptions() {
    for (var i = 0; i < options.length; i++) {
        $("div").append("<button>");
        $("div button:last-child").text(options[i].text);
        $("div button:last-child").attr("class", "option");
    }
}

//activate timer

// question = "What's your name?";
// $("h2").text(question);

//
function Option(str) {
    this.text = str;
}


// function initOptions() {
//     var option1 = new Option ("Artur");
//     var option2 = new Option ("Arasdf");
//     var option3 = new Option ("asdfar");
//     var option4 = new Option ("asdfasur");
//     options.push(option1, option2, option3, option4);
// }


// initOptions();
// createOptions();

function firstQuestion() {
    question = "What library was created for CSS?"
    $("h2").text(question);

    function initOptions() {
        var option1 = new Option("SF Public Library");
        var option2 = new Option("jQuery");
        var option3 = new Option("Bootstrap");
        var option4 = new Option("Library of Congress");
        options.push(option1, option2, option3, option4);
    }
        initOptions();
        createOptions();
        answer = options[2].text;
        newTime();

}

$("#start").on("click", function() {
    $("div").append("<h1>");
    $("h1").text("Totally Trivia Trivia!");
    $("div").append("<h3>");
    $("h3").text("Time remaining: ")
    $("h3").append("<span>");
    $("span").text(questionTimer + " Seconds")
    $("div").append("<h2>");
    $(this).remove();
    var timerForDisplay = setInterval(timeDown, 1000);
    firstQuestion();

    $(".option").on("click", function () {
        if ($(this).text() == answer) {
            $("h2").text("Correct answer was " + answer);
            correctAnswers += 1;
            clearInterval(timerForDisplay);
        } else {
            $("h2").text("Correct answer was " + answer);
            incorrectAnswers =+ 1;
        }
    })

    //set timer from 30 to 0
function timeDown() {
    if (questionTimer == 0) {
        $("h2").text("Correct answer was " + answer);
        unansweredQuestions += 1;
        clearInterval(timerForDisplay);
    } else {
        questionTimer -= 1;
        $("span").text(questionTimer + " Seconds");
    }
    }
})
