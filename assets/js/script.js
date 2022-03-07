var startButton = document.querySelector(".start-btn button"); 
var infoBox = document.querySelector(".info-box"); 
var exitButton = infoBox.querySelector(".buttons .quit"); 
var continueButton = infoBox.querySelector(".buttons .continue"); 
var quizForm = document.querySelector(".quiz-cont");
var nextButton = quizForm.querySelector(".next-btn");
var queCompleted = quizForm.querySelector(".que-left");
var countdown = quizForm.querySelector(".timer .timer-countdown");
var questionCount = 0;
var queNumStart = 1;
var counter;

var result = document.querySelector(".result-land");
var userScore = 0;




// Start button is clicked
var startQuiz = function() {
    infoBox.classList.add("activeInfo");
}
// Exit button is clicked before questions
var endQuiz = function() {
    infoBox.classList.remove("activeInfo");
}
// Continue button is clicked
var contQuiz = function() {
    infoBox.classList.remove("activeInfo");
    quizForm.classList.add("activeQuiz")
    showQuestions(0);
    queCounter(1);
    startTimer(60);
}

// Next button is clicked
var nextQuestion = function() {
    if (questionCount < quizQuestions.length - 1) {
        questionCount++;
        queNumStart++;
        showQuestions(questionCount);
        queCounter(queNumStart);
    } else {
        showResults();
    }
}

// Game is over
var restartQuiz = result.querySelector(".buttons .restart");
var quitQuiz = result.querySelector(".buttons .exit");
var showResults = function() {
    infoBox.classList.remove("activeInfo");
    quizForm.classList.remove("activeQuiz");
    result.classList.add("activeResult");
    var scoreText = document.querySelector(".result-land .score-text");
    var scoreNewText = '<span>Your score is: '+ userScore +'</span>'
    scoreText.innerHTML = scoreNewText
}

// Press Exit in Results
var exitQuiz = function() {
    document.location.reload();
}

// Press Retry in Results
var retryQuiz = function() {
    document.location.reload();
}

// Timer function
var startTimer = function(time) {
    counter = setInterval(timer, 1000)
    function timer() {
        countdown.textContent = time;
        time--;
        if (time <= 0) {
            clearInterval(counter)
            countdown.textContent = "0";
            showResults();
        }
    }
}





// Pull the question and options from the object quizQuestions
function showQuestions(index) {
    var questionText = document.querySelector(".que-text")
    var optionList = document.querySelector(".option-list");
    var questionHeader = '<span>'+ quizQuestions[index].question +'</span>'
    var optionText = '<div class="option"><span>'+ quizQuestions[index].options[0] +'</span></div>'
                        + '<div class="option"><span>'+ quizQuestions[index].options[1] +'</span></div>'
                        + '<div class="option"><span>'+ quizQuestions[index].options[2] +'</span></div>'
                        + '<div class="option"><span>'+ quizQuestions[index].options[3] +'</span></div>';
    questionText.innerHTML = questionHeader;
    optionList.innerHTML = optionText
    var option = optionList.querySelectorAll(".option")
    for (var i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer) {
    var userAnswer = answer.textContent;
    var correctAnswer = quizQuestions[questionCount].answer;  
    if (userAnswer === correctAnswer) {
        userScore += 1;
        console.log(userScore);
        nextQuestion();
    } else {
        nextQuestion();
    }
}

// Update questions left counter
function queCounter(index) {
    var queDoneCount = '<span><p>'+ queNumStart +'</p><p>of</p><p>5</p>Questions</span>';
    queCompleted.innerHTML = queDoneCount;
}







var quizQuestions = [
    {
        num:  1,
        question: "Which is not a valid data type in Javascript?",
        answer: "float",
        options: [
            "undefined",
            "boolean",
            "float",
            "number",]
    },
    {
        num: 2,
        question: "What is the value called in CSS that defines colors such as the following: #FFFF00?",
        answer: "hex value",
        options: [
            "decimal value",
            "rgb value",
            "hex value",
            "color value",]
    },
    {
        num: 3,
        question: "Which jQuery method is used to insert content at the END of a selected element?",
        answer: "append()",
        options: [
            "final()",
            "append()",
            "prepend()",
            "after()",]
    },
    {
        num: 4,
        question: "What is the name of the statement used to exit or end a loop?",
        answer: "break statement",
        options: [
            "falter statement",
            "conditional statement",
            "close statement",
            "break statement",]
    },
    {
        num: 5,
        question: "a = 1; while a <= 10 { print('a is ', a) }; a+=1; ... What will happen?",
        answer: "prints 'a is 1', 'a is 2'... etc, until 'a is 10' and the loop stops.",
        options: [
            "prints 'a is 1' ten times on the screen.",
            "undefined",
            "prints 'a is 1', 'a is 2'... etc, until 'a is 10' and the loop stops.",
            "prints 'a is 1' once.",]
    },
];


// Event listeners 

startButton.addEventListener("click", startQuiz);
exitButton.addEventListener("click", endQuiz);
continueButton.addEventListener("click", contQuiz);
nextButton.addEventListener("click", nextQuestion);
quitQuiz.addEventListener("click", exitQuiz);
restartQuiz.addEventListener("click", retryQuiz);