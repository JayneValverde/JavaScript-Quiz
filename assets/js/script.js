
let userName = document.querySelector("#userName");
let headerText = document.querySelector("#headerText");
let greetingInput = document.querySelector("#greetingInput");

let quizEl = document.querySelector("#quizEl");
let endScoreEl = document.querySelector("#endScoreEl");
let scoreEl = document.querySelector("#scoreEl");

let questionEL = document.querySelector("#question");
let choicesEl = document.querySelector("#choices");

let iterationNumber = 0;
let qnChoice = "";
let score = 0;

// TIMER
let timerStart = 60;
const timerEl = document.getElementById("timer");

// QUESTIONS/ANSWERS ARRAY
var questions = [
    {
        title: 'What language defines the behavior of a web page?',
        choices: ["HTML", "CSS", "XML", "JavaScript"],
        answer: 'JavaScript',
    },
    {
        title: 'In JavaScript, a symbol used to terminate a statment. ',
        choices: ["Comma", "Semi-colon", "Parameters", "conjuction"],
        answer: 'Semi-colon',
    },
    {
        title: 'JavaScript ignores extra spaces.',
        choices: ["True", "False"],
        answer: 'True',
    },
    {
        title: 'Containers for holding values',
        choices: ["Parameters", "Function", "Fixed", "Variable"],
        answer: 'Variable',
    },
]

// START BUTTON
var startButton = document.getElementById("Start");
startButton.addEventListener("click", function () {
    greeting();
    getQuestion();
});

// Lets user submit name and reveals quiz upon submition 
function greeting() {
    headerText.innerHTML = "";
    headerText.innerHTML = "Hello " + userName.value + ", Welcome. ";
    greetingInput.style.display = "none";
    endScoreEl.style.display = "none";
    quizEl.style.display = "block"

    // QUIZ STARTS     
    timerId = setInterval(clocktick, 1000);
}

// GETTING QUESTIONS
var index = 0;

function getQuestion() {
    // get current question object from array
    var currentQuestion = questions[index];

    // update title with current question
    var titleEl = document.getElementById('questionEl');
    titleEl.textContent = currentQuestion.title;

    // clear out any old question choices
    choicesEl.innerHTML = '';

    // loop over choices
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        // create new button for each choice
        var choice = currentQuestion.choices[i];
        var choiceNode = document.createElement('button');
        choiceNode.setAttribute('class', 'choice');
        choiceNode.setAttribute('value', choice);

        choiceNode.textContent = i + 1 + '. ' + choice;
        choiceNode.onclick = checkChoice;
        // display on the page
        choicesEl.appendChild(choiceNode);
    }

}

// CHECKING ANSWERS
function checkChoice(event) {
    var userChoice = event.target.value;
    // console.log(userChoice)
    if (userChoice !== questions[index].answer) {
        timerStart -= 10;
    }
    index++;
    if (index === questions.length) {
        quizDone();
    }
    getQuestion()


}

// TIMER
function clocktick() {
    timerStart--
    // console.log("timestart", timeStart);
    timerEl.textContent = timerStart;
    if (timerStart <= 0) {
        quizDone()
    }
}

// LOCAL STORAGE FOR HIGH SCORES
let highScores =JSON.parse(localStorage.getItem("highScores")) || [];

// QUIZ DONE
function quizDone() {
    let scoreObj = {
        name: userName.value,
        score: timerStart
    }

    clearInterval(timerId);
    quizEl.style.display = "none";
    endScoreEl.style.display = "block";
    // scoreEl.innerHTML = timerStart;
    console.log(scoreObj)
    highScores.push(scoreObj);

    localStorage.setItem("highScores",JSON.stringify(highScores))

}
