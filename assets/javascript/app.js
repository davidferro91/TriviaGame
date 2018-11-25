function newGame () {
    var questionBox = $("<div>");
    questionBox.addClass("col rounded text-center p-3 m-5");
    questionBox.attr("id", "question");
    var startBtn = $("<button>");
    startBtn.addClass("rounded p-2 m-2");
    startBtn.attr("id", "startButton");
    startBtn.append("Start");
    questionBox.append(startBtn);
    $("#questionHolder").append(questionBox);
}

newGame();

var questionCounter = 0;
var optRand = -1;
var questionArr = [];
var question1 = {
    question: "In what year did the Disney cartoon \"Steamboat Willie\" premiere?",
    correct: "1928",
    incorrect: ["1926", "1930", "1942"]
}
var question2 = {
    question: "Which fictional television character from the late 1980s had the catchphrase \"I kill me!\"?",
    correct: "ALF",
    incorrect: ["Cliff Clavin", "Rose Nylund", "Alex Keaton"]
}
var question3 = {
    question: "",
    correct: "",
    incorrect: ["", "", ""]
}
var question4 = {
    question: "",
    correct: "",
    incorrect: ["", "", ""]
}
var question5 = {
    question: "",
    correct: "",
    incorrect: ["", "", ""]
}
var question6 = {
    question: "",
    correct: "",
    incorrect: ["", "", ""]
}
var question7 = {
    question: "",
    correct: "",
    incorrect: ["", "", ""]
}
var question8 = {
    question: "",
    correct: "",
    incorrect: ["", "", ""]
}
var question9 = {
    question: "",
    correct: "",
    incorrect: ["", "", ""]
}
var question10 = {
    question: "",
    correct: "",
    incorrect: ["", "", ""]
}

questionArr[0] = question1;
questionArr[1] = question2;
questionArr[2] = question3;
questionArr[3] = question4;
questionArr[4] = question5;
questionArr[5] = question6;
questionArr[6] = question7;
questionArr[7] = question8;
questionArr[8] = question9;
questionArr[9] = question10;
console.log(questionArr);

function newQuestion (index) {
    var questionBox = $("<div>");
    questionBox.addClass("col rounded text-center p-3 m-5");
    questionBox.attr("id", "question");
    questionBox.append(questionArr[index].question);
    var options = [];
    for (var i = 0; i < 4; i++) {
        options[i] = $("<div>");
        options[i].addClass("row rounded justify-content-center p-3");
    }
    optRand = Math.floor(Math.random() * 4);
    options[optRand].attr("id", "correct");
    options[optRand].append(questionArr[index].correct);
    for (var i = 0; i < 3; i++) {
        options[(optRand + 1 + i)%4].attr("id", "incorrect");
        options[(optRand + 1 + i)%4].append(questionArr[index].incorrect[i]);
    }
    for (var i = 0; i < 4; i++) {
        questionBox.append(options[i]);
    }
    $("#questionHolder").append(questionBox);
}

$("#startButton").on("click", function() {
    $("#questionHolder").empty();
    newQuestion(questionCounter);
    questionCounter++;
});