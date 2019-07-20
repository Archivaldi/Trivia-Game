var correctAnswers = 0;    //create var for counting correct questions 
var incorrectAnswers = 0;  //create var for counting incorrect questions 
var unansweredQuestions = 0; //create var for counting unasnswered questions 
var questionTimer;          //var for setting timer
var counter = 0;            //var for switching between questions


//create all questions like objects
var allQuestions = [
    {
        question: "What library was created for CSS?",
        options: ["SF Public Library", "jQuery", "Bootstrap", "Library of Congress"],
        answer: "Bootstrap",
        gifCard: "assets/images/bootstrap.gif"
    },

    {
        question: "Which sign works with jQuery?",
        options: ["$", "Stop", "%", "!"],
        answer: "$",
        gifCard: "assets/images/dollar.gif"
    },
    {
        question: "What sign we need to use for choosing element with ID in CSS?",
        options: ["{", "*", "&", "#"],
        answer: "#",
        gifCard: "assets/images/hashtag.gif"
    },
    {
        question: "What function we need to use to make element cleared in jQuery?",
        options: [".remove()", ".empty()", ".append()", ".text()"],
        answer: ".empty()",
        gifCard: "assets/images/empty.gif"
    },
    {
        question: "What we use to create an array?",
        options: ["()", "{}", ":", "[]"],
        answer: "[]",
        gifCard: "assets/images/brackets.gif"
    },
    {
        question: "Which Of The HTML5 Elements Support Media Content?",
        options: ["<audio>", "<video>", "<track>", "All of them"],
        answer: "All of them",
        gifCard: "assets/images/allOfThem.gif"
    },
    {
        question: "How many components in CSS Box Model?",
        options: ["4", "2", "7", "5"],
        answer: "4",
        gifCard: "assets/images/four.gif"
    },
    {
        question: "Choose a boolean",
        options: ["73", "Table", "undefined", "false"],
        answer: "false",
        gifCard: "assets/images/false.gif"
    },
    {
        question: "What option is Popup Box available In JavaScript?",
        options: ["alert", "confirm", "prompt", "All of them"],
        answer: "All of them",
        gifCard: "assets/images/everyone.gif"
    },
    {
        question: "What we use to declare a variable?",
        options: ["=", "==", "===", "Any of them"],
        answer: "=",
        gifCard: "assets/images/equal.gif"
    },
];

//function for making every question
function createQuestion() {

    $("img").remove();
    $("h2").text(allQuestions[counter].question);

    for (var p = 0; p < allQuestions[counter].options.length; p++) {
        $("div").append("<button>");
        $("div button:last-child").text(allQuestions[counter].options[p]);
        $("div button:last-child").attr("value", allQuestions[counter].options[p]);
        $("div button:last-child").attr("class", "option");
        $("div button:last-child").attr("disabled", false);
    }
}

//function for message with results
function resultScreen() {
    $("img").remove();
    $("button").remove();
    $("h2").text("All done! Here's how you did:");
    $("div").append("<p>");
    $("div p:last-child").text("Correct answers: " + correctAnswers);
    $("div").append("<p>");
    $("div p:last-child").text("Incorrect answers: " + incorrectAnswers);
    $("div").append("<p>");
    $("div p:last-child").text("Unanswered: " + unansweredQuestions);
    $("div").append("<button>");
    $("button").text("Again?");
    $("button").attr("id", "start");
}

//function for swithing between questions
function nextQuestion() {
    if (counter == allQuestions.length - 1) {
        resultScreen();
    } else {
        questionTimer = 10;
        $("span").text(questionTimer + " Seconds");
        timerForDisplay = setInterval(timeDown, 1000);
        counter += 1;
        $("p").remove();
        $("img").remove();
        createQuestion();
    }
}

//timer function
function timeDown() {
    if (questionTimer == 0) {
        $("h2").text("Time is Out!");
        $("div").append("<p>");
        $("p").text("Correct answer was " + allQuestions[counter].answer);
        unansweredQuestions += 1;
        $("div").append("<img>");
        $("img").attr("src", allQuestions[counter].gifCard)
        clearInterval(timerForDisplay);
        $("button").remove();
        setTimeout(nextQuestion, 5000);
    } else {
        questionTimer -= 1;
        $("span").text(questionTimer + " Seconds");
    }
}

//function for start 
//works for all buttons with id "start" (old one and new in results)
$(document).on('click', '#start', function () {
    timerForDisplay = setInterval(timeDown, 1000);
    //clean div for every question
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredQuestions = 0;
    counter = 0;
    questionTimer = 10;
    $("div").empty();
    $("div").append("<h1>");
    $("h1").text("Totally Trivia Trivia!");
    $("div").append("<h3>");
    $("h3").text("Time remaining: ")
    $("h3").append("<span>");
    $("span").text(questionTimer + " Seconds")
    $("div").append("<h2>");
    createQuestion();
})

//function for answering
$(document).on("click", ".option", function () {
    var userChoice = $(this).val();
    if (userChoice == allQuestions[counter].answer) {
        correctAnswers += 1;
        $("button").remove();
        $("h2").text("Correct!");
        $("div").append("<img>");
        $("img").attr("src", allQuestions[counter].gifCard)
        $("button").attr("disabled", true);
        clearInterval(timerForDisplay);
        setTimeout(nextQuestion, 5000);
    } else {
        $("button").remove();
        $("h2").text("Nope!");
        $("div").append("<p>");
        $("p").text("Correct answer was " + allQuestions[counter].answer);
        $("div").append("<img>");
        $("img").attr("src", allQuestions[counter].gifCard)
        $("button").attr("disabled", true);
        clearInterval(timerForDisplay);
        incorrectAnswers += 1;
        setTimeout(nextQuestion, 5000);
    }
})
