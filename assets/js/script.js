var startButton = document.querySelector(".start-btn button"); 
var infoBox = document.querySelector(".info-box"); 
var exitButton = infoBox.querySelector(".buttons .quit"); 
var continueButton = infoBox.querySelector(".buttons .continue"); 
var quizForm = document.querySelector(".quiz-cont");
var nextButton = quizForm.querySelector(".next-btn");
var questionCount = 0;


// Start button is clicked
var startQuiz = function() {
    infoBox.classList.add("activeInfo");
}
// Exit button is clicked
var endQuiz = function() {
    infoBox.classList.remove("activeInfo");
}
// Continue button is clicked
var contQuiz = function() {
    infoBox.classList.remove("activeInfo");
    quizForm.classList.add("activeQuiz")
    showQuestions(3);
}
// Next button is clicked
var nextQuestion = function() {
    questionCount++;
    showQuestions(questionCount);

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
}



var quizQuestions = [
    {
        num: 1,
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
        question: "a = 1; while a <= 10: print('a is ', a); a+=1; ... What will happen?",
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