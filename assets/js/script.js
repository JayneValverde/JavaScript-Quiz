
let userName = document.querySelector("#userName");
let headerText = document.querySelector("#headerText");
let greetingInput = document.querySelector("#greetingInput");

let quiz = document.querySelector("#quiz");
let qn1Button = document.querySelector("#qn1Button");
let qn2Button = document.querySelector("#qn2Button");
let qn3Button = document.querySelector("#qn3Button");
let qn4Button = document.querySelector("#qn4Button");

let question = document.querySelector("#question");

let answerA = document.querySelector("#answerA");
let answerB = document.querySelector("#answerB");
let answerC = document.querySelector("#answerC");
let answerD = document.querySelector("#answerD");

let iterationNumber = 0;
let qnChoice = "";
let score = 0;

// Timer --------->
let timerStart = 60;
const timerEl = document.getElementById("timer");

// Arrays for questions
let questionList = [
    "1: What is David Bowies name in Twin Peaks?",
    "2: What date did Agent Dale Cooper Arrive in Twin Peaks?",
    "3: Was James always cool?",
    "4: Who killed Laura Palmer",
]

let aAnswerList = ["Leeland Palmer", "Phillip Jeffries", "Gordon Cole", "Bobby Briggs"]
let bAnswerList = ["February 24, 1989", "April 8, 1992", "March 31, 1987", "July 4, 1991"]
let cAnswerList = ["No", "Yes"]
let dAnswerList = ["Leeland Palmer", "Phillip Jeffries", "Gordon Cole", "Bobby Briggs"]

// Hides the quiz until name is submited
quiz.style.display = "none";
qn1Button.style.display = "none";
qn2Button.style.display = "none";
qn3Button.style.display = "none";
qn4Button.style.display = "none";

function reset() {
    answerA.style.color = "beige"; 
    answerB.style.color = "beige";
    answerC.style.color = "beige";
    answerD.style.color = "beige";
    
    question.innerHTML = questionList[iterationNumber];
    answerA.innerHTML = aAnswerList[iterationNumber];
    answerB.innerHTML = bAnswerList[iterationNumber];
    answerC.innerHTML = cAnswerList[iterationNumber];
    answerD.innerHTML = dAnswerList[iterationNumber];
}

// Lets user submit name and reveals quiz upon submition 
function greeting() {
    headerText.innerHTML = "";
    headerText.innerHTML ="Hello " + userName.value + ", Welcome. ";
    greetingInput.style.display = "none";
    quiz.style.display = "block"
    qn1Button.style.display = "block"
    question.innerHTML = questionList[iterationNumber];
    // Answers
    answerA.innerHTML = aAnswerList[iterationNumber];
    answerB.innerHTML = bAnswerList[iterationNumber];
    answerC.innerHTML = cAnswerList[iterationNumber];
    answerD.innerHTML = dAnswerList[iterationNumber];

    // quiz starts      
    timerId = setInterval(clocktick, 1000);

}

// Color change when answer chosen
function aFunction() {
    answerA.style.color = "pink"; 
    answerB.style.color = "beige";
    answerC.style.color = "beige";
    answerD.style.color = "beige"; 
    qnChoice = "a";
}

function bFunction() {
    answerA.style.color = "beige"; 
    answerB.style.color = "pink";
    answerC.style.color = "beige";
    answerD.style.color = "beige"; 
    qnChoice = "a";  
}

function cFunction() {
    answerA.style.color = "beige"; 
    answerB.style.color = "beige";
    answerC.style.color = "pink";
    answerD.style.color = "beige";
    qnChoice = "c"; 
}

function dFunction() {
    answerA.style.color = "beige"; 
    answerB.style.color = "beige";
    answerC.style.color = "beige";
    answerD.style.color = "pink";
    qnChoice = "d";
}

// funciton for score kept 
// CHANGE FOR TIME KEPT 
function submitQn1() {
    if (qnChoice === "b") {
        score += 1; 
    }
    qn1Button.style.display = "none"
    qn2Button.style.display = "block"
    iterationNumber += 1;

    reset ();
}
function submitQn2() {
    if (qnChoice === "b") {
        score += 1; 
    }
    qn2Button.style.display = "none"
    qn3Button.style.display = "block"
    iterationNumber += 1;
    
    reset();
}
function submitQn3() {
    if (qnChoice === "a") {
        score += 1; 
    }
    qn3Button.style.display = "none"
    qn4Button.style.display = "block"
    iterationNumber += 1;
   
   reset ();
}
function submitQn4() {
    if (qnChoice === "a") {
        score += 1; 
    }
    iterationNumber += 1;
    headerText.innerHTML = "Your score is " + score;
    quiz.style.display = "none"
    reset ();
}

// TIMER
function clocktick() {
    timerStart--
    // console.log("timestart", timeStart);
    timerEl.textContent = timerStart;
    if (timerStart === 0) {
        quizDone()
    }
}

function quizDone() {
    clearInterval(timerId);
    quizSections.style.display = "none";
    endScore.style.display = "block";
}

// timerId = setInterval(clocktick, 1000);