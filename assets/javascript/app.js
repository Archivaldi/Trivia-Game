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


function Option(str) {
    this.text = str;
}


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
        timeDown();

        $(".option").on("click", function () {
            if ($(this).text() == answer) {
                $("h2").text("Correct!");
                correctAnswers += 1;
                clearInterval(timerForDisplay);
                $("button").remove();
            } else {
                $("h2").text("Nope!");
                $("div").append("<p>");
                $("p").text("Correct answer was " + answer);
                incorrectAnswers =+ 1;
                clearInterval(timerForDisplay);
                $("button").remove();
            }
    })

    //set timer from 30 to 0
function timeDown() {
    if (questionTimer == 0) {
        $("h2").text("Time is Out!");
        $("div").append("<p>");
        $("p").text("Correct answer was " + answer);
        unansweredQuestions += 1;
        clearInterval(timerForDisplay);
        $("button").remove();
    } else {
        questionTimer -= 1;
        $("span").text(questionTimer + " Seconds");
    }
    }
})