var quizQuest = document.getElementById("question");
var quizOpt1 = document.getElementById("option1");
var quizOpt2 = document.getElementById("option2");
var quizOpt3 = document.getElementById("option3");
var next = document.getElementById("next");
var start = document.getElementById("start");
var currentQuestion = 0;
var answer = "";
var scoreSpot = document.getElementById("score");
var scoreLog = document.getElementById("quizscore");
// // Timer and High Score Variables
var timer = document.getElementById("timer");
var btn_submit_initials = document.getElementById("btn_submit_initials");
var score = 0;
var interval;
var highScores = new Array();
var initials = document.getElementById("#initials")




var questions = [
    {
        question: "What is CSS used for?",
        option1: "Style the HTML page",
        option2: "Style the JAVASCRIPT page",
        option3: "Creating functionality on a webpage",
        answer: "Style the HTML page"
    },
    {
        question: "What do you use to end a line of code in JAVASCRIPT?",
        option1: "An ! ",
        option2: "An ? ",
        option3: "An ; ",
        answer: "An ; "
    },
    {
        question: "What does HTML stand for?",
        option1: "Hypertext Markup Language",
        option2: "Hypertext Model Looping",
        option3: "Hyper Mode Light-speed",
        answer: "Hypertext Markup Language"
    },
    {
        question: "How do you specify an ID of container in CSS?",
        option1: "<container/>",
        option2: "#container",
        option3: ".container",
        answer: "#container"
    },
    {
        question: "What can be used in a JAVASCRIPT ARRAY = []",
        option1: "Numbers & Strings",
        option2: "Functions",
        option3: "Anything",
        answer: "Anything"
    },
    {
        question: "In HTML, what is the difference between a <section> and a <div>",
        option1: "A div is where you place misc text",
        option2: "A section is where you use <p> tags",
        option3: "Nothing, just organization",
        answer: "Nothing, just organization"
    }

];

// start game function
function startGame() {
    event.preventDefault();
    start.classList.add("start-hidden");


    quizQuest.textContent = questions[currentQuestion].question;
    quizOpt1.textContent = questions[currentQuestion].option1;
    quizOpt2.textContent = questions[currentQuestion].option2;
    quizOpt3.textContent = questions[currentQuestion].option3;
    startTimer();



};

function nextQuest() {
    event.preventDefault();
    quizQuest.textContent = questions[currentQuestion].question;
    quizOpt1.textContent = questions[currentQuestion].option1;
    quizOpt2.textContent = questions[currentQuestion].option2;
    quizOpt3.textContent = questions[currentQuestion].option3
    // currentQuestion += 1;
};


function storeHighScore() {
    var initials = document.getElementById("initials").value;
    localStorage.setItem("initials", initials);
    playerInitialsAndScore = localStorage.getItem('initials') + ' - ' + score;
    highScores.push(playerInitialsAndScore);
    scoreLog.innerText = highScores.toString();
    scoreLog.creatElement("li").prepend( highScores );
}

function getInitials() {
    stopTimer();             // trying to set inner html for initials after timer stops but get an error
     
    document.getElementById("quiz").innerHTML =  "<input type='text' id='initials' value='' placeholder='Enter Your Initials Here'><button id='btn_submit_initials'>Submit</button>";

    document.getElementById("btn_submit_initials").addEventListener("click", storeHighScore);
}

function startTimer() {
    setTime = 60;
    interval = setInterval(function () {
        setTime += - 1;
        timer.textContent = setTime;
        if (setTime <= 0) {
            getInitials();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function setScore() {
    scoreSpot.textContent = score;
}

//  event listeners section
start.addEventListener("click", startGame);
next.addEventListener("click", nextQuest);

// option1 click event
option1.addEventListener("click", function (event) {
    var answer = event.target.textContent;
    if (answer === questions[currentQuestion].answer) {

        score += 1;
        setScore();

        alert("correct")

    }
    else {
        setTime += -10

        alert("wrong")
    }
    currentQuestion += 1;  // tried to go to next question after answering question but wont work
});

// option2 click event
option2.addEventListener("click", function (event) {
    var answer = event.target.textContent;
    if (answer === questions[currentQuestion].answer) {
        score += 1;

        setScore()
        alert("correct")

    }
    else {
        setTime += -10
        alert("wrong")
    }
    currentQuestion += 1; 
});

// option3 click event
option3.addEventListener("click", function (event) {
    var answer = event.target.textContent;
    if (answer === questions[currentQuestion].answer) {
        score += 1;

        setScore()
        alert("correct")

    }
    else {
        setTime += -10
        alert("wrong")
    }
    currentQuestion += 1;
})