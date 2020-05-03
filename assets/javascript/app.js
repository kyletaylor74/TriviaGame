
$(document).ready(function() {

const triviaQuestions = [
    {
        question: "What is Captain Americas shield made of?",
        choices: ["Steel","Vibranium","Iron","Calcium"],
        correctAnswer: "Vibranium"
    },

    {
        question: "What is the name Tony Starks second edition AI?",
        choices: [" Jarvis","Geeves","Friday","Albert"],
        correctAnswer: "Friday"
    },

    {
        question: "Which Avenger joined the guardians of the galaxy?",
        choices: ["Thor","Hulk","Hawkeye","Nick Fury"],
        correctAnswer: "Thor"
    },

    {
        question: "In civil war, who was responsible for Rody losing his ability to walk?",
        choices: ["Falcon","Black Panther","Scarlet Witch", "Vision"],
        correctAnswer: "Vision"
    },

    {
        question: "Where is Wakanda located?",
        choices: ["Europe","Central America","Chilie","Africa"],
        correctAnswer: "Africa"
    }
]

let counter = 15;
let currentQuestion = 0;
let score = 0;
let lost = 0;
let timer;

function nextQuestion(){
    const isQuestionDone = (triviaQuestions.length- 1) === currentQuestion;
    if(isQuestionDone) {
        console.log('Game Over!')
    } else {
        currentQuestion++;
        setupQuestion()
    }
    
}



function timeUp(){
    clearInterval(timer);

    lost++;

    nextQuestion();
}


function countDown(){
    counter--;

    $('#time').html('Timer:' + counter)

    if (counter === 0) {
        timeUp();
    }
}


function setupQuestion() {
    counter = 15;
    timer = setInterval(countDown,1000)

    const question = triviaQuestions[currentQuestion].question;
    const choices = triviaQuestions[currentQuestion].choices;

    $('#time').html('Timer:' + counter);
    $('#game').html(`
        <h4>${question}</h4>
        ${loadChoices(choices)}
    `);
}

function loadChoices(choices){
    let result = '';

    for (let i = 0; i < choices.length; i++){
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }
    return result
}


setupQuestion()
})