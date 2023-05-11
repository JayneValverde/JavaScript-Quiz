
let userName = document.querySelector("#userName");
let headerText = document.querySelector("#headerText");
let greetingInput = document.querySelector("#greetingInput");

let quizEl = document.querySelector("#quizEl"); 
let endScoreEl = document.querySelector("#endScoreEl");

let question = document.querySelector("#question");
let choicesEl = document.querySelector("#choices");

let iterationNumber = 0;
let qnChoice = "";
let score = 0;

// TIMER
let timerStart = 60;
const timerEl = document.getElementById("timer");

// Question/Answer Array
var questions = [ 
    {
        title: 'What is David Bowies name in Twin Peaks?',
        choices: ["Leeland Palmer", "Phillip Jeffries", "Gordon Cole", "Bobby Briggs"],
        answer: 'Phillip Jeffries',
    },
    {
        title: 'What date did Agent Dale Cooper Arrice in Twin Peaks?',
        choices: ["February 24, 1989", "April 8, 1992", "March 31, 1987", "July 4, 1991"],
        answer: 'February 24, 1989',
    },
    {
        title: 'Was James always cool?',
        choices: ["No", "Yes"],
        answer: 'Yes',
    },
    {
        title: 'Who killed Laura Palmer',
        choices: ["Leeland Palmer", "Phillip Jeffries", "Gordon Cole", "Bobby Briggs"],
        answer: 'Leeland Palmer',
    },
    ]

// STARTBUTTON
var startButton=document.getElementById("Start");
startButton.addEventListener("click", function() {
    greeting();
    getQuestion();
});

// Lets user submit name and reveals quiz upon submition 
function greeting() {
    headerText.innerHTML = "";
    headerText.innerHTML ="Hello " + userName.value + ", Welcome. ";
    greetingInput.style.display = "none";
    endScoreEl.style.display = "none";
    quizEl.style.display = "block"

    // Quiz starts      
    timerId = setInterval(clocktick, 1000);
} 

// GETTING QUESTIONS
var index = 0;

function getQuestion() {
    // get current question object from array
    var currentQuestion = questions[index];
    
    // update title with current question
    var titleEl = document.getElementById('question');
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
    if(userChoice !== questions[index].answer){
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

// QUIZ DONE
function quizDone() {
    clearInterval(timerId);
    quizEl.style.display = "none";
    endScoreEl.style.display = "block";
}
