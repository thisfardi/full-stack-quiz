var quizQuestions = [
    {
        num = 1,
        question: "Which is not a valid data type in Javascript?",
        answer: "Float",
        options: [
            "undefined",
            "boolean",
            "float",
            "number",]
    },
    {
        num = 2,
        question: "What is the value called in CSS that defines colors such as the following: #FFFF00?",
        answer: "hex value",
        options: [
            "decimal value",
            "rgb value",
            "hex value",
            "color value",]
    },
    {
        num = 3,
        question: "Which jQuery method is used to insert content at the END of a selected element?",
        answer: "append()",
        options: [
            "final()",
            "append()",
            "prepend()",
            "after()",]
    },
    {
        num = 4,
        question: "What is the name of the statement used to exit or end a loop?",
        answer: "break statement",
        options: [
            "falter statement",
            "conditional statement",
            "close statement",
            "break statement",]
    },
    {
        num = 5,
        question: "a = 1; while a <= 10: print('a is ', a); a+=1; ... What will happen?",
        answer: "prints 'a is 1', 'a is 2'... etc, until 'a is 10' and the loop stops.",
        options: [
            "prints 'a is 1' ten times on the screen.",
            "undefined",
            "prints 'a is 1', 'a is 2'... etc, until 'a is 10' and the loop stops.",
            "prints 'a is 1' once.",]
    },
]

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score