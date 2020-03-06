var quizQuest = document.getElementById("question");
var quizOpt1 = document.getElementById("option1");
var quizOpt2 = document.getElementById("option2");
var quizOpt3 = document.getElementById("option3");
var next = document.getElementById("next");
var currentQuestion = 0;
// var totalSeconds = workMinutesInput;
// var secondsElapsed;
// var interval;




var questions = [
    {
        question: "What is CSS used for?",
        option1: "Style the HTML page",
        option2: "Style the JAVASCRIPT page",
        option3: "Creating functionality on a webpage",
        answer: "1"
    },
    {
        question: "What do you use to end a line of code in JAVASCRIPT?",
        option1: "An !",
        option2: "An ?",
        option3: "An ;",
        answer: "3"
    },
    {
        question: "What does HTML stand for?",
        option1: "Hypertext Markup Language",
        option2: "Hypertext Model Looping",
        option3: "Hyper Mode Light-speed",
        answer: "1"
    },
    {
        question: "How do you specify an ID of container in CSS?",
        option1: "<container/>",
        option2: "#container",
        option3: ".container",
        answer: "2"
    },
    {
        question: "What can be used in a JAVASCRIPT ARRAY = []",
        option1: "Numbers & Strings",
        option2: "Functions",
        option3: "Anything",
        answer: "3"
    },
    {
        question: "In HTML, what is the difference between a <section> and a <div>",
        option1: "A div is where you place misc text",
        option2: "A section is where you use <p> tags",
        option3: "Nothing, just organization",
        answer: "3"
    }

];


function startGame() {
    event.preventDefault();


quizQuest.textContent = questions[currentQuestion].question;
quizOpt1.textContent = questions[currentQuestion].option1;
quizOpt2.textContent = questions[currentQuestion].option2;
quizOpt3.textContent = questions[currentQuestion].option3;  

   currentQuestion += 1;
};

// var seconds = setInterval(function(){
//     if (parseInt(secondsDisplay.textContent) === 0) {
//       secondsDisplay.textContent = 59
//       minutesDisplay.textContent -= 1
//     } else {
//       secondsDisplay.textContent -= 1;

//     }


//     
    
//     
//   }, 1000);


next.addEventListener("click", startGame);