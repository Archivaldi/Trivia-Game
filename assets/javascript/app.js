// var question;
// var options = [];
// var questionTimer = 30;
// var answer;
// var correctAnswers = 0;
// var incorrectAnswers = 0;
// var unansweredQuestions = 0;



// function Option(str) {
//     this.text = str;
// }

// //reset timer for question
// function newTime() {
//     questionTimer = 30;
//     $("span").text(questionTimer + " Seconds");
// }

// //function for creating options on a screen
// function createOptions() {
//     for (var i = 0; i < options.length; i++) {
//         $("div").append("<button>");
//         $("div button:last-child").text(options[i].text);
//         $("div button:last-child").attr("class", "option");
//     }
// }


// ///////////////////////////////////////////////////////First Question////////////////////////////////////////////////////////////////
// function firstQuestion() {
//     question = "What library was created for CSS?"
//     $("h2").text(question);

//     function initOptions() {
//         var option1 = new Option("SF Public Library");
//         var option2 = new Option("jQuery");
//         var option3 = new Option("Bootstrap");
//         var option4 = new Option("Library of Congress");
//         options.push(option1, option2, option3, option4);
//     }
//     initOptions();
//     createOptions();
//     answer = options[2].text;
//     newTime();

// }

// //First screen. We push "Start" and then the game starts
// $("#start").on("click", function () {
//     $("div").append("<h1>");
//     $("h1").text("Totally Trivia Trivia!");
//     $("div").append("<h3>");
//     $("h3").text("Time remaining: ")
//     $("h3").append("<span>");
//     $("span").text(questionTimer + " Seconds")
//     $("div").append("<h2>");
//     $(this).remove();
//     var timerForDisplay = setInterval(timeDown, 1000);
//     firstQuestion();
//     timeDown();

//     $(".option").on("click", function () {
//         if ($(this).text() == answer) {
//             $("h2").text("Correct!");
//             correctAnswers += 1;
//             clearInterval(timerForDisplay);
//             $("button").remove();
//             options = [];
//             setTimeout(secondQuestion, 3 * 1000);
//         } else {
//             $("h2").text("Nope!");
//             $("div").append("<p>");
//             $("p").text("Correct answer was " + answer);
//             incorrectAnswers += 1;
//             clearInterval(timerForDisplay);
//             $("button").remove();
//             options = [];
//             setTimeout(secondQuestion, 3 * 1000);
//         }
//     })

//     //set timer from 30 to 0
//     function timeDown() {
//         if (questionTimer == 0) {
//             $("h2").text("Time is Out!");
//             $("div").append("<p>");
//             $("p").text("Correct answer was " + answer);
//             unansweredQuestions += 1;
//             clearInterval(timerForDisplay);
//             $("button").remove();
//             options = [];
//             setTimeout(secondQuestion, 3*1000);
//         } else {
//             questionTimer -= 1;
//             $("span").text(questionTimer + " Seconds");
//         }
//     }
// })

// /////////////////////////////////////////////////////////Second Question//////////////////////////////////////////////////////////////

// function secondQuestion() {
//     question = "Whadfgsdgf?"
//     $("h2").text(question);
//     $("p").remove();
//     var timerForDisplay = setInterval(timeDown, 1000);

//     function timeDown() {
//         if (questionTimer == 0) {
//             $("h2").text("Time is Out!");
//             $("div").append("<p>");
//             $("p").text("Correct answer was " + answer);
//             unansweredQuestions += 1;
//             clearInterval(timerForDisplay);
//             $("button").remove();
//             options = [];
//             setTimeout(resultScreen, 3*1000);
//         } else {
//             questionTimer -= 1;
//             $("span").text(questionTimer + " Seconds");
//         }
//     }


//     function initOptions() {
//         var option1 = new Option("SF Pubdfgdfy");
//         var option2 = new Option("jdfgdfgy");
//         var option3 = new Option("Bodfgdfgrap");
//         var option4 = new Option("Librdfgdfgngress");
//         options.push(option1, option2, option3, option4);
//     }
//     initOptions();
//     createOptions();
//     answer = options[3].text;
//     newTime();

//     $(".option").on("click", function () {
//         if ($(this).text() == answer) {
//             $("h2").text("Correct!");
//             correctAnswers += 1;
//             clearInterval(timerForDisplay);
//             $("button").remove();
//             options = [];
//             setTimeout(resultScreen, 3 * 1000);
//         } else {
//             $("h2").text("Nope!");
//             $("div").append("<p>");
//             $("p").text("Correct answer was " + answer);
//             incorrectAnswers += 1;
//             clearInterval(timerForDisplay);
//             $("button").remove();
//             options = [];
//             setTimeout(resultScreen, 3 * 1000);
//         }
//     })


// }

// /////////////////////////////////Third Question ///////////////////////////////////////////////

// ////////////////////////////////Finish Screen /////////////////////////////////////////////////

// function resultScreen(){
//     $("p").remove();
//     $("h2").text("All done! Here's how you did");
//     $("div").append("<p>");
//     $("div p:last-child").text("Correct Answers: " + correctAnswers);
//     $("div").append("<p>");
//     $("div p:last-child").text("Incorrect Answers: " + incorrectAnswers);
//     $("div").append("<p>");
//     $("div p:last-child").text("Unanswered: " + unansweredQuestions);
//     $("div").append("<button>");
//     $("button").text("Start Over?")
//     $("button").on("click", function() {
//         $("div").empty();
//         correctAnswers = 0;
//         incorrectAnswers = 0;
//         unansweredQuestions = 0;
//         options = [];
//         $("div").append("<h1>");
//     $("h1").text("Totally Trivia Trivia!");
//     $("div").append("<h3>");
//     $("h3").text("Time remaining: ")
//     $("h3").append("<span>");
//     $("span").text(questionTimer + " Seconds")
//     $("div").append("<h2>");
//     $(this).remove();
//     var timerForDisplay = setInterval(timeDown, 1000);
//     firstQuestion();
//     timeDown();

//     $(".option").on("click", function () {
//         if ($(this).text() == answer) {
//             $("h2").text("Correct!");
//             correctAnswers += 1;
//             clearInterval(timerForDisplay);
//             $("button").remove();
//             options = [];
//             setTimeout(secondQuestion, 3 * 1000);
//         } else {
//             $("h2").text("Nope!");
//             $("div").append("<p>");
//             $("p").text("Correct answer was " + answer);
//             incorrectAnswers += 1;
//             clearInterval(timerForDisplay);
//             $("button").remove();
//             options = [];
//             setTimeout(secondQuestion, 3 * 1000);
//         }
//     })

//     //set timer from 30 to 0
//     function timeDown() {
//         if (questionTimer == 0) {
//             $("h2").text("Time is Out!");
//             $("div").append("<p>");
//             $("p").text("Correct answer was " + answer);
//             unansweredQuestions += 1;
//             clearInterval(timerForDisplay);
//             $("button").remove();
//             options = [];
//             setTimeout(secondQuestion, 3*1000);
//         } else {
//             questionTimer -= 1;
//             $("span").text(questionTimer + " Seconds");
//         }
//     }

//     });

// }
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var questionTimer;
var counter = 0;

var allQuestions = [
    {
        question: "What library was created for CSS",
        options: ["SF Public Library", "jQuery", "Bootstrap", "Library of Congress"],
        answer: "Bootstrap",
    },

    {
        question: "Im a second question",
        options: ["SF Public Library", "jQuery", "Bootstrap", "Library of Congress"],
        answer: "jQuery",
    },
    {
        question: "Im a beetween question",
        options: ["SF Public Library", "jQuery", "Bootstrap", "Library of Congress"],
        answer: "jQuery",
    },
    {
        question: "Im a third question",
        options: ["SF Public Library", "jQuery", "Bootstrap", "Library of Congress"],
        answer: "jQuery",
    },
    {
        question: "Im a fourth question",
        options: ["SF Public Library", "jQuery", "Bootstrap", "Library of Congress"],
        answer: "jQuery",
    },
    {
        question: "Im a fifth question",
        options: ["SF Public Library", "jQuery", "Bootstrap", "Library of Congress"],
        answer: "jQuery",
    },
];

function createQuestion() {

    $("button").remove();
    $("h2").text(allQuestions[counter].question);

    for (var p = 0; p < allQuestions[counter].options.length; p++) {
        $("div").append("<button>");
        $("div button:last-child").text(allQuestions[counter].options[p]);
        $("div button:last-child").attr("value", allQuestions[counter].options[p]);
        $("div button:last-child").attr("class", "option");
    }
}

$(document).on("click", ".option", function () {
    var userChoice = $(this).val();
    if (userChoice == allQuestions[counter].answer) {
        correctAnswers += 1;
        clearInterval(timerForDisplay);
        setTimeout(nextQuestion, 3000);
    } else {
        clearInterval(timerForDisplay);
        incorrectAnswers += 1;
        setTimeout(nextQuestion, 3000);
    }
})

function resultScreen() {
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


function nextQuestion() {
    if (counter == allQuestions.length - 1) {
        resultScreen();
    } else {
        questionTimer = 30;
        $("span").text(questionTimer + " Seconds");
        timerForDisplay = setInterval(timeDown, 1000);
        counter += 1;
        $("p").remove();
        createQuestion();
    }
}

function timeDown() {
    if (questionTimer == 0) {
        $("h2").text("Time is Out!");
        $("div").append("<p>");
        $("p").text("Correct answer was " + allQuestions[counter].answer);
        unansweredQuestions += 1;
        clearInterval(timerForDisplay);
        $("button").remove();
        setTimeout(nextQuestion, 3000);
    } else {
        questionTimer -= 1;
        $("span").text(questionTimer + " Seconds");
    }
}

//works for all buttons with id "start"
$(document).on('click', '#start', function () {
    timerForDisplay = setInterval(timeDown, 1000);
    //clean div for every question
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredQuestions = 0;
    counter = 0;
    questionTimer = 30;
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

